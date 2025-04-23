'use client';

import { motion } from 'framer-motion';
import { 
  Clock, 
  Shield, 
  Zap, 
  Users, 
  LineChart, 
  Code2,
  ArrowRight
} from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Desarrollamos y entregamos proyectos en tiempo récord sin comprometer la calidad",
    stats: "1-2 semanas de entrega promedio"
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Implementamos las mejores prácticas de seguridad para proteger tus datos y aplicaciones",
    stats: "100% de proyectos sin vulnerabilidades críticas"
  },
  {
    icon: Zap,
    title: "Alto Rendimiento",
    description: "Optimizamos cada aspecto para garantizar el mejor rendimiento de tus aplicaciones",
    stats: "Tiempo de carga < 2 segundos"
  },
  {
    icon: Users,
    title: "Soporte 24/7",
    description: "Nuestro equipo está disponible para resolver cualquier incidencia en cualquier momento",
    stats: "Respuesta en menos de 1 hora"
  },
  {
    icon: LineChart,
    title: "Resultados Medibles",
    description: "Implementamos métricas y análisis para demostrar el impacto en tu negocio",
    stats: "30% aumento promedio en conversiones"
  },
  {
    icon: Code2,
    title: "Código Limpio",
    description: "Desarrollamos siguiendo las mejores prácticas y estándares de la industria",
    stats: "100% de código documentado"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
      {/* Fondo con patrón */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-neutral-light max-w-2xl mx-auto">
            Nos destacamos por nuestra excelencia técnica, compromiso con los resultados y atención personalizada
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-secondary transition-all duration-300"
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-secondary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-neutral-light mb-4">
                {benefit.description}
              </p>
              <div className="text-secondary font-semibold">
                {benefit.stats}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors text-lg font-semibold group"
          >
            Comienza tu Proyecto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 