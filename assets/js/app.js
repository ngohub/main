/* ==========================================================================
   NGOHUB - MASTER APPLICATION ENGINE v9.0 (SEO, Security & History Routing)
   ========================================================================== */

// --- 0. Global Client-Side Error Boundary & Resilience Shield ---
(function initGlobalErrorBoundary() {
  window.addEventListener('error', function (event) {
    console.error('[NGOHUB Client Error Guard]:', event.error || event.message);
  });

  window.addEventListener('unhandledrejection', function (event) {
    console.warn('[NGOHUB Unhandled Promise]:', event.reason);
  });
})();

// --- 1. Master Services Dataset (8 Services) ---
let SERVICES_DATA = [
  // --- المحور 1: الخدمات التمويلية الأساسية (محرك المنح) ---
  {
    id: "grants_readiness",
    title: "1. تجهيز وتأهيل الجمعيات للمنح والتمويل الدولي",
    category: "grants",
    tier_label: "تأهيل واعتماد للمنح",
    icon: "fa-award",
    desc: "تدقيق شامل للملف المؤسسي للجمعية، مواءمة الهيكل الإداري مع معايير المانحين الدوليين، وسد أي فجوة تنظيمية لضمان القبول التمويلي.",
    features: [
      "فحص استيفاء متطلبات الامتثال لدى الجهات المانحة",
      "إعداد الملف التعريفي المؤسسي المعتمد (Due Diligence Pack)",
      "تطوير السياسات الداخلية والإدارة الرشيدة والنزاهة المالية",
      "إرشاد الجمعيات لفرص التمويل الأنسب لقدراتها الميدانية"
    ]
  },
  {
    id: "grants_proposals",
    title: "2. كتابة وصياغة مقترحات المشروعات التنموية",
    category: "grants",
    tier_label: "صياغة مقترحات المنح",
    icon: "fa-file-signature",
    desc: "صياغة تنموية احترافية لمقترح المشروع وفق النماذج المعيارية المعتمدة (Logical Frameworks)، وإعداد مصفوفات النتائج والميزانيات التقديرية.",
    features: [
      "صياغة المكون البيئي والذكي للمشروعات التنموية",
      "بناء الإطار المنطقي ومؤشرات قياس النجاح (KPIs)",
      "إعداد الميزانية التقديرية التفصيلية وجدول التدفقات",
      "مراجعة المعايير وتدقيق المقترح قبل التسليم النهائي"
    ]
  },
  {
    id: "grant_submission",
    title: "3. التقديم الرسمي والمتابعة مع الجهات المانحة",
    category: "grants",
    tier_label: "متابعة واعتماد تمويلي",
    icon: "fa-paper-plane",
    desc: "إدارة عملية التقديم الإلكتروني والرسمي عبر بوابات المانحين، متابعة استفسارات لجان التقييم، ودعم الجمعية حتى توقيع الاتفاقية.",
    features: [
      "رفع وإرسال الملفات عبر المنصات المعتمدة للمانحين",
      "المتابعة الفنية للاستفسارات واستيفاء الملاحظات",
      "المساندة في إعداد عروض التقديم والمقابلات الفنية",
      "توجيه فريق الجمعية في إجراءات التعاقد وتدشين التمويل"
    ]
  },

  // --- المحور 2: الدراسات الفنية والتنموية ---
  {
    id: "feasibility_study",
    title: "4. دراسات الجدوى الفنية والمالية للمشروعات",
    category: "studies",
    tier_label: "دراسات جدوى معتمدة",
    icon: "fa-chart-line",
    desc: "إعداد دراسات جدوى اقتصادية واجتماعية وتشغيلية دقيقة تبرهن للمانح جدوى المشروع وسلامة تخصيص أموال المنحة وتحقيق الأثر.",
    features: [
      "تحليل الجدوى الاقتصادية والعائد على الاستثمار التنموي",
      "تقدير التكاليف التشغيلية ومخاطر التنفيذ الميداني",
      "تحديد النطاق الجغرافي واحتياجات المجتمعات المحلية",
      "إعداد دراسات الجدوى البيئية وفق معايير الاستدامة"
    ]
  },
  {
    id: "impact_measurement",
    title: "5. قياس وتوثيق مؤشرات الأثر البيئي وصون الموارد",
    category: "studies",
    tier_label: "قياس أثر بيئي موثق",
    icon: "fa-leaf",
    desc: "حساب العائد البيئي والمائي الموثق بالأرقام لتقديمه للصناديق الخضراء والمناخية (تتويجاً لفوز NGOHUB بالمركز الأول في NISGP).",
    features: [
      "قياس مؤشرات خفض البصمة المائية وصون الموارد",
      "حساب خفض الانبعاثات وتحسين كفاءة الطاقة",
      "إصدار تقارير قياس أثر دورية معتمدة للمانحين",
      "مواءمة مخرجات المشروع مع أهداف التنمية المستدامة (SDGs)"
    ]
  },

  // --- المحور 3: الحلول الرقمية والبنية التحتية المعتمدة ---
  {
    id: "web_dev",
    title: "6. تصميم وتطوير البوابات والمواقع الرسمية للجمعيات",
    category: "digital",
    tier_label: "بنية تحتية ومواقع رسمية",
    icon: "fa-globe",
    desc: "بناء بوابات إلكترونية ومواقع رسمية متجاوبة توثق سابقة أعمال الجمعية ورسالتها وهوية مجلس إدارتها لاستيفاء شروط المانحين.",
    features: [
      "نطاق مؤسسي رسمي واستضافة سحابية مشفرة عالية السرعة",
      "تصميم متجاوب يعكس الهيبة المؤسسية للجمعية",
      "لوحة إدارة محتوى مرنة لفريق العمل وسجلات الأنشطة",
      "حماية أمنية سيبرانية ونسخ احتياطي دوري مؤمن"
    ]
  },
  {
    id: "digital_transformation",
    title: "7. التحول الرقمي وأتمتة السجلات المؤسسية",
    category: "digital",
    tier_label: "نظم سحابية مشفرة",
    icon: "fa-network-wired",
    desc: "نقل سجلات الجمعية الورقية إلى بيئة سحابية موحدة وقواعد بيانات مشفرة لإدارة الأنشطة والتقارير الرقابية بنزاهة وشفافية.",
    features: [
      "قواعد بيانات سحابية وتشفير كامل للبيانات المؤسسية",
      "أتمتة استمارات التقديم وسجلات المتابعة الميدانية",
      "تأهيل كوادر الجمعية على النظم الرقمية السحابية",
      "استخراج مؤشرات الأداء والتقارير الرقابية اللحظية"
    ]
  },
  {
    id: "impact_dashboard",
    title: "8. لوحات القيادة ونظم المتابعة والتقييم (M&E)",
    category: "digital",
    tier_label: "لوحات متابعة وتقييم",
    icon: "fa-chart-pie",
    desc: "لوحات تحكم ذكية ترصد مؤشرات الأداء، وتوزيع المشروعات جغرافياً، وحجم الإنجاز لتقديمها للجهات المانحة بشفافية تامة.",
    features: [
      "متابعة لحظية للمشاريع المنفذة ومؤشرات النجاح",
      "خرائط رقمية تفاعلية للنطاقات الميدانية والتدخلات",
      "تصدير تقارير تحليلية معتمدة للمانحين (PDF / Excel)",
      "تكامل لحظي مع قواعد البيانات الميدانية"
    ]
  },
  {
    id: "ai_solutions",
    title: "9. حلول الذكاء الاصطناعي وتلخيص البيانات التنموية",
    category: "digital",
    tier_label: "حلول الأتمتة المتقدمة",
    icon: "fa-microchip",
    desc: "تطويع تقنيات الذكاء الاصطناعي لتحليل أوراق السياسات التنموية، وتلخيص المقترحات، وأتمتة التواصل المؤسسي المعتمد.",
    features: [
      "نظم ذكية لأتمتة الاستجابة للشركاء والفرق الميدانية",
      "تلخيص واستخلاص الرؤى من تقارير التنمية المعقدة",
      "أدوات مساعدة في مراجعة وتدقيق المراسلات والتقارير",
      "تكامل مؤسسي آمن مع القنوات الرسمية المشفرة"
    ]
  },

  // --- المحور 4: الكوادر والهوية وبناء القدرات ---
  {
    id: "volunteer_mgmt",
    title: "10. تنظيم وهيكلة الكوادر وإدارة المتطوعين",
    category: "capacity",
    tier_label: "تنظيم فرق ميدانية",
    icon: "fa-users-gear",
    desc: "تنظيم وهيكلة برامج العمل الميداني والتطوع، وتصنيف المهارات، وتوثيق الساعات التطوعية رقمياً لإثبات القدرة التنفيذية.",
    features: [
      "نماذج مؤسسية متقدمة لتسجيل وتصنيف الكوادر",
      "رصد المساهمات الميدانية وإصدار وثائق الاعتماد",
      "دمج الكوادر الشابة في المشروعات الخضراء والتنموية",
      "استراتيجيات الاستبقاء وبناء الولاء المؤسسي للفرق"
    ]
  },
  {
    id: "brand_identity",
    title: "11. الهوية المؤسسية وتقارير الأثر السنوية",
    category: "capacity",
    tier_label: "هوية وتوثيق استراتيجي",
    icon: "fa-palette",
    desc: "بناء هوية بصرية رصينة وتقارير أثر دورية تعكس ثقل الجمعية وتاريخها الميداني وتعزز مصداقيتها أمام شركاء التنمية الدوليين.",
    features: [
      "دليل متكامل للهوية المؤسسية (الشعار، التيبوغرافيا، الألوان)",
      "قوالب رسمية لتوثيق الفعاليات والشراكات الميدانية",
      "إعداد وتصميم تقارير الأثر السنوية (Annual Impact Reports)",
      "صياغة الملف المؤسسي التعريفي للشركاء والمانحين"
    ]
  },
  {
    id: "capacity_building",
    title: "12. برامج التدريب وبناء القدرات المؤسسية (PROTIC)",
    category: "capacity",
    tier_label: "برامج تدريب معتمدة",
    icon: "fa-chalkboard-user",
    desc: "برامج تدريبية تخصصية بالتعاون مع PROTIC لتأهيل القيادات التنفيذية في الجمعيات على الإدارة الحديثة والتحول البيئي والمؤسسي.",
    features: [
      "ورش عمل تطبيقية في القيادة وإدارة المشاريع التنموية",
      "تطبيقات الذكاء الاصطناعي في تسريع إنجاز الجمعيات",
      "جلسات توجيه متخصصة لمديري البرامج والمشروعات",
      "حقائب تدريبية وأدلة عمل مؤسسية متقدمة"
    ]
  }
];

// --- 2. Global State & Database Sync ---
let ACTIVE_GRANTS = [];
let currentGrantTypeFilter = 'all';
let currentTagFilter = 'all';
let currentServiceFilter = 'all';
let adminAuthenticated = false;

// Google Sheets Webhook Endpoint (تم الربط مع الاسكريبت الحي المباشر)
let GOOGLE_SHEETS_WEBHOOK_URL = localStorage.getItem('ngohub_google_sheets_webhook_url') || "https://script.google.com/macros/s/AKfycbynU9c1SDeXkdEWMGQUJzsc9ERcYfPnhQ9yhorcEvgIZ2byHLtNRM1lHlLA3z-m7iYV/exec";

// --- 2.1 Persistent Session Cookie & Cross-Session Storage Engine ---
function setSessionCookie(name, value, days = 30) {
  try {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/;SameSite=Lax";
  } catch (e) {
    console.warn("Could not set session cookie:", e);
  }
}

function getSessionCookie(name) {
  try {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(cname) === 0) {
        return c.substring(cname.length, c.length);
      }
    }
  } catch (e) {
    console.warn("Could not read session cookie:", e);
  }
  return "";
}

function deleteSessionCookie(name) {
  try {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax;";
  } catch (e) {}
}

function getStoredUserSession() {
  try {
    const local = localStorage.getItem('ngohub_user_session');
    if (local) return JSON.parse(local);
  } catch (e) {}
  try {
    const cookieVal = getSessionCookie('ngohub_user_session');
    if (cookieVal) return JSON.parse(cookieVal);
  } catch (e) {}
  return null;
}

// --- 3. DOM Content Loaded Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  calculateHomeAudit();
  initGrantsDatabase();
  initServices();
  calculateEcoImpact();
  calculateReadinessScore();
  calculateHomeAudit();
  calculateNgohubWater();
  calculateServicesImpact();
  loadSubmissionsInboxCount();
  checkComplianceNotice();

  // Initialize Auth & Session State with Cookie & Firebase integration
  currentUserSession = getStoredUserSession();
  if (currentUserSession && currentUserSession.role === 'admin') {
    adminAuthenticated = true;
    document.body.classList.add('admin-authenticated');
  }
  updateHeaderAuthState();

  function initFirebaseAuthSync(fb) {
    if (!fb || !fb.onAuthChange) return;
    fb.onAuthChange((user, profile) => {
      if (user) {
        const isAdm = fb.isCurrentUserAdmin();
        // Strict guardrail: Prevent unverified users from gaining active session
        if (!user.emailVerified && !isAdm) {
          currentUserSession = null;
          localStorage.removeItem('ngohub_user_session');
          deleteSessionCookie('ngohub_user_session');
          updateHeaderAuthState();
          if (typeof initProfilePage === 'function') initProfilePage();
          return;
        }

        const isNgoRole = profile ? (profile.role === 'ngo') : false;
        currentUserSession = {
          id: user.uid,
          uid: user.uid,
          name: (profile && profile.displayName) || user.displayName || user.email.split('@')[0],
          email: user.email,
          role: isAdm ? 'admin' : (isNgoRole ? 'ngo' : 'individual'),
          isNGO: isNgoRole,
          ngoData: profile ? profile.ngoData : null,
          photoURL: user.photoURL || '',
          provider: user.providerData && user.providerData[0] ? user.providerData[0].providerId : 'password',
          createdAt: profile?.createdAt || profile?.createdAtIso || new Date().toISOString()
        };
        localStorage.setItem('ngohub_user_session', JSON.stringify(currentUserSession));
        setSessionCookie('ngohub_user_session', JSON.stringify(currentUserSession), 30);
      }
      updateHeaderAuthState();
      if (typeof initProfilePage === 'function') initProfilePage();
    });
  }

  // Profile page auto-init if present
  if (document.getElementById('profileContentArea')) {
    initProfilePage();
  }

  if (window.NGOHUB_FIREBASE) {
    initFirebaseAuthSync(window.NGOHUB_FIREBASE);
  } else {
    window.addEventListener('ngohub:firebase-ready', (e) => {
      initFirebaseAuthSync(e.detail || window.NGOHUB_FIREBASE);
    });
  }

  // Auto-open Auth modal from query param or cross-page redirection
  const urlParams = new URLSearchParams(window.location.search);
  const openAuthParam = urlParams.get('openAuth');
  const pendingAuth = sessionStorage.getItem('ngohub_pending_auth');

  if (openAuthParam) {
    const isNGO = urlParams.get('isNGO') !== 'false';
    setTimeout(() => {
      openAuthModal(openAuthParam, isNGO);
    }, 200);
  } else if (pendingAuth) {
    sessionStorage.removeItem('ngohub_pending_auth');
    try {
      const p = JSON.parse(pendingAuth);
      setTimeout(() => {
        openAuthModal(p.tab || 'register', p.isNGO !== false);
      }, 200);
    } catch (e) {}
  }

  // Multi-Page & Deep-Link Detection
  const currentPath = window.location.pathname.toLowerCase();
  let activeTabKey = 'home';
  if (currentPath.includes('services')) activeTabKey = 'services';
  else if (currentPath.includes('grants')) activeTabKey = 'grants';
  else if (currentPath.includes('calculators')) activeTabKey = 'calculators';
  else if (currentPath.includes('impact')) activeTabKey = 'impact';
  else if (currentPath.includes('partners')) activeTabKey = 'partners';
  else if (currentPath.includes('about')) activeTabKey = 'about';
  else if (currentPath.includes('contact')) activeTabKey = 'contact';
  else if (currentPath.includes('admin')) activeTabKey = 'admin';
  else if (window.location.hash) {
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && PAGE_SEO_MAP[initialHash]) activeTabKey = initialHash;
  }

  updateNavActiveState(activeTabKey);

  // Auto-fill grants search from query parameter (e.g. ?q=... or ?search=...)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const searchVal = urlParams.get('q') || urlParams.get('search');
    if (searchVal) {
      const grantsInput = document.getElementById('grantsSearchInput');
      if (grantsInput) {
        grantsInput.value = searchVal;
        filterGrantsMaster();
      }
    }
  } catch (err) {}

  // Calculator subtab direct link (e.g. calculators.html#readiness)
  if (currentPath.includes('calculators') && window.location.hash) {
    const calcSub = window.location.hash.replace('#', '');
    if (['feasibility', 'readiness', 'matching', 'water', 'services'].includes(calcSub)) {
      switchCalcSubTab(calcSub);
    }
  }

  // If on index.html with a deep link to an old tab or admin
  const isIndex = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '';
  const initialHash = window.location.hash.replace('#', '');
  if (isIndex && initialHash) {
    if (initialHash === 'admin') {
      switchTab('admin', false);
    } else if (PAGE_SEO_MAP[initialHash] && initialHash !== 'home') {
      window.location.replace(`${initialHash}.html`);
    }
  }
});

// --- 4. Tri-Theme Engine (Light / Dark / Glass) ---
function initTheme() {
  const savedTheme = localStorage.getItem('ngohub_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  let newTheme = 'dark';
  if (currentTheme === 'light') {
    newTheme = 'dark';
  } else if (currentTheme === 'dark') {
    newTheme = 'glass';
  } else {
    newTheme = 'light';
  }
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('ngohub_theme', newTheme);
  updateThemeIcon(newTheme);

  let label = 'المؤسسي الفاخر ☀️';
  if (newTheme === 'dark') label = 'الداكن 🌙';
  if (newTheme === 'glass') label = 'الزجاجي ✨';
  showToast(`تم التبديل إلى المظهر ${label}`);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  const mIcon = document.getElementById('mThemeIcon');
  const toggleBtn = document.getElementById('btnThemeToggle');

  let iconClass = 'fa-solid fa-moon';
  let titleText = 'تبديل المظهر (المظهر الحالي: المؤسسي الفاخر)';

  if (theme === 'dark') {
    iconClass = 'fa-solid fa-wand-magic-sparkles';
    titleText = 'تبديل المظهر (المظهر الحالي: الداكن)';
  } else if (theme === 'glass') {
    iconClass = 'fa-solid fa-sun';
    titleText = 'تبديل المظهر (المظهر الحالي: الزجاجي)';
  }

  if (icon) icon.className = iconClass;
  if (mIcon) mIcon.className = iconClass;
  if (toggleBtn) toggleBtn.setAttribute('title', titleText);
}

// --- 5. Mobile Drawer Navigation ---
function toggleMobileDrawer() {
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileNavOverlay');
  if (drawer && overlay) {
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
  }
}

function closeMobileDrawer() {
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileNavOverlay');
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
}

// --- 6. Master SPA History Router & SEO Metadata Engine ---
const PAGE_SEO_MAP = {
  home: {
    title: "NGOHUB | منصة التمكين المؤسسي للجمعيات الأهلية والتقديم على المنح وإدارة المشاريع",
    desc: "منصة NGOHUB هي المنصة الرائدة في مصر لدعم وتمكين الجمعيات والمؤسسات الأهلية والمنظمات غير الربحية؛ نقدم خدمات متكاملة في التقديم على المنح التنموية، إدارة المشاريع غير الربحية، تصميم المواقع الرسمية، وأتمتة العمليات والأنظمة المؤسسية.",
    hash: ""
  },
  services: {
    title: "دليل خدمات الجمعيات الأهلية والتحول الرقمي | NGOHUB",
    desc: "دليل خدمات متكامل للمنظمات غير الحكومية: تطوير المواقع الرسمية، أتمتة المشروعات السحابية، تنظيم برامج المتطوعين، ودعم التقديم على المنح.",
    hash: "services"
  },
  grants: {
    title: "بوابة المنح | NGOHUB",
    desc: "دليل المنح التنموية والدولية الموثقة: فرص تمويلية للمشروعات الخضراء والذكية، منح الجمعيات الناشئة، وبناء القدرات المؤسسية.",
    hash: "grants"
  },
  impact: {
    title: "محور الأثر وصون وترشيد المياه للجمعيات | NGOHUB",
    desc: "توثيق وفر أكثر من 3.5 مليون لتر مياه نقية و850 ألف جنيه سنوياً عبر التحول الرقمي والحلول الزراعية بالتعاون مع GCT.",
    hash: "impact"
  },
  calculators: {
    title: "الحاسبات التفاعلية ومقياس الجاهزية للمنح | NGOHUB",
    desc: "أدوات رقمية فورية لحساب الوفر المائي والمالي للجمعية وقياس مؤشر الجاهزية المؤسسية للقبول في المنح الدولية.",
    hash: "calculators"
  },
  partners: {
    title: "شركاء النجاح وسابقة التعاون التنموي | NGOHUB",
    desc: "سجل الشراكات الاستراتيجية مع ProTic للتدريب، Green Climate Technology (GCT)، والجمعيات الأهلية الشريكة.",
    hash: "partners"
  },
  about: {
    title: "عن منصة NGOHUB | الرؤية ومنهجية التمكين المؤسسي",
    desc: "تعرف على منصة NGOHUB: من نحن، ماذا نقدم، شركاؤنا، وتوافقنا الكامل مع أحكام قانون الجمعيات الأهلية المصري 149/2019.",
    hash: "about"
  },
  contact: {
    title: "تواصل مع NGOHUB | طلب استشارة ودعم الجمعية",
    desc: "قنوات التواصل المباشر مع مستشاري المنصة عبر الواتساب والفيسبوك والبريد لطلب الاستشارات وتطوير المشروعات.",
    hash: "contact"
  },
  admin: {
    title: "لوحة تحكم الإدارة (CMS) | NGOHUB",
    desc: "إدارة محتوى المنصة، تحديث المنح، ومتابعة طلبات الخدمات.",
    hash: "admin"
  }
};

function updatePageSeoMetadata(tabId) {
  const meta = PAGE_SEO_MAP[tabId] || PAGE_SEO_MAP.home;
  document.title = meta.title;

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute('content', meta.desc);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', meta.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', meta.desc);

  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', 'https://ngo-hub.com/');
  }
}

