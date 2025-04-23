'use client';

import { motion, useInView, useAnimation, LazyMotion, domAnimation } from 'framer-motion';
import { useRef, useEffect, Suspense, lazy } from 'react';
import { 
  Code2, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  ArrowRight,
  Zap,
  Rocket,
  Clock,
  Heart,
  Lightbulb,
  Target,
  Users,
  Globe,
  Award,
  TrendingUp,
  Quote,
  Star,
  CheckCircle,
  Shield
} from 'lucide-react';
import Image from 'next/image';
import InteractiveButton from '@/components/InteractiveButton';
import OptimizedImage from '@/components/OptimizedImage';

// Componentes lazy-loaded
const LazyMetricCard = lazy(() => import('@/components/MetricCard'));
const LazyServiceCard = lazy(() => import('@/components/ServiceCard'));
const LazyTestimonialCard = lazy(() => import('@/components/TestimonialCard'));
const LazySuccessStoryCard = lazy(() => import('@/components/SuccessStoryCard'));

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web Moderno",
    description: "Creamos aplicaciones web de última generación con las tecnologías más actuales",
    features: [
      "Diseño responsivo y adaptativo",
      "Optimización SEO y rendimiento",
      "Integración con servicios modernos"
    ],
    benefits: [
      "Mayor visibilidad en línea",
      "Experiencia de usuario mejorada",
      "Escalabilidad garantizada"
    ]
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description: "Desarrollamos apps nativas e híbridas con enfoque en experiencia de usuario",
    features: [
      "Diseño intuitivo y atractivo",
      "Funcionalidad offline y sincronización",
      "Notificaciones push y geolocalización"
    ],
    benefits: [
      "Mayor engagement con usuarios",
      "Acceso a nuevas funcionalidades móviles",
      "Presencia en tiendas de aplicaciones"
    ]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Avanzado",
    description: "Plataformas de comercio electrónico con las últimas tendencias en UX",
    features: [
      "Procesamiento de pagos seguro",
      "Gestión de inventario en tiempo real",
      "Análisis de comportamiento y conversión"
    ],
    benefits: [
      "Aumento en ventas online",
      "Optimización de procesos de compra",
      "Insights de comportamiento del cliente"
    ]
  },
  {
    icon: Database,
    title: "Sistemas Empresariales",
    description: "Soluciones personalizadas que optimizan tus procesos de negocio",
    features: [
      "Automatización de procesos",
      "Reportes y dashboards interactivos",
      "Integración con herramientas empresariales"
    ],
    benefits: [
      "Reducción de costos operativos",
      "Mayor eficiencia en procesos",
      "Toma de decisiones basada en datos"
    ]
  }
];

const technologies = [
  {
    name: "Frontend",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description: "Interfaces modernas y responsivas"
  },
  {
    name: "Backend",
    stack: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB"],
    description: "Arquitecturas escalables y seguras"
  },
  {
    name: "Mobile",
    stack: ["React Native", "Expo", "Redux", "Firebase", "Push Notifications"],
    description: "Apps nativas e híbridas de alto rendimiento"
  },
  {
    name: "DevOps",
    stack: ["Docker", "GitHub Actions", "AWS", "Vercel", "CI/CD"],
    description: "Despliegue continuo y monitoreo"
  }
];

const metrics = [
  {
    icon: TrendingUp,
    value: "100%",
    label: "Compromiso con resultados",
    description: "Enfoque en la satisfacción de nuestros primeros clientes"
  },
  {
    icon: Award,
    value: "3",
    label: "Proyectos exitosos",
    description: "Nuestros primeros casos de éxito en Perú"
  },
  {
    icon: Globe,
    value: "Perú",
    label: "Enfoque local",
    description: "Soluciones adaptadas al mercado peruano"
  }
];

