'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/* ─── Split Text: Reveals word by word ─── */
interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function SplitText({ children, className = '', delay = 0, as = 'h2' }: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const words = children.split(' ');

  const Tag = as;

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={cn('overflow-hidden', className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', rotateX: 40 }}
            animate={isInView ? { y: 0, rotateX: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.04,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* ─── Char Stagger: Reveals character by character ─── */
interface CharStaggerProps {
  children: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function CharStagger({ children, className = '', delay = 0, speed = 0.02 }: CharStaggerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const chars = children.split('');

  return (
    <span ref={ref} className={cn('inline-block', className)}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{
            duration: 0.4,
            delay: delay + i * speed,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── Gradient Shimmer Text: Animated gradient sweep ─── */
interface ShimmerTextProps {
  children: ReactNode;
  className?: string;
}

export function ShimmerText({ children, className = '' }: ShimmerTextProps) {
  return (
    <span
      className={cn(
        'inline-block bg-clip-text text-transparent bg-gradient-to-r from-electric via-cyan to-electric bg-[length:200%_100%] animate-shimmer',
        className
      )}
    >
      {children}
    </span>
  );
}

/* ─── Blur Fade In: Fades in with blur ─── */
interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function BlurFade({ children, className = '', delay = 0, direction = 'up' }: BlurFadeProps) {
  const dirMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)', ...dirMap[direction] }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Typewriter: Types out text character by character ─── */
interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function Typewriter({ text, className = '', speed = 0.03, delay = 0 }: TypewriterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const chars = text.split('');

  return (
    <span ref={ref} className={cn('inline-block font-mono', className)}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.05, delay: delay + i * speed }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-electric ml-0.5 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
    </span>
  );
}
