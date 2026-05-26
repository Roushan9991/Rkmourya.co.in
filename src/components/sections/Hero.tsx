"use client";

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, Download } from 'lucide-react';

const HeroVisualizer = dynamic(() => import('../3d/HeroVisualizer'), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden">
      
      {/* Background 3D Visualizer */}
      <div className="absolute inset-0 z-0">
        <HeroVisualizer className="w-full h-full opacity-60" />
      </div>

      {/* Centered Content */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col items-center text-center gap-6 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 items-center"
        >
          <span className="font-label-caps text-[15px] md:text-label-caps text-secondary tracking-[0.4em] bg-surface/30 backdrop-blur-md px-6 py-2 rounded-full border border-secondary/20 shadow-[0_0_15px_rgba(93,230,255,0.1)]">
            HELLO! I AM ROUSHAN KUMAR MOURYA
          </span>
          <span className="font-body-lg text-on-surface-variant font-medium mt-2">
            Building the future with data, strategy, and intelligent systems. 
          </span>
          <div className="mt-2">
            <a href="#services" className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium border border-secondary/20 hover:bg-secondary/20 transition-all">Now offering services - explore</a>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display-lg text-primary text-[40px] md:text-[64px] lg:text-[80px] leading-[1.1] max-w-4xl drop-shadow-xl"
        >
          Turning data into <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary-container relative inline-block">meaningful<div className="absolute -bottom-2 left-0 w-full h-[3px] bg-secondary/50 blur-[2px]"></div></span> business insights.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-body-lg text-on-surface-variant max-w-2xl text-lg md:text-xl drop-shadow-md bg-surface/10 p-4 rounded-xl backdrop-blur-sm border border-white/5"
        >
          {/* FIXED: Changed Let's to Let&apos;s to resolve the react/no-unescaped-entities rule */}
          Building machine learning solutions, AI-powered dashboards, and analytics systems that solve real-world business problems. Let&apos;s explore how I can help your organization harness the power of data for strategic advantage.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <a href="#services" className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-primary-container text-on-primary font-body-md font-bold transition-all hover:scale-105 neon-glow-violet group shadow-xl">
            Explore Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#projects" className="flex items-center gap-2 px-8 py-4 rounded-full border border-primary text-primary font-body-md font-bold transition-all hover:bg-primary/20 backdrop-blur-md bg-surface/30">
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="/Roushan_Resume.pdf" download="Roushan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-full border border-primary text-primary font-body-md font-bold transition-all hover:bg-primary/20 backdrop-blur-md bg-surface/30">
            <Download className="w-4 h-4" />
            Resume
          </a>
        </motion.div>
      </div>

      {/* Bottom Gradient overlay to blend into the next section smoothly */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}