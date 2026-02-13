"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  /** Extra padding override (default p-6 sm:p-8). */
  padding?: string;
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, padding, className, ...rest }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          // The `gradient-border` class from globals.css provides the
          // gradient-outline-on-hover effect and midnight background.
          "gradient-border",
          padding ?? "p-6 sm:p-8",
          "rounded-2xl",
          "transition-shadow duration-400",
          "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
          className,
        )}
        whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
        {...rest}
      >
        {children}
      </motion.div>
    );
  },
);

Card.displayName = "Card";

export default Card;
