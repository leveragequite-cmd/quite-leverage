import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Sparkles, 
  Truck, 
  MapPin, 
  Package, 
  Calendar, 
  Activity, 
  CheckCircle, 
  Monitor, 
  Smartphone, 
  Tablet, 
  X, 
  ExternalLink 
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  graphic: React.ReactNode;
  url: string;
}

// Custom dynamic animation for Parcido (freight truck booking)
const ParcidoGraphic = () => {
  return (
    <div className="relative w-full h-44 bg-foreground/[0.02] border border-border/10 rounded-xl overflow-hidden p-4 flex flex-col justify-between group-hover:border-primary/30 transition-all duration-500">
      <div className="flex justify-between items-center z-10">
        <span className="font-mono text-[9px] text-muted tracking-widest uppercase">Parcido Freight</span>
        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-mono text-[8px] font-bold animate-pulse">DISPATCH_OK</span>
      </div>
      
      {/* Route & Truck Simulation */}
      <div className="relative h-20 my-auto flex items-center justify-center">
        {/* SVG Route Line */}
        <svg className="absolute inset-0 w-full h-full stroke-primary/20 fill-none stroke-[2]" style={{ strokeDasharray: '4,4' }}>
          <path d="M 20 40 Q 90 15 140 50 T 260 30" id="route-path" />
        </svg>
        
        {/* Route stops/nodes */}
        <div className="absolute left-[15px] top-[30px] flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-primary border border-background animate-pulse" />
          <span className="font-mono text-[7px] text-muted mt-1">PICKUP</span>
        </div>

        <div className="absolute left-[130px] top-[40px] flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-border border border-background" />
          <span className="font-mono text-[7px] text-muted mt-1">TRANSIT</span>
        </div>

        <div className="absolute right-[20px] top-[20px] flex flex-col items-center">
          <MapPin className="w-3.5 h-3.5 text-primary animate-bounce" />
          <span className="font-mono text-[7px] text-primary mt-0.5 font-bold">DELIVERED</span>
        </div>

        {/* Moving truck & loading box */}
        <motion.div
          className="absolute z-10 flex flex-col items-center"
          animate={{
            left: ['10%', '50%', '85%'],
            top: ['45%', '55%', '35%']
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transform: 'translate(-50%, -50%)', position: 'absolute' }}
        >
          <div className="relative">
            {/* Cargo Box dropping into truck */}
            <motion.div
              animate={{
                y: [-16, 0],
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1, 1, 0.8]
              }}
              transition={{
                duration: 2.33,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute -top-3 left-1"
            >
              <Package className="w-2.5 h-2.5 text-primary fill-primary/20" />
            </motion.div>
            <Truck className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-500" />
          </div>
        </motion.div>
      </div>

      <div className="flex justify-between items-center font-mono text-[8px] text-muted z-10">
        <span>TRUCK ID: #PR-892</span>
        <span>ROUTE: ACTIVE</span>
      </div>
    </div>
  );
};

// Custom dynamic animation for Medilab (healthcare scheduling)
const MedilabGraphic = () => {
  const [bookingState, setBookingState] = useState<'available' | 'selecting' | 'confirmed'>('available');

  useEffect(() => {
    const interval = setInterval(() => {
      setBookingState(current => {
        if (current === 'available') return 'selecting';
        if (current === 'selecting') return 'confirmed';
        return 'available';
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-44 bg-foreground/[0.02] border border-border/10 rounded-xl overflow-hidden p-4 flex flex-col justify-between group-hover:border-primary/30 transition-all duration-500">
      <div className="flex justify-between items-center z-10">
        <span className="font-mono text-[9px] text-muted tracking-widest uppercase">MEDILAB PORTAL</span>
        <span className="px-1.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-500 font-mono text-[8px] font-bold">SCHEDULER_LIVE</span>
      </div>

      {/* Grid of Slots & ECG Wave */}
      <div className="my-auto flex flex-col gap-3 relative justify-center h-20">
        {/* ECG Line (background sweep) */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-10 opacity-10 pointer-events-none">
          <svg className="w-full h-full stroke-primary stroke-[2] fill-none">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              d="M 0 20 L 60 20 L 70 5 L 85 35 L 95 20 L 140 20 L 150 5 L 165 35 L 175 20 L 220 20 L 230 5 L 245 35 L 255 20 L 320 20"
            />
          </svg>
        </div>

        {/* Slots Simulation */}
        <div className="grid grid-cols-3 gap-2 relative z-10">
          {/* Slot 1: Already Booked */}
          <div className="bg-foreground/[0.03] border border-border/5 rounded p-1.5 flex flex-col justify-between h-14">
            <span className="font-mono text-[8px] text-muted">09:00 AM</span>
            <span className="font-sans text-[7px] font-bold text-muted uppercase">Booked</span>
          </div>

          {/* Slot 2: Booking Action */}
          <div className={`border rounded p-1.5 flex flex-col justify-between h-14 transition-all duration-500 ${
            bookingState === 'selecting' 
              ? 'border-primary bg-primary/5' 
              : bookingState === 'confirmed'
              ? 'border-emerald-500 bg-emerald-500/5'
              : 'border-border/20 bg-transparent'
          }`}>
            <div className="flex justify-between items-start">
              <span className="font-mono text-[8px]">10:30 AM</span>
              {bookingState === 'confirmed' && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
                  <CheckCircle className="w-2.5 h-2.5 text-emerald-500" />
                </motion.div>
              )}
            </div>
            
            <span className={`font-sans text-[7.5px] font-black uppercase transition-colors duration-500 ${
              bookingState === 'selecting' 
                ? 'text-primary' 
                : bookingState === 'confirmed'
                ? 'text-emerald-500'
                : 'text-muted'
            }`}>
              {bookingState === 'available' && 'OPEN'}
              {bookingState === 'selecting' && 'SELECTING...'}
              {bookingState === 'confirmed' && 'RESERVED!'}
            </span>
          </div>

          {/* Slot 3: Available */}
          <div className="bg-primary/5 border border-primary/20 rounded p-1.5 flex flex-col justify-between h-14">
            <span className="font-mono text-[8px] text-primary font-bold">12:00 PM</span>
            <span className="font-sans text-[7.5px] font-black text-primary uppercase">Open</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center font-mono text-[8px] text-muted z-10">
        <span>VACANCY: 2 SLOTS</span>
        <div className="flex items-center gap-1">
          <Activity className="w-2.5 h-2.5 text-sky-500 animate-pulse" />
          <span>REAL-TIME UPDATE</span>
        </div>
      </div>
    </div>
  );
};

// Custom dynamic animation for PaintIQ (AI Paint BI Dashboard)
const PaintIQGraphic = () => {
  const [aiMessage, setAiMessage] = useState(0);
  const messages = [
    { user: 'Check paint inventory', ai: 'Stock is 85%. Paint margins +12%' },
    { user: 'விற்பனை எப்படி?', ai: 'இன்று ₹45,200 லாபம் (அதிகம்!)' },
    { user: 'Simulate price cuts', ai: '8% price cut increases sales 20%' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAiMessage(curr => (curr + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const [isEdge, setIsEdge] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsEdge(curr => !curr);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-44 bg-foreground/[0.02] border border-border/10 rounded-xl overflow-hidden p-4 flex flex-col justify-between group-hover:border-primary/30 transition-all duration-500">
      <div className="flex justify-between items-center z-10">
        <span className="font-mono text-[9px] text-muted tracking-widest uppercase">PaintIQ Dashboard</span>
        <div className="flex items-center gap-1.5 bg-foreground/[0.03] border border-border/10 rounded px-1 py-0.5">
          <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${isEdge ? 'bg-amber-400 animate-pulse' : 'bg-primary'}`} />
          <span className="font-mono text-[7px] font-bold text-foreground">
            {isEdge ? 'EDGE_PI' : 'CLOUD_LLM'}
          </span>
        </div>
      </div>

      {/* Main visual panel */}
      <div className="my-auto grid grid-cols-12 gap-2 h-20 items-center z-10">
        {/* Paint brushes / mixing circles */}
        <div className="col-span-3 flex flex-col items-center gap-1">
          <div className="flex gap-1 justify-center">
            {['#EF6737', '#3B82F6', '#10B981'].map((c, i) => (
              <motion.div
                key={c}
                animate={{
                  scale: [1, 1.2, 1],
                  y: [0, -4, 0]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity
                }}
                className="w-2.5 h-2.5 rounded-full border border-border/20"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          <span className="font-mono text-[6px] text-muted uppercase">HARDWARE</span>
        </div>

        {/* AI Bilingual Dialogue Bubble */}
        <div className="col-span-9 bg-foreground/[0.02] border border-border/10 rounded-lg p-2 h-18 flex flex-col justify-between overflow-hidden relative">
          <motion.div
            key={`u-${aiMessage}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-1 items-center"
          >
            <span className="text-[6.5px] font-bold font-mono text-primary">USER:</span>
            <span className="text-[7.5px] font-sans text-foreground/90 font-medium tracking-tight truncate">
              {messages[aiMessage].user}
            </span>
          </motion.div>

          <motion.div
            key={`a-${aiMessage}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="flex gap-1 items-start mt-0.5"
          >
            <span className="text-[6.5px] font-bold font-mono text-emerald-500">AI:</span>
            <span className="text-[7.5px] font-sans text-muted/90 leading-tight tracking-tight line-clamp-2">
              {messages[aiMessage].ai}
            </span>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-between items-center font-mono text-[8px] text-muted z-10">
        <span>INTERFACE: தமிழ் / EN</span>
        <span>LATENCY: {isEdge ? '12ms (local)' : '340ms (cloud)'}</span>
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [iframeLoading, setIframeLoading] = useState(true);

  // Set iframe loading state back to true when selected project changes
  useEffect(() => {
    if (selectedProject) {
      setIframeLoading(true);
    }
  }, [selectedProject]);
  
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
      title: 'PARCIDO',
      category: 'LOGISTICS FREIGHT BOOKING',
      description: 'A dedicated booking website allowing users to book small freighter trucks to ship their cargo. Integrates scheduling, truck listings, and transit options.',
      tags: ['VITE', 'REACT', 'TAILWIND', 'LOGISTICS'],
      graphic: <ParcidoGraphic />,
      url: 'https://jazzy-choux-30c85a.netlify.app/'
    },
    {
      id: 'p2',
      title: 'MEDILAB',
      category: 'HEALTHCARE SCHEDULING',
      description: 'An online doctor appointment scheduling platform. Features calendar slot reservations, active queue trackers, and consultation workflows.',
      tags: ['REACT', 'TYPESCRIPT', 'WORKERS', 'CALENDAR'],
      graphic: <MedilabGraphic />,
      url: 'https://medilab-online-appointment.leveragequite.workers.dev/'
    },
    {
      id: 'p3',
      title: 'PAINTIQ',
      category: 'AI BUSINESS BI DASHBOARD',
      description: 'An AI-powered hardware and paint retail business intelligence dashboard. Combines multi-turn AI assistant, scenario simulations, and edge-AI offline optimizations.',
      tags: ['AI CHAT', 'RECHARTS', 'TAMIL/ENGLISH', 'EDGE AI'],
      graphic: <PaintIQGraphic />,
      url: 'https://paintiq-insights.leveragequite.workers.dev/suppliers'
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

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative glass-panel rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-neon hover:-translate-y-1 overflow-hidden cursor-pointer"
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

      {/* Interactive Preview Drawer/Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="w-full max-w-6xl h-[85vh] glass-panel bg-background/95 flex flex-col overflow-hidden shadow-2xl border border-border/30 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:px-6 border-b border-border/10 gap-4 bg-foreground/[0.01]">
                {/* Project Info & Open New Tab */}
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-primary font-bold tracking-widest uppercase">
                    {selectedProject.category}
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <h3 className="font-display text-lg font-bold tracking-tight text-foreground uppercase">
                      {selectedProject.title}
                    </h3>
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-md hover:bg-foreground/5 text-muted hover:text-primary transition-colors flex items-center gap-1 font-mono text-[10px]"
                      title="Open website in new tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>visit site</span>
                    </a>
                  </div>
                </div>

                {/* Device Mode Switcher */}
                <div className="flex items-center gap-1 bg-foreground/[0.04] p-1 border border-border/10 rounded-lg mx-auto md:mx-0">
                  <button
                    onClick={() => setDeviceMode('desktop')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-[10px] font-bold transition-all cursor-pointer ${
                      deviceMode === 'desktop'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted hover:text-foreground hover:bg-foreground/5'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>DESKTOP</span>
                  </button>
                  <button
                    onClick={() => setDeviceMode('tablet')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-[10px] font-bold transition-all cursor-pointer ${
                      deviceMode === 'tablet'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted hover:text-foreground hover:bg-foreground/5'
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" />
                    <span>TABLET</span>
                  </button>
                  <button
                    onClick={() => setDeviceMode('mobile')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-[10px] font-bold transition-all cursor-pointer ${
                      deviceMode === 'mobile'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted hover:text-foreground hover:bg-foreground/5'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>MOBILE</span>
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 md:relative md:top-auto md:right-auto p-2 rounded-full hover:bg-foreground/5 text-muted hover:text-foreground transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Iframe Viewport Container */}
              <div className="flex-1 bg-foreground/[0.03] dark:bg-black/10 flex items-center justify-center p-4 overflow-auto relative">
                {iframeLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm z-20">
                    <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                    <span className="font-mono text-[10px] text-muted mt-3">LOADING LIVE SITE...</span>
                  </div>
                )}
                
                <motion.div
                  layout
                  className="h-full bg-background overflow-hidden relative shadow-2xl transition-all duration-300"
                  style={{
                    width: deviceMode === 'desktop' ? '100%' : deviceMode === 'tablet' ? '768px' : '375px',
                    borderRadius: deviceMode === 'desktop' ? '0px' : '16px',
                    border: deviceMode === 'desktop' ? 'none' : '4px solid var(--border)'
                  }}
                >
                  <iframe
                    src={selectedProject.url}
                    title={selectedProject.title}
                    className="w-full h-full border-none"
                    onLoad={() => setIframeLoading(false)}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
