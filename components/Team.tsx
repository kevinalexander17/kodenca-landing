'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Globe, Code, Database, Zap } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Kevin Alexander Quispe Román",
    role: "CEO & Senior Developer",
    image: "https://ui-avatars.com/api/?name=Kevin+Quispe&background=0D8ABC&color=fff&size=300",
    linkedin: "https://www.linkedin.com/in/kevinalexanderquisperoman/",
    github: "https://github.com/kevinalexander17",
    experience: "4+ años",
    description: "Ingeniero y desarrollador con experiencia en aplicaciones web modernas y soluciones empresariales. Especializado en arquitectura de software y experiencia de usuario.",
    skills: ["Full Stack Development", "UI/UX Design", "Project Management"],
    specialties: [
      { icon: Code, text: "Frontend experto" },
      { icon: Database, text: "Backend robusto" },
      { icon: Zap, text: "Optimización de rendimiento" }
    ]
  },
  {
    name: "Luis Miguel Canales Espinoza",
    role: "Senior Developer",
    image: "https://ui-avatars.com/api/?name=Luis+Canales&background=0D8ABC&color=fff&size=300",
    linkedin: "https://www.linkedin.com/in/luis-miguel-canales-espinoza-51397182/",
    github: "https://github.com/luismiguel",
    experience: "10+ años",
    description: "Desarrollador senior con amplia experiencia en sistemas complejos y aplicaciones empresariales. Especializado en arquitecturas escalables y seguras.",
    skills: ["Arquitectura de Software", "Cloud Infrastructure", "Sistemas de Alta Disponibilidad"],
    specialties: [
      { icon: Code, text: "Sistemas distribuidos" },
      { icon: Database, text: "Bases de datos avanzadas" },
      { icon: Zap, text: "Arquitecturas cloud" }
    ]
  },
  {
    name: "Analy Quesquen Carvallo",
    role: "Senior QA Engineer",
    image: "https://ui-avatars.com/api/?name=Analy+Quesquen&background=0D8ABC&color=fff&size=300",
    linkedin: "https://www.linkedin.com/in/analyquesquencarvallo/",
    github: "https://github.com/analyqc",
    experience: "10+ años",
    description: "Ingeniera de calidad con extensa experiencia asegurando la excelencia en productos de software. Especializada en pruebas automatizadas y mejora continua de procesos.",
    skills: ["Test Automation", "QA Processes", "CI/CD Integration"],
    specialties: [
      { icon: Code, text: "Testing automatizado" },
      { icon: Database, text: "QA de integración" },
      { icon: Zap, text: "Procesos ágiles" }
    ]
  }
];

export default function Team() {
  return (
    <section id="equipo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Nuestro Equipo
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            Un equipo experimentado con más de 24 años de experiencia combinada, construyendo soluciones innovadoras para el mercado peruano
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-primary-light/5 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/50 z-10" />
                <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity duration-300" />
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={500} 
                  height={500} 
                  className="object-cover w-full h-full"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-white/90">{member.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium text-white bg-secondary rounded-full">
                    {member.experience} de experiencia
                  </span>
                </div>
                
                <p className="text-neutral mb-4">
                  {member.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2">Especialidades</h4>
                  <div className="space-y-2">
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <specialty.icon className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-neutral">{specialty.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-neutral/10 flex justify-between">
                  <div className="flex space-x-2">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-neutral hover:text-secondary transition-colors"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-neutral hover:text-secondary transition-colors"
                      aria-label={`GitHub de ${member.name}`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <button className="text-secondary hover:text-secondary-dark font-medium text-sm flex items-center gap-1 group">
                    Ver perfil
                    <Globe className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
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
          <h3 className="text-xl font-semibold text-primary mb-2">
            ¿Buscas un equipo de expertos para tu proyecto?
          </h3>
          <p className="text-neutral mb-6">
            Nuestro equipo está listo para transformar tus ideas en soluciones innovadoras
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors font-semibold"
          >
            Contáctanos
          </a>
        </motion.div>
      </div>
    </section>
  );
} 