'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ─── Parallax wrapper: children move at different scroll speeds ─── */
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number; // negative = slower, positive = faster
  direction?: 'vertical' | 'horizontal';
}

export function Parallax({ children, className = '', speed = -0.2, direction = 'vertical' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yRange = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);
  const xRange = useTransform(scrollYProgress, [0, 1], [speed * 60, -speed * 60]);

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.div
        style={direction === 'vertical' ? { y: yRange } : { x: xRange }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ─── Parallax floating shape for background decoration ─── */
interface FloatingShapeProps {
  className?: string;
  speed?: number;
  size?: number;
  color?: string;
  blur?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export function FloatingShape({
  className = '',
  speed = -0.15,
  size = 400,
  color = 'rgba(59, 130, 246, 0.08)',
  blur = 80,
  top,
  left,
  right,
  bottom,
}: FloatingShapeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 150, -speed * 150]);

  return (
    <div ref={ref} className="absolute pointer-events-none" style={{ top, left, right, bottom }}>
      <motion.div
        style={{
          y,
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: `blur(${blur}px)`,
          borderRadius: '50%',
        }}
        className={className}
      />
    </div>
  );
}

/* ─── Scale on Scroll: element grows/shrinks as you scroll ─── */
interface ScaleOnScrollProps {
  children: ReactNode;
  className?: string;
  scaleRange?: [number, number];
}

export function ScaleOnScroll({ children, className = '', scaleRange = [0.9, 1] }: ScaleOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── Horizontal Scroll Section: Content scrolls horizontally on vertical scroll ─── */
interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

export function HorizontalScroll({ children, className = '' }: HorizontalScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <div ref={ref} className={cn('relative h-[300vh]', className)}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {children}
        </motion.div>
      </div>
    </div>
  );
}
