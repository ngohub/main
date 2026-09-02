/* ==========================================================================
   NGOHUB - MASTER APPLICATION ENGINE v8.5
   توجيه الصفحات المحدث (صفحة الشركاء وسابقة التعاون المخصصة + إدارة الفوتر)
   ========================================================================== */

// --- 1. Master Services Dataset (8 Services) ---
let SERVICES_DATA = [
  {
    id: "web_dev",
    title: "1. تصميم وتطوير المواقع والمنصات التفاعلية",
    category: "digital",
    is_paid: true,
    price_label: "مدفوع (استضافة ونطاق ودعم)",
    icon: "fa-laptop-code",
    desc: "تصميم وتطوير مواقع ويب متجاوبة 100% مع الهواتف للجمعيات والمشروعات، مع ربط بوابات التبرع وتوثيق المشروعات وقصص الأثر المجتمعي.",
    features: [
      "نطاق رسمي (.org / .com) واستضافة سحابية خاصة سريعة",
      "تصميم عصري متجاوب مع كافة أحجام الهواتف والشاشات",
      "لوحة إدارة محتوى بسيطة وسهلة لفريق الجمعية",
      "دعم فني وصيانة ومتابعة للأمان والنسخ الاحتياطي"
    ]
  },
  {
    id: "digital_transformation",
    title: "2. التحول الرقمي وأتمتة العمليات السحابية",
    category: "digital",
    is_paid: true,
    price_label: "مدفوع (حجز سيرفر سحابي واستضافة)",
    icon: "fa-network-wired",
    desc: "نقل الجمعية من السجلات الورقية إلى منظومة سحابية متكاملة وقواعد بيانات آمنة لإدارة المستفيدين والأنشطة والتقارير.",
    features: [
      "تجهيز قواعد بيانات سحابية وتشفير بيانات المستفيدين",
      "أتمتة استمارات التقديم وطلبات المساعدات والفرز",
      "تدريب كوادر الجمعية على الأدوات الرقمية الحديثة",
      "ربط الإدارات واستخراج تقارير إحصائية دورية"
    ]
  },
  {
    id: "volunteer_mgmt",
    title: "3. إدارة وتطوير برامج المتطوعين وبناء المنظومة",
    category: "volunteering",
    is_paid: false,
    price_label: "مبادرة واستشارة مجانية",
    icon: "fa-users-gear",
    desc: "تنظيم وهيكلة برامج التطوع داخل الجمعيات، وتصنيف المهارات، وتوزيع المهام، وحساب وتوثيق الساعات التطوعية رقمياً.",
    features: [
      "بناء نموذج واستمارة تسجيل وتصنيف المتطوعين",
      "حصر الساعات التطوعية وإصدار شهادات مشاركة معتمدة",
      "تصميم برامج إدماج الشباب في العمل البيئي والتنموي",
      "إرشاد الجمعيات لكيفية استبقاء وبناء ولاء المتطوعين"
    ]
  },
  {
    id: "grants_proposals",
    title: "4. كتابة المقترحات وصياغة المكون الذكي للمنح",
    category: "grants",
    is_paid: false,
    price_label: "مبادرة واستشارة مجانية",
    icon: "fa-file-signature",
    desc: "إعداد الملف المؤسسي للجمعية، مراجعة معايير الجهات المانحة الدولية والمحلية، وصياغة مقترحات المشروعات والمكون الذكي للمسابقات.",
    features: [
      "تجهيز الملف التعريفي المؤسسي أمام الجهات المانحة",
      "صياغة وتطوير المكون الذكي للمشروعات الخضراء",
      "مراجعة معايير القبول في المنح القومية والدولية",
      "إرشاد الجمعيات لاستيفاء متطلبات التمويل والشراكات"
    ]
  },
  {
    id: "brand_identity",
    title: "5. تصميم الهوية البصرية والمحتوى الرقمي للجمعيات",
    category: "media",
    is_paid: true,
    price_label: "مدفوع (تصميم وإنتاج)",
    icon: "fa-palette",
    desc: "بناء هوية بصرية احترافية وشعارات تعكس رسالة الجمعية، وتصميم قوالب منشورات وتقارير أثر دورية لتعزيز ثقة المانحين والمجتمع.",
    features: [
      "تصميم دليل الهوية البصرية (الشعار، الألوان، الخطوط)",
      "قوالب سوشيال ميديا جاهزة للأنشطة والفعاليات",
      "تصميم تقرير الأثر السنوي (Annual Impact Report)",
      "تصميم البروفايل التعريفي الرسمي (Company Profile)"
    ]
  },
  {
    id: "impact_dashboard",
    title: "6. بناء لوحات متابعة وتقييم الأثر المجتمعي (M&E)",
    category: "digital",
    is_paid: true,
    price_label: "مدفوع (تجهيز وبرمجة)",
    icon: "fa-chart-pie",
    desc: "لوحات تحكم ذكية (Dashboards) ترصد مؤشرات الأداء، وتوزيع المساعدات جغرافياً، وحجم الإنجاز لتسهيل عرضها أمام مجالس الإدارة والمانحين.",
    features: [
      "رصد لحظي للمستفيدين والمشروعات المنفذة",
      "خرائط جغرافية لمناطق التدخل والاحتياج",
      "تصدير تقارير بيانية تفاعلية بصيغ PDF و Excel",
      "تحليل مؤشرات خفض الانبعاثات للمشروعات البيئية"
    ]
  },
  {
    id: "capacity_building",
    title: "7. برامج تدريب الكوادر وبناء القدرات المؤسسية",
    category: "training",
    is_paid: false,
    price_label: "مبادرة واستشارة مجانية",
    icon: "fa-chalkboard-user",
    desc: "ورش عمل تدريبية متخصصة بالتعاون مع PROTIC لتأهيل العاملين بالجمعيات في مجالات الحوكمة، القيادة، والتحول الرقمي والبيئي.",
    features: [
      "ورش عمل تفاعلية حول إدارة الجمعيات الأهلية",
      "تدريب على استخدام أدوات الذكاء الاصطناعي في العمل الأهلي",
      "جلسات توجيه فردية لمسؤولي المشروعات التنموية",
      "حقائب تدريبية موثقة ودليل عمل مؤسسي"
    ]
  },
  {
    id: "ai_solutions",
    title: "8. حلول الذكاء الاصطناعي وتلخيص البيانات التنموية",
    category: "digital",
    is_paid: true,
    price_label: "مدفوع (استهلاك أدوات AI)",
    icon: "fa-robot",
    desc: "تطويع أدوات ونماذج الذكاء الاصطناعي للرد الآلي على استفسارات المستفيدين وتلخيص أبحاث المشروعات وتصنيف المقترحات.",
    features: [
      "مساعد ذكي للرد الآلي لخدمة المستفيدين والمتطوعين",
      "تلخيص سريع للتقارير وأوراق السياسات التنموية",
      "أدوات ذكية لصياغة وتدقيق المحتوى والمراسلات",
      "تكامل مع الواتساب والمنصات الرسمية"
    ]
  }
];

