/**
 * NGOHUB — Full-Site Friendly Admin CMS Controller (Zero-Secret Client)
 * Credentials and GitHub tokens live strictly in Cloudflare Worker Secrets
 * (or Firebase Auth Admin session for viewing).
 */

const CMS_DRAFT_KEY = 'ngohub_site_data_draft';
const CMS_TOKEN_SESSION_KEY = 'ngohub_cms_token';
const CMS_WORKER_URL_KEY = 'ngohub_cms_worker_url';
const CMS_LOG_KEY = 'ngohub_cms_activity_log';

let cmsData = null;
let cmsPublishedBaseline = null;
let cmsGrantsList = [];
let cmsUnsaved = false;

function showCmsToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const t = document.createElement('div');
  t.className = 'toast show';
  t.style.cssText = 'background:#0f172a; color:#fff; padding:12px 18px; border-radius:12px; margin-bottom:8px; font-weight:700; box-shadow:0 10px 25px rgba(0,0,0,0.2);';
  t.textContent = msg;
  container.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

function logCmsActivity(actionText) {
  const logs = JSON.parse(localStorage.getItem(CMS_LOG_KEY) || '[]');
  const actor = (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.isCurrentUserAdmin && window.NGOHUB_FIREBASE.isCurrentUserAdmin()) ? 'المشرف العام' : 'مدير اللوحة';
  logs.unshift(`[${new Date().toLocaleString('ar-EG')}] (${actor}) — ${actionText}`);
  localStorage.setItem(CMS_LOG_KEY, JSON.stringify(logs.slice(0, 100)));
  renderCmsActivityLog();
}

function downloadCmsLogTxt() {
  const logs = JSON.parse(localStorage.getItem(CMS_LOG_KEY) || '[]');
  const txt = logs.length ? logs.join('\n') : 'لا توجد سجلات مسجلة.';
  const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'cms_log.txt';
  a.click();
  URL.revokeObjectURL(url);
}

function clearCmsActivityLog() {
  if (!window.confirm('هل تريد مسح سجل التعديلات المحلي؟')) return;
  localStorage.removeItem(CMS_LOG_KEY);
  renderCmsActivityLog();
  showCmsToast('تم مسح السجل.');
}

function renderCmsActivityLog() {
  const box = document.getElementById('cmsAuditLogBox');
  if (!box) return;
  const logs = JSON.parse(localStorage.getItem(CMS_LOG_KEY) || '[]');
  if (!logs.length) {
    box.textContent = 'لم يتم تسجيل أي تعديلات بعد في هذه الجلسة.';
    return;
  }
  box.innerHTML = logs.map(l => `<div style="padding:4px 0; border-bottom:1px dashed #cbd5e1;">${l}</div>`).join('');
}

function isFirebaseAdminAuthenticated() {
  try {
    if (window.NGOHUB_FIREBASE && typeof window.NGOHUB_FIREBASE.isCurrentUserAdmin === 'function') {
      return window.NGOHUB_FIREBASE.isCurrentUserAdmin();
    }
  } catch (e) {}
  return false;
}

async function loginAdminViaFirebaseGoogle() {
  const fb = window.NGOHUB_FIREBASE;
  if (!fb) {
    showCmsToast('خدمات الدخول قيد التحميل، يرجى الانتظار لحظة...');
    return;
  }
  if (fb.isCurrentUserAdmin()) {
    await unlockCmsDashboard();
    return;
  }
  if (typeof fb.loginWithGoogle === 'function') {
    try {
      await fb.loginWithGoogle();
      if (fb.isCurrentUserAdmin()) {
        await unlockCmsDashboard();
      } else {
        showCmsToast('هذا الحساب غير مصرح له بالدخول كمسؤول عام.');
      }
    } catch (err) {
      showCmsToast('تم إلغاء تسجيل الدخول أو فشل التحقق.');
    }
  } else {
    window.location.href = 'profile.html';
  }
}

