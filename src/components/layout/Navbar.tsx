"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Bot,
  Cpu,
  Mic,
  FileText,
  Code2,
  Lightbulb,
  ChevronDown,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const solutions = [
  {
    title: "AI Agents",
    href: "/solutions/ai-agents",
    description: "Autonomous agents that handle complex workflows",
    icon: Bot,
  },
  {
    title: "Process Automation",
    href: "/solutions/process-automation",
    description: "Streamline operations with intelligent automation",
    icon: Cpu,
  },
  {
    title: "Voice AI",
    href: "/solutions/voice-ai",
    description: "Natural voice interfaces for your business",
    icon: Mic,
  },
  {
    title: "Content Operations",
    href: "/solutions/content-operations",
    description: "AI-powered content at scale",
    icon: FileText,
  },
  {
    title: "Custom Development",
    href: "/solutions/custom-development",
    description: "Bespoke AI solutions tailored to you",
    icon: Code2,
  },
  {
    title: "AI Strategy",
    href: "/solutions/ai-strategy",
    description: "Roadmaps for enterprise AI adoption",
    icon: Lightbulb,
  },
];

const navLinks = [
  { title: "Industries", href: "/industries" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Process", href: "/process" },
  { title: "Insights", href: "/insights" },
  { title: "About", href: "/about" },
];

/* ------------------------------------------------------------------ */
/*  Dropdown                                                           */
/* ------------------------------------------------------------------ */

function SolutionsDropdown({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute left-0 top-full mt-2 w-[580px] rounded-2xl border border-white/[0.06] bg-[#0F1320]/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl"
    >
      <div className="grid grid-cols-2 gap-1">
        {solutions.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group flex items-start gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-white/[0.04]"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/20 text-[#3B82F6] transition-colors group-hover:from-[#3B82F6]/30 group-hover:to-[#06B6D4]/30">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-sm font-medium text-white transition-colors group-hover:text-[#3B82F6]">
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-[#64748B]">
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile overlay                                                     */
/* ------------------------------------------------------------------ */

function MobileNav({
  onClose,
  solutionsOpen,
  toggleSolutions,
}: {
  onClose: () => void;
  solutionsOpen: boolean;
  toggleSolutions: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-40 bg-[#0A0E1A]/95 backdrop-blur-xl"
    >
      {/* close button */}
      <div className="flex h-[72px] items-center justify-end px-6">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#CBD5E1] transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <motion.nav
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.08, duration: 0.3, ease: "easeOut" }}
        className="flex flex-col gap-1 px-6"
      >
        {/* Solutions accordion */}
        <button
          onClick={toggleSolutions}
          className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-lg font-medium text-white transition-colors hover:bg-white/[0.04]"
        >
          Solutions
          <ChevronDown
            className={`h-5 w-5 text-[#64748B] transition-transform duration-300 ${
              solutionsOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {solutionsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-0.5 pb-2 pl-4">
                {solutions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-[#CBD5E1] transition-colors hover:bg-white/[0.04] hover:text-white"
                    >
                      <Icon className="h-4 w-4 text-[#3B82F6]" />
                      <span className="text-[15px]">{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="rounded-xl px-4 py-3.5 text-lg font-medium text-white transition-colors hover:bg-white/[0.04]"
          >
            {link.title}
          </Link>
        ))}

        {/* CTA */}
        <div className="mt-6 px-4">
          <Link
            href="/book-consultation"
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-sm font-semibold text-white shadow-lg shadow-[#3B82F6]/25 transition-shadow hover:shadow-[#3B82F6]/40"
          >
            Book a Call
          </Link>
        </div>
      </motion.nav>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Navbar                                                             */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeDropdown = useCallback(() => setDropdownOpen(false), []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.06] bg-[#0A0E1A]/90 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-[#0A0E1A]/80 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* ---- Logo ---- */}
          <Link href="/" className="group flex items-center gap-2">
            <Image
              src="/images/logo-icon.svg"
              alt="Aixcel Solutions"
              width={36}
              height={36}
              className="transition-transform duration-300 group-hover:scale-110"
              priority
            />
            <span className="text-xl font-bold tracking-tight text-white">
              AIXCEL
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-[#64748B] transition-colors group-hover:text-[#CBD5E1] sm:inline">
              Solutions
            </span>
          </Link>

          {/* ---- Desktop nav ---- */}
          <nav className="hidden items-center gap-1 lg:flex">
            {/* Solutions dropdown trigger */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  dropdownOpen
                    ? "text-white"
                    : "text-[#CBD5E1] hover:text-white"
                }`}
              >
                Solutions
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <SolutionsDropdown onClose={closeDropdown} />
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-[#CBD5E1] transition-colors hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* ---- Right side ---- */}
          <div className="flex items-center gap-3">
            {/* CTA */}
            <Link
              href="/book-consultation"
              className="group relative hidden h-10 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-5 text-sm font-semibold text-white shadow-lg shadow-[#3B82F6]/20 transition-shadow hover:shadow-[#3B82F6]/40 lg:flex"
            >
              <span className="relative z-10">Book a Call</span>
              {/* glow overlay on hover */}
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60" />
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[#CBD5E1] transition-colors hover:bg-white/[0.06] hover:text-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ---- Mobile overlay ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileNav
            onClose={() => setMobileOpen(false)}
            solutionsOpen={mobileSolutions}
            toggleSolutions={() => setMobileSolutions((p) => !p)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
