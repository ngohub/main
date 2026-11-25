/**
 * NGOHUB — Live Site CMS Loader & Floating Admin Bar (Full-Site Coverage)
 */
(function () {
  const DRAFT_KEY = 'ngohub_site_data_draft';
  const WORKER_URL_KEY = 'ngohub_cms_worker_url';

  function isAdminSessionActive() {
    try {
      if (sessionStorage.getItem('ngohub_cms_token')) return true;
      const fbAdmin = window.NGOHUB_FIREBASE && typeof window.NGOHUB_FIREBASE.isCurrentUserAdmin === 'function' && window.NGOHUB_FIREBASE.isCurrentUserAdmin();
      if (fbAdmin) return true;
      const rawSession = localStorage.getItem('ngohub_user_session');
      if (rawSession) {
        const parsed = JSON.parse(rawSession);
        if (parsed && parsed.role === 'admin') return true;
      }
    } catch (e) {}
    return false;
  }

  function detectCurrentPageKey() {
    const p = window.location.pathname.toLowerCase();
    if (p.includes('about')) return 'about';
    if (p.includes('services')) return 'services';
    if (p.includes('impact')) return 'impact';
    if (p.includes('calculators')) return 'calculators';
    if (p.includes('grants')) return 'grants';
    if (p.includes('partners')) return 'partners';
    if (p.includes('contact')) return 'contact';
    if (p.includes('profile')) return 'profile';
    return 'home';
  }

  function applySiteData(data) {
    if (!data || typeof data !== 'object') return;
    window.NGOHUB_SITE_DATA = data;

    if (data.workerUrl) {
      try { localStorage.setItem(WORKER_URL_KEY, data.workerUrl); } catch (e) {}
    }

    // 1. Brand & Theme
    const brand = data.brand || {};
    const root = document.documentElement;
    if (brand.primaryGreen) root.style.setProperty('--primary-green', brand.primaryGreen);
    if (brand.primaryPurple) root.style.setProperty('--primary-purple', brand.primaryPurple);

    if (brand.defaultTheme && !localStorage.getItem('ngohub_theme')) {
      root.setAttribute('data-theme', brand.defaultTheme);
    }

    if (brand.siteName) {
      document.querySelectorAll('.brand-title').forEach(el => { el.textContent = brand.siteName; });
    }
    if (brand.siteSubtitle) {
      document.querySelectorAll('.brand-subtitle').forEach(el => { el.textContent = brand.siteSubtitle; });
    }
    if (brand.logoUrl) {
      const headerLogo = document.getElementById('headerLogoImg');
      if (headerLogo) headerLogo.src = brand.logoUrl;
    }

    // 2. Header & Navigation
    const header = data.header || {};
    if (header.ctaText) {
      document.querySelectorAll('.btn-header-vol-apply .btn-vol-text').forEach(el => {
        el.textContent = header.ctaText;
      });
    }
    if (header.nav && typeof header.nav === 'object') {
      Object.keys(header.nav).forEach(key => {
        const item = header.nav[key];
        if (!item) return;
        const desktopLink = document.getElementById('nav-' + key);
        const mobileLink = document.getElementById('mNav-' + key);
        [desktopLink, mobileLink].forEach(el => {
          if (!el) return;
          el.style.display = item.visible === false ? 'none' : '';
          if (item.label) {
            const span = el.querySelector('span');
            if (span) span.textContent = item.label;
            else {
              const icon = el.querySelector('i');
              el.innerHTML = (icon ? icon.outerHTML + ' ' : '') + escapeHtml(item.label);
            }
          }
        });
      });
    }

    const pageKey = detectCurrentPageKey();

    // 3. Homepage Sections & Copy
    if (pageKey === 'home') {
      const home = data.home || {};
      const heroTitle = document.querySelector('.hero-fullbleed-title');
      if (heroTitle && (home.heroTitleMain || home.heroTitleHighlight)) {
        const mainTxt = home.heroTitleMain || 'المنصة المظلية';
        const hiTxt = home.heroTitleHighlight || 'لتمكين الجمعيات الأهلية والتأهيل للمنح الدولية';
        heroTitle.innerHTML = `${escapeHtml(mainTxt)}<br><span class="highlight-emerald">${escapeHtml(hiTxt)}</span>`;
      }
      const heroDesc = document.querySelector('.hero-fullbleed-desc');
      if (heroDesc && home.heroDesc) heroDesc.textContent = home.heroDesc;

      const heroCtaSpan = document.querySelector('.btn-hero-primary-wide span');
      if (heroCtaSpan && home.heroCtaText) heroCtaSpan.textContent = home.heroCtaText;

      const heroImg = document.querySelector('.hero-fullbleed-img');
      if (heroImg && home.heroImage) heroImg.src = home.heroImage;

      const sections = home.sections || {};
      const sectionMap = {
        showHero: '.hero-fullbleed',
        showQ1: '#screen-q1-manifesto',
        showAudit: '#screen-readiness-audit',
        showQ2: '#screen-q2-dossier',
        showQ3: '#screen-q3-proof',
        showClosing: '#screen-closing-cta'
      };
      Object.keys(sectionMap).forEach(k => {
        const el = document.querySelector(sectionMap[k]);
        if (el && typeof sections[k] === 'boolean') {
          el.style.display = sections[k] ? '' : 'none';
        }
      });

      setScreenHeader('#screen-q1-manifesto', home.q1Title, home.q1Subtitle);
      setScreenHeader('#screen-readiness-audit', home.auditTitle, home.auditSubtitle);
      setScreenHeader('#screen-q2-dossier', home.q2Title, home.q2Subtitle);
      setScreenHeader('#screen-q3-proof', home.q3Title, home.q3Subtitle);

      const closingTitle = document.querySelector('.closing-title');
      if (closingTitle && home.closingTitle) closingTitle.textContent = home.closingTitle;
      const closingCtaSpan = document.querySelector('.btn-closing-huge span');
      if (closingCtaSpan && home.closingCtaText) closingCtaSpan.textContent = home.closingCtaText;

      if (data.seo) {
        if (data.seo.homeTitle) document.title = data.seo.homeTitle;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && data.seo.homeDescription) metaDesc.setAttribute('content', data.seo.homeDescription);
      }

      renderCustomBlocks(Array.isArray(data.blocks) ? data.blocks : []);
    } else if (data.pages && data.pages[pageKey]) {
      // 4. Inner Pages (about, services, impact, calculators, grants, partners, contact)
      const pg = data.pages[pageKey];
      const heroTitleEl = document.querySelector('.page-hero-title');
      const heroSubEl = document.querySelector('.page-hero-subtitle');
      if (heroTitleEl && pg.heroTitle) heroTitleEl.textContent = pg.heroTitle;
      if (heroSubEl && pg.heroSubtitle) heroSubEl.textContent = pg.heroSubtitle;

      const secTitleEl = document.querySelector('.section-header .section-title');
      const secDescEl = document.querySelector('.section-header .section-desc');
      if (secTitleEl && pg.sectionTitle) secTitleEl.textContent = pg.sectionTitle;
      if (secDescEl && pg.sectionDesc) secDescEl.textContent = pg.sectionDesc;

      if (pg.featuredImage) {
        const featImg = document.querySelector('.about-photo-highlight img, .impact-field-photo-banner img');
        if (featImg) featImg.src = pg.featuredImage;
      }

      if (pg.seoTitle) document.title = pg.seoTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && pg.seoDesc) metaDesc.setAttribute('content', pg.seoDesc);
    }

    // 5. Footer Info (all pages)
    const footer = data.footer || {};
    const footerTagline = document.querySelector('.site-footer .footer-col p');
    if (footerTagline && footer.tagline) footerTagline.textContent = footer.tagline;

    const copyrightEl = document.querySelector('.footer-bottom-content > div:first-child');
    if (copyrightEl && footer.copyrightText) copyrightEl.textContent = footer.copyrightText;

    if (footer.whatsapp) {
      const cleanWa = footer.whatsapp.replace(/[^0-9]/g, '');
      document.querySelectorAll('.site-footer a[href*="wa.me"]').forEach(a => {
        a.href = 'https://wa.me/' + cleanWa;
        if (a.textContent.trim().startsWith('+')) a.textContent = footer.whatsapp;
      });
    }
    if (footer.facebookUrl) {
      document.querySelectorAll('.site-footer a[href*="facebook.com"]').forEach(a => {
        a.href = footer.facebookUrl;
      });
    }
  }

  function setScreenHeader(selector, title, subtitle) {
    const root = document.querySelector(selector);
    if (!root) return;
    const tEl = root.querySelector('.screen-title');
    const sEl = root.querySelector('.screen-subtitle');
    if (tEl && title) tEl.textContent = title;
    if (sEl && subtitle) sEl.textContent = subtitle;
  }

  function renderCustomBlocks(blocks) {
    const anchor = document.getElementById('screen-closing-cta');
    if (!anchor) return;
    let container = document.getElementById('ngohubCmsCustomBlocks');
    if (!blocks.length) {
      if (container) container.remove();
      return;
    }
    if (!container) {
      container = document.createElement('div');
      container.id = 'ngohubCmsCustomBlocks';
      container.className = 'cms-custom-blocks-band';
      container.style.cssText = 'padding: 50px 0; background: var(--bg-card-alt, #f8fafc); border-top: 1px solid var(--border-color, #e2e8f0);';
      anchor.parentNode.insertBefore(container, anchor);
    }
    const innerHtml = blocks.map(b => {
      if (b.type === 'heading') {
        return `<div style="margin: 24px 0 12px; text-align:center;"><h2 style="font-size:1.75rem; font-weight:800; color:var(--text-dark);">${escapeHtml(b.title || '')}</h2></div>`;
      }
      if (b.type === 'media') {
        return `<div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:16px; overflow:hidden; margin-bottom:20px;">
          ${b.mediaUrl ? `<img src="${escapeAttr(b.mediaUrl)}" alt="${escapeAttr(b.title || '')}" style="width:100%; max-height:360px; object-fit:cover; display:block;" loading="lazy">` : ''}
          <div style="padding:20px;">
            ${b.title ? `<h3 style="margin:0 0 8px; font-weight:800;">${escapeHtml(b.title)}</h3>` : ''}
            ${b.body ? `<p style="margin:0; color:var(--text-muted); line-height:1.7;">${escapeHtml(b.body)}</p>` : ''}
          </div>
        </div>`;
      }
      if (b.type === 'card') {
        return `<div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:16px; padding:24px; margin-bottom:18px;">
          ${b.title ? `<h3 style="margin:0 0 8px; font-weight:800; color:var(--primary-green);">${escapeHtml(b.title)}</h3>` : ''}
          ${b.body ? `<p style="margin:0; color:var(--text-dark); line-height:1.7;">${escapeHtml(b.body)}</p>` : ''}
        </div>`;
      }
      return `<div style="padding:14px 0;"><p style="margin:0; color:var(--text-dark); line-height:1.8; font-size:1.02rem;">${escapeHtml(b.body || b.title || '')}</p></div>`;
    }).join('');
    container.innerHTML = `<div class="container" style="max-width:1040px; margin:0 auto; padding:0 20px;">${innerHtml}</div>`;
  }

  function injectFloatingAdminBar() {
    if (!isAdminSessionActive()) return;
    if (window.location.pathname.includes('admin')) return;
    if (window.self !== window.top) return;
    if (document.getElementById('ngohubFloatingAdminBar')) return;

    const pageKey = detectCurrentPageKey();
    const targetHref = pageKey === 'home' ? 'admin.html?page=pane-homepage' : `admin.html?page=pane-inner-pages&inner=${pageKey}`;

    const bar = document.createElement('div');
    bar.id = 'ngohubFloatingAdminBar';
    bar.style.cssText = 'position:fixed; bottom:18px; left:18px; z-index:9990; display:flex; align-items:center; gap:10px; background:#0f172a; color:#fff; padding:10px 16px; border-radius:14px; box-shadow:0 12px 30px rgba(0,0,0,0.28); border:1px solid rgba(52,211,153,0.4); font-size:0.86rem; font-weight:700;';
    bar.innerHTML = `
      <span style="display:inline-flex; align-items:center; gap:6px; color:#34d399;"><i class="fa-solid fa-shield-check"></i> وضع الإدارة نشط</span>
      <a href="${targetHref}" style="background:#059669; color:#fff; text-decoration:none; padding:6px 12px; border-radius:8px; font-weight:800;">تعديل هذه الصفحة</a>
    `;
    document.body.appendChild(bar);
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
  }
  function escapeAttr(str) {
    return escapeHtml(str);
  }

  async function initSiteCms() {
    const isAdmin = isAdminSessionActive();
    const draftRaw = isAdmin ? localStorage.getItem(DRAFT_KEY) : null;
    if (draftRaw) {
      try {
        applySiteData(JSON.parse(draftRaw));
      } catch (e) {}
    } else {
      try {
        const res = await fetch('site-data.json?t=' + Date.now(), { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          applySiteData(data);
        }
      } catch (e) {}
    }

    injectFloatingAdminBar();
  }

  window.addEventListener('message', (event) => {
    if (event.origin !== window.location.origin) return;
    if (event.data && event.data.type === 'ngohub:cms-preview' && event.data.data) {
      applySiteData(event.data.data);
    }
  });

  window.addEventListener('ngohub:firebase-ready', () => {
    setTimeout(injectFloatingAdminBar, 350);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteCms);
  } else {
    initSiteCms();
  }
})();