const testimonials = [
  {
    name: "Roger Soca",
    role: "Fundador",
    company: "Virro Project",
    image: "/testimonial/logo-virro.png",
    quote: "Kodenca transformó mi idea de tienda de ropa en una realidad comercial. Su enfoque profesional y atención al detalle superaron mis expectativas.",
    rating: 5,
    project: "Plataforma de E-commerce para Moda Urbana"
  },
  {
    name: "Ana Martínez",
    role: "Gerente de Operaciones",
    company: "Farmacia San Juan",
    image: "/testimonials/ana.jpg",
    quote: "El sistema de gestión que desarrollaron redujo nuestras pérdidas de inventario en un 35%. La capacidad de respuesta del equipo fue excepcional.",
    rating: 5,
    project: "Sistema de Gestión de Inventario"
  },
  {
    name: "Luis Vargas",
    role: "CEO",
    company: "FinTrack",
    image: "/testimonials/maria.jpg",
    quote: "Nuestra app financiera ha sido un éxito gracias al trabajo de Kodenca. La calidad del desarrollo y el enfoque en UX nos permitió captar usuarios rápidamente.",
    rating: 5,
    project: "Aplicación Móvil de Gestión Financiera"
  }
];

const successStories = [
  {
    title: "FarmaStock - Sistema de Gestión de Inventario",
    description: "Desarrollo de aplicación web para gestión de inventario farmacéutico con seguimiento en tiempo real, alertas de stock y reportes avanzados",
    metrics: [
      { label: "Reducción de pérdidas", value: "35%" },
      { label: "Tiempo de desarrollo", value: "10 semanas" },
      { label: "ROI del cliente", value: "280%" }
    ],
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
    image: "/projects/ecommerce.jpg",
    demoUrl: "https://farmastock-demo.vercel.app/"
  },
  {
    title: "Virro Project - Plataforma de E-commerce para Moda Urbana",
    description: "Desarrollo de plataforma de comercio electrónico para marca de ropa urbana peruana con sistema de pagos, catálogo de productos y experiencia de compra optimizada",
    metrics: [
      { label: "Conversión", value: "25%" },
      { label: "Tiempo de desarrollo", value: "6 semanas" },
      { label: "Tráfico mensual", value: "5,000+" }
    ],
    technologies: ["Next.js", "Tailwind CSS", "Vercel", "Stripe"],
    image: "/projects/virro.jpg",
    demoUrl: "https://virroproject.vercel.app/"
  },
  {
    title: "FinTrack - Aplicación Móvil de Gestión Financiera",
    description: "Desarrollo de aplicación móvil para control de gastos personales, seguimiento de inversiones y planificación financiera con visualizaciones interactivas",
    metrics: [
      { label: "Usuarios activos", value: "10,000+" },
      { label: "Retención", value: "87%" },
      { label: "Calificación en tiendas", value: "4.8/5" }
    ],
    technologies: ["React Native", "Firebase", "Redux", "Machine Learning"],
    image: "/projects/fintech.jpg",
    demoUrl: "https://expo.dev/@kodenca/fintrack-demo"
  }
];

const urgencyElements = [
  {
    icon: Clock,
    text: "Oferta limitada: Consulta gratuita por tiempo limitado"
  },
  {
    icon: TrendingUp,
    text: "Aumenta tus ventas con tecnología de vanguardia"
  },
  {
    icon: Zap,
    text: "Desarrollo rápido y resultados inmediatos"
  }
];

