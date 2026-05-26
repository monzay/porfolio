// Indicador de estado pulsante reutilizado en el encabezado y pie de página
export function PuntoActivo({ className = "" }) {
  return (
    <span className={`relative flex h-2 w-2 ${className}`}>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
    </span>
  )
}