// --- 2. Global State & Database Sync ---
let ACTIVE_GRANTS = [];
let currentGrantTypeFilter = 'all';
let currentServiceFilter = 'all';
let adminAuthenticated = false;

// Google Sheets Webhook Endpoint (تم الربط مع الاسكريبت الحي المباشر)
let GOOGLE_SHEETS_WEBHOOK_URL = localStorage.getItem('ngohub_google_sheets_webhook_url') || "https://script.google.com/macros/s/AKfycbynU9c1SDeXkdEWMGQUJzsc9ERcYfPnhQ9yhorcEvgIZ2byHLtNRM1lHlLA3z-m7iYV/exec";

// --- 3. DOM Content Loaded Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initGrantsDatabase();
  initServices();
  calculateEcoImpact();
  calculateReadinessScore();
  calculateNgohubWater();
  calculateServicesImpact();
  loadSubmissionsInboxCount();
});

// --- 4. Dark / Light Theme Engine ---
function initTheme() {
  const savedTheme = localStorage.getItem('ngohub_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('ngohub_theme', newTheme);
  updateThemeIcon(newTheme);
  showToast(`تم التبديل إلى المظهر ${newTheme === 'dark' ? 'الداكن 🌙' : 'الفاتح ☀️'}`);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  const mIcon = document.getElementById('mThemeIcon');
  if (theme === 'dark') {
    if (icon) icon.className = 'fa-solid fa-sun';
    if (mIcon) mIcon.className = 'fa-solid fa-sun';
  } else {
    if (icon) icon.className = 'fa-solid fa-moon';
    if (mIcon) mIcon.className = 'fa-solid fa-moon';
  }
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

// --- 6. SPA Router & Tab Switcher (Updated for Impact, Calculators, Partners, Services, Grants, About, Admin) ---
function switchTab(tabId) {
  // Hide all sections
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(sec => sec.classList.remove('active-section'));

  // Target mapping
  let targetSectionId = 'section-home';
  if (tabId === 'grants') targetSectionId = 'section-grants';
  else if (tabId === 'services') targetSectionId = 'section-services';
  else if (tabId === 'impact') targetSectionId = 'section-impact';
  else if (tabId === 'calculators') targetSectionId = 'section-calculators';
  else if (tabId === 'partners') targetSectionId = 'section-partners';
  else if (tabId === 'about') targetSectionId = 'section-about';
  else if (tabId === 'admin') targetSectionId = 'section-admin';

  const targetSec = document.getElementById(targetSectionId);
  if (targetSec) targetSec.classList.add('active-section');

  // Update Nav Links Active States
  updateNavActiveState(tabId);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // If Admin Tab selected, render dashboard state
  if (tabId === 'admin') {
    renderAdminState();
  }

  // Trigger calculators update if opened
  if (tabId === 'calculators') {
    if (typeof calculateNgohubWater === 'function') calculateNgohubWater();
    if (typeof calculateServicesImpact === 'function') calculateServicesImpact();
    if (typeof calculateReadinessScore === 'function') calculateReadinessScore();
  }
}

function updateNavActiveState(tabId) {
  const navItems = {
    home: document.getElementById('nav-home'),
    about: document.getElementById('nav-about'),
    services: document.getElementById('nav-services'),
    impact: document.getElementById('nav-impact'),
    calculators: document.getElementById('nav-calculators'),
    grants: document.getElementById('nav-grants'),
    partners: document.getElementById('nav-partners')
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
    partners: document.getElementById('mNav-partners')
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
  if (grantsInput) grantsInput.value = val;
  switchTab('grants');
  filterGrantsMaster();
}

function quickSearchTag(tag) {
  const grantsInput = document.getElementById('grantsSearchInput');
  if (grantsInput) grantsInput.value = tag;
  switchTab('grants');
  filterGrantsMaster();
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

function filterGrantsMaster() {
  renderGrants();
}

function renderGrants() {
  const container = document.getElementById('grantsGridContainer');
  if (!container) return;

  const searchVal = (document.getElementById('grantsSearchInput')?.value || '').toLowerCase().trim();
  const selectedSector = document.getElementById('sectorFilterSelect')?.value || 'all';
  const selectedRegion = document.getElementById('regionFilterSelect')?.value || 'all';

  let filtered = ACTIVE_GRANTS.filter(g => {
    if (currentGrantTypeFilter !== 'all' && g.type !== currentGrantTypeFilter) return false;
    if (selectedSector !== 'all' && g.sector && g.sector !== selectedSector) return false;
    if (selectedRegion !== 'all' && g.region && g.region !== selectedRegion) return false;

    if (searchVal) {
      const matchTitle = (g.title || '').toLowerCase().includes(searchVal);
      const matchDonor = (g.donor || '').toLowerCase().includes(searchVal);
      const matchDesc = (g.description || '').toLowerCase().includes(searchVal);
      const matchLocation = (g.location || '').toLowerCase().includes(searchVal);
      const matchBadge = (g.badge || '').toLowerCase().includes(searchVal);
      if (!matchTitle && !matchDonor && !matchDesc && !matchLocation && !matchBadge) return false;
    }

    return true;
  });

  const countText = document.getElementById('resultsCountText');
  if (countText) {
    countText.innerText = `عرض ${filtered.length} من أصل ${ACTIVE_GRANTS.length} فرصة ومنحة موثقة`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 45px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
        <i class="fa-solid fa-filter-circle-xmark" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 12px;"></i>
        <h4 style="color: var(--text-dark); font-weight: 800;">لم يتم العثور على فرص مطابقة للبحث</h4>
        <p style="color: var(--text-muted); font-size: 0.92rem; margin-top: 6px;">جرب تغيير خيارات الفلترة أو كتابة كلمات بحث أخرى مثل (جمعيات، مناخ، تكنولوجيا، تمويل، استدامة)</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(g => generateGrantCardHTML(g)).join('');
}

function generateGrantCardHTML(g) {
  let badgeClass = 'ngo-type';
  if (g.type === 'individual_green') badgeClass = 'individual-type';
  else if (g.type === 'volunteer') badgeClass = 'volunteer-type';

  return `
    <div class="grant-card">
      <span class="grant-badge-type ${badgeClass}">${g.badge || 'فرصة معتمدة'}</span>
      <div>
        <div class="grant-donor"><i class="fa-solid fa-building-columns"></i> ${g.donor}</div>
        <h4 class="grant-title">${g.title}</h4>
        <p class="grant-desc">${g.description}</p>
        <div class="grant-meta-list">
          <div class="meta-row">
            <span class="meta-label">التمويل / المزايا:</span>
            <span class="meta-value">${g.amount}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">الموعد النهائي:</span>
            <span class="meta-value">${g.deadline}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">النطاق:</span>
            <span class="meta-value" style="color: var(--text-dark);">${g.location}</span>
          </div>
        </div>
      </div>
      <div class="grant-card-footer">
        <button class="btn-view-details" onclick="openGrantModal('${g.id}')">
          <i class="fa-solid fa-eye"></i> الشروط
        </button>
        <a href="${g.link}" target="_blank" class="btn-apply-direct">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> التقديم الرسمي المباشر
        </a>
      </div>
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

// --- 8.2 Subtab Navigator for Calculators Hub ---
function switchCalcSubTab(calcId) {
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

  if (calcId === 'water') calculateNgohubWater();
  else if (calcId === 'services') calculateServicesImpact();
  else if (calcId === 'readiness') calculateReadinessScore();
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
    if (adviceElem) adviceElem.innerText = "الجمعية تفتقر للبنية الرقمية والحوكمة الأساسية المشروطة لدى المانحين الدوليين. انقر على زر (عرض التقرير التشخيصي) لمعرفة الفجوات وخطة التطوير.";
  } else if (total <= 70) {
    if (titleElem) titleElem.innerText = "المستوى الواعد (جاهزية متوسطة تحتاج استكمال)";
    if (adviceElem) adviceElem.innerText = "تمتلك الجمعية مقومات جيدة، ولكن توجد فجوات في توثيق الأثر أو صياغة المقترحات الذكية. طالع التقرير التشخيصي لتحديد الخطوة التالية.";
  } else {
    if (titleElem) titleElem.innerText = "المستوى المتقدم (مؤهلة ومكتملة المعايير للمنح الكبرى)";
    if (adviceElem) adviceElem.innerText = "ممتاز! تمتلك الجمعية بنية رقمية وحوكمة متميزة تمكنها من المنافسة والفوز بالمنح التنموية والدولية المتاحة في بوابتنا.";
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
    popOverview.innerText = "أظهر التحليل وجود فجوات جوهرية في البنية الرقمية وحوكمة البيانات وقنوات التواصل الرسمية، مما يقلل فرص الجمعية في اجتياز الفرز الأولي للمنح.";
  } else if (total <= 70) {
    popTitle.innerText = "المستوى المؤسسي: واعد ومتوسط الجاهزية";
    popOverview.innerText = "تمتلك الجمعية رصيداً جيداً، إلا أن غياب المكون الذكي المقنن أو أتمتة حصر الساعات قد يعيق حصولها على المنح التنافسية الكبرى.";
  } else {
    popTitle.innerText = "المستوى المؤسسي: متقدم ومؤهل للشراكات الدولية";
    popOverview.innerText = "الجمعية تلتزم بأعلى معايير الحوكمة والشفافية الرقمية وتعد نموذجاً رائداً ومؤهلاً لاستقطاب التمويلات والمنح متعددة السنوات.";
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

  // Criterion 2: Cloud Beneficiaries Database
  if (q2 > 10) {
    strengths.push("وجود قواعد بيانات سحابية مشفرة ومنظمة للمستفيدين تضمن عدم ازدواجية المساعدات وسرعة الفرز.");
  } else {
    weaknesses.push("الاعتماد على السجلات الورقية أو ملفات Excel المبعثرة يعرض بيانات المستفيدين للمخاطر ويعيق استخراج المؤشرات.");
    roadmap.push("أتمتة سجلات المستفيدين وإنشاء قاعدة بيانات سحابية مركزية مشفرة لتصنيف الأسر والمساعدات.");
  }

  // Criterion 3: Volunteer Governance
  if (q3 > 10) {
    strengths.push("منظومة حوكمة موثقة للمتطوعين تشمل تسجيل الساعات وتصنيف المهارات وإصدار الشهادات.");
  } else {
    weaknesses.push("افتقار برامج التطوع للتوثيق الرقمي للساعات وحصر مهارات الكوادر الشابة.");
    roadmap.push("تطبيق استمارة تسجيل إلكترونية للمتطوعين ونظام حصر الساعات لتقديمها في تقارير المانحين.");
  }

  // Criterion 4: Financial Governance
  if (q4 > 10) {
    strengths.push("حوكمة مالية وإدارية شفافة مع وجود قوائم مالية مدققة سنوياً.");
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
      SERVICES_DATA = JSON.parse(customServices);
    } catch (e) {
      console.error("Error parsing custom services:", e);
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

  let filtered = SERVICES_DATA.filter(s => {
    if (currentServiceFilter === 'paid' && !s.is_paid) return false;
    if (currentServiceFilter === 'free' && s.is_paid) return false;

    if (searchVal) {
      const matchTitle = s.title.toLowerCase().includes(searchVal);
      const matchDesc = s.desc.toLowerCase().includes(searchVal);
      const matchFeatures = s.features.some(f => f.toLowerCase().includes(searchVal));
      if (!matchTitle && !matchDesc && !matchFeatures) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; background: var(--bg-card); border-radius: var(--radius-md);">
        <i class="fa-solid fa-circle-question" style="font-size: 2rem; color: var(--text-muted); margin-bottom: 10px;"></i>
        <h4 style="color: var(--text-dark);">لم يتم العثور على خدمات مطابقة للبحث</h4>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(s => `
    <div class="service-box ${s.is_paid ? 'paid-service' : ''}">
      <div class="service-box-header">
        <div class="service-icon"><i class="fa-solid ${s.icon}"></i></div>
        <span class="service-badge ${s.is_paid ? 'badge-paid' : 'badge-free'}">
          ${s.is_paid ? '<i class="fa-solid fa-tag"></i> مدفوع' : '<i class="fa-solid fa-gift"></i> مبادرة مجانية'}
        </span>
      </div>

      <h4 class="service-title">${s.title}</h4>
      <p class="service-text">${s.desc}</p>

      <ul class="service-features-list">
        ${s.features.map(f => `<li><i class="fa-solid fa-check text-emerald"></i> ${f}</li>`).join('')}
      </ul>

      <div class="service-box-footer">
        <button class="btn-service-req" onclick="openServiceModal('${s.id}')">
          <i class="fa-solid fa-paper-plane"></i> طلب هذه الخدمة
        </button>
      </div>
    </div>
  `).join('');
}

// --- 12. Modals Management ---
function openServiceModal(serviceId) {
  const modal = document.getElementById('serviceRequestModal');
  const typeInput = document.getElementById('serviceReqType');
  const titleElem = document.getElementById('sModalTitle');
  const badgeElem = document.getElementById('sModalBadge');

  const srv = SERVICES_DATA.find(s => s.id === serviceId);

  if (typeInput) typeInput.value = serviceId;
  if (titleElem) titleElem.innerText = srv ? `طلب: ${srv.title}` : 'طلب دعم أو خدمة للجمعية الأهلية';
  if (badgeElem) {
    if (srv && srv.is_paid) {
      badgeElem.className = 'service-modal-badge';
      badgeElem.style.background = 'var(--accent-gold-light)';
      badgeElem.style.color = '#B45309';
      badgeElem.innerText = 'خدمة بموارد خارجية مدفوعة (استضافة ونطاق تقني)';
    } else {
      badgeElem.className = 'service-modal-badge';
      badgeElem.style.background = 'var(--primary-green-light)';
      badgeElem.style.color = 'var(--primary-green-dark)';
      badgeElem.innerText = 'مبادرة واستشارة مجانية';
    }
  }

  if (modal) modal.classList.add('active');
}

function closeServiceModal() {
  const modal = document.getElementById('serviceRequestModal');
  if (modal) modal.classList.remove('active');
}

function openGrantModal(grantId) {
  const grant = ACTIVE_GRANTS.find(g => g.id === grantId);
  if (!grant) return;

  document.getElementById('mTitle').innerText = grant.title;
  document.getElementById('mDonor').innerText = `الجهة المانحة: ${grant.donor}`;
  document.getElementById('mSummary').innerText = grant.description;

  const eligList = document.getElementById('mEligibility');
  if (eligList) {
    eligList.innerHTML = grant.eligibility ? grant.eligibility.map(item => `<li>${item}</li>`).join('') : '<li>يرجى مراجعة الموقع الرسمي للمنحة للاطلاع على كامل الشروط والمعايير.</li>';
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
  else if (type === 'volunteer') badge = "تطوع دولي";

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

// --- 13. Service Request Form Handler ---
function handleServiceFormSubmit(e) {
  e.preventDefault();

  const serviceId = document.getElementById('serviceReqType').value;
  const ngoName = document.getElementById('reqNgoName').value.trim();
  const contactPerson = document.getElementById('reqContactPerson').value.trim();
  const phone = document.getElementById('reqPhone').value.trim();
  const gov = document.getElementById('reqGov').value.trim();
  const details = document.getElementById('reqDetails').value.trim();

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
  } else {
    if (loginBox) loginBox.style.display = 'block';
    if (dashBox) dashBox.style.display = 'none';
  }
}

function handleAdminLogin(e) {
  e.preventDefault();
  const user = document.getElementById('adminUsername').value.trim();
  const pass = document.getElementById('adminPass').value;

  if (user === 'admin' && pass === 'ngohub2026') {
    adminAuthenticated = true;
    showToast("✅ تم تسجيل دخول الإدارة بنجاح");
    renderAdminState();
  } else {
    alert("❌ اسم المستخدم أو كلمة المرور غير صحيحة!");
  }
}

function adminLogout() {
  adminAuthenticated = false;
  document.getElementById('adminLoginForm').reset();
  renderAdminState();
  showToast("تم تسجيل الخروج من لوحة التحكم");
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

  document.getElementById('cmsTotalGrants').innerText = gCount;
  document.getElementById('cmsTotalServices').innerText = sCount;
  document.getElementById('cmsTotalSubmissions').innerText = subCount;
}

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
        <span class="service-badge ${s.is_paid ? 'badge-paid' : 'badge-free'}">
          ${s.is_paid ? 'مدفوع' : 'مجاني'}
        </span>
      </td>
      <td><i class="fa-solid ${s.icon}"></i></td>
      <td>
        <div class="table-actions">
          <button class="btn-table-sm btn-secondary" onclick="toggleServicePaidStatus(${idx})">
            تبديل (مدفوع/مجاني)
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function toggleServicePaidStatus(idx) {
  SERVICES_DATA[idx].is_paid = !SERVICES_DATA[idx].is_paid;
  localStorage.setItem('ngohub_custom_services', JSON.stringify(SERVICES_DATA));
  renderCmsServicesTable();
  renderServices();
  showToast("تم تحديث حالة تسعير الخدمة بنجاح");
}

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
      <td><span class="service-badge badge-free">${item.serviceTitle}</span></td>
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
      if (data.services) {
        SERVICES_DATA = data.services;
        localStorage.setItem('ngohub_custom_services', JSON.stringify(SERVICES_DATA));
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
    const headers = ["العنوان", "الجهة المانحة", "النوع", "القطاع", "التمويل", "الموعد", "النطاق", "رابط التقديم"];
    const rows = ACTIVE_GRANTS.map(g => [
      `"${(g.title || '').replace(/"/g, '""')}"`,
      `"${(g.donor || '').replace(/"/g, '""')}"`,
      `"${g.badge || ''}"`,
      `"${g.sector || ''}"`,
      `"${g.amount || ''}"`,
      `"${g.deadline || ''}"`,
      `"${g.location || ''}"`,
      `"${g.link || ''}"`
    ]);

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
