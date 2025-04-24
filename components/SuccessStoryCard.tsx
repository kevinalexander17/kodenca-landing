'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SuccessStoryCardProps {
  story: {
    title: string;
    description: string;
    metrics: Array<{
      label: string;
      value: string;
    }>;
    technologies: string[];
    image: string;
    demoUrl?: string;
  };
  variants?: any;
  whileHover?: any;
}

export default function SuccessStoryCard({ story, variants, whileHover }: SuccessStoryCardProps) {
  const isVirroImage = story.image.includes('virro');

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
      variants={variants}
      whileHover={whileHover}
    >
      <div className="relative h-36 sm:h-40 md:h-48">
        <Image
          src={story.image}
          alt={story.title}
          fill={true}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover"
          priority={isVirroImage}
          unoptimized={isVirroImage}
          loading={isVirroImage ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{story.title}</h3>
        <p className="text-white/80 mb-4 text-sm sm:text-base">{story.description}</p>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4">
          {story.metrics.map((metric, index) => (
            <div key={index} className="bg-white/5 p-2 sm:p-3 rounded-lg">
              <p className="text-white/60 text-xs sm:text-sm">{metric.label}</p>
              <p className="text-secondary font-bold text-sm sm:text-base">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
          {story.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-1 bg-secondary/10 text-secondary text-xs sm:text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {story.demoUrl && (
          <a 
            href={story.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary text-white text-sm rounded-lg hover:bg-opacity-90 transition-all"
          >
            Ver Demo <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </motion.div>
  );
} 