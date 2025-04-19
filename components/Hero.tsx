'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-red-500"
        >
          Desarrollamos software a medida para tu negocio
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          Apps web, móviles y sistemas personalizados para PYMEs
        </motion.p>

        <motion.a
          href="#contacto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
        >
          Contáctanos
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
} 