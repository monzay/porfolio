// Funciones para generar datos estructurados (Schema.org) para SEO

export function generarDatosBlogPost(articulo, urlBase) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: articulo.title,
    description: articulo.excerpt,
    image: `${urlBase}/og-images/${articulo.slug}.png`,
    datePublished: new Date(articulo.date).toISOString(),
    dateModified: new Date(articulo.date).toISOString(),
    author: {
      '@type': 'Person',
      name: articulo.author.name,
      url: 'https://github.com/joelmartinez',
    },
    publisher: {
      '@type': 'Person',
      name: 'Joel Martinez',
      url: 'https://joelmartinez.dev',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${urlBase}/blog/${articulo.slug}`,
    },
    articleSection: articulo.category,
    keywords: articulo.tags.join(', '),
    timeRequired: articulo.readTime,
  }
}

export function generarDatosSitioWeb(urlBase) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'JMCODE',
    description: "Un taller digital donde el codigo se encuentra con la curiosidad.",
    url: urlBase,
    author: {
      '@type': 'Person',
      name: 'Joel Martinez',
      url: 'https://github.com/joelmartinez',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${urlBase}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generarDatosPersona() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Joel Martinez',
    url: 'https://joelmartinez.dev',
    image: 'https://joelmartinez.dev/developer-portrait.png',
    sameAs: [
      'https://github.com/joelmartinez',
      'https://linkedin.com/in/joelmartinez',
    ],
    jobTitle: 'Desarrollador de Software',
    description: 'Desarrollador con 4 anos de experiencia',
    email: 'jm8587700@gmail.com',
    telephone: '+54 388 470 8347',
    worksFor: { '@type': 'Organization', name: 'JMCODE' },
  }
}

export function generarDatosMigasPan(elementos) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: elementos.map((item, indice) => ({
      '@type': 'ListItem',
      position: indice + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Retrocompatibilidad con nombres en inglés
export const generateWebsiteStructuredData = generarDatosSitioWeb
export const generatePersonStructuredData = generarDatosPersona
export const generateBlogPostStructuredData = generarDatosBlogPost
export const generateBreadcrumbStructuredData = generarDatosMigasPan
