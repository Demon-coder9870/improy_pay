import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, topic, transferRef, message } = body;

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (First name, Email, and Message)." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const secure = process.env.SMTP_SECURE === "true";
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const fromName = process.env.SMTP_FROM_NAME || "ImproPay Website";
    const fromEmail = process.env.SMTP_FROM_EMAIL || user || "no-reply@impropay.global";
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || "support@impropay.global";

    // If SMTP credentials have not been configured yet
    if (!host || !user || !pass || pass === "your-app-password-here") {
      console.warn(
        "SMTP credentials are not configured in .env.local. Submission received but not dispatched via email:",
        body
      );
      return NextResponse.json(
        {
          success: true,
          demoMode: true,
          message:
            "Form submitted successfully! (Note: Configure your SMTP credentials in .env.local to deliver live emails).",
        },
        { status: 200 }
      );
    }

    // Create Transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const fullName = `${firstName} ${lastName || ""}`.trim();
    const emailSubject = `[ImproPay Contact Form] ${topic ? `[${topic.toUpperCase()}] ` : ""}Message from ${fullName}`;

    // HTML Email Template
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background: linear-gradient(135deg, #1d6fc2 0%, #217bc6 100%); padding: 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">New Website Inquiry</h1>
          <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">ImproPay Cross-Border Remittance</p>
        </div>
        <div style="padding: 28px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #64748b; width: 35%;">Sender Name:</td>
              <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #0f172a;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #64748b;">Email Address:</td>
              <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #217bc6;"><a href="mailto:${email}" style="color: #217bc6; text-decoration: none;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #64748b;">Phone Number:</td>
              <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #0f172a;">${phone}</td>
            </tr>` : ""}
            ${topic ? `
            <tr>
              <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #64748b;">Inquiry Topic:</td>
              <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #0f172a;">${topic}</td>
            </tr>` : ""}
            ${transferRef ? `
            <tr>
              <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #64748b;">Transfer Ref ID:</td>
              <td style="padding: 8px 0; font-size: 14px; font-weight: bold; font-family: monospace; color: #0284c7;">${transferRef}</td>
            </tr>` : ""}
          </table>

          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; margin-top: 10px;">
            <div style="font-size: 12px; font-weight: bold; text-transform: uppercase; color: #94a3b8; margin-bottom: 8px; letter-spacing: 0.5px;">Message Details</div>
            <div style="font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</div>
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 16px 24px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0;">
          This message was submitted via the contact form on <a href="https://impropay.global" style="color: #217bc6; text-decoration: none; font-weight: bold;">impropay.global</a>
        </div>
      </div>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: emailSubject,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nTopic: ${topic || "General"}\nTransfer Ref: ${transferRef || "N/A"}\n\nMessage:\n${message}`,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully. We will get back to you shortly.",
    });
  } catch (error: any) {
    console.error("Error sending contact email via SMTP:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
