'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
    rating: number;
    project: string;
  };
  variants: any;
  whileHover: string;
}

export default function TestimonialCard({ testimonial, variants, whileHover }: TestimonialCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={whileHover}
      className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      role="listitem"
      aria-label={`Testimonio de ${testimonial.name}`}
    >
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <div className="w-16 h-16 flex-shrink-0">
          <OptimizedImage
            src={testimonial.image}
            alt={`Foto de ${testimonial.name}`}
            width={64}
            height={64}
            className="rounded-full"
            priority={false}
          />
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-lg md:text-xl font-semibold mb-1 text-primary">{testimonial.name}</h4>
          <p className="text-neutral-light text-sm">{testimonial.role} en {testimonial.company}</p>
        </div>
      </div>
      <p className="text-neutral mb-6 text-sm md:text-base">{testimonial.quote}</p>
      <div className="flex items-center justify-center sm:justify-start gap-4">
        <div className="flex items-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-secondary" aria-hidden="true" />
          ))}
        </div>
        <span className="text-sm font-semibold text-primary">{testimonial.rating}/5</span>
      </div>
    </motion.div>
  );
} 