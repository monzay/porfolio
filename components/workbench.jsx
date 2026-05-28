"use client"

import { useTranslation } from "@/lib/i18n"
import { CabeceraSeccion } from "./compartidos/cabecera-seccion"
import { ScrollReveal } from "./compartidos/scroll-reveal"

// Sección del taller — experimentos en progreso (próximamente)
export function Workbench() {
  const { t } = useTranslation()

  return (
    <section id="workbench" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <CabeceraSeccion
          etiqueta={t.workbench.tagline}
          titulo={t.workbench.title}
          descripcion={t.workbench.description}
          className="mb-10 sm:mb-14"
        />

        {/* Terminal vacía con Scroll Reveal */}
        <ScrollReveal efecto="scale" retraso={200}>
          <div className="rounded-xl border border-border bg-card/40 glass backdrop-blur-sm overflow-hidden hover-lift">
            {/* Cabecera de terminal */}
            <div className="flex items-center gap-3 border-b border-border/50 bg-secondary/40 px-4 sm:px-5 py-3.5 sm:py-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive/60 transition-colors hover:bg-destructive cursor-pointer" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60 transition-colors hover:bg-yellow-500 cursor-pointer" />
                <div className="h-3 w-3 rounded-full bg-primary/60 transition-colors hover:bg-primary cursor-pointer" />
              </div>
              <span className="ml-4 font-mono text-xs text-muted-foreground truncate">{t.workbench.terminal}</span>
              <div className="ml-auto hidden sm:flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs">{t.workbench.live}</span>
              </div>
            </div>

            <div className="flex items-center justify-center py-20">
              <p className="font-mono text-sm text-muted-foreground/50">// próximamente</p>
            </div>

            {/* Pie de terminal */}
            <div className="border-t border-border/50 bg-secondary/30 px-4 sm:px-5 py-4">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="text-primary">$</span>
                <span className="typing-cursor truncate">{t.workbench.command}</span>
                <span className="ml-auto text-primary/50 hidden sm:block">{t.workbench.pressEnter}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
