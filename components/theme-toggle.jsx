"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

// Botón para alternar entre modo claro y oscuro
export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [montado, setMontado] = useState(false)

  useEffect(() => { setMontado(true) }, [])

  // Esqueleto mientras carga para evitar desajuste de hidratación
  if (!montado) {
    return (
      <div className="flex h-8 w-8 items-center justify-center">
        <div className="h-4 w-4 animate-pulse rounded bg-muted" />
      </div>
    )
  }

  const opcionesTema = [
    { valor: "light", Icono: Sun,  etiqueta: "Light" },
    { valor: "dark",  Icono: Moon, etiqueta: "Dark"  },
  ]

  const temaActual = theme ?? "dark"
  const temaResuelto = resolvedTheme ?? temaActual

  // Determinar el ícono a mostrar según el tema resuelto
  const opcionActual = opcionesTema.find(op => op.valor === temaResuelto) ?? opcionesTema[1]
  const IconoActual = opcionActual.Icono

  // Calcular el siguiente tema en el ciclo
  const indiceActual = opcionesTema.findIndex(op => op.valor === temaActual)
  const siguienteOpcion = opcionesTema[(indiceActual + 1) % opcionesTema.length]

  return (
    <button
      onClick={() => setTheme(siguienteOpcion.valor)}
      className={cn(
        "group relative flex size-8 items-center justify-center rounded",
        "text-muted-foreground transition-all duration-200 hover:text-primary"
      )}
      aria-label={`Cambiar a tema ${siguienteOpcion.etiqueta}`}
    >
      <IconoActual className="size-4" />
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-card px-2 py-0.5 font-mono text-[10px] text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {temaResuelto}
      </span>
    </button>
  )
}
