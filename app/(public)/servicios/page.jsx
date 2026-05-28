"use client"

import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { servicios, pasos } from "@/lib/datos/servicios"
import { urlWhatsapp, EMAIL_CONTACTO } from "@/lib/datos/redes-sociales"
import { PuntoActivo } from "@/components/compartidos/punto-activo"
import { ScrollReveal } from "@/components/compartidos/scroll-reveal"

// Página de Servicios — completamente traducida con Scroll Reveal
export default function PaginaServicios() {
  const { t, language } = useTranslation()
  const ts = t.servicios

  // URL de WhatsApp con mensaje por defecto según el idioma activo
  const urlWa = urlWhatsapp(t.whatsapp.mensajePorDefecto)

  return (
    <div className="relative">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">

            {/* Texto del hero */}
            <ScrollReveal efecto="slide-left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                    {ts.hero.tagline}
                  </p>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                    {ts.hero.titulo1}{" "}
                    <span className="bg-linear-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                      {ts.hero.titulo2}
                    </span>
                  </h1>
                  <p className="max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground">
                    {ts.hero.descripcion}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={urlWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg border border-primary bg-primary/10 px-7 py-3.5 font-mono text-sm text-primary transition-all duration-500 hover:text-primary-foreground active:scale-[0.98]"
                  >
                    <span className="relative z-10">{ts.hero.btnPrimario}</span>
                    <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
                  </a>
                  <a
                    href="#servicios"
                    className="inline-flex items-center justify-center gap-3 rounded-lg border border-border px-7 py-3.5 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground hover:bg-secondary/50 active:scale-[0.98]"
                  >
                    {ts.hero.btnSecundario}
                  </a>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                  <PuntoActivo />
                  {ts.hero.disponible}
                </div>
              </div>
            </ScrollReveal>

            {/* Terminal decorativa */}
            <ScrollReveal efecto="slide-right" retraso={150}>
              <div className="relative">
                <div className="rounded-xl border border-border bg-card/60 glass overflow-hidden hover-lift">
                  <div className="flex items-center gap-3 border-b border-border/50 bg-secondary/40 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-destructive/60" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                      <div className="h-3 w-3 rounded-full bg-primary/60" />
                    </div>
                    <span className="ml-4 font-mono text-xs text-muted-foreground">
                      {ts.hero.terminal}
                    </span>
                  </div>

                  <div className="p-6 font-mono text-sm space-y-3">
                    <div className="flex gap-3">
                      <span className="text-primary shrink-0">$</span>
                      <span className="text-muted-foreground">cat servicios.json</span>
                    </div>
                    <div className="pl-6 space-y-1.5 text-xs">
                      {servicios.map((s, i) => {
                        const texto = language === "en" ? s.en : s.es
                        return (
                          <div key={s.id} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${i * 80 + 300}ms` }}>
                            <span className="text-primary/50">›</span>
                            <span className="text-muted-foreground/60">{`"${texto.titulo.toLowerCase().replace(/ /g, '-')}"`}:</span>
                            <span className={s.acento}>"{ts.hero.activo}"</span>
                          </div>
                        )
                      })}
                    </div>
                    <div className="flex gap-3 pt-2">
                      <span className="text-primary shrink-0">$</span>
                      <span className="typing-cursor text-muted-foreground/50" />
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 -top-4 rounded-lg border border-primary/40 bg-primary/15 glass px-4 py-2 font-mono text-xs text-primary animate-float">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    {ts.hero.expBadge}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Servicios ────────────────────────────────────────────────────── */}
      <section id="servicios" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
        <div className="mx-auto max-w-7xl">

          {/* Encabezado de sección */}
          <ScrollReveal efecto="fade-up" className="mb-14 space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              {ts.seccion.tagline}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {ts.seccion.titulo}
            </h2>
            <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              {ts.seccion.descripcion}
            </p>
          </ScrollReveal>

          {/* Cuadrícula de servicios con Scroll Reveal escalonado */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((servicio, indice) => {
              const Icono = servicio.icono
              const texto = language === "en" ? servicio.en : servicio.es
              return (
                <ScrollReveal
                  key={servicio.id}
                  efecto="fade-up"
                  retraso={(indice % 3) * 100}
                  tag="article"
                  className={`group relative overflow-hidden rounded-xl border border-border/60 bg-card/40 glass p-6 sm:p-7 transition-all duration-400 hover:bg-card/70 active:scale-[0.99] hover-lift ${servicio.borde}`}
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${servicio.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  <div className="relative z-10 flex flex-col h-full gap-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/60 ${servicio.fondo} transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40`}>
                        <Icono className={`h-6 w-6 ${servicio.acento}`} />
                      </div>
                      <span className={`font-mono text-[10px] uppercase tracking-widest ${servicio.acento} opacity-60`}>
                        {servicio.etiqueta}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                        {texto.titulo}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {texto.descripcion}
                      </p>
                    </div>

                    <ul className="mt-auto space-y-2 pt-2 border-t border-border/40">
                      {texto.caracteristicas.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                          <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 ${servicio.acento}`} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Botón de precios — solo en servicios que lo tengan */}
                    {servicio.urlPrecios && texto.btnPrecios && (
                      <Link
                        href={servicio.urlPrecios}
                        className={`mt-4 inline-flex items-center gap-2 font-mono text-xs font-medium transition-all duration-300 ${servicio.acento} hover:gap-3`}
                      >
                        {texto.btnPrecios}
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>

                  <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-linear-to-r ${servicio.acento.replace('text-', 'from-')} to-transparent transition-all duration-500 group-hover:w-full`} />
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Proceso ──────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
        <div className="mx-auto max-w-7xl">

          <ScrollReveal efecto="fade-up" className="mb-14 space-y-3 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              {ts.proceso.tagline}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {ts.proceso.titulo}
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {pasos.map((paso, indice) => {
              const Icono = paso.icono
              const texto = language === "en" ? paso.en : paso.es
              return (
                <ScrollReveal
                  key={paso.numero}
                  efecto="fade-up"
                  retraso={indice * 130}
                  className="group relative rounded-xl border border-border/60 bg-card/40 glass p-7 transition-all duration-400 hover:border-primary/40 hover:bg-card/70 hover-lift"
                >
                  <span className="absolute right-5 top-4 font-mono text-6xl font-bold text-border/30 select-none transition-colors duration-300 group-hover:text-primary/10">
                    {paso.numero}
                  </span>

                  <div className="relative z-10 space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icono className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="font-mono text-base font-semibold tracking-tight transition-colors group-hover:text-gradient">
                      {texto.titulo}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {texto.descripcion}
                    </p>
                  </div>

                  {indice < pasos.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 sm:block">
                      <ArrowRight className="h-5 w-5 text-border/60" />
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-linear-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal efecto="scale">
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 glass p-10 sm:p-16 text-center">
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/8 blur-3xl" />
              </div>

              <div className="space-y-6">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                  {ts.cta.tagline}
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                  {ts.cta.titulo}
                </h2>
                <p className="mx-auto max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {ts.cta.descripcion}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href={`mailto:${EMAIL_CONTACTO}`}
                    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary bg-primary/10 px-8 py-4 font-mono text-sm text-primary transition-all duration-500 hover:text-primary-foreground active:scale-[0.98]"
                  >
                    <span className="relative z-10">{ts.cta.btnEmail}</span>
                    <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
                  </a>
                  <a
                    href={urlWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-border px-8 py-4 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground hover:bg-secondary/50 active:scale-[0.98]"
                  >
                    {ts.cta.btnWhatsapp}
                  </a>
                </div>

                <p className="font-mono text-xs text-muted-foreground/60 pt-2">
                  {ts.cta.contacto}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
