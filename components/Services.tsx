'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Code, 
  Smartphone, 
  Database, 
  GitBranch, 
  Layout, 
  Lightbulb 
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Páginas Web Profesionales',
    description: 'Diseño y desarrollo de sitios web modernos y responsivos.'
  },
  {
    icon: Code,
    title: 'Aplicaciones Web',
    description: 'Desarrollo de aplicaciones web personalizadas para tu negocio.'
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones Móviles',
    description: 'Apps nativas para Android e iOS con las últimas tecnologías.'
  },
  {
    icon: Database,
    title: 'Sistemas de Gestión',
    description: 'ERP y CRM personalizados para optimizar tus procesos.'
  },
  {
    icon: GitBranch,
    title: 'Integraciones con APIs',
    description: 'Conectamos tu sistema con otras plataformas y servicios.'
  },
  {
    icon: Layout,
    title: 'Diseño UX/UI',
    description: 'Interfaces intuitivas y atractivas para tus usuarios.'
  },
  {
    icon: Lightbulb,
    title: 'Consultoría Tecnológica',
    description: 'Asesoramiento experto para tu transformación digital.'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-6 rounded-lg border border-gray-200 hover:border-secondary transition-colors"
            >
              <service.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 