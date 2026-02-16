'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin, Clock, Linkedin, Github, Send } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useState } from 'react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'ahmadbukhari4245@gmail.com',
    href: 'mailto:ahmadbukhari4245@gmail.com',
    description: 'Best for detailed inquiries',
  },
  {
    icon: Phone,
    title: 'Phone / WhatsApp',
    value: '+92 300 517 4444',
    href: 'https://wa.me/923005174444',
    description: 'Quick questions & urgent requests',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'Ahmad Bukhari',
    href: 'https://linkedin.com/in/bukhariahmad',
    description: 'Connect & follow updates',
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: 'Within 4 hours',
    href: '#',
    description: 'Mon-Sat, Global time zones',
  },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Form submission would be handled by a backend/API
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan/8 to-transparent rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge mb-4 inline-block">Get In Touch</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Let&apos;s build something{' '}<span className="gradient-text">extraordinary</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-muted leading-relaxed">
            Whether you have a specific project in mind or just want to explore what automation can do for you — reach out.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods + Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">
            {/* Left: Contact Methods */}
            <div>
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-white mb-6">Reach out directly</h2>
              </ScrollReveal>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {contactMethods.map((method) => (
                  <motion.div key={method.title} variants={fadeInUp}>
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      <GlassCard padding="md" className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0 group-hover:bg-electric/20 transition-colors">
                          <method.icon size={20} className="text-electric" />
                        </div>
                        <div>
                          <div className="text-sm text-muted">{method.title}</div>
                          <div className="text-white font-medium">{method.value}</div>
                          <div className="text-xs text-muted mt-0.5">{method.description}</div>
                        </div>
                      </GlassCard>
                    </a>
                  </motion.div>
                ))}
              </motion.div>

              <ScrollReveal delay={0.3}>
                <div className="mt-8 p-6 rounded-2xl border border-electric/20 bg-electric/5">
                  <h3 className="text-white font-bold mb-2">Prefer a live conversation?</h3>
                  <p className="text-sm text-muted mb-4">Book a free 60-minute strategy call and get a custom automation roadmap within 48 hours.</p>
                  <Link href="/book" className="btn-primary text-sm">
                    <span>Book Free Strategy Call</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Contact Form */}
            <ScrollReveal delay={0.2}>
              <GlassCard padding="lg">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-electric/10 flex items-center justify-center mx-auto mb-4">
                      <Send size={24} className="text-electric" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
                    <p className="text-muted">I&apos;ll get back to you within 4 hours during business hours.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-6">Send a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm text-cloud mb-2">Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-muted focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm text-cloud mb-2">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-muted focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="company" className="block text-sm text-cloud mb-2">Company</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-muted focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors"
                            placeholder="Company name"
                          />
                        </div>
                        <div>
                          <label htmlFor="service" className="block text-sm text-cloud mb-2">Interested In</label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors appearance-none"
                          >
                            <option value="" className="bg-abyss">Select a service</option>
                            <option value="ai-agents" className="bg-abyss">AI Agents</option>
                            <option value="voice-ai" className="bg-abyss">Voice AI</option>
                            <option value="process-automation" className="bg-abyss">Process Automation</option>
                            <option value="content-ops" className="bg-abyss">Content Operations</option>
                            <option value="custom-dev" className="bg-abyss">Custom Development</option>
                            <option value="ai-strategy" className="bg-abyss">AI Strategy</option>
                            <option value="not-sure" className="bg-abyss">Not sure yet</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm text-cloud mb-2">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-muted focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors resize-none"
                          placeholder="Tell me about your project, current challenges, or what you'd like to automate..."
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full justify-center">
                        <span>Send Message</span>
                        <ArrowRight size={16} />
                      </button>
                      <p className="text-xs text-muted text-center">
                        Or email directly at ahmadbukhari4245@gmail.com
                      </p>
                    </form>
                  </>
                )}
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
