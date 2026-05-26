import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsGrid } from "@/components/projects-grid"
import { TechStack } from "@/components/tech-stack"
import { LabNotes } from "@/components/lab-notes"
import { Workbench } from "@/components/workbench"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"
import { generarDatosSitioWeb, generarDatosPersona } from "@/lib/structured-data"

// Página principal del portafolio
export default function PaginaInicio() {
  const urlBase = process.env.NEXT_PUBLIC_SITE_URL || 'https://joelmartinez.dev'
  const datosSitio  = generarDatosSitioWeb(urlBase)
  const datosPersona = generarDatosPersona()

  return (
    <>
      {/* Datos estructurados para SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datosSitio) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datosPersona) }} />

      <main className="relative min-h-screen overflow-hidden scanlines">
        <CursorGlow />
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <ProjectsGrid />
          <TechStack />
          <LabNotes />
          <Workbench />
          <Footer />
        </div>
      </main>
    </>
  )
}
