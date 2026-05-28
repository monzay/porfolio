"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, X, Zap, Database } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { urlWhatsapp } from "@/lib/datos/redes-sociales"
import { ScrollReveal } from "@/components/compartidos/scroll-reveal"
import { PuntoActivo } from "@/components/compartidos/punto-activo"
import { cn } from "@/lib/utils"

// ─── Datos de precios ─────────────────────────────────────────────────────────
const PLANES = [
  {
    key: "estatica",
    precio: "$250",
    moneda: "USD",
    desde: false,
    destacado: false,
    Icono: Zap,
    acento: "text-sky-400",
    borde: "border-sky-500/30",
    anillo: "ring-sky-500/20",
    boton: "border-sky-500/50 bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white hover:border-sky-500",
    es: {
      tipo: "Web Estática",
      tagline: "Rápida · Simple · Efectiva",
      descripcion: "Ideal para negocios, emprendedores y marcas personales que necesitan una web moderna, rápida y efectiva. Sin complicaciones técnicas, sin panel de administración. Entrega en 7–14 días hábiles.",
      incluye: [
        "Hasta 6 secciones / páginas",
        "Diseño 100% responsivo",
        "Formulario de contacto",
        "Optimización SEO básica",
        "Integración con WhatsApp",
        "Velocidad de carga < 1 seg",
      ],
      noIncluye: ["Panel de admin", "Base de datos", "Usuarios", "Pagos online"],
      idealPara: ["Landing pages", "Portfolios", "Negocios locales"],
      cta: "Quiero mi web estática",
    },
    en: {
      tipo: "Static Website",
      tagline: "Fast · Simple · Effective",
      descripcion: "Ideal for businesses, entrepreneurs, and personal brands that need a modern, fast, and effective website. No technical complications, no admin panel. Delivery in 7–14 business days.",
      incluye: [
        "Up to 6 sections / pages",
        "100% responsive design",
        "Contact form",
        "Basic SEO optimization",
        "WhatsApp integration",
        "Loading speed < 1 sec",
      ],
      noIncluye: ["Admin panel", "Database", "User accounts", "Online payments"],
      idealPara: ["Landing pages", "Portfolios", "Local businesses"],
      cta: "I want my static site",
    },
  },
  {
    key: "dinamica",
    precio: "$850",
    moneda: "USD",
    desde: true,
    destacado: true,
    Icono: Database,
    acento: "text-primary",
    borde: "border-primary/50",
    anillo: "ring-primary/25",
    boton: "border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
    es: {
      tipo: "Web Dinámica",
      tagline: "Potente · Escalable · Completa",
      descripcion: "Para negocios que necesitan más que una web estática: plataformas con usuarios registrados, paneles de administración o cualquier lógica de negocio personalizada. El precio final se define según la complejidad del proyecto. Plazo estimado: 3–6 semanas.",
      incluye: [
        "Todo lo de la web estática",
        "Panel de administración",
        "Base de datos (MySQL / PostgreSQL)",
        "Autenticación de usuarios",
        "Gestión de contenido (CMS)",
      ],
      noIncluye: [],
      idealPara: ["E-commerce", "SaaS", "Blogs con CMS"],
      nota: "",
      cta: "Quiero mi web dinámica",
    },
    en: {
      tipo: "Dynamic Website",
      tagline: "Powerful · Scalable · Complete",
      descripcion: "For businesses that need more than a static site: platforms with registered users, admin panels, or any custom business logic. Final price is defined based on project complexity. Estimated timeline: 3–6 weeks.",
      incluye: [
        "Everything in the static site",
        "Admin panel",
        "Database (MySQL / PostgreSQL)",
        "User authentication",
        "Content management (CMS)",
      ],
      noIncluye: [],
      idealPara: ["E-commerce", "SaaS", "Blogs with CMS"],
      nota: "",
      cta: "I want my dynamic site",
    },
  },
]

const FAQ = {
  es: [
    { q: "¿Necesito algo entre los dos planes?", a: "Hablamos y armo una cotización personalizada según tu proyecto." },
    { q: "¿El precio incluye dominio y hosting?", a: "No, pero te ayudo con el mantenimiento para que el dominio siga siendo tuyo y tu página permanezca activa en internet." },
  ],
  en: [
    { q: "What if I need something between both plans?", a: "Let's talk and I'll put together a custom quote for your project." },
    { q: "Does the price include domain and hosting?", a: "No, but I'll help with maintenance so your domain stays yours and your site remains online." },
  ],
}

