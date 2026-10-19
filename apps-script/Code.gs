// Deploy: open your Google Sheet > Extensions > Apps Script > paste this >
// Deploy > New deployment > Type "Web app" > Execute as "Me" > Access "Anyone" >
// copy the URL into src/data.js (FORM_URL).

var OWNER_EMAIL = "vivektanwer648@gmail.com";

function doPost(e) {
  var d = JSON.parse(e.postData.contents);

  // 1. Save lead in the Sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(["Date", "Name", "Email", "Phone", "Product", "Message"]);
  sheet.appendRow([new Date(), d.name, d.email, d.phone, d.product, d.message]);

  // 2. Full lead to you
  MailApp.sendEmail({
    to: OWNER_EMAIL,
    subject: "New VanaHerbs lead: " + d.name,
    body: "Name: " + d.name + "\nEmail: " + d.email + "\nPhone: " + d.phone +
          "\nProduct: " + d.product + "\n\nMessage:\n" + d.message,
  });

  // 3. Thank-you email to the visitor
  MailApp.sendEmail({
    to: d.email,
    subject: "Thank you for contacting VanaHerbs",
    body: "Hi " + d.name + ",\n\nThank you for reaching out to VanaHerbs. We have received your enquiry and will reply shortly.\n\nWarm regards,\nTeam VanaHerbs\nHimalayan Botanical Sourcing\ninfo.vanaherbs@gmail.com | +91 9654385462",
  });

  return ContentService.createTextOutput("ok");
}
