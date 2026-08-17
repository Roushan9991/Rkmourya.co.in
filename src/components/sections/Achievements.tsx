"use client";

import { motion } from 'framer-motion';
import { Medal, Award } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.01] blur-[120px] rounded-full z-0 pointer-events-none"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-label-caps text-xs text-secondary block tracking-wider font-semibold mb-2">RECOGNITION</span>
          <h2 className="font-display-lg text-2xl md:text-3xl font-bold text-slate-100 tracking-tight">Milestones & Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:border-primary/20 transition-all duration-350"
          >
            <div className="absolute -top-10 -right-10 p-4 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-105 transition-all duration-500 pointer-events-none">
              <Medal className="w-56 h-56 text-primary" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="font-label-caps text-[10px] text-primary font-bold tracking-wider">SPORTSMANSHIP</span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-200 mt-2">InterNIT Certificate</h3>
                <p className="text-sm text-slate-300 font-bold mt-1">Silver Medalist - Inter-NIT Kabaddi Tournament</p>
                <p className="text-xs md:text-sm text-slate-400 mt-4 italic border-l-2 border-primary/30 pl-4 leading-relaxed">
                  Awarded for teamwork, resilience, and strategic play during the Inter-NIT Tournament held at NIT Surathkal.
                </p>
              </div>
              <div className="mt-8">
                <div className="text-[10px] font-label-caps tracking-wider text-slate-500 mb-3">CERTIFICATE PREVIEW</div>
                <div className="h-64 overflow-hidden rounded-xl border border-white/5 bg-slate-950/60">
                  <object data="/InterNit certificate.pdf" type="application/pdf" className="h-full w-full">
                    <p className="p-6 text-xs text-slate-400">Inline PDF preview is not supported by your browser. <a href="/InterNit certificate.pdf" className="text-primary underline">Download the certificate</a>.</p>
                  </object>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:border-secondary/20 transition-all duration-350"
          >
            <div className="absolute -top-10 -right-10 p-4 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-105 transition-all duration-500 pointer-events-none">
              <Award className="w-56 h-56 text-secondary" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="font-label-caps text-[10px] text-secondary font-bold tracking-wider">CERTIFICATION</span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-200 mt-2">Google Advanced Data Analytics</h3>
                <p className="text-sm text-slate-300 font-bold mt-1">Professional Certification - Coursera</p>
                <p className="text-xs md:text-sm text-slate-400 mt-4 italic border-l-2 border-secondary/30 pl-4 leading-relaxed">
                  Build Practical Skills in Advanced Analytics, Predictive Modeling, Data Visualization, and Business Insights Generation.
                </p>
                <div className="mt-3">
                  <a href="https://www.credly.com/badges/d3e0fcdb-74b2-4791-9333-c24547fcc73a" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:text-secondary transition-colors font-label-caps tracking-wider">
                    Credly Badge Link &rarr;
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <div className="text-[10px] font-label-caps tracking-wider text-slate-500 mb-3">CERTIFICATE PREVIEW</div>
                <div className="h-64 overflow-hidden rounded-xl border border-white/5 bg-slate-950/60">
                  <object data="/coursera.pdf" type="application/pdf" className="h-full w-full">
                    <p className="p-6 text-xs text-slate-400">Inline PDF preview is not supported by your browser. <a href="/coursera.pdf" className="text-secondary underline">Download the certificate</a>.</p>
                  </object>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
