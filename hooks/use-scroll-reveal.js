"use client"

import { useEffect, useRef } from "react"

/**
 * Hook que usa IntersectionObserver para detectar cuando un elemento
 * entra en el viewport y agregarle la clase "sr-visible".
 *
 * @param {object} opciones
 * @param {number} opciones.umbral     - Porcentaje visible para disparar (0-1). Default: 0.12
 * @param {boolean} opciones.unaVez   - Animar solo la primera vez. Default: true
 * @returns {React.RefObject} ref - Adjuntar al elemento a observar
 */
export function useScrollReveal({ umbral = 0.12, unaVez = true } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const elemento = ref.current
    if (!elemento || typeof IntersectionObserver === "undefined") return

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          elemento.classList.add("sr-visible")
          if (unaVez) observador.unobserve(elemento)
        } else if (!unaVez) {
          elemento.classList.remove("sr-visible")
        }
      },
      { threshold: umbral },
    )

    observador.observe(elemento)
    return () => observador.disconnect()
  }, [umbral, unaVez])

  return ref
}
