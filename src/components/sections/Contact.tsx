"use client";

import { motion } from 'framer-motion';
import { Mail, Send, FileText } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const target = e.target as HTMLFormElement;
    const name = (target.elements.namedItem('name') as HTMLInputElement).value;
    const email = (target.elements.namedItem('email') as HTMLInputElement).value;
    const message = (target.elements.namedItem('message') as HTMLTextAreaElement).value;

    try {
      const response = await fetch("https://formsubmit.co/ajax/rkmourya999@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        setIsSubmitted(true);
        target.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
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
              Whether you have a specific project in mind or just want to discuss the future of AI and Analytics, I&apos;m always open to connecting.
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
                <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-secondary hover:border-secondary/50 transition-all">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all">
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
                  <h3 className="font-headline-md text-on-surface mb-2">Message Sent!</h3>
                  <p className="text-on-surface-variant font-body-md">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                </div>
              )}
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">NAME</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full bg-surface-container-lowest/50 border-b border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-t-md"
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
                  className="w-full bg-surface-container-lowest/50 border-b border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-t-md"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">MESSAGE</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-surface-container-lowest/50 border-b border-outline-variant/50 px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:bg-primary/5 transition-all font-body-md rounded-t-md resize-none"
                  placeholder="How can I help you?"
                ></textarea>
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
                    Send Message <Send className="w-4 h-4" />
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