async function handleCmsGateLogin(event) {
  event.preventDefault();
  const urlInput = document.getElementById('cmsWorkerUrlInput');
  const passInput = document.getElementById('cmsAdminPasswordInput');
  const password = (passInput?.value || '').trim();
  const workerUrl = (urlInput?.value || '').trim() || localStorage.getItem(CMS_WORKER_URL_KEY) || '';

  if (!password) {
    showCmsToast('يرجى إدخال كلمة مرور الإدارة.');
    return;
  }
  if (!workerUrl) {
    showCmsToast('يرجى إدخال رابط الوسيط السحابي (Cloudflare Worker) للتحقق من كلمة المرور.');
    return;
  }

  try {
    const res = await fetch(workerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + password
      },
      body: JSON.stringify({ action: 'verify' })
    });

    if (!res.ok) {
      showCmsToast('بيانات الدخول غير صحيحة.');
      return;
    }

    sessionStorage.setItem(CMS_TOKEN_SESSION_KEY, password);
    localStorage.setItem(CMS_WORKER_URL_KEY, workerUrl);
    if (passInput) passInput.value = '';
    await unlockCmsDashboard();
    showCmsToast('تم تسجيل دخول الإدارة بنجاح');
  } catch (err) {
    showCmsToast('تعذر الاتصال بالوسيط السحابي. تأكد من الرابط وإعدادات النشر.');
  }
}

function logoutCmsAdmin() {
  sessionStorage.removeItem(CMS_TOKEN_SESSION_KEY);
  document.getElementById('adminCmsApp').style.display = 'none';
  document.getElementById('adminGateScreen').style.display = 'flex';
  const passInput = document.getElementById('cmsAdminPasswordInput');
  if (passInput) passInput.value = '';
}

async function unlockCmsDashboard() {
  document.getElementById('adminGateScreen').style.display = 'none';
  document.getElementById('adminCmsApp').style.display = 'block';
  await loadCmsInitialData();
  renderCmsActivityLog();
  loadCmsGrantsSummary();
  loadCmsFirestoreUsers();
}

async function loadCmsInitialData() {
  try {
    const res = await fetch('site-data.json?t=' + Date.now(), { cache: 'no-store' });
    if (res.ok) {
      cmsPublishedBaseline = await res.json();
    }
  } catch (e) {}

  if (!cmsPublishedBaseline) {
    cmsPublishedBaseline = {
      brand: { siteName: 'NGOHUB', siteSubtitle: 'تحالف ومنصة تمكين الجمعيات الأهلية', primaryGreen: '#059669', primaryPurple: '#7a4ba3', logoUrl: 'assets/images/logo_header.png?v=20261003b' },
      header: { ctaText: 'سجّل جمعيتك', nav: {} },
      home: { sections: {} },
      blocks: [],
      footer: {}
    };
  }

  const savedDraft = localStorage.getItem(CMS_DRAFT_KEY);
  if (savedDraft) {
    try {
      cmsData = JSON.parse(savedDraft);
      setUnsavedState(true);
    } catch (e) {
      cmsData = structuredClone(cmsPublishedBaseline);
    }
  } else {
    cmsData = structuredClone(cmsPublishedBaseline);
    setUnsavedState(false);
  }

  if (!cmsData.workerUrl) {
    cmsData.workerUrl = localStorage.getItem(CMS_WORKER_URL_KEY) || '';
  }

  populateCmsFormFields();
}

function setUnsavedState(flag) {
  cmsUnsaved = !!flag;
  const badge = document.getElementById('cmsUnsavedBadge');
  if (badge) badge.classList.toggle('visible', cmsUnsaved);
}

function populateCmsFormFields() {
  if (!cmsData) return;
  const b = cmsData.brand || {};
  const h = cmsData.header || {};
  const hm = cmsData.home || {};
  const secs = hm.sections || {};
  const f = cmsData.footer || {};

  setVal('cmsBrandName', b.siteName || '');
  setVal('cmsBrandSub', b.siteSubtitle || '');
  setVal('cmsColorGreen', b.primaryGreen || '#059669');
  setVal('cmsColorPurple', b.primaryPurple || '#7a4ba3');
  setVal('cmsLogoUrl', b.logoUrl || '');

  setVal('cmsHeaderCta', h.ctaText || '');
  renderNavEditor(h.nav || {});

  setVal('cmsHeroMain', hm.heroTitleMain || '');
  setVal('cmsHeroHighlight', hm.heroTitleHighlight || '');
  setVal('cmsHeroDesc', hm.heroDesc || '');
  setVal('cmsHeroCta', hm.heroCtaText || '');
  setVal('cmsHeroImage', hm.heroImage || '');

  setChecked('secShowHero', secs.showHero !== false);
  setChecked('secShowQ1', secs.showQ1 !== false);
  setChecked('secShowAudit', secs.showAudit !== false);
  setChecked('secShowQ2', secs.showQ2 !== false);
  setChecked('secShowQ3', secs.showQ3 !== false);
  setChecked('secShowClosing', secs.showClosing !== false);

  setVal('cmsQ1Title', hm.q1Title || '');
  setVal('cmsAuditTitle', hm.auditTitle || '');
  setVal('cmsQ2Title', hm.q2Title || '');
  setVal('cmsQ3Title', hm.q3Title || '');
  setVal('cmsClosingTitle', hm.closingTitle || '');
  setVal('cmsClosingCta', hm.closingCtaText || '');

  setVal('cmsFooterTagline', f.tagline || '');
  setVal('cmsFooterEmail', f.email || '');
  setVal('cmsFooterWhatsapp', f.whatsapp || '');
  setVal('cmsFooterFacebook', f.facebookUrl || '');
  setVal('cmsFooterCopyright', f.copyrightText || '');

  setVal('cmsWorkerUrlSetting', cmsData.workerUrl || localStorage.getItem(CMS_WORKER_URL_KEY) || '');

  renderInnerPageEditorFields();
  renderCmsBlocksEditor();
}

