"use client";

import { motion } from 'framer-motion';
import { Monitor, Cpu, Zap, BarChart2 } from 'lucide-react';

const services = [
  {
    title: 'Resume Websites for Students/Professionals',
    desc: 'Tailored portfolio websites that showcase your skills, projects, and personal brand with polished UI and fast performance.',
    help: 'I build resume sites that highlight your career story, help you stand out in interviews, and make your work easy to explore across devices.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
    icon: <Monitor className="w-5 h-5 text-primary" />,
  },
  {
    title: 'ML Models for Prediction',
    desc: 'Production-ready machine learning solutions for forecasting, classification, and business intelligence.',
    help: 'I turn raw data into predictive models and deployable workflows, so you can make confident decisions from real-time signals.',
    image: '/ml_models.jpg',
    icon: <Cpu className="w-5 h-5 text-secondary" />,
  },
  {
    title: 'AI Agents for Automation',
    desc: 'Custom automation agents that reduce manual work and speed up data-driven processes.',
    help: 'I create smart automation for reporting, alerts, and data updates so your team spends less time on repetitive tasks and more time on strategy.',
    image: '/ai_agents.jpeg',
    icon: <Zap className="w-5 h-5 text-tertiary" />,
  },
  {
    title: 'PowerBI / Tableau Dashboards',
    desc: 'Interactive dashboards and analytics reports that make insights visible and actionable across your team.',
    help: 'I deliver dashboards that provide real-time visibility into your business performance and help drive data-informed decisions.',
    image: '/powerbi.jpg',
    icon: <BarChart2 className="w-5 h-5 text-accent" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-950/25 relative border-y border-white/[0.02]">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-16">
          <span className="font-label-caps text-xs text-secondary block tracking-wider font-semibold mb-2">SERVICES</span>
          <h2 className="font-display-lg text-2xl md:text-3xl font-bold text-slate-100 tracking-tight">Analytics Solutions</h2>
          <p className="font-body-md text-slate-400 max-w-xl mx-auto mt-3 text-center text-sm md:text-base leading-relaxed">
            I help students and businesses build modern web presence, predictive models, automation agents, and analytics dashboards that deliver measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl glass-panel border-white/5 hover:border-primary/20 shadow-2xl flex flex-col h-full transition-all duration-350"
            >
              <div className="relative h-36 w-full overflow-hidden bg-slate-950/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              </div>

              <div className="p-5 flex flex-col gap-4 flex-grow">
                <div className="inline-flex items-center gap-2.5 rounded-lg bg-white/[0.02] border border-white/5 px-2.5 py-1.5 text-xs text-slate-300">
                  <span className="w-6 h-6 rounded-md bg-white/[0.04] flex items-center justify-center shrink-0">{service.icon}</span>
                  <span className="font-body-lg font-bold text-slate-200">{service.title.split(" - ")[0]}</span>
                </div>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">{service.desc}</p>
                <p className="text-xs text-slate-500 leading-relaxed flex-grow">{service.help}</p>

                <div className="mt-4 pt-4 border-t border-white/5">
                  <a href="#contact" className="text-xs font-semibold text-primary hover:text-secondary transition-colors inline-flex items-center gap-1 font-label-caps tracking-wider">
                    Get a Quote &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
