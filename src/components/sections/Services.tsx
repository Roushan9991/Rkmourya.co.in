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
    <section id="services" className="py-40 bg-surface/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-12">
          <span className="font-label-caps text-label-caps text-secondary block mb-4 tracking-widest">SERVICES</span>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mt-4 text-center">
            I help students and businesses build modern web presence, predictive models, automation agents, and analytics dashboards that deliver measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-xl border border-white/10 shadow-xl overflow-hidden flex flex-col"
            >
              <div className="relative h-40 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="inline-flex items-center gap-3 rounded-full bg-surface-bright/50 px-3 py-2 text-sm text-on-surface-variant">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">{service.icon}</span>
                  <span className="font-body-lg font-semibold text-on-surface">{service.title}</span>
                </div>
                <p className="font-body-md text-on-surface">{service.desc}</p>
                <p className="font-body-sm text-on-surface-variant">{service.help}</p>

                <div className="mt-auto pt-4 border-t border-white/10">
                  <a href="#contact" className="text-primary font-medium hover:text-secondary transition-colors">Get a Quote</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
