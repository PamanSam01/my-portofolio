const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const { Resend } = require("resend");

admin.initializeApp();

// Triggered when a new document is written to the transmissions collection
exports.sendTransmissionEmail = onDocumentCreated("transmissions/{docId}", async (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return null;
  }

  const data = snapshot.data();
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.DESTINATION_EMAIL;

  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY environment variable");
    return null;
  }
  if (!toEmail) {
    console.error("Missing DESTINATION_EMAIL environment variable");
    return null;
  }

  const resend = new Resend(resendApiKey);

  const formattedTimestamp = data.timestamp 
    ? new Date(data.timestamp.toDate()).toLocaleString("en-US", { timeZone: "Asia/Jakarta" }) 
    : new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" });

  try {
    const emailResult = await resend.emails.send({
      from: "Rebel Terminal <terminal@rebelnoir.dev>",
      to: toEmail,
      subject: `[TRANSMISSION] New Signal Received`,
      html: `
        <div style="background-color: #050505; color: #f7f3ea; font-family: 'Courier New', Courier, monospace; padding: 30px; border: 3px solid #e50914; max-width: 600px; margin: 0 auto; box-shadow: 0 0 20px rgba(229, 9, 20, 0.4);">
          <!-- Tactical ASCII Header -->
          <pre style="color: #e50914; font-weight: bold; margin: 0; line-height: 1.2;">
██╗  ██╗██╗██╗     ██████╗ 
██║  ██║██║██║    ██╔═══██╗
███████║██║██║    ██║   ██║
██╔══██║██║██║    ██║   ██║
██║  ██║██║███████╗╚██████╔╝
╚═╝  ╚═╝╚═╝╚══════╝ ╚═════╝ 
[SECURE NODE INCOMING CONNECTION]
          </pre>
          <hr style="border: 0; border-top: 2px dashed #e50914; margin: 20px 0;">
          
          <div style="border: 1px solid rgba(247, 243, 234, 0.2); padding: 15px; background: rgba(229, 9, 20, 0.05);">
            <p style="margin: 5px 0;"><strong style="color: #e50914;">NODE ID:</strong> ${event.params.docId}</p>
            <p style="margin: 5px 0;"><strong style="color: #e50914;">TIMESTAMP:</strong> ${formattedTimestamp} (WIB)</p>
            <p style="margin: 5px 0;"><strong style="color: #e50914;">CLASSIFICATION:</strong> SEC_CLEARANCE_L4</p>
            <p style="margin: 5px 0;"><strong style="color: #e50914;">SOURCE:</strong> ${data.source || "portfolio_terminal"}</p>
            <p style="margin: 5px 0;"><strong style="color: #e50914;">SECURITY CODE:</strong> ${data.status || "encrypted"}</p>
          </div>

          <h3 style="color: #e50914; border-bottom: 1px solid #e50914; padding-bottom: 5px; margin-top: 25px;">DECRYPTED SIGNAL PAYLOAD</h3>
          
          <div style="margin-top: 15px;">
            <p style="margin: 5px 0;"><strong style="color: #e50914;">SENDER:</strong> ${data.name}</p>
            <p style="margin: 5px 0;"><strong style="color: #e50914;">COMM_CHANNEL:</strong> <a href="mailto:${data.email}" style="color: #f7f3ea; text-decoration: underline;">${data.email}</a></p>
            
            <div style="background-color: #111; border-left: 4px solid #e50914; padding: 15px; margin-top: 15px; white-space: pre-wrap; line-height: 1.6;">
${data.message}
            </div>
          </div>

          <hr style="border: 0; border-top: 2px dashed #e50914; margin: 25px 0;">
          
          <div style="font-size: 11px; text-align: center; color: rgba(247, 243, 234, 0.4);">
            SYSTEM LEVEL: REBEL NET // ALL LOGS ENCRYPTED // END TRANSMISSION
          </div>
        </div>
      `
    });

    console.log("Email transmission completed: ", emailResult);
    return emailResult;
  } catch (error) {
    console.error("Email transmission failed: ", error);
    return null;
  }
});
