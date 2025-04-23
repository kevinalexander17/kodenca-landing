'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    benefits: string[];
  };
  variants?: any;
  whileHover?: any;
}

export default function ServiceCard({ service, variants, whileHover }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl border border-white/10"
      variants={variants}
      whileHover={whileHover}
    >
      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
        <div className="p-2 sm:p-3 bg-secondary/10 rounded-lg">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white">{service.title}</h3>
      </div>
      <p className="text-white/80 mb-4 text-sm sm:text-base">{service.description}</p>
      
      <div className="space-y-3 md:space-y-4">
        <div>
          <h4 className="text-white/90 font-medium mb-2 text-sm sm:text-base">Características</h4>
          <ul className="space-y-1.5 sm:space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-white/70 text-sm">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white/90 font-medium mb-2 text-sm sm:text-base">Beneficios</h4>
          <ul className="space-y-1.5 sm:space-y-2">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2 text-white/70 text-sm">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
} 