function switchTab(tabId, pushHistory = true) {
  // Normalize tabId
  if (!tabId || !PAGE_SEO_MAP[tabId]) tabId = 'home';

  const standalonePages = {
    home: 'index.html',
    about: 'about.html',
    services: 'services.html',
    impact: 'impact.html',
    calculators: 'calculators.html',
    grants: 'grants.html',
    partners: 'partners.html',
    contact: 'contact.html'
  };

  const currentPath = window.location.pathname.toLowerCase();
  const isIndex = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '';

  // Admin routing with Stealth 404 Guard (0 Firestore Reads)
  if (tabId === 'admin') {
    const isAdm = adminAuthenticated || (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.isCurrentUserAdmin());
    const adminSec = document.getElementById('section-admin');
    const notFoundSec = document.getElementById('section-404');

    if (!isAdm) {
      // STEALTH 404 SHIELD: Hide CMS existence from non-admin visitors (0 Firestore Reads)
      const sections = document.querySelectorAll('.page-section');
      sections.forEach(sec => sec.classList.remove('active-section'));
      if (notFoundSec) notFoundSec.classList.add('active-section');
      if (pushHistory) {
        history.pushState({ tab: '404' }, '', '#admin');
      }
      document.title = '404 - الصفحة غير موجودة | NGOHUB منصة العمل الأهلي';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeMobileDrawer();
      return;
    }

    if (isIndex && adminSec) {
      const sections = document.querySelectorAll('.page-section');
      sections.forEach(sec => sec.classList.remove('active-section'));
      adminSec.classList.add('active-section');
      updateNavActiveState('admin');
      if (pushHistory) {
        history.pushState({ tab: 'admin' }, '', '#admin');
      }
      updatePageSeoMetadata('admin');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeMobileDrawer();
      renderAdminState();
      return;
    } else {
      window.location.href = 'index.html#admin';
      return;
    }
  }

  // Home routing
  if (tabId === 'home') {
    const homeSec = document.getElementById('section-home');
    if (isIndex && homeSec) {
      const sections = document.querySelectorAll('.page-section');
      sections.forEach(sec => sec.classList.remove('active-section'));
      homeSec.classList.add('active-section');
      updateNavActiveState('home');
      if (pushHistory && window.location.hash) {
        history.pushState({ tab: 'home' }, '', window.location.pathname);
      }
      updatePageSeoMetadata('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeMobileDrawer();
      return;
    } else {
      window.location.href = 'index.html';
      return;
    }
  }

  // For any standalone page (about, services, impact, calculators, grants, partners, contact)
  const targetFile = standalonePages[tabId];
  if (targetFile) {
    if (!currentPath.endsWith(targetFile.toLowerCase())) {
      window.location.href = targetFile;
      return;
    } else {
      const sec = document.querySelector('.page-section');
      if (sec) sec.classList.add('active-section');
      updateNavActiveState(tabId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeMobileDrawer();
      if (tabId === 'calculators') {
        if (typeof calculateFeasibility === 'function') calculateFeasibility();
        if (typeof calculateGrantMatching === 'function') calculateGrantMatching();
        if (typeof calculateNgohubWater === 'function') calculateNgohubWater();
        if (typeof calculateServicesImpact === 'function') calculateServicesImpact();
        if (typeof calculateReadinessScore === 'function') calculateReadinessScore();
  calculateHomeAudit();
      }
      return;
    }
  }
}

// Listen to browser Back/Forward navigation
window.addEventListener('popstate', (e) => {
  const hash = window.location.hash.replace('#', '') || (e.state && e.state.tab) || 'home';
  switchTab(hash, false);
});

function updateNavActiveState(tabId) {
  const navItems = {
    home: document.getElementById('nav-home'),
    about: document.getElementById('nav-about'),
    services: document.getElementById('nav-services'),
    impact: document.getElementById('nav-impact'),
    calculators: document.getElementById('nav-calculators'),
    grants: document.getElementById('nav-grants'),
    partners: document.getElementById('nav-partners'),
    contact: document.getElementById('nav-contact')
  };

  Object.keys(navItems).forEach(key => {
    if (navItems[key]) {
      if (key === tabId) navItems[key].classList.add('active');
      else navItems[key].classList.remove('active');
    }
  });

  const mNavItems = {
    home: document.getElementById('mNav-home'),
    about: document.getElementById('mNav-about'),
    services: document.getElementById('mNav-services'),
    impact: document.getElementById('mNav-impact'),
    calculators: document.getElementById('mNav-calculators'),
    grants: document.getElementById('mNav-grants'),
    partners: document.getElementById('mNav-partners'),
    contact: document.getElementById('mNav-contact')
  };

  Object.keys(mNavItems).forEach(key => {
    if (mNavItems[key]) {
      if (key === tabId) mNavItems[key].classList.add('active');
      else mNavItems[key].classList.remove('active');
    }
  });
}

// --- 7. Hero Handlers & Smooth Scroll ---
function handleHeroSearchKey(e) {
  if (e.key === 'Enter') {
    triggerHeroSearch();
  }
}

function triggerHeroSearch() {
  const val = document.getElementById('heroQuickSearchInput')?.value || '';
  const grantsInput = document.getElementById('grantsSearchInput');
  if (grantsInput) {
    grantsInput.value = val;
    filterGrantsMaster();
  } else {
    window.location.href = `grants.html?q=${encodeURIComponent(val)}`;
  }
}

function quickSearchTag(tag) {
  const grantsInput = document.getElementById('grantsSearchInput');
  if (grantsInput) {
    grantsInput.value = tag;
    filterGrantsMaster();
  } else {
    window.location.href = `grants.html?q=${encodeURIComponent(tag)}`;
  }
}

function scrollToReadiness() {
  const elem = document.getElementById('readinessSection');
  if (elem) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }
}

// --- 8. Grants Master Database & Filters ---
function initGrantsDatabase() {
  let baseGrants = typeof GRANTS_DATABASE !== 'undefined' ? [...GRANTS_DATABASE] : [];

  const customGrants = localStorage.getItem('ngohub_custom_grants');
  if (customGrants) {
    try {
      const parsed = JSON.parse(customGrants);
      ACTIVE_GRANTS = [...parsed, ...baseGrants];
    } catch (e) {
      ACTIVE_GRANTS = baseGrants;
    }
  } else {
    ACTIVE_GRANTS = baseGrants;
  }

  const totalCount = ACTIVE_GRANTS.length;
  const totalBadge = document.getElementById('totalGrantsBadge');
  const cmsBadge = document.getElementById('cmsGrantsCountBadge');

  if (totalBadge) totalBadge.innerText = totalCount;
  if (cmsBadge) cmsBadge.innerText = totalCount;

  renderGrants();
}

function setGrantTypeFilter(type) {
  currentGrantTypeFilter = type;
  const buttons = document.querySelectorAll('.type-tab-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-type') === type) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderGrants();
}

function setGrantTagFilter(tag) {
  currentTagFilter = tag;
  const buttons = document.querySelectorAll('#grantsQuickTagsBar .tag-pill-btn');
  buttons.forEach(btn => {
    const btnTag = btn.getAttribute('data-tag');
    if (tag === 'all' && btnTag === 'all') {
      btn.classList.add('active');
    } else if (tag !== 'all' && btnTag !== 'all' && (btnTag === tag || tag.includes(btnTag) || btnTag.includes(tag))) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderGrants();
}

function resetAllGrantsFilters() {
  currentGrantTypeFilter = 'all';
  currentTagFilter = 'all';
  const searchInput = document.getElementById('grantsSearchInput');
  if (searchInput) searchInput.value = '';
  const sectorSelect = document.getElementById('sectorFilterSelect');
  if (sectorSelect) sectorSelect.value = 'all';
  const regionSelect = document.getElementById('regionFilterSelect');
  if (regionSelect) regionSelect.value = 'all';

  document.querySelectorAll('.grants-type-tabs .type-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-type') === 'all');
  });
  document.querySelectorAll('#grantsQuickTagsBar .tag-pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tag') === 'all');
  });
  renderGrants();
}

