import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { TranslationProvider } from "@/lib/i18n"
import "./globals.css"

// Configuración de fuentes tipográficas
const geist = Geist({ subsets: ["latin"], variable: '--font-geist', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk', display: 'swap' })

// Metadatos del sitio para SEO y redes sociales
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://joelmartinez.dev'),
  title: {
    default: "JMCODE - Laboratorio Digital de Joel Martinez",
    template: "%s | JMCODE",
  },
  description: "Un taller digital donde el codigo se encuentra con la curiosidad. Experimentos, prototipos y artefactos de codigo abierto por Joel Martinez.",
  keywords: ["Ingenieria de Software", "Desarrollo Web", "Next.js", "React", "Experimentos de Codigo"],
  authors: [{ name: "Joel Martinez", url: "https://github.com/joelmartinez" }],
  creator: "Joel Martinez",
  publisher: "Joel Martinez",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    title: "JMCODE - Laboratorio Digital de Joel Martinez",
    description: "Un taller digital donde el codigo se encuentra con la curiosidad.",
    siteName: "JMCODE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "JMCODE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JMCODE - Laboratorio Digital de Joel Martinez",
    description: "Un taller digital donde el codigo se encuentra con la curiosidad.",
    creator: "@joelmartinez",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png",  media: "(prefers-color-scheme: dark)"  },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

// Diseño raíz de la aplicación con proveedores de tema e idioma
export default function LayoutRaiz({ children }) {
  const clasesFuentes = `${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`

  return (
    <html lang="es" suppressHydrationWarning className={clasesFuentes}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          <TranslationProvider>
            {children}
          </TranslationProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
