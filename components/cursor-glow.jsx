"use client"

import { useEffect, useState, useCallback } from "react"

// Efecto de brillo que sigue el cursor del ratón (solo en escritorio)
export function CursorGlow() {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [sobreElemento, setSobreElemento] = useState(false)

  const moverCursor = useCallback((evento) => {
    requestAnimationFrame(() => {
      setPosicion({ x: evento.clientX, y: evento.clientY })
    })
    setVisible(true)
  }, [])

  useEffect(() => {
    const salirVentana = () => setVisible(false)

    const detectarHover = (evento) => {
      // Detectar si el cursor está sobre un elemento interactivo
      const esInteractivo = evento.target.closest('a, button, [role="button"], input, textarea, select')
      setSobreElemento(!!esInteractivo)
    }

    window.addEventListener("mousemove", moverCursor, { passive: true })
    document.body.addEventListener("mouseleave", salirVentana)
    document.addEventListener("mouseover", detectarHover, { passive: true })

    return () => {
      window.removeEventListener("mousemove", moverCursor)
      document.body.removeEventListener("mouseleave", salirVentana)
      document.removeEventListener("mouseover", detectarHover)
    }
  }, [moverCursor])

  const tamano = sobreElemento ? "500px" : "400px"

  return (
    <>
      {/* Halo grande */}
      <div
        className="cursor-glow hidden lg:block pointer-events-none"
        style={{
          left: posicion.x, top: posicion.y,
          opacity: visible ? 1 : 0,
          width: tamano, height: tamano,
          transition: "opacity 0.4s ease, width 0.3s ease, height 0.3s ease",
        }}
      />
      {/* Punto pequeño */}
      <div
        className="hidden lg:block pointer-events-none fixed w-8 h-8 rounded-full mix-blend-screen"
        style={{
          left: posicion.x, top: posicion.y,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          opacity: visible ? 0.15 : 0,
          transition: "opacity 0.2s ease",
          filter: "blur(4px)",
        }}
      />
    </>
  )
}
