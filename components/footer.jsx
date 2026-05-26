"use client"

import { ExternalLink, Heart } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { PuntoActivo } from "./compartidos/punto-activo"
import { redesSociales, urlWhatsapp, EMAIL_CONTACTO } from "@/lib/datos/redes-sociales"

// Pie de página con contacto, WhatsApp y redes sociales
export function Footer() {
  const { t } = useTranslation()

  // URL de WhatsApp con mensaje por defecto según el idioma activo
  const urlWa = urlWhatsapp(t.whatsapp.mensajePorDefecto)

  return (
    <footer id="connect" className="border-t border-border/30 px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">

          {/* Columna izquierda: llamada a la acción */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
                {t.footer.tagline}
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                {t.footer.title1}{" "}
                <span className="bg-linear-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  {t.footer.title2}
                </span>
              </h2>
            </div>
            <p className="max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t.footer.description}
            </p>

            {/* Botones de contacto */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {/* Email */}
              <a href={`mailto:${EMAIL_CONTACTO}`}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary bg-primary/10 px-7 py-3.5 font-mono text-sm text-primary transition-all duration-500 hover:text-primary-foreground active:scale-[0.98] sm:w-auto">
                <span className="relative z-10">{t.footer.sendSignal}</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              {/* WhatsApp con mensaje por defecto */}
              <a href={urlWa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-border px-7 py-3.5 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground hover:bg-secondary/50 active:scale-[0.98] sm:w-auto">
                {t.footer.whatsappBtn}
              </a>
            </div>
          </div>

          {/* Columna derecha: enlaces de redes */}
          <div className="space-y-6 lg:text-right animate-fade-in-up stagger-2">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-muted-foreground">
              {t.footer.findElsewhere}
            </p>
            <div className="space-y-2">
              {redesSociales.map(({ etiqueta, url, usuario, Icono }, indice) => {
                // WhatsApp usa URL con mensaje por defecto
                const href = etiqueta === "WhatsApp" ? urlWa : url
                return (
                  <a key={etiqueta} href={href}
                    target={etiqueta !== "Email" ? "_blank" : undefined}
                    rel={etiqueta !== "Email" ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 lg:flex-row-reverse active:bg-secondary/30 hover:border-border/50 hover:bg-card/50 glass animate-fade-in"
                    style={{ animationDelay: `${indice * 100 + 400}ms` }}
                  >
                    <div className="flex items-center gap-3 lg:flex-row-reverse">
                      <Icono className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                      <span className="font-mono text-sm font-medium transition-colors group-hover:text-gradient">
                        {etiqueta}
                      </span>
                      {etiqueta !== "Email" && (
                        <ExternalLink className="h-3 w-3 text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                      )}
                    </div>
                    <span className="font-mono text-xs text-muted-foreground truncate">{usuario}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-6 border-t border-border/30 pt-8 sm:pt-10 sm:flex-row animate-fade-in stagger-4">
          <div className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
            <PuntoActivo />
            <span>{t.footer.forgedWith}</span>
            <Heart className="h-3.5 w-3.5 text-destructive animate-pulse" />
            <span>{t.footer.andCode}</span>
          </div>
          <div className="flex items-center gap-4">
            {redesSociales.slice(0, 3).map(({ etiqueta, url, Icono }) => (
              <a key={etiqueta} href={url} target="_blank" rel="noopener noreferrer" aria-label={etiqueta}
                className="text-muted-foreground/50 transition-all duration-300 hover:text-primary hover:scale-110">
                <Icono className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="font-mono text-xs text-muted-foreground text-center sm:text-right">
            © {new Date().getFullYear()} JMCODE — {t.footer.allRights}
          </p>
        </div>
      </div>
    </footer>
  )
}
