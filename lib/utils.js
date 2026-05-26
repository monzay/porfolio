import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Combina clases de Tailwind eliminando conflictos
export function cn(...entradas) {
  return twMerge(clsx(entradas))
}
