import { motion } from 'motion/react';
import { ArrowDown, Layers, Rocket, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[70vh] flex items-center justify-center pt-28 pb-12 overflow-hidden px-6 md:px-12"
    >
      {/* Background Decorative Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(155,172,216,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(155,172,216,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Hero Content Wrapper */}
      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Modern Accent Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 border border-border/20 text-foreground/80 font-sans text-[10px] tracking-[0.25em] uppercase font-bold mb-8 select-none"
        >
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
          AESTHETIC & HIGHLY FUNCTIONAL
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter text-foreground mb-8 select-none"
        >
          LEVERAGED <br />
          <span className="text-primary hover:scale-[1.01] inline-block transition-transform duration-300">
            WEB SOLUTIONS
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl font-sans text-sm md:text-lg tracking-wide text-foreground/95 mb-12"
        >
          We build sites that get the job done without hurting your pocket. No unnecessary bloat. Perfect execution, high-performance glass aesthetics, and direct results.
        </motion.p>

        {/* Buttons / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Main CTA */}
          <a
            href="#projects"
            id="hero-cta-view-work"
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-foreground hover:text-primary hover:border-primary border border-transparent rounded-xl font-display text-xs font-black tracking-widest text-primary-foreground hover:shadow-neon transition-all duration-300 text-center select-none cursor-pointer"
          >
            VIEW WORK
          </a>

          {/* Secondary CTA */}
          <a
            href="#pricing"
            id="hero-cta-pricing"
            className="w-full sm:w-auto px-8 py-4 bg-foreground/5 hover:bg-foreground/10 border border-border/40 rounded-xl font-display text-xs font-black tracking-widest text-foreground transition-all duration-300 text-center select-none cursor-pointer"
          >
            SEE PRICING
          </a>
        </motion.div>
      </div>
    </section>
  );
}