function filterByTag(tag) {
  setGrantTagFilter(tag);
  const filterSection = document.querySelector('.grants-tags-quickbar-wrapper');
  if (filterSection) {
    filterSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function filterGrantsMaster() {
  renderGrants();
}

let grantsRenderLimit = 12;

function loadMoreGrants() {
  grantsRenderLimit += 24;
  renderGrants();
}

function getGrantDeadlineBadge(deadline) {
  if (!deadline) {
    return {
      cssClass: 'deadline-badge rolling',
      icon: '<i class="fa-solid fa-rotate"></i>',
      label: 'تقديم دوري ومستمر'
    };
  }

  const dStr = String(deadline).trim();

  // 1. Check for rolling / continuous keywords
  const rollingKeywords = [
    'مستمر', 'دائم', 'طوال العام', 'على مدار العام', 'متجدد', 'متجددة',
    'مفتوح', 'دورية', 'يومياً', 'يوميا', 'أسبوعية', 'شهري', 'rolling'
  ];
  if (rollingKeywords.some(kw => dStr.includes(kw))) {
    return {
      cssClass: 'deadline-badge rolling',
      icon: '<i class="fa-solid fa-rotate"></i>',
      label: 'تقديم متجدد ومفتوح'
    };
  }

  // 2. Check for ISO or slash date format
  const isoMatch = dStr.match(/(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
  const slashMatch = dStr.match(/(\d{1,2})[-/](\d{1,2})[-/](\d{4})/);

  let targetDate = null;
  if (isoMatch) {
    targetDate = new Date(parseInt(isoMatch[1], 10), parseInt(isoMatch[2], 10) - 1, parseInt(isoMatch[3], 10));
  } else if (slashMatch) {
    targetDate = new Date(parseInt(slashMatch[3], 10), parseInt(slashMatch[2], 10) - 1, parseInt(slashMatch[1], 10));
  }

  if (targetDate && !isNaN(targetDate.getTime())) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diffMs = targetDate - today;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return {
        cssClass: 'deadline-badge expired',
        icon: '<i class="fa-solid fa-circle-xmark"></i>',
        label: 'أغلقت المنحة'
      };
    } else if (diffDays === 0) {
      return {
        cssClass: 'deadline-badge urgent',
        icon: '<i class="fa-solid fa-hourglass-end"></i>',
        label: 'اليوم الأخير للتقديم (عاجل)'
      };
    } else if (diffDays === 1) {
      return {
        cssClass: 'deadline-badge urgent',
        icon: '<i class="fa-solid fa-hourglass-half"></i>',
        label: 'متبقي يوم واحد (عاجل)'
      };
    } else if (diffDays === 2) {
      return {
        cssClass: 'deadline-badge urgent',
        icon: '<i class="fa-solid fa-hourglass-half"></i>',
        label: 'متبقي يومان (عاجل)'
      };
    } else if (diffDays <= 10) {
      return {
        cssClass: 'deadline-badge urgent',
        icon: '<i class="fa-solid fa-hourglass-half"></i>',
        label: `متبقي ${diffDays} أيام (عاجل)`
      };
    } else if (diffDays <= 15) {
      return {
        cssClass: 'deadline-badge urgent',
        icon: '<i class="fa-solid fa-hourglass-half"></i>',
        label: `متبقي ${diffDays} يوماً (عاجل)`
      };
    } else {
      return {
        cssClass: 'deadline-badge safe',
        icon: '<i class="fa-solid fa-calendar-check"></i>',
        label: `متبقي ${diffDays} يوماً`
      };
    }
  }

  // 3. Seasonal or descriptive deadline
  return {
    cssClass: 'deadline-badge safe',
    icon: '<i class="fa-solid fa-calendar-days"></i>',
    label: dStr
  };
}

function deriveGrantTags(g) {
  if (Array.isArray(g.tags) && g.tags.length >= 3) {
    return g.tags;
  }

  const tags = [];
  const text = `${g.title || ''} ${g.description || ''} ${g.donor || ''} ${g.badge || ''}`.toLowerCase();
  const sector = (g.sector || '').toLowerCase();
  const type = (g.type || '').toLowerCase();
  const region = (g.region || '').toLowerCase();
  const amount = (g.amount || '').toLowerCase();
  const location = (g.location || '').toLowerCase();

  // Dimension 1: Target category
  if (['شجر', 'تشجير', 'أشجار', 'غرس'].some(k => text.includes(k))) {
    tags.push('تشجير واستدامة');
    tags.push('مبادرة بيئية');
  } else if (type === 'un_agencies' || ['undp', 'unops', 'unido', 'unicef', 'fao', 'wfp', 'unep', 'ilo', 'un women', 'unpp', 'الأمم المتحدة'].some(k => text.includes(k))) {
    tags.push('منحة للجمعيات الأهلية');
    tags.push('شراكات الأمم المتحدة');
  } else if (type === 'volunteer' || text.includes('تطوع') || text.includes('شباب')) {
    tags.push('مبادرة مجتمعية / شبابية');
  } else if (type === 'individual_green' || ['رواد', 'ريادة أعمال', 'أفراد'].some(k => text.includes(k))) {
    tags.push('أفراد ورواد أعمال خضر');
  } else if (['استشار', 'مختص', 'خبير', 'خبراء'].some(k => text.includes(k))) {
    tags.push('فرصة لمختص / استشاري');
  } else if (['مدير مشروع', 'مدراء مشاريع', 'مديري مشروعات', 'إدارة مشاريع', 'إدارة مشروعات'].some(k => text.includes(k))) {
    tags.push('فرصة لمدير مشروع');
  } else if (sector === 'climate' || ['بيئ', 'مناخ', 'طبيع', 'كربون', 'تنوع بيولوجي'].some(k => text.includes(k))) {
    tags.push('مبادرة بيئية');
  } else {
    tags.push('منحة للجمعيات الأهلية');
  }

  // Dimension 2: Thematic field
  if (['مرأة', 'مراة', 'سيدات', 'فتيات', 'نساء', 'نسائي'].some(k => text.includes(k))) {
    tags.push('تمكين المرأة والفتيات');
  }

  // Water & Energy - require specific words, NOT bare 'ري' which matches 'مشاريع'
  const isWaterEnergy = ['مياه', 'طاقة', 'شمسية', 'كهرومائية', 'ترشيد الري', 'مياه الري', 'شبكات الري'].some(k => text.includes(k)) ||
    /(?:\s|^)(?:ري|الري)(?:\s|$)/.test(text);
  if (isWaterEnergy) {
    tags.push('صون المياه والطاقة');
  }

  if (sector === 'climate' || ['مناخ', 'كربون', 'تصحر', 'احتباس', 'بيئ', 'تنوع بيولوجي'].some(k => text.includes(k))) {
    if (!tags.includes('مناخ واستدامة بيئية') && !tags.includes('صون المياه والطاقة')) {
      tags.push('مناخ واستدامة بيئية');
    }
  }
  if (sector === 'digital' || ['رقمي', 'تكنولوج', 'برمج', 'ذكاء اصطناعي', 'بيانات'].some(k => text.includes(k))) {
    tags.push('تحول رقمي وتكنولوجيا');
  }
  if (sector === 'economic' || ['ريادة أعمال', 'تمكين اقتصادي', 'سلاسل القيمة', 'تشغيل', 'توظيف', 'حرف تراثية', 'فرص عمل'].some(k => text.includes(k))) {
    tags.push('ريادة أعمال وتوظيف');
  }
  if (sector === 'education' || sector === 'capacity' || ['تعليم', 'تدريب', 'بناء قدرات', 'نضج مؤسسي', 'تأهيل', 'إدارة رشيدة', 'قدرات'].some(k => text.includes(k))) {
    tags.push('تعليم وبناء قدرات');
  }
  if (sector === 'health' || ['صحة', 'صحي', 'طبية', 'رعاية', 'أزمات', 'إغاثة', 'تكافل'].some(k => text.includes(k))) {
    tags.push('حماية اجتماعية وصحة');
  }

  // Dimension 3: Geography
  const geoText = `${location} ${text}`;
  if (['عموم', 'كافة', 'جميع', 'مختلف', 'الجمهورية'].some(k => location.includes(k))) {
    tags.push('عموم مصر');
  } else if (['صعيد', 'أسوان', 'قنا', 'الأقصر', 'سوهاج', 'أسيوط', 'المنيا', 'بني سويف', 'الفيوم'].some(k => geoText.includes(k))) {
    tags.push('محافظات الصعيد');
  } else if (['دلتا', 'إسكندرية', 'قناة', 'بورسعيد', 'سويس', 'إسماعيلية', 'بحيرة', 'غربية', 'دقهلية'].some(k => geoText.includes(k))) {
    tags.push('الدلتا والقناة');
  } else if (['حدود', 'سيناء', 'مطروح', 'وادي جديد', 'بحر أحمر', 'حلايب'].some(k => geoText.includes(k))) {
    tags.push('المحافظات الحدودية والساحلية');
  } else if (['قاهرة', 'جيزة', 'قليوبية'].some(k => geoText.includes(k))) {
    tags.push('القاهرة الكبرى');
  } else if (region === 'egypt' || geoText.includes('مصر')) {
    tags.push('عموم مصر');
  }

  // Dimension 4: Financial Scale
  if (['أقل من', 'بذور', 'seed', 'صغيرة'].some(k => amount.includes(k)) || (amount.includes('ألف') && !amount.includes('مليون') && !amount.includes('دولار'))) {
    tags.push('تمويل بذور (أقل من 250 ألف ج.م)');
  } else if (['مليون', 'دولار', 'يورو', 'فرنك', 'إسترليني', 'ين', 'dollar', 'euro'].some(k => amount.includes(k))) {
    tags.push('تمويل كبير (أكثر من 2 مليون ج.م)');
  } else if (!amount.includes('بدل') && !amount.includes('شهادة') && !amount.includes('تطوع')) {
    tags.push('تمويل متوسط (250 ألف - 2 مليون ج.م)');
  }

  const uniqueTags = Array.from(new Set(tags));
  if (uniqueTags.length < 3) {
    if (!uniqueTags.includes('عموم مصر')) uniqueTags.push('عموم مصر');
    if (!uniqueTags.includes('منحة للجمعيات الأهلية')) uniqueTags.push('منحة للجمعيات الأهلية');
  }
  return uniqueTags.slice(0, 5);
}

function renderGrants() {
  const container = document.getElementById('grantsGridContainer');
  if (!container) return;

  const searchVal = (document.getElementById('grantsSearchInput')?.value || '').toLowerCase().trim();
  const selectedSector = document.getElementById('sectorFilterSelect')?.value || 'all';
  const selectedRegion = document.getElementById('regionFilterSelect')?.value || 'all';

  let filtered = ACTIVE_GRANTS.filter(g => {
    if (currentGrantTypeFilter === 'un_agencies') {
      const unPattern = /(?:\bUN\b|\bUN[-_]|\bUNPP\b|الأمم المتحدة|امم متحدة|UNDP|UNIDO|UNOPS|FAO|UN-Habitat|WFP|UNEP|UNICEF|ILO|UN Women|الفاو|اليونيسف|اليونيدو|اليونوبس)/i;
      const grantTags = (Array.isArray(g.tags) && g.tags.length > 0) ? g.tags : deriveGrantTags(g);
      const targetFields = [
        g.donor || '',
        g.badge || '',
        g.id || '',
        g.title || '',
        g.type || '',
        ...grantTags
      ];
      const isUn = g.type === 'un_agencies' || targetFields.some(field => unPattern.test(field));
      if (!isUn) return false;
    } else if (currentGrantTypeFilter !== 'all' && g.type !== currentGrantTypeFilter) {
      return false;
    }
    if (selectedSector !== 'all' && g.sector && g.sector !== selectedSector && !(selectedSector === 'education' && g.sector === 'capacity')) return false;
    if (selectedRegion !== 'all' && g.region && g.region !== selectedRegion) return false;

    // Filter by quick taxonomy tag with semantic multi-keyword support
    if (currentTagFilter && currentTagFilter !== 'all') {
      const tagLower = currentTagFilter.toLowerCase().trim();
      let keywords = [tagLower];
      if (tagLower.includes('بيئة') || tagLower.includes('تشجير')) {
        keywords = ['بيئ', 'شجر', 'مناخ', 'طبيع', 'أشجار', 'كربون', 'تنوع بيولوجي'];
      } else if (tagLower.includes('مرأة') || tagLower.includes('نساء') || tagLower.includes('فتيات') || tagLower.includes('سيدات')) {
        keywords = ['مرأة', 'مراة', 'نساء', 'فتيات', 'سيدات'];
      } else if (tagLower.includes('جمعيات')) {
        keywords = ['جمعيات', 'أهلي'];
      } else if (tagLower.includes('مدير') || tagLower.includes('مدراء') || tagLower.includes('استشار')) {
        keywords = ['مدير', 'مدراء', 'مستشار', 'استشار', 'خبير', 'خبراء'];
      } else if (tagLower.includes('مياه') || tagLower.includes('طاقة')) {
        keywords = ['مياه', 'طاقة', 'شمسية', 'كهرومائية', 'الري', 'ترشيد الري', 'شبكات الري'];
      } else if (tagLower.includes('رقمي') || tagLower.includes('تكنولوج')) {
        keywords = ['رقمي', 'تكنولوج', 'برمج', 'ذكاء اصطناعي', 'بيانات'];
      } else if (tagLower.includes('ريادة') || tagLower.includes('توظيف') || tagLower.includes('أعمال')) {
        keywords = ['ريادة', 'رواد', 'أعمال', 'توظيف', 'تشغيل'];
      } else if (tagLower.includes('صعيد') || tagLower.includes('دلتا')) {
        keywords = ['صعيد', 'أسوان', 'قنا', 'سوهاج', 'أسيوط', 'منيا', 'بني سويف', 'دلتا', 'بحيرة', 'دقهلية', 'شرقية', 'غربية', 'منوفية', 'قليوبية', 'قناة'];
      }

      const grantTags = (Array.isArray(g.tags) && g.tags.length > 0) ? g.tags : deriveGrantTags(g);
      const directTagMatch = grantTags.some(t => (t || '').toLowerCase().trim() === tagLower);
      if (!directTagMatch) {
        const matchInTags = grantTags.some(t => {
          const tLow = (t || '').toLowerCase();
          return keywords.some(kw => tLow.includes(kw));
        });
        const matchInTitle = keywords.some(kw => (g.title || '').toLowerCase().includes(kw));
        const matchInDesc = keywords.some(kw => (g.description || '').toLowerCase().includes(kw));
        const matchInBadge = keywords.some(kw => (g.badge || '').toLowerCase().includes(kw));
        if (!matchInTags && !matchInTitle && !matchInDesc && !matchInBadge) return false;
      }
    }

    // Search query matching across title, donor, description, location, badge, tags, and eligibility
    if (searchVal) {
      const matchTitle = (g.title || '').toLowerCase().includes(searchVal);
      const matchDonor = (g.donor || '').toLowerCase().includes(searchVal);
      const matchDesc = (g.description || '').toLowerCase().includes(searchVal);
      const matchLocation = (g.location || '').toLowerCase().includes(searchVal);
      const matchBadge = (g.badge || '').toLowerCase().includes(searchVal);
      const grantTags = (Array.isArray(g.tags) && g.tags.length > 0) ? g.tags : deriveGrantTags(g);
      const matchTags = grantTags.some(t => (t || '').toLowerCase().includes(searchVal));
      const matchEligibility = Array.isArray(g.eligibility) && g.eligibility.some(e => (e || '').toLowerCase().includes(searchVal));
      if (!matchTitle && !matchDonor && !matchDesc && !matchLocation && !matchBadge && !matchTags && !matchEligibility) return false;
    }

    return true;
  });

  const countText = document.getElementById('resultsCountText');
  if (countText) {
    countText.innerText = `عرض ${filtered.length} فرصة ومنحة تنموية`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 45px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
        <i class="fa-solid fa-filter-circle-xmark" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 12px;"></i>
        <h4 style="color: var(--text-dark); font-weight: 800;">لم يتم العثور على فرص مطابقة للبحث</h4>
        <p style="color: var(--text-muted); font-size: 0.92rem; margin-top: 6px;">جرب تغيير خيارات الفلترة أو كتابة كلمات بحث أخرى مثل (جمعيات، مناخ، تكنولوجيا، تمويل، استدامة)</p>
        <button type="button" class="tag-pill-btn active" onclick="resetAllGrantsFilters()" style="margin-top: 16px; padding: 8px 22px; cursor: pointer;">
          <i class="fa-solid fa-arrow-rotate-left"></i> إعادة ضبط كافة الفلاتر والوسوم
        </button>
      </div>
    `;
    return;
  }

  // Sign-In Wall for Grants: require login to view full grants database
  if (!currentUserSession) {
    const previewGrants = filtered.slice(0, 2);
    let previewHtml = previewGrants.map(g => generateGrantCardHTML(g)).join('');
    
    container.innerHTML = `
      ${previewHtml}
      <div class="grants-signin-wall" style="grid-column: 1/-1; background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(15, 23, 42, 0.05)); border: 2px dashed var(--primary-green); border-radius: var(--radius-xl, 16px); padding: 48px 24px; text-align: center; margin: 20px 0; box-shadow: var(--shadow-lg);">
        <div style="width: 70px; height: 70px; margin: 0 auto 18px; background: rgba(16, 185, 129, 0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: var(--primary-green);">
          <i class="fa-solid fa-lock"></i>
        </div>
        <h3 style="font-size: 1.6rem; font-weight: 800; color: var(--text-dark); margin-bottom: 10px;">
          قاعدة بيانات المنح والفرص التمويلية الكاملة مقفلة للزوار
        </h3>
        <p style="max-width: 620px; margin: 0 auto 24px; color: var(--text-muted); font-size: 1.05rem; line-height: 1.7;">
          للوصول إلى تفاصيل المنح، شروط التقديم، المواعيد النهائية، وروابط الجهات المانحة الرسمية، يرجى تسجيل الدخول أو إنشاء حساب لجمعيتكم الأهلية مجاناً في دقيقة واحدة.
        </p>
        <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
          <button type="button" class="btn-primary" onclick="openAuthModal('register')" style="padding: 14px 32px; font-size: 1.05rem; border-radius: 10px; font-weight: 700; cursor: pointer; box-shadow: var(--shadow-md);">
            <i class="fa-solid fa-user-plus"></i> إنشاء حساب جمعية مجاناً
          </button>
          <button type="button" class="btn-secondary" onclick="openAuthModal('login')" style="padding: 14px 28px; font-size: 1.05rem; border-radius: 10px; font-weight: 700; cursor: pointer;">
            <i class="fa-solid fa-right-to-bracket"></i> تسجيل الدخول
          </button>
        </div>
      </div>
    `;
    return;
  }

  const isFiltering = searchVal || selectedSector !== 'all' || selectedRegion !== 'all' || currentGrantTypeFilter !== 'all' || currentTagFilter !== 'all';
  const displayList = isFiltering ? filtered : filtered.slice(0, grantsRenderLimit);

  let html = displayList.map(g => generateGrantCardHTML(g)).join('');
  
  if (!isFiltering && filtered.length > grantsRenderLimit) {
    const remaining = filtered.length - grantsRenderLimit;
    html += `
      <div style="grid-column: 1/-1; text-align: center; margin: 30px 0 15px;">
        <button type="button" class="btn-primary" onclick="loadMoreGrants()" style="padding: 12px 32px; font-size: 1rem; border-radius: var(--radius-full); cursor: pointer; box-shadow: var(--shadow-md);">
          <i class="fa-solid fa-angles-down"></i> عرض المزيد من الفرص والمنح (${remaining}+ فرصة متبقية)
        </button>
      </div>
    `;
  }

  container.innerHTML = html;
}

function generateGrantCardHTML(g) {
  let badgeClass = 'ngo-type';
  if (g.type === 'individual_green') badgeClass = 'individual-type';
  else if (g.type === 'un_agencies') badgeClass = 'un-type';
  else if (g.type === 'volunteer') badgeClass = 'volunteer-type';

  const deadlineBadge = getGrantDeadlineBadge(g.deadline);
  const tags = (Array.isArray(g.tags) && g.tags.length > 0) ? g.tags : deriveGrantTags(g);

  // Criteria / Conditions (top 2-3 items)
  const criteriaList = (Array.isArray(g.eligibility) && g.eligibility.length > 0)
    ? g.eligibility.slice(0, 2)
    : ["مطابقة المعايير التنموية واللوائح المنظمة", "تقديم المقترح والمستندات الرسمية المعتمدة"];

  const tagsHtml = tags.map(t => {
    const cleanTag = t.replace(/'/g, "\\'");
    return `<button type="button" class="grant-tag-chip" onclick="filterByTag('${cleanTag}')"><i class="fa-solid fa-tag"></i> ${sanitizeText(t)}</button>`;
  }).join('');

  const criteriaHtml = criteriaList.map(c => `
    <li><i class="fa-solid fa-check text-emerald"></i> <span>${sanitizeText(c)}</span></li>
  `).join('');

  return `
    <div class="grant-card">
      <div class="grant-card-top-bar">
        <span class="grant-badge-type ${badgeClass}">
          <i class="fa-solid fa-award"></i> ${sanitizeText(g.badge || 'فرصة معتمدة')}
        </span>
        <span class="${deadlineBadge.cssClass}">
          ${deadlineBadge.icon} ${sanitizeText(deadlineBadge.label)}
        </span>
      </div>

      <div>
        <div class="grant-donor"><i class="fa-solid fa-building-columns"></i> ${sanitizeText(g.donor)}</div>
        <h4 class="grant-title">${sanitizeText(g.title)}</h4>
        <p class="grant-desc">${sanitizeText(g.description)}</p>

        <!-- Prominent Financial Amount Box -->
        <div class="grant-amount-box">
          <div class="amount-box-label">
            <i class="fa-solid fa-hand-holding-dollar text-emerald"></i>
            <span>التمويل / الدعم:</span>
          </div>
          <div class="amount-box-val">${sanitizeText(g.amount)}</div>
        </div>

        <!-- Interactive Taxonomy Tags -->
        <div class="grant-tags-container">
          ${tagsHtml}
        </div>

        <!-- Conditions / Eligibility Snippet -->
        <div class="grant-conditions-box">
          <div class="conditions-box-title">
            <i class="fa-solid fa-clipboard-check text-emerald"></i>
            <span>أبرز شروط ومعايير الأهلية:</span>
          </div>
          <ul class="conditions-box-list">
            ${criteriaHtml}
          </ul>
        </div>

        <!-- Direct Application Channel / Method -->
        <div class="grant-apply-method-box">
          <div class="apply-method-header">
            <i class="fa-solid fa-paper-plane text-emerald"></i>
            <span>طريقة وقناة التقديم المباشر:</span>
          </div>
          <p class="apply-method-text">${sanitizeText(g.application_method || 'تقديم إلكتروني مباشر عبر البوابة الرسمية')}</p>
        </div>

        <div class="grant-meta-list">
          <div class="meta-row">
            <span class="meta-label">الموعد النهائي:</span>
            <span class="meta-value">${sanitizeText(g.deadline)}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">نطاق التقديم:</span>
            <span class="meta-value" style="color: var(--text-dark);">${sanitizeText(g.location)}</span>
          </div>
        </div>
      </div>

      <div class="grant-card-footer">
        <button type="button" class="btn-view-details" onclick="openGrantModal('${g.id}')">
          <i class="fa-solid fa-eye"></i> الشروط كاملة
        </button>
        <a href="${g.link}" target="_blank" rel="noopener noreferrer" class="btn-apply-direct">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> التقديم المباشر
        </a>
      </div>
      <button type="button" class="btn-grant-proposal-cta" onclick="openServiceModal('grants_proposals')" style="width: 100%; margin-top: 10px; border-radius: 999px; font-weight: 700; padding: 10px 14px; font-size: 0.85rem; background: #059669; color: #FFFFFF; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s ease; box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);">
        <i class="fa-solid fa-file-pen"></i> طلب تأهيل وصياغة مقترح لهذه المنحة
      </button>
    </div>
  `;
}

// --- 8.1 Green, Water & Economic Impact Calculator Engine ---
function calculateEcoImpact() {
  const paperRange = document.getElementById('ecoPaperRange');
  const benRange = document.getElementById('ecoBeneficiariesRange');
  const adoptRange = document.getElementById('ecoAdoptionRange');

  if (!paperRange || !benRange || !adoptRange) return;

  const monthlyPaper = parseFloat(paperRange.value || '500');
  const beneficiaries = parseFloat(benRange.value || '1200');
  const adoption = parseFloat(adoptRange.value || '80');

  // Update slider label texts
  const paperText = document.getElementById('ecoPaperValText');
  const benText = document.getElementById('ecoBenValText');
  const adoptText = document.getElementById('ecoAdoptionValText');

  if (paperText) paperText.innerText = Number(monthlyPaper).toLocaleString('ar-EG') + " معاملة";
  if (benText) benText.innerText = Number(beneficiaries).toLocaleString('ar-EG') + " أسرة";
  if (adoptText) adoptText.innerText = adoption + "%";

  // Calculations:
  // 1. Annual paper sheets eliminated = monthlyPaper * 12 * (adoption / 100)
  const annualPaperAvoided = Math.round(monthlyPaper * 12 * (adoption / 100));

  // 2. Water saved: 10 Liters of pure fresh water per standard A4 sheet
  const waterSavedLiters = Math.round(annualPaperAvoided * 10);

  // 3. Trees protected: 1 mature tree equals approx 8,333 sheets of paper
  const treesProtected = (annualPaperAvoided / 8333).toFixed(1);

  // 4. CO2 avoided in kg: 0.005 kg CO2 per sheet + avoided in-person travel (0.08 kg per digital beneficiary)
  const co2AvoidedKg = Math.round((annualPaperAvoided * 0.005) + (beneficiaries * 0.08 * (adoption / 100)));

  // 5. Total Financial Savings in EGP: (Paper cost 0.65 EGP + toner 1.20 EGP + archiving/storage 0.50 EGP per sheet) + logistics savings
  const financialSavingsEgp = Math.round((annualPaperAvoided * 2.35) + (beneficiaries * 3.5 * (adoption / 100)));

  // Update DOM Output elements
  const waterElem = document.getElementById('ecoWaterSaved');
  const treesElem = document.getElementById('ecoTreesSaved');
  const co2Elem = document.getElementById('ecoCo2Saved');
  const moneyElem = document.getElementById('ecoMoneySaved');

  if (waterElem) waterElem.innerText = Number(waterSavedLiters).toLocaleString('ar-EG');
  if (treesElem) treesElem.innerText = Number(treesProtected).toLocaleString('ar-EG');
  if (co2Elem) co2Elem.innerText = Number(co2AvoidedKg).toLocaleString('ar-EG');
  if (moneyElem) moneyElem.innerText = Number(financialSavingsEgp).toLocaleString('ar-EG');
}

// --- 8.2 Subtab & Dropdown Navigator for Calculators Hub ---
function onCalculatorSelectChange(calcId) {
  switchCalcSubTab(calcId);
}

function switchCalcSubTab(calcId) {
  // Sync dropdown selector if present
  const dropdown = document.getElementById('calculatorDropdownSelector');
  if (dropdown && dropdown.value !== calcId) {
    dropdown.value = calcId;
  }

  const tabs = document.querySelectorAll('.calc-tab-btn');
  tabs.forEach(tab => {
    if (tab.getAttribute('data-calc') === calcId) tab.classList.add('active');
    else tab.classList.remove('active');
  });

  const panels = document.querySelectorAll('.calc-panel');
  panels.forEach(p => {
    if (p.id === `calc-panel-${calcId}`) p.classList.add('active-panel');
    else p.classList.remove('active-panel');
  });

  if (calcId === 'feasibility') calculateFeasibility();
  else if (calcId === 'readiness') calculateReadinessScore();
  else if (calcId === 'matching') calculateGrantMatching();
  else if (calcId === 'water') calculateNgohubWater();
  else if (calcId === 'services') calculateServicesImpact();
}

// --- 8.2.1 Economic Feasibility & Cost Savings Calculator ---
function calculateFeasibility() {
  const staffInput = document.getElementById('feasStaff');
  const paperRange = document.getElementById('feasPaper');
  const budgetInput = document.getElementById('feasBudget');

  const staff = parseFloat(staffInput ? staffInput.value : '20') || 20;
  const monthlyPaper = parseFloat(paperRange ? paperRange.value : '1500') || 1500;
  const annualAidBudget = parseFloat(budgetInput ? budgetInput.value : '500000') || 500000;

  const paperLabel = document.getElementById('feasPaperValText');
  if (paperLabel) {
    paperLabel.innerText = Number(monthlyPaper).toLocaleString('ar-EG') + " معاملة/شهرياً";
  }

  // 1. Direct paper, printing, stationery & physical archiving waste (2.5 EGP per document)
  const annualPaperSheets = monthlyPaper * 12;
  const directPaperWaste = Math.round(annualPaperSheets * 2.5);

  // 2. Administrative hours lost in manual paperwork (15 minutes = 0.25 hour per transaction)
  const annualAdminHours = Math.round(annualPaperSheets * 0.25);

  // 3. Duplicate aid & uncoordinated distribution leakage prevented (10% standard saving)
  const duplicateAidPrevented = Math.round(annualAidBudget * 0.10);

  // 4. Total Operational Value Recovered
  const totalSavings = directPaperWaste + duplicateAidPrevented;

  // DOM Outputs
  const elemDirect = document.getElementById('resFeasDirectMoney');
  const elemHours = document.getElementById('resFeasAdminHours');
  const elemDuplicate = document.getElementById('resFeasDuplicateAid');
  const elemTotal = document.getElementById('resFeasTotalSavings');

  if (elemDirect) elemDirect.innerText = Number(directPaperWaste).toLocaleString('ar-EG') + " ج.م";
  if (elemHours) elemHours.innerText = Number(annualAdminHours).toLocaleString('ar-EG') + " ساعة عمل";
  if (elemDuplicate) elemDuplicate.innerText = Number(duplicateAidPrevented).toLocaleString('ar-EG') + " ج.م";
  if (elemTotal) elemTotal.innerText = Number(totalSavings).toLocaleString('ar-EG') + " ج.م سنوياً";
}

// --- 8.2.2 Grant Matching Engine Calculator ---
function calculateGrantMatching() {
  const sectorElem = document.getElementById('matchingSector');
  const regionElem = document.getElementById('matchingRegion');
  const ageElem = document.getElementById('matchingAge');

  const sector = sectorElem ? sectorElem.value : 'climate';
  const region = regionElem ? regionElem.value : 'all';
  const age = ageElem ? ageElem.value : 'established';

  let matchScore = 84;
  let matchCount = 14;

  if (sector === 'climate') {
    matchScore += 8;
    matchCount = 19;
  } else if (sector === 'digital' || sector === 'economic') {
    matchScore += 6;
    matchCount = 16;
  } else if (sector === 'education' || sector === 'health') {
    matchScore += 4;
    matchCount = 15;
  }

  if (age === 'established') {
    matchScore += 4;
  } else if (age === 'new') {
    matchScore -= 6;
    matchCount = Math.max(6, matchCount - 4);
  }

  if (matchScore > 98) matchScore = 98;

  const scoreElem = document.getElementById('resMatchScore');
  const countElem = document.getElementById('resMatchCount');
  const badgeElem = document.getElementById('resMatchBadge');

  if (scoreElem) scoreElem.innerText = matchScore + "%";
  if (countElem) countElem.innerText = matchCount + " منحة مطابقة";
  if (badgeElem) {
    if (matchScore >= 88) {
      badgeElem.innerText = "تطابق ممتاز ومؤهل للتقديم المؤسسي الفوري";
      badgeElem.style.color = "var(--primary-green)";
    } else {
      badgeElem.innerText = "تطابق جيد يتطلب استكمال بعض وثائق الجاهزية";
      badgeElem.style.color = "#d97706";
    }
  }
}

// --- 8.2.3 Unified Authentication & NGO Onboarding Modal Handlers ---
let currentUserSession = getStoredUserSession();
const ADMIN_AUTHORIZED_EMAILS = ['youssefkhedr92@gmail.com'];

function openAuthModal(tab = 'login', isNGO = true) {
  const modal = document.getElementById('authModal');
  if (!modal) {
    // Save pending intent and redirect to index.html with registration/login modal opened
    sessionStorage.setItem('ngohub_pending_auth', JSON.stringify({ tab, isNGO }));
    window.location.href = `index.html?openAuth=${encodeURIComponent(tab)}&isNGO=${isNGO}`;
    return;
  }

  modal.style.display = 'flex';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  switchAuthTab(tab);
  if (tab === 'register') {
    handleRoleSelectionChange(isNGO);
    const radio = document.querySelector(`input[name="regUserRole"][value="${isNGO ? 'ngo' : 'individual'}"]`);
    if (radio) radio.checked = true;
  }
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Backwards compatibility for legacy calls
function openNgoRegisterModal() {
  openAuthModal('register', true);
}

function closeNgoRegisterModal() {
  closeAuthModal();
}

function showAuthNotice(viewId, type, messageHtml) {
  const view = document.getElementById(viewId);
  if (!view) return;
  
  let box = view.querySelector('.auth-dynamic-notice');
  if (!box) {
    box = document.createElement('div');
    box.className = 'auth-dynamic-notice';
    const form = view.querySelector('form');
    if (form) {
      view.insertBefore(box, form);
    } else {
      view.appendChild(box);
    }
  }

  let bg = 'rgba(16, 185, 129, 0.12)';
  let border = '#10b981';
  let color = '#065f46';
  let icon = 'fa-solid fa-circle-check';

  if (type === 'warning') {
    bg = 'rgba(245, 158, 11, 0.12)';
    border = '#f59e0b';
    color = '#92400e';
    icon = 'fa-solid fa-triangle-exclamation';
  } else if (type === 'error') {
    bg = 'rgba(239, 68, 68, 0.12)';
    border = '#ef4444';
    color = '#991b1b';
    icon = 'fa-solid fa-circle-xmark';
  } else if (type === 'info') {
    bg = 'rgba(14, 165, 233, 0.12)';
    border = '#0ea5e9';
    color = '#075985';
    icon = 'fa-solid fa-circle-info';
  }

  box.style.cssText = `
    display: flex;
    align-items: flex-start;
    gap: 12px;
    background: ${bg};
    border: 1px solid ${border};
    color: ${color};
    padding: 12px 14px;
    border-radius: 10px;
    margin-bottom: 16px;
    font-size: 0.92rem;
    line-height: 1.6;
    animation: fadeIn 0.25s ease-in-out;
  `;

  box.innerHTML = `
    <i class="${icon}" style="font-size: 1.25rem; margin-top: 2px; flex-shrink: 0;"></i>
    <div style="flex: 1;">${messageHtml}</div>
  `;
}

function clearAuthNotices() {
  document.querySelectorAll('.auth-dynamic-notice').forEach(el => el.remove());
}

// Field-Level Validation & Smooth Scroll Engine
function clearFieldErrors(containerId) {
  const container = document.getElementById(containerId) || document;
  container.querySelectorAll('.field-inline-error').forEach(el => el.remove());
  container.querySelectorAll('.field-error-highlight').forEach(el => {
    el.classList.remove('field-error-highlight');
    el.style.borderColor = '';
    el.style.boxShadow = '';
  });
}

function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  if (!field) return;

  const parent = field.closest('.form-group') || field.parentNode;
  const existing = parent.querySelector('.field-inline-error');
  if (existing) existing.remove();

  field.classList.add('field-error-highlight');
  field.style.borderColor = '#ef4444';
  field.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.2)';

  const badge = document.createElement('div');
  badge.className = 'field-inline-error';
  badge.innerHTML = `<i class="fa-solid fa-circle-exclamation text-rose" style="color:#ef4444;"></i> <span>${message}</span>`;

  // Insert above the input field
  field.parentNode.insertBefore(badge, field);

  const clearOnInput = () => {
    badge.remove();
    field.classList.remove('field-error-highlight');
    field.style.borderColor = '';
    field.style.boxShadow = '';
    field.removeEventListener('input', clearOnInput);
    field.removeEventListener('change', clearOnInput);
  };
  field.addEventListener('input', clearOnInput);
  field.addEventListener('change', clearOnInput);
}

function scrollToFirstError(fieldId) {
  const field = document.getElementById(fieldId);
  if (!field) return;
  field.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => {
    try {
      field.focus({ preventScroll: true });
    } catch (_) {
      field.focus();
    }
  }, 250);
}

function redirectToRegisterWithEmail(email, pass = '') {
  clearAuthNotices();
  switchAuthTab('register');
  const regEmail = document.getElementById('regEmailInput');
  const regPass = document.getElementById('regPassInput');
  const regName = document.getElementById('regNameInput');
  if (regEmail && email) regEmail.value = email;
  if (regPass && pass && pass.length >= 8) regPass.value = pass;
  
  const radio = document.querySelector('input[name="regUserRole"][value="ngo"]');
  if (radio) {
    radio.checked = true;
    handleRoleSelectionChange(true);
  }

  showAuthNotice('authViewRegister', 'info', `✨ <strong>مرحباً بك!</strong> تم تحويلك لإنشاء حساب جديد بالبريد (<code>${email}</code>). يرجى إكمال بيانات الجمعية للاستفادة من كامل المزايا.`);
  if (regName) regName.focus();
}

let pendingVerificationCredentials = { email: '', pass: '' };
let resendCooldownInterval = null;
let resendCooldownSeconds = 0;

function switchAuthTab(tab, email = '', pass = '') {
  clearAuthNotices();
  const viewLogin = document.getElementById('authViewLogin');
  const viewReg = document.getElementById('authViewRegister');
  const viewForgot = document.getElementById('authViewForgot');
  const viewVerify = document.getElementById('authViewVerify');
  const btnLogin = document.getElementById('tabBtnLogin');
  const btnReg = document.getElementById('tabBtnRegister');

  if (viewLogin) viewLogin.style.display = (tab === 'login') ? 'block' : 'none';
  if (viewReg) viewReg.style.display = (tab === 'register') ? 'block' : 'none';
  if (viewForgot) viewForgot.style.display = (tab === 'forgot') ? 'block' : 'none';
  if (viewVerify) viewVerify.style.display = (tab === 'verify') ? 'block' : 'none';

  if (tab === 'verify') {
    if (email) pendingVerificationCredentials.email = email;
    if (pass) pendingVerificationCredentials.pass = pass;
    const targetEl = document.getElementById('verifyTargetEmail');
    if (targetEl && pendingVerificationCredentials.email) {
      targetEl.textContent = pendingVerificationCredentials.email;
    }
    if (btnLogin) btnLogin.classList.remove('active');
    if (btnReg) btnReg.classList.remove('active');
  } else {
    if (btnLogin) btnLogin.classList.toggle('active', tab === 'login');
    if (btnReg) btnReg.classList.toggle('active', tab === 'register');
  }
}

async function resendVerificationFromView() {
  const email = pendingVerificationCredentials.email || document.getElementById('verifyTargetEmail')?.textContent || '';
  const pass = pendingVerificationCredentials.pass || '';

  if (!email || email.includes('example.com')) {
    showToast("يرجى إدخال البريد الإلكتروني للمتابعة.", "error");
    return;
  }

  await executeResendVerification(email, pass);
}

async function resendVerificationDirect(email, pass) {
  pendingVerificationCredentials = { email, pass };
  switchAuthTab('verify', email, pass);
  await executeResendVerification(email, pass);
}

async function executeResendVerification(email, pass) {
  if (resendCooldownSeconds > 0) {
    showToast(`يرجى الانتظار ${resendCooldownSeconds} ثانية قبل إعادة الإرسال.`, "warning");
    return;
  }

  const btn = document.getElementById('btnResendVerification');
  const originalHtml = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري إرسال رابط التفعيل...';
  }

  try {
    if (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.resendVerification && pass) {
      await window.NGOHUB_FIREBASE.resendVerification(email, pass);
      showToast("✉️ تم إعادة إرسال رابط التفعيل إلى بريدك الإلكتروني بنجاح!", "success");
    } else if (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.auth && window.NGOHUB_FIREBASE.auth.currentUser) {
      await window.NGOHUB_FIREBASE.sendEmailVerification(window.NGOHUB_FIREBASE.auth.currentUser);
      showToast("✉️ تم إعادة إرسال رابط التفعيل بنجاح!", "success");
    } else {
      showToast("✉️ تم طلب إعادة إرسال رابط التفعيل. يرجى مراجعة بريدك الإلكتروني.", "info");
    }

    // Start 60s cooldown timer
    resendCooldownSeconds = 60;
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<i class="fa-solid fa-clock"></i> إعادة الإرسال متاحة بعد (${resendCooldownSeconds}) ث`;
    }

    if (resendCooldownInterval) clearInterval(resendCooldownInterval);
    resendCooldownInterval = setInterval(() => {
      resendCooldownSeconds--;
      if (resendCooldownSeconds <= 0) {
        clearInterval(resendCooldownInterval);
        resendCooldownInterval = null;
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> لم يصلك الرابط؟ إعادة الإرسال';
        }
      } else {
        if (btn) {
          btn.innerHTML = `<i class="fa-solid fa-clock"></i> إعادة الإرسال متاحة بعد (${resendCooldownSeconds}) ث`;
        }
      }
    }, 1000);

  } catch (err) {
    console.error("Resend verification error:", err);
    showToast("تعذر إعادة إرسال الرابط: " + (err.message || err), "error");
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalHtml;
    }
  }
}

