/**
 * Google Apps Script Web App Backend for Portfolio Contact Form
 * 100% Free of Cost at Any Scale, saves to Google Sheet & Google Drive, and sends HTML Emails.
 */

// Config: Change this to your email address where you want to receive alerts
const NOTIFICATION_EMAIL = "rkmourya999@gmail.com";

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "No data received"
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Parse the incoming submission data
    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();
    
    // 1. Process File Upload (if resume is attached)
    var fileUrl = "No file attached";
    var fileName = "";
    if (data.fileData && data.fileName) {
      try {
        // Find or create folder in Google Drive
        var folderName = "Portfolio_Resumes";
        var folders = DriveApp.getFoldersByName(folderName);
        var folder;
        if (folders.hasNext()) {
          folder = folders.next();
        } else {
          folder = DriveApp.createFolder(folderName);
        }
        
        // Decode base64 data
        var fileBytes = Utilities.base64Decode(data.fileData.split(',')[1] || data.fileData);
        var blob = Utilities.newBlob(fileBytes, data.fileType || 'application/pdf', data.fileName);
        
        // Create file in Drive folder
        var file = folder.createFile(blob);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        fileUrl = file.getUrl();
        fileName = data.fileName;
      } catch (fileErr) {
        fileUrl = "Error saving file: " + fileErr.toString();
      }
    }
    
    // 2. Save data to Google Sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Define headers in matching order
    var headers = [
      "Timestamp", "Name", "Email", "Budget", "Timeline", "Service", "Resume Link", "Resume Name",
      "Design Style", "Custom Domain", "Reference Sites",
      "Prediction Problem", "Existing Data", "Data Format", "Deployment Location",
      "Automation Task", "Platforms Involved", "Run Frequency", "Workflow Docs",
      "Data Source", "Report Pages", "Target Viewers", "Auto Refresh",
      "Additional Notes"
    ];
    
    // If sheet is empty, create headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      // Format headers
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#2a1b4e");
      headerRange.setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }
    
    // Gather all fields in correct header columns
    var rowValues = [
      timestamp,
      data.name || "",
      data.email || "",
      data.budget || "",
      data.timeline || "",
      data.service || "",
      fileUrl,
      fileName,
      data.designStyle || "",
      data.customDomain || "",
      data.referenceSites || "",
      data.predictionProblem || "",
      data.existingData || "",
      data.dataFormat || "",
      data.deployment || "",
      data.automationTask || "",
      data.platforms || "",
      data.frequency || "",
      data.workflowDocs || "",
      data.dataSource || "",
      data.reportPages || "",
      data.viewers || "",
      data.autoRefresh || "",
      data.additionalNotes || ""
    ];
    
    sheet.appendRow(rowValues);
    
    // 3. Send beautiful responsive HTML email notification
    sendNotificationEmail(data, fileUrl, fileName, timestamp);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Form submitted successfully!",
      resumeUrl: fileUrl
    }))
    .setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: "Server error: " + err.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

