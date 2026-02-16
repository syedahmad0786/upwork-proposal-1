'use client';

import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: 'button' | 'div';
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  as = 'div',
  onClick,
}: MagneticButtonProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 200, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const Component = as === 'button' ? motion.button : motion.div;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={cn('relative inline-block', className)}
    >
      {/* Ripple glow on hover */}
      <motion.span
        className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-electric/20 to-cyan/20 blur-xl -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isHovered ? { opacity: 1, scale: 1.15 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4 }}
      />
      {children}
    </Component>
  );
}
