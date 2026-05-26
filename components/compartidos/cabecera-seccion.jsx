// Cabecera reutilizable para todas las secciones del portafolio
export function CabeceraSeccion({ etiqueta, titulo, descripcion, className = "" }) {
  return (
    <div className={`space-y-3 animate-fade-in-up ${className}`}>
      <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
        {etiqueta}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {titulo}
      </h2>
      {descripcion && (
        <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          {descripcion}
        </p>
      )}
    </div>
  )
}
