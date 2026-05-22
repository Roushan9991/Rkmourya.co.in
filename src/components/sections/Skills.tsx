"use client";

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const SkillsVisualizer = dynamic(() => import('../3d/SkillsVisualizer'), {
  ssr: false,
  loading: () => <div className="w-full h-[500px] md:h-[600px]" />,
});

export default function Skills() {
  return (
    <section id="skills" className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[150px] rounded-full z-0 pointer-events-none"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-label-caps text-label-caps text-primary block mb-4 tracking-widest">EXPERTISE</span>
          <h2 className="font-headline-md text-on-surface mb-12">Tools That Drive My Analytics Journey</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-panel rounded-3xl border-primary/20 p-4"
        >
          <SkillsVisualizer />
        </motion.div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-4 md:hidden">
          {['Python', 'SQL', 'Power BI', 'Excel', 'DAX', 'Machine Learning', 'Data Analytics', 'Statistics', 'Powerpoint', 'Tableau', 'R', 'NLP', 'JIRA', 'MATLAB'].map((skill, index) => (
            <span key={index} className="glass-panel px-4 py-2 rounded-full font-label-caps text-xs text-primary-fixed border-primary/30">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
