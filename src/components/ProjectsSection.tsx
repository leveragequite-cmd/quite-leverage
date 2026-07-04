import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Github, Code, Sparkles, PieChart, ShieldAlert } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  graphic: React.ReactNode;
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside projects container to animate background text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Background parallax offset
  const textY = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  const projects: Project[] = [
    {
      id: 'p1',
      title: 'ALPHA DEFICENTRIC',
      category: 'FINANCIAL WEB SYSTEM',
      description: 'A responsive visual trade desk capturing millisecond ledger entries. Designed with robust data density and dark-glass canvas wrappers.',
      tags: ['REACT', 'TAILWIND v4', 'RECHARTS', 'TYPESCRIPT'],
      graphic: (
        <div className="relative w-full h-44 bg-foreground/[0.03] border border-border/20 rounded-lg overflow-hidden flex flex-col justify-between p-4 group-hover:border-primary/40 transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-widest text-primary font-bold">LEDGER_OK</span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
          </div>
          {/* Mock charts */}
          <div className="flex items-end gap-1.5 h-16 px-2">
            {[35, 55, 42, 60, 75, 40, 68, 85, 92, 50, 65, 80].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: i * 0.03 }}
                className="flex-1 bg-gradient-to-t from-primary/30 to-primary rounded-t-sm"
              />
            ))}
          </div>
          <div className="flex justify-between font-mono text-[8px] text-muted">
            <span>VOL: ₹3.9M/S</span>
            <span>INDEX: +14.2%</span>
          </div>
        </div>
      )
    },
    {
      id: 'p2',
      title: 'KRYPTON WORKSPACE',
      category: 'SPATIAL MANAGEMENT SITE',
      description: 'An advanced spatial planning site for real-time seat arrangements. Built entirely with fluid canvas nodes and custom cursor feedback rules.',
      tags: ['MOTION', 'ESNEXT', 'GLASSMORPHISM', 'NODE.JS'],
      graphic: (
        <div className="relative w-full h-44 bg-foreground/[0.03] border border-border/20 rounded-lg overflow-hidden p-4 flex flex-col justify-between group-hover:border-primary/40 transition-all duration-300">
          <div className="font-mono text-[9px] text-muted uppercase tracking-widest">Workspace Simulator</div>
          {/* Spatial Grid Layout */}
          <div className="grid grid-cols-4 gap-2 my-auto">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className={`h-6 rounded border flex items-center justify-center font-mono text-[8px] font-bold cursor-pointer transition-colors ${
                  i % 3 === 0 
                    ? 'bg-primary/25 border-primary text-primary-foreground' 
                    : 'bg-foreground/5 border-border/20 text-muted'
                }`}
              >
                {`R${i + 1}`}
              </motion.div>
            ))}
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[8px] text-primary">
            <Sparkles className="w-2.5 h-2.5 animate-spin" />
            <span>OPTIMIZED NODE DENSITY</span>
          </div>
        </div>
      )
    },
    {
      id: 'p3',
      title: 'CHRONOS ANALYTICS',
      category: 'ALGORITHMIC MONITORING PANEL',
      description: 'An elegant monitoring client plotting telemetry signals down a cascading flow. Optimized for fast rendering on high-DPI displays.',
      tags: ['TAILWIND', 'D3.JS', 'CSS VARIABLES', 'ESBUILD'],
      graphic: (
        <div className="relative w-full h-44 bg-foreground/[0.03] border border-border/20 rounded-lg overflow-hidden p-4 flex flex-col justify-between group-hover:border-primary/40 transition-all duration-300">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[9px] text-muted tracking-widest uppercase">System Telemetry</span>
            <span className="px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-[8px] font-bold">LIVE STREAM</span>
          </div>
          {/* Diagonal wavy matrix representation */}
          <div className="h-16 flex items-center justify-center overflow-hidden relative">
            <svg className="w-full h-full stroke-primary/40 fill-none stroke-[2]">
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.2 }}
                d="M 0 40 Q 30 10 60 40 T 120 40 T 180 40 T 240 40 T 300 40"
              />
              <path d="M 0 50 Q 30 30 60 50 T 120 50 T 180 50 T 240 50 T 300 50" className="stroke-primary opacity-20" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/40 to-transparent pointer-events-none" />
          </div>
          <div className="flex justify-between items-center font-mono text-[8px] text-muted">
            <span>FPS: 60.00</span>
            <span>LATENCY: 4.8ms</span>
          </div>
        </div>
      )
    },
    {
      id: 'p4',
      title: 'ZENITH CMS MATRIX',
      category: 'ROLE-BASED AUTHORING SYSTEM',
      description: 'A headless dashboard and editor offering lightning fast previews, automated layout generation, and dynamic role controls.',
      tags: ['NEXT.JS', 'GEMINI API', 'FIREBASE', 'MOTION'],
      graphic: (
        <div className="relative w-full h-44 bg-foreground/[0.03] border border-border/20 rounded-lg overflow-hidden p-4 flex flex-col justify-between group-hover:border-primary/40 transition-all duration-300">
          <div className="flex justify-between items-center border-b border-border/10 pb-2">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <span className="font-mono text-[8px] text-muted">ZENITH_PUBLISHER_v1</span>
          </div>
          
          {/* Layout blocks simulation */}
          <div className="space-y-1.5 my-2">
            <div className="h-2 w-3/4 bg-primary/20 rounded-sm" />
            <div className="h-2 w-full bg-foreground/5 rounded-sm" />
            <div className="h-4 w-1/2 bg-foreground/10 rounded-sm" />
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-border/10">
            <span className="font-mono text-[8px] text-primary">ROLE: AUTHOR</span>
            <span className="font-mono text-[8px] text-emerald-400 font-bold">SYNCHRONIZED</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="projects" 
      className="relative pt-12 pb-32 overflow-hidden px-6 md:px-12 border-t border-border/10 bg-background"
    >
      {/* Parallax Background Text */}
      <motion.div 
        style={{ y: textY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="font-display text-[15vw] md:text-[18vw] font-black text-foreground/[0.03] leading-none tracking-widest">
          PROJECTS
        </span>
      </motion.div>

      {/* Section Content */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Title */}
        <div className="mb-20">
          <span className="font-sans text-xs font-black tracking-[0.3em] text-primary uppercase block mb-3">
            PORTFOLIO HIGHLIGHTS
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground">
            CRAFTED DELIVERIES
          </h2>
          <div className="w-20 h-[3px] bg-primary mt-6" />
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass-panel rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-neon hover:-translate-y-1 overflow-hidden cursor-default"
            >
              {/* Dynamic light highlight background circle */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-300" />
              
              <div>
                {/* Visual Graphics Illustration instead of placeholders */}
                <div className="mb-6 relative z-10">
                  {project.graphic}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="font-mono text-[9px] font-bold bg-foreground/[0.04] border border-border/20 text-foreground/80 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title & Category */}
                <span className="font-mono text-[10px] text-primary font-bold tracking-widest block uppercase mb-1">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-3 uppercase">
                  {project.title}
                </h3>

                <p className="font-sans text-xs md:text-sm text-muted/90 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Action Trigger Link */}
              <div className="flex items-center justify-between border-t border-border/10 pt-4 mt-auto">
                <span className="font-sans text-[10px] font-bold tracking-widest text-foreground/50 group-hover:text-primary transition-colors">
                  EXPLORE INTERACTIVE VIEW
                </span>
                <div className="p-2 rounded-full bg-foreground/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
