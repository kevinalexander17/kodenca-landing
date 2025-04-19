'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Users, 
  Headphones, 
  Shield, 
  TrendingUp, 
  Zap, 
  DollarSign 
} from 'lucide-react';

const benefits = [
  {
    icon: Code2,
    title: 'Desarrollo personalizado',
    description: 'Soluciones adaptadas a tus necesidades específicas.'
  },
  {
    icon: Users,
    title: 'Acompañamiento técnico',
    description: 'Soporte continuo durante todo el proceso de desarrollo.'
  },
  {
    icon: Headphones,
    title: 'Soporte post-lanzamiento',
    description: 'Asistencia técnica y mantenimiento después del despliegue.'
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Implementación de las mejores prácticas de seguridad.'
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidad',
    description: 'Soluciones preparadas para crecer con tu negocio.'
  },
  {
    icon: Zap,
    title: 'Tecnología moderna',
    description: 'Uso de las últimas tecnologías y frameworks.'
  },
  {
    icon: DollarSign,
    title: 'Adaptabilidad al presupuesto',
    description: 'Soluciones flexibles que se ajustan a tu inversión.'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          Beneficios de trabajar con Kodenca
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <benefit.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 