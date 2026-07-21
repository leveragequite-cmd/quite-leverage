import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { User, UserCheck, MessageSquare, Sparkles, CheckCircle, Code } from 'lucide-react';

export default function DiscussionGraphic() {
  const [activeMessage, setActiveMessage] = useState(0);

  const dialogue = [
    { sender: 'client', text: 'I need a fast, custom web application with secure auth.', tag: 'REQUIREMENT' },
    { sender: 'owner', text: 'We design tailored React 19 + Firebase solutions with zero bloat.', tag: 'PROPOSAL' },
    { sender: 'client', text: 'Great! How is pricing determined?', tag: 'PRICING' },
    { sender: 'owner', text: 'Calculated transparently based on your exact scope and features.', tag: 'ESTIMATION' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % dialogue.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto glass-panel p-6 md:p-8 rounded-2xl border border-primary/30 overflow-hidden my-8 shadow-xl">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Label */}
      <div className="flex justify-between items-center mb-6 border-b border-border/10 pb-3">
        <div className="flex items-center gap-2 font-mono text-[10px] text-primary font-bold uppercase tracking-widest">
          <MessageSquare className="w-3.5 h-3.5 animate-bounce" />
          <span>PROJECT COLLABORATION SESSION</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-mono text-[8px] font-bold">
          LIVE DISCUSSION
        </span>
      </div>

      {/* Characters & Interactive Dialogue Area */}
      <div className="grid grid-cols-12 gap-4 items-center">
        {/* Left Character: Client */}
        <div className="col-span-3 flex flex-col items-center text-center space-y-2">
          <motion.div
            animate={{ scale: dialogue[activeMessage].sender === 'client' ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 0.5 }}
            className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
              dialogue[activeMessage].sender === 'client'
                ? 'bg-primary text-primary-foreground border-primary shadow-neon scale-105'
                : 'bg-foreground/[0.04] text-foreground/70 border-border/20'
            }`}
          >
            <User className="w-7 h-7 md:w-8 md:h-8" />
          </motion.div>
          <div>
            <span className="font-display text-xs font-black uppercase text-foreground block">CLIENT</span>
            <span className="font-mono text-[8px] text-muted uppercase">Project Requestor</span>
          </div>
        </div>

        {/* Center Exchange Workbench & Dynamic Dialogue Bubbles */}
        <div className="col-span-6 flex flex-col items-center justify-center space-y-4">
          {/* Animated Connecting Wave Pulse */}
          <div className="relative w-full h-1 bg-border/20 rounded-full overflow-hidden flex items-center">
            <motion.div
              animate={{
                x: dialogue[activeMessage].sender === 'client' ? ['-100%', '100%'] : ['100%', '-100%']
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1/3 h-full bg-primary shadow-neon rounded-full"
            />
          </div>

          {/* Dialogue Bubble Card */}
          <div className="h-24 flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMessage}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-background/90 border border-primary/40 p-4 rounded-xl shadow-lg text-center space-y-1 relative"
              >
                <span className="font-mono text-[8px] font-bold text-primary tracking-widest uppercase block">
                  {dialogue[activeMessage].tag}
                </span>
                <p className="font-sans text-xs font-medium text-foreground leading-snug">
                  "{dialogue[activeMessage].text}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Character: Agency Owner / Architect */}
        <div className="col-span-3 flex flex-col items-center text-center space-y-2">
          <motion.div
            animate={{ scale: dialogue[activeMessage].sender === 'owner' ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 0.5 }}
            className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
              dialogue[activeMessage].sender === 'owner'
                ? 'bg-primary text-primary-foreground border-primary shadow-neon scale-105'
                : 'bg-foreground/[0.04] text-foreground/70 border-border/20'
            }`}
          >
            <UserCheck className="w-7 h-7 md:w-8 md:h-8" />
          </motion.div>
          <div>
            <span className="font-display text-xs font-black uppercase text-foreground block">AGENCY OWNER</span>
            <span className="font-mono text-[8px] text-primary font-bold uppercase">Lead Architect</span>
          </div>
        </div>
      </div>
    </div>
  );
}
