import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Code, Cpu, Database, Truck, MapPin, Package, Activity, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';

// Custom Mission Graphic: Zero Bloat Pipeline
const MissionGraphic = () => {
  return (
    <div className="relative w-full h-44 bg-foreground/[0.02] border border-border/10 rounded-xl overflow-hidden p-4 flex flex-col justify-between group-hover:border-primary/40 transition-all duration-500">
      <div className="flex justify-between items-center z-10">
        <span className="font-mono text-[9px] text-muted tracking-widest uppercase">ZERO BLOAT PIPELINE</span>
        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-mono text-[8px] font-bold">
          EDGE DEPLOYED
        </span>
      </div>

      <div className="relative h-20 my-auto flex items-center justify-between px-6">
        {/* Step 1: Input */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-8 h-8 rounded-lg bg-foreground/5 border border-border/20 flex items-center justify-center font-mono text-[10px] font-bold text-muted">
            REQ
          </div>
          <span className="font-mono text-[7px] text-muted">INPUT</span>
        </div>

        {/* Pulse Track */}
        <div className="relative flex-1 mx-4 h-1 bg-border/20 rounded-full overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            className="w-1/3 h-full bg-primary rounded-full shadow-neon"
          />
        </div>

        {/* Step 2: Output */}
        <div className="flex flex-col items-center space-y-1">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-neon"
          >
            <Cpu className="w-4 h-4" />
          </motion.div>
          <span className="font-mono text-[7px] text-primary font-bold">FAST SITE</span>
        </div>
      </div>

      <div className="flex justify-between items-center font-mono text-[8px] text-muted z-10">
        <span>FRAMEWORK: REACT 19</span>
        <span className="text-emerald-500 font-bold">PERFORMANCE: 100/100</span>
      </div>
    </div>
  );
};

// Mini Parcido Graphic for Home Featured
const ParcidoMiniGraphic = () => {
  return (
    <div className="relative w-full h-44 bg-foreground/[0.02] border border-border/10 rounded-xl overflow-hidden p-4 flex flex-col justify-between group-hover:border-primary/40 transition-all duration-500">
      <div className="flex justify-between items-center z-10">
        <span className="font-mono text-[9px] text-muted tracking-widest uppercase">Parcido Freight Manager</span>
        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-mono text-[8px] font-bold animate-pulse">DISPATCH_OK</span>
      </div>
      
      <div className="relative h-20 my-auto flex items-center justify-center">
        <div className="absolute left-[15px] top-[30px] flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-primary border border-background animate-pulse" />
          <span className="font-mono text-[7px] text-muted mt-1">PICKUP</span>
        </div>

        <div className="absolute right-[20px] top-[20px] flex flex-col items-center">
          <MapPin className="w-3.5 h-3.5 text-primary animate-bounce" />
          <span className="font-mono text-[7px] text-primary mt-0.5 font-bold">DELIVERED</span>
        </div>

        <motion.div
          className="absolute z-10 flex flex-col items-center"
          animate={{
            left: ['15%', '80%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <Truck className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-500" />
        </motion.div>
      </div>

      <div className="flex justify-between items-center font-mono text-[8px] text-muted z-10">
        <span>LOGISTICS SAAS</span>
        <span>ROUTE: ACTIVE</span>
      </div>
    </div>
  );
};

// Mini Medilab Graphic for Home Featured
const MedilabMiniGraphic = () => {
  const [slotState, setSlotState] = useState<'open' | 'reserved'>('open');

  useEffect(() => {
    const interval = setInterval(() => {
      setSlotState(curr => curr === 'open' ? 'reserved' : 'open');
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-44 bg-foreground/[0.02] border border-border/10 rounded-xl overflow-hidden p-4 flex flex-col justify-between group-hover:border-primary/40 transition-all duration-500">
      <div className="flex justify-between items-center z-10">
        <span className="font-mono text-[9px] text-muted tracking-widest uppercase">Medilab Live Scheduler</span>
        <span className="px-1.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-500 font-mono text-[8px] font-bold">SCHEDULER_LIVE</span>
      </div>

      <div className="my-auto flex items-center justify-center gap-3 h-20 z-10">
        <div className={`p-2.5 rounded-lg border transition-all duration-500 flex items-center gap-2 ${
          slotState === 'reserved' ? 'border-emerald-500 bg-emerald-500/10' : 'border-primary bg-primary/10'
        }`}>
          <Activity className="w-4 h-4 text-primary animate-pulse" />
          <div className="flex flex-col">
            <span className="font-mono text-[9px] font-bold">10:30 AM SLOT</span>
            <span className="font-mono text-[8px] text-emerald-500 font-bold uppercase">
              {slotState === 'reserved' ? 'RESERVED!' : 'OPEN FOR BOOKING'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center font-mono text-[8px] text-muted z-10">
        <span>HEALTHCARE PORTAL</span>
        <span>REAL-TIME ECG ACTIVE</span>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Hero Core */}
      <HeroSection />

      {/* About Teaser Section with Symbolic Animation */}
      <section className="py-24 px-6 md:px-12 border-t border-border/10 bg-background relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-xs font-black tracking-[0.3em] text-primary uppercase block">
              OUR MISSION
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground uppercase">
              HIGH PERFORMANCE.<br />ZERO BLOAT.
            </h2>
            <p className="font-sans text-xs md:text-sm text-muted leading-relaxed max-w-2xl">
              We bypass complex framework architectures and heavy loading layers to bring you custom, responsive web systems that perform on the edge. Tailored database design, fluid motion aesthetics, and direct integrations.
            </p>
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground/5 hover:bg-primary hover:text-primary-foreground border border-border/40 hover:border-transparent rounded-xl font-display text-xs font-black tracking-widest transition-all duration-300 group"
              >
                <span>READ ABOUT OUR AGENCY</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Mission Animation Graphic */}
          <div className="lg:col-span-5 space-y-4">
            <MissionGraphic />
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 glass-panel space-y-1">
                <Cpu className="w-4 h-4 text-primary" />
                <h4 className="font-display text-[9px] font-black uppercase">Edge Compute</h4>
                <p className="font-sans text-[9px] text-muted leading-relaxed">Lightning fast loading.</p>
              </div>
              <div className="p-4 glass-panel space-y-1">
                <Code className="w-4 h-4 text-primary" />
                <h4 className="font-display text-[9px] font-black uppercase">Custom Tech</h4>
                <p className="font-sans text-[9px] text-muted leading-relaxed">Zero bloated scripts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Teaser Section with Animated Cards */}
      <section className="py-24 px-6 md:px-12 border-t border-border/10 bg-foreground/[0.01] relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="font-sans text-xs font-black tracking-[0.3em] text-primary uppercase block mb-3">
                RECENT DELIVERIES
              </span>
              <h2 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-foreground uppercase">
                FEATURED WORK
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-primary border border-transparent rounded-xl font-display text-xs font-black tracking-widest transition-all duration-300 group"
            >
              <span>EXPLORE FULL PORTFOLIO</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mini Featured Projects Row with Animated Previews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured 1: Parcido */}
            <div className="glass-panel p-6 space-y-4 hover:border-primary/40 transition-colors group">
              <ParcidoMiniGraphic />
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono text-[9px] text-primary font-bold uppercase tracking-wider">Logistics SaaS</span>
                  <h3 className="font-display text-sm font-black uppercase text-foreground mt-0.5">Parcido Freight Manager</h3>
                </div>
              </div>
            </div>

            {/* Featured 2: Medilab */}
            <div className="glass-panel p-6 space-y-4 hover:border-primary/40 transition-colors group">
              <MedilabMiniGraphic />
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono text-[9px] text-primary font-bold uppercase tracking-wider">Healthcare Portal</span>
                  <h3 className="font-display text-sm font-black uppercase text-foreground mt-0.5">Medilab Live Scheduler</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Discuss CTA Banner */}
      <section className="py-24 px-6 md:px-12 border-t border-border/10 bg-background relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 glass-panel p-10 md:p-16 border-2 border-primary/20 hover:border-primary/30 hover:shadow-neon transition-all duration-300">
          <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-primary font-mono text-[9px] font-bold uppercase">
            <Sparkles className="w-3 h-3 text-primary animate-spin" />
            <span>Collaboration Active</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight text-foreground uppercase">
            LET'S DISCUSS YOUR PROJECT
          </h2>
          <p className="font-sans text-xs md:text-sm text-muted leading-relaxed max-w-xl mx-auto">
            Ready to design your bespoke solution? Connect with us, share your core requirements, and receive a customized quote tailored strictly to your metrics.
          </p>
          <div className="pt-4">
            <Link
              to="/discuss"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-primary border border-transparent rounded-xl font-display text-xs font-black tracking-widest transition-all duration-300 hover:shadow-neon group cursor-pointer"
            >
              <span>DISCUSS NOW</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