function renderInnerPageEditorFields() {
  if (!cmsData) return;
  if (!cmsData.pages) cmsData.pages = {};
  const key = document.getElementById('cmsInnerPageSelector')?.value || 'about';
  const pg = cmsData.pages[key] || {};
  setVal('cmsInnerHeroTitle', pg.heroTitle || '');
  setVal('cmsInnerHeroSub', pg.heroSubtitle || '');
  setVal('cmsInnerSecTitle', pg.sectionTitle || '');
  setVal('cmsInnerSecDesc', pg.sectionDesc || '');
  setVal('cmsInnerFeaturedImg', pg.featuredImage || '');
  setVal('cmsInnerSeoTitle', pg.seoTitle || '');
  setVal('cmsInnerSeoDesc', pg.seoDesc || '');
}

function onInnerPageFieldChange() {
  if (!cmsData) return;
  if (!cmsData.pages) cmsData.pages = {};
  const key = document.getElementById('cmsInnerPageSelector')?.value || 'about';
  cmsData.pages[key] = {
    heroTitle: getVal('cmsInnerHeroTitle').trim(),
    heroSubtitle: getVal('cmsInnerHeroSub').trim(),
    sectionTitle: getVal('cmsInnerSecTitle').trim(),
    sectionDesc: getVal('cmsInnerSecDesc').trim(),
    featuredImage: getVal('cmsInnerFeaturedImg').trim(),
    seoTitle: getVal('cmsInnerSeoTitle').trim(),
    seoDesc: getVal('cmsInnerSeoDesc').trim()
  };
  saveCmsDraft(false);
}

function handleInnerPageImageUpload(event) {
  handleCmsImageUpload(event, 'cmsInnerFeaturedImg', 1000, () => onInnerPageFieldChange());
}

function changePreviewIframePage(pageFile) {
  const iframe = document.getElementById('cmsPreviewIframe');
  if (iframe) iframe.src = pageFile + '?preview=' + Date.now();
}

function refreshPreviewIframe() {
  const iframe = document.getElementById('cmsPreviewIframe');
  const sel = document.getElementById('cmsPreviewPageSelect')?.value || 'index.html';
  if (iframe) iframe.src = sel + '?preview=' + Date.now();
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val;
}
function getVal(id) {
  return document.getElementById(id)?.value || '';
}
function setChecked(id, val) {
  const el = document.getElementById(id);
  if (el) el.checked = !!val;
}
function isChecked(id) {
  return !!document.getElementById(id)?.checked;
}

function renderNavEditor(navObj) {
  const container = document.getElementById('cmsNavItemsEditor');
  if (!container) return;
  const keys = Object.keys(navObj);
  container.innerHTML = keys.map(k => {
    const item = navObj[k] || {};
    return `
      <div class="admin-toggle-row" style="gap:12px;">
        <input type="text" data-nav-label="${k}" value="${escapeAttr(item.label || k)}" oninput="onCmsFieldChange()" style="flex:1; padding:8px 10px; border-radius:8px; border:1px solid #cbd5e1; font-family:inherit; font-weight:700;">
        <label style="display:inline-flex; align-items:center; gap:6px; margin:0; cursor:pointer;">
          <input type="checkbox" data-nav-vis="${k}" ${item.visible !== false ? 'checked' : ''} onchange="onCmsFieldChange()">
          <span>ظاهر</span>
        </label>
      </div>
    `;
  }).join('');
}