const trustIndicators = [
  {
    icon: Shield,
    text: "Garantía de satisfacción"
  },
  {
    icon: Award,
    text: "Equipo certificado"
  },
  {
    icon: Globe,
    text: "Enfoque en el mercado peruano"
  }
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <section 
        ref={ref}
        className="py-12 md:py-20 bg-primary-light"
        aria-label="Nuestros servicios y capacidades"
        role="region"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Banner de Urgencia */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="bg-secondary/10 rounded-xl p-3 md:p-4 mb-8 md:mb-12"
            role="alert"
            aria-label="Ofertas y promociones"
          >
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 md:gap-4">
              {urgencyElements.map((element, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-2 text-white"
                  role="listitem"
                >
                  <element.icon className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-medium">{element.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-center mb-12 md:mb-16"
            role="banner"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white"
            >
              Innovación Tecnológica para el Mercado Peruano
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-neutral max-w-2xl mx-auto mb-6 md:mb-8 text-sm sm:text-base"
            >
              Como startup emergente, combinamos tecnología de vanguardia con un enfoque ágil y personalizado, adaptado a las necesidades específicas de empresas peruanas
            </motion.p>
            <motion.div 
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-4"
              role="list"
            >
              <Suspense fallback={<div className="min-w-[200px] h-[200px] bg-white/10 rounded-xl animate-pulse" />}>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full"
                  variants={containerVariants}
                  initial="hidden"
                  animate={controls}
                >
                  {metrics.map((metric, index) => (
                    <LazyMetricCard
                      key={index}
                      metric={metric}
                      variants={itemVariants}
                      whileHover="hover"
                    />
                  ))}
                </motion.div>
              </Suspense>
            </motion.div>
          </motion.div>

          {/* Indicadores de Confianza */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="bg-white rounded-xl p-4 sm:p-6 md:p-8 mb-12 md:mb-20"
            role="complementary"
            aria-label="Indicadores de confianza"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 md:gap-4"
                  role="listitem"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-light/10 rounded-xl flex items-center justify-center">
                    <indicator.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-base md:text-lg font-medium text-primary">{indicator.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Servicios */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="mb-12 md:mb-20"
            role="main"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-white text-center mb-8 md:mb-12"
            >
              Nuestros Servicios
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8" role="list">
              <Suspense fallback={<div className="h-[400px] bg-white/10 rounded-xl animate-pulse" />}>
                {services.map((service, index) => (
                  <LazyServiceCard
                    key={index}
                    service={service}
                    variants={itemVariants}
                    whileHover="hover"
                  />
                ))}
              </Suspense>
            </div>
          </motion.div>

          {/* CTA Intermedio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-center mb-12 md:mb-20"
            role="complementary"
            aria-label="Llamada a la acción"
          >
            <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-lg">
              <motion.h3 
                variants={itemVariants}
                className="text-xl sm:text-2xl font-semibold text-primary mb-3 md:mb-4"
              >
                ¿Quieres ser parte de nuestros primeros clientes?
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-neutral max-w-2xl mx-auto mb-4 md:mb-6 text-sm sm:text-base"
              >
                Aprovecha nuestra fase de lanzamiento con tarifas especiales y atención personalizada para los primeros proyectos en Perú
              </motion.p>
              <InteractiveButton
                href="#contacto"
                label="Agenda una Consulta Gratuita"
                variant="primary"
                size="lg"
                trackingCategory="hero"
                trackingAction="cta_click"
                trackingLabel="hero_cta"
              />
            </div>
          </motion.div>

          {/* Testimonios */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="mb-12 md:mb-20"
            role="complementary"
            aria-label="Testimonios de clientes"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-white text-center mb-8 md:mb-12"
            >
              Lo que Dicen Nuestros Primeros Clientes
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/10"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <OptimizedImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-sm md:text-base">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base">{testimonial.quote}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Casos de Éxito */}
          <motion.div
            id="casos-exito"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="mb-12 md:mb-20"
            role="complementary"
            aria-label="Casos de éxito"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-white text-center mb-8 md:mb-12"
            >
              Primeros Casos de Éxito
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8" role="list">
              <Suspense fallback={<div className="h-[400px] bg-white/10 rounded-xl animate-pulse" />}>
                {successStories.map((story, index) => (
                  <LazySuccessStoryCard
                    key={index}
                    story={story}
                    variants={itemVariants}
                    whileHover="hover"
                  />
                ))}
              </Suspense>
            </div>
          </motion.div>

          {/* CTA Final Mejorado */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-center"
            role="complementary"
            aria-label="Última llamada a la acción"
          >
            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-4 sm:p-6 md:p-8 mb-8">
              <motion.h2 
                variants={itemVariants}
                className="text-xl sm:text-2xl font-semibold text-white mb-3 md:mb-4"
              >
                ¿Listo para transformar tu negocio?
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-white/90 max-w-2xl mx-auto mb-4 md:mb-6 text-sm sm:text-base"
              >
                Sé uno de nuestros primeros clientes y lleva tu negocio al siguiente nivel con tecnología de vanguardia
              </motion.p>
              <InteractiveButton
                href="#contacto"
                label="Comienza tu Proyecto"
                variant="primary"
                size="lg"
                trackingCategory="cta"
                trackingAction="final_cta_click"
                trackingLabel="final_cta"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
} 