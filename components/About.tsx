'use client';

import { motion } from 'framer-motion';
import { Building2, Target, Eye } from 'lucide-react';

export default function About() {
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
          Sobre Nosotros
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="p-6 rounded-lg bg-gray-50"
          >
            <Building2 className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary">Nuestra Historia</h3>
            <p className="text-gray-600">
              Kodenca nació con la visión de transformar digitalmente a las PYMEs a través de soluciones tecnológicas personalizadas. Nuestro equipo de expertos combina experiencia técnica con un profundo entendimiento de las necesidades empresariales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6 rounded-lg bg-gray-50"
          >
            <Target className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary">Misión</h3>
            <p className="text-gray-600">
              Empoderar a las pequeñas y medianas empresas con soluciones tecnológicas innovadoras que impulsen su crecimiento y competitividad en el mercado digital.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-6 rounded-lg bg-gray-50"
          >
            <Eye className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary">Visión</h3>
            <p className="text-gray-600">
              Ser el referente en desarrollo de software personalizado para PYMEs, destacando por nuestra innovación, calidad y compromiso con el éxito de nuestros clientes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 