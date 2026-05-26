"use client";

import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  {
    role: "Data & Analytics Intern",
    company: "ITC LIMITED",
    duration: "May 2026 - Jun 2026",
    points: [
      "Analysed the Wheat Buying data across MP and suggested low buying area with high quality of grains.",
      "Setup Automatic Measuring Machine for grains quality at procurement center which increase the efficiency of buying",
      "Built dashboard for tracking real time buying data across different location about quality and quantity and rejection of wheat"
    ]
  },
  {
    role: "Product Solutioning Consultant",
    company: "DARWINBOX",
    duration: "Apr 2024 - Sep 2024",
    points: [
      "Consulted enterprise clients and resolved Time Management module issues, improving user experience and platform adoption.",
      "Built self-service documentation and FAQs, reducing recurring client queries and support effort.",
      "Built 200+ digital walkthroughs (Pendo) to enhance user onboarding and engagement.",
      "Executed end-to-end audit trail testing, ensuring transaction accuracy and system reliability.",
      "Created and presented quarterly release communication decks to drive awareness of product enhancements."
    ]
  },
  {
    role: "Business Analyst",
    company: "DARWINBOX",
    duration: "Jul 2022 - Mar 2024",
    points: [
      "Built interactive Power BI dashboards for real-time KPI monitoring and decision-making.",
      "Written 50+ DAX measures to enhance dashboard interactivity and data storytelling.",
      "Reduced ticket resolution time by 50% through data-driven process optimization.",
      "Established requirement governance in JIRA, improving alignment and delivery effectiveness.",
      "Streamlined ETL pipelines, reducing manual dependency and enabling faster business reporting."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-40">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-label-caps text-label-caps text-secondary">CAREER PATH</span>
            <h2 className="font-display-lg text-[40px] md:text-headline-md text-on-surface">Professional Experience</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body-md text-on-surface-variant max-w-sm"
          >
            Driving digital transformation and operational excellence at scale.
          </motion.p>
        </div>
        
        <div className="flex flex-col gap-12 items-center">
          {experiences.map((exp, expIndex) => (
            <motion.div 
              key={expIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: expIndex * 0.2 }}
              className="w-full max-w-4xl glass-panel p-10 rounded-xl hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-700"></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <h3 className="text-headline-md font-bold text-primary group-hover:text-secondary transition-colors">{exp.role}</h3>
                    <p className="font-label-caps text-label-caps text-on-surface-variant mt-2 tracking-widest">{exp.company}</p>
                    <p className="font-body-md text-on-surface-variant/80 mt-1">{exp.duration}</p>
                </div>
                  {exp.company === "DARWINBOX" ? (
                    <Image 
                      src="/darwinbox.png" 
                      alt="Darwinbox Logo" 
                      width={40} 
                      height={20}
                      className="h-12 w-auto shrink-0"
                    />
                  ) : exp.company === "ITC LIMITED" ? (
                    <Image
                      src="/Itc_logo_black_sharp.png"
                      alt="ITC Logo"
                      width={120}
                      height={60}
                      className="h-20 w-20 shrink-0"
                    />
                  ) : (
                    <Briefcase className="w-12 h-12 text-white/10 group-hover:text-primary transition-all duration-500 hidden sm:block" />
                  )}
              </div>
              
              <ul className="space-y-4 relative z-10">
                {exp.points.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                    <span className="text-body-lg text-on-surface-variant">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
