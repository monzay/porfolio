import nodemailer from "nodemailer"
import { NextResponse } from "next/server"


// ─── Validación básica del cuerpo ────────────────────────────────────────────
function validar({ nombre, email, mensaje }) {
  if (!nombre?.trim() || nombre.trim().length < 2)
    return "El nombre debe tener al menos 2 caracteres."
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return "El email no es válido."
  if (!mensaje?.trim() || mensaje.trim().length < 10)
    return "El mensaje debe tener al menos 10 caracteres."
  return null
}

// ─── Transporte SMTP (Gmail) ─────────────────────────────────────────────────
function crearTransporte() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,   // Contraseña de aplicación de Google
    },
  })
}




// ─── POST /api/contacto ───────────────────────────────────────────────────────
export async function POST(req) {
  try {
    const body = await req.json()
    const { nombre, email, mensaje, asunto = "Nuevo mensaje desde el portfolio" } = body

    // Validar campos
    const error = validar({ nombre, email, mensaje })
    if (error) {
      return NextResponse.json({ ok: false, error }, { status: 400 })
    }

    const transporte = crearTransporte()

    // ── Correo que recibes tú ────────────────────────────────────────────────
    await transporte.sendMail({
      from: `"Portfolio JMCode" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACTO_EMAIL,
      replyTo: email,
      subject: `📬 ${asunto}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 24px; background: #0d1117; color: #e6edf3; border-radius: 12px;">
          <h2 style="color: #58a6ff; margin: 0 0 20px;">Nuevo mensaje desde el portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #8b949e; width: 80px;">Nombre</td>
              <td style="padding: 8px 0; font-weight: bold;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8b949e;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #58a6ff;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8b949e; vertical-align: top;">Mensaje</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${mensaje}</td>
            </tr>
          </table>
          <hr style="border-color: #30363d; margin: 20px 0;" />
          <p style="color: #8b949e; font-size: 12px; margin: 0;">Responder directamente a este correo escribirá a <strong>${email}</strong></p>
        </div>
      `,
    })

    // ── Correo de confirmación para quien escribe ────────────────────────────
    await transporte.sendMail({
      from: `"Joel Martínez — JMCode" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "✅ Recibí tu mensaje",
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 24px; background: #0d1117; color: #e6edf3; border-radius: 12px;">
          <h2 style="color: #58a6ff; margin: 0 0 16px;">Hola ${nombre} 👋</h2>
          <p style="color: #8b949e; margin: 0 0 16px;">Recibí tu mensaje. Te responderé dentro de las próximas <strong style="color: #e6edf3;">24 horas</strong>.</p>
          <blockquote style="border-left: 3px solid #30363d; margin: 16px 0; padding: 12px 16px; color: #8b949e;">
            <em>${mensaje}</em>
          </blockquote>
          <hr style="border-color: #30363d; margin: 20px 0;" />
          <p style="color: #8b949e; font-size: 12px; margin: 0;">— Joel Martínez · <a href="https://jmcode.dev" style="color: #58a6ff;">jmcode.dev</a></p>
        </div>
      `,
    })


    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[API contacto]", err)
    return NextResponse.json(
      { ok: false, error: "Error interno del servidor." },
      { status: 500 }
    )
  }
}
