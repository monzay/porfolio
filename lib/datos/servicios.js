import {
  Monitor, ShoppingCart, FileText, Cloud, Globe, Bot,
  MessageSquare, Code2, Zap,
} from "lucide-react"

// Configuración de servicios: datos visuales + texto bilingüe
export const servicios = [
  {
    id: 1,
    icono: Monitor,
    etiqueta: "01 — landing",
    color:  "from-cyan-500/15 to-blue-500/15",
    borde:  "hover:border-cyan-500/40",
    acento: "text-cyan-400",
    fondo:  "bg-cyan-500/10",
    es: {
      titulo: "Landing Page",
      descripcion: "Páginas de aterrizaje diseñadas para convertir visitantes en clientes. Rápidas, responsivas y optimizadas para SEO desde el primer día.",
      caracteristicas: ["Diseño a medida", "Animaciones fluidas", "Optimización SEO", "Integración de formularios"],
    },
    en: {
      titulo: "Landing Page",
      descripcion: "Landing pages designed to convert visitors into customers. Fast, responsive, and SEO-optimized from day one.",
      caracteristicas: ["Custom design", "Smooth animations", "SEO optimization", "Form integration"],
    },
  },
  {
    id: 2,
    icono: ShoppingCart,
    etiqueta: "02 — ecommerce",
    color:  "from-emerald-500/15 to-green-500/15",
    borde:  "hover:border-emerald-500/40",
    acento: "text-emerald-400",
    fondo:  "bg-emerald-500/10",
    es: {
      titulo: "E-Commerce",
      descripcion: "Tiendas online completas con carrito de compras, pasarela de pagos y panel de administración. Vende las 24 horas sin complicaciones.",
      caracteristicas: ["Carrito & pagos", "Panel de admin", "Gestión de stock", "Reportes de ventas"],
    },
    en: {
      titulo: "E-Commerce",
      descripcion: "Full online stores with shopping cart, payment gateway, and admin panel. Sell 24/7 without complications.",
      caracteristicas: ["Cart & payments", "Admin dashboard", "Stock management", "Sales reports"],
    },
  },
  {
    id: 3,
    icono: FileText,
    etiqueta: "03 — blog",
    color:  "from-violet-500/15 to-purple-500/15",
    borde:  "hover:border-violet-500/40",
    acento: "text-violet-400",
    fondo:  "bg-violet-500/10",
    es: {
      titulo: "Blog & Contenido",
      descripcion: "Plataformas de contenido modernas con editor intuitivo, categorías, etiquetas y optimización para buscadores. Tu voz en la web.",
      caracteristicas: ["CMS integrado", "Editor visual", "Categorías & tags", "RSS & sitemap"],
    },
    en: {
      titulo: "Blog & Content",
      descripcion: "Modern content platforms with intuitive editor, categories, tags, and search engine optimization. Your voice on the web.",
      caracteristicas: ["Integrated CMS", "Visual editor", "Categories & tags", "RSS & sitemap"],
    },
  },
  {
    id: 4,
    icono: Cloud,
    etiqueta: "04 — saas",
    color:  "from-orange-500/15 to-amber-500/15",
    borde:  "hover:border-orange-500/40",
    acento: "text-orange-400",
    fondo:  "bg-orange-500/10",
    es: {
      titulo: "SaaS App",
      descripcion: "Aplicaciones web como servicio con autenticación, suscripciones, dashboard y API. Desde el MVP hasta escalar con miles de usuarios.",
      caracteristicas: ["Auth & roles", "Planes & pagos", "Dashboard & métricas", "API REST"],
    },
    en: {
      titulo: "SaaS App",
      descripcion: "Web applications as a service with authentication, subscriptions, dashboard, and API. From MVP to scaling with thousands of users.",
      caracteristicas: ["Auth & roles", "Plans & payments", "Dashboard & metrics", "REST API"],
    },
  },
  {
    id: 5,
    icono: Globe,
    etiqueta: "05 — web",
    color:  "from-blue-500/15 to-indigo-500/15",
    borde:  "hover:border-blue-500/40",
    acento: "text-blue-400",
    fondo:  "bg-blue-500/10",
    es: {
      titulo: "Sitio Web",
      descripcion: "Presencia web profesional para tu negocio o marca personal. Diseño moderno, carga ultra rápida y compatible con todos los dispositivos.",
      caracteristicas: ["Diseño responsivo", "Multi-idioma", "Alta velocidad", "Mantenimiento incluido"],
    },
    en: {
      titulo: "Website",
      descripcion: "Professional web presence for your business or personal brand. Modern design, ultra-fast loading, and compatible with all devices.",
      caracteristicas: ["Responsive design", "Multi-language", "High speed", "Maintenance included"],
    },
  },
  {
    id: 6,
    icono: Bot,
    etiqueta: "06 — automation",
    color:  "from-rose-500/15 to-pink-500/15",
    borde:  "hover:border-rose-500/40",
    acento: "text-rose-400",
    fondo:  "bg-rose-500/10",
    es: {
      titulo: "Automatización de Sistemas",
      descripcion: "Scripts, bots y pipelines que eliminan tareas repetitivas. Conecta herramientas, procesa datos y deja que la tecnología trabaje por ti.",
      caracteristicas: ["Bots & scrapers", "Integración de APIs", "Pipelines de datos", "Notificaciones automáticas"],
    },
    en: {
      titulo: "System Automation",
      descripcion: "Scripts, bots, and pipelines that eliminate repetitive tasks. Connect tools, process data, and let technology work for you.",
      caracteristicas: ["Bots & scrapers", "API integration", "Data pipelines", "Automatic notifications"],
    },
  },
]

// Pasos del proceso de trabajo
export const pasos = [
  {
    numero: "01",
    icono: MessageSquare,
    es: {
      titulo: "Consulta inicial",
      descripcion: "Entendemos tu proyecto, objetivos y presupuesto. Sin compromisos, sin relleno.",
    },
    en: {
      titulo: "Initial consultation",
      descripcion: "We understand your project, goals, and budget. No commitments, no filler.",
    },
  },
  {
    numero: "02",
    icono: Code2,
    es: {
      titulo: "Desarrollo iterativo",
      descripcion: "Construcción en ciclos cortos con revisiones constantes para asegurar que el resultado sea exactamente lo que necesitas.",
    },
    en: {
      titulo: "Iterative development",
      descripcion: "Building in short cycles with constant reviews to ensure the result is exactly what you need.",
    },
  },
  {
    numero: "03",
    icono: Zap,
    es: {
      titulo: "Entrega & soporte",
      descripcion: "Lanzamos con pruebas completas y te dejamos con documentación clara y soporte post-entrega.",
    },
    en: {
      titulo: "Delivery & support",
      descripcion: "We launch with thorough testing and leave you with clear documentation and post-delivery support.",
    },
  },
]
