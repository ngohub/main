# 🇪🇬 التوثيق الشامل وهندسة المشروع | Egypt Grants & Competitions Hub Complete Documentation

> **اسم المشروع**: منصة الفرص والمسابقات القومية في مصر (Egypt National Grants & Competitions Portal)  
> **الإصدار**: 3.0 (Clean Corporate Light Theme & Flat Root Architecture)  
> **تاريخ التحديث**: 2026  

---

## 📋 جدول المحتويات
1. [نظرة عامة على المشروع والهيكلية](#1-نظرة-عامة-على-المشروع-والهيكلية)
2. [بيانات وشبكة الجهات المانحة (Data & Donors Ecosystem)](#2-بيانات-وشبكة-الجهات-المانحة-data--donors-ecosystem)
3. [الأكواد المصدرية الكاملة (Complete Source Code)](#3-الأكواد-المصدرية-الكاملة-complete-source-code)
   - [3.1 الصفحة الرئيسية (`index.html`)](#31-الصفحة-الرئيسية-indexhtml)
   - [3.2 صفحة الخدمات الاستشارية (`services.html`)](#32-صفحة-الخدمات-الاستشارية-serviceshtml)
   - [3.3 صفحة تواصل معنا (`contact.html`)](#33-صفحة-تواصل-معنا-contacthtml)
   - [3.4 ملف التنسيق الأنيق (`styles.css`)](#34-ملف-التنسيق-الأنيق-stylescss)
   - [3.5 ملف البرمجة والتفاعل (`app.js`)](#35-ملف-البرمجة-والتفاعل-appjs)
   - [3.6 سكربت مزامنة وفحص الروابط (`sync_grants.py`)](#36-سكربت-مزامنة-وفحص-الروابط-sync_grantspy)
   - [3.7 خادم المعاينة المحلي (`server.py`)](#37-خادم-المعاينة-المحلي-serverpy)
   - [3.8 سكربت المزامنة والتغليف (`sync_and_package.py`)](#38-سكربت-المزامنة-والتغليف-sync_and_packagepy)
   - [3.9 سير العمل الآلي (`.github/workflows/deploy_and_sync.yml`)](#39-سير-العمل-الآلي-githubworkflowsdeploy_and_syncyml)
4. [طرق التشغيل المحلي (Local Run Commands)](#4-طرق-التشغيل-المحلي-local-run-commands)
5. [دليل النشر والاستضافة (Deployment Guide)](#5-دليل-النشر-والاستضافة-deployment-guide)
   - [أولاً: النشر على Cloudflare Pages](#أولاً-النشر-على-cloudflare-pages)
   - [ثانياً: النشر على GitHub Pages حل مشكلة 404](#ثانياً-النشر-على-github-pages-حل-مشكلة-404)

---

## 1. نظرة عامة على المشروع والهيكلية

تم تصميم المنصة كبوابة قومية موحدة تربط المبتكرين والباحثين وأصحاب الشركات الناشئة في مصر بأكثر من **68 جهة مانحة** قومية ودولية (وزارات مصري، هيئات الأمم المتحدة، حاضنات ومسرعات أعمال، ومؤسسات تمويل دولية).

### المميزات الأساسية:
- **نظام تصميم فاتح راقي (Clean Corporate Light Theme)**: خلفية رمادية فاتحة `#f1f5f9` بطاقات بيضاء ناصعة `#ffffff` مع نصوص كحلية داكنة `#0f172a` وأزرار زمردية `#059669`.
- **روابط مباشرة مزدوجة**:
  1. `رابط التقديم المباشر`: يفتح بوابات واستمارات التقديم الرسمية فوراً.
  2. `رابط الإعلان / البوست الأصلي`: يفتح المنشور التفصيلي للمسابقة على Facebook أو LinkedIn.
- **هيكلية الملفات المسطحة (Flat Root Architecture)**: جميع الملفات متواجدة مباشرة بالجذر الرئيسي لمنع مشاكل المسارات 404 على GitHub Pages و Cloudflare Pages.
- **تحديث ومزامنة تلقائية**: مزودة بسكربتات Python للتحقق من صحة الروابط وتحديث قواعد البيانات (JSON, CSV, JS).

---

## 2. بيانات وشبكة الجهات المانحة (Data & Donors Ecosystem)

تغطي المنصة **88 مسابقة وفرصة تمويلية** من **68 جهة مانحة**.

### هرمية البيانات المعتمدة في `grants.json`:
```json
{
  "id": "grant-001",
  "title": "برنامج دعم تكنولوجيا المعلومات وتطوير الأعمال ITAC",
  "donor": "هيئة تنمية صناعة تكنولوجيا المعلومات (ITIDA)",
  "category": "Technology & Startups",
  "targetAudience": "الشركات الناشئة، الباحثون بالجامعات المصرية",
  "fundingAmount": "تصل إلى 2,000,000 جنيه مصري",
  "deadline": "2026-11-30",
  "governorate": "جميع المحافظات المصرية (27 محافظة)",
  "eligibility": [
    "شركة مصري مسجلة برأس مال وطني",
    "فريق عمل يتكون من 3 أفراد على الأقل",
    "تقديم نموذج عمل واضح قابل للتطبيق"
  ],
  "summary": "برنامج تمويلي قومي يدعم الابتكارات التكنولوجية والبحوث التطبيقية بالتعاون بين الجامعات والشركات الناشئة.",
  "directApplyUrl": "https://www.itida.gov.eg/English/Programs/ITAC/Pages/default.aspx",
  "originalPostUrl": "https://www.facebook.com/ITIDAEgypt/posts/pfbid02...",
  "verifiedStatus": true
}
```

---

## 3. الأكواد المصدرية الكاملة (Complete Source Code)

### 3.1 الصفحة الرئيسية (`index.html`)
```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>منصة الفرص والمسابقات القومية في مصر | Egypt Grants & Competitions Hub</title>
    <meta name="description" content="البوابة الرسمية المجمعة لأهم المنح والمسابقات وحاضنات الأعمال في مصر بالروابط المباشرة وتحديث تلقائي للبيانات">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css?v=3.0">
</head>
<body>
    <header class="header">
        <div class="header-container">
            <a href="index.html" class="logo-group-link">
                <div class="logo-group">
                    <svg class="svg-logo" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="12" fill="#0f172a"/>
                        <path d="M14 24L21 31L34 16" stroke="#059669" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="34" cy="16" r="3" fill="#0ea5e9"/>
                    </svg>
                    <div>
                        <h1 class="logo-title">منصة الفرص والمسابقات في مصر</h1>
                        <span class="logo-subtitle">Egypt National Grants & Competitions Portal</span>
                    </div>
                </div>
            </a>
            <nav class="nav-menu" aria-label="القائمة الرئيسية">
                <a href="index.html" class="nav-link active"><i class="fa-solid fa-house"></i> الرئيسية</a>
                <a href="services.html" class="nav-link"><i class="fa-solid fa-hand-holding-hand"></i> الخدمات</a>
                <a href="contact.html" class="nav-link"><i class="fa-solid fa-envelope"></i> تواصل معنا</a>
            </nav>
            <div class="header-actions">
                <button id="btnSync" class="btn-sync"><i class="fa-solid fa-rotate-right" id="syncIcon"></i><span>تحديث البيانات تلقائياً</span></button>
                <div class="dropdown-export">
                    <button class="btn-export"><i class="fa-solid fa-download"></i><span>تصدير البيانات</span></button>
                    <div class="dropdown-menu">
                        <button id="btnExportPDF" class="dropdown-item"><i class="fa-solid fa-file-pdf"></i> تحميل ملف PDF</button>
                        <a href="grants.csv?v=3.0" download="egypt_grants_database.csv" class="dropdown-item"><i class="fa-solid fa-file-csv"></i> تحميل ملف CSV</a>
                        <a href="grants.json?v=3.0" download="egypt_grants_database.json" class="dropdown-item"><i class="fa-solid fa-file-code"></i> تحميل ملف JSON</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section class="hero">
        <div class="hero-content">
            <div class="badge-live"><i class="fa-solid fa-circle"></i> بوابتك الموحدة لأحدث منح ومسابقات مصر 2026</div>
            <h2 class="hero-title">تصفح وقدم مباشرة على جميع المنح والمسابقات الرسمية داخل مصر</h2>
            <p class="hero-desc">دليل شامل يجمع كافة الفرص التمويلية، وحاضنات الأعمال، والجوائز القومية من جميع الوزارات المصرية وهيئات الأمم المتحدة بمصر مع روابط التقديم المباشرة والشروط التفصيلية.</p>
            <div class="stats-bar">
                <div class="stat-item"><div class="stat-num" id="statTotalGrants">88+</div><div class="stat-label">فرصة ومسابقة متاحة</div></div>
                <div class="stat-item"><div class="stat-num" id="statTotalDonors">68+</div><div class="stat-label">جهة وزارية ودولية</div></div>
                <div class="stat-item"><div class="stat-num">100%</div><div class="stat-label">روابط تقديم مباشرة</div></div>
                <div class="stat-item"><div class="stat-num" id="statLastSync">مُحدث الآن</div><div class="stat-label">تحديث تلقائي مستمر</div></div>
            </div>
        </div>
    </section>
    <main class="main-container">
        <section class="donors-directory-card">
            <div class="directory-header">
                <h3><i class="fa-solid fa-building-columns"></i> دليل الوزارات والجهات المانحة المتاحة بالمنصة</h3>
                <span class="directory-subtitle">اضغط على اسم الجهة أو الوزارة لتصفية الفرص المتاحة الخاصة بها فورياً</span>
            </div>
            <div class="donors-pills-grid" id="donorsPillsGrid"></div>
        </section>
        <div class="controls-card">
            <div class="search-box">
                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="text" id="searchInput" placeholder="ابحث باسم المسابقة، الجهة المانحة، أو الفئة المستهدفة..." autocomplete="off">
            </div>
            <div class="category-tabs" id="categoryTabs">
                <button class="tab-btn active" data-category="all"><i class="fa-solid fa-grid-2"></i> الكل</button>
                <button class="tab-btn" data-category="Technology & Startups"><i class="fa-solid fa-laptop-code"></i> التكنولوجيا والشركات الناشئة</button>
                <button class="tab-btn" data-category="Research & Academia"><i class="fa-solid fa-flask-vial"></i> البحث العلمي والأكاديمي</button>
                <button class="tab-btn" data-category="Women Empowerment"><i class="fa-solid fa-user-nurse"></i> تمكين المرأة</button>
                <button class="tab-btn" data-category="Environment & Sustainability"><i class="fa-solid fa-leaf"></i> البيئة والاستدامة</button>
                <button class="tab-btn" data-category="Youth & Culture"><i class="fa-solid fa-palette"></i> الشباب والثقافة</button>
                <button class="tab-btn" data-category="Social Impact & Micro-grants"><i class="fa-solid fa-hand-holding-heart"></i> التنمية الاجتماعية</button>
            </div>
        </div>
        <div class="grants-grid" id="grantsGrid"></div>
        <div class="empty-state hidden" id="emptyState">
            <i class="fa-solid fa-folder-open empty-icon"></i>
            <h3>لم يتم العثور على مسابقات مطابقة لأسئلتك</h3>
            <p>جرب البحث بكلمة مفتاحية مختلفة أو اختر فئة رئيسية أخرى.</p>
        </div>
    </main>
    <div class="modal-backdrop hidden" id="detailModal">
        <div class="modal-content">
            <button class="modal-close" id="modalClose"><i class="fa-solid fa-xmark"></i></button>
            <div class="modal-header">
                <span class="modal-category" id="mCategory">الفئة</span>
                <h2 class="modal-title" id="mTitle">عنوان المسابقة</h2>
                <div class="modal-donor" id="mDonor"><i class="fa-solid fa-building-columns"></i> الجهة المانحة</div>
            </div>
            <div class="modal-body">
                <div class="modal-section"><div class="section-title"><i class="fa-solid fa-align-right"></i> وصف الفرصة والملخص:</div><p id="mSummary" class="modal-text"></p></div>
                <div class="modal-grid-info">
                    <div class="info-card"><i class="fa-solid fa-users"></i><div><span class="info-label">الفئة المستهدفة:</span><span class="info-value" id="mTarget"></span></div></div>
                    <div class="info-card"><i class="fa-solid fa-sack-dollar"></i><div><span class="info-label">حجم التمويل والخدمات:</span><span class="info-value Highlight" id="mFunding"></span></div></div>
                    <div class="info-card"><i class="fa-solid fa-calendar-day"></i><div><span class="info-label">الموعد النهائي للتقديم:</span><span class="info-value" id="mDeadline"></span></div></div>
                    <div class="info-card"><i class="fa-solid fa-location-dot"></i><div><span class="info-label">النطاق الجغرافي:</span><span class="info-value" id="mGovernorate"></span></div></div>
                </div>
                <div class="modal-section"><div class="section-title"><i class="fa-solid fa-list-check"></i> أهم شروط القبول والأهلية:</div><ul class="eligibility-list" id="mEligibility"></ul></div>
            </div>
            <div class="modal-footer">
                <a href="#" target="_blank" rel="noopener noreferrer" class="btn-card-original" id="mOriginalPostLink"><i class="fa-solid fa-bullhorn"></i><span>رؤية الإعلان / البوست الأصلي</span></a>
                <a href="#" target="_blank" rel="noopener noreferrer" class="btn-direct-apply" id="mDirectLink"><i class="fa-solid fa-paper-plane"></i><span>التقديم المباشر الآن عبر الرابط الرسمي</span></a>
            </div>
        </div>
    </div>
    <div class="toast hidden" id="toast"><i class="fa-solid fa-check-circle"></i><span id="toastMsg">تم تحديث البيانات بنجاح!</span></div>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-col brand-col">
                <div class="logo-group">
                    <svg class="svg-logo" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="12" fill="#0f172a"/>
                        <path d="M14 24L21 31L34 16" stroke="#059669" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="34" cy="16" r="3" fill="#0ea5e9"/>
                    </svg>
                    <div><h3 class="logo-title">منصة الفرص والمسابقات</h3><span class="logo-subtitle">Egypt National Portal</span></div>
                </div>
                <p class="footer-desc">البوابة الموحدة الشاملة لكافة المنح والمسابقات وحاضنات الأعمال في مصر.</p>
            </div>
            <div class="footer-col">
                <h4 class="footer-heading">روابط السريعة</h4>
                <ul class="footer-links">
                    <li><a href="index.html"><i class="fa-solid fa-angle-left"></i> الرئيسية</a></li>
                    <li><a href="services.html"><i class="fa-solid fa-angle-left"></i> الخدمات الاستشارية</a></li>
                    <li><a href="contact.html"><i class="fa-solid fa-angle-left"></i> تواصل معنا</a></li>
                    <li><a href="grants.csv?v=3.0" download><i class="fa-solid fa-angle-left"></i> قاعدة البيانات (CSV)</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 class="footer-heading">فئات الدعم</h4>
                <ul class="footer-links">
                    <li><a href="index.html"><i class="fa-solid fa-angle-left"></i> التكنولوجيا والشركات الناشئة</a></li>
                    <li><a href="index.html"><i class="fa-solid fa-angle-left"></i> البحث العلمي والأكاديمي</a></li>
                    <li><a href="index.html"><i class="fa-solid fa-angle-left"></i> تمكين المرأة والشباب</a></li>
                    <li><a href="index.html"><i class="fa-solid fa-angle-left"></i> البيئة والاستدامة</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 class="footer-heading">معلومات التواصل</h4>
                <div class="footer-contact-info">
                    <p><i class="fa-solid fa-location-dot"></i> القاهرة، جمهورية مصر العربية</p>
                    <p><i class="fa-solid fa-envelope"></i> info@egyptgrants.gov.eg</p>
                    <p><i class="fa-solid fa-globe"></i> تغطية 27 محافظة مصرية</p>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-bottom-container">
                <p>&copy; 2026 منصة الفرص والمسابقات القومية في مصر. جميع الحقوق محفوظة.</p>
                <div class="footer-badges"><span class="badge-tech"><i class="fa-solid fa-shield-halved"></i> بيانات موثقة 100%</span></div>
            </div>
        </div>
    </footer>
    <script src="grants.js?v=3.0"></script>
    <script src="app.js?v=3.0"></script>
</body>
</html>
```

---

## 4. طرق التشغيل المحلي (Local Run Commands)

### 1. تشغيل الخادم المحلي بلغة Python:
```bash
python server.py
```
سيعمل الخادم فورياً على الرابط: `http://localhost:8080`

### 2. فحص وتحديث الروابط وقواعد البيانات تلقائياً:
```bash
python sync_grants.py
```

### 3. مزامنة ملفات الاستضافة وبناء حزمة ZIP:
```bash
python sync_and_package.py
```

---

## 5. دليل النشر والاستضافة (Deployment Guide)

### أولاً: النشر على Cloudflare Pages
1. سجل الدخول إلى **[Cloudflare Dashboard](https://dash.cloudflare.com/)**.
2. انتقل إلى **Workers & Pages** ➡️ **Create application** ➡️ **Pages** ➡️ **Upload assets**.
3. قم بسحب وإسقاط ملف **`egypt_grants_cloudflare_package.zip`** أو مجلد `website`.
4. اضغط **Deploy Site**.

### ثانياً: النشر على GitHub Pages (حل مشكلة 404)
لتجنب خطأ **404 File Not Found** على GitHub Pages، تأكد من رفع جميع الملفات مباشرة في **المجلد الرئيسي (Root)**:

```bash
git init
git add .
git commit -m "Deploy Egypt Grants Hub directly to root"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main -f
```
ثم اذهب إلى **Settings** ➡️ **Pages** في مستودع GitHub واختيار المصدر `/ (root)`.
