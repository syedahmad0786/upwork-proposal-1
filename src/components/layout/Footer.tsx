'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { services } from '@/data/services';

const footerLinks = {
  services: services.map((s) => ({
    label: s.shortTitle,
    href: `/services/${s.slug}`,
  })),
  company: [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Process', href: '/process' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Book a Call', href: '/book' },
    { label: 'Free Strategy Session', href: '/book' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/bukhariahmad' },
  { label: 'Twitter / X', href: 'https://x.com/AhmadBukhari' },
  { label: 'GitHub', href: 'https://github.com/AhmadBukhari0786' },
  { label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#030712] text-white">
      {/* CTA Banner */}
      <div className="container-custom section-padding">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 border border-white/[0.08] bg-gradient-to-br from-[#0F172A] to-[#030712]">
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-electric/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-cyan/8 to-transparent rounded-full blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight uppercase">
              Ready to automate the work that{' '}
              <span className="gradient-text">slows you down?</span>
            </h2>
            <p className="text-lg text-white/50 mb-8">
              Book a free strategy session. We&apos;ll map your highest-ROI automation
              opportunities in 60 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="btn-primary-dark">
                <span>Book Free Strategy Call</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/case-studies" className="btn-secondary-dark">
                <span>See Results First</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="container-custom pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo-icon.svg"
                alt="AiXCEL"
                width={36}
                height={36}
              />
              <span className="text-xl font-bold text-white uppercase tracking-tight">AiXCEL</span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              We automate the work that slows your business down. AI agents, voice AI,
              and enterprise automation for teams that move fast.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:ahmadbukhari4245@gmail.com"
                className="flex items-center gap-2 text-white/40 hover:text-electric transition-colors"
              >
                <Mail size={14} />
                ahmadbukhari4245@gmail.com
              </a>
              <a
                href="tel:+923005174444"
                className="flex items-center gap-2 text-white/40 hover:text-electric transition-colors"
              >
                <Phone size={14} />
                +92 300 517 4444
              </a>
              <div className="flex items-center gap-2 text-white/40">
                <MapPin size={14} />
                Global (Remote-First)
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-electric transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-electric transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              {socials.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-electric transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.08]">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>&copy; {new Date().getFullYear()} AiXCEL Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-electric transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-electric transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
