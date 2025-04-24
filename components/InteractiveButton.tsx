'use client';

import { motion } from 'framer-motion';
import { useAnalytics } from '../hooks/useAnalytics';
import { ArrowRight } from 'lucide-react';

interface InteractiveButtonProps {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  trackingCategory?: string;
  trackingAction?: string;
  trackingLabel?: string;
}

export default function InteractiveButton({
  href,
  label,
  variant = 'primary',
  size = 'md',
  className = '',
  trackingCategory = 'button',
  trackingAction = 'click',
  trackingLabel,
}: InteractiveButtonProps) {
  const { trackEvent } = useAnalytics();

  const handleClick = () => {
    trackEvent({
      category: trackingCategory,
      action: trackingAction,
      label: trackingLabel || label,
    });
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-secondary text-white hover:bg-secondary/90',
    secondary: 'bg-white text-primary hover:bg-white/90',
    outline: 'border-2 border-white text-white hover:bg-white/10',
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={`
        inline-flex items-center gap-2 rounded-lg font-semibold
        transition-colors duration-300 group
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      role="button"
      aria-label={label}
    >
      <span>{label}</span>
      <motion.span
        className="group-hover:translate-x-1 transition-transform"
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        whileHover={{ x: 5 }}
      >
        <ArrowRight className="w-5 h-5" aria-hidden="true" />
      </motion.span>
    </motion.a>
  );
} 