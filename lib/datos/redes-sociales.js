import { SiGithub, SiWhatsapp, SiTiktok, SiInstagram } from "react-icons/si"
import { Mail } from "lucide-react"

// Contacto principal
export const WHATSAPP_NUMERO = "543884708347"
export const EMAIL_CONTACTO  = "jm8587700@gmail.com"

// Genera URL de WhatsApp con mensaje por defecto (opcional)
export function urlWhatsapp(mensaje = "") {
  return mensaje
    ? `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`
    : `https://wa.me/${WHATSAPP_NUMERO}`
}

// Datos de redes sociales reutilizados en encabezado y pie de página
// Orden: las primeras 3 aparecen en el encabezado (slice 0-3)
export const redesSociales = [
  {
    etiqueta: "GitHub",
    url: "https://github.com/monzay",
    usuario: "@monzay",
    Icono: SiGithub,
  },
  {
    etiqueta: "Instagram",
    url: "https://www.instagram.com/yoel_mart18/",
    usuario: "@yoel_mart18",
    Icono: SiInstagram,
  },
  {
    etiqueta: "TikTok",
    url: "https://www.tiktok.com/@axel_y30",
    usuario: "@axel_y30",
    Icono: SiTiktok,
  },
  {
    etiqueta: "WhatsApp",
    url: urlWhatsapp(),
    usuario: "+54 388 470 8347",
    Icono: SiWhatsapp,
  },
  {
    etiqueta: "Email",
    url: `mailto:${EMAIL_CONTACTO}`,
    usuario: EMAIL_CONTACTO,
    Icono: Mail,
  },
]
