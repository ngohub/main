// ==========================================================================
// NGOHUB Mobile App - Tri-Engine Smart Calculators (Synced with Web)
// ==========================================================================

// --- Subtab Navigator for Mobile Calculators ---
function toggleCalcTab(tab) {
  const btnWater = document.getElementById('btnSubTabWater');
  const btnServices = document.getElementById('btnSubTabServices');
  const btnGrants = document.getElementById('btnSubTabGrants');

  const viewWater = document.getElementById('viewCalcWater');
  const viewServices = document.getElementById('viewCalcServices');
  const viewGrants = document.getElementById('viewCalcGrants');

  if (btnWater) btnWater.classList.toggle('active', tab === 'water' || tab === 'eco');
  if (btnServices) btnServices.classList.toggle('active', tab === 'services');
  if (btnGrants) btnGrants.classList.toggle('active', tab === 'grants');

  if (viewWater) viewWater.style.display = (tab === 'water' || tab === 'eco') ? 'block' : 'none';
  if (viewServices) viewServices.style.display = tab === 'services' ? 'block' : 'none';
  if (viewGrants) viewGrants.style.display = tab === 'grants' ? 'block' : 'none';

  if (tab === 'water' || tab === 'eco') calculateNgohubWater();
  else if (tab === 'services') calculateServicesImpact();
  else if (tab === 'grants') calculateGrantReadiness();
}

// --- Calculator 1: NGOHUB Water Conservation (Direct via GCT & Indirect via Paperless) ---
function calculateNgohubWater() {
  const paperInput = document.getElementById('ecoPaperInput');
  const workshopsInput = document.getElementById('gctWorkshopsInput');

  const paperPerMonth = parseInt(paperInput?.value || 1000);
  const workshops = parseInt(workshopsInput?.value || 8);

  // Update badge labels
  const pBadge = document.getElementById('ecoPaperVal');
  if (pBadge) pBadge.innerText = paperPerMonth.toLocaleString('ar-EG') + ' معاملة/شهر';

  // 1. Indirect Water (Paperless): 10 Liters/sheet
  const annualSheets = paperPerMonth * 12;
  const indirectWater = annualSheets * 10;
  const indirectMoney = Math.round(annualSheets * 2.5);
  const treesSaved = (annualSheets / 8333).toFixed(1);

  // 2. Direct Water (GCT agricultural workshops & modern irrigation):
  // 50,000 Liters of irrigation water saved per agricultural workshop / Azolla demo field
  const directWater = workshops * 50000;

  // 3. Totals
  const totalWater = indirectWater + directWater;
  const totalWaterM3 = (totalWater / 1000).toFixed(1);

  // Render to DOM
  const elTotal = document.getElementById('resWaterSaved');
  const elDirect = document.getElementById('resWaterDirect');
  const elIndirect = document.getElementById('resWaterIndirect');
  const elMoney = document.getElementById('resMoneySaved');
  const elTrees = document.getElementById('resTreesSaved');
  const elM3 = document.getElementById('resWaterM3');

  if (elTotal) elTotal.innerText = Math.round(totalWater).toLocaleString('ar-EG') + ' لتر';
  if (elM3) elM3.innerText = totalWaterM3 + ' م³';
  if (elDirect) elDirect.innerText = Math.round(directWater).toLocaleString('ar-EG') + ' لتر';
  if (elIndirect) elIndirect.innerText = Math.round(indirectWater).toLocaleString('ar-EG') + ' لتر';
  if (elMoney) elMoney.innerText = indirectMoney.toLocaleString('ar-EG') + ' ج.م';
  if (elTrees) elTrees.innerText = treesSaved + ' شجرة';
}

// Keep legacy alias for backward compatibility
function calculateEcoImpact() {
  calculateNgohubWater();
}

// --- Calculator 2: Services Impact Checklist for Mobile ---
const MOBILE_SERVICES_DATA = {
  srv_web: { water: 150000, money: 37500, paper: 15000, readiness: 15 },
  srv_portal: { water: 250000, money: 62500, paper: 25000, readiness: 25 },
  srv_volunteers: { water: 80000, money: 20000, paper: 8000, readiness: 15 },
  srv_grants: { water: 120000, money: 45000, paper: 12000, readiness: 25 },
  srv_water_gct: { water: 300000, money: 50000, paper: 0, readiness: 15 },
  srv_smart_comp: { water: 100000, money: 25000, paper: 10000, readiness: 20 }
};