function collectCmsFormData() {
  if (!cmsData) return;
  cmsData.updatedAt = new Date().toISOString();
  cmsData.workerUrl = getVal('cmsWorkerUrlSetting').trim();
  if (cmsData.workerUrl) localStorage.setItem(CMS_WORKER_URL_KEY, cmsData.workerUrl);

  cmsData.brand = {
    ...(cmsData.brand || {}),
    siteName: getVal('cmsBrandName').trim(),
    siteSubtitle: getVal('cmsBrandSub').trim(),
    primaryGreen: getVal('cmsColorGreen'),
    primaryPurple: getVal('cmsColorPurple'),
    logoUrl: getVal('cmsLogoUrl').trim()
  };

  const nav = { ...(cmsData.header?.nav || {}) };
  document.querySelectorAll('[data-nav-label]').forEach(input => {
    const k = input.getAttribute('data-nav-label');
    const vis = document.querySelector(`[data-nav-vis="${k}"]`)?.checked !== false;
    nav[k] = { label: input.value.trim(), visible: vis };
  });
  cmsData.header = { ctaText: getVal('cmsHeaderCta').trim(), nav };

  cmsData.home = {
    ...(cmsData.home || {}),
    heroTitleMain: getVal('cmsHeroMain').trim(),
    heroTitleHighlight: getVal('cmsHeroHighlight').trim(),
    heroDesc: getVal('cmsHeroDesc').trim(),
    heroCtaText: getVal('cmsHeroCta').trim(),
    heroImage: getVal('cmsHeroImage').trim(),
    sections: {
      showHero: isChecked('secShowHero'),
      showQ1: isChecked('secShowQ1'),
      showAudit: isChecked('secShowAudit'),
      showQ2: isChecked('secShowQ2'),
      showQ3: isChecked('secShowQ3'),
      showClosing: isChecked('secShowClosing')
    },
    q1Title: getVal('cmsQ1Title').trim(),
    auditTitle: getVal('cmsAuditTitle').trim(),
    q2Title: getVal('cmsQ2Title').trim(),
    q3Title: getVal('cmsQ3Title').trim(),
    closingTitle: getVal('cmsClosingTitle').trim(),
    closingCtaText: getVal('cmsClosingCta').trim()
  };

  cmsData.footer = {
    ...(cmsData.footer || {}),
    tagline: getVal('cmsFooterTagline').trim(),
    email: getVal('cmsFooterEmail').trim(),
    whatsapp: getVal('cmsFooterWhatsapp').trim(),
    facebookUrl: getVal('cmsFooterFacebook').trim(),
    copyrightText: getVal('cmsFooterCopyright').trim()
  };
}

function onCmsFieldChange() {
  collectCmsFormData();
  saveCmsDraft(false);
}

function saveCmsDraft(notify = false) {
  collectCmsFormData();
  localStorage.setItem(CMS_DRAFT_KEY, JSON.stringify(cmsData));
  setUnsavedState(true);
  pushLivePreviewUpdate();
  if (notify) {
    logCmsActivity('تم حفظ مسودة التعديلات محلياً');
    showCmsToast('تم حفظ المسودة وتحديث المعاينة الحية.');
  }
}

function pushLivePreviewUpdate() {
  const iframe = document.getElementById('cmsPreviewIframe');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage({ type: 'ngohub:cms-preview', data: cmsData }, window.location.origin);
  }
}

function toggleSplitPreview() {
  const shell = document.getElementById('adminShellGrid');
  const label = document.getElementById('splitPreviewBtnLabel');
  if (!shell) return;
  const open = shell.classList.toggle('split-open');
  if (label) label.textContent = open ? 'إخفاء المعاينة' : 'معاينة حية';
  if (open) setTimeout(pushLivePreviewUpdate, 300);
}

function refreshPreviewIframe() {
  const iframe = document.getElementById('cmsPreviewIframe');
  if (iframe) iframe.src = 'index.html?preview=' + Date.now();
}

