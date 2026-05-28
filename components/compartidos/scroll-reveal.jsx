"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

/**
 * Componente envolvente que aplica Scroll Reveal al entrar en el viewport.
 *
 * Efectos disponibles:
 *   "fade-up"    — aparece desde abajo (default)
 *   "fade-in"    — aparece en su lugar
 *   "scale"      — aparece escalando desde 94%
 *   "slide-left" — aparece desde la izquierda
 *   "slide-right"— aparece desde la derecha
 *
 * @example
 * <ScrollReveal efecto="fade-up" retraso={200}>
 *   <MiComponente />
 * </ScrollReveal>
 */
export function ScrollReveal({
  children,
  className = "",
  efecto = "fade-up",
  retraso = 0,
  duracion = 650,
  umbral = 0.12,
  tag: Tag = "div",
  ...props
}) {
  const ref = useScrollReveal({ umbral })

  return (
    <Tag
      ref={ref}
      className={cn(`sr-${efecto}`, className)}
      style={{
        transitionDuration: `${duracion}ms`,
        ...(retraso > 0 && { transitionDelay: `${retraso}ms` }),
      }}
      {...props}
    >
      {children}
    </Tag>
  )
}
