import Link from "next/link"

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">

      {/* Fondo glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg text-center space-y-8">

        {/* Terminal */}
        <div className="rounded-xl border border-border/60 bg-card/40 overflow-hidden text-left">
          <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/40 px-5 py-3.5">
            <div className="h-3 w-3 rounded-full bg-destructive/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-primary/60" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">terminal://jmcode</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-2">
            <div className="flex gap-3">
              <span className="text-primary shrink-0">$</span>
              <span className="text-muted-foreground">GET /página-solicitada</span>
            </div>
            <div className="flex gap-3">
              <span className="text-destructive shrink-0">✗</span>
              <span className="text-destructive/80">404 — ruta no encontrada</span>
            </div>
            <div className="flex gap-3 pt-1">
              <span className="text-primary shrink-0">$</span>
              <span className="typing-cursor text-muted-foreground/40" />
            </div>
          </div>
        </div>

        {/* Mensaje */}
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            error 404
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Página no encontrada
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            La ruta que buscás no existe o fue movida. Volvé al inicio y seguí explorando.
          </p>
        </div>

        {/* Acciones */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-primary bg-primary/10 px-7 py-3.5 font-mono text-sm text-primary transition-all duration-500 hover:text-primary-foreground active:scale-[0.98]"
          >
            <span className="relative z-10">← volver al inicio</span>
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-7 py-3.5 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground hover:bg-secondary/50 active:scale-[0.98]"
          >
            ver servicios
          </Link>
        </div>

      </div>
    </div>
  )
}