// Helper to compile a highly premium HTML email notification
function sendNotificationEmail(data, fileUrl, fileName, timestamp) {
  var formattedDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MMM dd, yyyy - hh:mm a");
  
  // Format service details dynamically based on chosen service
  var serviceDetailsHtml = "";
  if (data.service === 'Resume Website') {
    serviceDetailsHtml = `
      <tr><td style="padding: 6px 0; color: #a2eeff; font-weight: bold; width: 180px;">Design Style:</td><td style="color: #ffffff;">${data.designStyle || 'N/A'}</td></tr>
      <tr><td style="padding: 6px 0; color: #a2eeff; font-weight: bold;">Custom Domain:</td><td style="color: #ffffff;">${data.customDomain || 'N/A'}</td></tr>
      <tr><td style="padding: 6px 0; color: #a2eeff; font-weight: bold; vertical-align: top;">Reference Sites:</td><td style="color: #ffffff; white-space: pre-wrap;">${data.referenceSites || 'N/A'}</td></tr>
    `;
  } else if (data.service === 'ML Models for Prediction') {
    serviceDetailsHtml = `
      <tr><td style="padding: 6px 0; color: #a2eeff; font-weight: bold; width: 180px;">Prediction Task:</td><td style="color: #ffffff;">${data.predictionProblem || 'N/A'}</td></tr>
      <tr><td style="padding: 6px 0; color: #a2eeff; font-weight: bold;">Has Existing Data:</td><td style="color: #ffffff;">${data.existingData || 'N/A'}</td></tr>
      <tr><td style="padding: 6px 0; color: #a2eeff; font-weight: bold;">Data Format:</td><td style="color: #ffffff;">${data.dataFormat || 'N/A'}</td></tr>
      <tr><td style="padding: 6px 0; color: #a2eeff; font-weight: bold;">Deployment Location:</td><td style="color: #ffffff;">${data.deployment || 'N/A'}</td></tr>
    `;
  } else if (data.service === 'AI Agents for Automation') {
    serviceDetailsHtml = `
      <tr><td style="padding: 6px 0; color: #a2eeff; font-weight: bold; width: 180px; vertical-align: top;">Automation Task:</td><td style="color: #ffffff; white-space: pre-wrap;">${data.automationTask || 'N/A'}</td></tr>
      <tr><td style="padding: 6px 0; color: #a2eeff; font-weight: bold;">Tools/Platforms:</td><td style="color: #ffffff;">${data.platforms || 'N/A'}</td></tr>
      <tr><td style="padding: 6px 0; color: #a2eeff; font-weight: bold;">Execution Frequency:</td><td style="color: #ffffff;">${data.frequency || 'N/A'}</td></tr>
      <tr><td style="padding: 6px 0; color: #a2eeff; font-weight: bold; vertical-align: top;">Workflow Docs:</td><td style="color: #ffffff; white-space: pre-wrap;">${data.workflowDocs || 'N/A'}</td></tr>
    `;
  } else if (data.service === 'PowerBI / Tableau Dashboard') {
    serviceDetailsHtml = `
      <tr><td style="padding: 6px 0; color: #a2eeff; font-weight: bold; width: 180px;">Data Source:</td><td style="color: #ffffff;">${data.dataSource || 'N/A'}</td></tr>
      <tr><td style="padding: 6px 0; color: #a2eeff; font-weight: bold;">Pages / Reports Needed:</td><td style="color: #ffffff;">${data.reportPages || 'N/A'}</td></tr>
      <tr><td style="padding: 6px 0; color: #a2eeff; font-weight: bold;">Target Viewers:</td><td style="color: #ffffff;">${data.viewers || 'N/A'}</td></tr>
      <tr><td style="padding: 6px 0; color: #a2eeff; font-weight: bold;">Needs Auto Refresh:</td><td style="color: #ffffff;">${data.autoRefresh || 'N/A'}</td></tr>
    `;
  }
  
  // Format Resume Link or display N/A
  var fileAttachmentHtml = "";
  if (fileUrl && fileUrl.startsWith("http")) {
    fileAttachmentHtml = `
      <div style="margin-top: 20px; padding: 15px; background: rgba(93, 230, 255, 0.1); border: 1px solid rgba(93, 230, 255, 0.2); border-radius: 12px; text-align: center;">
        <span style="display: block; font-size: 11px; letter-spacing: 1px; color: #a2eeff; text-transform: uppercase; margin-bottom: 5px;">ATTACHED RESUME / CV</span>
        <a href="${fileUrl}" target="_blank" style="display: inline-block; padding: 8px 18px; background-color: #5de6ff; color: #181021; text-decoration: none; font-weight: bold; border-radius: 8px; font-size: 13px; transition: background 0.2s;">
          Open CV: ${fileName || 'Download Link'}
        </a>
      </div>
    `;
  } else {
    fileAttachmentHtml = `
      <div style="margin-top: 15px; padding: 10px; background: rgba(255, 255, 255, 0.03); border: 1px dashed rgba(255, 255, 255, 0.1); border-radius: 12px; text-align: center; color: #cbc3d7; font-size: 12px;">
        No resume/CV attached
      </div>
    `;
  }

  var htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Quote Submission</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #130a1c; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #ecddf6;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #130a1c; padding: 30px 10px;">
        <tr>
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="600" style="background: linear-gradient(135deg, #21182a 0%, #181021 100%); border: 1px solid rgba(149, 142, 160, 0.15); border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
              
              <!-- Header Gradient -->
              <tr>
                <td style="background: linear-gradient(90deg, #a078ff 0%, #00cbe6 100%); padding: 30px; text-align: center;">
                  <span style="font-size: 10px; font-weight: bold; letter-spacing: 3px; color: #130a1c; display: block; text-transform: uppercase; margin-bottom: 5px;">RKM PORTFOLIO LEAD</span>
                  <h1 style="margin: 0; font-size: 26px; font-weight: 800; color: #130a1c;">New Project Quote Request</h1>
                </td>
              </tr>
              
              <!-- Content Body -->
              <tr>
                <td style="padding: 30px 40px;">
                  <p style="font-size: 14px; color: #cbc3d7; margin-top: 0; text-align: right; font-style: italic;">Received: ${formattedDate}</p>
                  
                  <!-- Basic Client Information Card -->
                  <div style="background-color: #181021; border: 1px solid rgba(149, 142, 160, 0.1); border-radius: 16px; padding: 20px; margin-bottom: 25px;">
                    <h3 style="margin-top: 0; margin-bottom: 15px; color: #d0bcff; border-bottom: 1px solid rgba(208, 188, 255, 0.1); padding-bottom: 8px; font-size: 16px;">Client Profile</h3>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding: 6px 0; color: #cbc3d7; font-weight: bold; width: 120px;">Name:</td>
                        <td style="color: #ffffff; font-weight: 500; font-size: 15px;">${data.name || 'N/A'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #cbc3d7; font-weight: bold;">Email:</td>
                        <td style="color: #5de6ff; font-weight: 500;"><a href="mailto:${data.email || ''}" style="color: #5de6ff; text-decoration: none;">${data.email || 'N/A'}</a></td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #cbc3d7; font-weight: bold;">Budget Range:</td>
                        <td style="color: #ffffff; font-weight: 500;"><span style="background-color: #5516be; padding: 3px 8px; border-radius: 6px; font-size: 12px; color: #ffffff;">${data.budget || 'N/A'}</span></td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #cbc3d7; font-weight: bold;">Timeline:</td>
                        <td style="color: #ffffff;">${data.timeline || 'N/A'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #cbc3d7; font-weight: bold;">Requested Service:</td>
                        <td style="color: #a078ff; font-weight: bold;">${data.service || 'N/A'}</td>
                      </tr>
                    </table>
                  </div>

                  <!-- Service Specific Information Card -->
                  <div style="background-color: #181021; border: 1px solid rgba(149, 142, 160, 0.1); border-radius: 16px; padding: 20px; margin-bottom: 25px;">
                    <h3 style="margin-top: 0; margin-bottom: 15px; color: #a2eeff; border-bottom: 1px solid rgba(93, 230, 255, 0.15); padding-bottom: 8px; font-size: 16px;">Service Details</h3>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      ${serviceDetailsHtml}
                    </table>
                    
                    ${fileAttachmentHtml}
                  </div>

                  <!-- Additional Notes -->
                  <div style="background-color: #181021; border: 1px solid rgba(149, 142, 160, 0.1); border-radius: 16px; padding: 20px;">
                    <h3 style="margin-top: 0; margin-bottom: 12px; color: #dbb8ff; border-bottom: 1px solid rgba(219, 184, 255, 0.1); padding-bottom: 8px; font-size: 16px;">Additional Notes</h3>
                    <p style="color: #ecddf6; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.additionalNotes || 'No additional notes provided.'}</p>
                  </div>

                  <!-- CTA: View spreadsheet -->
                  <p style="text-align: center; margin-top: 35px; margin-bottom: 0; font-size: 11px; color: #958ea0; text-transform: uppercase; letter-spacing: 1px;">
                    This lead was automatically saved to your Google Sheets database.
                  </p>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #130a1c; border-top: 1px solid rgba(149, 142, 160, 0.1); padding: 20px 40px; text-align: center; font-size: 12px; color: #958ea0;">
                  <p style="margin: 0;">Roushan Kumar Mourya &copy; 2026 Portfolio Contact Engine</p>
                  <p style="margin: 5px 0 0 0; font-size: 10px; color: #cbc3d7; opacity: 0.5;">Secure &bull; Unlimited &bull; Zero Cost</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  // Send the email
  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: "🔥 RKM Lead: " + (data.name || 'New Client') + " - " + (data.service || 'Quote Request'),
    htmlBody: htmlBody
  });
}
