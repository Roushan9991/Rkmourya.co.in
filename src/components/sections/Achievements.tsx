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
              <h3 className="font-headline-md text-on-surface mt-4">InterNIT Certificate</h3>
              <p className="text-body-lg text-on-surface-variant mt-2 font-bold">Got Silver Medal in Inter-NIT Kabaddi Tournament.</p>
              <p className="text-body-md text-on-surface-variant/60 mt-4 italic border-l-2 border-primary/50 pl-4">
                Awarded for teamwork, resilience, and strategic play during the Inter-NIT Tournament held at NIT Surathkal.
              </p>
              <div className="mt-8">
                <div className="text-label-caps text-[10px] tracking-widest text-on-surface-variant mb-3">CERTIFICATE PREVIEW</div>
                <div className="h-72 overflow-hidden rounded-2xl border border-white/10 bg-background">
                  <object data="/InterNit certificate.pdf" type="application/pdf" className="h-full w-full">
                    <p className="p-6 text-on-surface-variant">Inline PDF preview is not supported by your browser. <a href="/InterNit certificate.pdf" className="text-primary underline">Download the certificate</a>.</p>
                  </object>
                </div>
              </div>
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
              <h3 className="font-headline-md text-on-surface mt-4">Google Advanced Data Analytics Certification</h3>
              <p className="text-body-lg text-on-surface-variant mt-2 font-bold">Professional Certification - Coursera</p>
              <p className="text-body-md text-on-surface-variant/60 mt-4 border-l-2 border-secondary/50 pl-4">
                Build Practical Skills in Advanced Analytics, Predictive Modeling, Data Visualization, and Business Insights Generation.
              </p>
              <div className="mt-4">
                <a href="https://www.credly.com/badges/d3e0fcdb-74b2-4791-9333-c24547fcc73a" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Credly Badge Link
                </a>
              </div>
              <div className="mt-8">
                <div className="text-label-caps text-[10px] tracking-widest text-on-surface-variant mb-3">CERTIFICATE PREVIEW</div>
                <div className="h-72 overflow-hidden rounded-2xl border border-white/10 bg-background">
                  <object data="/coursera.pdf" type="application/pdf" className="h-full w-full">
                    <p className="p-6 text-on-surface-variant">Inline PDF preview is not supported by your browser. <a href="/coursera.pdf" className="text-secondary underline">Download the certificate</a>.</p>
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
