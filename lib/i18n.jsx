"use client"

import { createContext, useContext, useState, useEffect } from "react"

// Traducciones completas del sitio en español e inglés
export const traducciones = {
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      workbench: "Taller",
      services: "Servicios",
      status: "estado: construyendo",
    },
    hero: {
      tagline: "JMCode - Donde el Codigo se Encuentra con la Curiosidad",
      roles: ["construyendo interfaces", "explorando sistemas", "rompiendo barreras", "forjando ideas", "creando codigo"],
      title1: "Forjando",
      title2: "experiencias digitales",
      description: "Bienvenido a mi taller digital - un espacio para experimentos, prototipos y artefactos de codigo abierto. Actualmente con 4 anos de experiencia en desarrollo. Aqui, las ideas se forjan, prueban y refinan. No es un portafolio. Es un laboratorio.",
      exploreBtn: "explorar artefactos",
      introBtn: "introduccion",
      terminal: "terminal://jmcode",
      experiments: "experimentos cargados",
      statusForging: "estado: forjando",
      lastSpark: "ultima chispa: hoy",
      scroll: "desplazar",
    },
    projects: {
      tagline: "Artefactos",
      title: "Proyectos de Codigo Abierto",
      filters: {
        all: "todos",
        shipped: "completado",
        "in-progress": "en progreso",
        archived: "archivado",
        publicado: "completado",
        "en-progreso": "en progreso",
        archivado: "archivado",
      },
      featured: "Destacado",
      source: "codigo",
      live: "ver",
    },
    notes: {
      tagline: "Notas de Campo",
      title: "Notas del Laboratorio",
      description: "Breves observaciones, hallazgos tecnicos y pensamientos desde el banco de trabajo.",
      readMore: "leer mas",
      categories: { systems: "sistemas", ai: "ia", frontend: "frontend" },
    },
    workbench: {
      tagline: "Trabajo en Progreso",
      title: "Taller",
      description: "Experimentos y prototipos activos. Cosas que se estan construyendo, rompiendo y reconstruyendo.",
      terminal: "~/joelmartinez/activo",
      live: "en vivo",
      command: "git status --all",
      pressEnter: "presiona enter para ejecutar",
    },
    stack: {
      tagline: "Arsenal",
      title: "Herramientas & Tecnologias",
      description: "Las tecnologias con las que construyo productos, desde la interfaz hasta la base de datos.",
      categories: {
        frontend: "frontend",
        backend: "backend",
        baseDatos: "base de datos",
        herramientas: "herramientas",
      },
      total: "tecnologias en el arsenal",
    },
    footer: {
      tagline: "Conectar",
      title1: "Construyamos algo",
      title2: "juntos",
      description: "Siempre interesado en colaboraciones, problemas interesantes y conversaciones sobre codigo, diseno y todo lo demas.",
      sendSignal: "enviar mensaje",
      findElsewhere: "Encuantrame en otro lugar",
      forgedWith: "Forjado con",
      andCode: "y codigo",
      allRights: "Todos los experimentos reservados",
      whatsappBtn: "WhatsApp",
    },
    servicios: {
      hero: {
        tagline: "jmcode — servicios",
        titulo1: "Construyo lo que",
        titulo2: "necesitas",
        descripcion: "Desarrollo web a medida, desde una landing page hasta un sistema completo. Código limpio, entrega puntual y resultados reales.",
        btnPrimario: "hablemos del proyecto",
        btnSecundario: "ver servicios",
        disponible: "disponible para proyectos — respuesta en < 24 h",
        terminal: "~/jmcode/servicios",
        activo: "activo",
        expBadge: "4 años exp.",
      },
      seccion: {
        tagline: "lo que construyo",
        titulo: "Servicios",
        descripcion: "Cada proyecto es único. Trabajo contigo para entender qué necesitas y entregarlo con calidad.",
      },
      proceso: {
        tagline: "cómo trabajo",
        titulo: "El proceso",
      },
      cta: {
        tagline: "hablemos",
        titulo: "¿Tienes un proyecto en mente?",
        descripcion: "Cuéntame qué necesitas. Ya sea una idea en papel o un proyecto a medio construir, puedo ayudarte a llevarlo al siguiente nivel.",
        btnEmail: "enviar correo",
        btnWhatsapp: "WhatsApp",
        contacto: "jm8587700@gmail.com · +54 388 470 8347",
      },
    },
    whatsapp: {
      mensajePorDefecto: "Hola Joel! 👋 Vi tu portfolio y me gustaría hablar sobre un proyecto. ¿Tienes disponibilidad?",
    },
    language: { switch: "EN", current: "ES" },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      workbench: "Workbench",
      services: "Services",
      status: "status: building",
    },
    hero: {
      tagline: "JMCode - Where Code Meets Curiosity",
      roles: ["building interfaces", "exploring systems", "breaking barriers", "forging ideas", "crafting code"],
      title1: "Forging",
      title2: "digital experiences",
      description: "Welcome to my digital workshop - a space for experiments, prototypes, and open-source artifacts. Currently with 4 years of development experience. Here, ideas are forged, tested, and refined. Not a portfolio. A laboratory.",
      exploreBtn: "explore artifacts",
      introBtn: "introduction",
      terminal: "terminal://jmcode",
      experiments: "experiments loaded",
      statusForging: "status: forging",
      lastSpark: "last spark: today",
      scroll: "scroll",
    },
    projects: {
      tagline: "Artifacts",
      title: "Open Source Projects",
      filters: {
        all: "all",
        shipped: "shipped",
        "in-progress": "in-progress",
        archived: "archived",
        publicado: "shipped",
        "en-progreso": "in-progress",
        archivado: "archived",
      },
      featured: "Featured",
      source: "source",
      live: "live",
    },
    notes: {
      tagline: "Field Notes",
      title: "Lab Notes",
      description: "Brief observations, technical findings, and thoughts from the workbench.",
      readMore: "read more",
      categories: { systems: "systems", ai: "ai", frontend: "frontend" },
    },
    workbench: {
      tagline: "Work in Progress",
      title: "Workbench",
      description: "Active experiments and prototypes. Things that are being built, broken, and rebuilt.",
      terminal: "~/joelmartinez/active",
      live: "live",
      command: "git status --all",
      pressEnter: "press enter to run",
    },
    stack: {
      tagline: "Arsenal",
      title: "Tools & Technologies",
      description: "The technologies I use to build products, from the interface to the database.",
      categories: {
        frontend: "frontend",
        backend: "backend",
        baseDatos: "database",
        herramientas: "tools",
      },
      total: "technologies in the arsenal",
    },
    footer: {
      tagline: "Connect",
      title1: "Let's build something",
      title2: "together",
      description: "Always interested in collaborations, interesting problems, and conversations about code, design, and everything in between.",
      sendSignal: "send a message",
      findElsewhere: "Find me elsewhere",
      forgedWith: "Forged with",
      andCode: "& code",
      allRights: "All experiments reserved",
      whatsappBtn: "WhatsApp",
    },
    servicios: {
      hero: {
        tagline: "jmcode — services",
        titulo1: "I build what",
        titulo2: "you need",
        descripcion: "Custom web development, from a landing page to a complete system. Clean code, on-time delivery, and real results.",
        btnPrimario: "let's talk about the project",
        btnSecundario: "see services",
        disponible: "available for projects — response in < 24 h",
        terminal: "~/jmcode/services",
        activo: "active",
        expBadge: "4 years exp.",
      },
      seccion: {
        tagline: "what I build",
        titulo: "Services",
        descripcion: "Every project is unique. I work with you to understand what you need and deliver it with quality.",
      },
      proceso: {
        tagline: "how I work",
        titulo: "The process",
      },
      cta: {
        tagline: "let's talk",
        titulo: "Do you have a project in mind?",
        descripcion: "Tell me what you need. Whether it's an idea on paper or a half-built project, I can help you take it to the next level.",
        btnEmail: "send email",
        btnWhatsapp: "WhatsApp",
        contacto: "jm8587700@gmail.com · +54 388 470 8347",
      },
    },
    whatsapp: {
      mensajePorDefecto: "Hi Joel! 👋 I saw your portfolio and I'd like to talk about a project. Are you available?",
    },
    language: { switch: "ES", current: "EN" },
  },
}

// Retrocompatibilidad con nombre en inglés
export const translations = traducciones

const ContextoTraduccion = createContext(undefined)

export function TranslationProvider({ children }) {
  const [idioma, setIdioma] = useState("es")
  const [montado, setMontado] = useState(false)

  // Leer idioma guardado en localStorage al montar
  useEffect(() => {
    setMontado(true)
    const idiomaGuardado = localStorage.getItem("language")
    if (idiomaGuardado === "es" || idiomaGuardado === "en") {
      setIdioma(idiomaGuardado)
    }
  }, [])

  // Persistir idioma cuando cambie
  useEffect(() => {
    if (montado) localStorage.setItem("language", idioma)
  }, [idioma, montado])

  const t = traducciones[idioma]

  return (
    <ContextoTraduccion.Provider value={{ language: idioma, setLanguage: setIdioma, t }}>
      {children}
    </ContextoTraduccion.Provider>
  )
}

export function useTranslation() {
  const contexto = useContext(ContextoTraduccion)
  if (!contexto) throw new Error("useTranslation debe usarse dentro de TranslationProvider")
  return contexto
}
