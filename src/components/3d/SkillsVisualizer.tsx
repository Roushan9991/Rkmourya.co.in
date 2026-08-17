"use client";

import { motion } from 'framer-motion';
import { Database, TrendingUp, BarChart3, Star } from 'lucide-react';

const categories = [
  {
    title: "Analytics & ML",
    icon: <TrendingUp className="w-5 h-5 text-secondary" />,
    skills: [
      { name: 'Machine Learning', level: 'Advanced' },
      { name: 'Data Analytics', level: 'Expert' },
      { name: 'Statistics', level: 'Advanced' },
      { name: 'NLP', level: 'Intermediate' },
      { name: 'R Programming', level: 'Intermediate' },
      { name: 'MATLAB', level: 'Intermediate' }
    ],
    bgGlow: 'from-secondary/5 to-transparent'
  },
  {
    title: "Business Intelligence",
    icon: <BarChart3 className="w-5 h-5 text-primary" />,
    skills: [
      { name: 'Power BI', level: 'Expert' },
      { name: 'Tableau', level: 'Advanced' },
      { name: 'DAX', level: 'Expert' },
      { name: 'Excel', level: 'Expert' },
      { name: 'Powerpoint', level: 'Advanced' }
    ],
    bgGlow: 'from-primary/5 to-transparent'
  },
  {
    title: "Data Management & Dev",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    skills: [
      { name: 'SQL', level: 'Expert' },
      { name: 'Python', level: 'Expert' },
      { name: 'JIRA', level: 'Intermediate' }
    ],
    bgGlow: 'from-emerald-400/5 to-transparent'
  }
];

export default function SkillsVisualizer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full">
      {categories.map((category, catIdx) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: catIdx * 0.15 }}
          className="relative overflow-hidden rounded-2xl border border-white/5 bg-slate-950/45 p-6 hover:border-white/10 transition-all duration-300 group flex flex-col justify-between"
        >
          {/* Subtle Ambient Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGlow} opacity-30 pointer-events-none`} />

          <div className="relative z-10 space-y-5">
            {/* Category Header */}
            <div className="flex items-center gap-3 pb-3 border-b border-white/5">
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                {category.icon}
              </div>
              <h3 className="font-body-lg font-bold text-slate-200 tracking-tight">{category.title}</h3>
            </div>

            {/* Skills Tag List */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.03, translateY: -1 }}
                  className="px-3.5 py-2 rounded-xl bg-slate-950/60 border border-white/5 hover:border-slate-700/60 transition-colors flex items-center gap-2 group/tag cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover/tag:bg-primary transition-colors shrink-0" />
                  <span className="font-body-md text-xs font-medium text-slate-300 group-hover/tag:text-slate-100 transition-colors">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom decorative stats bar matching the BA role */}
          <div className="mt-8 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-label-caps text-slate-500 tracking-wider relative z-10">
            <span>TECHNICAL CAPABILITY</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star 
                  key={s} 
                  className={`w-2.5 h-2.5 ${
                    s <= (catIdx === 0 ? 4 : catIdx === 1 ? 5 : 5) 
                      ? 'text-primary fill-primary/30' 
                      : 'text-slate-700'
                  }`} 
                />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
