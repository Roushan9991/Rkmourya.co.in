"use client";

import { motion } from 'framer-motion';
import { Mail, Send, FileText } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [service, setService] = useState('Resume Website');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('_subject', 'Quote Request from Website');

    try {
      const response = await fetch('https://formsubmit.co/ajax/rkmourya999@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setService('Resume Website');
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-40 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full z-0 pointer-events-none"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4">LET&apos;S CONNECT</span>
              <h2 className="font-display-lg text-[40px] md:text-[56px] text-on-surface leading-tight">
                Ready to transform your data?
              </h2>
            </div>
            
            <p className="text-body-lg text-on-surface-variant max-w-md">
              Whether you already have a project in mind, want to turn an idea into something practical, or are curious about what AI and analytics can do for your business - I&apos;d love to hear from you.<br/><br/>I enjoy solving real problems that create measurable impact, not just producing another report or dashboard.
              
              <br/><br/>Reach out for collaboration, project planning, feedback, or simply a thoughtful conversation.
            </p>

            <div className="flex flex-col gap-6 mt-8">
              <a href="mailto:rkmourya999@gmail.com" className="flex items-center gap-4 text-on-surface hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-caps text-[10px] text-on-surface-variant">EMAIL</span>
                  <span className="font-body-md font-medium">rkmourya999@gmail.com</span>
                </div>
              </a>
              
              <div className="flex gap-4 mt-4">
                <a href="https://www.linkedin.com/in/roushan-kumar-mourya-001668196" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-secondary hover:border-secondary/50 transition-all">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/Roushan9991" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="/Roushan_Resume.pdf" download="Roushan_Resume.pdf" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:border-white/50 transition-all">
                  <FileText className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 rounded-2xl flex flex-col gap-6 relative overflow-hidden">
              {isSubmitted && (
                <div className="absolute inset-0 bg-surface/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-headline-md text-on-surface mb-2">Quote Request Sent!</h3>
                  <p className="text-on-surface-variant font-body-md">Thanks for submitting your project details. I&apos;ll reach out to you soon.</p>
                </div>
              )}

              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">FULL NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">BUDGET RANGE</label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl [&>option]:bg-white [&>option]:text-black"
                    >
                      <option className="text-on-surface" value="">Select your budget</option>
                      <option className="text-on-surface">Upto ₹5k</option>
                      <option className="text-on-surface">₹5k-15k</option>
                      <option className="text-on-surface">₹15k-50k</option>
                      <option className="text-on-surface">₹50k+</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="timeline" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">TIMELINE / DEADLINE</label>
                    <input
                      type="text"
                      id="timeline"
                      name="timeline"
                      required
                      className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl"
                      placeholder="e.g. 4 weeks, May 2026"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">SERVICE</label>
                  <select
                    id="service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl [&>option]:bg-white [&>option]:text-black"
                  >
                    <option className="text-on-surface">Resume Website</option>
                    <option className="text-on-surface">ML Models for Prediction</option>
                    <option className="text-on-surface">AI Agents for Automation</option>
                    <option className="text-on-surface">PowerBI / Tableau Dashboard</option>
                  </select>
                </div>
              </div>

              {service === 'Resume Website' && (
                <div className="grid gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="resume" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">SHARE YOUR CURRENT RESUME / CV</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="w-full text-sm text-on-surface bg-surface-container-lowest/50 border border-outline-variant/50 rounded-2xl px-4 py-3"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="designStyle" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">PREFERRED DESIGN STYLE</label>
                      <select
                        id="designStyle"
                        name="designStyle"
                        required
                        className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl [&>option]:bg-white [&>option]:text-black"
                      >
                        <option className="text-on-surface" value="">Choose one</option>
                        <option className="text-on-surface">Minimal</option>
                        <option className="text-on-surface">Bold</option>
                        <option className="text-on-surface">Creative</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="customDomain" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">DO YOU NEED A CUSTOM DOMAIN?</label>
                      <select
                        id="customDomain"
                        name="customDomain"
                        required
                        className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl [&>option]:bg-white [&>option]:text-black"
                      >
                        <option className="text-on-surface" value="">Choose one</option>
                        <option className="text-on-surface">Yes</option>
                        <option className="text-on-surface">No</option>
                        <option className="text-on-surface">Not sure</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="referenceSites" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">ANY REFERENCE WEBSITES YOU LIKE?</label>
                    <textarea
                      id="referenceSites"
                      name="referenceSites"
                      rows={3}
                      className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl resize-none"
                      placeholder="Paste links or describe the style you want..."
                    />
                  </div>
                </div>
              )}

              {service === 'ML Models for Prediction' && (
                <div className="grid gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="predictionProblem" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">WHAT PROBLEM ARE YOU TRYING TO PREDICT?</label>
                    <input
                      type="text"
                      id="predictionProblem"
                      name="predictionProblem"
                      required
                      className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl"
                      placeholder="e.g. sales, churn, demand"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="existingData" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">DO YOU HAVE EXISTING DATA?</label>
                      <select
                        id="existingData"
                        name="existingData"
                        required
                        className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl [&>option]:bg-white [&>option]:text-black"
                      >
                        <option className="text-on-surface" value="">Choose one</option>
                        <option className="text-on-surface">Yes</option>
                        <option className="text-on-surface">No</option>
                        <option className="text-on-surface">Partial</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="dataFormat" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">WHAT FORMAT IS YOUR DATA IN?</label>
                      <select
                        id="dataFormat"
                        name="dataFormat"
                        required
                        className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl [&>option]:bg-white [&>option]:text-black"
                      >
                        <option className="text-on-surface" value="">Choose one</option>
                        <option className="text-on-surface">Excel</option>
                        <option className="text-on-surface">CSV</option>
                        <option className="text-on-surface">Database</option>
                        <option className="text-on-surface">API</option>
                        <option className="text-on-surface">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="deployment" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">WHERE SHOULD THE MODEL BE DEPLOYED?</label>
                    <select
                      id="deployment"
                      name="deployment"
                      required
                      className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl [&>option]:bg-white [&>option]:text-black"
                    >
                      <option className="text-on-surface" value="">Choose one</option>
                      <option className="text-on-surface">Web</option>
                      <option className="text-on-surface">Local</option>
                      <option className="text-on-surface">Cloud</option>
                    </select>
                  </div>
                </div>
              )}

              {service === 'AI Agents for Automation' && (
                <div className="grid gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="automationTask" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">WHAT TASK DO YOU WANT TO AUTOMATE?</label>
                    <textarea
                      id="automationTask"
                      name="automationTask"
                      rows={3}
                      required
                      className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl resize-none"
                      placeholder="Describe the task or process..."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="platforms" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">WHAT TOOLS / PLATFORMS ARE INVOLVED?</label>
                      <input
                        type="text"
                        id="platforms"
                        name="platforms"
                        required
                        className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl"
                        placeholder="e.g. Excel, WhatsApp, Google Sheets"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="frequency" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">HOW OFTEN SHOULD IT RUN?</label>
                      <select
                        id="frequency"
                        name="frequency"
                        required
                        className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl [&>option]:bg-white [&>option]:text-black"
                      >
                        <option className="text-on-surface" value="">Choose one</option>
                        <option className="text-on-surface">Real-time</option>
                        <option className="text-on-surface">Daily</option>
                        <option className="text-on-surface">Weekly</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="workflowDocs" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">ANY EXISTING WORKFLOW DOCUMENTATION?</label>
                    <textarea
                      id="workflowDocs"
                      name="workflowDocs"
                      rows={3}
                      className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl resize-none"
                      placeholder="Links or details about current process..."
                    />
                  </div>
                </div>
              )}

              {service === 'PowerBI / Tableau Dashboard' && (
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="dataSource" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">WHAT DATA SOURCE DO YOU HAVE?</label>
                      <select
                        id="dataSource"
                        name="dataSource"
                        required
                        className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl [&>option]:bg-white [&>option]:text-black"
                      >
                        <option className="text-on-surface" value="">Choose one</option>
                        <option className="text-on-surface">Excel</option>
                        <option className="text-on-surface">SQL</option>
                        <option className="text-on-surface">API</option>
                        <option className="text-on-surface">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="reportPages" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">HOW MANY REPORTS / PAGES NEEDED?</label>
                      <select
                        id="reportPages"
                        name="reportPages"
                        required
                        className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl [&>option]:bg-white [&>option]:text-black"
                      >
                        <option className="text-on-surface" value="">Choose one</option>
                        <option className="text-on-surface">1-3</option>
                        <option className="text-on-surface">4-6</option>
                        <option className="text-on-surface">7+</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="viewers" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">WHO WILL VIEW IT?</label>
                      <select
                        id="viewers"
                        name="viewers"
                        required
                        className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl [&>option]:bg-white [&>option]:text-black"
                      >
                        <option className="text-on-surface" value="">Choose one</option>
                        <option className="text-on-surface">Internal team</option>
                        <option className="text-on-surface">Clients</option>
                        <option className="text-on-surface">Executives</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="autoRefresh" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">DO YOU NEED AUTO-REFRESH?</label>
                      <select
                        id="autoRefresh"
                        name="autoRefresh"
                        required
                        className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl [&>option]:bg-white [&>option]:text-black"
                      >
                        <option className="text-on-surface" value="">Choose one</option>
                        <option className="text-on-surface">Yes</option>
                        <option className="text-on-surface">No</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label htmlFor="additionalNotes" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">ADDITIONAL NOTES</label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows={4}
                  className="w-full bg-surface-container-lowest/50 border border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-2xl resize-none"
                  placeholder="Any extra details or project context..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-body-md font-bold transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Submit Quote <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
