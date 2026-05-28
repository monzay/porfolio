"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { CabeceraSeccion } from "./compartidos/cabecera-seccion"
import { ScrollReveal } from "./compartidos/scroll-reveal"
import { proyectos } from "@/lib/datos/proyectos"

export function ProjectsGrid() {
  const { t, language } = useTranslation()

  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 sm:mb-14">
          <CabeceraSeccion etiqueta={t.projects.tagline} titulo={t.projects.title} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {proyectos.map((proyecto, indice) => {
            const texto = language === "en" ? proyecto.en : proyecto.es

            return (
              <ScrollReveal
                key={proyecto.id}
                efecto="fade-up"
                retraso={(indice % 4) * 100}
                tag="article"
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 glass transition-all duration-400 hover-lift hover:border-primary/40 hover:bg-card/70"
              >
                {/* Imagen del proyecto */}
                {proyecto.imagen && (
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={proyecto.imagen}
                      alt={texto.titulo}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-card/80" />
                  </div>
                )}

                {/* Contenido */}
                <div className="p-6 sm:p-7">
                  <h3 className="mb-2 text-lg sm:text-xl font-bold tracking-tight transition-all duration-300 group-hover:text-gradient">
                    {texto.titulo}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {texto.descripcion}
                  </p>

                  {proyecto.paginaWeb && (
                    <a
                      href={proyecto.paginaWeb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:text-foreground transition-all duration-300 group/link"
                      onClick={e => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4 transition-transform group-hover/link:scale-110 group-hover/link:rotate-12" />
                      <span className="underline-animate">{t.projects.live}</span>
                    </a>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
