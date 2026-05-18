import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Resend } from "resend";

export async function POST(request: Request) {
  let docId = "";
  let emailSent = false;
  let emailError = null;

  try {
    const { name, email, message } = await handleRequestData(request);
    console.log("📥 API TRANSMIT: Received transmission payload:", { name, email, message });

    if (!name || !email || !message) {
      console.error("❌ API TRANSMIT: Validation failed. Missing required fields.");
      return NextResponse.json({ error: "Missing required parameters." }, { status: 400 });
    }

    // 1. Save data directly inside Firestore collection "transmissions"
    try {
      const docRef = await addDoc(collection(db, "transmissions"), {
        name,
        email,
        message,
        status: "encrypted",
        createdAt: serverTimestamp()
      });
      docId = docRef.id;
      console.log("✅ API TRANSMIT: Firestore write successful. Document ID:", docId);
    } catch (firestoreErr: any) {
      console.error("❌ API TRANSMIT: Firestore write failed:", firestoreErr);
      return NextResponse.json({ error: "Database transmission failed: " + firestoreErr.message }, { status: 500 });
    }

    const timestampStr = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }) + " (WIB)";

    // 2. Trigger automated email relay via Resend API
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL || "mrsamweb3@gmail.com";

    console.log("🔧 API TRANSMIT: Initializing email relay configuration...");
    console.log("🔧 API TRANSMIT: Target email set to:", toEmail);

    if (resendApiKey && resendApiKey !== "re_your_api_key_here") {
      try {
        const resend = new Resend(resendApiKey);

        // Monospace plain text body as explicitly requested
        const emailText = `
TRANSMISSION RECEIVED
--------------------------------
SENDER: ${name}
NODE GATEWAY: ${email}
STATUS: SIGNAL ENCRYPTED
TIMESTAMP: ${timestampStr}

MESSAGE:
${message}
        `;

        // Cyberpunk HTML format
        const emailHtml = `
          <div style="background-color: #050505; color: #f7f3ea; font-family: 'Courier New', Courier, monospace; padding: 30px; border: 2px solid #e50914; max-width: 600px; margin: 0 auto; box-shadow: 0 0 15px rgba(229, 9, 20, 0.35);">
            <pre style="color: #e50914; font-weight: bold; margin: 0 0 20px 0; line-height: 1.2; font-size: 13px;">
████████╗██████╗  █████╗ ███╗   ██╗███████╗███╗   ███╗██╗████████╗
╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝████╗ ████║██║╚══██╔══╝
   ██║   ██████╔╝███████║██╔██╗ ██║███████╗██╔████╔██║██║   ██║   
   ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██║╚██╔╝██║██║   ██║   
   ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║ ╚═╝ ██║██║   ██║   
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝     ╚═╝╚═╝   ╚═╝   
            </pre>
            <div style="border-top: 1px dashed #e50914; border-bottom: 1px dashed #e50914; padding: 15px 0; margin-bottom: 25px;">
              <p style="margin: 0; font-size: 16px; font-weight: bold; color: #e50914; text-align: center; tracking: 0.1em;">
                TRANSMISSION RECEIVED
              </p>
            </div>
            <div style="font-size: 14px; line-height: 1.8;">
              <div style="margin-bottom: 10px;"><strong style="color: #e50914; width: 140px; display: inline-block;">SENDER:</strong> ${name}</div>
              <div style="margin-bottom: 10px;"><strong style="color: #e50914; width: 140px; display: inline-block;">NODE GATEWAY:</strong> ${email}</div>
              <div style="margin-bottom: 10px;"><strong style="color: #e50914; width: 140px; display: inline-block;">STATUS:</strong> <span style="color: #e50914; font-weight: bold; text-decoration: underline;">SIGNAL ENCRYPTED</span></div>
              <div style="margin-bottom: 20px;"><strong style="color: #e50914; width: 140px; display: inline-block;">TIMESTAMP:</strong> ${timestampStr}</div>
              
              <div style="border-top: 1px solid rgba(247, 243, 234, 0.15); margin-top: 20px; padding-top: 20px;">
                <strong style="color: #e50914; display: block; margin-bottom: 10px;">MESSAGE:</strong>
                <div style="background-color: #111; border-left: 3px solid #e50914; padding: 15px; white-space: pre-wrap; font-size: 13px; line-height: 1.6; color: #f7f3ea;">
${message}
                </div>
              </div>
            </div>
            <div style="border-top: 1px dashed rgba(247, 243, 234, 0.2); margin-top: 30px; padding-top: 15px; font-size: 11px; text-align: center; color: rgba(247, 243, 234, 0.35);">
              NODE_REF: ${docId} // REBEL SECURE TRANSMITTER // END LOG
            </div>
          </div>
        `;

        console.log("📨 API TRANSMIT: Dispatching request to Resend API...");
        // Use onboarding@resend.dev for guaranteed delivery in sandboxed/unverified accounts
        const mailResponse = await resend.emails.send({
          from: "onboarding@resend.dev",
          to: toEmail,
          subject: `[NEW TRANSMISSION] Incoming Signal from Portfolio`,
          text: emailText,
          html: emailHtml
        });

        if (mailResponse.error) {
          throw new Error(mailResponse.error.message || JSON.stringify(mailResponse.error));
        }

        emailSent = true;
        console.log("🚀 API TRANSMIT: Resend email dispatched successfully:", mailResponse);
      } catch (err: any) {
        console.error("❌ API TRANSMIT: Resend API relay failed:", err);
        emailError = err.message || err;
      }
    } else {
      console.warn("⚠️ API TRANSMIT: Resend API Key is missing or invalid. Skipping email relay.");
      emailError = "Resend API Key is missing or placeholder.";
    }

    return NextResponse.json({ 
      success: true, 
      emailSent, 
      emailError,
      docId 
    });

  } catch (error: any) {
    console.error("💥 API TRANSMIT: General server error occurred:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

async function handleRequestData(request: Request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}
