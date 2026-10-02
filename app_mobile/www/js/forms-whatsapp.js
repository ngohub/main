// ==========================================================================
// NGOHUB Mobile App - Forms & Dual Dispatcher (Google Sheets + WhatsApp)
// ==========================================================================

const OFFICIAL_PHONE = "201026847508";
const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbynU9c1SDeXkdEWMGQUJzsc9ERcYfPnhQ9yhorcEvgIZ2byHLtNRM1lHlLA3z-m7iYV/exec";

function sendToGoogleSheetsMobile(data) {
  try {
    fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data)
    }).catch(() => {});
  } catch(e) {}
}

function sendServiceRequestWhatsApp(serviceName) {
  const orgName = document.getElementById('reqOrgName')?.value || 'جمعية أهلية';
  const gov = document.getElementById('reqGov')?.value || 'غير محدد';
  const contact = document.getElementById('reqPhone')?.value || '';
  const notes = document.getElementById('reqNotes')?.value || 'طلب دعم واستشارة';

  // Dispatch to Google Sheets
  sendToGoogleSheetsMobile({
    id: "mob_srv_" + Date.now(),
    date: new Date().toLocaleString('ar-EG'),
    submissionType: "طلب خدمة (تطبيق الهاتف)",
    ngoName: orgName,
    contactPerson: "ممثل الجمعية",
    phone: contact,
    gov: gov,
    serviceTitle: serviceName,
    details: notes
  });

  const msg = `*طلب خدمة من تطبيق NGOHUB*%0A%0A` +
              `🏛 *الجهة / الجمعية:* ${encodeURIComponent(orgName)}%0A` +
              `📍 *المحافظة:* ${encodeURIComponent(gov)}%0A` +
              `📱 *الهاتف:* ${encodeURIComponent(contact)}%0A` +
              `💼 *الخدمة المطلوبة:* ${encodeURIComponent(serviceName)}%0A` +
              `📝 *ملاحظات:* ${encodeURIComponent(notes)}`;

  const url = `https://wa.me/${OFFICIAL_PHONE}?text=${msg}`;
  window.open(url, '_blank');
}

function submitVolRegistration(event) {
  if (event) event.preventDefault();
  const name = document.getElementById('volName')?.value || '';
  const phone = document.getElementById('volPhone')?.value || '';
  const skills = document.getElementById('volSkills')?.value || '';
  const gov = document.getElementById('volGov')?.value || '';

  // Dispatch to Google Sheets
  sendToGoogleSheetsMobile({
    id: "mob_vol_" + Date.now(),
    date: new Date().toLocaleString('ar-EG'),
    submissionType: "تسجيل متطوع / منحة (تطبيق الهاتف)",
    ngoName: "متطوع فردي",
    contactPerson: name,
    phone: phone,
    gov: gov,
    serviceTitle: "منحة Scholarships وبناء القدرات",
    details: "المهارات والاهتمامات: " + skills
  });

  const msg = `*طلب انضمام متطوع - تطبيق NGOHUB*%0A%0A` +
              `👤 *الاسم:* ${encodeURIComponent(name)}%0A` +
              `📱 *رقم الهاتف:* ${encodeURIComponent(phone)}%0A` +
              `📍 *المحافظة:* ${encodeURIComponent(gov)}%0A` +
              `💡 *المجال والمهارات:* ${encodeURIComponent(skills)}%0A` +
              `🎓 *الرغبة في منحة Scholarships:* نعم`;

  const url = `https://wa.me/${OFFICIAL_PHONE}?text=${msg}`;
  window.open(url, '_blank');
}

function submitConfidentialComplaint(event) {
  if (event) event.preventDefault();
  const name = document.getElementById('cmpName')?.value || 'سري / مجهول';
  const phone = document.getElementById('cmpPhone')?.value || 'سري';
  const type = document.getElementById('cmpType')?.value || 'شكوى عامة';
  const details = document.getElementById('cmpDetails')?.value || '';

  // Dispatch to Google Sheets
  sendToGoogleSheetsMobile({
    id: "mob_cmp_" + Date.now(),
    date: new Date().toLocaleString('ar-EG'),
    submissionType: "بلاغ سري وحماية (تطبيق الهاتف)",
    ngoName: "سري",
    contactPerson: name,
    phone: phone,
    gov: "سري",
    serviceTitle: "سياسة الحماية وتلقي الشكاوى: " + type,
    details: details
  });

  const msg = `*بلاغ سري - سياسة الحماية وتلقي الشكاوى NGOHUB*%0A%0A` +
              `🔒 *نوع الواقعة:* ${encodeURIComponent(type)}%0A` +
              `👤 *مقدم البلاغ:* ${encodeURIComponent(name)}%0A` +
              `📱 *وسيلة التواصل:* ${encodeURIComponent(phone)}%0A` +
              `📄 *تفاصيل الواقعة:* ${encodeURIComponent(details)}%0A%0A` +
              `_تم الإرسال بسرية تامة طبقاً لسياسة الحماية المعتمدة 2026_`;

  const url = `https://wa.me/${OFFICIAL_PHONE}?text=${msg}`;
  window.open(url, '_blank');
  alert('تم تسجيل البلاغ وإرساله سحابياً وسيتولى مسؤول الحماية والمتابعة فحص الواقعة بسرية مطلقة.');
  closeAppModal('complaintModal');
}
