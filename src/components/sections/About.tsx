"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-40 bg-surface-container-lowest/50 relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-10 rounded-xl space-y-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <GraduationCap className="w-40 h-40 text-primary" />
            </div>
            
            <span className="font-label-caps text-label-caps text-primary">BACKGROUND</span>
            <h2 className="font-headline-md text-on-surface">Academic Excellence</h2>
            
            <div className="space-y-8 relative z-10">
              <div className="flex gap-6 group/item">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-primary/30 transition-all">
                  <GraduationCap className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-body-lg font-bold text-primary">IIM Kashipur</h3>
                  <p className="text-on-surface-variant">MBA in Analytics - Specializing in data-driven strategy and business intelligence.</p>
                </div>
              </div>

              <div className="flex gap-6 group/item">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-secondary/30 transition-all">
                  <Briefcase className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-body-lg font-bold text-secondary">NIT Bhopal (MANIT)</h3>
                  <p className="text-on-surface-variant">B.Tech in Mechanical Engineering - Grounded in technical rigor and analytical problem-solving.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8 p-10"
          >
            <h2 className="font-display-lg text-[40px] md:text-[56px] text-on-surface leading-tight">
              Data speaks.<br />
              I make it tell <span className="text-secondary italic">Meaningful Stories</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Bridging the gap between raw data and business decisions. My approach combines technical fluency with business acumen to deliver measurable impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
