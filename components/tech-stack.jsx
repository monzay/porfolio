"use client"

import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/i18n"
import { CabeceraSeccion } from "./compartidos/cabecera-seccion"
import { ScrollReveal } from "./compartidos/scroll-reveal"
import { tecnologias, colorCategoria } from "@/lib/datos/tecnologias"

// Sección de pila tecnológica con iconos oficiales y Scroll Reveal
export function TechStack() {
  const { t } = useTranslation()

  return (
    <section id="stack" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">

        <CabeceraSeccion
          etiqueta={t.stack.tagline}
          titulo={t.stack.title}
          descripcion={t.stack.description}
          className="mb-10 sm:mb-14"
        />

        {/* Cuadrícula de tecnologías — cada tarjeta con Scroll Reveal escalonado */}
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {tecnologias.map((tech, indice) => (
            <ScrollReveal
              key={tech.id}
              efecto="fade-up"
              retraso={(indice % 6) * 70}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border/60 bg-card/40 glass",
                "p-5 sm:p-6 transition-all duration-400",
                "hover:border-primary/40 hover:bg-card/70 active:scale-[0.98] hover-lift",
              )}
            >
              {/* Degradado de hover */}
              <div className={cn(
                "absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                tech.degradado,
              )} />

              <div className="relative z-10 flex flex-col gap-4">
                {/* Icono oficial con color de marca */}
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg shrink-0"
                  style={{ backgroundColor: tech.fondo }}
                >
                  <tech.Icono size={22} color={tech.colorIcono} />
                </div>

                {/* Nombre y categoría */}
                <div className="space-y-1.5">
                  <h3 className="font-mono text-sm font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                    {tech.nombre}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", colorCategoria[tech.categoria])} />
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                      {t.stack.categories[tech.categoria]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Barra inferior animada */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-linear-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
            </ScrollReveal>
          ))}
        </div>

        {/* Contador total con Scroll Reveal */}
        <ScrollReveal efecto="fade-in" retraso={200} className="mt-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-border/60 to-transparent" />
          <p className="font-mono text-xs text-muted-foreground whitespace-nowrap">
            <span className="text-primary font-medium">{tecnologias.length}</span>
            &nbsp;{t.stack.total}
          </p>
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-border/60 to-transparent" />
        </ScrollReveal>
      </div>
    </section>
  )
}
