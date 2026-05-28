"use client"

import { ExternalLink, Heart } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { PuntoActivo } from "./compartidos/punto-activo"
import { ScrollReveal } from "./compartidos/scroll-reveal"
import { redesSociales, urlWhatsapp } from "@/lib/datos/redes-sociales"
import { FormularioContacto } from "./formulario-contacto"

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
          <ScrollReveal efecto="slide-left">
            <div className="space-y-6 sm:space-y-8">
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

              {/* Formulario de contacto directo */}
              <FormularioContacto className="w-full max-w-md" />

              {/* WhatsApp como alternativa */}
              <div className="pt-1">
                <a href={urlWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-all duration-300 hover:text-foreground">
                  <span className="opacity-50">—</span>
                  {t.footer.whatsappBtn}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Columna derecha: enlaces de redes sociales */}
          <ScrollReveal efecto="slide-right" retraso={100}>
            <div className="space-y-6 lg:text-right">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-muted-foreground">
                {t.footer.findElsewhere}
              </p>
              <div className="space-y-2">
                {redesSociales.map(({ etiqueta, url, usuario, Icono }, indice) => {
                  // WhatsApp usa URL con mensaje por defecto
                  const href = etiqueta === "WhatsApp" ? urlWa : url
                  return (
                    <ScrollReveal
                      key={etiqueta}
                      efecto="fade-up"
                      retraso={indice * 70}
                      tag="a"
                      href={href}
                      target={etiqueta !== "Email" ? "_blank" : undefined}
                      rel={etiqueta !== "Email" ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 lg:flex-row-reverse active:bg-secondary/30 hover:border-border/50 hover:bg-card/50 glass"
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
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Barra inferior */}
        <ScrollReveal efecto="fade-in" retraso={300} className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-6 border-t border-border/30 pt-8 sm:pt-10 sm:flex-row">
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
        </ScrollReveal>
      </div>
    </footer>
  )
}
