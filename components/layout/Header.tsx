'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: '首页' },
    { href: '/characters', label: '角色介绍' },
    { href: '/gallery', label: '画廊' },
    { href: '/buy', label: '购买' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-[#E60012]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white hover:text-[#E60012] transition-colors">
            Persona 5 Royal
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#E60012] transition-colors px-4 py-2 rounded"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://asia.sega.com/persona-remaster/p5r/cht/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E60012] text-white px-4 py-2 rounded hover:bg-[#ff0015] transition-colors"
            >
              官方网站
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-white hover:text-[#E60012] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://asia.sega.com/persona-remaster/p5r/cht/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#E60012] text-white px-4 py-2 rounded hover:bg-[#ff0015] transition-colors mt-2 text-center"
            >
              官方网站
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
