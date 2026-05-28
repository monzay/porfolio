"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useTranslation } from "@/lib/i18n"

// Sección principal del portafolio con efecto de escritura animada
export function HeroSection() {
  const { t } = useTranslation()
  const [rolActual, setRolActual] = useState(0)
  const [textoMostrado, setTextoMostrado] = useState("")
  const [borrando, setBorrando] = useState(false)

  const roles = t.hero.roles

  // Efecto de máquina de escribir para los roles
  useEffect(() => {
    const textoObjetivo = roles[rolActual]
    const tiempo = setTimeout(
      () => {
        if (!borrando) {
          if (textoMostrado.length < textoObjetivo.length) {
            setTextoMostrado(textoObjetivo.slice(0, textoMostrado.length + 1))
          } else {
            setTimeout(() => setBorrando(true), 2000)
          }
        } else {
          if (textoMostrado.length > 0) {
            setTextoMostrado(textoMostrado.slice(0, -1))
          } else {
            setBorrando(false)
            setRolActual(anterior => (anterior + 1) % roles.length)
          }
        }
      },
      borrando ? 50 : 100,
    )
    return () => clearTimeout(tiempo)
  }, [textoMostrado, borrando, rolActual, roles])

  return (
    <section className="relative px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center lg:min-h-[70vh]">

          {/* Columna izquierda: texto */}
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-3 animate-fade-in-up">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
                {t.hero.tagline}
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
                {t.hero.title1}
                <br />
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text typing-cursor">
                  {textoMostrado}
                </span>
              </h1>
            </div>

            <p className="max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-in-up stagger-2">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
              {/* Botón principal */}
              <a href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg border border-primary bg-primary/10 px-7 py-4 sm:py-3.5 font-mono text-sm text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]">
                <span className="relative z-10">{t.hero.exploreBtn}</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              {/* Botón secundario */}
              <Link href="/servicios"
                className="group inline-flex items-center justify-center gap-3 rounded-lg border border-border px-7 py-4 sm:py-3.5 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground hover:bg-secondary/50 active:scale-[0.98]">
                <span>{t.nav.services}</span>
                <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</span>
              </Link>
            </div>
          </div>

          {/* Columna derecha: arte ASCII en terminal */}
          <div className="relative animate-scale-in stagger-4">
            <div className="relative rounded-xl border border-border bg-card/60 glass p-5 sm:p-8 hover-lift">
              {/* Puntos de la terminal */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive/60 transition-colors hover:bg-destructive" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60 transition-colors hover:bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-primary/60 transition-colors hover:bg-primary" />
              </div>
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 bg-background/50 rounded-md px-3 py-1 font-mono text-xs text-muted-foreground">
                {t.hero.terminal}
              </div>

              <pre className="mt-6 overflow-hidden font-mono text-[10px] leading-relaxed text-primary/80 sm:text-xs md:text-sm">
                <span className="sm:hidden">{`┌───────────────────────┐
│     ██╗███╗   ███╗    │
│     ██║████╗ ████║    │
│     ██║██╔████╔██║    │
│██   ██║██║╚██╔╝██║    │
│╚█████╔╝██║ ╚═╝ ██║    │
│ ╚════╝ ╚═╝     ╚═╝    │
│                       │
│  > experimentos: 4    │
│  > online             │
└───────────────────────┘`}</span>
                <span className="hidden sm:block">{`┌─────────────────────────────────────┐
│                                     │
│     ██╗ ██████╗ ███████╗██╗         │
│     ██║██╔═══██╗██╔════╝██║         │
│     ██║██║   ██║█████╗  ██║         │
│██   ██║██║   ██║██╔══╝  ██║         │
│╚█████╔╝╚██████╔╝███████╗███████╗    │
│ ╚════╝  ╚═════╝ ╚══════╝╚══════╝    │
│         Martinez                    │
│                                     │
│   > ${t.hero.experiments}: 6           │
│   > ${t.hero.statusForging}                          │
│   > ${t.hero.lastSpark}              │
│                                     │
└─────────────────────────────────────┘`}</span>
              </pre>
            </div>

            {/* Etiqueta versión */}
            <div className="absolute -right-2 sm:-right-6 -top-2 sm:-top-6 rounded-lg border border-primary/40 bg-primary/15 glass px-3 sm:px-4 py-1.5 font-mono text-[11px] sm:text-xs text-primary animate-float">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                v0.1.0
              </span>
            </div>
            {/* Etiqueta experiencia */}
            <div className="absolute -bottom-3 sm:-bottom-6 -left-2 sm:-left-6 rounded-lg border border-border bg-card glass px-3 sm:px-4 py-1.5 font-mono text-[11px] sm:text-xs text-muted-foreground animate-float"
              style={{ animationDelay: "1s" }}>
              4 años exp.
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-primary/5 blur-3xl" />
          </div>
        </div>
      </div>

      {/* Flecha de desplazamiento */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-fade-in stagger-6">
        <span className="font-mono text-xs text-muted-foreground">{t.hero.scroll}</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
