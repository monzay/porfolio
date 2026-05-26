"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Github, Star, GitFork, ExternalLink, Sparkles } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { CabeceraSeccion } from "./compartidos/cabecera-seccion"
import { proyectos } from "@/lib/datos/proyectos"

// Claves de estado del proyecto para los filtros
const FILTROS = ["all", "publicado", "en-progreso", "archivado"]

// Cuadrícula de proyectos con filtros por estado
export function ProjectsGrid() {
  const [filtroActivo, setFiltroActivo] = useState("all")
  const { t, language } = useTranslation()

  const proyectosFiltrados = filtroActivo === "all"
    ? proyectos
    : proyectos.filter(p => p.estado === filtroActivo)

  // Obtener etiqueta de color según estado del proyecto
  const colorEstado = (estado) => ({
    "publicado":   "bg-primary shadow-sm shadow-primary/50",
    "en-progreso": "bg-yellow-500 animate-pulse shadow-sm shadow-yellow-500/50",
    "archivado":   "bg-muted-foreground",
  })[estado] ?? ""

  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Encabezado con filtros */}
        <div className="mb-10 sm:mb-14 flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between">
          <CabeceraSeccion etiqueta={t.projects.tagline} titulo={t.projects.title} />

          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:flex-wrap scrollbar-hide animate-fade-in-up stagger-2">
            {FILTROS.map(filtro => (
              <button key={filtro} onClick={() => setFiltroActivo(filtro)}
                className={cn(
                  "shrink-0 rounded-lg border px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]",
                  filtroActivo === filtro
                    ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                    : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50",
                )}
              >
                {t.projects.filters[filtro] ?? filtro}
              </button>
            ))}
          </div>
        </div>

        {/* Cuadrícula de tarjetas */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {proyectosFiltrados.map((proyecto, indice) => {
            // Usar texto según el idioma activo
            const texto = language === "en" ? proyecto.en : proyecto.es

            return (
              <article key={proyecto.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl border bg-card/40 p-6 sm:p-7 glass transition-all duration-400 active:scale-[0.99] hover-lift hover:border-primary/40 hover:bg-card/70 animate-fade-in-up",
                  proyecto.resaltado
                    ? "sm:col-span-2 lg:col-span-2 border-primary/30 bg-linear-to-br from-primary/8 via-card/50 to-primary/8"
                    : "border-border/60",
                  proyecto.destacado && !proyecto.resaltado && "sm:col-span-2 lg:col-span-1",
                )}
                style={{ animationDelay: `${(indice % 6) * 100 + 200}ms` }}
              >
                {/* Insignia "Destacado" */}
                {proyecto.resaltado && (
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 animate-pulse-glow">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                      {t.projects.featured}
                    </span>
                  </div>
                )}

                {/* Indicador de estado */}
                <div className={cn("absolute right-5 top-5 flex items-center gap-2.5", proyecto.resaltado && "top-5")}>
                  <span className={cn("h-2.5 w-2.5 rounded-full transition-shadow duration-300", colorEstado(proyecto.estado))} />
                  <span className="font-mono text-xs text-muted-foreground">
                    {t.projects.filters[proyecto.estado] ?? proyecto.estado}
                  </span>
                </div>

                {/* Año */}
                <div className={cn("mb-5 font-mono text-xs text-muted-foreground", proyecto.resaltado && "mt-10")}>
                  {proyecto.anio}
                </div>

                {/* Título — traducido */}
                <h3 className={cn(
                  "mb-3 font-bold tracking-tight transition-all duration-300 group-hover:text-gradient",
                  proyecto.resaltado ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
                )}>
                  {texto.titulo}
                </h3>

                {/* Descripción — traducida */}
                <p className={cn(
                  "mb-5 text-sm leading-relaxed text-muted-foreground",
                  proyecto.resaltado ? "line-clamp-3" : "line-clamp-2",
                )}>
                  {texto.descripcion}
                </p>

                {/* Estrellas y bifurcaciones */}
                <div className="mb-5 flex items-center gap-5 font-mono text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5 transition-colors group-hover:text-yellow-500">
                    <Star className="h-3.5 w-3.5" />{proyecto.estrellas}
                  </span>
                  <span className="flex items-center gap-1.5 transition-colors group-hover:text-foreground">
                    <GitFork className="h-3.5 w-3.5" />{proyecto.bifurcaciones}
                  </span>
                </div>

                {/* Etiquetas de tecnología */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {proyecto.etiquetas.map(etiqueta => (
                    <span key={etiqueta}
                      className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10">
                      {etiqueta}
                    </span>
                  ))}
                </div>

                {/* Enlaces */}
                <div className="flex items-center gap-4">
                  <a href={proyecto.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-all duration-300 group/link"
                    onClick={e => e.stopPropagation()}>
                    <Github className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                    <span className="underline-animate">{t.projects.source}</span>
                  </a>
                  {proyecto.paginaWeb && (
                    <a href={proyecto.paginaWeb} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs text-primary hover:text-foreground transition-all duration-300 group/link"
                      onClick={e => e.stopPropagation()}>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover/link:scale-110 group-hover/link:rotate-12" />
                      <span className="underline-animate">{t.projects.live}</span>
                    </a>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
