"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SectionHeadingProps {
  /** Small uppercase gradient text displayed above the heading. */
  eyebrow?: string;
  /** Main heading text (rendered as h2). */
  heading: string;
  /** Optional description paragraph below the heading. */
  description?: string;
  /** Horizontal alignment. */
  align?: "center" | "left";
  className?: string;
}

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  // Only apply initial="hidden" AFTER hydration to prevent SSR opacity:0 sticking
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      className={cn("max-w-3xl mb-16", alignClass, className)}
      variants={containerVariants}
      initial={mounted ? "hidden" : false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-50px" }}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pure-white leading-tight"
      >
        {heading}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-lg text-cloud leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
