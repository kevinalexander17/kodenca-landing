'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  metric: {
    icon: LucideIcon;
    value: string;
    label: string;
    description: string;
  };
  variants?: any;
  whileHover?: any;
}

export default function MetricCard({ metric, variants, whileHover }: MetricCardProps) {
  const Icon = metric.icon;

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
        <h3 className="text-2xl sm:text-3xl font-bold text-secondary">{metric.value}</h3>
      </div>
      <p className="text-white/80 font-medium mb-2 text-sm sm:text-base">{metric.label}</p>
      <p className="text-white/60 text-xs sm:text-sm">{metric.description}</p>
    </motion.div>
  );
} 