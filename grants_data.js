const GRANTS_DATABASE = [
  {
    id: "g-001",
    title: "برنامج دعم البحث والتطوير والتكنولوجيا (ITAC)",
    donor: "هيئة تنمية صناعة تكنولوجيا المعلومات (ITIDA)",
    category: "technology",
    type: "project", // project, ngo, individual
    typeName: "منح للمشروعات",
    targetAudience: "الشركات الناشئة والمشروعات الابتكارية والباحثون",
    fundingAmount: "تصل إلى 2,000,000 جنيه مصري",
    deadline: "2026-11-30",
    governorate: "جميع المحافظات (27 محافظة)",
    eligibility: [
      "فريق عمل مبدع أو شركة ناشئة مسجلة",
      "وجود مكون تكنولوجي أو ذكي واضح بالمنتج",
      "تقديم نموذج عمل قابل للنمو والتطبيق"
    ],
    summary: "برنامج تمويلي قومي يدعم المشروعات التكنولوجية الابتكارية والبحوث التطبيقية بالتعاون مع حاضنات ومؤسسات التطوير.",
    directApplyUrl: "https://www.itida.gov.eg/English/Programs/ITAC/Pages/default.aspx",
    originalPostUrl: "https://www.facebook.com/ITIDAEgypt",
    verified: true
  },
  {
    id: "g-002",
    title: "برنامج المنح الصغيرة لمرفق البيئة العالمي (GEF/SGP)",
    donor: "برنامج الأمم المتحدة الإنمائي (UNDP) ومرفق البيئة العالمي",
    category: "environment",
    type: "ngo",
    typeName: "منح للجمعيات",
    targetAudience: "الجمعيات الأهلية والمؤسسات المحلية والمنظمات غير الحكومية",
    fundingAmount: "من 20,000 إلى 50,000 دولار أمريكي",
    deadline: "2026-10-15",
    governorate: "محافظات جمهورية مصر العربية",
    eligibility: [
      "جمعية أهلية مشهرة رسمياً لدى وزارة التضامن الاجتماعي",
      "المشروع يستهدف حلول البيئة والمناخ والمجتمعات المحلية",
      "تقديم خطة عمل وإدارة مالية شفافة"
    ],
    summary: "منح مخصصة للجمعيات الأهلية لدعم المشاريع البيئية المستدامة، الطاقة النظيفة، التنوع البيولوجي، ومواجهة التغير المناخي.",
    directApplyUrl: "https://www.sgp-egypt.org/",
    originalPostUrl: "https://www.facebook.com/SGP.Egypt",
    verified: true
  },
  {
    id: "g-003",
    title: "منحة زمالة التنمية المستدامة والتحول الرقمي",
    donor: "المكتب العربي للشباب والبيئة (AOYE)",
    category: "training",
    type: "individual",
    typeName: "منح فردية وفرص تدريب",
    targetAudience: "الشباب، والمتطوعون، وخريجو الكليات التنموية والهندسية",
    fundingAmount: "منحة تدريبية وتأهيلية معتمدة بالكامل 100%",
    deadline: "2026-09-20",
    governorate: "أونلاين + لقاءات ميدانية بالقاهرة والبحيرة",
    eligibility: [
      "السن من 18 إلى 35 سنة",
      "اهتمام مثبت بالعمل المجتمعي والتطوعي والبيئة",
      "الالتزام بحضور كافة الساعات التدريبية ورشة العمل"
    ],
    summary: "برنامج تدريبي مكثف لبناء قدرات الشباب والمتطوعين في مجالات قيادة المبادرات البيئية والتحول الرقمي وتوثيق الأثر.",
    directApplyUrl: "https://aoye-egypt.org/",
    originalPostUrl: "https://www.facebook.com/AOYEEgypt",
    verified: true
  },
  {
    id: "g-004",
    title: "حاضنة أعمال المشروعات الخضراء الذكية للمرأة",
    donor: "حاضنة الأعمال البيئية للمرأة المصرية ومركز التدريب البيئي",
    category: "women",
    type: "project",
    typeName: "منح للمشروعات",
    targetAudience: "رائدات الأعمال والمبادرات النسائية الخضراء",
    fundingAmount: "تمويل أولي + احتضان وتسريع لمدة 6 أشهر",
    deadline: "2026-10-30",
    governorate: "جميع المحافظات المصرية",
    eligibility: [
      "المشروع تقوده امرأة أو بنسبة مشاركة نسائية لا تقل عن 50%",
      "المشروع يقدم حلاً بيئياً ذكياً ومستداماً",
      "وجود نموذج أول قابل للتطبيق (MVP)"
    ],
    summary: "برنامج احتضان ودعم مالي وفني للمشاريع البيئية الخضراء التي تقودها السيدات لتمكينهن اقتصادياً ومجتمعياً.",
    directApplyUrl: "https://www.ngohub.org/apply-women-green",
    originalPostUrl: "https://www.facebook.com/NGOhub.Egypt",
    verified: true
  },
  {
    id: "g-005",
    title: "منحة التحول الرقمي والتطوير المؤسسي للجمعيات الصغيرة",
    donor: "منصة NGOHUB بالتعاون مع PROTIC",
    category: "ngo_dev",
    type: "ngo",
    typeName: "منح للجمعيات",
    targetAudience: "الجمعيات الأهلية والمؤسسات غير الهادفة للربح",
    fundingAmount: "موقع إلكتروني مخصص + أنظمة رقمية (مجاناً لمدة سنة)",
    deadline: "2026-12-31",
    governorate: "مصر والمملكة العربية السعودية",
    eligibility: [
      "جمعية أهلية أو مشروع مجتمعي غير هادف للربح",
      "المشاركة أو الاستعداد للمشاركة في المبادرات الوطنية والخضراء",
      "استيفاء نموذج بيانات المكون الذكي عبر المنصة"
    ],
    summary: "خدمة تطوعية مجانية بالكامل تمكن الجمعيات من امتلاك موقع إلكتروني احترافي ونظام رقمي لتوثيق الأثر وإدارة المتطوعين.",
    directApplyUrl: "https://www.ngohub.org/#smart-component-form",
    originalPostUrl: "https://www.facebook.com/NGOHUB.Egypt",
    verified: true
  },
  {
    id: "g-006",
    title: "برنامج تدريب واستشارات أخصائي إدارة المتطوعين",
    donor: "PROTIC Training & Consulting Solutions",
    category: "training",
    type: "individual",
    typeName: "منح فردية وفرص تدريب",
    targetAudience: "قادة الفرق التطوعية ومسؤولي الموارد البشرية بالجمعيات",
    fundingAmount: "منحة جزئية بنسبة 75% شهادة معتمدة",
    deadline: "2026-09-10",
    governorate: "تدريب تفاعلي عبر الإنترنت",
    eligibility: [
      "خبرة سابقة في إدارة المتطوعين أو الأنشطة الطلابية والجمعيات",
      "اجتياز المقابلة الشخصية عبر الإنترنت"
    ],
    summary: "دورة تخصصية احترافية لإعداد وتأهيل مديري المتطوعين وتطبيق أفضل الممارسات في بناء الفرق واستدامة التطوع.",
    directApplyUrl: "https://protic-solutions.com/volunteer-mgmt-course",
    originalPostUrl: "https://www.facebook.com/ProticSolutions",
    verified: true
  },
  {
    id: "g-007",
    title: "جائزة الابتكار الزراعي والاستدامة (مشروع أزولا مصر)",
    donor: "وزارة التضامن الاجتماعي بالشراكة مع التنمية البيئية",
    category: "environment",
    type: "project",
    typeName: "منح للمشروعات",
    targetAudience: "مشروعات الزراعة النظيفة والأعلاف البديلة والاستدامة",
    fundingAmount: "250,000 جنيه مصري ودعم لوجستي",
    deadline: "2026-11-15",
    governorate: "محافظات الدلتا والصعيد (البحيرة، الفيوم، قنا)",
    eligibility: [
      "مبادرة أو مشروع يعمل في مجالات الابتكار الزراعي والأعلاف البيئية",
      "تقديم أرقام مثبتة عن تقليل البصمة الكربونية واستهلاك المياه"
    ],
    summary: "منحة وجائزة تهدف لتمويل وتوسيع نطاق المشروعات الخضراء النظيفة المستلهمة من نماذج نجاح مثل مشروع أزولا مصر.",
    directApplyUrl: "https://www.moss.gov.eg/",
    originalPostUrl: "https://www.facebook.com/MoSS.Egypt",
    verified: true
  },
  {
    id: "g-008",
    title: "برنامج تمكين الجمعيات الأهلية في إدارة الجودة والمبادرات",
    donor: "نقابة المهندسين بالبحيرة بالشراكة مع مركز التدريب البيئي",
    category: "ngo_dev",
    type: "ngo",
    typeName: "منح للجمعيات",
    targetAudience: "ممثلي وأعضاء مجالس إدارات الجمعيات الأهلية",
    fundingAmount: "برنامج تدريبي واستشاري متكامل مجاني",
    deadline: "2026-10-05",
    governorate: "محافظة البحيرة والمحافظات المجاورة",
    eligibility: [
      "أن تكون الجمعية مسجلة ومفعلة رسمياً",
      "ترشيح عضوين من فريق العمل أو مجلس الإدارة"
    ],
    summary: "برنامج لبناء القدرات المؤسسية وإدارة المشاريع وتطوير الهياكل الإدارية للجمعيات والمؤسسات المحلية.",
    directApplyUrl: "https://www.eng-beheira.org.eg/",
    originalPostUrl: "https://www.facebook.com/EngBeheira",
    verified: true
  }
];
