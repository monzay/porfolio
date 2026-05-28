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
      status: "online",
    },
    hero: {
      tagline: "JMCode - Donde el Codigo se Encuentra con la Curiosidad",
      roles: ["construyendo interfaces", "explorando sistemas", "rompiendo barreras", "forjando ideas", "creando codigo"],
      title1: "Forjando",
      title2: "experiencias digitales",
      description: "Soy Joel Martinez, desarrollador de Jujuy, Argentina, con más de 4 años construyendo productos web. Me especializo en crear experiencias digitales modernas, rápidas y bien pensadas — desde landing pages hasta aplicaciones completas.",
      exploreBtn: "explorar artefactos",
      introBtn: "introduccion",
      terminal: "terminal://jmcode",
      experiments: "experimentos cargados",
      statusForging: "online",
      lastSpark: "ultima chispa: hoy",
      scroll: "desplazar",
    },
    projects: {
      tagline: "Proyectos",
      title: "Proyectos Destacados",
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
    contacto: {
      campos: { nombre: "nombre", email: "email", mensaje: "mensaje" },
      placeholders: {
        nombre: "Tu nombre",
        email: "tu@email.com",
        mensaje: "Cuéntame sobre tu proyecto...",
      },
      errores: {
        nombre: "El nombre debe tener al menos 2 caracteres.",
        email: "El email no es válido.",
        mensaje: "El mensaje debe tener al menos 10 caracteres.",
      },
      enviar: "enviar mensaje",
      enviando: "enviando...",
      errorGeneral: "No se pudo enviar el mensaje. Intenta de nuevo.",
      exito: {
        titulo: "¡Mensaje enviado!",
        descripcion: "Te responderé dentro de las próximas 24 horas.",
        otro: "enviar otro mensaje",
      },
    },
    whatsapp: {
      mensajePorDefecto: "Hola Joel! 👋 Vi tu portfolio y me gustaría hablar sobre un proyecto. ¿Tienes disponibilidad?",
    },
    sobreMi: {
      tagline: "Sobre mí",
      titulo: "Cómo trabajo",
      descripcion: "Trabajo de forma remota con clientes de toda Argentina y Latinoamérica. Cada proyecto arranca con una charla honesta sobre objetivos y presupuesto — sin relleno, sin promesas vacías. Me involucro desde el diseño hasta el deploy.",
      stats: [
        { valor: "100%", etiqueta: "remoto" },
        { valor: "ES/EN", etiqueta: "idiomas" },
        { valor: "UTC-3", etiqueta: "zona horaria" },
      ],
      enfoque: "Mis principios",
      items: [
        "Entregas puntuales sin excusas",
        "Comunicación directa en cada etapa",
        "Código que otros pueden mantener",
        "Sin costos ocultos ni sorpresas",
      ],
    },
    language: { switch: "EN", current: "ES" },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      workbench: "Workbench",
      services: "Services",
      status: "online",
    },
    hero: {
      tagline: "JMCode - Where Code Meets Curiosity",
      roles: ["building interfaces", "exploring systems", "breaking barriers", "forging ideas", "crafting code"],
      title1: "Forging",
      title2: "digital experiences",
      description: "I'm Joel Martinez, a developer from Jujuy, Argentina, with over 4 years building web products. I specialize in creating modern, fast, and well-crafted digital experiences — from landing pages to full applications.",
      exploreBtn: "explore artifacts",
      introBtn: "introduction",
      terminal: "terminal://jmcode",
      experiments: "experiments loaded",
      statusForging: "online",
      lastSpark: "last spark: today",
      scroll: "scroll",
    },
    projects: {
      tagline: "Projects",
      title: "Featured Projects",
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
    contacto: {
      campos: { nombre: "name", email: "email", mensaje: "message" },
      placeholders: {
        nombre: "Your name",
        email: "you@email.com",
        mensaje: "Tell me about your project...",
      },
      errores: {
        nombre: "Name must be at least 2 characters.",
        email: "Invalid email address.",
        mensaje: "Message must be at least 10 characters.",
      },
      enviar: "send message",
      enviando: "sending...",
      errorGeneral: "Failed to send the message. Please try again.",
      exito: {
        titulo: "Message sent!",
        descripcion: "I'll reply within the next 24 hours.",
        otro: "send another message",
      },
    },
    whatsapp: {
      mensajePorDefecto: "Hi Joel! 👋 I saw your portfolio and I'd like to talk about a project. Are you available?",
    },
    sobreMi: {
      tagline: "About me",
      titulo: "How I work",
      descripcion: "I work remotely with clients across Argentina and Latin America. Every project starts with an honest conversation about goals and budget — no filler, no empty promises. I'm involved from design all the way to deployment.",
      stats: [
        { valor: "100%", etiqueta: "remote" },
        { valor: "ES/EN", etiqueta: "languages" },
        { valor: "UTC-3", etiqueta: "time zone" },
      ],
      enfoque: "My principles",
      items: [
        "On-time delivery, no excuses",
        "Direct communication at every stage",
        "Code others can maintain",
        "No hidden costs or surprises",
      ],
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
