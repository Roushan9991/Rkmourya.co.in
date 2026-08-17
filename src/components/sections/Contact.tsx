"use client";

import { motion } from 'framer-motion';
import { Mail, Send, FileText } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const readFileAsBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

export default function Contact() {
  const [service, setService] = useState('Resume Website');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Construct JSON payload from Form Data
    const payload: Record<string, string | number | boolean | null | undefined> = {};
    formData.forEach((value, key) => {
      // Skip file objects initially
      if (!(value instanceof File)) {
        payload[key] = value;
      }
    });

    // Check if there is a file input and if a file was uploaded
    const resumeFileInput = form.querySelector('#resume') as HTMLInputElement | null;
    if (resumeFileInput && resumeFileInput.files && resumeFileInput.files[0]) {
      const file = resumeFileInput.files[0];
      try {
        const base64Data = await readFileAsBase64(file);
        payload['fileData'] = base64Data;
        payload['fileName'] = file.name;
        payload['fileType'] = file.type;
      } catch (fileError) {
        console.error("Error reading file:", fileError);
        alert("Failed to process the uploaded resume. Please try another file.");
        setIsSubmitting(false);
        return;
      }
    }

    // Google Apps Script Web App URL from environment variables or direct placeholder
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (!endpoint || endpoint === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
      console.error("Google Apps Script endpoint is not set. Please set NEXT_PUBLIC_FORM_ENDPOINT in your environment or code.");
      alert("Submission endpoint is not configured. Please ensure NEXT_PUBLIC_FORM_ENDPOINT is set in your .env.local file in the 'rkm-portfolio' directory and that you have restarted the dev server!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // Google Apps Script handles text/plain without triggering complex CORS preflight issues
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.status !== "error") {
        setIsSubmitted(true);
        form.reset();
        setService('Resume Website');
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error('Form submission error:', response.status, result);
        if (endpoint === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
          alert('Submission endpoint is not configured. Please set up your Google Apps Script URL as described in the instructions!');
        } else {
          alert(result?.message || 'A server error occurred. Please try again later.');
        }
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Unable to submit. Please ensure your Google Apps Script is deployed and the URL is correct.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.01] blur-[150px] rounded-full z-0 pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="font-label-caps text-xs text-primary block tracking-wider font-semibold mb-2">LET&apos;S CONNECT</span>
              <h2 className="font-display-lg text-3xl md:text-5xl font-bold text-slate-100 leading-tight tracking-tight">
                Ready to transform your data?
              </h2>
            </div>

            <p className="text-body-lg text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
              Whether you already have a project in mind, want to turn an idea into something practical, or are curious about what AI and analytics can do for your business - I&apos;d love to hear from you.<br /><br />I enjoy solving real problems that create measurable impact, not just producing another report or dashboard.

              <br /><br />Reach out for collaboration, project planning, feedback, or simply a thoughtful conversation.
            </p>

            <div className="flex flex-col gap-6 mt-8">
              <a href="mailto:rkmourya999@gmail.com" className="flex items-center gap-3.5 text-slate-200 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/25 transition-all duration-350">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-caps text-[9px] text-slate-500 font-semibold tracking-wider">EMAIL</span>
                  <span className="font-body-md text-sm font-medium">rkmourya999@gmail.com</span>
                </div>
              </a>

              <div className="flex gap-3.5 mt-4">
                <a href="https://www.linkedin.com/in/roushan-kumar-mourya-001668196" className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-all" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a href="https://github.com/Roushan9991" className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-all" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-4 h-4" />
                </a>
                <a href="/Roushan_Resume.pdf" download="Roushan_Resume.pdf" className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-all" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col gap-5 border border-white/5 relative overflow-hidden shadow-2xl bg-slate-950/20">
              {isSubmitted && (
                <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Send className="w-5 h-5 text-primary animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-1">Quote Request Sent!</h3>
                  <p className="text-slate-400 text-xs md:text-sm">Thanks for submitting your project details. I&apos;ll reach out to you soon.</p>
                </div>
              )}

              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">FULL NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">BUDGET RANGE</label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl [&>option]:bg-slate-900 [&>option]:text-slate-200"
                    >
                      <option className="text-on-surface" value="">Select your budget</option>
                      <option className="text-on-surface">Upto ₹5k</option>
                      <option className="text-on-surface">₹5k-15k</option>
                      <option className="text-on-surface">₹15k-50k</option>
                      <option className="text-on-surface">₹50k+</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="timeline" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">TIMELINE / DEADLINE</label>
                    <input
                      type="text"
                      id="timeline"
                      name="timeline"
                      required
                      className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl"
                      placeholder="e.g. 4 weeks, May 2026"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">SERVICE</label>
                  <select
                    id="service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl [&>option]:bg-slate-900 [&>option]:text-slate-200"
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
                    <label htmlFor="resume" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">SHARE YOUR CURRENT RESUME / CV</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="w-full text-xs text-slate-300 bg-slate-950/40 border border-white/5 rounded-xl px-4 py-2.5"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="designStyle" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">PREFERRED DESIGN STYLE</label>
                      <select
                        id="designStyle"
                        name="designStyle"
                        required
                        className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl [&>option]:bg-slate-900 [&>option]:text-slate-200"
                      >
                        <option className="text-on-surface" value="">Choose one</option>
                        <option className="text-on-surface">Minimal</option>
                        <option className="text-on-surface">Bold</option>
                        <option className="text-on-surface">Creative</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="customDomain" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">DO YOU NEED A CUSTOM DOMAIN?</label>
                      <select
                        id="customDomain"
                        name="customDomain"
                        required
                        className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl [&>option]:bg-slate-900 [&>option]:text-slate-200"
                      >
                        <option className="text-on-surface" value="">Choose one</option>
                        <option className="text-on-surface">Yes</option>
                        <option className="text-on-surface">No</option>
                        <option className="text-on-surface">Not sure</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="referenceSites" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">ANY REFERENCE WEBSITES YOU LIKE?</label>
                    <textarea
                      id="referenceSites"
                      name="referenceSites"
                      rows={3}
                      className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl resize-none"
                      placeholder="Paste links or describe the style you want..."
                    />
                  </div>
                </div>
              )}

              {service === 'ML Models for Prediction' && (
                <div className="grid gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="predictionProblem" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">WHAT PROBLEM ARE YOU TRYING TO PREDICT?</label>
                    <input
                      type="text"
                      id="predictionProblem"
                      name="predictionProblem"
                      required
                      className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl"
                      placeholder="e.g. sales, churn, demand"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="existingData" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">DO YOU HAVE EXISTING DATA?</label>
                      <select
                        id="existingData"
                        name="existingData"
                        required
                        className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl [&>option]:bg-slate-900 [&>option]:text-slate-200"
                      >
                        <option className="text-on-surface" value="">Choose one</option>
                        <option className="text-on-surface">Yes</option>
                        <option className="text-on-surface">No</option>
                        <option className="text-on-surface">Partial</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="dataFormat" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">WHAT FORMAT IS YOUR DATA IN?</label>
                      <select
                        id="dataFormat"
                        name="dataFormat"
                        required
                        className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl [&>option]:bg-slate-900 [&>option]:text-slate-200"
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
                    <label htmlFor="deployment" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">WHERE SHOULD THE MODEL BE DEPLOYED?</label>
                    <select
                      id="deployment"
                      name="deployment"
                      required
                      className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl [&>option]:bg-slate-900 [&>option]:text-slate-200"
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
                    <label htmlFor="automationTask" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">WHAT TASK DO YOU WANT TO AUTOMATE?</label>
                    <textarea
                      id="automationTask"
                      name="automationTask"
                      rows={3}
                      required
                      className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl resize-none"
                      placeholder="Describe the task or process..."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="platforms" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">WHAT TOOLS / PLATFORMS ARE INVOLVED?</label>
                      <input
                        type="text"
                        id="platforms"
                        name="platforms"
                        required
                        className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl"
                        placeholder="e.g. Excel, WhatsApp, Google Sheets"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="frequency" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">HOW OFTEN SHOULD IT RUN?</label>
                      <select
                        id="frequency"
                        name="frequency"
                        required
                        className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl [&>option]:bg-slate-900 [&>option]:text-slate-200"
                      >
                        <option className="text-on-surface" value="">Choose one</option>
                        <option className="text-on-surface">Real-time</option>
                        <option className="text-on-surface">Daily</option>
                        <option className="text-on-surface">Weekly</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="workflowDocs" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">ANY EXISTING WORKFLOW DOCUMENTATION?</label>
                    <textarea
                      id="workflowDocs"
                      name="workflowDocs"
                      rows={3}
                      className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl resize-none"
                      placeholder="Links or details about current process..."
                    />
                  </div>
                </div>
              )}

              {service === 'PowerBI / Tableau Dashboard' && (
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="dataSource" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">WHAT DATA SOURCE DO YOU HAVE?</label>
                      <select
                        id="dataSource"
                        name="dataSource"
                        required
                        className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl [&>option]:bg-slate-900 [&>option]:text-slate-200"
                      >
                        <option className="text-on-surface" value="">Choose one</option>
                        <option className="text-on-surface">Excel</option>
                        <option className="text-on-surface">SQL</option>
                        <option className="text-on-surface">API</option>
                        <option className="text-on-surface">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="reportPages" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">HOW MANY REPORTS / PAGES NEEDED?</label>
                      <select
                        id="reportPages"
                        name="reportPages"
                        required
                        className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl [&>option]:bg-slate-900 [&>option]:text-slate-200"
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
                      <label htmlFor="viewers" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">WHO WILL VIEW IT?</label>
                      <select
                        id="viewers"
                        name="viewers"
                        required
                        className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl [&>option]:bg-slate-900 [&>option]:text-slate-200"
                      >
                        <option className="text-on-surface" value="">Choose one</option>
                        <option className="text-on-surface">Internal team</option>
                        <option className="text-on-surface">Clients</option>
                        <option className="text-on-surface">Executives</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="autoRefresh" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">DO YOU NEED AUTO-REFRESH?</label>
                      <select
                        id="autoRefresh"
                        name="autoRefresh"
                        required
                        className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl [&>option]:bg-slate-900 [&>option]:text-slate-200"
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
                <label htmlFor="additionalNotes" className="font-label-caps text-[9px] tracking-wider text-slate-400 font-semibold">ADDITIONAL NOTES</label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows={4}
                  className="w-full bg-slate-950/40 border border-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all font-body-md rounded-xl resize-none"
                  placeholder="Any extra details or project context..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 px-6 py-3 rounded-xl bg-primary hover:bg-primary/95 text-white font-body-md font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-70 text-sm shadow-md hover:shadow-primary/10 active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Submit Quote <Send className="w-3.5 h-3.5" />
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
