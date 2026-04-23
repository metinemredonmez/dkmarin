import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  website?: string;
};

function sanitize(v: unknown, max = 2000) {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Geçersiz istek gövdesi." },
      { status: 400 },
    );
  }

  if (sanitize(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(body.name, 120);
  const email = sanitize(body.email, 200);
  const phone = sanitize(body.phone, 40);
  const service = sanitize(body.service, 120);
  const message = sanitize(body.message, 5000);

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Zorunlu alanlar eksik." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Geçerli bir e-posta girin." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;
  const to = process.env.CONTACT_TO ?? "info@dkmarin.com";

  if (!host || !user || !pass || !from) {
    console.error("[contact] SMTP env vars missing");
    return NextResponse.json(
      { error: "Mail servisi yapılandırılmamış." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0B1F33;">
      <h2 style="margin:0 0 16px 0;">Yeni iletişim formu talebi</h2>
      <table cellspacing="0" cellpadding="6" style="border-collapse: collapse; font-size: 14px;">
        <tr><td style="color:#64748b;">Ad Soyad</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="color:#64748b;">E-posta</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="color:#64748b;">Telefon</td><td>${escapeHtml(phone)}</td></tr>
        <tr><td style="color:#64748b;">Hizmet</td><td>${escapeHtml(service || "-")}</td></tr>
      </table>
      <h3 style="margin:20px 0 8px 0;">Mesaj</h3>
      <p style="white-space: pre-wrap; line-height: 1.5; font-size: 14px;">${escapeHtml(message)}</p>
    </div>
  `;

  const text = [
    `Yeni iletişim formu talebi`,
    ``,
    `Ad Soyad: ${name}`,
    `E-posta: ${email}`,
    `Telefon: ${phone}`,
    `Hizmet: ${service || "-"}`,
    ``,
    `Mesaj:`,
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `DK Marin — Yeni teklif talebi (${name})`,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] sendMail error", err);
    return NextResponse.json(
      { error: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin." },
      { status: 500 },
    );
  }
}
