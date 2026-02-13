"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const solutionLinks = [
  { title: "AI Agents", href: "/solutions/ai-agents" },
  { title: "Process Automation", href: "/solutions/process-automation" },
  { title: "Voice AI", href: "/solutions/voice-ai" },
  { title: "Content Operations", href: "/solutions/content-operations" },
  { title: "Custom Development", href: "/solutions/custom-development" },
  { title: "AI Strategy", href: "/solutions/ai-strategy" },
];

const companyLinks = [
  { title: "About Us", href: "/about" },
  { title: "Our Process", href: "/process" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Industries", href: "/industries" },
  { title: "Contact", href: "/contact" },
];

const resourceLinks = [
  { title: "Insights & Blog", href: "/insights" },
  { title: "AI Readiness Quiz", href: "/insights#quiz" },
  { title: "ROI Calculator", href: "/insights#roi" },
  { title: "Documentation", href: "/insights#docs" },
  { title: "FAQ", href: "/about#faq" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com", label: "X (Twitter)" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

/* ------------------------------------------------------------------ */
/*  Scroll-reveal wrapper                                              */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: integrate with newsletter API
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer className="relative overflow-hidden bg-[#0A0E1A]">
      {/* Top gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent" />

      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-96 w-[800px] -translate-x-1/2 rounded-full bg-[#3B82F6]/[0.04] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-8">
        {/* ---- Main grid ---- */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Column 1 -- Brand + Newsletter */}
          <Reveal className="lg:col-span-4" delay={0}>
            <Link href="/" className="inline-flex items-center gap-1.5">
              <Image
                src="/images/logo-icon.svg"
                alt="Aixcel Solutions"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold tracking-tight text-white">
                AIXCEL
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#64748B]">
                Solutions
              </span>
              <span className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4]" />
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#64748B]">
              Enterprise AI solutions that transform how businesses operate.
              From strategy to deployment, we build intelligent systems that
              deliver measurable ROI.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-sm font-medium text-[#CBD5E1]">
                Get AI insights delivered weekly
              </p>
              <form
                onSubmit={handleSubmit}
                className="mt-3 flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="h-10 w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-3.5 text-sm text-white placeholder-[#64748B] outline-none transition-colors focus:border-[#3B82F6]/50 focus:ring-1 focus:ring-[#3B82F6]/30"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-4 text-sm font-semibold text-white shadow-lg shadow-[#3B82F6]/20 transition-shadow hover:shadow-[#3B82F6]/40"
                >
                  {submitted ? (
                    "Sent!"
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Social */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] text-[#64748B] transition-colors hover:border-[#3B82F6]/30 hover:bg-white/[0.04] hover:text-[#3B82F6]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </Reveal>

          {/* Column 2 -- Solutions */}
          <Reveal className="lg:col-span-2 lg:col-start-6" delay={0.08}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Solutions
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#64748B] transition-colors hover:text-[#CBD5E1]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Column 3 -- Company */}
          <Reveal className="lg:col-span-2" delay={0.16}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#64748B] transition-colors hover:text-[#CBD5E1]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Column 4 -- Resources */}
          <Reveal className="lg:col-span-2" delay={0.24}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#64748B] transition-colors hover:text-[#CBD5E1]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ---- Bottom bar ---- */}
        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
            <p className="text-xs text-[#64748B]">
              &copy; {new Date().getFullYear()} Aixcel Solutions. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-xs text-[#64748B] transition-colors hover:text-[#CBD5E1]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-[#64748B] transition-colors hover:text-[#CBD5E1]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
