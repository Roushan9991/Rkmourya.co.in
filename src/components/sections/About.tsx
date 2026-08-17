"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-950/25 relative border-y border-white/[0.02]">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-10 rounded-2xl space-y-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
               <GraduationCap className="w-36 h-36 text-primary" />
            </div>
            
            <span className="font-label-caps text-xs text-primary block tracking-wider font-semibold">BACKGROUND</span>
            <h2 className="font-display-lg text-2xl md:text-3xl font-bold text-slate-100">Academic Excellence</h2>
            
            <div className="space-y-6 relative z-10">
              <div className="flex gap-5 group/item">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover/item:border-primary/30 transition-all">
                  <GraduationCap className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-body-lg font-bold text-slate-200">IIM Kashipur</h3>
                  <p className="text-slate-400 text-sm mt-1">MBA in Analytics - Specializing in data-driven strategy and business intelligence.</p>
                </div>
              </div>

              <div className="flex gap-5 group/item">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover/item:border-secondary/30 transition-all">
                  <Briefcase className="text-secondary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-body-lg font-bold text-slate-200">NIT Bhopal (MANIT)</h3>
                  <p className="text-slate-400 text-sm mt-1">B.Tech in Mechanical Engineering - Grounded in technical rigor and analytical problem-solving.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <h2 className="font-display-lg text-3xl md:text-5xl text-slate-100 leading-tight font-bold tracking-tight">
              Data speaks.<br />
              I make it tell <span className="text-secondary italic font-medium">Meaningful Stories</span>
            </h2>
            <p className="text-body-lg text-slate-400 text-base md:text-lg leading-relaxed">
              Bridging the gap between raw data and business decisions. My approach combines technical fluency with business acumen to deliver measurable impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
