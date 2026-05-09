import { Resend } from "resend";
import { buildContactEmailHtml, buildContactEmailText } from "@/app/lib/email-template";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TO_ADDRESS = process.env.CONTACT_TO_ADDRESS || "info@accuracap.com";
const FROM_ADDRESS = process.env.RESEND_FROM_ADDRESS || "AccuraCap <onboarding@resend.dev>";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  company?: string;
  recaptchaToken?: string;
};

async function verifyRecaptcha(token: string, remoteIp?: string | null): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("RECAPTCHA_SECRET_KEY is not configured.");
    return false;
  }

  const params = new URLSearchParams({ secret, response: token });
  if (remoteIp) params.append("remoteip", remoteIp);

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (!data.success) {
      console.warn("reCAPTCHA verification failed:", data["error-codes"]);
    }
    return Boolean(data.success);
  } catch (err) {
    console.error("reCAPTCHA verification request error:", err);
    return false;
  }
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — bots tend to fill every field. Pretend success silently.
  if (body.company && body.company.trim().length > 0) {
    return Response.json({ ok: true });
  }

  const recaptchaToken = body.recaptchaToken?.trim() ?? "";
  if (!recaptchaToken) {
    return Response.json(
      { ok: false, error: "Please complete the reCAPTCHA verification." },
      { status: 400 }
    );
  }

  const remoteIp =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip");
  const recaptchaOk = await verifyRecaptcha(recaptchaToken, remoteIp);
  if (!recaptchaOk) {
    return Response.json(
      { ok: false, error: "reCAPTCHA verification failed. Please try again." },
      { status: 400 }
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !phone || !subject || !message) {
    return Response.json(
      { ok: false, error: "All fields are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return Response.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (message.length > 5000) {
    return Response.json(
      { ok: false, error: "Message is too long (max 5,000 characters)." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return Response.json(
      { ok: false, error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const payload = { name, email, phone, subject, message };

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      replyTo: email,
      subject: `New enquiry from ${name} — ${subject}`,
      html: buildContactEmailHtml(payload),
      text: buildContactEmailText(payload),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { ok: false, error: "Could not send your message. Please try again." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return Response.json(
      { ok: false, error: "Unexpected error. Please try again." },
      { status: 500 }
    );
  }
}
