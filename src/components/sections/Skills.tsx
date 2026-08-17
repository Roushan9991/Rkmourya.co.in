"use client";

import { motion } from 'framer-motion';
import SkillsVisualizer from '../3d/SkillsVisualizer';

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden border-b border-white/[0.02]">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-label-caps text-xs text-primary block mb-2 tracking-wider font-semibold">EXPERTISE</span>
          <h2 className="font-display-lg text-2xl md:text-3xl font-bold text-slate-100 mb-12">Tools That Drive My Analytics Journey</h2>
        </motion.div>
        
        <div className="relative">
          <SkillsVisualizer />
        </div>
      </div>
    </section>
  );
}
