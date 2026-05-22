"use client";

import { motion } from 'framer-motion';
import { Monitor, Cpu, Zap, BarChart2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Resume Websites for Students',
      desc: 'Tailored, fast portfolio & resume sites to showcase skills and land interviews.',
      icon: <Monitor className="w-6 h-6 text-primary" />,
    },
    {
      title: 'ML Models for Prediction',
      desc: 'Production-ready machine learning models for forecasting and classification.',
      icon: <Cpu className="w-6 h-6 text-secondary" />,
    },
    {
      title: 'AI Agents for Automation',
      desc: 'Custom AI agents to automate workflows, customer interactions, and tasks.',
      icon: <Zap className="w-6 h-6 text-tertiary" />,
    },
    {
      title: 'PowerBI / Tableau Dashboards',
      desc: 'Interactive dashboards and reports to surface insights and drive decisions.',
      icon: <BarChart2 className="w-6 h-6 text-accent" />,
    },
  ];

  return (
    <section id="services" className="py-40 bg-surface/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-on-surface">Services</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mt-4">
            I help students and businesses build modern web presence, predictive models, automation agents, and analytics dashboards that deliver measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-6 rounded-xl flex flex-col gap-4 hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-surface-bright/40 flex items-center justify-center">
                  {s.icon}
                </div>
                <h3 className="font-body-lg font-bold text-on-surface">{s.title}</h3>
              </div>
              <p className="text-on-surface-variant flex-1">{s.desc}</p>
              <div className="flex items-center gap-3 mt-2">
                <a href="#contact" className="text-primary font-medium hover:underline">Get a Quote</a>
                <a href="#contact" className="ml-auto text-on-surface/70">Discuss Project</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
