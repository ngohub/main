/**
 * ==========================================================================
 * NGOHUB - GOOGLE APPS SCRIPT WEBHOOK RECEIVER (v1.0)
 * ==========================================================================
 * كود Google Apps Script لاستقبال كافة طلبات واستمارات منصة NGOHUB 
 * وحفظها تلقائياً داخل جدول Google Sheets واحد منظم ومصنف.
 * 
 * --------------------------------------------------------------------------
 * 📌 خطوات التفعيل السريعة (في دقيقتين):
 * --------------------------------------------------------------------------
 * 1. افتح صفحة Google Sheets جديدة في متصفحك (https://sheets.new).
 * 2. من القائمة العلوية اضغط على: Extensions (الإضافات) -> Apps Script.
 * 3. امسح أي كود موجود في المحرر، والصق هذا الكود بالكامل بدلاً منه.
 * 4. اضغط على زر Deploy (نشر) أعلى اليمين -> واختر New deployment (نشر جديد).
 * 5. اضغط على أيقونة الترس بجانب "Select type" واختر: Web app (تطبيق ويب).
 * 6. املأ الإعدادات التالية:
 *    - Description: NGOHUB Webhook Receiver
 *    - Execute as: Me (حسابي)
 *    - Who has access: Anyone (أي شخص / متاح للجميع) ⬅️ (مهم جداً!)
 * 7. اضغط Deploy -> وامنح الأذونات المطلوبة (Authorize access).
 * 8. انسخ الرابط الذي يظهر لك بعنوان (Web app URL) والذي يبدأ بـ:
 *    https://script.google.com/macros/s/.../exec
 * 9. الصق هذا الرابط في ملف app.js في السطر المخصص للمتغير:
 *    const GOOGLE_SHEETS_WEBHOOK_URL = "رابطك_هنا";
 * ==========================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // انتظر حتى 30 ثانية لتفادي تضارب الطلبات المتزامنة
  lock.tryLock(30000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // إنشاء وترتيب عناوين الأعمدة تلقائياً إذا كان الجدول فارغاً
    if (sheet.getLastRow() === 0) {
      var headers = [
        "التاريخ والوقت",
        "نوع الطلب",
        "اسم الجمعية / الكيان",
        "اسم المسؤول / مقدم الطلب",
        "رقم الهاتف / الواتساب",
        "المحافظة / الدولة",
        "الخدمة / المسار المطلوب",
        "تفاصيل الطلب والاحتياج",
        "معرف الطلب (ID)"
      ];
      sheet.appendRow(headers);
      
      // تنسيق شريط العناوين بلون أنيق (أخضر NGOHUB)
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#2F6E3A");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    // قراءة البيانات القادمة من الـ Webhook
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    // استخراج الحقول بدقة مع قيم افتراضية
    var dateStr = data.date || new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' });
    var type = data.submissionType || (data.ngoName ? "طلب خدمة جمعية" : "طلب عام");
    var ngoName = data.ngoName || data.name || "غير محدد";
    var contactPerson = data.contactPerson || data.name || "غير محدد";
    var phone = data.phone || "غير متوفر";
    var gov = data.gov || data.location || "غير محدد";
    var service = data.serviceTitle || data.track || data.serviceId || "عام";
    var details = data.details || data.skills || "لا توجد تفاصيل إضافية";
    var id = data.id || ("req_" + new Date().getTime());

    // إضافة صف جديد بالبيانات
    sheet.appendRow([
      dateStr,
      type,
      ngoName,
      contactPerson,
      phone,
      gov,
      service,
      details,
      id
    ]);

    // محاذاة البيانات في الجدول
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, 9).setHorizontalAlignment("right");

    // إرجاع رد ناجح بصيغة JSON
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "تم حفظ الطلب بنجاح في Google Sheets",
      row: lastRow,
      id: id
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    service: "NGOHUB Webhook Engine v1.0",
    time: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