function calculateServicesImpact() {
  let totalWater = 0;
  let totalMoney = 0;
  let totalPaper = 0;
  let totalReadiness = 10;
  let count = 0;

  Object.keys(MOBILE_SERVICES_DATA).forEach(key => {
    const chk = document.getElementById(`m_chk_${key}`);
    if (chk && chk.checked) {
      count++;
      const item = MOBILE_SERVICES_DATA[key];
      totalWater += item.water;
      totalMoney += item.money;
      totalPaper += item.paper;
      totalReadiness += item.readiness;
    }
  });

  if (totalReadiness > 100) totalReadiness = 100;

  const elWater = document.getElementById('mSrvWater');
  const elMoney = document.getElementById('mSrvMoney');
  const elPaper = document.getElementById('mSrvPaper');
  const elScore = document.getElementById('mSrvScore');
  const elCount = document.getElementById('mSrvCount');

  if (elWater) elWater.innerText = totalWater.toLocaleString('ar-EG') + ' لتر';
  if (elMoney) elMoney.innerText = totalMoney.toLocaleString('ar-EG') + ' ج.م';
  if (elPaper) elPaper.innerText = totalPaper.toLocaleString('ar-EG') + ' ورقة';
  if (elScore) elScore.innerText = totalReadiness + '%';
  if (elCount) elCount.innerText = count + ' خدمات مختارة';
}

function toggleMobileService(key) {
  const chk = document.getElementById(`m_chk_${key}`);
  if (chk) {
    chk.checked = !chk.checked;
    calculateServicesImpact();
  }
}

// --- Calculator 3: Grant Readiness Diagnostic Tool (6 Criteria) ---
function calculateGrantReadiness() {
  const q1 = parseInt(document.querySelector('input[name="gr_gov"]:checked')?.value || 0);
  const q2 = parseInt(document.querySelector('input[name="gr_fin"]:checked')?.value || 0);
  const q3 = parseInt(document.querySelector('input[name="gr_green"]:checked')?.value || 0);
  const q4 = parseInt(document.querySelector('input[name="gr_tech"]:checked')?.value || 0);
  const q5 = parseInt(document.querySelector('input[name="gr_track"]:checked')?.value || 0);
  const q6 = parseInt(document.querySelector('input[name="gr_rep"]:checked')?.value || 0);

  const totalScore = q1 + q2 + q3 + q4 + q5 + q6; // Max 100
  
  const elScore = document.getElementById('readinessScoreVal');
  const elBadge = document.getElementById('readinessBadge');
  const elAdvice = document.getElementById('readinessAdvice');

  if (!elScore) return;

  elScore.innerText = totalScore + '%';

  if (totalScore >= 80) {
    elBadge.innerText = 'جاهزية متقدمة للمنح الدولية والمناخية';
    elBadge.style.background = '#e8f5e9';
    elBadge.style.color = '#1b5e20';
    elAdvice.innerText = 'جمعيتكم مؤهلة بقوة للتقديم المباشر على المنح الدولية الخضراء وبرامج تمويل المناخ (مثل GEF و EU و GIZ).';
  } else if (totalScore >= 50) {
    elBadge.innerText = 'جاهزية متوسطة تحتاج لاستكمال بعض المحاور';
    elBadge.style.background = '#fef3c7';
    elBadge.style.color = '#b45309';
    elAdvice.innerText = 'الجمعية تمتلك أساساً جيداً، ننصح بتفعيل التحول الرقمي اللاورقي وتوثيق مؤشرات الأثر البيئي لرفع فرصة القبول.';
  } else {
    elBadge.innerText = 'تحتاج إلى تأهيل وبناء قدرات مؤسسية';
    elBadge.style.background = '#fee2e2';
    elBadge.style.color = '#b91c1c';
    elAdvice.innerText = 'يوصى بالانضمام للبرامج التدريبية لمنصة NGOHUB لبناء ملف مؤسسي ورقمي مؤهل للمنح.';
  }
}
