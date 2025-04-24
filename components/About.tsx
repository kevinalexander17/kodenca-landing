'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Lightbulb, 
  Users, 
  Globe, 
  ArrowRight,
  Trophy,
  Heart
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Enfoque en Resultados",
    description: "Nos comprometemos a entregar soluciones que generen impacto real en tu negocio"
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "Mantenemos nuestros conocimientos actualizados con las últimas tecnologías y tendencias"
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Creemos en la colaboración y el intercambio de ideas para lograr los mejores resultados"
  },
  {
    icon: Globe,
    title: "Perspectiva Global",
    description: "Desarrollamos soluciones pensando en mercados internacionales y escalabilidad"
  }
];

const milestones = [
  {
    year: "2025",
    title: "Fundación y Primeros Clientes",
    description: "Inicios de Kodenca con nuestros primeros 3 proyectos estratégicos en el mercado peruano"
  },
  {
    year: "2026",
    title: "Expansión de Servicios",
    description: "Ampliación del portafolio de soluciones tecnológicas enfocadas en crecimiento empresarial"
  },
  {
    year: "2027",
    title: "Crecimiento del Equipo",
    description: "Incorporación de nuevos talentos especializados para atender una demanda creciente"
  },
  {
    year: "2028",
    title: "Innovación Constante",
    description: "Desarrollo de soluciones propias y productos SaaS para el mercado latinoamericano"
  }
];

export default function About() {
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
            Quiénes Somos
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            Somos una startup peruana de desarrollo tecnológico, fundada en 2025 con el compromiso de potenciar negocios locales
          </p>
        </motion.div>

        {/* Historia y Misión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary">
              Nuestra Misión
            </h3>
            <p className="text-neutral">
              En Kodenca, nos dedicamos a transformar ideas en soluciones tecnológicas innovadoras adaptadas al mercado peruano. Creemos en el poder de la tecnología para impulsar el crecimiento de negocios locales con estándares internacionales.
            </p>
            <div className="flex items-center gap-4">
              <Trophy className="w-12 h-12 text-secondary" />
              <div>
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-neutral">Proyectos Exitosos</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary">
              Nuestra Visión
            </h3>
            <p className="text-neutral">
              Aspiramos a convertirnos en referentes de innovación tecnológica en Perú, creando soluciones que no solo resuelvan problemas, sino que también impulsen la transformación digital de las empresas locales.
            </p>
            <div className="flex items-center gap-4">
              <Heart className="w-12 h-12 text-secondary" />
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-neutral">Satisfacción de Clientes</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-primary text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-primary-light/5 hover:bg-primary-light/10 transition-colors"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-primary">
                  {value.title}
                </h4>
                <p className="text-neutral">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Línea de Tiempo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-primary text-center mb-12">
            Nuestra Visión de Futuro
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-light/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-1/2 p-6 rounded-xl bg-primary-light/5 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-2xl font-bold text-secondary mb-2">{milestone.year}</div>
                    <h4 className="text-xl font-semibold text-primary mb-2">{milestone.title}</h4>
                    <p className="text-neutral">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#equipo"
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors text-lg font-semibold group"
          >
            Conoce Nuestro Equipo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 