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
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full max-w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-surface/95 backdrop-blur-xl border-b border-white/10 shadow-lg' 
        : 'py-4 bg-surface/80 backdrop-blur-md border-b border-white/5'
    }`}>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
        {/* Left branding: Always stable and visible Profile Image and Name */}
        <a href="#home" className="flex items-center gap-3">
          <Image src="/Profile.png" alt="Roushan Mourya" width={38} height={38} className="rounded-full object-cover ring-2 ring-primary/80 shrink-0" priority />
          <span className="font-display-lg text-primary tracking-tighter drop-shadow-[0_0_8px_rgba(208,188,255,0.4)] text-[16px] md:text-[18px] inline-block font-semibold">Roushan</span>
        </a>
        
        {/* Desktop Links (Hidden on Mobile) */}
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

        {/* Right Hamburger Menu Toggle (Only on Mobile) */}
        <button 
          className="md:hidden text-primary p-2 focus:outline-none flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 active:scale-95 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu Drawer (Visible only when menu option clicked) */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface-container/95 backdrop-blur-2xl border-b border-white/10 py-5 px-margin-mobile md:hidden flex flex-col gap-3 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-primary hover:bg-white/5 transition-all duration-200 font-label-caps text-label-caps py-2.5 px-4 rounded-xl"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