async function publishCmsToLiveSite() {
  collectCmsFormData();
  const workerUrl = (cmsData.workerUrl || localStorage.getItem(CMS_WORKER_URL_KEY) || '').trim();
  if (!workerUrl) {
    switchAdminPage('pane-publish');
    showCmsToast('يرجى إدخال رابط الوسيط السحابي (Cloudflare Worker) أولاً لنشر التعديلات للزوار.');
    return;
  }

  let token = sessionStorage.getItem(CMS_TOKEN_SESSION_KEY);
  if (!token) {
    const entered = window.prompt('أدخل كلمة مرور النشر السرية الخاصة بـ Cloudflare Worker:');
    if (!entered) return;
    token = entered.trim();
  }

  try {
    const res = await fetch(workerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        action: 'publish',
        path: 'site-data.json',
        message: 'cms: update site-data.json from NGOHUB Admin',
        data: cmsData
      })
    });

    const out = await res.json().catch(() => ({}));
    if (!res.ok) {
      if (res.status === 401) sessionStorage.removeItem(CMS_TOKEN_SESSION_KEY);
      showCmsToast(out.error || 'تعذر النشر السحابي، تأكد من صلاحية كلمة المرور.');
      return;
    }

    sessionStorage.setItem(CMS_TOKEN_SESSION_KEY, token);
    localStorage.removeItem(CMS_DRAFT_KEY);
    cmsPublishedBaseline = structuredClone(cmsData);
    setUnsavedState(false);
    logCmsActivity('تم نشر التعديلات بنجاح إلى الموقع الحي عبر Cloudflare Worker');
    showCmsToast('تم النشر! سيظهر التحديث لجميع زوار الموقع خلال ثوانٍ.');
  } catch (err) {
    showCmsToast('فشل الاتصال بالوسيط السحابي أثناء النشر.');
  }
}

// Block Builder CRUD
function addCmsBlock(type) {
  if (!cmsData) return;
  if (!Array.isArray(cmsData.blocks)) cmsData.blocks = [];
  cmsData.blocks.push({
    id: 'blk_' + Date.now(),
    type,
    title: type === 'heading' ? 'عنوان قسم جديد' : 'عنوان البطاقة التوضيحية',
    body: 'أدخل النص والمحتوى المطلوب عرضه لزوار المنصة هنا.',
    mediaUrl: ''
  });
  renderCmsBlocksEditor();
  saveCmsDraft(true);
}

function updateCmsBlockField(idx, field, val) {
  if (!cmsData || !cmsData.blocks || !cmsData.blocks[idx]) return;
  cmsData.blocks[idx][field] = val;
  saveCmsDraft(false);
}

function deleteCmsBlock(idx) {
  if (!cmsData || !cmsData.blocks) return;
  if (!window.confirm('هل أنت متأكد من حذف هذا القسم الإضافي؟')) return;
  cmsData.blocks.splice(idx, 1);
  renderCmsBlocksEditor();
  saveCmsDraft(true);
}

function renderCmsBlocksEditor() {
  const list = document.getElementById('cmsBlocksList');
  if (!list) return;
  const blocks = (cmsData && Array.isArray(cmsData.blocks)) ? cmsData.blocks : [];
  if (!blocks.length) {
    list.innerHTML = '<div style="padding:18px; text-align:center; color:var(--text-muted); border:1px dashed var(--border-color); border-radius:12px;">لا توجد أقسام مضافة حالياً. استخدم الأزرار بالأعلى لإضافة محتوى جديد.</div>';
    return;
  }

  const typeNames = { card: 'بطاقة', text: 'فقرة نصية', media: 'صورة وعنوان', heading: 'عنوان بارز' };
  list.innerHTML = blocks.map((b, idx) => `
    <div style="border:1px solid var(--border-color); border-radius:12px; padding:14px; margin-bottom:12px; background:var(--bg-surface-secondary);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <strong style="font-size:0.9rem;">#${idx + 1} (${typeNames[b.type] || 'محتوى'})</strong>
        <button type="button" onclick="deleteCmsBlock(${idx})" style="background:#fee2e2; color:#dc2626; border:none; border-radius:8px; padding:4px 10px; font-weight:700; cursor:pointer;">حذف</button>
      </div>
      <div class="admin-field"><label>العنوان:</label><input type="text" value="${escapeAttr(b.title || '')}" oninput="updateCmsBlockField(${idx}, 'title', this.value)"></div>
      ${b.type !== 'heading' ? `<div class="admin-field"><label>النص:</label><textarea rows="2" oninput="updateCmsBlockField(${idx}, 'body', this.value)">${escapeHtml(b.body || '')}</textarea></div>` : ''}
      ${b.type === 'media' ? `<div class="admin-field"><label>رابط الصورة:</label><input type="text" value="${escapeAttr(b.mediaUrl || '')}" oninput="updateCmsBlockField(${idx}, 'mediaUrl', this.value)"></div>` : ''}
    </div>
  `).join('');
}

// Canvas Image Compression -> Base64
function handleCmsImageUpload(event, targetInputId, maxDim = 900, afterCallback = null) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      if (width > maxDim || height > maxDim) {
        const ratio = Math.min(maxDim / width, maxDim / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
      setVal(targetInputId, dataUrl);
      if (typeof afterCallback === 'function') afterCallback();
      else onCmsFieldChange();
      logCmsActivity('تم رفع وضغط صورة جديدة بنجاح');
      showCmsToast('تم ضغط الصورة وإدراجها بنجاح.');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Navigation & Quick Settings Search
function switchAdminPage(pageId) {
  document.querySelectorAll('.admin-page-pane').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) target.classList.add('active');

  document.querySelectorAll('.admin-nav-item button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-page-target') === pageId);
  });
}

