// ==========================================================================
// NGOHUB Mobile App Main Router & Controller
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Init Theme
  const savedTheme = localStorage.getItem('ngohub_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  // Init Calculators
  calculateEcoImpact();
  calculateGrantReadiness();

  // Init Grants Directory
  renderGrantsList('all');

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('SW Registered:', reg.scope))
      .catch(err => console.log('SW Registration failed:', err));
  }
});

// --- Tab Switching ---
function switchTab(tabId) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  // Show active tab
  const target = document.getElementById('tab-' + tabId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update nav item
  const navBtn = document.getElementById('nav-' + tabId);
  if (navBtn) navBtn.classList.add('active');

  // Close Action Sheet if open
  closeActionSheet();
}

// --- Action Sheet (More Menu) ---
function openActionSheet() {
  const sheet = document.getElementById('actionSheetOverlay');
  if (sheet) sheet.classList.add('open');
}

function closeActionSheet() {
  const sheet = document.getElementById('actionSheetOverlay');
  if (sheet) sheet.classList.remove('open');
}

// --- Modals Controller ---
function openAppModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.add('open');
}

function closeAppModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.remove('open');
}

// --- Theme Toggle ---
function toggleAppTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('ngohub_theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

// --- Grants Directory Rendering ---
let currentCategory = 'all';

function filterGrants(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.pill-btn').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderGrantsList(cat);
}

function searchGrants(query) {
  const q = query.trim().toLowerCase();
  renderGrantsList(currentCategory, q);
}

function renderGrantsList(category = 'all', query = '') {
  const container = document.getElementById('grantsListContainer');
  if (!container) return;

  const data = (typeof GRANTS_DATA !== 'undefined') ? GRANTS_DATA : [];
  
  const filtered = data.filter(item => {
    const matchCat = (category === 'all') || (item.category === category) || (item.field === category);
    const matchQ = query === '' || 
                   (item.title && item.title.toLowerCase().includes(query)) ||
                   (item.donor && item.donor.toLowerCase().includes(query)) ||
                   (item.description && item.description.toLowerCase().includes(query));
    return matchCat && matchQ;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 30px; color: var(--text-muted);">
        <i class="fa-solid fa-folder-open" style="font-size: 2rem; margin-bottom: 8px;"></i>
        <p>لا توجد منح مطابقة لبحثك حالياً.</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered.slice(0, 20).map(g => `
    <div class="grant-item-card">
      <div class="grant-card-top">
        <h4>${g.title}</h4>
        <span class="grant-tag">${g.donor || 'جهة دولية'}</span>
      </div>
      <p class="grant-desc">${g.description ? g.description.substring(0, 110) + '...' : 'فرصة تمويلية موثقة لدعم المشروعات التنموية والبيئية.'}</p>
      <div class="grant-card-bottom">
        <span class="grant-funding"><i class="fa-solid fa-coins"></i> ${g.funding || 'تمويل معتمد'}</span>
        <a href="${g.url || 'https://wa.me/201026847508'}" target="_blank" class="btn-grant-apply">
          التفاصيل والتقديم <i class="fa-solid fa-arrow-left"></i>
        </a>
      </div>
    </div>
  `).join('');
}

// --- Quick Certificate Verification Demo ---
function verifyCertificateDemo() {
  const code = document.getElementById('certCodeInput')?.value.trim();
  const resBox = document.getElementById('certResultBox');
  if (!code || !resBox) return;

  resBox.style.display = 'block';
  if (code.toUpperCase().includes('GCT') || code.length >= 6) {
    resBox.innerHTML = `
      <div style="background: #e8f5e9; border: 1px solid #81c784; padding: 12px; border-radius: 8px; color: #1b5e20;">
        <i class="fa-solid fa-circle-check"></i> <strong>شهادة معتمدة وموثقة:</strong><br>
        الاسم: كادر تطوعي معتمد | عدد الساعات: 60 ساعة تدريبية<br>
        المجال: إدارة المنظمات الخضراء والحوسبة السحابية | الكود: ${code}
      </div>`;
  } else {
    resBox.innerHTML = `
      <div style="background: #fee2e2; border: 1px solid #fca5a5; padding: 12px; border-radius: 8px; color: #991b1b;">
        <i class="fa-solid fa-circle-xmark"></i> كود الشهادة غير مسجل، يرجى التأكد من الرمز.
      </div>`;
  }
}
