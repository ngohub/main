/**
 * NGOHUB — Cloudflare Worker (Zero-Secret CMS Publish & Form Webhook Proxy)
 * -------------------------------------------------------------------------
 * All sensitive credentials MUST be stored in Cloudflare Worker Secrets:
 *   - GITHUB_TOKEN             (Secret: Fine-grained PAT with Contents R/W on repo)
 *   - ADMIN_PASSWORD           (Secret: Strong admin passphrase for dashboard & publish)
 *   - GOOGLE_SHEETS_WEBHOOK_URL (Secret: Apps Script Web App URL for form submissions)
 *
 * Plaintext Environment Variables (wrangler.toml / Dashboard -> Variables):
 *   - GITHUB_OWNER             (e.g. "ngohub")
 *   - GITHUB_REPO              (e.g. "ngo-hub-cloudflare")
 *   - GITHUB_MIRROR_REPO       (optional, e.g. "ngohub-platform")
 *   - ALLOWED_ORIGIN           (e.g. "https://ngo-hub.com")
 *   - DATA_FILE_PATH           (default: "site-data.json")
 */

const ALLOWED_ORIGINS = [
  "https://ngo-hub.com",
  "https://www.ngo-hub.com",
  "https://test.ngo-hub.com",
  "https://ngohub-staging.pages.dev"
];

function getCorsOrigin(request, env) {
  const origin = request.headers.get("Origin") || "";
  const isLocalhost = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
  if (isLocalhost) return origin;
  if (env.ALLOWED_ORIGIN && origin === env.ALLOWED_ORIGIN) return origin;
  if (ALLOWED_ORIGINS.includes(origin)) return origin;
  return env.ALLOWED_ORIGIN || "https://ngo-hub.com";
}

function jsonResponse(body, status, headers) {
  return new Response(JSON.stringify(body), { status, headers });
}

async function commitFileToGitHub(repoOwner, repoName, filePath, contentObj, commitMessage, token) {
  const ghUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;
  const ghHeaders = {
    "Authorization": `Bearer ${token}`,
    "Accept": "application/vnd.github+json",
    "User-Agent": "NGOHUB-Static-CMS-Worker"
  };

  let sha;
  const getRes = await fetch(ghUrl, { headers: ghHeaders });
  if (getRes.ok) {
    const existing = await getRes.json();
    sha = existing.sha;
  }

  const bytes = new TextEncoder().encode(JSON.stringify(contentObj, null, 2));
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);

  const putRes = await fetch(ghUrl, {
    method: "PUT",
    headers: { ...ghHeaders, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: commitMessage || "CMS update from NGOHUB Admin Dashboard",
      content: btoa(bin),
      ...(sha ? { sha } : {})
    })
  });

  return putRes;
}

export default {
  async fetch(request, env) {
    const corsOrigin = getCorsOrigin(request, env);
    const headers = {
      "Access-Control-Allow-Origin": corsOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Content-Type": "application/json; charset=utf-8"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== "POST") {
      return jsonResponse({ error: "Method not allowed" }, 405, headers);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: "صيغة JSON غير صالحة" }, 400, headers);
    }

    // 1. Public Form Submission Proxy (hides GOOGLE_SHEETS_WEBHOOK_URL from browser)
    if (body.action === "submit") {
      if (!env.GOOGLE_SHEETS_WEBHOOK_URL) {
        return jsonResponse({ error: "لم يتم ضبط GOOGLE_SHEETS_WEBHOOK_URL في أسرار العامل السحابي" }, 503, headers);
      }
      const payload = body.payload && typeof body.payload === "object" ? body.payload : {};
      try {
        await fetch(env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload)
        });
        return jsonResponse({ ok: true, forwarded: true }, 200, headers);
      } catch (err) {
        return jsonResponse({ error: "تعذر الاتصال بمحرك الجداول السحابي", details: String(err) }, 502, headers);
      }
    }

    // 2. Admin-Only Actions: Require ADMIN_PASSWORD in Authorization Bearer header
    const auth = request.headers.get("Authorization") || "";
    if (!env.ADMIN_PASSWORD || auth !== `Bearer ${env.ADMIN_PASSWORD}`) {
      return jsonResponse({ error: "بيانات الدخول غير صحيحة أو الجلسة غير مصرح لها" }, 401, headers);
    }

    if (body.action === "verify") {
      return jsonResponse({ ok: true, role: "admin" }, 200, headers);
    }

    if (body.action === "publish") {
      if (!body.data || typeof body.data !== "object") {
        return jsonResponse({ error: "بيانات النشر مفقودة أو غير صالحة" }, 400, headers);
      }
      if (!env.GITHUB_TOKEN) {
        return jsonResponse({ error: "لم يتم ضبط GITHUB_TOKEN في أسرار العامل السحابي" }, 503, headers);
      }

      // Allow updating only whitelisted JSON data files
      const allowedFiles = ["site-data.json", "grants.json"];
      const requestedPath = body.path || env.DATA_FILE_PATH || "site-data.json";
      const filePath = allowedFiles.includes(requestedPath) ? requestedPath : "site-data.json";

      const owner = env.GITHUB_OWNER || "ngohub";
      const primaryRepo = env.GITHUB_REPO || "ngo-hub-cloudflare";

      const primaryRes = await commitFileToGitHub(
        owner,
        primaryRepo,
        filePath,
        body.data,
        body.message || `cms: publish ${filePath} from admin dashboard`,
        env.GITHUB_TOKEN
      );

      if (!primaryRes.ok) {
        const errText = await primaryRes.text();
        return jsonResponse({ error: "فشل النشر على GitHub", details: errText }, 502, headers);
      }

      // Optional mirror repository commit (e.g. ngohub-platform)
      if (env.GITHUB_MIRROR_REPO) {
        await commitFileToGitHub(
          owner,
          env.GITHUB_MIRROR_REPO,
          filePath,
          body.data,
          body.message || `cms: sync ${filePath} from admin dashboard`,
          env.GITHUB_TOKEN
        ).catch(() => {});
      }

      return jsonResponse({
        ok: true,
        file: filePath,
        publishedAt: new Date().toISOString()
      }, 200, headers);
    }

    return jsonResponse({ error: "طلب غير مدعوم" }, 400, headers);
  }
};
