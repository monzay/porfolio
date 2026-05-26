'use client'

import { ThemeProvider as ProveedorNextThemes } from 'next-themes'

// Envuelve la aplicación con el proveedor de temas de next-themes
export function ThemeProvider({ children, ...propiedades }) {
  return <ProveedorNextThemes {...propiedades}>{children}</ProveedorNextThemes>
}
