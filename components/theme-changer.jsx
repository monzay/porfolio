"use client"

import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"
import { Palette } from "lucide-react"
import { cn } from "@/lib/utils"
import { temas } from "@/lib/temas"

const CLAVE_ALMACENAMIENTO = "color-theme"

// Gradientes de vista previa para cada paleta de colores
const degradadosTema = {
  golden:  "bg-gradient-to-br from-amber-400 to-yellow-600",
  cyan:    "bg-gradient-to-br from-cyan-400 to-blue-500",
  purple:  "bg-gradient-to-br from-purple-400 to-violet-600",
  emerald: "bg-gradient-to-br from-emerald-400 to-green-600",
  rose:    "bg-gradient-to-br from-rose-400 to-pink-600",
}

// Selector de paleta de colores del sitio
export function ThemeChanger() {
  const [temaColor, setTemaColor] = useState("golden")
  const [abierto, setAbierto] = useState(false)
  const [montado, setMontado] = useState(false)
  const { resolvedTheme, systemTheme } = useTheme()
  const inicializado = useRef(false)
  const refTema = useRef("emerald")

  // Inicializar desde localStorage una sola vez al montar
  useEffect(() => {
    if (inicializado.current) return
    setMontado(true)

    if (typeof window !== "undefined") {
      const temaGuardado = localStorage.getItem(CLAVE_ALMACENAMIENTO)
      const temaValido = temaGuardado && temas[temaGuardado] ? temaGuardado : "emerald"
      refTema.current = temaValido
      setTemaColor(temaValido)
    }
    inicializado.current = true

    // Escuchar cambios desde otras pestañas
    const manejarCambioStorage = (evento) => {
      if (evento.key === CLAVE_ALMACENAMIENTO && evento.newValue && temas[evento.newValue]) {
        refTema.current = evento.newValue
        setTemaColor(evento.newValue)
      }
    }
    window.addEventListener("storage", manejarCambioStorage)
    return () => window.removeEventListener("storage", manejarCambioStorage)
  }, [])

  // Aplicar tema cuando cambia el modo oscuro/claro
  useEffect(() => {
    if (!montado || resolvedTheme === undefined) return

    let temaAplicar = refTema.current
    if (typeof window !== "undefined") {
      const temaGuardado = localStorage.getItem(CLAVE_ALMACENAMIENTO)
      if (temaGuardado && temas[temaGuardado] && temaGuardado !== refTema.current) {
        refTema.current = temaGuardado
        setTemaColor(temaGuardado)
        temaAplicar = temaGuardado
      }
    }
    aplicarTema(temaAplicar, resolvedTheme)
  }, [montado, resolvedTheme])

  // Aplica las variables CSS del tema seleccionado
  const aplicarTema = (nombreTema, modo) => {
    const configTema = temas[nombreTema]
    const modoEfectivo = modo ?? systemTheme ?? "light"
    const colores = modoEfectivo === "dark" ? configTema.dark : configTema.light

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        Object.entries(colores).forEach(([clave, valor]) => {
          document.documentElement.style.setProperty(`--${clave}`, valor)
        })
      })
    })
  }

  const cambiarTema = (nombreTema) => {
    refTema.current = nombreTema
    setTemaColor(nombreTema)
    if (typeof window !== "undefined") localStorage.setItem(CLAVE_ALMACENAMIENTO, nombreTema)
    aplicarTema(nombreTema, resolvedTheme ?? systemTheme ?? "light")
    setAbierto(false)
  }

  if (!montado) {
    return (
      <div className="flex h-9 w-9 items-center justify-center">
        <div className="h-4 w-4 animate-pulse rounded bg-muted" />
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setAbierto(!abierto)}
        className={cn(
          "group relative flex h-9 w-9 items-center justify-center rounded-lg",
          "text-muted-foreground transition-all duration-300",
          "hover:text-primary hover:bg-primary/10",
          abierto && "bg-primary/10 text-primary",
        )}
        aria-label="Cambiar paleta de colores"
      >
        <Palette className="h-4 w-4" />
        <span className={cn(
          "absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",
          "rounded-md bg-card border border-border px-2.5 py-1",
          "font-mono text-[10px] text-muted-foreground",
          "opacity-0 transition-all duration-200 pointer-events-none shadow-lg",
          "group-hover:opacity-100 group-hover:-bottom-9",
        )}>
          Colores
        </span>
      </button>

      {abierto && (
        <>
          {/* Capa invisible para cerrar al hacer clic fuera */}
          <div className="fixed inset-0 z-40" onClick={() => setAbierto(false)} />
          <div className={cn(
            "absolute right-0 top-12 z-50",
            "w-48 rounded-lg border border-border",
            "bg-card/95 backdrop-blur-xl shadow-xl",
            "p-3 animate-fade-in",
          )}>
            <div className="mb-2 font-mono text-xs text-muted-foreground uppercase tracking-wider">
              Paleta
            </div>
            <div className="space-y-1.5">
              {Object.entries(temas).map(([clave, tema]) => (
                <button
                  key={clave}
                  onClick={() => cambiarTema(clave)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg",
                    "transition-all duration-200 hover:bg-secondary/80",
                    temaColor === clave ? "bg-primary/10 border border-primary/50" : "border border-transparent",
                  )}
                >
                  <div className={cn("h-5 w-5 rounded-full border-2 border-border shadow-sm", degradadosTema[clave])} />
                  <span className={cn(
                    "font-mono text-sm flex-1 text-left",
                    temaColor === clave ? "text-foreground font-medium" : "text-muted-foreground",
                  )}>
                    {tema.nombre ?? tema.name}
                  </span>
                  {temaColor === clave && <div className="h-1.5 w-1.5 rounded-full bg-primary" />}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
