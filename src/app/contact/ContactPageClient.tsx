"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const serviceOptions = [
  "AI Agents & Autonomous Systems",
  "Process Automation",
  "Voice AI Solutions",
  "Content Operations AI",
  "AI Strategy & Consulting",
  "Custom AI Development",
];

const budgetRanges = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not sure yet",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@aixcelsolutions.com",
    href: "mailto:hello@aixcelsolutions.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote-First, Global Delivery",
    href: null,
  },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
// Form Component
// ---------------------------------------------------------------------------

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-16 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald/10">
          <CheckCircle2 className="h-10 w-10 text-emerald" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-pure-white">
          Message Sent!
        </h3>
        <p className="mb-6 max-w-md text-cloud">
          Thank you for reaching out. Our team will review your inquiry and get
          back to you within 24 hours.
        </p>
        <Button
          variant="secondary"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-steel/50 bg-midnight/80 px-4 py-3 text-pure-white placeholder:text-muted outline-none transition-all duration-300 focus:border-electric/50 focus:ring-1 focus:ring-electric/30 focus:bg-midnight";

  const labelClasses = "mb-2 block text-sm font-medium text-cloud";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Email row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name <span className="text-electric">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Work Email <span className="text-electric">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@company.com"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Company & Phone row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClasses}>
            Company <span className="text-electric">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            placeholder="Acme Inc."
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span className="text-muted">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (555) 000-0000"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Service & Budget row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className={labelClasses}>
            Service Interest <span className="text-electric">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            className={`${inputClasses} cursor-pointer appearance-none`}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option} className="bg-midnight">
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClasses}>
            Budget Range <span className="text-electric">*</span>
          </label>
          <select
            id="budget"
            name="budget"
            required
            className={`${inputClasses} cursor-pointer appearance-none`}
            defaultValue=""
          >
            <option value="" disabled>
              Select budget range
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range} className="bg-midnight">
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <span className="text-electric">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, challenges, and goals..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <motion.div
              className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            Sending...
          </>
        ) : (
          <>
            Send Message <Send className="h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ContactPageClient() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-cyan-pulse/5 blur-[100px]" />
      </div>

      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 sm:px-8 lg:px-12">
        {/* CTA decorative background */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <Image
            src="/images/backgrounds/cta-bg.png"
            alt=""
            fill
            quality={85}
            className="object-cover"
          />
        </div>
        <SectionHeading
          eyebrow="Get In Touch"
          heading="Let's Build Something Intelligent Together"
          description="Whether you have a specific project in mind or just want to explore what AI can do for your business, we are here to help."
        />
      </div>

      {/* ================================================================== */}
      {/* MAIN CONTENT: Form + Info                                          */}
      {/* ================================================================== */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* ---- Contact Form (left, wider) ---- */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Card padding="p-8 sm:p-10">
              <h3 className="mb-6 text-2xl font-bold text-pure-white">
                Send Us a Message
              </h3>
              <ContactForm />
            </Card>
          </motion.div>

          {/* ---- Company Info (right, narrower) ---- */}
          <motion.div
            className="space-y-8 lg:col-span-2"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Details */}
            <motion.div variants={fadeUp}>
              <Card>
                <h4 className="mb-6 text-lg font-bold text-pure-white">
                  Contact Information
                </h4>
                <div className="space-y-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric/10">
                          <Icon className="h-5 w-5 text-electric" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                            {item.label}
                          </p>
                          <p className="text-sm text-pure-white">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block transition-opacity hover:opacity-80"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>

            {/* Office Hours */}
            <motion.div variants={fadeUp}>
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-cyan-pulse" />
                  <h4 className="text-lg font-bold text-pure-white">
                    Office Hours
                  </h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-cloud">Monday - Friday</span>
                    <span className="font-medium text-pure-white">
                      9:00 AM - 6:00 PM EST
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cloud">Saturday</span>
                    <span className="font-medium text-pure-white">
                      10:00 AM - 2:00 PM EST
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cloud">Sunday</span>
                    <span className="font-medium text-muted">Closed</span>
                  </div>
                  <div className="mt-4 rounded-lg bg-electric/5 p-3 text-xs text-cloud">
                    We typically respond to inquiries within 24 hours during
                    business days.
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp}>
              <Card>
                <h4 className="mb-4 text-lg font-bold text-pure-white">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-steel/50 bg-midnight/50 text-muted transition-all duration-300 hover:border-electric/50 hover:text-electric hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </Card>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div variants={fadeUp}>
              <div className="relative overflow-hidden rounded-2xl">
                <div className="flex h-48 items-center justify-center rounded-2xl bg-gradient-to-br from-midnight via-steel/30 to-midnight border border-steel/30">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 h-8 w-8 text-electric/40" />
                    <p className="text-sm font-medium text-muted">
                      Interactive Map
                    </p>
                    <p className="text-xs text-muted/60">Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* CTA                                                                */}
      {/* ================================================================== */}
      <div className="relative mx-auto max-w-7xl px-6 pb-32 sm:px-8 lg:px-12">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-midnight to-steel p-12 text-center sm:p-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-electric/10 blur-[100px]" />
            </div>
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-pure-white sm:text-4xl">
                Prefer a Live Conversation?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-cloud">
                Book a complimentary 30-minute strategy session and speak
                directly with our AI experts about your specific challenges.
              </p>
              <Button href="/book-consultation" size="lg">
                Book Free Consultation <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
