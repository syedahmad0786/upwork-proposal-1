'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { getIcon } from '@/components/ui/IconMap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isHome = pathname === '/';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
          : isHome
            ? 'bg-transparent'
            : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo-icon.svg"
              alt="AiXCEL"
              width={36}
              height={36}
              className="group-hover:scale-105 transition-transform"
            />
            <span className={`text-xl font-bold tracking-tight uppercase transition-colors ${
              isHome && !scrolled ? 'text-white group-hover:text-neon-green' : 'text-heading group-hover:text-neon-green'
            }`}>
              AiXCEL
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold uppercase tracking-wide rounded-lg transition-colors ${
                    pathname === link.href || pathname.startsWith(link.href + '/')
                      ? 'text-neon-green'
                      : isHome && !scrolled
                        ? 'text-white/80 hover:text-white'
                        : 'text-body hover:text-heading'
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[420px]"
                    >
                      <div className="rounded-2xl border border-card-border bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                        <div className="grid gap-1">
                          {link.dropdown.map((item) => {
                            const Icon = getIcon(item.icon);
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-alt transition-colors group/item"
                              >
                                <div className="w-10 h-10 rounded-lg bg-neon-green/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-neon-green/20 transition-colors">
                                  <Icon className="text-neon-green" size={20} />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-heading group-hover/item:text-neon-green transition-colors">
                                    {item.title}
                                  </div>
                                  <div className="text-xs text-caption mt-0.5 leading-relaxed">
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/book"
              className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5"
            >
              <span>Book a Call</span>
              <ArrowRight size={16} />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={22} className={isHome && !scrolled ? 'text-white' : 'text-heading'} />
              ) : (
                <Menu size={22} className={isHome && !scrolled ? 'text-white' : 'text-heading'} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-black/5 overflow-hidden"
          >
            <div className="container-custom py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.label ? null : link.label
                          )
                        }
                        className="flex items-center justify-between w-full py-3 px-4 text-base font-semibold text-body hover:text-heading rounded-lg hover:bg-surface-alt transition-colors uppercase tracking-wide"
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            activeDropdown === link.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block py-2.5 px-4 text-sm text-caption hover:text-neon-green transition-colors"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block py-3 px-4 text-base font-semibold rounded-lg transition-colors uppercase tracking-wide ${
                        pathname === link.href
                          ? 'text-neon-green bg-neon-green/5'
                          : 'text-body hover:text-heading hover:bg-surface-alt'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-card-border">
                <Link href="/book" className="btn-primary w-full justify-center text-sm py-3">
                  <span>Book a Discovery Call</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
