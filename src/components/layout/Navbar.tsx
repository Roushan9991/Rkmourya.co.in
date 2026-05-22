"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-surface/80 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <Image src="/profile.png" alt="Roushan Mourya" width={40} height={40} className="rounded-full object-cover ring-2 ring-primary" priority />
          <span className="font-display-lg text-primary tracking-tighter drop-shadow-[0_0_8px_rgba(208,188,255,0.4)] text-[18px] hidden md:inline">Roushan</span>
        </a>
        
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface-container/95 backdrop-blur-xl border-b border-white/10 py-4 px-margin-mobile md:hidden flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