function handleAdminQuickSearch(query) {
  const box = document.getElementById('adminQuickSearchResults');
  if (!box) return;
  const q = (query || '').trim().toLowerCase();
  if (!q) { box.style.display = 'none'; box.innerHTML = ''; return; }

  const items = [];
  document.querySelectorAll('.admin-nav-item button').forEach(btn => {
    const pageId = btn.getAttribute('data-page-target');
    const label = btn.textContent.trim().replace(/\s+/g, ' ');
    if (pageId && label.toLowerCase().includes(q)) {
      items.push({ pageId, title: label, sub: 'قسم رئيسي', el: null });
    }
  });
  document.querySelectorAll('.admin-page-pane .admin-card').forEach(card => {
    const pane = card.closest('.admin-page-pane');
    if (!pane) return;
    const titleEl = card.querySelector('.admin-card-title');
    const title = titleEl ? titleEl.textContent.trim() : '';
    if (title.toLowerCase().includes(q) || card.textContent.toLowerCase().includes(q)) {
      items.push({ pageId: pane.id, title, sub: 'بطاقة إعدادات', el: card });
    }
  });

  if (!items.length) {
    box.innerHTML = `<div style="padding:10px 14px; color:#64748B; font-size:0.88rem;">لا توجد نتائج مطابقة لـ "${escapeHtml(q)}"</div>`;
    box.style.display = 'block';
    return;
  }

  box.innerHTML = '';
  items.slice(0, 10).forEach(item => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'admin-search-item';
    btn.innerHTML = `<span style="font-weight:800;">${escapeHtml(item.title)}</span><span style="font-size:0.78rem; color:#64748B;">${escapeHtml(item.sub)}</span>`;
    btn.onclick = () => {
      switchAdminPage(item.pageId);
      box.style.display = 'none';
      if (item.el) {
        item.el.classList.add('search-highlight');
        item.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => item.el.classList.remove('search-highlight'), 1800);
      }
    };
    box.appendChild(btn);
  });
  box.style.display = 'block';
}

// JSON Export / Import / Reset
function exportCmsSiteDataJson() {
  collectCmsFormData();
  const blob = new Blob([JSON.stringify(cmsData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ngohub-site-data-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showCmsToast('تم تصدير نسخة الإعدادات بنجاح.');
}

function importCmsSiteDataJson(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!parsed || typeof parsed !== 'object') throw new Error('invalid');
      cmsData = parsed;
      populateCmsFormFields();
      saveCmsDraft(true);
      logCmsActivity('تم استيراد ملف إعدادات JSON');
    } catch {
      showCmsToast('ملف JSON غير صالح.');
    }
  };
  reader.readAsText(file);
}

function resetCmsToPublishedDefault() {
  if (!window.confirm('هل تريد التراجع عن التعديلات غير المنشورة واستعادة النسخة المنشورة حالياً؟')) return;
  localStorage.removeItem(CMS_DRAFT_KEY);
  cmsData = structuredClone(cmsPublishedBaseline);
  populateCmsFormFields();
  setUnsavedState(false);
  pushLivePreviewUpdate();
  logCmsActivity('تمت استعادة النسخة المنشورة والتراجع عن المسودة');
  showCmsToast('تمت استعادة النسخة المنشورة.');
}

// Grants Full CRUD & Live Publish to grants.json via Cloudflare Worker
async function loadCmsGrantsSummary() {
  try {
    const res = await fetch('grants.json?t=' + Date.now());
    if (res.ok) {
      cmsGrantsList = await res.json();
      const countEl = document.getElementById('cmsGrantsTotalCount');
      if (countEl) countEl.textContent = cmsGrantsList.length;
      renderAdminGrantsList();
    }
  } catch {}
}

