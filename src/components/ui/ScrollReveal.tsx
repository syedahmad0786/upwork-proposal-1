'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ScrollReveal({
  children,
  variants = defaultVariants,
  className = '',
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={{
        ...variants,
        visible: {
          ...(variants.visible as object),
          transition: {
            ...((variants.visible as Record<string, unknown>)?.transition as object),
            delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
