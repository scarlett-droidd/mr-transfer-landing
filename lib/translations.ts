export type Language = "es" | "en"

export const translations = {
  es: {
    nav: {
      link1: "Beneficios",
      link2: "Distribución B2B",
      cta: "Contactar",
    },
    hero: {
      taglineEs: "Del boceto a la piel, sin errores.",
      taglineEn: "From Sketch to Skin. Without Mistakes.",
      cta: "Conviértete en distribuidor",
    },
    about: {
      title: "Sobre Nosotros",
      paragraph1: "MR. Transfer Lab nace de años de experiencia dentro de la industria del tatuaje.",
      paragraph2: "Después de trabajar junto a algunas de las marcas más reconocidas del mercado, creamos una alternativa enfocada en tres pilares:",
      check1: "Calidad profesional",
      check2: "Identidad de marca sólida",
      check3: "Rentabilidad real para nuestros distribuidores",
      paragraph3: "Estamos construyendo una red global de socios comerciales que crecen junto a nosotros, mientras entregan un producto confiable a los artistas de sus países.",
      imageAlt: "Mr. Transfer Lab - Sobre Nosotros",
    },
    benefits: {
      bgText: "EL PRODUCTO",
      title: "El Producto",
      subtitle: "Explora por qué MR. Transfer Lab es la herramienta que tus artistas van a preferir usar.",
      listButton: "Ver lista completa",
      closeButton: "Cerrar lista",
      helpDesktop: "Haz clic en un punto para ver los detalles.",
      helpMobile: "Toca un punto para ver los detalles.",
      items: [
        {
          title: "Transferencia clara y precisa",
          description: "Líneas y detalles se transfieren con máxima nitidez, manteniendo la fidelidad del diseño original incluso en los trazos más finos.",
        },
        {
          title: "Adherencia limpia, sin manchado",
          description: "El diseño se mantiene firme sobre la piel durante toda la sesión, con una transferencia pareja que reduce el riesgo de manchado o errores.",
        },
        {
          title: "Consistencia entre hojas",
          description: "Cada hoja de la caja ofrece el mismo resultado, sin variaciones de calidad entre unidades.",
        },
        {
          title: "Formato profesional, compatible con todo",
          description: 'Formato Letter (8.5" × 11" — 21.6 × 27.9 cm), compatible con impresoras térmicas y transferencia manual. Listo para uso profesional de tatuaje, sin curva de aprendizaje.',
        },
        {
          title: "Rendimiento pensado para tu estudio",
          description: "100 hojas por caja y 10 cajas por case (1.000 hojas en total) — el respaldo de stock que un estudio o distribuidor necesita para no quedarse corto.",
        },
      ],
      imageAlt: "Mr. Transfer Lab - Beneficios",
    },
    whyDistribute: {
      title: "Por qué distribuir MR. Transfer Lab",
      subtitle: "Beneficios diseñados para mayoristas e importadores de insumos de tatuaje.",
      services: [
        {
          title: "Identidad de Marca Fuerte",
          description: "No es un papel genérico más. Empaque y branding con carácter que el estudio recordará y volverá a pedir.",
        },
        {
          title: "Consistencia Lote a Lote",
          description: "La misma calidad premium en cada caja. Evita reclamos de tus clientes y asegura su fidelidad a largo plazo.",
        },
        {
          title: "Certeza de Suministro",
          description: "Stock garantizado para pedidos por volumen. Condiciones claras y tiempos de entrega en los que puedes confiar.",
        },
      ],
    },
    sponsorCarousel: {
      prevLabel: "Anterior",
      nextLabel: "Siguiente",
      caption: "Mr. Transfer Lab trabaja con un Pro Team de tatuadores referentes en la industria en distintos países, y sigue sumando talento de este calibre para posicionar aún más la marca.",
    },
    contactForm: {
      title: "Conviértete en distribuidor",
      subtitle: "Completa el formulario para solicitar información sobre precios por volumen, catálogo y condiciones de distribución.",
      labels: {
        name: "Nombre completo",
        company: "Nombre de la empresa / Tienda",
        email: "Correo electrónico",
        phone: "Teléfono / WhatsApp",
        details: "Volumen estimado (Cajas/mes) o Detalles adicionales",
      },
      placeholders: {
        name: "Tu nombre",
        company: "Nombre de tu negocio",
        email: "tu@correo.com",
        phone: "+56 9 1234 5678",
        details: "Cuéntanos un poco sobre tu operación...",
      },
      submitButton: "Solicitar información",
    },
    footer: {
      description: "Papel hectográfico premium diseñado para transferencias limpias y precisas.",
      globalPresenceTitle: "Presencia Global",
      globalPresenceText: "Actualmente distribuimos internacionalmente a Chile, Costa Rica, Kirguistán, Bolivia, Japón, Panamá, Colombia, Australia, Líbano y más países.",
      productTitle: "Producto",
      productLink1: "Especificaciones",
      productLink2: "Distribución B2B",
      supportTitle: "Soporte",
      supportLink1: "Contacto B2B",
      supportLink2: "Garantía y Devoluciones",
      copyright: (year: number) => `© ${year} Mr. Transfer Lab. Todos los derechos reservados.`,
      countries: [
        { name: "Chile", code: "cl" },
        { name: "Costa Rica", code: "cr" },
        { name: "Kirguistán", code: "kg" },
        { name: "Bolivia", code: "bo" },
        { name: "Japón", code: "jp" },
        { name: "Panamá", code: "pa" },
        { name: "Colombia", code: "co" },
        { name: "Australia", code: "au" },
        { name: "Líbano", code: "lb" },
      ],
    },
  },
  en: {
    nav: {
      link1: "Benefits",
      link2: "B2B Distribution",
      cta: "Contact Us",
    },
    hero: {
      taglineEs: "",
      taglineEn: "From Sketch to Skin. Without Mistakes.",
      cta: "Become a Distributor",
    },
    about: {
      title: "About Us",
      paragraph1: "MR. Transfer Lab was born from years of hands-on experience in the tattoo industry.",
      paragraph2: "After working alongside some of the most recognized brands in the market, we built an alternative focused on three pillars:",
      check1: "Professional quality",
      check2: "A strong brand identity",
      check3: "Real profitability for our distributors",
      paragraph3: "We're building a global network of business partners who grow alongside us, delivering a reliable product to artists in their own countries.",
      imageAlt: "Mr. Transfer Lab - About Us",
    },
    benefits: {
      bgText: "THE PRODUCT",
      title: "The Product",
      subtitle: "Discover why MR. Transfer Lab is the tool your artists will reach for again and again.",
      listButton: "View full list",
      closeButton: "Close list",
      helpDesktop: "Click a point to see the details.",
      helpMobile: "Tap a point to see the details.",
      items: [
        {
          title: "Clear, precise transfers",
          description: "Lines and details transfer with maximum sharpness, keeping every fine stroke true to the original design.",
        },
        {
          title: "Clean adhesion, no smudging",
          description: "The design stays put on the skin for the whole session, with an even transfer that cuts down on smudging and mistakes.",
        },
        {
          title: "Consistency, sheet after sheet",
          description: "Every sheet in the box delivers the same result, with zero quality variation from one to the next.",
        },
        {
          title: "Professional format, compatible with everything",
          description: 'Letter size (8.5" × 11" — 21.6 × 27.9 cm), compatible with both thermal printers and hand transfer. Ready for professional tattoo use, no learning curve required.',
        },
        {
          title: "Built for your studio's workload",
          description: "100 sheets per box, 10 boxes per case (1,000 sheets total) — the stock backup a studio or distributor needs to never run short.",
        },
      ],
      imageAlt: "Mr. Transfer Lab - Benefits",
    },
    whyDistribute: {
      title: "Why Distribute MR. Transfer Lab",
      subtitle: "Benefits built for wholesalers and importers of tattoo supplies.",
      services: [
        {
          title: "A Strong Brand Identity",
          description: "It's not just another generic product on the shelf. Packaging and branding with real character — the kind a studio remembers and reorders.",
        },
        {
          title: "Batch-to-Batch Consistency",
          description: "The same premium quality in every box. Fewer customer complaints, more long-term loyalty.",
        },
        {
          title: "Reliable Supply",
          description: "Guaranteed stock for volume orders, with clear terms and delivery times you can count on.",
        },
      ],
    },
    sponsorCarousel: {
      prevLabel: "Previous",
      nextLabel: "Next",
      caption: "Mr. Transfer Lab partners with a Pro Team of leading tattoo artists across different countries, and keeps adding talent of this caliber to push the brand even further.",
    },
    contactForm: {
      title: "Become a Distributor",
      subtitle: "Fill out the form to request pricing for volume orders, our catalog, and distribution terms.",
      labels: {
        name: "Full name",
        company: "Company / Shop name",
        email: "Email address",
        phone: "Phone / WhatsApp",
        details: "Estimated volume (Boxes/month) or additional details",
      },
      placeholders: {
        name: "Your name",
        company: "Your business name",
        email: "you@email.com",
        phone: "+1 234 567 8900",
        details: "Tell us a bit about your operation...",
      },
      submitButton: "Request Information",
    },
    footer: {
      description: "Premium hectographic stencil paper, built for clean, precise transfers.",
      globalPresenceTitle: "Global Presence",
      globalPresenceText: "We currently distribute internationally to Chile, Costa Rica, Kyrgyzstan, Bolivia, Japan, Panama, Colombia, Australia, Lebanon, and more countries.",
      productTitle: "Product",
      productLink1: "Specifications",
      productLink2: "B2B Distribution",
      supportTitle: "Support",
      supportLink1: "B2B Contact",
      supportLink2: "Warranty & Returns",
      copyright: (year: number) => `© ${year} Mr. Transfer Lab. All rights reserved.`,
      countries: [
        { name: "Chile", code: "cl" },
        { name: "Costa Rica", code: "cr" },
        { name: "Kyrgyzstan", code: "kg" },
        { name: "Bolivia", code: "bo" },
        { name: "Japan", code: "jp" },
        { name: "Panama", code: "pa" },
        { name: "Colombia", code: "co" },
        { name: "Australia", code: "au" },
        { name: "Lebanon", code: "lb" },
      ],
    },
  },
} as const
