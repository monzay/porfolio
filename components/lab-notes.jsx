"use client"

import { useTranslation } from "@/lib/i18n"
import { CabeceraSeccion } from "./compartidos/cabecera-seccion"

// Sección de notas del laboratorio (próximamente)
export function LabNotes() {
  const { t } = useTranslation()

  return (
    <section id="notes" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <CabeceraSeccion
          etiqueta={t.notes.tagline}
          titulo={t.notes.title}
          descripcion={t.notes.description}
          className="mb-10 sm:mb-14"
        />
        <div className="flex items-center justify-center rounded-xl border border-dashed border-border/50 bg-card/20 py-20 animate-fade-in-up">
          <p className="font-mono text-sm text-muted-foreground/50">// próximamente</p>
        </div>
      </div>
    </section>
  )
}
