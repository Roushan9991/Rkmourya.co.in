"use client";

import { motion } from 'framer-motion';
import { Medal, Award } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-40 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-label-caps text-label-caps text-secondary block mb-4 tracking-widest">RECOGNITION</span>
          <h2 className="font-headline-md text-on-surface">Milestones & Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-10 rounded-xl relative overflow-hidden group hover:border-primary/40 transition-colors duration-500"
          >
            <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
              <Medal className="w-64 h-64 text-primary" />
            </div>
            <div className="relative z-10">
              <span className="font-label-caps text-label-caps text-primary">SPORTSMANSHIP</span>
              <h3 className="font-headline-md text-on-surface mt-4">Silver Medalist</h3>
              <p className="text-body-lg text-on-surface-variant mt-2 font-bold">All India Inter-NIT Kabaddi Championship</p>
              <p className="text-body-md text-on-surface-variant/60 mt-4 italic border-l-2 border-primary/50 pl-4">
                Demonstrating teamwork, discipline, and strategic grit under pressure.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-10 rounded-xl relative overflow-hidden group hover:border-secondary/40 transition-colors duration-500"
          >
            <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
              <Award className="w-64 h-64 text-secondary" />
            </div>
            <div className="relative z-10">
              <span className="font-label-caps text-label-caps text-secondary">CERTIFICATION</span>
              <h3 className="font-headline-md text-on-surface mt-4">Google Data Analytics</h3>
              <p className="text-body-lg text-on-surface-variant mt-2 font-bold">Professional Certification — Coursera</p>
              <p className="text-body-md text-on-surface-variant/60 mt-4 border-l-2 border-secondary/50 pl-4">
                End-to-end data processing, analysis, and visualization mastery.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {['SQL', 'Power BI', 'Advanced Excel', 'Python'].map(cert => (
                  <span key={cert} className="text-[10px] font-label-caps bg-surface-bright px-2 py-1 rounded text-on-surface-variant">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
