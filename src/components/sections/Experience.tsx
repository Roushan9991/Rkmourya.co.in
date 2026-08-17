"use client";

import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  {
    role: "Business Analyst",
    company: "DARWINBOX",
    duration: "Jul 2022 - Mar 2024",
    points: [
      "Performed EDA and KPI analysis on operational datasets, uncovering business trends and generating actionable insights for decision-making.",
      "Developed interactive Power BI dashboards to monitor KPIs, visualize business performance and support strategic support planning initiatives.",
      "Reduced average ticket resolution time by 50% through trend analysis, process optimization, and implementation of standardized SOPs.",
      "Streamlined ETL processes using Power Query Editor and Advanced Excel, improving data quality, workflow efficiency and reporting accuracy."
    ]
  },
  {
    role: "Product Solutioning Consultant",
    company: "DARWINBOX",
    duration: "Apr 2024 - Sep 2024",
    points: [
      "Collaborated with cross-functional teams including Product, Engineering and Client Success teams to gather requirements, troubleshoot business problems, and deliver effective product solutions for enterprise clients while ensuring seamless implementation and user experience.",
      "Created and Implemented 200+ Pendo guides covering multiple functionalities of the Time Management module to increase client adoption and engagement.",
      "Conducted thorough and systematic testing of audit trail using diverse case scenarios to ensure accurate logging of all system transactions."
    ]
  },
  {
    role: "Data & Analytics Intern",
    company: "ITC LIMITED",
    duration: "May 2026 - Jun 2026",
    points: [
      "Analyzed 10 years of commodity price across 16 agricultural commodities to identify seasonal trends & 8-16% historical return opportunities.",
      "Developed a wheat quality scoring framework using 8 quality parameters to benchmark sourcing locations and historical procurement quality.",
      "Assessed 10 wheat variety across procurement regions to identify high-quality under-procured locations for sourcing expansion in MP region.",
      "Delivered data-driven procurement recommendations by integrating quality scores and regional trends to optimize strategic sourcing decision.",
      "Evaluated 4 AI/ML based grain quality assessment startups by benchmarking technological capabilities, scalability and automation potential."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-slate-950/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        
        {/* Header block */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-label-caps text-xs text-primary block tracking-wider font-semibold mb-2">CAREER PATH</span>
            <h2 className="font-display-lg text-3xl md:text-4xl text-slate-100 font-bold tracking-tight">Professional Experience</h2>
          </motion.div>
        </div>

        {/* CURVY ROAD LAYOUT */}
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* CURVY ROAD SVG BACKGROUND (Desktop: centered; Mobile: left-aligned) */}
          {/* Desktop curvy road (winding double S-curve) */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-48 h-full z-0 hidden md:block pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full opacity-30">
              {/* Road Shadow/Glow */}
              <path d="M 50,0 C 15,25 85,25 50,50 C 15,75 85,75 50,100" fill="none" stroke="rgba(59,130,246,0.02)" strokeWidth="24" />
              {/* Road surface */}
              <path d="M 50,0 C 15,25 85,25 50,50 C 15,75 85,75 50,100" fill="none" stroke="#0d1527" strokeWidth="12" strokeLinecap="round" />
              {/* Lane marker center line */}
              <path d="M 50,0 C 15,25 85,25 50,50 C 15,75 85,75 50,100" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />
            </svg>
          </div>

          {/* Mobile curvy road (gentle wave on the left) */}
          <div className="absolute inset-y-0 left-4 w-12 h-full z-0 md:hidden pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full opacity-35">
              <path d="M 30,0 Q 70,25 30,50 T 30,100" fill="none" stroke="#0d1527" strokeWidth="14" strokeLinecap="round" />
              <path d="M 30,0 Q 70,25 30,50 T 30,100" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />
            </svg>
          </div>

          {/* TIMELINE ITEMS CONTAINER */}
          <div className="relative z-10 flex flex-col gap-24 md:gap-32">
            {experiences.map((exp, index) => {
              const isLeftCard = index % 2 === 1; // Alternating cards: 1st card BA on right, 2nd card PSC on left, 3rd card ITC on right
              return (
                <div key={index}>
                  {/* DESKTOP LAYOUT (Alternating Grid) */}
                  <div className="hidden md:grid grid-cols-9 gap-4 items-center relative">
                    {/* Left Card Slot */}
                    <div className="col-span-4 flex justify-end">
                      {isLeftCard && (
                        <motion.div 
                          initial={{ opacity: 0, x: -35 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className="w-full max-w-[420px]"
                        >
                          <ExperienceCard exp={exp} />
                        </motion.div>
                      )}
                    </div>

                    {/* Center Milestone Node */}
                    <div className="col-span-1 flex justify-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', delay: 0.1 }}
                        className="w-10 h-10 rounded-full bg-slate-950 border-4 border-slate-900 flex items-center justify-center shadow-lg relative z-20 group cursor-default"
                      >
                        <span className="w-3 h-3 rounded-full bg-primary group-hover:bg-secondary transition-colors" />
                        {/* Chronological order number display */}
                        <span className="absolute -top-6 text-[9px] font-label-caps text-slate-500 font-bold">0{index + 1}</span>
                      </motion.div>
                    </div>

                    {/* Right Card Slot */}
                    <div className="col-span-4 flex justify-start">
                      {!isLeftCard && (
                        <motion.div 
                          initial={{ opacity: 0, x: 35 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className="w-full max-w-[420px]"
                        >
                          <ExperienceCard exp={exp} />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* MOBILE LAYOUT (Stack on the Right) */}
                  <div className="flex md:hidden gap-6 items-start relative">
                    {/* Left Milestone Node on the Mobile Wavy Path */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring' }}
                      className="w-8 h-8 rounded-full bg-slate-950 border-4 border-slate-900 flex items-center justify-center shadow-lg mt-4 shrink-0 relative z-20"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    </motion.div>

                    {/* Right Card */}
                    <motion.div 
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex-grow"
                    >
                      <ExperienceCard exp={exp} />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

// Extracted clean reusable sub-component card
function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  return (
    <div className="glass-panel p-6 md:p-8 rounded-2xl hover:border-primary/20 transition-all duration-350 group relative overflow-hidden shadow-xl w-full">
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/[0.01] blur-[70px] rounded-full group-hover:bg-primary/[0.03] transition-all duration-500"></div>
      
      <div className="flex justify-between items-start mb-5 relative z-10 gap-3">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-slate-200 group-hover:text-primary transition-colors leading-tight">{exp.role}</h3>
          <p className="font-label-caps text-[10px] text-slate-400 mt-2.5 tracking-wider font-semibold">{exp.company}</p>
          <p className="font-body-md text-slate-500 text-[11px] md:text-xs mt-1">{exp.duration}</p>
        </div>
        
        {exp.company === "DARWINBOX" ? (
          <Image 
            src="/darwinbox.png" 
            alt="Darwinbox Logo" 
            width={36} 
            height={18}
            className="h-8 w-auto shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
          />
        ) : exp.company === "ITC LIMITED" ? (
          <Image
            src="/Itc_logo_black_sharp.png"
            alt="ITC Logo"
            width={80}
            height={40}
            className="h-12 w-12 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
          />
        ) : (
          <Briefcase className="w-8 h-8 text-white/5 group-hover:text-primary transition-all duration-500 shrink-0" />
        )}
      </div>
      
      <ul className="space-y-2.5 relative z-10 text-left">
        {exp.points.map((item, index) => (
          <li 
            key={index}
            className="flex gap-3 items-start"
          >
            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
            <span className="text-xs md:text-sm text-slate-400 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
