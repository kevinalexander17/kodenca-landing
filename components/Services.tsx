'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  LineChart, 
  Users,
  Shield,
  Zap
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web Personalizado",
    description: "Creamos aplicaciones web a medida que se adaptan perfectamente a tus necesidades",
    benefits: [
      "Interfaz intuitiva y moderna",
      "Optimizada para todos los dispositivos",
      "Integración con tus sistemas existentes"
    ],
    technologies: ["React", "Next.js", "Node.js"]
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description: "Desarrollamos apps nativas e híbridas que conectan con tus clientes",
    benefits: [
      "Diseño nativo para iOS y Android",
      "Notificaciones push personalizadas",
      "Funcionamiento offline"
    ],
    technologies: ["React Native", "Flutter", "Firebase"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Plataformas de comercio electrónico que impulsan tus ventas",
    benefits: [
      "Procesamiento de pagos seguro",
      "Gestión de inventario en tiempo real",
      "Análisis de comportamiento del usuario"
    ],
    technologies: ["Next.js", "Stripe", "MongoDB"]
  },
  {
    icon: Database,
    title: "Sistemas de Gestión",
    description: "Software empresarial que optimiza tus procesos internos",
    benefits: [
      "Automatización de tareas repetitivas",
      "Reportes y dashboards personalizados",
      "Integración con herramientas existentes"
    ],
    technologies: ["Node.js", "PostgreSQL", "Redis"]
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Nuestros Servicios
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para impulsar el crecimiento de tu negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary mb-2">Beneficios:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                          <span className="text-neutral text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-neutral mb-6">
              Cada negocio es único. Desarrollamos soluciones a medida que se adaptan perfectamente a tus necesidades específicas.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Solicitar Consulta Personalizada
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 