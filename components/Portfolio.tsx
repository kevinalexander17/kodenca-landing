'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Sistema de Gestión Empresarial',
    description: 'Plataforma integral para la gestión de recursos y procesos empresariales.',
    image: '/images/project1.jpg',
    category: 'ERP'
  },
  {
    title: 'E-commerce Personalizado',
    description: 'Tienda online con sistema de gestión de inventario y pagos integrado.',
    image: '/images/project2.jpg',
    category: 'Web'
  },
  {
    title: 'App Móvil de Servicios',
    description: 'Aplicación móvil para gestión de citas y servicios profesionales.',
    image: '/images/project3.jpg',
    category: 'Mobile'
  },
  {
    title: 'Dashboard Analítico',
    description: 'Panel de control con visualización de datos y métricas empresariales.',
    image: '/images/project4.jpg',
    category: 'Web'
  },
  {
    title: 'CRM Personalizado',
    description: 'Sistema de gestión de relaciones con clientes adaptado a necesidades específicas.',
    image: '/images/project5.jpg',
    category: 'CRM'
  },
  {
    title: 'Plataforma Educativa',
    description: 'Sistema de aprendizaje en línea con gestión de cursos y usuarios.',
    image: '/images/project6.jpg',
    category: 'Web'
  }
];

export default function Portfolio() {
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
          Nuestros Proyectos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-secondary text-white px-2 py-1 rounded text-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 