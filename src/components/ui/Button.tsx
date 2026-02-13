"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Variant & size maps
// ---------------------------------------------------------------------------

const variantClasses: Record<string, string> = {
  primary: [
    "bg-gradient-to-r from-electric to-cyan-pulse text-white",
    "shadow-lg shadow-electric/20",
    "hover:shadow-electric/40 hover:shadow-xl",
    "active:shadow-electric/30",
  ].join(" "),
  secondary: [
    "bg-transparent text-pure-white",
    "border border-transparent",
    "bg-clip-padding",
    // Pseudo-element gradient border is handled via a wrapper class below
    "ring-1 ring-electric/40 hover:ring-electric/70",
  ].join(" "),
  ghost: [
    "bg-transparent text-cloud hover:text-pure-white",
    "hover:bg-white/5",
  ].join(" "),
};

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
  md: "px-6 py-3 text-base rounded-xl gap-2",
  lg: "px-8 py-4 text-lg rounded-xl gap-2.5",
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  /** If provided, renders as a Next.js Link instead of a <button>. */
  href?: string;
  /** Open link in a new tab. */
  external?: boolean;
  className?: string;
  disabled?: boolean;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      href,
      external = false,
      className,
      disabled = false,
      ...rest
    },
    ref,
  ) => {
    const classes = cn(
      "relative inline-flex items-center justify-center font-semibold",
      "transition-colors duration-300 cursor-pointer select-none",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      variantClasses[variant],
      sizeClasses[size],
      className,
    );

    const motionProps: HTMLMotionProps<"button"> = {
      whileHover: disabled ? {} : { scale: 1.03 },
      whileTap: disabled ? {} : { scale: 0.97 },
      transition: { type: "spring", stiffness: 400, damping: 20 },
      ...rest,
    };

    // Render as a Link when href is provided
    if (href) {
      return (
        <motion.div
          whileHover={disabled ? {} : { scale: 1.03 }}
          whileTap={disabled ? {} : { scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="inline-flex"
        >
          <Link
            href={href}
            className={classes}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {children}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        disabled={disabled}
        {...motionProps}
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

export default Button;
