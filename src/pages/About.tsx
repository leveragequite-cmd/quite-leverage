import { motion } from 'motion/react';
import { Sparkles, Cpu, Shield, Code, Database, Bug, CheckCircle, Zap, ShieldCheck } from 'lucide-react';

// Custom Graphic 1: Security Shield Deflecting Threats Animation
const SecurityGraphic = () => {
  const threats = [
    { id: 1, startX: -60, startY: -30, delay: 0 },
    { id: 2, startX: 60, startY: -20, delay: 1.2 },
    { id: 3, startX: -70, startY: 20, delay: 2.4 },
    { id: 4, startX: 70, startY: 30, delay: 3.6 }
  ];

  return (
    <div className="relative w-full h-44 bg-foreground/[0.02] border border-border/10 rounded-xl overflow-hidden p-4 flex flex-col justify-between group-hover:border-primary/40 transition-all duration-500">
      <div className="flex justify-between items-center z-10">
        <span className="font-mono text-[9px] text-muted tracking-widest uppercase">SECURITY SHIELD MATRIX</span>
        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-mono text-[8px] font-bold flex items-center gap-1">
          <ShieldCheck className="w-2.5 h-2.5 animate-pulse" />
          PROTECTED
        </span>
      </div>

      {/* Forcefield & Deflection simulation */}
      <div className="relative h-20 my-auto flex items-center justify-center">
        {/* Pulsing Outer Shield Barrier Ring */}
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-20 h-20 rounded-full border-2 border-primary/40 bg-primary/5 shadow-neon"
        />

        {/* Central Shield Icon */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 p-3 rounded-full bg-primary text-primary-foreground shadow-lg"
        >
          <Shield className="w-6 h-6 stroke-[2.5]" />
        </motion.div>

        {/* Threat Particles Deflecting Off Shield */}
        {threats.map((threat) => (
          <motion.div
            key={threat.id}
            initial={{ x: threat.startX, y: threat.startY, opacity: 0.9, scale: 1 }}
            animate={{
              x: [threat.startX, threat.startX > 0 ? 25 : -25, threat.startX * 1.3],
              y: [threat.startY, threat.startY > 0 ? 10 : -10, threat.startY * 1.3],
              opacity: [0.9, 1, 0],
              scale: [1, 0.7, 0.2]
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: threat.delay,
              ease: 'easeOut'
            }}
            className="absolute z-20 flex items-center justify-center p-1 bg-red-500/20 border border-red-500/40 rounded-full"
          >
            <Bug className="w-3 h-3 text-red-500" />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between items-center font-mono text-[8px] text-muted z-10">
        <span>FIREBASE AUTH RULES: ACTIVE</span>
        <span className="text-emerald-500 font-bold">DEFLECTED: 100%</span>
      </div>
    </div>
  );
};

// Custom Graphic 2: Bespoke Aesthetics Animation
const AestheticsGraphic = () => {
  return (
    <div className="relative w-full h-44 bg-foreground/[0.02] border border-border/10 rounded-xl overflow-hidden p-4 flex flex-col justify-between group-hover:border-primary/40 transition-all duration-500">
      <div className="flex justify-between items-center z-10">
        <span className="font-mono text-[9px] text-muted tracking-widest uppercase">BESPOKE UI ENGINE</span>
        <span className="px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-[8px] font-bold">
          CUSTOM DYNAMICS
        </span>
      </div>

      {/* Floating Design Layers */}
      <div className="relative h-20 my-auto flex items-center justify-center">
        <motion.div
          animate={{ y: [-4, 4, -4], rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-36 h-14 glass-panel border border-primary/30 rounded-lg p-2.5 flex items-center justify-between"
        >
          <div className="space-y-1">
            <div className="w-12 h-1.5 bg-primary/40 rounded" />
            <div className="w-20 h-1 bg-foreground/20 rounded" />
          </div>
          <Sparkles className="w-4 h-4 text-primary animate-spin" />
        </motion.div>

        <motion.div
          animate={{ y: [4, -4, 4], rotate: [2, -2, 2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-28 h-10 bg-primary/10 border border-primary/40 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span className="font-mono text-[8px] text-primary font-bold">TAILORED UI</span>
        </motion.div>
      </div>

      <div className="flex justify-between items-center font-mono text-[8px] text-muted z-10">
        <span>DESIGN SYSTEM: GLASSMORPHISM</span>
        <span>FPS: 60 (FLUID)</span>
      </div>
    </div>
  );
};

// Custom Graphic 3: High Performance CPU Animation
const PerformanceGraphic = () => {
  return (
    <div className="relative w-full h-44 bg-foreground/[0.02] border border-border/10 rounded-xl overflow-hidden p-4 flex flex-col justify-between group-hover:border-primary/40 transition-all duration-500">
      <div className="flex justify-between items-center z-10">
        <span className="font-mono text-[9px] text-muted tracking-widest uppercase">CPU PULSE ARCHITECTURE</span>
        <span className="px-1.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-500 font-mono text-[8px] font-bold flex items-center gap-1">
          <Zap className="w-2.5 h-2.5" />
          LIGHTNING FAST
        </span>
      </div>

      {/* Circuit Signals and CPU Core */}
      <div className="relative h-20 my-auto flex items-center justify-center">
        {/* Core Chip */}
        <motion.div
          animate={{ boxShadow: ['0 0 5px rgba(239,103,55,0.2)', '0 0 20px rgba(239,103,55,0.6)', '0 0 5px rgba(239,103,55,0.2)'] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-3 bg-foreground/10 border-2 border-primary rounded-lg flex items-center justify-center z-10"
        >
          <Cpu className="w-6 h-6 text-primary" />
        </motion.div>

        {/* Signals moving inward */}
        {[0, 90, 180, 270].map((deg, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-0.5 bg-primary/30"
            style={{ transform: `rotate(${deg}deg) translateX(32px)` }}
          >
            <motion.div
              animate={{ x: [0, 48] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: 'linear' }}
              className="w-2 h-0.5 bg-primary rounded-full shadow-neon"
            />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between items-center font-mono text-[8px] text-muted z-10">
        <span>CORE VITAL: 100/100</span>
        <span>LATENCY: ZERO BLOAT</span>
      </div>
    </div>
  );
};

export default function About() {
  const techStack = [
    { name: 'React 19', category: 'Frontend framework', desc: 'Modern reactive component model' },
    { name: 'Tailwind CSS v4', category: 'Styling engine', desc: 'Vibrant, high-performance styling engine' },
    { name: 'TypeScript', category: 'Core logic', desc: 'Type-safe, robust code execution' },
    { name: 'Motion / Framer', category: 'Animation ecosystem', desc: 'Ultra-smooth micro-animations' },
    { name: 'Firebase', category: 'Backend operations', desc: 'Real-time auth, database, and hosting' },
    { name: 'Gemini AI', category: 'Intelligence', desc: 'Next-gen cognitive assistant integration' }
  ];

  const steps = [
    {
      num: '01',
      title: 'DISCOVERY PHASE',
      desc: 'We map out your business objectives, design aspirations, and feature sets to construct a transparent project scope.'
    },
    {
      num: '02',
      title: 'DESIGN & DYNAMICS',
      desc: 'We craft high-fidelity mockups using a rich, custom design system to align branding before writing a single line of code.'
    },
    {
      num: '03',
      title: 'CLEAN DEVELOPMENT',
      desc: 'We build with a modern stack—guaranteeing rapid loading times, full responsiveness, and zero bloated frameworks.'
    },
    {
      num: '04',
      title: 'DISPATCH & LAUNCH',
      desc: 'We provision serverless architecture and configure custom domains, ensuring your web application goes live securely.'
    }
  ];

  return (
    <main className="min-h-screen py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background Parallax text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="font-display text-[16vw] font-black text-foreground/[0.02] leading-none tracking-widest">
          AGENCY
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 space-y-28">
        {/* Title Section */}
        <div className="text-center md:text-left">
          <span className="font-sans text-xs font-black tracking-[0.3em] text-primary uppercase block mb-3 animate-pulse">
            WHO WE ARE
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground uppercase">
            WE DOCK DIGITAL SOLUTIONS.
          </h1>
          <p className="font-sans text-base text-muted max-w-2xl mt-6 leading-relaxed">
            Quite Leverage is a premium boutique agency dedicated to building high-performance web applications. We bypass complex bloat to deliver clean layouts, custom tools, and responsive solutions tailored exactly to our clients' demands.
          </p>
          <div className="w-20 h-[3px] bg-primary mt-8 mx-auto md:mx-0" />
        </div>

        {/* Pillars / Values Section with Custom Interactive Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Bespoke Aesthetics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-6 space-y-6 hover:border-primary/45 transition-colors duration-300 group flex flex-col justify-between"
          >
            <AestheticsGraphic />
            <div className="space-y-2">
              <h3 className="font-display text-lg font-black tracking-tight uppercase">Bespoke Aesthetics</h3>
              <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
                We design every component manually to capture your business essence. No lazy templates—just premium, tailored interfaces.
              </p>
            </div>
          </motion.div>

          {/* Card 2: High Performance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-panel p-6 space-y-6 hover:border-primary/45 transition-colors duration-300 group flex flex-col justify-between"
          >
            <PerformanceGraphic />
            <div className="space-y-2">
              <h3 className="font-display text-lg font-black tracking-tight uppercase">High Performance</h3>
              <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
                Leveraging advanced tech stacks ensures optimal load speed, perfect SEO rankings, and an interface that feels responsive and alive.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Secure Protection (Shield Deflecting Viruses) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel p-6 space-y-6 hover:border-primary/45 transition-colors duration-300 group flex flex-col justify-between"
          >
            <SecurityGraphic />
            <div className="space-y-2">
              <h3 className="font-display text-lg font-black tracking-tight uppercase">Shield Protection</h3>
              <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
                Equipped with custom security shield barriers and Firebase auth rules to actively block threat particles, safeguard credentials, and protect data.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Process Timeline */}
        <div className="space-y-12">
          <div className="text-center md:text-left">
            <span className="font-sans text-xs font-black tracking-[0.2em] text-primary uppercase block mb-2">
              OUR PLAYBOOK
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-foreground uppercase">
              HOW WE DELIVER RESULTS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative glass-panel p-6 flex flex-col justify-between group hover:shadow-neon transition-all duration-300"
              >
                <div>
                  <span className="font-display text-4xl font-black text-primary/10 group-hover:text-primary/30 transition-colors block mb-4">
                    {step.num}
                  </span>
                  <h4 className="font-display text-sm font-bold tracking-tight text-foreground mb-3 uppercase">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="space-y-12">
          <div className="text-center md:text-left">
            <span className="font-sans text-xs font-black tracking-[0.2em] text-primary uppercase block mb-2">
              INFRASTRUCTURE
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-foreground uppercase">
              OUR TECHNOLOGY MATRIX
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex gap-4 p-5 glass-panel items-center hover:border-primary/35 transition-colors">
                <div className="p-3 rounded-lg bg-foreground/[0.03] text-primary border border-border/10">
                  {tech.name.includes('Database') || tech.name.includes('Firebase') ? (
                    <Database className="w-5 h-5" />
                  ) : (
                    <Code className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <span className="font-mono text-[9px] text-muted uppercase tracking-wider block">
                    {tech.category}
                  </span>
                  <h4 className="font-display text-xs font-bold text-foreground mt-0.5 uppercase">
                    {tech.name}
                  </h4>
                  <p className="font-sans text-[11px] text-muted/80 mt-1">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