function openForgotPasswordView(email = '') {
  clearAuthNotices();
  switchAuthTab('forgot');
  const forgotInput = document.getElementById('forgotEmailInput');
  if (forgotInput) {
    if (email) forgotInput.value = email;
    else {
      const loginEmail = document.getElementById('loginEmailInput')?.value || '';
      if (loginEmail) forgotInput.value = loginEmail;
    }
    forgotInput.focus();
  }
}

function handleRoleSelectionChange(isNGO) {
  const benefitsBox = document.getElementById('ngoBenefitsBox');
  const qualBlock = document.getElementById('ngoQualificationBlock');
  if (benefitsBox) benefitsBox.style.display = isNGO ? 'block' : 'none';
  if (qualBlock) qualBlock.style.display = isNGO ? 'block' : 'none';
}

// Google OAuth Handler (Integrated with Firebase Auth & Fallback)
async function handleGoogleSignIn() {
  const isNGO = document.querySelector('input[name="regUserRole"]:checked')?.value === 'ngo';
  
  showToast("جاري الاتصال بحساب Google...");

  if (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.googleSignIn) {
    try {
      const user = await window.NGOHUB_FIREBASE.googleSignIn(isNGO ? 'ngo' : 'individual', null);
      const isAdm = window.NGOHUB_FIREBASE.isCurrentUserAdmin();
      
      const sessionUser = {
        id: user.uid,
        uid: user.uid,
        name: user.displayName || user.email.split('@')[0],
        email: user.email,
        role: isAdm ? 'admin' : (isNGO ? 'ngo' : 'individual'),
        provider: 'google',
        photoURL: user.photoURL || '',
        createdAt: new Date().toISOString()
      };
      saveUserSessionAndLogin(sessionUser);
    } catch (error) {
      console.error("Google sign in error:", error);
      if (error.code === 'auth/account-suspended') {
        alert("⚠️ تم تجميد هذا الحساب مؤقتاً من قبل إدارة المنصة.");
      } else if (error.code !== 'auth/popup-closed-by-user') {
        alert("تعذر تسجيل الدخول بواسطة Google: " + (error.message || error));
      }
    }
  } else {
    // Simulated Fallback for offline development
    setTimeout(() => {
      const googleUser = {
        id: 'g_' + Date.now(),
        name: "يوسف خضر (Google Admin)",
        email: "youssefkhedr92@gmail.com",
        provider: "google",
        role: "admin",
        createdAt: new Date().toISOString()
      };
      saveUserSessionAndLogin(googleUser);
    }, 700);
  }
}

async function handleAuthLogin(e) {
  e.preventDefault();
  clearAuthNotices();
  const emailInput = document.getElementById('loginEmailInput');
  const passInput = document.getElementById('loginPassInput');
  const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
  const pass = passInput ? passInput.value : '';

  if (!email || !pass) {
    showAuthNotice('authViewLogin', 'warning', 'يرجى إدخال البريد الإلكتروني وكلمة المرور.');
    return;
  }

  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn ? submitBtn.innerHTML : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري التحقق من الحساب...';
  }

  try {
    if (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.login) {
      const user = await window.NGOHUB_FIREBASE.login(email, pass);
      const isAdm = window.NGOHUB_FIREBASE.isCurrentUserAdmin();

      const sessionUser = {
        id: user.uid,
        uid: user.uid,
        name: user.displayName || email.split('@')[0],
        email: user.email,
        role: isAdm ? 'admin' : 'client',
        provider: 'password',
        createdAt: new Date().toISOString()
      };

      saveUserSessionAndLogin(sessionUser);
    } else {
      // Local fallback
      const isAdmin = ADMIN_AUTHORIZED_EMAILS.includes(email);
      const user = {
        id: 'usr_' + Date.now(),
        name: email.split('@')[0],
        email: email,
        role: isAdmin ? 'admin' : 'client',
        provider: 'password',
        createdAt: new Date().toISOString()
      };
      saveUserSessionAndLogin(user);
    }
  } catch (error) {
    console.error("Login error:", error);
    const code = error.code || '';

    if (code === 'auth/account-suspended') {
      showAuthNotice('authViewLogin', 'error', '<strong>⚠️ تم تجميد هذا الحساب مؤقتاً</strong> من قبل إدارة المنصة.<br>يرجى التواصل مع أمانة التحالف عبر واتساب (<a href="https://wa.me/201026847508" target="_blank" style="color:var(--primary-green); text-decoration:underline;">+201026847508</a>) لمراجعة الحساب وتنشيطه.');
    } else if (code === 'auth/unverified-email') {
      pendingVerificationCredentials = { email, pass };
      showAuthNotice('authViewLogin', 'warning', `
        <strong>⚠️ هذا الحساب غير مفعل بعد:</strong><br>
        أرسلنا رابط تأكيد رسمي إلى بريدك الإلكتروني (<code>${email}</code>). يرجى فتح بريدك والنقر على الرابط لتفعيل الحساب.<br>
        <div style="margin-top: 10px; display: flex; gap: 8px; flex-wrap: wrap;">
          <button type="button" class="btn-table-sm" onclick="switchAuthTab('verify', '${email}', '${pass}')" style="background:var(--primary-green); color:#fff; border:none; padding:7px 14px; border-radius:6px; cursor:pointer; font-weight:700;">
            <i class="fa-solid fa-envelope-circle-check"></i> الانتقال لشاشة التحقق
          </button>
          <button type="button" class="btn-table-sm" onclick="resendVerificationDirect('${email}', '${pass}')" style="background:#0284c7; color:#fff; border:none; padding:7px 14px; border-radius:6px; cursor:pointer;">
            <i class="fa-solid fa-paper-plane"></i> إعادة إرسال رابط التفعيل الآن
          </button>
        </div>
      `);
    } else if (code === 'auth/user-not-found') {
      // Explicit user-not-found: Show redirecting message and transition
      showAuthNotice('authViewLogin', 'warning', `
        <strong>⚠️ هذا البريد الإلكتروني غير مسجل في المنظومة بعد.</strong><br>
        <span style="display:inline-block; margin-top:4px;"><i class="fa-solid fa-arrows-rotate fa-spin"></i> جاري توجيهك لإنشاء حساب جديد لجمعيتكم خلال لحظات...</span>
      `);
      setTimeout(() => {
        redirectToRegisterWithEmail(email, pass);
      }, 1600);
    } else if (code === 'auth/invalid-credential' || code === 'auth/wrong-password') {
      // Invalid credential (wrong password OR unregistered user in Firebase v10+)
      showAuthNotice('authViewLogin', 'error', `
        <strong>❌ تعذر تسجيل الدخول:</strong> البريد الإلكتروني أو كلمة المرور غير صحيحة.<br>
        <span style="font-size:0.88rem; color:inherit; display:block; margin:6px 0;">إذا كنت لم تنشئ حساباً بعد، أو إذا نسيت كلمة المرور:</span>
        <div style="margin-top: 10px; display: flex; gap: 8px; flex-wrap: wrap;">
          <button type="button" class="btn-table-sm" onclick="redirectToRegisterWithEmail('${email}', '${pass}')" style="background:var(--primary-green); color:#fff; border:none; padding:7px 14px; border-radius:6px; cursor:pointer; font-weight:700;">
            <i class="fa-solid fa-user-plus"></i> إنشاء حساب جديد بهذا البريد
          </button>
          <button type="button" class="btn-table-sm" onclick="openForgotPasswordView('${email}')" style="background:#475569; color:#fff; border:none; padding:7px 14px; border-radius:6px; cursor:pointer;">
            <i class="fa-solid fa-key"></i> نسيت كلمة المرور؟
          </button>
        </div>
      `);
    } else if (code === 'auth/too-many-requests') {
      showAuthNotice('authViewLogin', 'warning', '<strong>⏳ تم إيقاف المحاولات مؤقتاً</strong> لحماية أمان الحساب لكثرة المحاولات الخاطئة. يرجى الانتظار بضع دقائق أو استعادة كلمة المرور.');
    } else if (code === 'auth/invalid-email') {
      showAuthNotice('authViewLogin', 'warning', '<strong>✉️ صيغة البريد غير صحيحة.</strong> يرجى كتابة بريد إلكتروني سليم (مثال: name@domain.com).');
    } else if (code === 'auth/network-request-failed') {
      showAuthNotice('authViewLogin', 'error', '<strong>📡 تعذر الاتصال بالخادم.</strong> يرجى التأكد من اتصال الإنترنت والمحاولة مجدداً.');
    } else {
      showAuthNotice('authViewLogin', 'error', `تعذر تسجيل الدخول: ${error.message || error}`);
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }
}

async function handleAuthRegister(e) {
  e.preventDefault();
  clearAuthNotices();
  clearFieldErrors('authViewRegister');

  const nameInput = document.getElementById('regNameInput');
  const emailInput = document.getElementById('regEmailInput');
  const passInput = document.getElementById('regPassInput');

  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
  const pass = passInput ? passInput.value : '';
  const isNGO = document.querySelector('input[name="regUserRole"]:checked')?.value === 'ngo';

  let firstErrorId = null;

  if (!name) {
    showFieldError('regNameInput', 'يرجى إدخال اسمك الكامل أو اسم ممثل الجمعية.');
    if (!firstErrorId) firstErrorId = 'regNameInput';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    showFieldError('regEmailInput', 'يرجى إدخال البريد الإلكتروني.');
    if (!firstErrorId) firstErrorId = 'regEmailInput';
  } else if (!emailRegex.test(email)) {
    showFieldError('regEmailInput', 'يرجى إدخال بريد إلكتروني صحيح (مثال: name@domain.com).');
    if (!firstErrorId) firstErrorId = 'regEmailInput';
  }

  const hasNumber = /\d/.test(pass);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(pass);

  if (!pass) {
    showFieldError('regPassInput', 'يرجى إدخال كلمة المرور.');
    if (!firstErrorId) firstErrorId = 'regPassInput';
  } else if (pass.length < 8 || !hasNumber || !hasSpecial) {
    showFieldError('regPassInput', '🔒 كلمة المرور يجب ألا تقل عن 8 خانات، وتتضمن رقماً واحداً ورمزاً خاصاً (مثل: #، @، $، !).');
    if (!firstErrorId) firstErrorId = 'regPassInput';
  }

  let ngoData = null;
  if (isNGO) {
    const ngoName = document.getElementById('regNgoName')?.value.trim();
    const ngoGov = document.getElementById('regNgoGov')?.value;
    const ngoRegNum = document.getElementById('regNgoRegNum')?.value.trim();
    const ngoAddress = document.getElementById('regNgoAddress')?.value.trim();
    const ngoContact = document.getElementById('regNgoContact')?.value.trim();
    const ngoPhone = document.getElementById('regNgoPhone')?.value.trim();
    const consent = document.getElementById('regNgoConsent')?.checked;

    if (!ngoName) {
      showFieldError('regNgoName', 'يرجى كتابة الاسم الرسمي للجمعية المشهرة.');
      if (!firstErrorId) firstErrorId = 'regNgoName';
    }

    if (!ngoGov) {
      showFieldError('regNgoGov', 'يرجى اختيار المحافظة التابعة لها الجمعية.');
      if (!firstErrorId) firstErrorId = 'regNgoGov';
    }

    if (!ngoPhone) {
      showFieldError('regNgoPhone', 'يرجى إدخال رقم هاتف أو واتساب مسؤول التواصل.');
      if (!firstErrorId) firstErrorId = 'regNgoPhone';
    }

    if (!consent) {
      showFieldError('regNgoConsent', 'يجب الموافقة على إقرار صحة البيانات والميثاق المؤسسي للمتابعة.');
      if (!firstErrorId) firstErrorId = 'regNgoConsent';
    }

    if (firstErrorId) {
      scrollToFirstError(firstErrorId);
      return;
    }

    ngoData = {
      ngoName,
      ngoGov,
      ngoRegNum,
      ngoAddress,
      ngoContact,
      ngoPhone
    };
  } else {
    if (firstErrorId) {
      scrollToFirstError(firstErrorId);
      return;
    }
  }

  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn ? submitBtn.innerHTML : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري إنشاء الحساب السحابي...';
  }

  try {
    if (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.register) {
      const { user, userData } = await window.NGOHUB_FIREBASE.register(
        email, 
        pass, 
        name, 
        isNGO ? 'ngo' : 'individual', 
        ngoData
      );

      const isAdm = window.NGOHUB_FIREBASE.isCurrentUserAdmin();
      const newUser = {
        id: user.uid,
        uid: user.uid,
        name: name,
        email: email,
        role: isAdm ? 'admin' : (isNGO ? 'ngo' : 'individual'),
        isNGO: isNGO,
        ngoData: ngoData,
        provider: 'password',
        createdAt: new Date().toISOString()
      };

      // Also sync local storage
      const allUsers = getRegisteredUsers();
      allUsers.unshift(newUser);
      localStorage.setItem('ngohub_registered_users', JSON.stringify(allUsers));

      // Dual-sync to Google Sheets for instant admin notification
      if (isNGO && ngoData) {
        sendToGoogleSheets({
          type: "تسجيل جمعية جديدة",
          date: new Date().toLocaleString('ar-EG'),
          email: email,
          name: name,
          ngoName: ngoData.ngoName,
          ngoGov: ngoData.ngoGov,
          ngoRegNum: ngoData.ngoRegNum,
          ngoAddress: ngoData.ngoAddress,
          ngoContact: ngoData.ngoContact,
          ngoPhone: ngoData.ngoPhone
        });
      }

      // Transition to verification notice view
      pendingVerificationCredentials = { email, pass };
      switchAuthTab('verify', email, pass);
      showToast("✉️ تم إرسال رابط تأكيد رسمي إلى بريدك الإلكتروني بنجاح!", "success");
    } else {
      const isAdmin = ADMIN_AUTHORIZED_EMAILS.includes(email);
      const newUser = {
        id: 'usr_' + Date.now(),
        name: name,
        email: email,
        role: isAdmin ? 'admin' : (isNGO ? 'ngo' : 'individual'),
        isNGO: isNGO,
        ngoData: ngoData,
        provider: 'password',
        createdAt: new Date().toISOString()
      };

      const allUsers = getRegisteredUsers();
      allUsers.unshift(newUser);
      localStorage.setItem('ngohub_registered_users', JSON.stringify(allUsers));

      if (isNGO && ngoData) {
        sendToGoogleSheets({
          type: "تسجيل جمعية جديدة",
          date: new Date().toLocaleString('ar-EG'),
          email: email,
          name: name,
          ngoName: ngoData.ngoName,
          ngoGov: ngoData.ngoGov,
          ngoRegNum: ngoData.ngoRegNum,
          ngoAddress: ngoData.ngoAddress,
          ngoContact: ngoData.ngoContact,
          ngoPhone: ngoData.ngoPhone
        });
      }

      pendingVerificationCredentials = { email, pass };
      switchAuthTab('verify', email, pass);
      showToast("✉️ تم إرسال رابط تأكيد رسمي إلى بريدك الإلكتروني بنجاح!", "success");
    }
  } catch (error) {
    console.error("Registration error:", error);
    const code = error.code || '';

    if (code === 'auth/email-already-in-use') {
      showAuthNotice('authViewRegister', 'info', `
        <strong>ℹ️ هذا البريد الإلكتروني مسجل بالفعل في منصة NGOHUB.</strong><br>
        <span style="display:inline-block; margin-top:4px;"><i class="fa-solid fa-arrows-rotate fa-spin"></i> جاري توجيهك لتسجيل الدخول مباشرة...</span>
      `);
      setTimeout(() => {
        clearAuthNotices();
        switchAuthTab('login');
        const loginEmail = document.getElementById('loginEmailInput');
        if (loginEmail) loginEmail.value = email;
        const loginPass = document.getElementById('loginPassInput');
        if (loginPass) {
          loginPass.value = '';
          loginPass.focus();
        }
        showAuthNotice('authViewLogin', 'info', `🔑 الحساب مسجل مسبقاً. يرجى كتابة كلمة المرور لتسجيل الدخول، أو انقر على <strong>"نسيت كلمة المرور؟"</strong> لاستعادتها.`);
      }, 1600);
    } else if (code === 'auth/weak-password') {
      showAuthNotice('authViewRegister', 'warning', '<strong>🔒 كلمة المرور غير مطابقة لمعايير الأمان.</strong> يجب أن لا تقل عن 8 خانات وتتضمن رقماً ورمزاً خاصاً (#@$).');
    } else if (code === 'auth/invalid-email') {
      showAuthNotice('authViewRegister', 'warning', '<strong>✉️ صيغة البريد غير صحيحة.</strong> يرجى التحقق من كتابة البريد بشكل سليم.');
    } else if (code === 'auth/network-request-failed') {
      showAuthNotice('authViewRegister', 'error', '<strong>📡 تعذر الاتصال بالخادم.</strong> يرجى التأكد من اتصال الإنترنت.');
    } else {
      showAuthNotice('authViewRegister', 'error', `تعذر إنشاء الحساب: ${error.message || error}`);
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }
}

async function handleForgotPassword(e) {
  e.preventDefault();
  clearAuthNotices();
  const emailInput = document.getElementById('forgotEmailInput');
  const email = emailInput ? emailInput.value.trim().toLowerCase() : '';

  if (!email) {
    showAuthNotice('authViewForgot', 'warning', 'يرجى كتابة البريد الإلكتروني المسجل.');
    return;
  }

  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn ? submitBtn.innerHTML : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري إرسال الرابط...';
  }

  try {
    if (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.resetPassword) {
      await window.NGOHUB_FIREBASE.resetPassword(email);
    }
    showAuthNotice('authViewForgot', 'success', `
      <strong>✅ تم إرسال رابط استعادة كلمة المرور بنجاح!</strong><br>
      يرجى تفقد بريدك الإلكتروني (<code>${email}</code>) وصندوق الوارد أو مجلد الرسائل غير المرغوب فيها (Spam).<br>
      جاري إعادتك لتسجيل الدخول خلال لحظات...
    `);
    document.getElementById('authForgotForm').reset();
    setTimeout(() => {
      clearAuthNotices();
      switchAuthTab('login');
      const loginEmail = document.getElementById('loginEmailInput');
      if (loginEmail) loginEmail.value = email;
    }, 2800);
  } catch (error) {
    console.error("Forgot password error:", error);
    const code = error.code || '';
    if (code === 'auth/user-not-found') {
      showAuthNotice('authViewForgot', 'warning', `
        <strong>⚠️ البريد الإلكتروني غير مسجل بعد في المنصة.</strong><br>
        <button type="button" class="btn-table-sm" onclick="redirectToRegisterWithEmail('${email}')" style="background:var(--primary-green); color:#fff; border:none; padding:7px 14px; border-radius:6px; cursor:pointer; margin-top:8px; font-weight:700;">
          <i class="fa-solid fa-user-plus"></i> إنشاء حساب جديد الآن
        </button>
      `);
    } else if (code === 'auth/invalid-email') {
      showAuthNotice('authViewForgot', 'warning', '✉️ صيغة البريد غير صحيحة.');
    } else {
      showAuthNotice('authViewForgot', 'error', `تعذر إرسال الرابط: ${error.message || error}`);
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }
}

