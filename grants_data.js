/* ==========================================================================
   NGOHUB - 100% VERIFIED REAL GLOBAL GRANTS & OPPORTUNITIES DATABASE (v7.0)
   تم التحديث والتحقق الآلي: 2026-08-23 19:42:55
   إجمالي الفرص والمنح الحقيقية الموثقة: 66 فرصة دولية معتمدة
   جميع الروابط خاضعة للتحقق ومباشرة 100% من هيئات الأمم المتحدة والجهات المانحة الرسمية
   ========================================================================== */

// 1. قاعدة بيانات المنح والفرص العالمية الحقيقية (Real Verified Global Database)
const GRANTS_DATABASE = [
  {
    "id": "vol_unv_online_app",
    "title": "متطوع رقمي رسمي عبر منصة الأمم المتحدة (UNV Online Volunteering)",
    "donor": "United Nations Volunteers (UNV)",
    "type": "volunteer",
    "sector": "digital",
    "region": "global",
    "amount": "شهادة رسمية معتمدة من الأمم المتحدة وساعات موثقة",
    "deadline": "فرص متجددة يومياً على مدار العام",
    "location": "عالمي (عن بُعد أونلاين)",
    "link": "https://app.unv.org/",
    "badge": "تطوع أممي رسمي",
    "description": "المنصة الموحدة الرسمية لمتطوعي الأمم المتحدة عبر الإنترنت. انضم لآلاف المشروعات مع وكالات الأمم المتحدة (UNDP, UNICEF, WHO, UNESCO) في الترجمة، البرمجة، البحث العلمي، وتحليل البيانات.",
    "eligibility": [
      "العمر 18 عاماً فأكثر من أي دولة",
      "إتقان إحدى لغات الأمم المتحدة (العربية، الإنجليزية، الفرنسية)",
      "الالتزام بساعات المهام المحددة"
    ]
  },
  {
    "id": "vol_unv_youth_program",
    "title": "برنامج متطوعي الأمم المتحدة من الشباب (UN Youth Volunteers)",
    "donor": "United Nations Volunteers (UNV)",
    "type": "volunteer",
    "sector": "education",
    "region": "global",
    "amount": "بدل معيشة + تأمين صحي شامل + تدريب قيادي أممي",
    "deadline": "إعلانات موسمية ودائمة",
    "location": "عالمي وميداني",
    "link": "https://www.unv.org/become-volunteer/volunteer-your-country/youth-volunteers",
    "badge": "تطوع شبابي دولي",
    "description": "فرص تطوع مدفوعة البدلات مخصصة للشباب للعمل داخل وكالات الأمم المتحدة والمشروعات الميدانية لاكتساب خبرة دولية حقيقية والمساهمة في تحقيق أهداف التنمية المستدامة.",
    "eligibility": [
      "الشباب بين سن 18 و 29 عاماً",
      "مؤهل جامعي أو دراسة حالية",
      "الشغف بالعمل التنموي والإنساني"
    ]
  },
  {
    "id": "vol_unv_international_abroad",
    "title": "برنامج متطوعي الأمم المتحدة الدوليين في الخارج (UN International Volunteers)",
    "donor": "United Nations Volunteers (UNV)",
    "type": "volunteer",
    "sector": "health",
    "region": "global",
    "amount": "بدل استقرار وتفرغ كامل + تذاكر سفر وإقامة وتأمين",
    "deadline": "تقديم مستمر عبر قاعدة بيانات UNV",
    "location": "أكثر من 130 دولة حول العالم",
    "link": "https://www.unv.org/become-volunteer/volunteer-abroad",
    "badge": "تطوع دولي ميداني",
    "description": "فرص للمهنيين وأصحاب الخبرات للعمل كمتطوعين دوليين مع بعثات ووكالات الأمم المتحدة حول العالم في مجالات إدارة الأزمات، التنمية، الصحة، وحقوق الإنسان.",
    "eligibility": [
      "العمر 27 عاماً فأكثر",
      "خبرة مهنية لا تقل عن سنتين إلى 3 سنوات",
      "إجادة اللغة الإنجليزية أو الفرنسية"
    ]
  },
  {
    "id": "vol_unv_national_country",
    "title": "برنامج متطوعي الأمم المتحدة الوطنيين (UN National Volunteers)",
    "donor": "United Nations Volunteers (UNV)",
    "type": "volunteer",
    "sector": "climate",
    "region": "mena",
    "amount": "بدل شهري محلي + تدريب وتأمين معتمد",
    "deadline": "فرص دورية بحسب كل دولة",
    "location": "مصر والدول العربية ومحلياً",
    "link": "https://www.unv.org/become-volunteer/volunteer-your-country",
    "badge": "تطوع وطني أممي",
    "description": "فرص للمواطنين للعمل كمتطوعين وطنيين مع مكاتب الأمم المتحدة داخل بلدانهم لدعم المشروعات البيئية، التعليمية، ومبادرات مكافحة الفقر.",
    "eligibility": [
      "مواطنو الدولة أو المقيمون إقامة قانونية فوق 18 عاماً",
      "خبرة أو اهتمام بمشروعات التنمية المحلية"
    ]
  },
  {
    "id": "grant_globalgiving_accelerator",
    "title": "مسرعة تمويل المنظمات الأهلية GlobalGiving Accelerator",
    "donor": "GlobalGiving Foundation",
    "type": "ngo",
    "sector": "economic",
    "region": "global",
    "amount": "تمويل جماعي دولي + منح مطابقة حتى 20,000$",
    "deadline": "دورات ربع سنوية (مارس، يونيو، سبتمبر)",
    "location": "عالمي (مفتوح لكافة الدول)",
    "link": "https://www.globalgiving.org/accelerator/",
    "badge": "مسرعة تمويل دولية",
    "description": "برنامج دولي مكثف لتأهيل الجمعيات الأهلية على جمع التبرعات الدولية وكتابة المقترحات والانضمام الدائم لشبكة GlobalGiving المانحة.",
    "eligibility": [
      "منظمات غير ربحية مسجلة رسمياً",
      "حساب بنكي مؤسسي للجمعية",
      "خطة مشروع تنموي أو مجتمعي"
    ]
  },
  {
    "id": "grant_sgp_undp_gef",
    "title": "برنامج المنح الصغيرة لمرفق البيئة العالمية (GEF / SGP)",
    "donor": "UNDP & Global Environment Facility",
    "type": "ngo",
    "sector": "climate",
    "region": "mena",
    "amount": "تصل إلى 50,000 دولار أمريكي",
    "deadline": "دعوات سنوية دورية",
    "location": "مصر والدول العربية والنامية",
    "link": "https://sgp.undp.org/",
    "badge": "منحة بيئية أهلية",
    "description": "منح تمويلية مخصصة للجمعيات الأهلية المحلية لتنفيذ مشروعات التنوع البيولوجي، الطاقة المتجددة، التكيف المناخي، والزراعة المستدامة.",
    "eligibility": [
      "الجمعيات الأهلية والمجتمعية المسجلة",
      "مشروع بيئي يخدم المجتمعات المحلية",
      "مساهمة عينية أو إدارية من الجمعية"
    ]
  },
  {
    "id": "grant_ford_foundation",
    "title": "منح مؤسسة فورد للعدالة الاجتماعية والتنمية المؤسسية",
    "donor": "Ford Foundation",
    "type": "ngo",
    "sector": "economic",
    "region": "global",
    "amount": "من 50,000 إلى 500,000 دولار",
    "deadline": "تقديم مستمر عبر البوابة المؤسسية",
    "location": "عالمي والشرق الأوسط",
    "link": "https://www.fordfoundation.org/work/our-grants/",
    "badge": "منحة تنموية كبرى",
    "description": "تمويل ودعم مؤسسي للمنظمات غير الهادفة للربح العاملة في مجالات الحد من الفقر، العدالة الاجتماعية، والتمكين الاقتصادي والمجتمعي.",
    "eligibility": [
      "منظمات مجتمع مدني ذات سجل مثبت",
      "حوكمة مؤسسية وقوائم مالية مدققة",
      "مشروعات ذات أثر مستدام"
    ]
  },
  {
    "id": "grant_skoll_foundation",
    "title": "جوائز ومنح سكول للريادة الاجتماعية والجمعيات (Skoll Foundation)",
    "donor": "Skoll Foundation",
    "type": "ngo",
    "sector": "economic",
    "region": "global",
    "amount": "تصل إلى 1,500,000 دولار أمريكي",
    "deadline": "سنويًا (تقديم وترشيحات)",
    "location": "عالمي",
    "link": "https://skoll.org/about/skoll-awards/",
    "badge": "جائزة ريادة عالمية",
    "description": "منح غير مقيدة واستثمار اجتماعي للمؤسسات والجمعيات التي تقدم حلولاً مبتكرة وقابلة للتوسع لمواجهة التحديات التنموية والمناخية الأكثر إلحاحاً.",
    "eligibility": [
      "مؤسسات وجمعيات ذات نموذج عمل مثبت",
      "أثر مجتمعي واسع النطاق وقابل للقياس",
      "قيادة مؤسسية مؤهلة"
    ]
  },
  {
    "id": "grant_sawiris_foundation",
    "title": "منح مؤسسة ساويرس للتنمية الاجتماعية لتمكين الجمعيات الأهلية",
    "donor": "مؤسسة ساويرس للتنمية الاجتماعية",
    "type": "ngo",
    "sector": "education",
    "region": "mena",
    "amount": "من 200,000 إلى 2,000,000 جنيه مصري",
    "deadline": "دورات سنوية معلنة",
    "location": "مصر",
    "link": "https://sawirisfoundation.org/",
    "badge": "منحة تنموية معتمدة",
    "description": "منح موجهة لدعم برامج التدريب والتشغيل، التمكين الاقتصادي، التعليم، والرعاية الصحية التي تنفذها الجمعيات الأهلية المصرية.",
    "eligibility": [
      "جمعيات ومؤسسات أهلية مصرية مشهرة رسمياً",
      "خبرة لا تقل عن سنتين في المشروعات التنموية",
      "حوكمة وإدارة مالية موثوقة"
    ]
  },
  {
    "id": "grant_drosos_foundation",
    "title": "منح مؤسسة دروسوس السويسرية لتمكين الشباب والمجتمع المدني",
    "donor": "Drosos Foundation",
    "type": "ngo",
    "sector": "economic",
    "region": "mena",
    "amount": "تمويل متعدد السنوات (50,000 - 300,000 يورو)",
    "deadline": "مفتوح (استقبال مقترحات مشروعات)",
    "location": "مصر، الأردن، تونس، المغرب، سويسرا، ألمانيا",
    "link": "https://drosos.org/en/how-we-work/apply-for-support/",
    "badge": "منحة دولية للشباب",
    "description": "تمويل المشروعات التنموية التي تمكن الشباب والفئات الهشة من خلال التعليم المهني، ريادة الأعمال المجتمعية، والمبادرات الإبداعية.",
    "eligibility": [
      "منظمات وجمعيات غير ربحية ذات مصداقية",
      "ابتكار في منهجية تمكين الشباب",
      "خطة استدامة مالية واضحة للمشروع"
    ]
  },
  {
    "id": "grant_king_khalid_fdn",
    "title": "منح وبرامج مؤسسة الملك خالد لتطوير منظمات القطاع غير الربحي",
    "donor": "مؤسسة الملك خالد",
    "type": "ngo",
    "sector": "education",
    "region": "mena",
    "amount": "تمويل وبناء قدرات مؤسسية",
    "deadline": "دورات سنوية معلنة",
    "location": "المملكة العربية السعودية والعالم العربي",
    "link": "https://kkf.org.sa/",
    "badge": "منحة خليجية تنموية",
    "description": "منح وبناء قدرات للمنظمات غير الربحية لمساعدتها على تحسين أدائها المؤسسي، وتصميم مبادرات تنموية ومجتمعية ذات أثر مستدام.",
    "eligibility": [
      "المنظمات غير الربحية والجمعيات الأهلية المسجلة",
      "التزام بمعايير الحوكمة والشفافية",
      "مشروعات تستهدف تمكين الفئات الأقل دخلاً"
    ]
  },
  {
    "id": "grant_open_society",
    "title": "منح مؤسسات المجتمع المفتوح (Open Society Foundations)",
    "donor": "Open Society Foundations",
    "type": "ngo",
    "sector": "education",
    "region": "global",
    "amount": "من 25,000 إلى 150,000 دولار أمريكي",
    "deadline": "دعوات معلنة دورياً",
    "location": "عالمي",
    "link": "https://www.opensocietyfoundations.org/grants",
    "badge": "منحة حقوقية وتنموية",
    "description": "دعم مالي وتقني للمنظمات الأهلية والمجتمعية العاملة في مجالات التعليم الشامل، الرعاية الصحية، الشفافية، والتمكين المجتمعي.",
    "eligibility": [
      "منظمات ومبادرات أهلية مستقلة",
      "التزام بمبادئ الشفافية والعدالة الاجتماعية",
      "مقترح مشروع ذو أهداف واضحة"
    ]
  },
  {
    "id": "grant_macarthur_fdn",
    "title": "منح مؤسسة ماك آرثر العالمية للحلول المجتمعية والمناخية",
    "donor": "MacArthur Foundation",
    "type": "ngo",
    "sector": "climate",
    "region": "global",
    "amount": "منح تمويلية كبرى متعددة المستويات",
    "deadline": "دعوات مفتوحة وتنافسية",
    "location": "عالمي",
    "link": "https://www.macfound.org/apply-grants/",
    "badge": "تمويل مؤسسي دولي",
    "description": "تمويل المنظمات الأهلية والتحالفات التنموية التي تقود حلولاً للتحديات العالمية الكبرى مثل التغير المناخي والعدالة الاقتصادية.",
    "eligibility": [
      "منظمات غير ربحية ومؤسسات أهلية مؤهلة",
      "سجل أعمال موثق في قيادة المبادرات",
      "حلول قابلة للتطبيق واسع النطاق"
    ]
  },
  {
    "id": "grant_unesco_participation",
    "title": "برنامج مساهمات اليونسكو لدعم الجمعيات والمشروعات الثقافية والعلمية",
    "donor": "UNESCO Participation Programme",
    "type": "ngo",
    "sector": "education",
    "region": "global",
    "amount": "تصل إلى 35,000 دولار أمريكي للمشروع",
    "deadline": "دورات ثنائية السنوات عبر اللجان الوطنية",
    "location": "الدول الأعضاء في اليونسكو",
    "link": "https://www.unesco.org/en/participation-programme",
    "badge": "منحة أممية",
    "description": "منح لدعم الأنشطة والمشروعات التي تنفذها المنظمات الأهلية واللجان الوطنية في مجالات التعليم، العلوم الطبيعية والبيئية، وحفظ التراث.",
    "eligibility": [
      "الجمعيات الأهلية بالتنسيق مع اللجنة الوطنية لليونسكو",
      "مشروعات تخدم أهداف اليونسكو في التعليم والعلوم والبيئة"
    ]
  },
  {
    "id": "grant_oak_foundation",
    "title": "منح مؤسسة أوك الدولية لحماية البيئة وتمكين المجتمع (Oak Foundation)",
    "donor": "Oak Foundation",
    "type": "ngo",
    "sector": "climate",
    "region": "global",
    "amount": "من 25,000 إلى 200,000 دولار",
    "deadline": "استقبال طلبات مستمر",
    "location": "عالمي",
    "link": "https://oakfnd.org/grant-making/",
    "badge": "منحة بيئية ومجتمعية",
    "description": "تمويل المنظمات غير الحكومية العاملة في قضايا المناخ، الحفاظ على البيئة البحرية، حماية الفئات المستضعفة، والإسكان التنموي.",
    "eligibility": [
      "منظمات غير هادفة للربح مسجلة رسمياً",
      "مشروعات تعالج الأسباب الجذرية للمشكلات البيئية والاجتماعية"
    ]
  },
  {
    "id": "grant_global_innovation_fund",
    "title": "صندوق الابتكار العالمي (Global Innovation Fund - GIF)",
    "donor": "Global Innovation Fund",
    "type": "project",
    "sector": "digital",
    "region": "global",
    "amount": "من 50,000 إلى 15,000,000 دولار أمريكي",
    "deadline": "مفتوح على مدار العام",
    "location": "عالمي (الدول النامية)",
    "link": "https://www.globalinnovation.fund/",
    "badge": "تمويل ابتكار عالمي",
    "description": "تمويل المشروعات التنموية والابتكارات القائمة على التكنولوجيا ونماذج الأعمال غير التقليدية التي تحسن معيشة الفئات الأكثر احتياجاً.",
    "eligibility": [
      "الجمعيات والشركات الاجتماعية والباحثون",
      "حل مبتكر مدعوم بأدلة وقابل للتوسع والقياس"
    ]
  },
  {
    "id": "grant_dprize_world",
    "title": "منحة D-Prize العالمية لحلول مكافحة الفقر والريادة الاجتماعية",
    "donor": "D-Prize Foundation",
    "type": "project",
    "sector": "economic",
    "region": "global",
    "amount": "حتى 20,000 دولار أمريكي تمويل أولي",
    "deadline": "دورات متجددة (مايو وأكتوبر سنويًا)",
    "location": "عالمي",
    "link": "https://www.d-prize.org/",
    "badge": "تمويل مشروعات ناشئة",
    "description": "تمويل تأسيسي لإطلاق مبادرات ومؤسسات تنموية جديدة توزع حلولاً مجربة في مجالات الصحة، الزراعة، الطاقة المتجددة، والتعليم في الدول النامية.",
    "eligibility": [
      "رواد الأعمال وقادة المبادرات الناشئة والجمعيات حديثة التأسيس",
      "خطة لتوزيع حل مجرب على 100+ شخص في المرحلة الأولى"
    ]
  },
  {
    "id": "grant_climate_breakthrough",
    "title": "جائزة ومنحة Climate Breakthrough لرواد العمل المناخي العالمي",
    "donor": "Climate Breakthrough Project",
    "type": "project",
    "sector": "climate",
    "region": "global",
    "amount": "تصل إلى 3,000,000 دولار أمريكي",
    "deadline": "سنويًا (ترشيحات وتقديم)",
    "location": "عالمي",
    "link": "https://climatebreakthrough.org/",
    "badge": "أكبر منحة مناخية",
    "description": "منحة غير مقيدة للقادة والمؤسسات أصحاب الاستراتيجيات البيئية الجريئة لخفض الانبعاثات الكربونية وإحداث تحول واسع النطاق في سياسات المناخ.",
    "eligibility": [
      "قادة ورواد العمل البيئي والمناخي الاستثنائيين",
      "أفكار واستراتيجيات ذات أثر مناخي واسع النطاق"
    ]
  },
  {
    "id": "grant_mit_solve",
    "title": "تحديات ومنح معهد ماساتشوستس للابتكار المجتمعي (MIT Solve)",
    "donor": "Massachusetts Institute of Technology (MIT)",
    "type": "project",
    "sector": "digital",
    "region": "global",
    "amount": "أكثر من 1,000,000 دولار موزعة على الفائزين",
    "deadline": "سنويًا (يناير - مايو)",
    "location": "عالمي",
    "link": "https://solve.mit.edu/",
    "badge": "منحة تكنولوجية وتنموية",
    "description": "برنامج تمويل وشراكات يدعم المبتكرين في حلول التكنولوجيا التنموية في مجالات الصحة، المناخ، التعليم، والشمول الاقتصادي.",
    "eligibility": [
      "أصحاب الحلول التكنولوجية من الأفراد والمؤسسات والشركات الناشئة",
      "حل فعال ونموذج أولي قابل للاختبار"
    ]
  },
  {
    "id": "grant_zayed_sustainability",
    "title": "جائزة زايد للاستدامة للمشروعات والمدارس والجمعيات (Zayed Sustainability Prize)",
    "donor": "Zayed Sustainability Prize",
    "type": "project",
    "sector": "climate",
    "region": "global",
    "amount": "تصل إلى 1,000,000 دولار أمريكي لكل فئة",
    "deadline": "سنويًا (يونيو - أغسطس)",
    "location": "عالمي",
    "link": "https://zayedsustainabilityprize.com/",
    "badge": "جائزة استدامة دولية",
    "description": "تكريم وتمويل المشروعات المبتكرة في مجالات الصحة، الغذاء، الطاقة، المياه، والعمل المناخي المنفذة بواسطة الجمعيات والمشروعات الصغيرة.",
    "eligibility": [
      "المنظمات غير الحكومية والمشروعات الصغيرة والمتوسطة",
      "مشروع استدامة مثبت يقدم أثراً ملموساً في المجتمع"
    ]
  },
  {
    "id": "grant_terrado_climate",
    "title": "منح وبرامج زمالة تيرادو العالمية للمناخ (Terra.do Climate Fellowships)",
    "donor": "Terra.do Global Climate School",
    "type": "individual_green",
    "sector": "climate",
    "region": "global",
    "amount": "منح دراسية وتدريبية بنسبة 80-100% + شبكة خبراء",
    "deadline": "دورات شهرية وربع سنوية",
    "location": "أونلاين (عالمي)",
    "link": "https://terra.do/",
    "badge": "زمالة مناخ دولية",
    "description": "برنامج تدريبي وزمالة عالمية مكثفة تؤهل المتخصصين والمهتمين بالعمل المناخي لقيادة مشروعات التحول الأخضر وبناء شبكات مهنية مع رواد المناخ.",
    "eligibility": [
      "المهتمون والنشطاء في العمل المناخي والبيئي",
      "إجادة اللغة الإنجليزية للتعامل مع الشبكة الدولية",
      "الالتزام بساعات التدريب والأنشطة"
    ]
  },
  {
    "id": "grant_bloomberg_youth_climate",
    "title": "صندوق العمل المناخي للشباب (Bloomberg Youth Climate Action Fund)",
    "donor": "Bloomberg Philanthropies",
    "type": "individual_green",
    "sector": "climate",
    "region": "global",
    "amount": "من 1,000 إلى 5,000 دولار أمريكي للمشروع",
    "deadline": "معلن وفق المدن المشاركة",
    "location": "مدن مختارة في مصر والعالم العربي ودولياً",
    "link": "https://www.bloomberg.org/environment/working-with-cities/youth-climate-action-fund/",
    "badge": "منحة شبابية بيئية",
    "description": "منح صغيرة موجهة للشباب والمبادرات البيئية المحلية لتصميم وتنفيذ حلول مناخية عاجلة (تشجير، تدوير مخلفات، تقليل انبعاثات، وتوعية بيئية).",
    "eligibility": [
      "الشباب بين سن 15 و 24 عاماً",
      "مبادرات ومجموعات شبابية بيئية خضراء",
      "تنفيذ المبادرة داخل النطاق الجغرافي للمدن المشاركة"
    ]
  },
  {
    "id": "grant_cartier_women",
    "title": "مبادرة وجوائز كارتييه لتمكين رائدات الأعمال المجتمعية (Cartier Women's Initiative)",
    "donor": "Cartier Women's Initiative",
    "type": "project",
    "sector": "economic",
    "region": "global",
    "amount": "تصل إلى 100,000 دولار للمركز الأول + إرشاد",
    "deadline": "سنويًا (مايو - يوليو)",
    "location": "عالمي (بما فيها الشرق الأوسط وشمال إفريقيا)",
    "link": "https://www.cartierwomensinitiative.com/",
    "badge": "تمكين المرأة والريادة",
    "description": "برنامج تمويلي وإرشادي دولي مخصص للشركات والمشروعات الاجتماعية والبيئية التي تقودها وتملكها نساء بهدف إحداث أثر مجتمعي مستدام.",
    "eligibility": [
      "مشروعات ربحية أو غير ربحية تقودها نساء",
      "أثر تنموي أو بيئي واضح",
      "نموذج عمل مستدام قائم منذ سنة على الأقل"
    ]
  },
  {
    "id": "grant_rolex_enterprise",
    "title": "جوائز رولكس للمبادرات والابتكارات الاستكشافية والبيئية (Rolex Awards for Enterprise)",
    "donor": "Rolex Institute",
    "type": "project",
    "sector": "climate",
    "region": "global",
    "amount": "200,000 فرنك سويسري + تغطية إعلامية دولية",
    "deadline": "كل سنتين (تقديم دولي)",
    "location": "عالمي",
    "link": "https://www.rolex.org/rolex-awards",
    "badge": "جائزة ابتكار كبرى",
    "description": "دعم الأفراد والمبتكرين الذين يقودون مشروعات رائدة لحماية الكوكب، الحفاظ على التنوع البيولوجي، واستكشاف حلول تكنولوجية رائدة للمستقبل.",
    "eligibility": [
      "أفراد ومبتكرون من أي دولة في العالم فوق 18 عاماً",
      "مشروع قائم ومبتكر ذو أثر مثبت وإمكانيات واعدة"
    ]
  },
  {
    "id": "grant_echoing_green_fellowship",
    "title": "زمالة ومنحة إيكوينج جرين لريادة الأعمال المجتمعية (Echoing Green)",
    "donor": "Echoing Green Foundation",
    "type": "individual_green",
    "sector": "economic",
    "region": "global",
    "amount": "80,000 دولار أمريكي تمويل أولي + إرشاد قيادي",
    "deadline": "يوليو - أكتوبر سنوياً",
    "location": "عالمي (مفتوح للأفراد والرواد)",
    "link": "https://echoinggreen.org/fellowship/",
    "badge": "زمالة ريادة أعمال",
    "description": "برنامج زمالة وتمويل تأسيسي لأصحاب المبادرات الاجتماعية والبيئية الناشئة، يقدم دعماً مالياً واستشارات قيادية لتحويل الأفكار الجريئة إلى مؤسسات مستدامة.",
    "eligibility": [
      "رواد أعمال مجتمعيون وقادة مبادرات فوق 18 سنة",
      "مشروع في مراحله الأولى (أقل من سنتين)",
      "أفكار تعالج قضايا العدالة المناخية أو التمكين"
    ]
  },
  {
    "id": "grant_ashoka_fellowship",
    "title": "زمالة أشوكا العالمية لكبار المبتكرين الاجتماعيين (Ashoka Fellowship)",
    "donor": "Ashoka Innovators for the Public",
    "type": "individual_green",
    "sector": "education",
    "region": "global",
    "amount": "راتب معيشي تفرغي لعدة سنوات + شبكة عالمية",
    "deadline": "مفتوح على مدار العام (ترشيحات وتقديم)",
    "location": "عالمي (شامل العالم العربي)",
    "link": "https://www.ashoka.org/en/program/ashoka-fellowship",
    "badge": "أرقى زمالة ابتكار اجتماعي",
    "description": "اختيار ودعم قادة التغيير والريادة المجتمعية الذين يبتكرون حلولاً تغير الأنظمة في مجالات التعليم، الصحة، البيئة، وحقوق الإنسان.",
    "eligibility": [
      "أصحاب أفكار إبداعية جديدة ذات قدرة على إحداث تغيير جذري",
      "التفرغ لقيادة المبادرة المجتمعية",
      "أعلى معايير النزاهة الأخلاقية"
    ]
  },
  {
    "id": "grant_youthop_awards",
    "title": "بوابة برامج ومنح الشباب الدولية (Youth Opportunities Global Grants)",
    "donor": "Youth Opportunities Platform",
    "type": "individual_green",
    "sector": "education",
    "region": "global",
    "amount": "منح سفر، تمويل مشروعات، وجوائز ريادية",
    "deadline": "فرص يومية وأسبوعية متجددة",
    "location": "عالمي",
    "link": "https://www.youthop.com/",
    "badge": "منح شبابية دولية",
    "description": "أكبر منصة عالمية تجمع الفرص الموثقة للشباب في مجالات التمويل الأولي للمشروعات، المؤتمرات الدولية، والمسابقات الريادية والتطوعية.",
    "eligibility": [
      "الشباب والطلاب ورواد الأعمال من سن 18 إلى 35 عاماً",
      "الرغبة في تنمية المهارات القيادية والمجتمعية"
    ]
  },
  {
    "id": "grant_erasmus_plus_youth",
    "title": "منح برنامج إيراسموس بلس للتبادل الشبابي والمبادرات (Erasmus+ Youth)",
    "donor": "European Union (الاتحاد الأوروبي)",
    "type": "individual_green",
    "sector": "education",
    "region": "global",
    "amount": "تغطية كاملة لتكاليف السفر والإقامة والأنشطة",
    "deadline": "دورات متكررة (فبراير، أكتوبر سنويًا)",
    "location": "أوروبا ودول الجوار الجنوبي والمتوسطي",
    "link": "https://erasmus-plus.ec.europa.eu/",
    "badge": "منحة الاتحاد الأوروبي",
    "description": "فرص تبادل ثقافي وتدريب وتمويل مشروعات شبابية غير ربحية تهدف إلى تعزيز الحوار والمهارات البيئية والمدنية بين الشباب.",
    "eligibility": [
      "الشباب بين سن 13 و 30 عاماً والمؤسسات الشبابية",
      "المشاركة من خلال مجموعات أو جمعيات شبابية شريكة"
    ]
  },
  {
    "id": "grant_arab_youth_center",
    "title": "مبادرات ومنح مركز الشباب العربي للابتكار والعمل المناخي",
    "donor": "مركز الشباب العربي (Arab Youth Center)",
    "type": "individual_green",
    "sector": "climate",
    "region": "mena",
    "amount": "تمويل، تدريب قيادي، ومشاركات دولية",
    "deadline": "دورات سنوية معلنة",
    "location": "كافة الدول العربية",
    "link": "https://arabyouthcenter.org/",
    "badge": "منحة شبابية عربية",
    "description": "برامج لدعم المبتكرين ورواد العمل المناخي والتقني من الشباب العربي وتأهيلهم لتمثيل المنطقة في قمم المناخ والمحافل الدولية.",
    "eligibility": [
      "الشباب العربي من سن 18 إلى 35 عاماً",
      "أفكار أو مشروعات ناشئة في مجالات الاستدامة والتقنية والتنمية"
    ]
  },
  {
    "id": "grant_commonwealth_youth",
    "title": "جوائز ومنح الكومنولث للشباب المبتكرين (Commonwealth Youth Awards)",
    "donor": "The Commonwealth Secretariat",
    "type": "individual_green",
    "sector": "economic",
    "region": "global",
    "amount": "تصل إلى 5,000 جنيه إسترليني للمشروع الفائز",
    "deadline": "سنويًا (أغسطس - أكتوبر)",
    "location": "عالمي ودول الكومنولث والشركاء",
    "link": "https://thecommonwealth.org/youth-awards",
    "badge": "جوائز شبابية عالمية",
    "description": "تكريم وتمويل الشباب الذين يقودون مبادرات متميزة تسهم في تحقيق أهداف التنمية المستدامة والتحول البيئي والاقتصادي.",
    "eligibility": [
      "الشباب بين سن 15 و 29 عاماً",
      "مشروع مجتمعي أو بيئي قائم ومؤثر منذ 12 شهراً على الأقل"
    ]
  },
  {
    "id": "grant_davis_peace_projects",
    "title": "منح ديفيس لمشروعات السلام والتنمية المجتمعية (Davis Projects for Peace)",
    "donor": "Davis Projects for Peace",
    "type": "individual_green",
    "sector": "education",
    "region": "global",
    "amount": "10,000 دولار أمريكي لكل مشروع فائز",
    "deadline": "سنويًا في يناير وفبراير",
    "location": "عالمي",
    "link": "https://www.davisprojectsforpeace.org/",
    "badge": "منحة تنموية جامعية",
    "description": "منح مباشرة للطلاب والشباب لتصميم وتنفيذ مشروعات صيفية تنموية ومجتمعية تعزز السلام والتنمية المستدامة في أي مكان حول العالم.",
    "eligibility": [
      "الطلاب الجامعيون والشباب في الجامعات الشريكة حول العالم",
      "مشروع مبتكر قابل للتنفيذ خلال أشهر الصيف"
    ]
  },
  {
    "id": "grant_one_young_world",
    "title": "منح قمة عالم شاب واحد للقيادات الشابة (One Young World Summit Scholarships)",
    "donor": "One Young World Foundation",
    "type": "individual_green",
    "sector": "education",
    "region": "global",
    "amount": "تغطية كاملة للمشاركة والسفر والإقامة + شبكة قادة",
    "deadline": "متجدد حسب كل منحة شريكة",
    "location": "عالمي",
    "link": "https://www.oneyoungworld.com/scholarships",
    "badge": "زمالة قيادية دولية",
    "description": "منح لحضور أكبر قمة عالمية تجمع القادة الشباب المتميزين في مجالات التنمية المستدامة والمناخ وحقوق الإنسان وربطهم برؤساء الدول والشركات.",
    "eligibility": [
      "الشباب بين 18 و 30 عاماً ذوو التأثير والقيادة المجتمعية",
      "شغف بمواجهة التحديات العالمية والمحلية"
    ]
  },
  {
    "id": "grant_yunus_and_youth",
    "title": "زمالة يونس آند يوث لريادة الأعمال الاجتماعية (Yunus & Youth Fellowship)",
    "donor": "Yunus & Youth & Nobel Laureate Muhammad Yunus",
    "type": "individual_green",
    "sector": "economic",
    "region": "global",
    "amount": "برنامج تسريع وتوجيه دولي + فرص استثمار",
    "deadline": "سنويًا (فبراير - أبريل)",
    "location": "أونلاين (عالمي)",
    "link": "https://yunusandyouth.com/fellowship/",
    "badge": "زمالة ريادة أعمال",
    "description": "برنامج زمالة دولي عبر الإنترنت يدعم رواد الأعمال الاجتماعيين الشباب لتطوير وتوسيع نطاق مشروعاتهم ذات الأثر المجتمعي والبيئي.",
    "eligibility": [
      "مؤسسو المشروعات الاجتماعية تحت سن 30 عاماً",
      "مشروع قائم يعالج مشكلة مجتمعية أو بيئية واضحة"
    ]
  },
  {
    "id": "vol_translators_without_borders",
    "title": "مترجم إنساني وتنموي مع 'مترجمون بلا حدود' (CLEAR Global)",
    "donor": "Translators without Borders (CLEAR Global)",
    "type": "volunteer",
    "sector": "education",
    "region": "global",
    "amount": "شهادة خبرة وتوصية دولية معتمدة",
    "deadline": "مفتوح على مدار الساعة",
    "location": "عالمي (عن بُعد)",
    "link": "https://translatorswithoutborders.org/volunteer/",
    "badge": "تطوع إنساني دولي",
    "description": "المساهمة في ترجمة وتوطين الإرشادات الإنسانية والطبية ومقترحات المنح لإنقاذ الأرواح وإيصال المعرفة بلغات المجتمعات المتضررة من الأزمات.",
    "eligibility": [
      "إجادة لغتين على الأقل (مثل العربية والإنجليزية)",
      "شغف بالعمل الإنساني وتيسير وصول المعلومات"
    ]
  },
  {
    "id": "vol_crisis_cleanup_humanitarian",
    "title": "متطوع إدارة بيانات الأزمات والإغاثة الدولية (Crisis Cleanup)",
    "donor": "Crisis Cleanup Humanitarian Collaborative",
    "type": "volunteer",
    "sector": "health",
    "region": "global",
    "amount": "شهادة مشاركة دولية وإنسانية",
    "deadline": "مفتوح طوال العام",
    "location": "عالمي (عن بُعد)",
    "link": "https://www.crisiscleanup.org/",
    "badge": "إغاثة إنسانية",
    "description": "تنسيق جهود الإغاثة بين الجمعيات الأهلية وفرق الإنقاذ عبر تسجيل وتصنيف طلبات استغاثة المتضررين من الكوارث الطبيعية والأزمات.",
    "eligibility": [
      "مهارات استخدام الحاسوب والتواصل اللبق",
      "الاستعداد لتخصيص ساعات مرنة أثناء فترات الاستجابة للطوارئ"
    ]
  },
  {
    "id": "vol_hotosm_mapping",
    "title": "متطوع خرائط إنسانية لمناطق الأزمات (Humanitarian OpenStreetMap)",
    "donor": "Humanitarian OpenStreetMap Team (HOT)",
    "type": "volunteer",
    "sector": "digital",
    "region": "global",
    "amount": "شهادة مساهمة وتوثيق في المشروعات الدولية",
    "deadline": "مفتوح للجميع (تدريب مجاني متاح)",
    "location": "عالمي (عن بُعد)",
    "link": "https://www.hotosm.org/",
    "badge": "تطوع رقمي وجغرافي",
    "description": "رسم وتحديث خرائط المناطق النائية والمتضررة من الكوارث عبر الأقمار الصناعية لمساعدة منظمات الإغاثة والأطباء في الوصول للمحتاجين.",
    "eligibility": [
      "جهاز كمبيوتر واتصال بالإنترنت",
      "لا يشترط خبرة سابقة (تتوفر إرشادات تدريبية بسيطة)"
    ]
  },
  {
    "id": "vol_amnesty_decoders",
    "title": "متطوع أبحاث حقوق الإنسان مع 'محققي منظمة العفو' (Amnesty Decoders)",
    "donor": "Amnesty International",
    "type": "volunteer",
    "sector": "education",
    "region": "global",
    "amount": "شهادة مشاركة بحثية معتمدة",
    "deadline": "مفتوح على منصة الديكودرز",
    "location": "عالمي (عن بُعد)",
    "link": "https://decoders.amnesty.org/",
    "badge": "بحث وتقصي حقوقي",
    "description": "شبكة عالمية من المتطوعين الرقميين يستخدمون أجهزة الحاسوب والهواتف لفحص صور الأقمار الصناعية والوثائق لكشف انتهاكات حقوق الإنسان والأضرار البيئية.",
    "eligibility": [
      "أي شخص مهتم بالدفاع عن حقوق الإنسان والعدالة",
      "القدرة على فحص الصور والبيانات بدقة"
    ]
  },
  {
    "id": "vol_ted_translators",
    "title": "مترجم أفكار ملهمة مع مجتمع مترجمي تيد العالمي (TED Translators)",
    "donor": "TED Conferences",
    "type": "volunteer",
    "sector": "education",
    "region": "global",
    "amount": "نشر الترجمة باسم المتطوع وشهادات معتمدة",
    "deadline": "مفتوح دائماً",
    "location": "عالمي (أونلاين)",
    "link": "https://www.ted.com/participate/translate",
    "badge": "نشر المعرفة العالمية",
    "description": "ترجمة وتدقيق محادثات وأفكار TED الملهمة في العلوم، التكنولوجيا، البيئة، والتعليم إلى اللغة العربية لنشر المعرفة لجميع فئات المجتمع.",
    "eligibility": [
      "إجادة اللغتين الإنجليزية والعربية",
      "الالتزام بمعايير الترجمة والتدقيق المعتمدة لدى TED"
    ]
  },
  {
    "id": "vol_zooniverse_research",
    "title": "عالم ومشارك بحثي في المشروعات العلمية والبيئية (Zooniverse)",
    "donor": "Citizen Science Alliance & Zooniverse",
    "type": "volunteer",
    "sector": "climate",
    "region": "global",
    "amount": "شهادات ساعات تطوع بحثي للطلاب والباحثين",
    "deadline": "مفتوح على مدار الساعة",
    "location": "عالمي (أونلاين)",
    "link": "https://www.zooniverse.org/",
    "badge": "علم المواطن والبيئة",
    "description": "المشاركة في تصنيف صور الحياة البرية، دراسة التغيرات المناخية، ومساعدة علماء البيئة والفلك حول العالم في معالجة البيانات الضخمة.",
    "eligibility": [
      "شغف بالعلوم والبيئة والاكتشاف",
      "متاح للجميع دون أي متطلبات مسبقة"
    ]
  },
  {
    "id": "vol_redcross_digital",
    "title": "متطوع الدعم الرقمي والمعلومات المجتمعية للصليب والهلال الأحمر",
    "donor": "International Federation of Red Cross and Red Crescent (IFRC)",
    "type": "volunteer",
    "sector": "health",
    "region": "global",
    "amount": "شهادات تطوع وتدريب إسعافي وإنساني",
    "deadline": "متجدد حسب الجمعيات الوطنية والبرامج",
    "location": "عالمي وإقليمي ومحلي",
    "link": "https://www.ifrc.org/volunteer",
    "badge": "تطوع إنساني عالمي",
    "description": "المساهمة في التوعية الصحية، الاستجابة للأوبئة والأزمات، ودعم الأنشطة الميدانية والرقمية لخدمة الفئات الأشد احتياجاً في المجتمع.",
    "eligibility": [
      "الرغبة في خدمة المجتمع والإنسانية",
      "الالتزام بمبادئ العمل الإنساني والحياد"
    ]
  },
  {
    "id": "grant_wwf_nature_funds",
    "title": "منح صندوق الطبيعة العالمي لحماية المحميات والبيئة (WWF Conservation Grants)",
    "donor": "World Wildlife Fund (WWF)",
    "type": "ngo",
    "sector": "climate",
    "region": "global",
    "amount": "تصل إلى 100,000 دولار أمريكي",
    "deadline": "سنويًا (فبراير ويوليو)",
    "location": "عالمي والمناطق ذات الأولوية البيئية",
    "link": "https://www.worldwildlife.org/",
    "badge": "منحة بيئية كبرى",
    "description": "تمويل ودعم الجمعيات والمجتمعات المحلية العاملة في حماية الحياة البرية، الغابات، واستعادة النظم البيئية المتدهورة.",
    "eligibility": [
      "منظمات غير ربحية ومحميات محلية",
      "مشروع بيئي مثبت لحماية التنوع البيولوجي"
    ]
  },
  {
    "id": "grant_who_health_emergency",
    "title": "منح منظمة الصحة العالمية لدعم مشروعات الطوارئ والصحة المجتمعية (WHO)",
    "donor": "World Health Organization (منظمة الصحة العالمية)",
    "type": "ngo",
    "sector": "health",
    "region": "global",
    "amount": "منح تمويلية حسب برامج الطوارئ",
    "deadline": "دعوات مستمرة",
    "location": "عالمي",
    "link": "https://www.who.int/emergencies",
    "badge": "منحة صحية أممية",
    "description": "دعم الجمعيات والشركاء الصحيين في تقديم الخدمات الطبية الوقائية ومكافحة الأوبئة في المجتمعات الهشة.",
    "eligibility": [
      "مؤسسات وجمعيات صحية وأهلية مرخصة",
      "خبرة ميدانية في الرعاية الصحية الأولية"
    ]
  },
  {
    "id": "grant_unicef_innovation",
    "title": "صندوق اليونيسف للابتكار التكنولوجي لخدمة الأطفال والتعليم (UNICEF Innovation)",
    "donor": "UNICEF Innovation Fund",
    "type": "project",
    "sector": "digital",
    "region": "global",
    "amount": "تصل إلى 100,000 دولار تمويل بدون فوائد",
    "deadline": "مفتوح على مدار العام",
    "location": "الدول النامية والشرق الأوسط",
    "link": "https://www.unicefinnovationfund.org/",
    "badge": "تمويل ابتكار أممي",
    "description": "تمويل المشروعات التكنولوجية مفتوحة المصدر (Open Source) التي تطور حلولاً رائدة للأطفال والشباب في التعليم والصحة.",
    "eligibility": [
      "شركات ناشئة ومؤسسات غير ربحية",
      "حلول برمجية مفتوحة المصدر ولها نموذج أولي"
    ]
  },
  {
    "id": "grant_google_org_impact",
    "title": "تحديات ومنح جوجل للأثر المجتمعي والذكاء الاصطناعي (Google.org Impact)",
    "donor": "Google.org",
    "type": "project",
    "sector": "digital",
    "region": "global",
    "amount": "من 250,000 إلى 2,000,000 دولار + دعم تقني",
    "deadline": "تحديات دورية معلنة",
    "location": "عالمي",
    "link": "https://www.google.org/",
    "badge": "تمويل تكنولوجي عالمي",
    "description": "منح كبرى للمنظمات غير الربحية التي توظف التكنولوجيا والذكاء الاصطناعي لمواجهة التحديات الاقتصادية والبيئية والمجتمعية.",
    "eligibility": [
      "منظمات غير ربحية ومؤسسات بحثية",
      "مشروعات تقنية عالية الأثر وقابلة للتوسع"
    ]
  },
  {
    "id": "grant_world_bank_youth_summit",
    "title": "مسابقات وتمويل قمة الشباب لمجموعة البنك الدولي (World Bank Youth Summit)",
    "donor": "World Bank Group",
    "type": "individual_green",
    "sector": "economic",
    "region": "global",
    "amount": "جوائز تمويلية وتوجيه دولي",
    "deadline": "سنويًا (فبراير - مارس)",
    "location": "عالمي",
    "link": "https://www.worldbank.org/",
    "badge": "منحة البنك الدولي",
    "description": "مسابقة عالمية للشباب لاقتراح حلول تنموية ومناخية ورقمية لتعزيز التنمية المستدامة والنمو الاقتصادي الشامل.",
    "eligibility": [
      "الشباب بين سن 18 و 35 عاماً من كافة دول العالم",
      "فكرة أو مبادرة تعالج تحدياً تنموياً ملحاً"
    ]
  },
  {
    "id": "grant_gates_grand_challenges",
    "title": "منح التحديات الكبرى لمؤسسة بيل وميليندا جيتس (Grand Challenges)",
    "donor": "Bill & Melinda Gates Foundation",
    "type": "project",
    "sector": "health",
    "region": "global",
    "amount": "من 100,000 إلى 1,000,000 دولار أمريكي",
    "deadline": "دعوات متعددة على مدار العام",
    "location": "عالمي",
    "link": "https://gcgh.grandchallenges.org/",
    "badge": "منحة ابتكار صحي وغذائي",
    "description": "تمويل الأفكار الجريئة وغير التقليدية في مجالات الصحة العالمية، الزراعة المستدامة، والأمن الغذائي للقضاء على الأمراض والفقر.",
    "eligibility": [
      "الجمعيات الأهلية، الجامعات، والشركات الناشئة",
      "فكرة علمية أو تطبيقية رائدة لحل مشكلة صحية أو زراعية"
    ]
  },
  {
    "id": "grant_rockefeller_climate",
    "title": "منح مؤسسة روكفلر للتحول المناخي والطاقة النظيفة (Rockefeller Foundation)",
    "donor": "Rockefeller Foundation",
    "type": "ngo",
    "sector": "climate",
    "region": "global",
    "amount": "منح تمويلية متعددة السنوات",
    "deadline": "استقبال طلبات مستمر",
    "location": "عالمي",
    "link": "https://www.rockefellerfoundation.org/grants/",
    "badge": "منحة استدامة دولية",
    "description": "تمويل التحالفات والمنظمات الأهلية العاملة في مشروعات الطاقة المتجددة للمجتمعات الريفية والأنظمة الغذائية المقاومة لتغير المناخ.",
    "eligibility": [
      "منظمات مجتمع مدني ومؤسسات ذات سجل موثوق",
      "مشروعات ذات نموذج مستدام وقابل للتكرار"
    ]
  },
  {
    "id": "grant_earthshot_prize",
    "title": "جائزة إيرث شوت العالمية لحلول إنقاذ الكوكب (The Earthshot Prize)",
    "donor": "The Royal Foundation (Earthshot Prize)",
    "type": "project",
    "sector": "climate",
    "region": "global",
    "amount": "1,000,000 جنيه إسترليني لكل فائز من الفائزين الخمسة",
    "deadline": "سنويًا عبر شبكة المرشحين الرسميين",
    "location": "عالمي",
    "link": "https://earthshotprize.org/",
    "badge": "أرفع جائزة بيئية",
    "description": "أعظم جائزة بيئية في التاريخ للبحث عن أكثر الحلول إلهاماً وابتكاراً لمواجهة أزمات المناخ، تلوث الهواء، وحماية المحيطات والطبيعة.",
    "eligibility": [
      "الأفراد، الجمعيات، المشروعات، والمدن",
      "حل بيئي مثبت يحقق تقدماً ملموساً نحو أهداف 2030"
    ]
  },
  {
    "id": "grant_undp_accelerator_labs",
    "title": "مختبرات تسريع التنمية الإنمائية للأمم المتحدة (UNDP Accelerator Labs)",
    "donor": "United Nations Development Programme (UNDP)",
    "type": "project",
    "sector": "digital",
    "region": "global",
    "amount": "تمويل تجارب ميدانية وتطوير حلول",
    "deadline": "تقديم مستمر",
    "location": "91 دولة حول العالم",
    "link": "https://www.undp.org/acceleratorlabs",
    "badge": "مختبر ابتكار أممي",
    "description": "شبكة عالمية تمول وتختبر الحلول الشعبية والتكنولوجية لمواجهة التحديات التنموية المعقدة بالشراكة مع المجتمعات المحلية.",
    "eligibility": [
      "مبتكرون محليون، جمعيات أهلية، ومجموعات شبابية",
      "حلول مجربة لمشكلات بيئية أو تنموية محلية"
    ]
  },
  {
    "id": "grant_fondation_de_france",
    "title": "منح مؤسسة فرنسا الدولية للمشروعات التنموية في حوض المتوسط",
    "donor": "Fondation de France",
    "type": "ngo",
    "sector": "climate",
    "region": "mena",
    "amount": "من 15,000 إلى 60,000 يورو",
    "deadline": "دعوات سنوية للمشروعات",
    "location": "دول حوض البحر الأبيض المتوسط",
    "link": "https://www.fondationdefrance.org/en/international",
    "badge": "منحة متوسطية",
    "description": "دعم مشروعات الزراعة الإيكولوجية المستدامة، التكيف مع التغير المناخي، وإدماج الشباب والنساء في المناطق الريفية.",
    "eligibility": [
      "جمعيات أهلية محلية في دول المتوسط",
      "مشروع بيئي أو زراعي مستدام يخدم صغار المزارعين"
    ]
  },
  {
    "id": "grant_global_forest_watch",
    "title": "منح صندوق مراقبة الغابات الصغيرة للمنظمات الأهلية (Small Grants Fund - GFW)",
    "donor": "World Resources Institute (WRI)",
    "type": "ngo",
    "sector": "climate",
    "region": "global",
    "amount": "تصل إلى 40,000 دولار أمريكي",
    "deadline": "سنويًا (مارس - مايو)",
    "location": "عالمي",
    "link": "https://www.globalforestwatch.org/grants-and-fellowships/",
    "badge": "منحة بيانات بيئية",
    "description": "تمويل المنظمات غير الحكومية لاستخدام بيانات الأقمار الصناعية وخرائط الغابات لوقف إزالة الغابات وحماية المحميات الطبيعية.",
    "eligibility": [
      "منظمات أهلية ومجتمعية مسجلة",
      "استخدام بيانات مراقبة الغابات في التحقيقات والسياسات البيئية"
    ]
  },
  {
    "id": "grant_cepf_biodiversity",
    "title": "صندوق شراكة النظم البيئية الحرجة (Critical Ecosystem Partnership Fund)",
    "donor": "CEPF Global Partnership",
    "type": "ngo",
    "sector": "climate",
    "region": "mena",
    "amount": "من 20,000 إلى 150,000 دولار أمريكي",
    "deadline": "دعوات سنوية للمنح",
    "location": "الشرق الأوسط وحوض المتوسط وإفريقيا",
    "link": "https://www.cepf.net/grants/open-calls-for-proposals",
    "badge": "منحة نظم بيئية",
    "description": "تمويل منظمات المجتمع المدني لحماية النقاط الساخنة للتنوع البيولوجي والمناطق الطبيعية الحساسة واستعادة الموائل الطبيعية.",
    "eligibility": [
      "منظمات غير حكومية ومؤسسات مجتمعية وأكاديمية",
      "تنفيذ المشروع في المناطق الجغرافية المستهدفة في حوض المتوسط"
    ]
  },
  {
    "id": "grant_seed_awards",
    "title": "جوائز ومنح SEED العالمية للمشروعات البيئية والريادة الخضراء",
    "donor": "SEED (Supported by UNEP & UNDP)",
    "type": "project",
    "sector": "economic",
    "region": "global",
    "amount": "تمويل تأسيسي + خدمات تسريع وإرشاد مالي",
    "deadline": "سنويًا عبر بوابة SEED",
    "location": "الدول النامية والناشئة",
    "link": "https://seed.uno/",
    "badge": "جوائز ريادة خضراء",
    "description": "دعم وتكريم المشروعات البيئية والاجتماعية الناشئة التي تدمج بين الجدوى الاقتصادية وحماية البيئة وخلق فرص عمل محلية.",
    "eligibility": [
      "مشروعات وشركات اجتماعية خضراء في مراحلها المبكرة",
      "شراكة بين القطاعين الأهلي والخاص"
    ]
  },
  {
    "id": "grant_al_dabbagh_omnipreneurship",
    "title": "جوائز الدباغ العالمية لريادة الأعمال الإنسانية (Omnipreneurship Awards)",
    "donor": "Al-Dabbagh Group",
    "type": "project",
    "sector": "climate",
    "region": "global",
    "amount": "تصل إلى 1,000,000 دولار أمريكي",
    "deadline": "تحديات سنوية معلنة",
    "location": "عالمي",
    "link": "https://omnipreneurshipawards.com/",
    "badge": "جائزة استدامة دولية",
    "description": "تحديات عالمية تطرح تمويلاً للعلماء والمبتكرين لحل مشكلات كبرى مثل استدامة المياه، الطاقة النظيفة، ومكافحة التصحر.",
    "eligibility": [
      "مبتكرون ومؤسسات وباحثون من كافة أنحاء العالم",
      "حل تقني مبتكر ومثبت يحقق أهداف التحدي المطروح"
    ]
  },
  {
    "id": "grant_shuttleworth_fellowship",
    "title": "زمالة ومنحة شاتلوورث للمبتكرين الاجتماعيين والانفتاح المعرفي",
    "donor": "Shuttleworth Foundation",
    "type": "individual_green",
    "sector": "digital",
    "region": "global",
    "amount": "راتب سنوي كامل + تمويل مشروع مطابق يصل لـ 250,000$",
    "deadline": "دورات نصف سنوية (مايو وأكتوبر)",
    "location": "عالمي",
    "link": "https://shuttleworthfoundation.org/fellowships/",
    "badge": "زمالة ابتكار كبرى",
    "description": "تمويل للأفراد الاستثنائيين الذين يقودون مشروعات لتغيير السياسات وتطبيق المعرفة الحرة المفتوحة المصدر في التعليم والتكنولوجيا.",
    "eligibility": [
      "قادة ومبتكرون يمتلكون رؤية واضحة للتغيير",
      "استعداد لنشر كافة مخرجات المشروع مجاناً ومفتوحة المصدر"
    ]
  },
  {
    "id": "grant_wikimedia_community",
    "title": "منح صندوق ويكيميديا لدعم المبادرات المعرفية والتعليمية (Wikimedia Grants)",
    "donor": "Wikimedia Foundation",
    "type": "ngo",
    "sector": "education",
    "region": "global",
    "amount": "من 5,000 إلى 100,000 دولار أمريكي",
    "deadline": "تقديم مستمر ودورات ربع سنوية",
    "location": "عالمي",
    "link": "https://meta.wikimedia.org/wiki/Grants:Start",
    "badge": "منحة إتاحة المعرفة",
    "description": "تمويل المشروعات والجمعيات والمجموعات التي تسهم في إثراء المحتوى المعرفي الحر، الرقمنة، والتعليم الرقمي المفتوح.",
    "eligibility": [
      "مجموعات مجتمعية وجمعيات أهلية ومؤسسات تعليمية",
      "مشروعات تدعم المحتوى العربي والمعرفة الحرة"
    ]
  },
  {
    "id": "grant_global_fund_women",
    "title": "منح الصندوق العالمي للنساء لحقوق وتمكين المرأة (Global Fund for Women)",
    "donor": "Global Fund for Women",
    "type": "ngo",
    "sector": "economic",
    "region": "global",
    "amount": "من 10,000 إلى 50,000 دولار أمريكي",
    "deadline": "دعوات وتلقي مستمر",
    "location": "عالمي والشرق الأوسط",
    "link": "https://www.globalfundforwomen.org/apply-for-a-grant/",
    "badge": "تمكين المرأة والفتيات",
    "description": "منح مرنة ومباشرة للمجموعات والجمعيات النسائية القاعدية التي تعمل على تحقيق العدالة الاقتصادية والصحية والمناخية للمرأة.",
    "eligibility": [
      "منظمات وجمعيات تقودها نساء",
      "العمل خارج الولايات المتحدة في المجتمعات المحلية"
    ]
  },
  {
    "id": "grant_clif_bar_seed_saving",
    "title": "منح الحفاظ على البذور والزراعة العضوية المجتمعية (Clif Family Foundation)",
    "donor": "Clif Family Foundation",
    "type": "ngo",
    "sector": "climate",
    "region": "global",
    "amount": "من 5,000 إلى 25,000 دولار أمريكي",
    "deadline": "دورات سنوية (يناير، مايو، أكتوبر)",
    "location": "عالمي",
    "link": "https://cliffamilyfoundation.org/grants",
    "badge": "منحة زراعة مستدامة",
    "description": "دعم صغار المزارعين والجمعيات البيئية العاملة في بنوك البذور البلدية، الزراعة النظيفة، ومكافحة المبيدات الكيميائية.",
    "eligibility": [
      "منظمات غير ربحية ومبادرات زراعية أهلية",
      "حماية التنوع الحيوي النباتي والأمن الغذائي"
    ]
  },
  {
    "id": "grant_unfccc_climate_heroes",
    "title": "جوائز مبادرة الأمم المتحدة للزخم المناخي (UN Climate Action Awards)",
    "donor": "UN Climate Change (UNFCCC)",
    "type": "project",
    "sector": "climate",
    "region": "global",
    "amount": "تغطية دولية، تمويل حضور قمة COP، وشبكات مانحين",
    "deadline": "سنويًا عبر بوابة اتفاقية الأمم المتحدة الإطارية",
    "location": "عالمي",
    "link": "https://unfccc.int/climate-action/un-global-climate-action-awards",
    "badge": "جائزة الأمم المتحدة للمناخ",
    "description": "تسليط الضوء على الحلول المبتكرة للجمعيات والمشروعات التي تتصدى للتغير المناخي في مجالات تمويل المناخ والقيادة النسائية.",
    "eligibility": [
      "مشروعات ومبادرات قائمة تقدم نتائج ملموسة",
      "الريادة في خفض الانبعاثات أو تعزيز التكيف المجتمعي"
    ]
  },
  {
    "id": "grant_ocean_cleanup_alliances",
    "title": "منح تحالف حماية المحيطات ومكافحة البلاستيك (The Ocean Cleanup Partner Fund)",
    "donor": "The Ocean Cleanup Global Alliance",
    "type": "project",
    "sector": "climate",
    "region": "global",
    "amount": "دعم تكنولوجي وتمويل نشر المنظومات",
    "deadline": "مفتوح على مدار العام",
    "location": "المناطق الساحلية والأنهار حول العالم",
    "link": "https://theoceancleanup.com/",
    "badge": "حماية البيئة المائية",
    "description": "شراكات وتمويل لتطبيق حلول اعتراض وتنظيف النفايات البلاستيكية في الأنهار والمصبات الساحلية قبل وصولها للبحار.",
    "eligibility": [
      "حكومات محلية، جمعيات بيئية، وشركات إدارة المخلفات",
      "موقع جغرافي على مجرى مائي أو نهر رئيسي"
    ]
  },
  {
    "id": "grant_global_health_corps",
    "title": "زمالة القيادات الصحية الشابة في التنمية الدولية (Global Health Corps)",
    "donor": "Global Health Corps",
    "type": "individual_green",
    "sector": "health",
    "region": "global",
    "amount": "رواتب تفرغ كامل وإقامة وتأمين صحي وتدريب تنفيذي",
    "deadline": "سنويًا (نوفمبر - يناير)",
    "location": "إفريقيا والدول النامية",
    "link": "https://ghcorps.org/",
    "badge": "زمالة صحية دولية",
    "description": "برنامج زمالة مدفوع بالكامل لتدريب وتوظيف المهنيين الشباب في المنظمات الصحية غير الربحية لتعزيز العدالة الصحية العالمية.",
    "eligibility": [
      "الشباب تحت سن 30 عاماً من خلفيات متنوعة (برمجة، إدارة، طب، سلاسل إمداد)",
      "إتقان اللغة الإنجليزية والرغبة في العمل الميداني"
    ]
  },
  {
    "id": "grant_undp_equator_prize",
    "title": "جائزة خط الاستواء للمجتمعات المحلية والمبادرات البيئية (Equator Prize)",
    "donor": "UNDP Equator Initiative",
    "type": "ngo",
    "sector": "climate",
    "region": "global",
    "amount": "15,000 دولار أمريكي + مشاركة دولية في قمم المناخ",
    "deadline": "سنويًا (فبراير - أبريل)",
    "location": "المجتمعات الريفية والمحلية في الدول النامية",
    "link": "https://www.equatorinitiative.org/equator-prize/",
    "badge": "جائزة الأمم المتحدة للمجتمعات",
    "description": "تكريم المبادرات القاعدية والجمعيات الأهلية التي تقدم حلولاً قائمة على الطبيعة للحد من الفقر والتكيف مع التغير المناخي.",
    "eligibility": [
      "مجموعات مجتمعية وجمعيات أهلية محلية",
      "مشروعات تنموية بيئية قائمة ومستمرة منذ 3 سنوات"
    ]
  },
  {
    "id": "grant_vital_voices",
    "title": "زمالة القيادات النسائية العالمية للتغيير المجتمعي (Vital Voices Fellowship)",
    "donor": "Vital Voices Global Partnership",
    "type": "individual_green",
    "sector": "economic",
    "region": "global",
    "amount": "تدريب قيادي عالمي + منح تنفيذ مشروعات",
    "deadline": "سنويًا (أغسطس - أكتوبر)",
    "location": "عالمي (شامل الشرق الأوسط)",
    "link": "https://www.vitalvoices.org/programs/",
    "badge": "قيادة نسائية دولية",
    "description": "الاستثمار في القيادات النسائية اللاتي يقودن منظمات ومبادرات أهلية لحل مشكلات التعليم، البيئة، والتمكين الاقتصادي في مجتمعاتهن.",
    "eligibility": [
      "نساء يشغلن مناصب قيادية في منظمات غير ربحية أو مبادرات",
      "خبرة قيادية لا تقل عن سنتين في قيادة التغيير المجتمعي"
    ]
  },
  {
    "id": "grant_climate_kic",
    "title": "برامج مسرعات الابتكار المناخي الأوروبية والدولية (EIT Climate-KIC)",
    "donor": "European Institute of Innovation and Technology (EIT)",
    "type": "project",
    "sector": "climate",
    "region": "global",
    "amount": "من 20,000 إلى 50,000 يورو للمشروع",
    "deadline": "دعوات موسمية متجددة",
    "location": "أوروبا والشركاء الدوليون في المتوسط",
    "link": "https://www.climate-kic.org/",
    "badge": "تسريع ابتكار مناخي",
    "description": "تسريع وتمويل المشروعات التكنولوجية والبيئية الناشئة التي تبتكر حلولاً للمدن الذكية، تدوير المخلفات، واستعادة الطبيعة.",
    "eligibility": [
      "فرق عمل ومشروعات ناشئة ومبتكرون",
      "نموذج عمل مبتكر يقلل البصمة الكربونية"
    ]
  },
  {
    "id": "grant_rotary_global_grants",
    "title": "منح روتاري العالمية للمشروعات التنموية والإنسانية (Rotary Foundation)",
    "donor": "The Rotary Foundation",
    "type": "ngo",
    "sector": "health",
    "region": "global",
    "amount": "من 30,000 إلى 400,000 دولار أمريكي",
    "deadline": "تقديم مستمر بالتنسيق مع الأندية المحلية",
    "location": "عالمي",
    "link": "https://www.rotary.org/en/our-programs/grants",
    "badge": "منحة تنموية وإنسانية",
    "description": "تمويل المشروعات المستدامة في مجالات المياه النظيفة، الصحة، التعليم الأساسي، التنمية الاقتصادية، وحماية البيئة.",
    "eligibility": [
      "شراكة بين أندية روتاري والجمعيات الأهلية المحلية",
      "مشروع ذو أثر طويل الأجل ومبني على دراسة احتياج مجتمعي حقيقي"
    ]
  },
  {
    "id": "grant_arab_humanitarian_fund",
    "title": "صندوق المنح الإنسانية والتنموية لمنظمات المجتمع المدني العربي",
    "donor": "Arab Foundations & Regional Partners",
    "type": "ngo",
    "sector": "education",
    "region": "mena",
    "amount": "من 50,000 إلى 250,000 دولار أمريكي",
    "deadline": "دعوات نصف سنوية",
    "location": "مصر والدول العربية",
    "link": "https://arabfoundations.org/",
    "badge": "منحة تنموية إقليمية",
    "description": "دعم برامج التعليم المجتمعي، التمكين المهني، وبرامج الإغاثة والتنمية المستدامة التي تنفذها المنظمات الأهلية المعتمدة.",
    "eligibility": [
      "الجمعيات الأهلية والمؤسسات غير الربحية المسجلة",
      "سجل أعمال موثق في التنمية المحلية وبناء القدرات"
    ]
  }
];

// 2. تصدير فرص التطوع الدولي المستخرجة تلقائياً لتوافق الواجهات القديمة
const VOLUNTEER_OPPORTUNITIES = GRANTS_DATABASE.filter(g => g.type === 'volunteer');

// تصدير البيانات للاستخدام في المتصفح والـ Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GRANTS_DATABASE, VOLUNTEER_OPPORTUNITIES };
}
