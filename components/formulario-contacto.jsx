"use client"

import { useState } from "react"
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/i18n"

// ─── Estado inicial del formulario ───────────────────────────────────────────
const ESTADO_INICIAL = { nombre: "", email: "", mensaje: "" }

// ─── Componente de campo reutilizable ────────────────────────────────────────
function Campo({ label, error, children }) {
  return (
    <div className="space-y-1.5">
      <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p className="font-mono text-xs text-destructive flex items-center gap-1">
          <AlertCircle className="h-3 w-3 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

// ─── Formulario de contacto principal ────────────────────────────────────────
export function FormularioContacto({ className }) {
  const { t } = useTranslation()
  const tc = t.contacto

  const [campos, setCampos] = useState(ESTADO_INICIAL)
  const [errores, setErrores] = useState({})
  const [estado, setEstado] = useState("idle") // idle | enviando | exito | error
  const [mensajeError, setMensajeError] = useState("")

  // Actualizar campo y limpiar su error
  const handleChange = (e) => {
    const { name, value } = e.target
    setCampos((prev) => ({ ...prev, [name]: value }))
    if (errores[name]) setErrores((prev) => ({ ...prev, [name]: "" }))
  }

  // Validación del lado del cliente
  const validarCliente = () => {
    const nuevos = {}
    if (!campos.nombre.trim() || campos.nombre.trim().length < 2)
      nuevos.nombre = tc.errores.nombre
    if (!campos.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email))
      nuevos.email = tc.errores.email
    if (!campos.mensaje.trim() || campos.mensaje.trim().length < 10)
      nuevos.mensaje = tc.errores.mensaje
    setErrores(nuevos)
    return Object.keys(nuevos).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validarCliente()) return

    setEstado("enviando")
    setMensajeError("")

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(campos),
      })
      const data = await res.json()

      if (data.ok) {
        setEstado("exito")
        setCampos(ESTADO_INICIAL)
      } else {
        setEstado("error")
        setMensajeError(data.error || tc.errorGeneral)
      }
    } catch {
      setEstado("error")
      setMensajeError(tc.errorGeneral)
    }
  }

  // ── Estado: enviado con éxito ──────────────────────────────────────────────
  if (estado === "exito") {
    return (
      <div className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-xl border border-green-500/30 bg-green-500/5 p-10 text-center",
        className
      )}>
        <CheckCircle2 className="h-10 w-10 text-green-500" />
        <p className="font-mono text-sm font-semibold text-foreground">{tc.exito.titulo}</p>
        <p className="font-mono text-xs text-muted-foreground max-w-xs">{tc.exito.descripcion}</p>
        <button
          onClick={() => setEstado("idle")}
          className="font-mono text-xs text-primary underline-offset-4 hover:underline mt-2"
        >
          {tc.exito.otro}
        </button>
      </div>
    )
  }

  const enviando = estado === "enviando"

  return (
    <form onSubmit={handleSubmit} noValidate className={cn("space-y-4", className)}>
      {/* Nombre */}
      <Campo label={tc.campos.nombre} error={errores.nombre}>
        <input
          type="text"
          name="nombre"
          value={campos.nombre}
          onChange={handleChange}
          placeholder={tc.placeholders.nombre}
          disabled={enviando}
          className={cn(
            "w-full rounded-xl border bg-card/40 px-4 py-3 font-mono text-sm outline-none transition-all duration-300",
            "placeholder:text-muted-foreground/40 focus:border-primary/60 focus:bg-card/70 focus:ring-1 focus:ring-primary/30",
            errores.nombre ? "border-destructive/60" : "border-border/60",
            "disabled:opacity-50"
          )}
        />
      </Campo>

      {/* Email */}
      <Campo label={tc.campos.email} error={errores.email}>
        <input
          type="email"
          name="email"
          value={campos.email}
          onChange={handleChange}
          placeholder={tc.placeholders.email}
          disabled={enviando}
          className={cn(
            "w-full rounded-xl border bg-card/40 px-4 py-3 font-mono text-sm outline-none transition-all duration-300",
            "placeholder:text-muted-foreground/40 focus:border-primary/60 focus:bg-card/70 focus:ring-1 focus:ring-primary/30",
            errores.email ? "border-destructive/60" : "border-border/60",
            "disabled:opacity-50"
          )}
        />
      </Campo>

      {/* Mensaje */}
      <Campo label={tc.campos.mensaje} error={errores.mensaje}>
        <textarea
          name="mensaje"
          value={campos.mensaje}
          onChange={handleChange}
          placeholder={tc.placeholders.mensaje}
          rows={4}
          disabled={enviando}
          className={cn(
            "w-full rounded-xl border bg-card/40 px-4 py-3 font-mono text-sm outline-none transition-all duration-300 resize-none",
            "placeholder:text-muted-foreground/40 focus:border-primary/60 focus:bg-card/70 focus:ring-1 focus:ring-primary/30",
            errores.mensaje ? "border-destructive/60" : "border-border/60",
            "disabled:opacity-50"
          )}
        />
      </Campo>

      {/* Error global del servidor */}
      {estado === "error" && mensajeError && (
        <p className="font-mono text-xs text-destructive flex items-center gap-1.5 rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {mensajeError}
        </p>
      )}

      {/* Botón de envío */}
      <button
        type="submit"
        disabled={enviando}
        className={cn(
          "group relative w-full overflow-hidden rounded-xl border border-primary bg-primary/10 px-6 py-3.5",
          "font-mono text-sm text-primary transition-all duration-500",
          "hover:text-primary-foreground active:scale-[0.98]",
          "disabled:opacity-60 disabled:cursor-not-allowed",
          "flex items-center justify-center gap-2.5"
        )}
      >
        <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0 group-disabled:hidden" />
        <span className="relative z-10 flex items-center gap-2.5">
          {enviando ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              {tc.enviando}
            </>
          ) : (
            <>
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              {tc.enviar}
            </>
          )}
        </span>
      </button>
    </form>
  )
}
