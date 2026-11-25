import nodemailer from "nodemailer";
import { profile } from "@/data/profile";

export interface ContactEmailInput {
  name: string;
  email: string;
  message: string;
}

export type MailSendResult =
  | { ok: true; provider: "resend" | "smtp" }
  | { ok: false; reason: "unconfigured" | "provider_error"; error: string };

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailContent({ name, email, message }: ContactEmailInput) {
  const subject = `Portfolio Inquiry from ${name}`;
  const text = [
    "New Portfolio Contact Submission",
    "================================",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #09090b; color: #f4f4f5; border: 1px solid #27272a; border-radius: 16px; overflow: hidden;">
      <div style="padding: 24px 28px; border-bottom: 1px solid #27272a; background: #121215;">
        <span style="display: inline-block; font-size: 11px; font-family: monospace; color: #34d399; letter-spacing: 0.08em; text-transform: uppercase;">Portfolio Contact</span>
        <h2 style="margin: 8px 0 0; font-size: 20px; color: #ffffff;">New Message from ${escapeHtml(name)}</h2>
      </div>
      <div style="padding: 24px 28px; line-height: 1.6;">
        <p style="margin: 0 0 8px; font-size: 14px; color: #a1a1aa;">
          <strong style="color: #f4f4f5;">Sender:</strong> ${escapeHtml(name)}
        </p>
        <p style="margin: 0 0 20px; font-size: 14px; color: #a1a1aa;">
          <strong style="color: #f4f4f5;">Reply-To:</strong>
          <a href="mailto:${escapeHtml(email)}" style="color: #34d399; text-decoration: none;">${escapeHtml(email)}</a>
        </p>
        <div style="padding: 16px 18px; border-radius: 12px; background: #18181b; border: 1px solid #27272a; white-space: pre-wrap; font-size: 14px; color: #e4e4e7;">${escapeHtml(message)}</div>
      </div>
      <div style="padding: 14px 28px; border-top: 1px solid #27272a; font-size: 12px; color: #71717a;">
        Sent from ${escapeHtml(profile.siteUrl)}
      </div>
    </div>
  `;

  return { subject, text, html };
}

/**
 * Sends a contact inquiry using Resend (if RESEND_API_KEY is set) or
 * Nodemailer SMTP / Gmail App Password (if SMTP_USER + SMTP_PASS or
 * GMAIL_USER + GMAIL_APP_PASSWORD are set).
 */
export async function sendContactEmail(
  input: ContactEmailInput
): Promise<MailSendResult> {
  const toEmail = process.env.CONTACT_TO_EMAIL || profile.socials.email;
  const { subject, text, html } = buildEmailContent(input);

  // 1. Resend API (preferred when RESEND_API_KEY is configured)
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  if (resendApiKey) {
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL?.trim() ||
      "Portfolio Contact <onboarding@resend.dev>";

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: input.email,
          subject,
          text,
          html,
        }),
      });

      if (!res.ok) {
        const errBody = await res.text();
        console.error("Resend delivery failed:", res.status, errBody);
        return {
          ok: false,
          reason: "provider_error",
          error:
            "Unable to deliver message via Resend right now. Please use direct email below.",
        };
      }

      return { ok: true, provider: "resend" };
    } catch (err) {
      console.error("Resend request error:", err);
      return {
        ok: false,
        reason: "provider_error",
        error:
          "Network error while contacting mail service. Please use direct email below.",
      };
    }
  }

  // 2. Nodemailer SMTP / Gmail fallback
  const smtpUser =
    process.env.SMTP_USER?.trim() || process.env.GMAIL_USER?.trim();
  const smtpPass =
    process.env.SMTP_PASS?.trim() || process.env.GMAIL_APP_PASSWORD?.trim();

  if (smtpUser && smtpPass) {
    const smtpHost = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || "465");
    const smtpSecure =
      process.env.SMTP_SECURE !== undefined
        ? process.env.SMTP_SECURE === "true"
        : smtpPort === 465;

    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: process.env.CONTACT_FROM_EMAIL?.trim() || `"${profile.name} Portfolio" <${smtpUser}>`,
        to: toEmail,
        replyTo: `"${input.name}" <${input.email}>`,
        subject,
        text,
        html,
      });

      return { ok: true, provider: "smtp" };
    } catch (err) {
      console.error("SMTP delivery failed:", err);
      return {
        ok: false,
        reason: "provider_error",
        error:
          "SMTP mail delivery failed. Please verify mail credentials or use direct email below.",
      };
    }
  }

  return {
    ok: false,
    reason: "unconfigured",
    error:
      "Mail delivery credentials are not configured yet. Add GMAIL_APP_PASSWORD or RESEND_API_KEY to .env.local, or use the direct email link below.",
  };
}
