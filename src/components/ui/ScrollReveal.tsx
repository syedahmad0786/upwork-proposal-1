"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ScrollRevealProps {
  children: React.ReactNode;
  /** Direction the element slides in from. */
  direction?: "up" | "down" | "left" | "right";
  /** Stagger delay in seconds (useful when wrapping multiple items). */
  delay?: number;
  /** Animation duration in seconds. */
  duration?: number;
  /** How far (px) the element travels before settling. */
  distance?: number;
  /** Trigger the animation only once. */
  once?: boolean;
  className?: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getOffset(
  direction: ScrollRevealProps["direction"],
  distance: number,
): { x: number; y: number } {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    default:
      return { x: 0, y: distance };
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 32,
  once = true,
  className,
}: ScrollRevealProps) {
  const offset = getOffset(direction, distance);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as const, // custom easeOutQuint
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
