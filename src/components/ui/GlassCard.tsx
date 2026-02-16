'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  glow?: 'green' | 'pink' | 'amber' | 'violet' | 'electric' | 'blue' | 'cyan' | 'none';
  variant?: 'light' | 'dark';
}

const glowMap = {
  green: 'hover:shadow-[0_24px_80px_rgba(0,200,83,0.1)]',
  pink: 'hover:shadow-[0_24px_80px_rgba(233,30,99,0.1)]',
  amber: 'hover:shadow-[0_24px_80px_rgba(255,145,0,0.1)]',
  violet: 'hover:shadow-[0_24px_80px_rgba(124,58,237,0.1)]',
  electric: 'hover:shadow-[0_24px_80px_rgba(59,130,246,0.1)]',
  blue: 'hover:shadow-[0_24px_80px_rgba(59,130,246,0.1)]',
  cyan: 'hover:shadow-[0_24px_80px_rgba(6,182,212,0.1)]',
  none: '',
};

const paddingMap = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function GlassCard({
  children,
  className = '',
  hover = true,
  padding = 'md',
  glow = 'green',
  variant = 'light',
}: GlassCardProps) {
  const isLight = variant === 'light';

  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
      className={cn(
        'rounded-2xl transition-all duration-400',
        isLight
          ? 'border border-card-border bg-surface-card shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
          : 'border border-white/10 bg-white/[0.06] backdrop-blur-xl',
        hover && isLight && 'hover:border-neon-green/30',
        hover && !isLight && 'hover:border-neon-green/40 hover:bg-white/10',
        glowMap[glow],
        paddingMap[padding],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
