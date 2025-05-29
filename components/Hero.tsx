'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HERO, ANIMATIONS } from '@/lib/constants';
import { Icons } from '@/lib/icons';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-dark to-primary py-12 sm:py-16 md:py-0">
      {/* Fondo con patrón y overlay */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 to-primary/90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Contenido principal */}
          <motion.div
            {...ANIMATIONS.fadeIn}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {HERO.title}{' '}
              <span className="text-secondary">{HERO.titleHighlight}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-light mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              {HERO.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <Link
                href={HERO.cta.primary.href}
                className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-secondary/90 transition-colors text-base sm:text-lg font-semibold"
              >
                {HERO.cta.primary.text}
                <Icons.ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href={HERO.cta.secondary.href}
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/20 transition-colors text-base sm:text-lg font-semibold"
              >
                {HERO.cta.secondary.text}
              </Link>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto lg:mx-0">
              {HERO.stats.map((stat, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-neutral-light text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ilustración/Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-6 lg:mt-0"
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                poster={HERO.media.poster}
              >
                <source src={HERO.media.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Elementos flotantes */}
            <motion.div
              {...ANIMATIONS.float}
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-secondary/20 p-3 sm:p-4 rounded-xl hidden sm:block"
            >
              <Icons.Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-secondary/20 p-3 sm:p-4 rounded-xl hidden sm:block"
            >
              <Icons.Shield className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Ola decorativa */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
} 