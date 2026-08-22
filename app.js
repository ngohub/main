// NGOHUB Interactive Web Application Script
let currentTypeFilter = 'all';
let currentSearchTerm = '';

// Initialize on DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  renderGrants(GRANTS_DATABASE);
});

// Tab Navigation Handler
function switchTab(tabId) {
  // Update nav buttons active state
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeNavBtn = document.getElementById(`nav-${tabId}`);
  if (activeNavBtn) activeNavBtn.classList.add('active');

  // Update page sections active state
  document.querySelectorAll('.page-section').forEach(sec => {
    sec.classList.remove('active-section');
  });
  const activeSection = document.getElementById(`section-${tabId}`);
  if (activeSection) {
    activeSection.classList.add('active-section');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Set Grant Type Filter: all, individual, ngo, project
function setGrantTypeFilter(type) {
  currentTypeFilter = type;

  // Update filter buttons UI
  document.querySelectorAll('.type-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-type') === type) {
      btn.classList.add('active');
    }
  });

  filterGrants();
}

// Filter Grants Function (Search & Category filter combined)
function filterGrants() {
  const searchInput = document.getElementById('grantsSearchInput');
  currentSearchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';

  const filtered = GRANTS_DATABASE.filter(grant => {
    // Type match
    const matchType = (currentTypeFilter === 'all') || (grant.type === currentTypeFilter);

    // Search term match
    const matchSearch = !currentSearchTerm || 
      grant.title.toLowerCase().includes(currentSearchTerm) ||
      grant.donor.toLowerCase().includes(currentSearchTerm) ||
      grant.summary.toLowerCase().includes(currentSearchTerm) ||
      grant.targetAudience.toLowerCase().includes(currentSearchTerm);

    return matchType && matchSearch;
  });

  renderGrants(filtered);
}

// Render Grants Cards to DOM
function renderGrants(grants) {
  const container = document.getElementById('grantsGridContainer');
  if (!container) return;

  if (grants.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0;">
        <i class="fa-solid fa-folder-open" style="font-size: 3rem; color: #94a3b8; margin-bottom: 15px;"></i>
        <h4 style="font-size: 1.2rem; font-weight: 800; color: #0f172a;">لم يتم العثور على فرص مطابقة</h4>
        <p style="color: #475569; font-size: 0.95rem;">جرّب كلمة مفتاحية أخرى أو اختر فئة مختلفة من التبويبات أعلاه.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = grants.map(grant => {
    const isNgo = grant.type === 'ngo';
    const isProject = grant.type === 'project';
    const badgeClass = isNgo ? 'ngo-type' : (isProject ? 'project-type' : '');

    return `
      <div class="grant-card">
        <span class="grant-badge-type ${badgeClass}">
          ${grant.typeName || 'فرصة تمويلية'}
        </span>

        <div>
          <div class="grant-donor">
            <i class="fa-solid fa-building-columns"></i> ${grant.donor}
          </div>
          <h4 class="grant-title">${grant.title}</h4>
          <p class="grant-desc">${grant.summary}</p>
        </div>

        <div>
          <div class="grant-meta-list">
            <div class="meta-row">
              <span class="meta-label">الفئة المستهدفة:</span>
              <span class="meta-value" style="color: var(--text-dark);">${grant.targetAudience}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">الدعم / التمويل:</span>
              <span class="meta-value">${grant.fundingAmount}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">الموعد النهائي:</span>
              <span class="meta-value" style="color: var(--primary-purple);">${grant.deadline}</span>
            </div>
          </div>

          <div class="grant-card-footer">
            <button class="btn-view-details" onclick="openGrantModal('${grant.id}')">
              <i class="fa-solid fa-circle-info"></i> التفاصيل
            </button>
            <a href="${grant.directApplyUrl}" target="_blank" class="btn-apply-direct">
              <i class="fa-solid fa-paper-plane"></i> التقديم المباشر
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Grant Modal Handling
function openGrantModal(grantId) {
  const grant = GRANTS_DATABASE.find(g => g.id === grantId);
  if (!grant) return;

  document.getElementById('mTitle').textContent = grant.title;
  document.getElementById('mDonor').innerHTML = `<i class="fa-solid fa-building-columns"></i> ${grant.donor}`;
  document.getElementById('mSummary').textContent = grant.summary;

  const eligibilityList = document.getElementById('mEligibility');
  eligibilityList.innerHTML = grant.eligibility.map(item => `<li>${item}</li>`).join('');

  document.getElementById('mOriginalLink').href = grant.originalPostUrl;
  document.getElementById('mDirectLink').href = grant.directApplyUrl;

  const modal = document.getElementById('grantModal');
  if (modal) modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('grantModal');
  if (modal) modal.classList.remove('active');
}

// Export Grants Data (CSV / JSON)
function exportData(format) {
  if (format === 'json') {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(GRANTS_DATABASE, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "ngohub_grants_database.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("تم تصدير قاعدة البيانات بصيغة JSON بنجاح!");
  } else if (format === 'csv') {
    let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
    csvContent += "ID,العنوان,الجهة المانحة,الفئة,التمويل,الموعد النهائي,رابط التقديم\n";

    GRANTS_DATABASE.forEach(g => {
      const row = `"${g.id}","${g.title}","${g.donor}","${g.typeName}","${g.fundingAmount}","${g.deadline}","${g.directApplyUrl}"`;
      csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", encodedUri);
    downloadAnchor.setAttribute("download", "ngohub_grants_database.csv");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("تم تصدير قاعدة البيانات بصيغة CSV بنجاح!");
  }
}

// Handle Form Submission for Smart Component
function handleFormSubmit(event) {
  event.preventDefault();
  const respName = document.getElementById('respName').value;
  const projName = document.getElementById('projName').value;

  showToast(`شكرًا لك ${respName}! تم استلام بيانات ${projName} بنجاح لإعداد المكون الذكي.`);
  document.getElementById('smartComponentForm').reset();
}

// Show Toast Notification
function showToast(message) {
  const toast = document.getElementById('toastMsg');
  const toastText = document.getElementById('toastText');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