function renderAdminGrantsList() {
  const container = document.getElementById('cmsGrantsCrudList');
  const countEl = document.getElementById('cmsGrantsTotalCount');
  if (countEl) countEl.textContent = cmsGrantsList.length;
  if (!container) return;

  const q = (document.getElementById('cmsGrantsFilterInput')?.value || '').trim().toLowerCase();
  const filtered = cmsGrantsList.map((g, idx) => ({ g, idx })).filter(({ g }) => {
    if (!q) return true;
    return `${g.title || ''} ${g.donor || ''} ${g.category || ''}`.toLowerCase().includes(q);
  });

  if (!filtered.length) {
    container.innerHTML = '<div style="padding:16px; text-align:center; color:#64748b;">لا توجد منح مطابقة.</div>';
    return;
  }

  container.innerHTML = filtered.map(({ g, idx }) => `
    <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; padding:12px; border:1px solid var(--border-color); border-radius:10px; margin-bottom:8px; background:var(--bg-surface-secondary);">
      <div style="min-width:0; flex:1;">
        <strong style="display:block; font-size:0.92rem;">${escapeHtml(g.title || 'منحة بدون عنوان')}</strong>
        <small style="color:var(--text-muted);">${escapeHtml(g.donor || '')} ${g.amount ? '• ' + escapeHtml(g.amount) : ''}</small>
      </div>
      <div style="display:flex; gap:6px; flex-shrink:0;">
        <button type="button" onclick="openGrantEditorForm(${idx})" class="btn-cms-secondary" style="padding:6px 10px; font-size:0.8rem;">تعديل</button>
        <button type="button" onclick="deleteGrantEntry(${idx})" class="btn-cms-secondary" style="padding:6px 10px; font-size:0.8rem; color:#dc2626;">حذف</button>
      </div>
    </div>
  `).join('');
}

function openGrantEditorForm(idx) {
  const box = document.getElementById('cmsGrantFormBox');
  if (!box) return;
  box.style.display = 'block';
  document.getElementById('cmsGrantEditIdx').value = String(idx);
  const titleEl = document.getElementById('cmsGrantFormTitle');

  if (idx >= 0 && cmsGrantsList[idx]) {
    const g = cmsGrantsList[idx];
    if (titleEl) titleEl.textContent = 'تعديل منحة: ' + (g.title || '');
    setVal('gfTitle', g.title || '');
    setVal('gfDonor', g.donor || '');
    setVal('gfCategory', g.category || '');
    setVal('gfAmount', g.amount || g.fundingAmount || '');
    setVal('gfDeadline', g.deadline || '');
    setVal('gfUrl', g.applyUrl || g.link || '');
    setVal('gfSummary', g.summary || g.description || '');
  } else {
    if (titleEl) titleEl.textContent = 'إضافة منحة دولية جديدة';
    ['gfTitle', 'gfDonor', 'gfCategory', 'gfAmount', 'gfDeadline', 'gfUrl', 'gfSummary'].forEach(id => setVal(id, ''));
  }
  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function saveGrantFormEntry() {
  const idx = parseInt(document.getElementById('cmsGrantEditIdx')?.value || '-1', 10);
  const title = getVal('gfTitle').trim();
  const donor = getVal('gfDonor').trim();
  if (!title) { showCmsToast('يرجى كتابة اسم المنحة.'); return; }

  const entry = {
    ...(idx >= 0 && cmsGrantsList[idx] ? cmsGrantsList[idx] : { id: 'grant_cms_' + Date.now(), type: 'ngo', region: 'egypt', addedAt: new Date().toISOString().slice(0, 10) }),
    title,
    donor: donor || 'جهة مانحة دولية',
    category: getVal('gfCategory').trim() || 'تمكين مجتمعي',
    amount: getVal('gfAmount').trim() || 'تمويل تنموي',
    fundingAmount: getVal('gfAmount').trim() || 'تمويل تنموي',
    deadline: getVal('gfDeadline').trim() || 'مفتوح',
    applyUrl: getVal('gfUrl').trim() || 'grants.html',
    link: getVal('gfUrl').trim() || 'grants.html',
    summary: getVal('gfSummary').trim() || title,
    description: getVal('gfSummary').trim() || title
  };

  if (idx >= 0 && cmsGrantsList[idx]) {
    cmsGrantsList[idx] = entry;
    logCmsActivity('تعديل منحة: ' + title);
  } else {
    cmsGrantsList.unshift(entry);
    logCmsActivity('إضافة منحة جديدة: ' + title);
  }

  document.getElementById('cmsGrantFormBox').style.display = 'none';
  renderAdminGrantsList();
  setUnsavedState(true);
  showCmsToast('تم حفظ المنحة! اضغط "نشر المنح للموقع" لتظهر لجميع الزوار.');
}

function deleteGrantEntry(idx) {
  const g = cmsGrantsList[idx];
  if (!g || !window.confirm(`هل أنت متأكد من حذف المنحة "${g.title}"؟`)) return;
  cmsGrantsList.splice(idx, 1);
  renderAdminGrantsList();
  setUnsavedState(true);
  logCmsActivity('حذف منحة: ' + (g.title || ''));
  showCmsToast('تم حذف المنحة من القائمة.');
}

async function publishGrantsToLiveSite() {
  const workerUrl = (cmsData?.workerUrl || localStorage.getItem(CMS_WORKER_URL_KEY) || '').trim();
  if (!workerUrl) {
    switchAdminPage('pane-publish');
    showCmsToast('يرجى إدخال رابط الوسيط السحابي (Cloudflare Worker) أولاً.');
    return;
  }
  let token = sessionStorage.getItem(CMS_TOKEN_SESSION_KEY);
  if (!token) {
    const entered = window.prompt('أدخل كلمة مرور النشر السرية الخاصة بـ Cloudflare Worker:');
    if (!entered) return;
    token = entered.trim();
  }
  try {
    const res = await fetch(workerUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({
        action: 'publish',
        path: 'grants.json',
        message: 'cms: update grants.json from NGOHUB Admin',
        data: cmsGrantsList
      })
    });
    const out = await res.json().catch(() => ({}));
    if (!res.ok) {
      showCmsToast(out.error || 'تعذر نشر المنح، تحقق من كلمة المرور.');
      return;
    }
    sessionStorage.setItem(CMS_TOKEN_SESSION_KEY, token);
    logCmsActivity(`تم نشر قاعدة المنح (${cmsGrantsList.length} منحة) إلى الموقع الحي عبر Cloudflare Worker`);
    showCmsToast('تم نشر تحديثات المنح لجميع الزوار بنجاح!');
  } catch {
    showCmsToast('تعذر الاتصال بالوسيط السحابي.');
  }
}