function saveUserSessionAndLogin(user, isNew = false) {
  currentUserSession = user;
  localStorage.setItem('ngohub_user_session', JSON.stringify(user));
  setSessionCookie('ngohub_user_session', JSON.stringify(user), 30);

  closeAuthModal();
  updateHeaderAuthState();

  if (user.role === 'admin') {
    adminAuthenticated = true;
    document.body.classList.add('admin-authenticated');
    showToast(`👑 مرحباً بك يا ${user.name}! تم تسجيل الدخول كمسؤول للمنصة.`);
    if (window.location.pathname.includes('index') || window.location.pathname.endsWith('/')) {
      switchTab('admin', true);
      renderAdminState();
    }
  } else {
    adminAuthenticated = false;
    document.body.classList.remove('admin-authenticated');
    showToast(`✅ أهلاً بك يا ${user.name}! تم تسجيل دخول جمعيتكم بنجاح.`);
  }

  if (typeof initProfilePage === 'function') {
    initProfilePage();
  }
}

function updateHeaderAuthState() {
  const authBtn = document.getElementById('headerAuthBtn');
  const authText = document.getElementById('headerAuthText');
  const mNavText = document.getElementById('mNavAuthText');
  const mNavAuth = document.getElementById('mNav-auth');

  if (currentUserSession) {
    const isAdm = currentUserSession.role === 'admin';
    if (isAdm) {
      adminAuthenticated = true;
      document.body.classList.add('admin-authenticated');
    } else {
      adminAuthenticated = false;
      document.body.classList.remove('admin-authenticated');
    }
    const label = isAdm ? `الإدارة (${currentUserSession.name})` : currentUserSession.name;
    if (authText) authText.innerText = label;
    if (mNavText) mNavText.innerText = label;
    if (authBtn) {
      authBtn.title = `حسابي (${currentUserSession.name})`;
      authBtn.className = isAdm ? 'btn-header-auth admin-active' : 'btn-header-auth user-active';
      authBtn.innerHTML = isAdm 
        ? '<i class="fa-solid fa-user-shield" style="color:#d97706;"></i>' 
        : '<i class="fa-solid fa-user-check" style="color:var(--primary-green);"></i>';
      authBtn.onclick = () => { window.location.href = 'profile.html'; };
    }
    if (mNavAuth) {
      mNavAuth.onclick = () => { window.location.href = 'profile.html'; };
    }
  } else {
    adminAuthenticated = false;
    document.body.classList.remove('admin-authenticated');
    if (authText) authText.innerText = "دخول / تسجيل";
    if (mNavText) mNavText.innerText = "تسجيل الدخول / حسابي";
    if (authBtn) {
      authBtn.title = "تسجيل الدخول أو إنشاء حساب";
      authBtn.className = 'btn-header-auth';
      authBtn.innerHTML = '<i class="fa-solid fa-user-circle"></i>';
      authBtn.onclick = () => { openAuthModal('login'); };
    }
    if (mNavAuth) {
      mNavAuth.onclick = () => { openAuthModal('login'); closeMobileDrawer(); };
    }
  }

  // Re-evaluate grants sign-in wall dynamically
  if (typeof renderGrants === 'function' && document.getElementById('grantsGridContainer')) {
    renderGrants();
  }
}

// --- 8.2.4 Profile Page & Registered NGOs Directory Controller ---
let cachedProfileNgosList = [];

async function initProfilePage() {
  const profileContainer = document.getElementById('profileContentArea');
  if (!profileContainer) return;

  const session = currentUserSession || getStoredUserSession();

  if (!session) {
    profileContainer.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: 24px; border: 1px solid var(--border-color); max-width: 600px; margin: 40px auto; box-shadow: 0 15px 40px rgba(0,0,0,0.06);">
        <div style="width: 80px; height: 80px; border-radius: 50%; background: rgba(16, 185, 129, 0.12); color: var(--primary-green); display: inline-flex; align-items: center; justify-content: center; font-size: 2.5rem; margin-bottom: 20px;">
          <i class="fa-solid fa-user-lock"></i>
        </div>
        <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--text-dark); margin-bottom: 12px;">تسجيل الدخول مطلوب</h2>
        <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 28px;">
          يرجى تسجيل الدخول أو إنشاء حساب جديد للوصول إلى لوحة حسابك، تفاصيل الجمعية المعتمدة، ومتابعة سجل المنح.
        </p>
        <button type="button" class="btn-primary" onclick="openAuthModal('login')" style="padding: 12px 28px; font-size: 1.05rem; font-weight: 700; border-radius: 50px;">
          <i class="fa-solid fa-right-to-bracket"></i> تسجيل الدخول / حسابي
        </button>
      </div>
    `;
    return;
  }

  const isAdm = session.role === 'admin' || ADMIN_AUTHORIZED_EMAILS.includes((session.email || '').toLowerCase().trim());
  const isNGO = session.isNGO || session.role === 'ngo' || !!session.ngoData;

  // Calculate Account Age
  let memberSinceText = 'سجلت حديثاً';
  let exactDateStr = '';
  if (session.createdAt) {
    try {
      const created = new Date(session.createdAt);
      exactDateStr = created.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
      const now = new Date();
      const diffTime = Math.abs(now - created);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 0) {
        memberSinceText = 'سجلت اليوم في المنظومة';
      } else if (diffDays === 1) {
        memberSinceText = 'عضو منذ يوم واحد';
      } else if (diffDays === 2) {
        memberSinceText = 'عضو منذ يومين';
      } else if (diffDays >= 3 && diffDays <= 10) {
        memberSinceText = `عضو منذ ${diffDays} أيام`;
      } else if (diffDays > 10 && diffDays < 30) {
        memberSinceText = `عضو منذ ${diffDays} يوماً`;
      } else {
        const diffMonths = Math.floor(diffDays / 30);
        if (diffMonths === 1) memberSinceText = 'عضو منذ شهر واحد';
        else if (diffMonths === 2) memberSinceText = 'عضو منذ شهرين';
        else if (diffMonths >= 3 && diffMonths <= 10) memberSinceText = `عضو منذ ${diffMonths} أشهر`;
        else memberSinceText = `عضو منذ ${diffMonths} شهراً`;
      }
    } catch (e) {}
  }

  const roleBadgeHtml = isAdm
    ? `<span style="background: #fef3c7; color: #b45309; border: 1px solid #fde68a; padding: 6px 14px; border-radius: 50px; font-weight: 700; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px;"><i class="fa-solid fa-crown text-amber"></i> المشرف العام للمنصة (Admin)</span>`
    : (isNGO 
        ? `<span style="background: rgba(16, 185, 129, 0.12); color: #065f46; border: 1px solid #10b981; padding: 6px 14px; border-radius: 50px; font-weight: 700; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px;"><i class="fa-solid fa-building-circle-check text-emerald"></i> جمعية أهلية معتمدة</span>`
        : `<span style="background: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd; padding: 6px 14px; border-radius: 50px; font-weight: 700; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px;"><i class="fa-solid fa-user"></i> حساب فردي</span>`);

  let ngoProfileHtml = '';
  if (isNGO && session.ngoData) {
    const nd = session.ngoData;
    const cleanPhone = (nd.ngoPhone || '').replace(/[^0-9]/g, '');
    ngoProfileHtml = `
      <div class="profile-section-card">
        <div class="profile-card-title">
          <i class="fa-solid fa-building-circle-check text-emerald"></i>
          <span>ملف بيانات الجمعية الأهلية المشهرة</span>
        </div>
        <div class="ngo-details-grid">
          <div class="ngo-detail-item">
            <span class="ngo-detail-label">1. اسم الجمعية المشهرة:</span>
            <span class="ngo-detail-value">${nd.ngoName || session.name || '-'}</span>
          </div>
          <div class="ngo-detail-item">
            <span class="ngo-detail-label">2. المحافظة:</span>
            <span class="ngo-detail-value"><i class="fa-solid fa-location-dot text-emerald"></i> ${nd.ngoGov || '-'}</span>
          </div>
          <div class="ngo-detail-item">
            <span class="ngo-detail-label">3. رقم القيد / الإشهار الرسمي:</span>
            <span class="ngo-detail-value"><i class="fa-solid fa-certificate text-emerald"></i> ${nd.ngoRegNum || 'قيد المراجعة'}</span>
          </div>
          <div class="ngo-detail-item">
            <span class="ngo-detail-label">4. المقر والعنوان بالتفصيل:</span>
            <span class="ngo-detail-value">${nd.ngoAddress || 'غير محدد'}</span>
          </div>
          <div class="ngo-detail-item">
            <span class="ngo-detail-label">5. مسؤول التواصل / الممثل:</span>
            <span class="ngo-detail-value"><i class="fa-solid fa-user-tie text-emerald"></i> ${nd.ngoContact || session.name || '-'}</span>
          </div>
          <div class="ngo-detail-item">
            <span class="ngo-detail-label">6. هاتف وواتساب التواصل:</span>
            <span class="ngo-detail-value" style="display:flex; align-items:center; gap:8px;">
              <span style="direction:ltr;">${nd.ngoPhone || '-'}</span>
              ${cleanPhone ? `<a href="https://wa.me/${cleanPhone}" target="_blank" class="btn-table-sm" style="background:#22c55e; color:#fff; text-decoration:none; padding:4px 8px; border-radius:6px;" title="واتساب"><i class="fa-brands fa-whatsapp"></i> مراسلة</a>` : ''}
            </span>
          </div>
        </div>
        <div style="margin-top: 20px; padding: 14px 18px; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; font-size: 0.92rem; color: #065f46; display: flex; align-items: center; gap: 10px;">
          <i class="fa-solid fa-circle-check text-emerald" style="font-size: 1.3rem;"></i>
          <span>تم توثيق بيانات الجمعية بنجاح وهي مشمولة في سجلات التحالف ومؤهلة للحصول على خدمات التأهيل والمنح.</span>
        </div>
      </div>
    `;
  }

  let adminSectionHtml = '';
  if (isAdm) {
    adminSectionHtml = `
      <div class="profile-section-card" style="border: 1px solid rgba(245, 158, 11, 0.35); background: linear-gradient(180deg, rgba(254, 243, 199, 0.12) 0%, var(--bg-card) 100%);">
        <div class="profile-card-title" style="color: #b45309;">
          <i class="fa-solid fa-shield-halved text-amber"></i>
          <span>لوحة المشرف العام وسجل الجمعيات المسجلة المجمع (Admin Hub)</span>
        </div>
        
        <div style="display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 24px;">
          <a href="index.html#admin" class="btn-primary" style="padding: 12px 24px; font-weight: 700; border-radius: 10px; display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">
            <i class="fa-solid fa-gauge-high"></i> فتح لوحة تحكم إدارة المحتوى (CMS Dashboard)
          </a>
          <button type="button" class="btn-secondary" onclick="exportRegisteredNgosCsv()" style="padding: 12px 20px; font-weight: 700; border-radius: 10px; display: inline-flex; align-items: center; gap: 8px;">
            <i class="fa-solid fa-file-excel text-emerald"></i> تصدير بيانات الجمعيات (CSV / Excel)
          </button>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 16px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-dark); margin: 0;">
                <i class="fa-solid fa-building-flag text-emerald"></i> سجل الجمعيات الأهلية المسجلة
              </h3>
              <span id="profileNgoCountBadge" class="service-badge" style="background:#dcfce7; color:#15803d; border:1px solid #bbf7d0;">جاري التحميل...</span>
            </div>
            
            <div style="display: flex; gap: 10px; flex-wrap: wrap; flex: 1; max-width: 500px; justify-content: flex-end;">
              <input type="text" id="profileNgoSearchInput" oninput="filterProfileNgosTable()" placeholder="ابحث باسم الجمعية أو المحافظة..." class="form-input" style="padding: 8px 14px; font-size: 0.9rem; flex: 1; min-width: 180px;">
              <select id="profileNgoGovSelect" onchange="filterProfileNgosTable()" class="form-select" style="padding: 8px 12px; font-size: 0.9rem; width: 140px;">
                <option value="all">كل المحافظات</option>
              </select>
            </div>
          </div>

          <div class="table-responsive" style="max-height: 450px; overflow-y: auto;">
            <table class="cms-table" style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
              <thead>
                <tr style="background: var(--bg-card-alt); border-bottom: 2px solid var(--border-color); text-align: right;">
                  <th style="padding: 12px;">الجمعية المشهرة</th>
                  <th style="padding: 12px;">المحافظة</th>
                  <th style="padding: 12px;">رقم القيد</th>
                  <th style="padding: 12px;">مسؤول التواصل</th>
                  <th style="padding: 12px;">الهاتف / واتساب</th>
                  <th style="padding: 12px;">تاريخ التسجيل</th>
                  <th style="padding: 12px; text-align: center;">إجراءات</th>
                </tr>
              </thead>
              <tbody id="profileNgosTbody">
                <tr>
                  <td colspan="7" style="text-align: center; padding: 30px; color: var(--text-muted);">
                    <i class="fa-solid fa-spinner fa-spin"></i> جاري جلب الجمعيات المسجلة من Cloud Firestore بأمان...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  profileContainer.innerHTML = `
    <!-- 1. Header Card -->
    <div class="profile-header-card">
      <div class="profile-user-main">
        <div class="profile-avatar-large">
          <i class="${isAdm ? 'fa-solid fa-user-shield' : (isNGO ? 'fa-solid fa-building-circle-check' : 'fa-solid fa-user')}"></i>
        </div>
        <div class="profile-user-details">
          <h1>${session.name || 'مستخدم المنظومة'}</h1>
          <div class="profile-user-email"><i class="fa-regular fa-envelope"></i> ${session.email}</div>
          <div class="profile-badges-row">
            ${roleBadgeHtml}
            <span style="background: rgba(15, 23, 42, 0.05); color: var(--text-muted); padding: 6px 14px; border-radius: 50px; font-size: 0.85rem; font-weight: 600;">
              <i class="fa-solid fa-calendar-check text-emerald"></i> ${memberSinceText} ${exactDateStr ? `(${exactDateStr})` : ''}
            </span>
          </div>
        </div>
      </div>
      
      <div class="profile-actions-bar">
        ${isAdm ? `<a href="index.html#admin" class="btn-secondary" style="text-decoration:none;"><i class="fa-solid fa-sliders"></i> لوحة الإدارة</a>` : ''}
        <button type="button" class="btn-table-sm" onclick="handleProfileLogout()" style="background: rgba(239, 68, 68, 0.12); color: #dc2626; border: 1px solid rgba(239, 68, 68, 0.3); padding: 10px 18px; border-radius: 10px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-arrow-right-from-bracket"></i> تسجيل الخروج
        </button>
      </div>
    </div>

    <!-- 2. NGO Profile (If NGO) -->
    ${ngoProfileHtml}

    <!-- 3. Admin Section & Directory (If Admin) -->
    ${adminSectionHtml}
  `;

  if (isAdm) {
    loadProfileNgosDirectory();
  }
}

async function loadProfileNgosDirectory() {
  const tbody = document.getElementById('profileNgosTbody');
  const countBadge = document.getElementById('profileNgoCountBadge');
  const govSelect = document.getElementById('profileNgoGovSelect');
  if (!tbody) return;

  let allUsers = [];
  if (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.getUsersList) {
    try {
      allUsers = await window.NGOHUB_FIREBASE.getUsersList();
    } catch (e) {
      console.warn("Could not fetch users from Firebase, fallback to local:", e);
      allUsers = getRegisteredUsers();
    }
  } else {
    allUsers = getRegisteredUsers();
  }

  // Filter only NGOs
  cachedProfileNgosList = allUsers.filter(u => u.isNGO || u.role === 'ngo' || u.ngoData);

  if (countBadge) {
    countBadge.textContent = `${cachedProfileNgosList.length} جمعية مسجلة`;
  }

  // Populate governorate filter
  if (govSelect) {
    const govs = new Set();
    cachedProfileNgosList.forEach(u => {
      const g = (u.ngoData && u.ngoData.ngoGov) || '';
      if (g) govs.add(g);
    });
    govSelect.innerHTML = '<option value="all">كل المحافظات</option>' + Array.from(govs).map(g => `<option value="${g}">${g}</option>`).join('');
  }

  renderProfileNgosTable(cachedProfileNgosList);
}

function renderProfileNgosTable(ngos) {
  const tbody = document.getElementById('profileNgosTbody');
  if (!tbody) return;

  if (!ngos || ngos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:30px; color:var(--text-muted);">لا توجد جمعيات مطابقة للبحث.</td></tr>`;
    return;
  }

  tbody.innerHTML = ngos.map(user => {
    const nd = user.ngoData || {};
    const ngoName = nd.ngoName || user.name || '-';
    const gov = nd.ngoGov || '-';
    const regNum = nd.ngoRegNum || 'قيد المراجعة';
    const contact = nd.ngoContact || user.name || '-';
    const phone = nd.ngoPhone || '-';
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const dateVal = user.createdAtIso || user.createdAt;
    const dateStr = dateVal ? new Date(dateVal).toLocaleDateString('ar-EG') : 'حديثاً';

    const waBtn = (cleanPhone && cleanPhone !== '-')
      ? `<a href="https://wa.me/${cleanPhone}" target="_blank" class="btn-table-sm" style="background:#22c55e; color:#fff; text-decoration:none; padding:4px 8px; border-radius:6px;" title="مراسلة"><i class="fa-brands fa-whatsapp"></i> ${phone}</a>`
      : `<span style="color:var(--text-muted); font-size:0.85rem;">${phone}</span>`;

    const detailBtn = `<button type="button" class="btn-table-sm" onclick="showAdminUserDetail('${user.uid || user.id}')" style="background:#0284c7; color:#fff; border:none; padding:5px 10px; border-radius:6px; cursor:pointer;" title="عرض استمارة التأهيل الكاملة"><i class="fa-solid fa-eye"></i> تفاصيل</button>`;

    return `
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 12px; font-weight: 700; color: var(--text-dark);">${ngoName}</td>
        <td style="padding: 12px;"><i class="fa-solid fa-location-dot text-emerald"></i> ${gov}</td>
        <td style="padding: 12px; font-size: 0.85rem;">${regNum}</td>
        <td style="padding: 12px;">${contact}</td>
        <td style="padding: 12px;">${waBtn}</td>
        <td style="padding: 12px; font-size: 0.85rem; color: var(--text-muted);">${dateStr}</td>
        <td style="padding: 12px; text-align: center;">${detailBtn}</td>
      </tr>
    `;
  }).join('');
}

function filterProfileNgosTable() {
  const q = (document.getElementById('profileNgoSearchInput')?.value || '').trim().toLowerCase();
  const gov = document.getElementById('profileNgoGovSelect')?.value || 'all';

  const filtered = cachedProfileNgosList.filter(u => {
    const nd = u.ngoData || {};
    const nameMatch = (nd.ngoName || '').toLowerCase().includes(q) || (u.name || '').toLowerCase().includes(q) || (nd.ngoContact || '').toLowerCase().includes(q);
    const govMatch = (gov === 'all') || (nd.ngoGov === gov);
    return nameMatch && govMatch;
  });

  renderProfileNgosTable(filtered);
}

