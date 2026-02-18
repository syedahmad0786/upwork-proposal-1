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
  green: 'hover:shadow-[0_24px_80px_rgba(0,200,83,0.12)]',
  pink: 'hover:shadow-[0_24px_80px_rgba(233,30,99,0.12)]',
  amber: 'hover:shadow-[0_24px_80px_rgba(255,145,0,0.12)]',
  violet: 'hover:shadow-[0_24px_80px_rgba(124,58,237,0.12)]',
  electric: 'hover:shadow-[0_24px_80px_rgba(59,130,246,0.15)]',
  blue: 'hover:shadow-[0_24px_80px_rgba(59,130,246,0.15)]',
  cyan: 'hover:shadow-[0_24px_80px_rgba(6,182,212,0.12)]',
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
  glow = 'electric',
  variant = 'dark',
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
      className={cn(
        'rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl transition-all duration-400',
        hover && 'hover:border-electric/30 hover:bg-white/[0.08]',
        glowMap[glow],
        paddingMap[padding],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