async function loadCmsFirestoreUsers() {
  const container = document.getElementById('cmsAdminUsersContainer');
  if (!container) return;
  const fb = window.NGOHUB_FIREBASE;
  if (!fb || !fb.isCurrentUserAdmin || !fb.isCurrentUserAdmin()) {
    container.innerHTML = '<div style="padding:12px; background:#f8fafc; border-radius:10px; font-size:0.88rem; color:#64748b;">لعرض سجل الجمعيات الأهلية من قاعدة البيانات السحابية، يرجى تسجيل الدخول بحساب الإدارة الرئيسي عبر Firebase.</div>';
    return;
  }
  container.innerHTML = '<p style="color:#059669; font-weight:700;">جاري جلب سجل الجمعيات...</p>';
  try {
    const users = await fb.getUsersList();
    if (!users.length) {
      container.innerHTML = '<p>لا توجد حسابات مسجلة حالياً.</p>';
      return;
    }
    container.innerHTML = `
      <table style="width:100%; border-collapse:collapse; font-size:0.88rem;">
        <thead>
          <tr style="background:#f1f5f9; text-align:right; border-bottom:2px solid #cbd5e1;">
            <th style="padding:10px;">الاسم / الجمعية</th>
            <th style="padding:10px;">النوع</th>
            <th style="padding:10px;">البريد</th>
            <th style="padding:10px;">المحافظة</th>
          </tr>
        </thead>
        <tbody>
          ${users.slice(0, 50).map(u => `
            <tr style="border-bottom:1px solid #e2e8f0;">
              <td style="padding:10px; font-weight:700;">${escapeHtml(u.ngoData?.ngoName || u.name || '-')}</td>
              <td style="padding:10px;">${u.isNGO ? 'جمعية أهلية' : 'فرد / باحث'}</td>
              <td style="padding:10px; direction:ltr;">${escapeHtml(u.email || '-')}</td>
              <td style="padding:10px;">${escapeHtml(u.ngoData?.ngoGov || '-')}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  } catch {
    container.innerHTML = '<p style="color:#dc2626;">تعذر تحميل قائمة الجمعيات.</p>';
  }
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}
function escapeAttr(str) {
  return escapeHtml(str);
}

// Auto-unlock check on load
document.addEventListener('DOMContentLoaded', () => {
  const preUrl = localStorage.getItem(CMS_WORKER_URL_KEY) || '';
  const urlInput = document.getElementById('cmsWorkerUrlInput');
  if (urlInput && preUrl) urlInput.value = preUrl;

  if (sessionStorage.getItem(CMS_TOKEN_SESSION_KEY) || isFirebaseAdminAuthenticated()) {
    unlockCmsDashboard();
  }
});

window.addEventListener('ngohub:firebase-ready', () => {
  if (isFirebaseAdminAuthenticated()) {
    unlockCmsDashboard();
  }
});