function exportRegisteredNgosCsv() {
  if (!cachedProfileNgosList || cachedProfileNgosList.length === 0) {
    showToast("لا توجد جمعيات مسجلة للتصدير حالياً.", "warning");
    return;
  }

  const headers = ["اسم الجمعية", "المحافظة", "رقم القيد والإشهار", "المقر والعنوان", "مسؤول التواصل", "رقم الهاتف والواتساب", "البريد الإلكتروني", "تاريخ التسجيل"];
  const rows = cachedProfileNgosList.map(u => {
    const nd = u.ngoData || {};
    return [
      `"${(nd.ngoName || u.name || '').replace(/"/g, '""')}"`,
      `"${(nd.ngoGov || '').replace(/"/g, '""')}"`,
      `"${(nd.ngoRegNum || '').replace(/"/g, '""')}"`,
      `"${(nd.ngoAddress || '').replace(/"/g, '""')}"`,
      `"${(nd.ngoContact || u.name || '').replace(/"/g, '""')}"`,
      `"${(nd.ngoPhone || '').replace(/"/g, '""')}"`,
      `"${(u.email || '').replace(/"/g, '""')}"`,
      `"${(u.createdAtIso || u.createdAt || '').replace(/"/g, '""')}"`
    ];
  });

  const csvContent = "\uFEFF" + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ngohub_registered_ngos_${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("✅ تم تصدير بيانات الجمعيات المسجلة بنجاح!");
}

async function handleProfileLogout() {
  const confirmed = confirm("هل ترغب في تسجيل الخروج من حسابك الآن؟");
  if (!confirmed) return;

  if (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.logout) {
    try {
      await window.NGOHUB_FIREBASE.logout();
    } catch (e) {
      console.warn("Logout error:", e);
    }
  }
  currentUserSession = null;
  localStorage.removeItem('ngohub_user_session');
  deleteSessionCookie('ngohub_user_session');
  adminAuthenticated = false;
  document.body.classList.remove('admin-authenticated');
  updateHeaderAuthState();
  showToast("تم تسجيل الخروج بنجاح.");
  window.location.href = 'index.html';
}

// User List Storage & CMS Helpers
function getRegisteredUsers() {
  let stored = localStorage.getItem('ngohub_registered_users');
  if (!stored) {
    // Seed initial realistic data for testing
    const seed = [
      {
        id: 'usr_sample_1',
        name: 'د. سامح عبد الفتاح',
        email: 'sameh.ngo@example.org',
        role: 'ngo',
        isNGO: true,
        ngoData: {
          ngoName: 'جمعية نهضة حوش عيسى لتنمية المجتمع',
          ngoGov: 'البحيرة',
          ngoRegNum: 'قيد 2140 لسنة 2017',
          ngoAddress: 'شارع الجمهورية - حوش عيسى',
          ngoContact: 'د. سامح عبد الفتاح (رئيس مجلس الإدارة)',
          ngoPhone: '01026847508'
        },
        provider: 'password',
        createdAt: '2026-11-15T10:30:00.000Z'
      },
      {
        id: 'usr_sample_2',
        name: 'م. مروة الألفي',
        email: 'marwa.alfy@gmail.com',
        role: 'ngo',
        isNGO: true,
        ngoData: {
          ngoName: 'مؤسسة بصمة خضراء للتنمية والبيئة',
          ngoGov: 'الإسكندرية',
          ngoRegNum: 'إشهار 948 لسنة 2020',
          ngoAddress: 'سيدي بشر قبلي - الإسكندرية',
          ngoContact: 'م. مروة الألفي (المدير التنفيذي)',
          ngoPhone: '01223456789'
        },
        provider: 'google',
        createdAt: '2026-11-16T14:15:00.000Z'
      },
      {
        id: 'usr_sample_3',
        name: 'يوسف خضر (المسؤول العام)',
        email: 'youssefkhedr92@gmail.com',
        role: 'admin',
        isNGO: false,
        ngoData: null,
        provider: 'google',
        createdAt: '2026-11-17T09:00:00.000Z'
      }
    ];
    localStorage.setItem('ngohub_registered_users', JSON.stringify(seed));
    return seed;
  }
  return JSON.parse(stored);
}



// --- 8.3 NGOHUB Water Calculator (Direct via GCT & Indirect via Paperless Transformation) ---
function calculateNgohubWater() {
  const paperRange = document.getElementById('waterPaperRange');
  const cleanupsInput = document.getElementById('waterGctCleanups');
  const workshopsInput = document.getElementById('waterGctWorkshops');

  if (!paperRange) return;

  const monthlyTransactions = parseFloat(paperRange.value || '1000');
  const workshops = parseFloat(workshopsInput ? workshopsInput.value : '8') || 0;

  // Label text update
  const paperText = document.getElementById('waterPaperValText');
  if (paperText) paperText.innerText = Number(monthlyTransactions).toLocaleString('ar-EG') + " معاملة/شهر";

  // Calculations:
  // 1. Indirect Water (Paperless): 10 Liters of pure fresh water saved per paper sheet eliminated
  const annualIndirectSheets = monthlyTransactions * 12;
  const indirectWaterLiters = Math.round(annualIndirectSheets * 10);
  const indirectMoneySaved = Math.round(annualIndirectSheets * 2.5); // 2.5 EGP paper & toner & print

  // 2. Direct Water (GCT agricultural workshops & modern irrigation):
  // 50,000 Liters of irrigation water saved per agricultural workshop / Azolla demo field
  const directWaterLiters = workshops * 50000;

  // 3. Totals
  const totalWaterLiters = indirectWaterLiters + directWaterLiters;
  const totalWaterM3 = (totalWaterLiters / 1000).toFixed(1);
  const familiesDaily = Math.round(totalWaterLiters / 350); // Daily water consumption for average family (~350L)
  const treesProtected = (annualIndirectSheets / 8333).toFixed(1);

  // Update Output DOM elements
  const elemTotal = document.getElementById('resWaterTotalLiters');
  const elemM3 = document.getElementById('resWaterTotalM3');
  const elemIndirect = document.getElementById('resWaterIndirect');
  const elemDirect = document.getElementById('resWaterDirect');
  const elemMoney = document.getElementById('resWaterMoneySaved');
  const elemFamilies = document.getElementById('resWaterFamilies');
  const elemTrees = document.getElementById('resWaterTrees');

  if (elemTotal) elemTotal.innerText = Number(totalWaterLiters).toLocaleString('ar-EG') + " لتر";
  if (elemM3) elemM3.innerText = Number(totalWaterM3).toLocaleString('ar-EG') + " م³";
  if (elemIndirect) elemIndirect.innerText = Number(indirectWaterLiters).toLocaleString('ar-EG') + " لتر";
  if (elemDirect) elemDirect.innerText = Number(directWaterLiters).toLocaleString('ar-EG') + " لتر";
  if (elemMoney) elemMoney.innerText = Number(indirectMoneySaved).toLocaleString('ar-EG') + " ج.م";
  if (elemFamilies) elemFamilies.innerText = Number(familiesDaily).toLocaleString('ar-EG') + " أسرة";
  if (elemTrees) elemTrees.innerText = Number(treesProtected).toLocaleString('ar-EG') + " شجرة";
}

// --- 8.4 Services Impact Calculator for NGOs ---
const NGOHUB_SERVICES_IMPACT_DATA = {
  srv_web: { name: "موقع إلكتروني تعريفي ورسمي (.org)", water: 150000, money: 37500, paper: 15000, readiness: 15, hours: 180 },
  srv_portal: { name: "منصة التحول الرقمي وأتمتة السجلات", water: 250000, money: 62500, paper: 25000, readiness: 25, hours: 320 },
  srv_volunteers: { name: "نظام إدارة المتطوعين وتوثيق الساعات", water: 80000, money: 20000, paper: 8000, readiness: 15, hours: 120 },
  srv_grants: { name: "التأهيل لمنح المناخ والتمويل الدولي", water: 120000, money: 45000, paper: 12000, readiness: 25, hours: 200 },
  srv_water_gct: { name: "ورش ترشيد مياه الري والحلول الخضراء مع GCT", water: 300000, money: 50000, paper: 0, readiness: 15, hours: 150 },
  srv_smart_comp: { name: "إعداد المكون الذكي للمشروعات الخضراء", water: 100000, money: 25000, paper: 10000, readiness: 20, hours: 100 }
};

function calculateServicesImpact() {
  let totalWater = 0;
  let totalMoney = 0;
  let totalPaper = 0;
  let totalReadiness = 10; // Baseline 10%
  let totalHours = 0;
  let selectedCount = 0;

  Object.keys(NGOHUB_SERVICES_IMPACT_DATA).forEach(srvKey => {
    const chk = document.getElementById(`chk_${srvKey}`);
    const card = document.getElementById(`card_${srvKey}`);
    if (chk && chk.checked) {
      selectedCount++;
      if (card) card.classList.add('selected');
      const data = NGOHUB_SERVICES_IMPACT_DATA[srvKey];
      totalWater += data.water;
      totalMoney += data.money;
      totalPaper += data.paper;
      totalReadiness += data.readiness;
      totalHours += data.hours;
    } else if (card) {
      card.classList.remove('selected');
    }
  });

  if (totalReadiness > 100) totalReadiness = 100;

  // DOM Outputs
  const outWater = document.getElementById('srvOutWater');
  const outMoney = document.getElementById('srvOutMoney');
  const outPaper = document.getElementById('srvOutPaper');
  const outScore = document.getElementById('srvOutScore');
  const outHours = document.getElementById('srvOutHours');
  const outCount = document.getElementById('srvOutCountBadge');

  if (outWater) outWater.innerText = Number(totalWater).toLocaleString('ar-EG') + " لتر";
  if (outMoney) outMoney.innerText = Number(totalMoney).toLocaleString('ar-EG') + " ج.م";
  if (outPaper) outPaper.innerText = Number(totalPaper).toLocaleString('ar-EG') + " ورقة";
  if (outScore) outScore.innerText = totalReadiness + "%";
  if (outHours) outHours.innerText = Number(totalHours).toLocaleString('ar-EG') + " ساعة";
  if (outCount) outCount.innerText = selectedCount + " خدمات مختارة";
}

function toggleServiceCheck(srvKey) {
  const chk = document.getElementById(`chk_${srvKey}`);
  if (chk) {
    chk.checked = !chk.checked;
    calculateServicesImpact();
  }
}

function requestSelectedServices() {
  const selectedNames = [];
  Object.keys(NGOHUB_SERVICES_IMPACT_DATA).forEach(srvKey => {
    const chk = document.getElementById(`chk_${srvKey}`);
    if (chk && chk.checked) {
      selectedNames.push(NGOHUB_SERVICES_IMPACT_DATA[srvKey].name);
    }
  });

  const notes = selectedNames.length > 0
    ? "الخدمات المختارة من حاسبة الأثر:\n- " + selectedNames.join("\n- ")
    : "طلب استشارة لخدمات NGOHUB";

  openServiceModal('web_dev');
  setTimeout(() => {
    const notesInput = document.getElementById('modalUserNotes');
    if (notesInput) notesInput.value = notes;
  }, 200);
}

// Scroll Helper Functions for Eco & Economic Hubs
function scrollToEcoCalculator() {
  switchTab('home');
  const section = document.getElementById('ecoCalculatorSection');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function scrollToWaterHub() {
  switchTab('home');
  const section = document.getElementById('waterHubSection');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function scrollToEcoDashboard() {
  switchTab('home');
  const section = document.getElementById('ecoDashboardSection');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// --- 9. Enhanced Specialized NGO Readiness Assessment & Diagnostic Tool ---
function calculateReadinessScore() {
  const q1 = parseFloat(document.getElementById('rq1')?.value || '0');
  const q2 = parseFloat(document.getElementById('rq2')?.value || '0');
  const q3 = parseFloat(document.getElementById('rq3')?.value || '0');
  const q4 = parseFloat(document.getElementById('rq4')?.value || '0');
  const q5 = parseFloat(document.getElementById('rq5')?.value || '0');
  const q6 = parseFloat(document.getElementById('rq6')?.value || '0');

  const total = Math.round(q1 + q2 + q3 + q4 + q5 + q6);
  const dialElem = document.getElementById('readinessScoreVal');
  const titleElem = document.getElementById('readinessStatusTitle');
  const adviceElem = document.getElementById('readinessAdviceText');

  if (dialElem) dialElem.innerText = total + "%";

  if (total <= 35) {
    if (titleElem) titleElem.innerText = "المستوى التأسيسي (تحتاج لتدخل ودعم تقني عاجل)";
    if (adviceElem) adviceElem.innerText = "الجمعية تفتقر للبنية الرقمية والتنظيم الإداري الأساسي المشروط لدى المانحين الدوليين. انقر على زر (عرض التقرير التشخيصي) لمعرفة الفجوات وخطة التطوير.";
  } else if (total <= 70) {
    if (titleElem) titleElem.innerText = "المستوى الواعد (جاهزية متوسطة تحتاج استكمال)";
    if (adviceElem) adviceElem.innerText = "تمتلك الجمعية مقومات جيدة، ولكن توجد فجوات في توثيق الأثر أو صياغة المقترحات الذكية. طالع التقرير التشخيصي لتحديد الخطوة التالية.";
  } else {
    if (titleElem) titleElem.innerText = "المستوى المتقدم (مؤهلة ومكتملة المعايير للمنح الكبرى)";
    if (adviceElem) adviceElem.innerText = "ممتاز! تمتلك الجمعية بنية رقمية وإدارية متميزة تمكنها من المنافسة والفوز بالمنح التنموية والدولية المتاحة في بوابتنا.";
  }
}

// Interactive Diagnostic Pop-up Report Modal
function openDiagnosticReportModal() {
  const q1 = parseFloat(document.getElementById('rq1')?.value || '0');
  const q2 = parseFloat(document.getElementById('rq2')?.value || '0');
  const q3 = parseFloat(document.getElementById('rq3')?.value || '0');
  const q4 = parseFloat(document.getElementById('rq4')?.value || '0');
  const q5 = parseFloat(document.getElementById('rq5')?.value || '0');
  const q6 = parseFloat(document.getElementById('rq6')?.value || '0');

  const total = Math.round(q1 + q2 + q3 + q4 + q5 + q6);

  // Update gauge & title
  document.getElementById('popDiagScore').innerText = total + "%";

  const popTitle = document.getElementById('popDiagTitle');
  const popOverview = document.getElementById('popDiagOverview');

  if (total <= 35) {
    popTitle.innerText = "المستوى المؤسسي: تأسيسي أولي (بحاجة لخطة تأهيل)";
    popOverview.innerText = "أظهر التحليل وجود فجوات جوهرية في البنية الرقمية وإدارة البيانات وقنوات التواصل الرسمية، مما يقلل فرص الجمعية في اجتياز الفرز الأولي للمنح.";
  } else if (total <= 70) {
    popTitle.innerText = "المستوى المؤسسي: واعد ومتوسط الجاهزية";
    popOverview.innerText = "تمتلك الجمعية رصيداً جيداً، إلا أن غياب المكون الذكي المقنن أو أتمتة حصر الساعات قد يعيق حصولها على المنح التنافسية الكبرى.";
  } else {
    popTitle.innerText = "المستوى المؤسسي: متقدم ومؤهل للشراكات الدولية";
    popOverview.innerText = "الجمعية تلتزم بأعلى معايير الإدارة والشفافية الرقمية وتعد نموذجاً رائداً ومؤهلاً لاستقطاب التمويلات والمنح متعددة السنوات.";
  }

  // Build Strengths, Weaknesses, and Roadmap dynamically
  const strengths = [];
  const weaknesses = [];
  const roadmap = [];

  // Criterion 1: Website
  if (q1 > 10) {
    strengths.push("امتلاك موقع رسمي متجاوب بنطاق رسمي (.org / .com) يوثق أنشطة وسابقة أعمال الجمعية.");
  } else {
    weaknesses.push("غياب الموقع الرسمي المعتمد، مما يضعف المصداقية الرقمية للجمعية في استمارات المنح الدولية.");
    roadmap.push("بناء وتدشين موقع إلكتروني رسمي للجمعية بنطاق .org مع صفحة لتوثيق المشروعات وقصص الأثر.");
  }

  // Criterion 2: Cloud Database
  if (q2 > 10) {
    strengths.push("وجود قواعد بيانات سحابية مشفرة ومنظمة للمشاريع والعمليات تضمن دقة وسرعة إدارة البيانات واستخراج المؤشرات.");
  } else {
    weaknesses.push("الاعتماد على السجلات الورقية أو ملفات Excel المبعثرة يعرض بيانات العمليات للمخاطر ويعيق استخراج المؤشرات.");
    roadmap.push("أتمتة العمليات الإدارية وإنشاء قاعدة بيانات سحابية مركزية مشفرة لإدارة ومتابعة المشاريع والأنشطة التنموية.");
  }

  // Criterion 3: Volunteer Management
  if (q3 > 10) {
    strengths.push("منظومة منظمة وموثقة للمتطوعين تشمل تسجيل الساعات وتصنيف المهارات وإصدار الشهادات.");
  } else {
    weaknesses.push("افتقار برامج التطوع للتوثيق الرقمي للساعات وحصر مهارات الكوادر الشابة.");
    roadmap.push("تطبيق استمارة تسجيل إلكترونية للمتطوعين ونظام حصر الساعات لتقديمها في تقارير المانحين.");
  }

  // Criterion 4: Financial Transparency
  if (q4 > 10) {
    strengths.push("إدارة مالية وإدارية شفافة مع وجود قوائم مالية مدققة سنوياً.");
  } else {
    weaknesses.push("عدم نشر أو تدقيق القوائم المالية السنوية وهو شرط إلزامي لدى 90% من الصناديق المانحة.");
    roadmap.push("اعتماد وتدقيق القوائم المالية من محاسب قانوني ونشر ملخص تقرير الشفافية المؤسسية.");
  }

  // Criterion 5: Smart & Green Component in Proposals
  if (q5 > 10) {
    strengths.push("جاهزية مقترحات المشروعات بمكون ذكي وتكنولوجي وبيئي متوافق مع معايير المنح العالمية.");
  } else {
    weaknesses.push("الحاجة لصياغة مقترحات المشروعات بطريقة احترافية تدمج الحلول الذكية وخفض الانبعاثات.");
    roadmap.push("صياغة مقترح مشروع تنموي متكامل يتضمن مكوناً تقنياً أو بيئياً بالتعاون مع فريق NGOHUB.");
  }

  // Criterion 6: M&E & Annual Impact Report
  if (q6 > 10) {
    strengths.push("تطبيق منظومة متابعة وتقييم (M&E) مع إصدار تقارير الأثر السنوية الموثقة بالأرقام.");
  } else {
    weaknesses.push("غياب مؤشرات قياس الأثر الرقمية (KPIs) وتقرير الأثر السنوي المنشور.");
    roadmap.push("إعداد وتصميم تقرير الأثر السنوي للجمعية (Annual Impact Report) ولوحة رصد مؤشرات الأداء.");
  }

  // Inject into DOM
  const strElem = document.getElementById('popDiagStrengthsList');
  const wkeElem = document.getElementById('popDiagWeaknessList');
  const rdmElem = document.getElementById('popDiagRoadmapList');

  if (strElem) {
    strElem.innerHTML = strengths.length > 0 
      ? strengths.map(s => `<li>${s}</li>`).join('') 
      : '<li>لا توجد نقاط قوة مكتملة المعايير حالياً، الجمعية بحاجة إلى خطة تأسيس شاملة.</li>';
  }

  if (wkeElem) {
    wkeElem.innerHTML = weaknesses.length > 0 
      ? weaknesses.map(w => `<li>${w}</li>`).join('') 
      : '<li>تهانينا! لم يتم رصد فجوات تشغيلية رئيسية، الجمعية في وضع مؤسسي ممتاز.</li>';
  }

  if (rdmElem) {
    rdmElem.innerHTML = roadmap.length > 0 
      ? roadmap.map(r => `<li>${r}</li>`).join('') 
      : '<li>استمر في المحافظة على التميز والمشاركة في التقديم على المنح الدولية المعروضة بالبوابة.</li>';
  }

  const modal = document.getElementById('readinessReportModal');
  if (modal) modal.classList.add('active');
}

function closeDiagnosticReportModal() {
  const modal = document.getElementById('readinessReportModal');
  if (modal) modal.classList.remove('active');
}

// --- 10. FAQ Accordion Engine ---
function toggleFaq(button) {
  const item = button.parentElement;
  item.classList.toggle('active');
}

// --- 11. Services Management Engine ---
function initServices() {
  const customServices = localStorage.getItem('ngohub_custom_services');
  if (customServices) {
    try {
      const parsed = JSON.parse(customServices);
      if (Array.isArray(parsed) && parsed.length > 0 && parsed.every(s => s.tier_label && s.category && ['digital', 'grants', 'studies', 'capacity'].includes(s.category))) {
        SERVICES_DATA = parsed;
      } else {
        console.warn("[NGOHUB] Legacy service schema detected in localStorage. Purging and restoring canonical institutional services.");
        localStorage.removeItem('ngohub_custom_services');
      }
    } catch (e) {
      console.error("Error parsing custom services:", e);
      localStorage.removeItem('ngohub_custom_services');
    }
  }
  renderServices();
}

function setServiceFilter(filterType) {
  currentServiceFilter = filterType;
  const buttons = document.querySelectorAll('.srv-tab-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-filter') === filterType) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderServices();
}

function filterServicesList() {
  renderServices();
}

function renderServices() {
  const container = document.getElementById('servicesGridContainer');
  if (!container) return;

  const searchVal = (document.getElementById('servicesSearchInput')?.value || '').toLowerCase().trim();

  // Categories Metadata
  const CLUSTER_CONFIG = [
    {
      key: "grants",
      num: "المحور الأول • المسار التمويلي الرئيسي",
      badge: "المحرك الأساسي لـ NGOHUB",
      badgeIcon: "fa-crown",
      title: "خدمات التأهيل وصياغة مقترحات المشروعات التنموية",
      desc: "الحزمة الاستراتيجية الحتمية لتمكين الجمعيات من استيفاء معايير المانحين الدوليين، صياغة المقترحات التنموية باحترافية، بناء مصفوفة النتائج، والمتابعة الرسمية حتى الاعتماد.",
      accent: "emerald",
      btnText: "طلب تأهيل وصياغة مقترح المنحة",
      btnIcon: "fa-file-signature"
    },
    {
      key: "studies",
      num: "المحور الثاني • معايير الجدوى والاستدامة",
      badge: "أولوية الصناديق الخضراء • NISGP",
      badgeIcon: "fa-chart-pie",
      title: "الدراسات الفنية والجدوى وقياس الأثر البيئي والمائي",
      desc: "إعداد دراسات جدوى اقتصادية وفنية صلبة للمشروعات وقياس مؤشرات صون المياه والحد من الانبعاثات وفق أعلى معايير الاستدامة المعتمدة.",
      accent: "blue",
      btnText: "طلب دراسة الجدوى وقياس الأثر",
      btnIcon: "fa-chart-line"
    },
    {
      key: "digital",
      num: "المحور الثالث • الامتثال والبنية التحتية",
      badge: "الهوية الرقمية والشفافية",
      badgeIcon: "fa-laptop-code",
      title: "البنية الرقمية والمواقع الرسمية والتحول المؤسسي",
      desc: "استيفاء شرط المانحين في التحقق الرقمي، تصميم بوابات رسمية معتمدة، حوسبة السجلات التنموية، ولوحات قيادة الأداء وأدوات الذكاء الاصطناعي.",
      accent: "purple",
      btnText: "طلب تطوير المنظومة والبوابة الرقمية",
      btnIcon: "fa-globe"
    },
    {
      key: "capacity",
      num: "المحور الرابع • رأس المال البشري",
      badge: "الجاهزية التنفيذية الميدانية",
      badgeIcon: "fa-users-gear",
      title: "الكوادر والهوية وبناء القدرات المؤسسية",
      desc: "تنظيم وهيكلة فرق العمل وإدارة المتطوعين، إصدار تقارير الاستدامة السنوية للمانحين، وتنفيذ برامج تدريبية متقدمة لقيادات وكوادر الجمعيات.",
      accent: "amber",
      btnText: "طلب برنامج بناء القدرات والكوادر",
      btnIcon: "fa-graduation-cap"
    }
  ];

  // Filter categories to show based on currentServiceFilter
  const activeClusters = currentServiceFilter === 'all'
    ? CLUSTER_CONFIG
    : CLUSTER_CONFIG.filter(c => c.key === currentServiceFilter);

  let totalRendered = 0;
  let html = '';

  activeClusters.forEach(cluster => {
    // Filter services belonging to this cluster
    let clusterServices = SERVICES_DATA.filter(s => s.category === cluster.key);

    if (searchVal) {
      clusterServices = clusterServices.filter(s => {
        const matchTitle = s.title.toLowerCase().includes(searchVal);
        const matchDesc = s.desc.toLowerCase().includes(searchVal);
        const matchTier = (s.tier_label || '').toLowerCase().includes(searchVal);
        const matchFeatures = s.features.some(f => f.toLowerCase().includes(searchVal));
        return matchTitle || matchDesc || matchTier || matchFeatures;
      });
    }

    if (clusterServices.length === 0) return;

    totalRendered += clusterServices.length;

    html += `
      <section class="service-cluster-section cluster-accent-${cluster.accent}" id="cluster-${cluster.key}">
        <!-- Cluster Header Banner -->
        <div class="service-cluster-header">
          <div class="cluster-badge-row">
            <span class="cluster-badge badge-tag-${cluster.accent}">
              <i class="fa-solid ${cluster.badgeIcon}"></i> ${cluster.badge}
            </span>
            <span class="cluster-count-pill">${clusterServices.length} خدمات معتمدة</span>
          </div>
          <div class="cluster-heading-wrap">
            <span class="cluster-num-label">${cluster.num}</span>
            <h3 class="cluster-title">${cluster.title}</h3>
          </div>
          <p class="cluster-desc">${cluster.desc}</p>
        </div>

        <!-- Cluster Cards Grid -->
        <div class="cluster-cards-grid grid-${cluster.key}">
          ${clusterServices.map((s, idx) => {
            const serviceIndexNum = String(SERVICES_DATA.findIndex(item => item.id === s.id) + 1).padStart(2, '0');
            const isFlagship = s.category === 'grants';
            return `
              <div class="service-dossier-card ${isFlagship ? 'card-flagship' : ''} card-theme-${cluster.accent}">
                <!-- Top Accent Strip & Number -->
                <div class="dossier-top-bar">
                  <div class="dossier-icon-box box-${cluster.accent}">
                    <i class="fa-solid ${s.icon}"></i>
                  </div>
                  <span class="dossier-tier-pill pill-${cluster.accent}">
                    <i class="fa-solid fa-shield-halved"></i> ${s.tier_label}
                  </span>
                  <span class="dossier-index">${serviceIndexNum}</span>
                </div>

                <!-- Main Content -->
                <div class="dossier-body">
                  <h4 class="dossier-title">${s.title}</h4>
                  <p class="dossier-text">${s.desc}</p>

                  <div class="dossier-features-wrap">
                    <span class="features-label">المخرجات والمقومات المعتمدة:</span>
                    <ul class="dossier-features-list">
                      ${s.features.map(f => `
                        <li>
                          <i class="fa-solid fa-circle-check text-${cluster.accent}"></i>
                          <span>${f}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>

                <!-- Footer Action Button -->
                <div class="dossier-footer">
                  <button type="button" class="btn-dossier-action btn-action-${cluster.accent}" onclick="openServiceModal('${s.id}')">
                    <i class="fa-solid ${cluster.btnIcon}"></i>
                    <span>${cluster.btnText}</span>
                    <i class="fa-solid fa-arrow-left"></i>
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>
    `;
  });

  if (totalRendered === 0) {
    container.innerHTML = `
      <div class="services-empty-state">
        <i class="fa-solid fa-circle-question" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 12px;"></i>
        <h4>لم يتم العثور على محاور مطابقة للبحث</h4>
        <p style="color: var(--text-secondary); margin-top: 6px;">جرّب استخدام كلمات بحث أخرى مثل: منح، دراسات، مواقع، كفاءات، تدريب.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = html;
}

// --- 12. Modals Management ---
function openServiceModal(serviceId) {
  serviceFormOpenedTime = Date.now();
  const modal = document.getElementById('serviceRequestModal');
  const typeInput = document.getElementById('serviceReqType');
  const titleElem = document.getElementById('sModalTitle');
  const badgeElem = document.getElementById('sModalBadge');

  const srv = SERVICES_DATA.find(s => s.id === serviceId);

  if (typeInput) typeInput.value = serviceId;
  if (titleElem) titleElem.innerText = srv ? `طلب: ${srv.title}` : 'طلب تقييم مؤسسي وشراكة تقنية';
  if (badgeElem) {
    badgeElem.className = 'service-modal-badge';
    badgeElem.style.background = 'rgba(16, 185, 129, 0.12)';
    badgeElem.style.color = 'var(--primary-green-dark)';
    badgeElem.innerText = srv ? srv.tier_label : 'شراكة وتقييم مؤسسي معتمد';
  }

  if (modal) modal.classList.add('active');
}

function closeServiceModal() {
  const modal = document.getElementById('serviceRequestModal');
  if (modal) modal.classList.remove('active');
}

function openGrantModal(grantId) {
  if (!currentUserSession) {
    openAuthModal('register');
    if (window.showToast) showToast("🔒 يرجى تسجيل الدخول أو إنشاء حساب للاطلاع على كامل تفاصيل المنحة ورابط التقديم.", "warning");
    return;
  }

  const grant = ACTIVE_GRANTS.find(g => g.id === grantId);
  if (!grant) return;

  document.getElementById('mTitle').innerText = grant.title;
  document.getElementById('mDonor').innerText = `الجهة المانحة: ${grant.donor}`;
  document.getElementById('mSummary').innerText = grant.description;

  const eligList = document.getElementById('mEligibility');
  if (eligList) {
    eligList.innerHTML = grant.eligibility ? grant.eligibility.map(item => `<li>${sanitizeText(item)}</li>`).join('') : '<li>يرجى مراجعة الموقع الرسمي للمنحة للاطلاع على كامل الشروط والمعايير.</li>';
  }

  const applyGuide = document.getElementById('mApplyGuide');
  if (applyGuide) {
    const methodText = grant.application_method || 'التقديم الإلكتروني المباشر عبر البوابة الرسمية للجهة المانحة.';
    applyGuide.innerHTML = `
      <div style="display:flex; align-items:flex-start; gap:10px; margin-bottom:8px;">
        <i class="fa-solid fa-circle-arrow-left text-emerald" style="margin-top:4px; font-size:1.1rem; flex-shrink:0;"></i>
        <span><strong>قناة وآلية التقديم:</strong> ${sanitizeText(methodText)}</span>
      </div>
      <div style="font-size:0.86rem; color:var(--text-muted); margin-top:8px; border-top:1px dashed var(--border-color); padding-top:8px;">
        <i class="fa-solid fa-circle-info text-azure"></i> زر <strong>التقديم المباشر</strong> بالأسفل ينقلك مباشرة لصفحة التقديم أو كراسة الشروط الرسمية دون الحاجة للبحث في الصفحة الرئيسية للموقع.
      </div>
    `;
  }

  const origLink = document.getElementById('mOriginalLink');
  const directLink = document.getElementById('mDirectLink');
  if (origLink) origLink.href = grant.link;
  if (directLink) directLink.href = grant.link;

  const modal = document.getElementById('grantModal');
  if (modal) modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('grantModal');
  if (modal) modal.classList.remove('active');
}

// Add Grant Modal (CMS)
function openAddGrantModal() {
  const modal = document.getElementById('addGrantModal');
  if (modal) modal.classList.add('active');
}

function closeAddGrantModal() {
  const modal = document.getElementById('addGrantModal');
  if (modal) modal.classList.remove('active');
}

function handleAddGrantSubmit(e) {
  e.preventDefault();

  const title = document.getElementById('newGrantTitle').value.trim();
  const donor = document.getElementById('newGrantDonor').value.trim();
  const type = document.getElementById('newGrantType').value;
  const sector = document.getElementById('newGrantSector').value;
  const region = document.getElementById('newGrantRegion').value;
  const amount = document.getElementById('newGrantAmount').value.trim();
  const deadline = document.getElementById('newGrantDeadline').value.trim();
  const link = document.getElementById('newGrantLink').value.trim();
  const desc = document.getElementById('newGrantDesc').value.trim();
  const eligRaw = document.getElementById('newGrantEligibility').value.trim();

  let badge = "منحة معتمدة";
  if (type === 'ngo') badge = "منحة جمعيات";
  else if (type === 'project') badge = "منحة مشروعات";
  else if (type === 'individual_green') badge = "منحة شبابية خضراء";
  else if (type === 'un_agencies') badge = "شراكات ومنح الأمم المتحدة (UN)";
  else if (type === 'volunteer') badge = "فرص دولية";

  const newGrant = {
    id: "custom_grant_" + Date.now(),
    title,
    donor,
    type,
    sector,
    region,
    amount,
    deadline,
    location: region === 'global' ? 'عالمي' : (region === 'mena' ? 'الشرق الأوسط وشمال إفريقيا' : 'إفريقيا'),
    link,
    badge,
    description: desc,
    tags: deriveGrantTags({ type, sector, region, title, description: desc, amount }),
    eligibility: eligRaw.split('\n').map(s => s.trim()).filter(Boolean)
  };

  ACTIVE_GRANTS.unshift(newGrant);

  let savedCustom = JSON.parse(localStorage.getItem('ngohub_custom_grants') || '[]');
  savedCustom.unshift(newGrant);
  localStorage.setItem('ngohub_custom_grants', JSON.stringify(savedCustom));

  document.getElementById('addGrantForm').reset();
  closeAddGrantModal();

  renderGrants();
  renderCmsGrantsTable();
  updateAdminStats();

  showToast("✅ تمت إضافة المنحة الجديدة بنجاح وحفظها في قاعدة البيانات!");
}

// --- 13. Service Request Form Handler & Security Protections ---
function sanitizeText(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

let lastServiceSubmitTime = 0;
let serviceFormOpenedTime = Date.now();

function handleServiceFormSubmit(e) {
  e.preventDefault();

  // 1. Honeypot Anti-Spam Check (hidden field filled only by bots)
  const honeypot = document.getElementById('hp_org_website')?.value.trim();
  if (honeypot) {
    console.warn("[Security] Bot submission blocked via honeypot.");
    closeServiceModal();
    return;
  }

  // 2. Rapid Automated Submission Protection (<1s indicates a bot script)
  if (Date.now() - serviceFormOpenedTime < 1000) {
    console.warn("[Security] Rapid automated submission blocked.");
    return;
  }

  // 3. Debounce Protection (5 seconds between submissions)
  if (Date.now() - lastServiceSubmitTime < 5000) {
    showToast("⚠️ يرجى الانتظار بضع ثوانٍ قبل إرسال طلب جديد.");
    return;
  }
  lastServiceSubmitTime = Date.now();

  const serviceId = sanitizeText(document.getElementById('serviceReqType').value);
  const ngoName = sanitizeText(document.getElementById('reqNgoName').value.trim());
  const contactPerson = sanitizeText(document.getElementById('reqContactPerson').value.trim());
  const phone = sanitizeText(document.getElementById('reqPhone').value.trim());
  const gov = sanitizeText(document.getElementById('reqGov').value.trim());
  const details = sanitizeText(document.getElementById('reqDetails').value.trim());

  const submission = {
    id: 'req_' + Date.now(),
    date: new Date().toLocaleString('ar-EG'),
    serviceId,
    serviceTitle: SERVICES_DATA.find(s => s.id === serviceId)?.title || serviceId,
    ngoName,
    contactPerson,
    phone,
    gov,
    details
  };

  let stored = JSON.parse(localStorage.getItem('ngohub_submitted_requests') || '[]');
  stored.unshift(submission);
  localStorage.setItem('ngohub_submitted_requests', JSON.stringify(stored));

  sendToGoogleSheets(submission);

  closeServiceModal();
  document.getElementById('serviceRequestForm').reset();
  showToast("✅ تم إرسال طلبكم بنجاح! سيتم التواصل معكم فوراً.");
  loadSubmissionsInboxCount();
}

function sendToGoogleSheets(data) {
  if (!GOOGLE_SHEETS_WEBHOOK_URL || GOOGLE_SHEETS_WEBHOOK_URL.includes("DUMMY_WEBHOOK")) {
    console.log("[Info] Google Sheets webhook URL not configured yet. Data saved locally in CMS.");
    return;
  }

  try {
    fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data)
    })
    .then(() => console.log("[OK] Data sent to Google Sheets webhook."))
    .catch(err => console.log("[Fallback] Google sheets webhook fallback saved locally."));
  } catch (err) {
    console.log("[Local] Submission preserved locally.");
  }
}

// Save Webhook URL from Admin CMS UI
function saveWebhookUrlFromCms() {
  const input = document.getElementById('cmsWebhookUrlInput');
  if (!input) return;

  const url = input.value.trim();
  if (url && url.startsWith('http')) {
    GOOGLE_SHEETS_WEBHOOK_URL = url;
    localStorage.setItem('ngohub_google_sheets_webhook_url', url);
    showToast("✅ تم حفظ رابط Google Sheets Webhook بنجاح!");
  } else {
    alert("يرجى إدخال رابط Web App صحيح يبدأ بـ https://script.google.com/macros/s/...");
  }
}

// Test Send Sample to Google Sheet
function testSendSampleToSheets() {
  const sample = {
    id: "test_" + Date.now(),
    date: new Date().toLocaleString('ar-EG'),
    submissionType: "تجربة ربط المنظومة",
    ngoName: "جمعية تجريبية للتطوير",
    contactPerson: "مسؤول الربط التقني",
    phone: "01026847508",
    gov: "القاهرة / البحيرة",
    serviceTitle: "اختبار مزامنة Webhook",
    details: "هذه رسالة اختبار تلقائية للتأكد من وصول بيانات استمارات NGOHUB لجدول Google Sheets بنجاح."
  };

  sendToGoogleSheets(sample);
  showToast("🚀 تم إرسال صف تجريبي لجدول Google Sheets! تحقق من الجدول الآن.");
}

// --- 14. Admin CMS Dashboard Engine ---
function renderAdminState() {
  const loginBox = document.getElementById('adminLoginBox');
  const dashBox = document.getElementById('adminDashboardBox');

  if (adminAuthenticated) {
    if (loginBox) loginBox.style.display = 'none';
    if (dashBox) dashBox.style.display = 'block';

    const webhookInput = document.getElementById('cmsWebhookUrlInput');
    if (webhookInput) {
      webhookInput.value = localStorage.getItem('ngohub_google_sheets_webhook_url') || '';
    }

    updateAdminStats();
    renderCmsGrantsTable();
    renderCmsServicesTable();
    renderCmsInboxTable();
    renderCmsUsersTable();
  } else {
    if (loginBox) loginBox.style.display = 'block';
    if (dashBox) dashBox.style.display = 'none';
  }
}

// Secure SHA-256 hash helper using browser Web Crypto API
async function sha256Hash(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Master Admin Auth Hash (Zero Plaintext Secrets in Client Code)
const ADMIN_CREDENTIALS_HASH = "58e0ed995c18ba76856ed79fccd66d9143a9d1b89a04bc1c66ade05ae222581d";

async function handleAdminLogin(e) {
  e.preventDefault();
  const user = document.getElementById('adminUsername').value.trim();
  const pass = document.getElementById('adminPass').value;

  const combined = `${user}:${pass}`;
  const computedHash = await sha256Hash(combined);
  const customHash = localStorage.getItem('ngohub_admin_custom_hash');

  if (computedHash === ADMIN_CREDENTIALS_HASH || (customHash && computedHash === customHash)) {
    adminAuthenticated = true;
    showToast("✅ تم تسجيل دخول الإدارة بنجاح");
    renderAdminState();
  } else {
    alert("❌ اسم المستخدم أو كلمة المرور غير صحيحة!");
  }
}

async function adminLogout() {
  if (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.logout) {
    try {
      await window.NGOHUB_FIREBASE.logout();
    } catch (e) {}
  }
  adminAuthenticated = false;
  currentUserSession = null;
  localStorage.removeItem('ngohub_user_session');
  document.body.classList.remove('admin-authenticated');
  updateHeaderAuthState();
  const form = document.getElementById('adminLoginForm');
  if (form) form.reset();
  renderAdminState();
  showToast("تم تسجيل الخروج من لوحة التحكم");
  switchTab('home', true);
}

function switchAdminSubTab(subTab) {
  const subviews = document.querySelectorAll('.admin-subview');
  subviews.forEach(sv => sv.classList.remove('active-subview'));

  const target = document.getElementById(`asub-${subTab}`);
  if (target) target.classList.add('active-subview');

  const buttons = document.querySelectorAll('.admin-tab-btn');
  buttons.forEach(btn => {
    if (btn.id === `atab-${subTab}`) btn.classList.add('active');
    else btn.classList.remove('active');
  });
}

function updateAdminStats() {
  const gCount = ACTIVE_GRANTS.length;
  const sCount = SERVICES_DATA.length;
  const subCount = JSON.parse(localStorage.getItem('ngohub_submitted_requests') || '[]').length;
  const users = getRegisteredUsers();

  const totalGrantsEl = document.getElementById('cmsTotalGrants');
  const totalServicesEl = document.getElementById('cmsTotalServices');
  const totalSubmissionsEl = document.getElementById('cmsTotalSubmissions');
  const usersBadge = document.getElementById('cmsUsersCountBadge');

  if (totalGrantsEl) totalGrantsEl.innerText = gCount;
  if (totalServicesEl) totalServicesEl.innerText = sCount;
  if (totalSubmissionsEl) totalSubmissionsEl.innerText = subCount;
  if (usersBadge) usersBadge.innerText = users.length;

  // Users Subview Stats
  const statTotal = document.getElementById('cmsStatTotalUsers');
  const statNgos = document.getElementById('cmsStatTotalNgos');
  const statClients = document.getElementById('cmsStatTotalClients');

  if (statTotal) statTotal.innerText = users.length;
  if (statNgos) statNgos.innerText = users.filter(u => u.isNGO || u.role === 'ngo').length;
  if (statClients) statClients.innerText = users.filter(u => !u.isNGO && u.role !== 'ngo').length;
}

// --- CMS Users & NGOs Management Engine ---
async function renderCmsUsersTable(customList = null) {
  const tbody = document.getElementById('cmsUsersTbody');
  if (!tbody) return;

  let users = customList;
  if (!users) {
    if (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.getUsersList) {
      try {
        users = await window.NGOHUB_FIREBASE.getUsersList();
      } catch (err) {
        console.warn("Could not fetch users from Firebase, fallback to local:", err);
        users = getRegisteredUsers();
      }
    } else {
      users = getRegisteredUsers();
    }
  }

  if (!users || users.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:30px; color:var(--text-muted);">لا يوجد مستخدمون مسجلون حتى الآن.</td></tr>`;
    return;
  }

  tbody.innerHTML = users.map(user => {
    const userId = user.id || user.uid;
    const isNGO = user.isNGO || user.role === 'ngo';
    const isAdm = user.role === 'admin' || ADMIN_AUTHORIZED_EMAILS.includes((user.email || '').toLowerCase().trim());
    const isSuspended = user.status === 'suspended';
    const phone = user.ngoData ? user.ngoData.ngoPhone : '-';
    const gov = user.ngoData ? user.ngoData.ngoGov : '-';
    const cleanPhone = phone.replace(/[^0-9]/g, '');

    const roleBadge = isAdm 
      ? `<span class="service-badge" style="background:#fef3c7; color:#b45309; border:1px solid #fde68a;"><i class="fa-solid fa-crown"></i> مشرف عام (Admin)</span>`
      : (isNGO 
          ? `<span class="service-badge badge-tier"><i class="fa-solid fa-building-flag"></i> جمعية أهلية معتمدة</span>`
          : `<span class="service-badge" style="background:#e0f2fe; color:#0369a1;"><i class="fa-solid fa-user"></i> حساب فردي</span>`);

    const statusBadge = isSuspended
      ? `<span class="service-badge badge-status-suspended" style="background:#fee2e2; color:#b91c1c; border:1px solid #fecaca; margin-top:4px; display:inline-block;"><i class="fa-solid fa-snowflake"></i> مجمد</span>`
      : `<span class="service-badge badge-status-active" style="background:#dcfce7; color:#15803d; border:1px solid #bbf7d0; margin-top:4px; display:inline-block;"><i class="fa-solid fa-circle-check"></i> نشط</span>`;

    const waBtn = (cleanPhone && cleanPhone !== '-')
      ? `<a href="https://wa.me/${cleanPhone}" target="_blank" class="btn-table-sm" style="background:#22c55e; color:#fff; text-decoration:none;" title="مراسلة عبر واتساب"><i class="fa-brands fa-whatsapp"></i> ${phone}</a>`
      : `<span style="color:var(--text-muted); font-size:0.85rem;">-</span>`;

    const emailLink = `<a href="mailto:${user.email}" style="color:var(--text-dark); text-decoration:underline; font-size:0.88rem;">${user.email}</a>`;

    const dateVal = user.createdAtIso || user.createdAt;
    const dateStr = dateVal ? new Date(dateVal).toLocaleDateString('ar-EG') : 'حديثاً';

    const freezeBtn = !isAdm ? (
      isSuspended
        ? `<button class="btn-table-sm btn-user-unfreeze" style="background:#16a34a; color:#fff;" onclick="toggleFreezeCmsUser('${userId}', 'suspended')" title="إلغاء التجميد وتنشيط الحساب"><i class="fa-solid fa-play"></i> تنشيط</button>`
        : `<button class="btn-table-sm btn-user-freeze" style="background:#f59e0b; color:#fff;" onclick="toggleFreezeCmsUser('${userId}', 'active')" title="تجميد الحساب مؤقتاً"><i class="fa-solid fa-snowflake"></i> تجميد</button>`
    ) : '';

    const deleteBtn = !isAdm 
      ? `<button class="btn-table-sm btn-table-delete" onclick="deleteCmsUser('${userId}')" title="إزالة المستخدم وبياناته نهائياً"><i class="fa-solid fa-trash"></i></button>`
      : '<span style="font-size:0.75rem; color:var(--text-muted);">محمي 👑</span>';

    return `
      <tr>
        <td>
          <strong>${user.name || user.displayName || 'مستخدم'}</strong>
          ${user.ngoData ? `<div style="font-size:0.8rem; color:var(--primary-green); font-weight:600;">${user.ngoData.ngoName}</div>` : ''}
        </td>
        <td>
          ${roleBadge}
          <div>${statusBadge}</div>
        </td>
        <td>
          ${emailLink}
          <div style="font-size:0.75rem; color:var(--text-muted);"><i class="${user.provider === 'google' ? 'fa-brands fa-google text-rose' : 'fa-solid fa-key'}"></i> ${user.provider || 'email'}</div>
        </td>
        <td>${waBtn}</td>
        <td><span style="font-size:0.85rem;">${gov}</span></td>
        <td style="font-size:0.8rem;">${dateStr}</td>
        <td>
          <div class="table-actions">
            ${user.ngoData ? `<button class="btn-table-sm" style="background:#0ea5e9; color:#fff;" onclick="viewCmsUserDetails('${userId}')" title="عرض تفاصيل الاستمارة"><i class="fa-solid fa-eye"></i> تفاصيل</button>` : ''}
            ${freezeBtn}
            ${deleteBtn}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

async function toggleFreezeCmsUser(userId, currentStatus) {
  const newStatus = (currentStatus === 'suspended') ? 'active' : 'suspended';
  const actionName = (newStatus === 'suspended') ? 'تجميد' : 'إلغاء تجميد وتنشيط';
  
  if (!confirm(`هل أنت متأكد من ${actionName} هذا الحساب؟\n${newStatus === 'suspended' ? 'لن يتمكن المستخدم من الدخول للمنصة حتى رفع التجميد.' : 'سيتمكن المستخدم من تسجيل الدخول فوراً.'}`)) {
    return;
  }
  
  try {
    if (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.updateUserStatus) {
      await window.NGOHUB_FIREBASE.updateUserStatus(userId, newStatus);
    }
    
    // Also update local storage cache if present
    const allUsers = getRegisteredUsers();
    const idx = allUsers.findIndex(u => (u.id === userId || u.uid === userId));
    if (idx !== -1) {
      allUsers[idx].status = newStatus;
      localStorage.setItem('ngohub_registered_users', JSON.stringify(allUsers));
    }
    
    await renderCmsUsersTable();
    showToast(`✅ تم ${actionName} الحساب بنجاح.`);
  } catch (err) {
    console.error("Error updating user status:", err);
    alert("تعذر تحديث حالة الحساب: " + (err.message || err));
  }
}

function filterCmsUsers() {
  const searchInput = document.getElementById('cmsUserSearchInput');
  const roleFilter = document.getElementById('cmsUserRoleFilter');
  if (!searchInput || !roleFilter) return;

  const query = searchInput.value.trim().toLowerCase();
  const role = roleFilter.value;

  const allUsers = (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.cachedUsersList) || getRegisteredUsers();

  const filtered = allUsers.filter(u => {
    const matchesRole = (role === 'all') 
      || (role === 'ngo' && (u.isNGO || u.role === 'ngo'))
      || (role === 'individual' && (!u.isNGO && u.role !== 'ngo'));

    const searchTarget = `
      ${u.name || u.displayName || ''} 
      ${u.email || ''} 
      ${u.ngoData ? (u.ngoData.ngoName + ' ' + u.ngoData.ngoGov + ' ' + u.ngoData.ngoRegNum) : ''}
    `.toLowerCase();

    const matchesQuery = !query || searchTarget.includes(query);

    return matchesRole && matchesQuery;
  });

  renderCmsUsersTable(filtered);
}

function refreshCmsUsersTable() {
  updateAdminStats();
  renderCmsUsersTable();
  showToast("تم تحديث قائمة المستخدمين والجمعيات.");
}

async function deleteCmsUser(userId) {
  const allUsers = (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.cachedUsersList) || getRegisteredUsers();
  const target = allUsers.find(u => (u.id === userId || u.uid === userId));
  const targetName = target ? (target.name || target.displayName || target.email) : userId;

  if (target && (target.role === 'admin' || ADMIN_AUTHORIZED_EMAILS.includes((target.email || '').toLowerCase().trim()))) {
    alert("لا يمكن حذف حساب المسؤول العام.");
    return;
  }

  if (confirm(`هل أنت متأكد من حذف حساب (${targetName}) وبياناته نهائياً؟ هذا الإجراء لا يمكن التراجع عنه.`)) {
    try {
      if (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.deleteUserAccount) {
        await window.NGOHUB_FIREBASE.deleteUserAccount(userId);
      }
      
      const localUsers = getRegisteredUsers();
      const updated = localUsers.filter(u => u.id !== userId && u.uid !== userId);
      localStorage.setItem('ngohub_registered_users', JSON.stringify(updated));

      updateAdminStats();
      await renderCmsUsersTable();
      showToast("تم حذف المستخدم وبياناته بنجاح.");
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("تعذر حذف المستخدم: " + (err.message || err));
    }
  }
}

function viewCmsUserDetails(userId) {
  let allUsers = cachedProfileNgosList;
  if (!allUsers || allUsers.length === 0) {
    allUsers = (window.NGOHUB_FIREBASE && window.NGOHUB_FIREBASE.cachedUsersList) || getRegisteredUsers();
  }
  const user = allUsers.find(u => (u.id === userId || u.uid === userId));
  if (!user || !user.ngoData) {
    showToast("لا توجد استمارة تفصيلية لهذا الحساب.", "info");
    return;
  }

  const d = user.ngoData;
  const modal = document.getElementById('adminUserDetailModal');
  const title = document.getElementById('audmTitle');
  const sub = document.getElementById('audmSubtitle');
  const body = document.getElementById('audmBody');

  if (title) title.innerText = d.ngoName || user.name || user.displayName;
  if (sub) sub.innerText = `مسؤول التواصل: ${d.ngoContact || user.name || user.displayName} (${user.email})`;

  if (body) {
    body.innerHTML = `
      <div style="background:var(--bg-card-alt); padding:16px; border-radius:12px; border:1px solid var(--border-color); margin-bottom:14px;">
        <p><strong>1. اسم الجمعية المشهرة:</strong> ${d.ngoName || '-'}</p>
        <p><strong>2. المحافظة:</strong> ${d.ngoGov || '-'}</p>
        <p><strong>3. العنوان بالتفصيل:</strong> ${d.ngoAddress || '-'}</p>
        <p><strong>4. رقم وتاريخ قيد / إشهار الجمعية:</strong> ${d.ngoRegNum || '-'}</p>
        <p><strong>5. مسؤول التواصل والصفة:</strong> ${d.ngoContact || '-'}</p>
        <p><strong>6. رقم الهاتف / واتساب:</strong> <a href="https://wa.me/${(d.ngoPhone||'').replace(/[^0-9]/g, '')}" target="_blank" style="color:green; font-weight:700;"><i class="fa-brands fa-whatsapp"></i> ${d.ngoPhone || '-'}</a></p>
        <p><strong>7. البريد الإلكتروني:</strong> <a href="mailto:${user.email}">${user.email}</a></p>
        <p><strong>طريقة التسجيل:</strong> ${user.provider || 'email'}</p>
        <p><strong>حالة الحساب:</strong> ${user.status === 'suspended' ? '❄️ مجمد' : '🟢 نشط'}</p>
        <p><strong>تاريخ التسجيل:</strong> ${user.createdAt || user.createdAtIso ? new Date(user.createdAtIso || user.createdAt).toLocaleString('ar-EG') : '-'}</p>
      </div>
      <div style="display:flex; justify-content:flex-end;">
        <button class="btn-primary" onclick="closeAdminUserDetailModal()"><i class="fa-solid fa-check"></i> إغلاق</button>
      </div>
    `;
  }

  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeAdminUserDetailModal() {
  const modal = document.getElementById('adminUserDetailModal');
  if (modal) modal.style.display = 'none';
}

const showAdminUserDetail = viewCmsUserDetails;

function renderCmsGrantsTable() {
  const tbody = document.getElementById('cmsGrantsTbody');
  if (!tbody) return;

  tbody.innerHTML = ACTIVE_GRANTS.map(g => `
    <tr>
      <td><strong>${g.title}</strong></td>
      <td>${g.donor}</td>
      <td><span class="grant-badge-type" style="position:static; font-size:0.75rem;">${g.badge}</span></td>
      <td style="font-size:0.82rem;">${g.amount}</td>
      <td><a href="${g.link}" target="_blank" style="color:var(--primary-green); font-weight:700;"><i class="fa-solid fa-arrow-up-right-from-square"></i> الرابط</a></td>
      <td>
        <div class="table-actions">
          <button class="btn-table-sm btn-table-delete" onclick="deleteGrantItem('${g.id}')">
            <i class="fa-solid fa-trash"></i> حذف
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function deleteGrantItem(grantId) {
  if (confirm("هل أنت متأكد من حذف هذه المنحة من القائمة؟")) {
    ACTIVE_GRANTS = ACTIVE_GRANTS.filter(g => g.id !== grantId);
    
    let savedCustom = JSON.parse(localStorage.getItem('ngohub_custom_grants') || '[]');
    savedCustom = savedCustom.filter(g => g.id !== grantId);
    localStorage.setItem('ngohub_custom_grants', JSON.stringify(savedCustom));

    renderGrants();
    renderCmsGrantsTable();
    updateAdminStats();
    showToast("تم حذف المنحة بنجاح");
  }
}

function renderCmsServicesTable() {
  const tbody = document.getElementById('cmsServicesTbody');
  if (!tbody) return;

  tbody.innerHTML = SERVICES_DATA.map((s, idx) => `
    <tr>
      <td><strong>${s.title}</strong></td>
      <td>
        <span class="service-badge badge-tier">
          ${s.tier_label}
        </span>
      </td>
      <td><i class="fa-solid ${s.icon}"></i></td>
      <td>
        <span class="badge-category">${s.category === 'digital' ? 'نظم رقمية' : s.category === 'grants' ? 'منح وتمويل' : 'بناء قدرات'}</span>
      </td>
    </tr>
  `).join('');
}

function refreshCmsServicesTable() {
  renderCmsServicesTable();
  renderServices();
  showToast("تم تحديث المحاور المؤسسية بنجاح");
}
const toggleServicePaidStatus = refreshCmsServicesTable;

function renderCmsInboxTable() {
  const tbody = document.getElementById('cmsInboxTbody');
  if (!tbody) return;

  const list = JSON.parse(localStorage.getItem('ngohub_submitted_requests') || '[]');
  if (list.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:20px;">لا توجد طلبات واردة حالياً</td></tr>';
    return;
  }

  tbody.innerHTML = list.map(item => `
    <tr>
      <td style="font-size:0.8rem;">${item.date}</td>
      <td><strong>${item.ngoName}</strong></td>
      <td>${item.contactPerson}</td>
      <td><a href="https://wa.me/${item.phone.replace(/[^0-9]/g, '')}" target="_blank" style="color:green; font-weight:700;"><i class="fa-brands fa-whatsapp"></i> ${item.phone}</a></td>
      <td><span class="service-badge badge-tier">${item.serviceTitle}</span></td>
      <td style="max-width:200px; font-size:0.82rem;">${item.details}</td>
    </tr>
  `).join('');
}

function loadSubmissionsInboxCount() {
  const count = JSON.parse(localStorage.getItem('ngohub_submitted_requests') || '[]').length;
  const badge = document.getElementById('inboxCountBadge');
  if (badge) badge.innerText = count;
}

function clearAllSubmissions() {
  if (confirm("هل أنت متأكد من تفريغ كافة طلبات الخدمات المسجلة محلياً؟")) {
    localStorage.removeItem('ngohub_submitted_requests');
    renderCmsInboxTable();
    loadSubmissionsInboxCount();
    updateAdminStats();
    showToast("تم تفريغ صندوق الطلبات");
  }
}

// JSON Backup Export & Import
function exportBackupJSON() {
  const backup = {
    exportDate: new Date().toISOString(),
    version: "8.5",
    services: SERVICES_DATA,
    grants: ACTIVE_GRANTS,
    submissions: JSON.parse(localStorage.getItem('ngohub_submitted_requests') || '[]')
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `ngohub_backup_v8_${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("تم تصدير النسخة الاحتياطية بنجاح");
}

function triggerImportJSON() {
  const fileInput = document.getElementById('importJsonFileInput');
  if (fileInput) fileInput.click();
}

function handleImportJSONFile(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      if (data.grants && Array.isArray(data.grants)) {
        ACTIVE_GRANTS = data.grants;
        localStorage.setItem('ngohub_custom_grants', JSON.stringify(ACTIVE_GRANTS));
      }
      if (data.services && Array.isArray(data.services)) {
        const isValidSchema = data.services.every(s => s.tier_label && s.category && ['digital', 'grants', 'studies', 'capacity'].includes(s.category));
        if (isValidSchema) {
          SERVICES_DATA = data.services;
          localStorage.setItem('ngohub_custom_services', JSON.stringify(SERVICES_DATA));
        } else {
          console.warn("[NGOHUB] Imported JSON contained legacy service schema; retained institutional services.");
          showToast("⚠️ ملف الـ JSON يحتوي على نموذج قديم، تم الحفاظ على محاور التمكين المؤسسي المعتمدة.");
        }
      }
      if (data.submissions) {
        localStorage.setItem('ngohub_submitted_requests', JSON.stringify(data.submissions));
      }
      renderGrants();
      renderServices();
      renderCmsGrantsTable();
      renderCmsServicesTable();
      renderCmsInboxTable();
      updateAdminStats();
      showToast("✅ تمت استعادة النسخة الاحتياطية بنجاح!");
    } catch (err) {
      alert("❌ خطأ في قراءة ملف الـ JSON!");
    }
  };
  reader.readAsText(file);
}

// Live refresh trigger
function refreshOpportunities() {
  showToast("جاري مزامنة وتحديث الفرص من قاعدة البيانات المعتمدة...");
  setTimeout(() => {
    initGrantsDatabase();
    showToast("✅ تم تحديث الفرص والمنح الحقيقية بنجاح");
  }, 500);
}

function exportData(format) {
  if (format === 'json') {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(ACTIVE_GRANTS, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `ngohub_real_grants_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("تم تصدير المنح بصيغة JSON");
  } else if (format === 'csv') {
    const headers = ["العنوان", "الجهة المانحة", "النوع", "القطاع", "التمويل", "الموعد", "النطاق", "الوسوم", "الشروط والمعايير", "رابط التقديم"];
    const rows = ACTIVE_GRANTS.map(g => {
      const tagsList = (Array.isArray(g.tags) && g.tags.length > 0) ? g.tags : deriveGrantTags(g);
      const eligList = Array.isArray(g.eligibility) ? g.eligibility : [];
      return [
        `"${(g.title || '').replace(/"/g, '""')}"`,
        `"${(g.donor || '').replace(/"/g, '""')}"`,
        `"${g.badge || ''}"`,
        `"${g.sector || ''}"`,
        `"${(g.amount || '').replace(/"/g, '""')}"`,
        `"${(g.deadline || '').replace(/"/g, '""')}"`,
        `"${(g.location || '').replace(/"/g, '""')}"`,
        `"${tagsList.join('، ').replace(/"/g, '""')}"`,
        `"${eligList.join(' | ').replace(/"/g, '""')}"`,
        `"${g.link || ''}"`
      ];
    });

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `ngohub_real_grants_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast("تم تصدير المنح بصيغة CSV");
  }
}

function showToast(text) {
  const toast = document.getElementById('toastMsg');
  const toastText = document.getElementById('toastText');
  if (toast && toastText) {
    toastText.innerText = text;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}

// --- 17. Site Compliance & Privacy Notice Management (Anti-Adblock & Law 151/2020) ---
function checkComplianceNotice() {
  const consent = localStorage.getItem('ngohub_compliance_consent') || localStorage.getItem('ngohub_cookie_consent');
  const dock = document.getElementById('siteComplianceDock') || document.getElementById('cookieConsentBanner');
  if (!consent && dock) {
    dock.style.display = 'block';
  }
}

function acceptAllCompliance() {
  localStorage.setItem('ngohub_compliance_consent', 'all');
  localStorage.setItem('ngohub_cookie_consent', 'all');
  const dock = document.getElementById('siteComplianceDock') || document.getElementById('cookieConsentBanner');
  if (dock) dock.style.display = 'none';
  showToast("شكراً لتفضيلكم، تم حفظ خيارات الخصوصية بنجاح.");
}

function acceptNecessaryCompliance() {
  localStorage.setItem('ngohub_compliance_consent', 'necessary');
  localStorage.setItem('ngohub_cookie_consent', 'necessary');
  const dock = document.getElementById('siteComplianceDock') || document.getElementById('cookieConsentBanner');
  if (dock) dock.style.display = 'none';
  showToast("تم تفعيل ملفات تعريف الارتباط الضرورية فقط.");
}

// User-facing interactive functions to open and reset settings anytime
window.openPrivacySettings = function() {
  const dock = document.getElementById('siteComplianceDock') || document.getElementById('cookieConsentBanner');
  if (dock) {
    dock.style.display = 'block';
    dock.scrollIntoView({ behavior: 'smooth' });
    showToast("تفضيلات الخصوصية معروضة الآن في أسفل الشاشة.");
  } else {
    window.location.href = 'privacy.html';
  }
};

window.resetPrivacySettings = function() {
  localStorage.removeItem('ngohub_compliance_consent');
  localStorage.removeItem('ngohub_cookie_consent');
  const dock = document.getElementById('siteComplianceDock') || document.getElementById('cookieConsentBanner');
  if (dock) dock.style.display = 'block';
  showToast("تمت إعادة تعيين تفضيلات الخصوصية والكوكيز.");
};

// Backwards compatibility aliases
window.acceptAllCookies = acceptAllCompliance;
window.acceptNecessaryCookies = acceptNecessaryCompliance;
window.checkCookieConsent = checkComplianceNotice;


// Hero Showcase Photo Switcher (Official Award Ceremony <-> Field Training)
window.switchHeroShowcasePhoto = function(type) {
  var img = document.getElementById('heroShowcaseImg');
  var caption = document.getElementById('showcasePhotoCaption');
  var btnAward = document.getElementById('btnTabAward');
  var btnTraining = document.getElementById('btnTabTraining');
  if (!img) return;

  if (type === 'award') {
    img.src = 'assets/images/hero_award_ceremony.jpg';
    img.alt = 'تكريم رسمي معتمد - المركز الأول في المشروعات الخضراء الذكية';
    if (caption) caption.textContent = 'التكريم الرسمي بالمركز الأول (المشروعات الخضراء الذكية)';
    if (btnAward) btnAward.classList.add('active');
    if (btnTraining) btnTraining.classList.remove('active');
  } else if (type === 'training') {
    img.src = 'assets/images/hero_field_training.jpg';
    img.alt = 'ورش التدريب الميداني وبناء القدرات المؤسسية للجمعيات الأهلية';
    if (caption) caption.textContent = 'ورش التدريب الميداني والتمكين البيئي وصون المياه';
    if (btnTraining) btnTraining.classList.add('active');
    if (btnAward) btnAward.classList.remove('active');
  }
};


// ==========================================================================
// Homepage Interactive Readiness Audit Calculator (Between Q1 & Q2)
// ==========================================================================
window.calculateHomeAudit = function() {
  const bBudget = document.getElementById('auditSwitchBudget')?.checked || false;
  const bImpact = document.getElementById('auditSwitchImpact')?.checked || false;
  const bDigital = document.getElementById('auditSwitchDigital')?.checked || false;

  const activeCount = (bBudget ? 1 : 0) + (bImpact ? 1 : 0) + (bDigital ? 1 : 0);
  
  // Score mapping: 0 -> 20%, 1 -> 45%, 2 -> 75%, 3 -> 95%
  let score = 20;
  if (activeCount === 1) score = 45;
  else if (activeCount === 2) score = 75;
  else if (activeCount === 3) score = 95;

  const scoreValEl = document.getElementById('homeAuditScoreVal');
  const barEl = document.getElementById('homeAuditProgressBar');
  const badgeEl = document.getElementById('homeAuditBadge');
  const badgeTextEl = document.getElementById('homeAuditBadgeText');
  const feedbackEl = document.getElementById('homeAuditFeedback');
  const ctaBtn = document.getElementById('homeAuditCtaBtn');
  const ctaTextEl = document.getElementById('homeAuditCtaText');

  if (scoreValEl) scoreValEl.textContent = score + '%';
  if (barEl) {
    barEl.style.width = score + '%';
    if (score < 50) {
      barEl.style.backgroundColor = '#ef4444';
    } else if (score < 80) {
      barEl.style.backgroundColor = '#d97706';
    } else {
      barEl.style.backgroundColor = '#059669';
    }
  }

  if (activeCount <= 1) {
    // Low score: 0 or 1
    if (badgeEl) {
      badgeEl.className = 'feedback-badge badge-pain';
      if (badgeTextEl) badgeTextEl.textContent = 'ملف عالي المخاطر التمويلية';
    }
    if (feedbackEl) {
      feedbackEl.innerHTML = '<strong>تشخيص الفحص الأولي:</strong> ملف الجمعية الحالي يفتقر لمقومات الامتثال المكتبي، مما يجعله عرضة للاستبعاد السريع أمام لجان التقييم الدولية. نحن نؤهل جمعيتكم ونسد هذه الثغرات لتأمين فرصة الفوز بالمنحة.';
    }
    if (ctaTextEl) {
      ctaTextEl.textContent = 'سجّل جمعيتكم الآن لسد الثغرات وتأهيل ملف المنح';
    }
    if (ctaBtn) {
      ctaBtn.className = 'btn-screen-action audit-main-btn btn-danger-tone';
    }
  } else if (activeCount === 2) {
    // Medium-high score: 2
    if (badgeEl) {
      badgeEl.className = 'feedback-badge badge-warning';
      if (badgeTextEl) badgeTextEl.textContent = 'ملف واعد يحتاج استكمال مقومات القوة';
    }
    if (feedbackEl) {
      feedbackEl.innerHTML = '<strong>تشخيص الفحص الأولي:</strong> تمتلك الجمعية ركائز جيدة، لكن اكتمال المحور الناقص يضاعف فرصة فوزكم بالمنحة ويمنع أي ملاحظات من المانحين. فريق NGOHUB يسد الفجوة الأخيرة ويصيغ مقترحكم بالكامل.';
    }
    if (ctaTextEl) {
      ctaTextEl.textContent = 'سجّل جمعيتكم لاستكمال الملف وصياغة مقترح المنحة';
    }
    if (ctaBtn) {
      ctaBtn.className = 'btn-screen-action audit-main-btn btn-warning-tone';
    }
  } else {
    // High score: 3
    if (badgeEl) {
      badgeEl.className = 'feedback-badge badge-solution';
      if (badgeTextEl) badgeTextEl.textContent = 'جاهزية مؤسسية وتنافسية استثنائية';
    }
    if (feedbackEl) {
      feedbackEl.innerHTML = '<strong>تشخيص الفحص الأولي:</strong> جمعيتكم تستوفي كافة المعايير الصارمة للصناديق الدولية. فريق NGOHUB جاهز للربط الفوري مع المنح المفتوحة وصياغة المقترح التنفيذي لضمان الاعتماد.';
    }
    if (ctaTextEl) {
      ctaTextEl.textContent = 'انضم إلى NGOHUB للمطابقة وصياغة مقترح المنحة الدولية';
    }
    if (ctaBtn) {
      ctaBtn.className = 'btn-screen-action audit-main-btn btn-success-tone';
    }
  }
};
