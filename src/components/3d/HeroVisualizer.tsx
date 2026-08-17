"use client";

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Database, Terminal, BarChart2 } from 'lucide-react';

export default function HeroVisualizer({ className = "" }: { className?: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  if (!isLoaded) {
    return <div className={`relative w-full h-full bg-background overflow-hidden ${className}`} />;
  }

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full overflow-hidden bg-background ${className}`}
    >
      {/* Grid pattern background */}
      <div 
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.01) 1.2px, transparent 1.2px)',
          backgroundSize: '28px 28px',
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Subtle Blue Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.015)_0%,transparent_75%)] z-0 pointer-events-none" />

      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
        
        {/* 1. SQL Query Panel (Top-Left) */}
        <motion.div 
          animate={{
            x: mousePosition.x * -18,
            y: mousePosition.y * -18,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 60 }}
          className="absolute top-[18%] left-[3%] xl:left-[5%] hidden xl:flex flex-col rounded-xl border border-white/[0.04] bg-slate-950/40 backdrop-blur-[6px] shadow-[0_8px_30px_rgb(0,0,0,0.6)] shadow-blue-950/5 w-[330px] overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.01] border-b border-white/[0.04]">
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-primary" />
              <span className="font-label-caps text-[9px] text-slate-400 font-semibold tracking-wider">sales_report.sql</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            </div>
          </div>
          <div className="p-4 font-mono text-[10px] text-slate-300 leading-relaxed space-y-0.5 select-none text-left">
            <p><span className="text-primary">SELECT</span></p>
            <p className="pl-4">DATE_TRUNC(<span className="text-sky-400">&apos;month&apos;</span>, order_date) <span className="text-primary">AS</span> month,</p>
            <p className="pl-4">SUM(revenue) <span className="text-primary">AS</span> total_revenue,</p>
            <p className="pl-4">COUNT(<span className="text-primary">DISTINCT</span> customer_id) <span className="text-primary">AS</span> customers</p>
            <p><span className="text-primary">FROM</span> sales</p>
            <p><span className="text-primary">WHERE</span> status = <span className="text-sky-400">&apos;Completed&apos;</span></p>
            <p><span className="text-primary">GROUP BY</span> <span className="text-slate-400">1</span></p>
            <p><span className="text-primary">ORDER BY</span> <span className="text-slate-400">1</span>;<span className="inline-block w-1 h-3.5 bg-primary/70 animate-pulse ml-0.5 align-middle">|</span></p>
          </div>
        </motion.div>

        {/* 2. Power BI Executive Dashboard (Right Side) */}
        <motion.div 
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * -20,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 60 }}
          className="absolute top-[15%] right-[3%] xl:right-[5%] hidden lg:flex flex-col rounded-xl border border-white/[0.04] bg-slate-950/45 backdrop-blur-[6px] shadow-[0_8px_30px_rgb(0,0,0,0.6)] shadow-blue-950/5 w-[380px] p-4.5 gap-4 overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center pb-2.5 border-b border-white/[0.04]">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-primary" />
              <span className="font-label-caps text-[9px] text-slate-400 font-bold tracking-wider">POWER BI - EXEC DASHBOARD</span>
            </div>
            <span className="text-[8px] font-semibold text-slate-500 bg-white/[0.02] border border-white/[0.04] px-1.5 py-0.5 rounded">ETL OK</span>
          </div>

          {/* 4 Scorecard Blocks */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-2.5 rounded-lg bg-white/[0.01] border border-white/[0.03] text-left">
              <span className="text-[8px] font-label-caps text-slate-500 tracking-wider">TOTAL REVENUE</span>
              <p className="text-sm font-bold text-slate-200 mt-0.5">$1.24M <span className="text-emerald-500 text-[9px] font-medium ml-1">▲ 14.2%</span></p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.01] border border-white/[0.03] text-left">
              <span className="text-[8px] font-label-caps text-slate-500 tracking-wider">TOTAL CUSTOMERS</span>
              <p className="text-sm font-bold text-slate-200 mt-0.5">12,840 <span className="text-emerald-500 text-[9px] font-medium ml-1">▲ 8.1%</span></p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.01] border border-white/[0.03] text-left">
              <span className="text-[8px] font-label-caps text-slate-500 tracking-wider">AVG ORDER VALUE</span>
              <p className="text-sm font-bold text-slate-200 mt-0.5">$96.80 <span className="text-rose-500 text-[9px] font-medium ml-1">▼ 2.4%</span></p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.01] border border-white/[0.03] text-left">
              <span className="text-[8px] font-label-caps text-slate-500 tracking-wider">CONVERSION RATE</span>
              <p className="text-sm font-bold text-slate-200 mt-0.5">3.42% <span className="text-emerald-500 text-[9px] font-medium ml-1">▲ 0.8%</span></p>
            </div>
          </div>

          {/* Monthly Revenue Line Chart */}
          <div className="space-y-1.5 text-left">
            <span className="text-[8px] font-label-caps text-slate-500 tracking-wider">MONTHLY REVENUE TREND</span>
            <div className="h-20 w-full relative flex items-end px-1 border-b border-l border-white/[0.03] pt-2">
              <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                {/* Horizontal grid lines */}
                <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />

                {/* Fill Area Chart */}
                <path d="M 0,38 Q 20,30 40,32 T 80,12 T 100,5 L 100,40 L 0,40 Z" fill="url(#areaGrad)" opacity="0.1" />

                {/* Line Path */}
                <path d="M 0,38 Q 20,30 40,32 T 80,12 T 100,5" fill="none" stroke="url(#chartGrad)" strokeWidth="1.5" strokeLinecap="round" />

                {/* Grid chart nodes */}
                <circle cx="40" cy="32" r="1.5" fill="#38bdf8" />
                <circle cx="80" cy="12" r="1.5" fill="#38bdf8" />
                <circle cx="100" cy="5" r="2" fill="#3b82f6" />

                <defs>
                  <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* Axis labels */}
            <div className="flex justify-between text-[7px] text-slate-500 font-mono px-1">
              <span>JAN</span>
              <span>FEB</span>
              <span>MAR</span>
              <span>APR</span>
              <span>MAY</span>
              <span>JUN</span>
            </div>
          </div>

          {/* Sales by Category Bar Chart */}
          <div className="space-y-1.5 text-left pt-1">
            <span className="text-[8px] font-label-caps text-slate-500 tracking-wider">SALES BY STRATEGY CATEGORY</span>
            <div className="space-y-1 text-[8px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-16 truncate">Analytics:</span>
                <div className="flex-grow h-1.5 bg-white/[0.02] rounded-full overflow-hidden border border-white/[0.04]">
                  <div className="h-full bg-primary rounded-full" style={{ width: '85%' }} />
                </div>
                <span className="w-8 text-right">85%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16 truncate">BI Dashboards:</span>
                <div className="flex-grow h-1.5 bg-white/[0.02] rounded-full overflow-hidden border border-white/[0.04]">
                  <div className="h-full bg-secondary rounded-full" style={{ width: '70%' }} />
                </div>
                <span className="w-8 text-right">70%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. ML Regression Pipeline Card (Lower-Left) */}
        <motion.div 
          animate={{
            x: mousePosition.x * -12,
            y: mousePosition.y * 18,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 60 }}
          className="absolute bottom-[18%] left-[5%] hidden xl:flex flex-col rounded-xl border border-white/[0.04] bg-slate-950/40 backdrop-blur-[6px] shadow-[0_8px_30px_rgb(0,0,0,0.6)] shadow-blue-950/5 w-[330px] overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.01] border-b border-white/[0.04]">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-secondary" />
              <span className="font-label-caps text-[9px] text-slate-400 font-semibold tracking-wider">predictive_engine.py</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </div>
          
          <div className="p-4 font-mono text-[9px] text-slate-400 leading-relaxed text-left space-y-1">
            <p><span className="text-slate-500">&gt;&gt;&gt;</span> <span className="text-slate-300">from sklearn.ensemble import RFR</span></p>
            <p><span className="text-slate-500">&gt;&gt;&gt;</span> <span className="text-slate-300">model = RFR().fit(X_train, y_train)</span></p>
            <p><span className="text-slate-500">&gt;&gt;&gt;</span> <span className="text-slate-300">print(f&quot;R2 SCORE: &#123;model.score(X_test, y_test):.3f&#125;&quot;)</span></p>
            <p className="text-emerald-500 font-semibold">R2 SCORE: 0.942</p>
            <p className="text-slate-500 mt-2"># Pipeline deployment status</p>
            <p className="text-sky-400">[STATUS] Model deployment check successful.</p>
          </div>

          {/* Tiny Actual vs Predicted Scatter Graph inside ML panel */}
          <div className="px-4 pb-4 flex items-center justify-between gap-4">
            <span className="text-[7px] font-label-caps text-slate-500">ACTUAL VS PREDICTED</span>
            <div className="w-24 h-12 relative border-b border-l border-white/[0.04]">
              {/* Perfect regression line */}
              <svg className="w-full h-full" viewBox="0 0 100 50">
                <line x1="0" y1="50" x2="100" y2="0" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2 2" />
                {/* Scatter plot points clustered around regression line */}
                <circle cx="10" cy="45" r="1" fill="#3b82f6" />
                <circle cx="25" cy="38" r="1" fill="#06b6d4" />
                <circle cx="30" cy="32" r="1.2" fill="#3b82f6" />
                <circle cx="50" cy="22" r="1" fill="#06b6d4" />
                <circle cx="65" cy="18" r="1.5" fill="#3b82f6" />
                <circle cx="80" cy="12" r="1.2" fill="#06b6d4" />
                <circle cx="90" cy="4" r="1" fill="#3b82f6" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Simplified Mobile Skill Overlay */}
      <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 flex lg:hidden items-center gap-3 p-3 rounded-xl border border-white/[0.04] bg-slate-950/80 backdrop-blur-md shadow-lg max-w-[92%] select-none pointer-events-none">
        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
        <span className="font-body-md text-[10px] font-semibold text-slate-400 tracking-wide truncate">
          SQL • Power BI Dashboards • Python ML Pipelines active
        </span>
      </div>
    </div>
  );
}

// Simple fallback icon component
function CheckCircle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
