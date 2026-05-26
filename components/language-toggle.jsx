"use client"

import { useTranslation } from "@/lib/i18n"
import { Globe } from "lucide-react"

// Botón para cambiar entre español e inglés
export function LanguageToggle() {
  const { language, setLanguage, t } = useTranslation()

  const alternarIdioma = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <button
      onClick={alternarIdioma}
      className="group relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/10"
      aria-label={`Cambiar a ${language === "es" ? "English" : "Espanol"}`}
    >
      <Globe className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-card border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-bottom-9 pointer-events-none shadow-lg">
        {t.language.switch}
      </span>
    </button>
  )
}
