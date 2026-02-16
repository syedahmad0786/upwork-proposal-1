'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface SectionHeadingProps {
  badge?: string;
  badgeColor?: 'blue' | 'green' | 'pink' | 'cyan';
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

const badgeClasses = {
  blue: 'badge',
  green: 'badge-green',
  pink: 'badge-pink',
  cyan: 'badge',
};

export default function SectionHeading({
  badge,
  badgeColor = 'green',
  title,
  titleHighlight,
  description,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`max-w-3xl mb-16 ${alignClasses}`}
    >
      {badge && (
        <span className={`${dark ? 'badge-dark' : badgeClasses[badgeColor]} mb-4 inline-block`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 uppercase ${dark ? 'text-white' : 'text-heading'}`}>
        {title}
        {titleHighlight && (
          <>
            {' '}
            <span className="gradient-text">{titleHighlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed text-pretty ${dark ? 'text-white/60' : 'text-caption'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
