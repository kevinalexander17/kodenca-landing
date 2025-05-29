export const COMPANY = {
  name: 'Kodenca',
  description: 'Transformamos tus ideas en soluciones digitales',
  tagline: 'Desarrollamos aplicaciones web y móviles personalizadas que impulsan el crecimiento de tu negocio',
  email: 'info@kodenca.com',
  phone: '+1 (555) 123-4567',
  address: '123 Tech Street, Digital City, TC 12345',
  website: 'https://kodenca.com',
  social: {
    linkedin: 'https://linkedin.com/company/kodenca',
    twitter: 'https://twitter.com/kodenca',
    github: 'https://github.com/kodenca',
    facebook: 'https://facebook.com/kodenca'
  }
} as const;

export const NAVIGATION = {
  main: [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Portafolio', href: '#casos-exito' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#contacto' }
  ]
} as const;

export const HERO = {
  title: 'Transformamos tus ideas en',
  titleHighlight: 'soluciones digitales',
  subtitle: 'Desarrollamos aplicaciones web y móviles personalizadas que impulsan el crecimiento de tu negocio',
  cta: {
    primary: {
      text: 'Solicitar Consulta Gratuita',
      href: '#contacto'
    },
    secondary: {
      text: 'Ver Demostraciones',
      href: '#casos-exito'
    }
  },
  stats: [
    {
      value: '100%',
      label: 'Código Personalizado'
    },
    {
      value: '24/7',
      label: 'Soporte Técnico'
    },
    {
      value: '1-2',
      label: 'Semanas de Entrega'
    }
  ],
  media: {
    video: '/videos/hero-demo.mp4',
    poster: '/images/hero-poster.jpg',
    pattern: '/images/pattern.svg'
  }
} as const;

export const SERVICES = [
  {
    id: 'web-development',
    title: "Desarrollo Web Personalizado",
    description: "Creamos aplicaciones web a medida que se adaptan perfectamente a tus necesidades",
    benefits: [
      "Interfaz intuitiva y moderna",
      "Optimizada para todos los dispositivos",
      "Integración con tus sistemas existentes"
    ],
    technologies: ["React", "Next.js", "Node.js"],
    icon: 'Code2'
  },
  {
    id: 'mobile-development',
    title: "Aplicaciones Móviles",
    description: "Desarrollamos apps nativas e híbridas que conectan con tus clientes",
    benefits: [
      "Diseño nativo para iOS y Android",
      "Notificaciones push personalizadas",
      "Funcionamiento offline"
    ],
    technologies: ["React Native", "Flutter", "Firebase"],
    icon: 'Smartphone'
  },
  {
    id: 'ecommerce',
    title: "E-commerce Solutions",
    description: "Plataformas de comercio electrónico que impulsan tus ventas",
    benefits: [
      "Procesamiento de pagos seguro",
      "Gestión de inventario en tiempo real",
      "Análisis de comportamiento del usuario"
    ],
    technologies: ["Next.js", "Stripe", "MongoDB"],
    icon: 'ShoppingCart'
  },
  {
    id: 'management-systems',
    title: "Sistemas de Gestión",
    description: "Software empresarial que optimiza tus procesos internos",
    benefits: [
      "Automatización de tareas repetitivas",
      "Reportes y dashboards personalizados",
      "Integración con herramientas existentes"
    ],
    technologies: ["Node.js", "PostgreSQL", "Redis"],
    icon: 'Database'
  }
] as const;

export const FORM_CONFIG = {
  contact: {
    title: 'Contáctanos',
    subtitle: 'Agenda una consulta gratuita y descubre cómo podemos ayudarte a transformar tu negocio',
    fields: {
      nombres: {
        label: 'Nombre completo',
        placeholder: 'Tu nombre y apellido',
        required: true
      },
      correo: {
        label: 'Correo Electrónico',
        placeholder: 'ejemplo@empresa.com',
        required: true
      },
      empresa: {
        label: 'Empresa',
        placeholder: 'Nombre de tu empresa',
        required: false
      },
      title: {
        label: 'Asunto',
        placeholder: '¿En qué podemos ayudarte?',
        required: true
      },
      mensaje: {
        label: 'Mensaje',
        placeholder: 'Cuéntanos sobre tu proyecto o consulta',
        required: true
      }
    },
    meeting: {
      title: 'Agenda una cita',
      maxDaysAhead: 30
    },
    messages: {
      success: '¡Mensaje enviado correctamente! Te contactaremos pronto.',
      error: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.',
      submitting: 'Enviando...'
    }
  }
} as const;

export const EMAIL_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
} as const;

export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },
  staggerChildren: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      staggerChildren: 0.1
    }
  },
  float: {
    animate: {
      y: [0, -10, 0] as number[],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const,
    }
  }
} as const; 