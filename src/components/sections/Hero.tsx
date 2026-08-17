"use client";

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Download } from 'lucide-react';

const HeroVisualizer = dynamic(() => import('../3d/HeroVisualizer'), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-32 overflow-hidden">
      
      {/* Background SVG Visualizer */}
      <div className="absolute inset-0 z-0">
        <HeroVisualizer className="w-full h-full opacity-40" />
      </div>

      {/* Centered Content */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col items-center text-center gap-6 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 items-center"
        >
          <span className="font-label-caps text-xs md:text-label-caps text-primary tracking-[0.3em] bg-slate-950/45 backdrop-blur-md px-5 py-2 rounded-full border border-white/[0.04] shadow-sm select-none">
            HELLO! I AM ROUSHAN KUMAR MOURYA
          </span>
          <span className="font-body-lg text-slate-400 text-sm md:text-base font-medium mt-2">
            Data Analyst & Business Intelligence Specialist
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display-lg text-slate-100 text-[36px] md:text-[60px] lg:text-[76px] leading-[1.12] max-w-4xl tracking-tight font-bold"
        >
          Turning Data Into <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary relative inline-block">Meaningful Business Insights.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-body-lg text-slate-300 max-w-2xl text-base md:text-lg bg-slate-950/20 p-4 rounded-xl backdrop-blur-[2px] border border-white/[0.04]"
        >
          Building data-driven solutions, intelligent dashboards, and machine learning systems that transform complex data into actionable business decisions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          <a href="#services" className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-body-md font-bold transition-all shadow-lg hover:shadow-primary/10 group">
            Explore Services →
          </a>
          <a href="#projects" className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-slate-300 font-body-md font-bold transition-all hover:bg-white/5 hover:text-white backdrop-blur-md bg-slate-950/20">
            Explore Projects →
          </a>
          <a href="/Roushan_Resume.pdf" download="Roushan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-slate-300 font-body-md font-bold transition-all hover:bg-white/5 hover:text-white backdrop-blur-md bg-slate-950/20">
            <Download className="w-4 h-4 text-slate-400 group-hover:text-white" />
            Resume ↓
          </a>
        </motion.div>
      </div>

      {/* Bottom Gradient overlay to blend into the next section smoothly */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background via-background/90 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}