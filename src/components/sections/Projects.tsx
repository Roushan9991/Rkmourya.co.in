"use client";

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    title: "Automated Weather Intelligence Dashboard",
    category: "AUTOMATION & DASHBOARDING",
    description: "Built a Power BI-based smart weather dashboard with automated hourly API refresh that delivers real-time weather insights along with personalized day-planning recommendations and outdoor activity suggestions.",
    image: "/Powerbi_dashboard.jpg",
    tech: ["Power BI", "DAX", "Weather API","Power Query (M Language)","ETL Automation","Data Modeling"],
    github: "https://github.com/Roushan9991/Automated-Weather-Intelligence-Dashboard/blob/main/README.md",
    live: "https://app.powerbi.com/view?r=eyJrIjoiMTlmODMwNzktNmFmOS00Y2RmLWJjNzktZTllMzI4MzdiZjRjIiwidCI6IjI1Y2UwMjYxLWJiZDYtNDljZC1hMWUyLTU0MjYwODg2ZDE1OSJ9"
  },
  {
    title: "Wildfire Risk Prediction using Ridge Regression",
    category: "PREDICTIVE ANALYTICS",
    description: "An end-to-end Machine Learning project that predicts wildfire risk from environmental and fire weather indicators. Built using Python, Flask, and Ridge Regression with real-time prediction capability and cloud deployment on Vercel.",
    image: "/widfire prediction.jpg",
    tech: ["Python", "Scikit-Learn", "Pandas","Ridge Regression","Jupyter Notebook","StandardScaler","Model Evaluation","Vercel","GitHub"],
    github: "https://github.com/Roushan9991/Wildfire-Risk-Prediction-using-Ridge-Regression/blob/main/README.md",
    live: "https://weather-prediction-using-linear-reg.vercel.app/"
  },
  {
    title: "Student Performance Predictor | End-to-End Machine Learning Pipeline",
    category: "PREDICTIVE ANALYTICS",
    description: "Built an end-to-end Machine Learning pipeline to predict student math scores using demographic and academic factors with automated data ingestion, transformation, model training, evaluation, and deployment.",
    image: "/ML Prediction.jpg",
    tech: ["Python", "Scikit-Learn", "Pandas","Linear Regression","Random Forest","Decision Tree Regressor","Model Deployment","Flask","AWS Elastic Beanstalk","GitHub"],
    github: "https://github.com/Roushan9991/Student-Performance-Predictor-End-to-End-Machine-Learning-Pipeline/blob/main/README.md",
    live: "http://mlprojectsp-env.eba-unndhpsn.eu-north-1.elasticbeanstalk.com/"
  },
  {
    title: "ExpertHive",
    category: "WEB DEVELOPMENT",
    description: "A mentorship marketplace platform enabling students and young professionals to connect with verified industry experts for practical learning.",
    image: "/experthive.jpg",
    tech: ["Google Stitch","Antigravity","Supabase","Google Cloud","Vercel","Razorpay Payment Integration","Zoom Link Generation"],
    github: "https://github.com/Roushan9991/ExpertHive--Website/blob/main/README.md",
    live: "https://experthive.co.in/"
  },
  {
    title: "Walmart Sales Analysis - End-to-End SQL + Python Project",
    category: "DATA ANALYSIS",
    description: "End-to-end data analysis pipeline: Python scrapes & loads 10K+ Walmart transactions into MySQL, and SQL queries answer real business questions on sales, payments, branch ratings, and more.",
    image: "/sql project.jpg",
    tech: ["Python","Pandas","MySQL","Web Scrapping","Data Analysis","API"],
    github: "https://github.com/Roushan9991/-Walmart-Sales-Analysis-End-to-End-SQL-Python-Project/blob/main/README.md",
    live: "https://github.com/Roushan9991/-Walmart-Sales-Analysis-End-to-End-SQL-Python-Project/blob/main/walmart.sql"
  },
  {
    title: "Pizza Hut Sales Analysis - SQL Data Analysis Project",
    category: "DATA ANALYSIS",
    description: "Solving 13 real-world business problems - from total revenue and top pizzas to cumulative sales trends — using SQL queries across Basic, Intermediate, and Advanced levels.",
    image: "/business question.jpg",
    tech: ["Python","Pandas","MySQL","Jupyter Notebook","Data Analysis","CTE","Window Functions","Subqueries"],
    github: "https://github.com/Roushan9991/Pizza_hut_Sql/blob/main/README.md",
    live: "https://github.com/Roushan9991/Pizza_hut_Sql/blob/main/pizza_hut.sql"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-40 bg-surface-container-lowest/30 relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-headline-md text-on-surface"
          >
            Projects
          </motion.h2>
          <div className="h-[1px] flex-grow bg-outline-variant/30 mx-8 hidden md:block"></div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/Roushan9991" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
          >
            VIEW ALL ON GITHUB <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl glass-panel border-primary/20 hover:border-primary transition-all duration-500 flex flex-col h-full"
            >
              <div className="h-60 overflow-hidden relative bg-surface-variant/50 flex items-center justify-center">
                {/* Fallback color while image loads */}
                <div className="absolute inset-0 bg-surface-variant animate-pulse"></div>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-700 relative z-10 p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-20 opacity-30 pointer-events-none"></div>
              </div>
              
              <div className="p-8 space-y-4 flex-grow flex flex-col">
                <span className="font-label-caps text-[10px] text-secondary tracking-widest">{project.category}</span>
                <h3 className="font-body-lg font-bold text-on-surface group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-body-md text-on-surface-variant flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-label-caps text-primary-fixed bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6 pt-6 border-t border-white/10">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-secondary transition-colors ml-auto flex items-center gap-1 font-label-caps text-xs">
                    LIVE Demo <ArrowRight className="w-4 h-4" />
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