// ─── Tarjeta de plan ──────────────────────────────────────────────────────────
function TarjetaPlan({ plan, language, urlWa }) {
  const t = language === "en" ? plan.en : plan.es
  const Icono = plan.Icono

  return (
    <div className={cn(
      "relative flex flex-col h-full rounded-2xl border bg-card/50 p-8 sm:p-10 transition-all duration-300",
      plan.borde,
      plan.destacado && `ring-1 ${plan.anillo} shadow-lg shadow-primary/5`,
    )}>

      {/* Cabecera */}
      <div className="flex items-center gap-3 mb-8">
        <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-secondary/40")}>
          <Icono className={cn("h-5 w-5", plan.acento)} />
        </div>
        <div>
          <p className="font-bold leading-tight">{t.tipo}</p>
          <p className={cn("font-mono text-[11px]", plan.acento)}>{t.tagline}</p>
        </div>
      </div>

      {/* Precio */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1.5 mb-1">
          {plan.desde && (
            <span className="font-mono text-sm text-muted-foreground">{language === "en" ? "from" : "desde"}</span>
          )}
          <span className="text-5xl sm:text-6xl font-bold tracking-tighter">{plan.precio}</span>
          <span className="font-mono text-sm text-muted-foreground">{plan.moneda}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{t.descripcion}</p>
      </div>

      {/* Divisor */}
      <div className="border-t border-border/40 mb-6" />

      {/* Features */}
      <ul className="space-y-2.5 mb-6 flex-1">
        {t.incluye.map(item => (
          <li key={item} className="flex items-center gap-2.5 text-sm">
            <Check className={cn("h-4 w-4 shrink-0", plan.acento)} />
            {item}
          </li>
        ))}
        {t.noIncluye.map(item => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground/40">
            <X className="h-4 w-4 shrink-0 text-muted-foreground/25" />
            {item}
          </li>
        ))}
      </ul>

      {/* Nota */}
      {t.nota && (
        <p className="mb-6 rounded-lg border border-border/40 bg-secondary/20 px-3.5 py-2.5 font-mono text-[11px] text-muted-foreground/70 leading-relaxed">
          {t.nota}
        </p>
      )}

      {/* CTA */}
      <a
        href={urlWa}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group inline-flex items-center justify-center gap-2.5 rounded-xl border px-6 py-3.5 font-mono text-sm font-medium transition-all duration-300 active:scale-[0.98]",
          plan.boton,
        )}
      >
        {t.cta}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  )
}

// ─── Página ───────────────────────────────────────────────────────────────────
export default function PaginaPrecios() {
  const { t, language } = useTranslation()
  const urlWa = urlWhatsapp(t.whatsapp.mensajePorDefecto)
  const esEs = language === "es"
  const faq = esEs ? FAQ.es : FAQ.en

  return (
    <div className="relative px-4 sm:px-6 pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="mx-auto max-w-5xl space-y-20">

        {/* Volver */}
        <ScrollReveal efecto="fade-in">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            {esEs ? "volver a servicios" : "back to services"}
          </Link>
        </ScrollReveal>

        {/* Hero */}
        <ScrollReveal efecto="fade-up" className="space-y-5 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            {esEs ? "jmcode — precios" : "jmcode — pricing"}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {esEs ? (
              <>Precios <span className="bg-linear-to-l from-primary/50 to-accent text-transparent bg-clip-text">transparentes</span></>
            ) : (
              <>Transparent <span className="bg-linear-to-l from-primary/50 to-accent text-transparent bg-clip-text">pricing</span></>
            )}
          </h1>
          <p className="mx-auto max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed">
            {esEs
              ? "Sin costos ocultos, sin sorpresas. Elegís el plan que mejor se adapta a tu proyecto."
              : "No hidden costs, no surprises. Choose the plan that best fits your project."}
          </p>
          <div className="flex items-center justify-center gap-3 pt-1 font-mono text-xs text-muted-foreground">
            <PuntoActivo />
            {esEs ? "disponible para proyectos · respuesta en < 24 h" : "available for projects · response in < 24 h"}
          </div>
        </ScrollReveal>

        {/* Planes */}
        <div className="grid gap-6 sm:grid-cols-2 items-start">
          {PLANES.map((plan, i) => (
            <ScrollReveal
              key={plan.key}
              efecto={i === 0 ? "slide-left" : "slide-right"}
              retraso={i * 80}
            >
              <TarjetaPlan plan={plan} language={language} urlWa={urlWa} />
            </ScrollReveal>
          ))}
        </div>

        {/* FAQ */}
        <ScrollReveal efecto="fade-up">
          <div className="space-y-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary text-center">
              {esEs ? "preguntas frecuentes" : "faq"}
            </p>
            <div className="grid gap-0 rounded-2xl border border-border/60 overflow-hidden divide-y divide-border/60">
              {faq.map(({ q, a }, i) => (
                <div key={i} className="flex gap-6 px-7 py-6 bg-card/30 hover:bg-card/60 transition-colors duration-200">
                  <span className="font-mono text-xs text-primary mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-1.5">
                    <p className="text-sm font-semibold leading-snug">{q}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
