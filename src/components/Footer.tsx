import { motion } from 'motion/react';
import { ArrowUp, Code, Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="footer" 
      className="relative pt-24 pb-12 overflow-hidden px-6 md:px-12 border-t border-border/10 bg-background"
    >
      {/* Footer Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 relative z-10">
        
        {/* Left column info */}
        <div className="md:col-span-5 space-y-4">
          <span className="font-display text-sm font-black tracking-tighter text-primary">
            QUITE LEVERAGE
          </span>
          <p className="font-sans text-xs text-muted/90 max-w-sm leading-relaxed">
            High-performance, lightweight web solutions crafted for maximal return. We respect your constraints, delivering modern aesthetics without bloat.
          </p>
          <div className="flex items-center gap-2 font-mono text-[9px] text-muted uppercase">
            <Terminal className="w-3.5 h-3.5 text-primary" />
            <span>CORE ENG: TSX + TAILWIND v4</span>
          </div>
        </div>

        {/* Center column links */}
        <div className="md:col-span-4 space-y-3">
          <span className="block font-mono text-[10px] text-muted tracking-wider uppercase font-bold">
            ARCHITECTURAL MAP
          </span>
          <div className="grid grid-cols-2 gap-2">
            <a href="#" className="font-sans text-xs text-foreground/80 hover:text-primary transition-colors">Hero Core</a>
            <a href="#projects" className="font-sans text-xs text-foreground/80 hover:text-primary transition-colors">Deliveries</a>
            <a href="#pricing" className="font-sans text-xs text-foreground/80 hover:text-primary transition-colors">Scale Pricing</a>
            <a href="#contact" className="font-sans text-xs text-foreground/80 hover:text-primary transition-colors">Inquiries</a>
          </div>
        </div>

        {/* Right column prompt */}
        <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
          <span className="font-mono text-[9px] text-muted uppercase text-left md:text-right">
            SECURE PREVIEW & DEPLOY
          </span>
          <button
            onClick={handleScrollTop}
            className="mt-4 p-3 rounded-xl bg-foreground/5 hover:bg-primary border border-border/20 hover:border-transparent text-foreground hover:text-primary-foreground hover:shadow-neon transition-all duration-300 flex items-center gap-2 cursor-pointer select-none font-sans text-xs font-bold"
          >
            <span>BACK TO CODESPACE</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Halftone Liquid Wave Text container */}
      <div className="max-w-[100vw] overflow-hidden select-none mb-10 border-t border-border/10 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center"
        >
          {/* Responsive SVG for precise halftone wave layout rendering */}
          <svg 
            viewBox="0 0 1000 130" 
            className="w-full max-w-[1280px] h-auto overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Halftone Dot Matrix Pattern */}
              <pattern 
                id="halftone-pattern" 
                x="0" 
                y="0" 
                width="8" 
                height="8" 
                patternUnits="userSpaceOnUse"
              >
                <circle cx="4" cy="4" r="2.8" fill="#EF6737" />
              </pattern>

              {/* Liquid Distortion Wave Filter */}
              <filter id="liquid-mask-distortion" x="-10%" y="-10%" width="120%" height="120%">
                <feTurbulence 
                  type="fractalNoise" 
                  baseFrequency="0.015 0.05" 
                  numOctaves="2" 
                  result="noise"
                >
                  <animate 
                    attributeName="baseFrequency" 
                    values="0.015 0.05;0.022 0.07;0.015 0.05" 
                    dur="5s" 
                    repeatCount="indefinite" 
                  />
                </feTurbulence>
                <feDisplacementMap 
                  in="SourceGraphic" 
                  in2="noise" 
                  scale="22" 
                  xChannelSelector="R" 
                  yChannelSelector="G" 
                />
              </filter>
            </defs>

            {/* Display Text styled with pattern and distortion filter */}
            <text
              x="50%"
              y="90"
              textAnchor="middle"
              fill="url(#halftone-pattern)"
              filter="url(#liquid-mask-distortion)"
              className="font-display font-extrabold text-[94px] tracking-tighter"
              style={{ whiteSpace: 'nowrap' }}
            >
              QUITE LEVERAGE
            </text>
          </svg>
        </motion.div>
      </div>

      {/* Copy/Meta bottom footer */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-border/10 pt-8 font-mono text-[9px] text-muted uppercase gap-4">
        <span>© 2026 QUITE LEVERAGE. ALL RIGHTS PRIVILEGED.</span>
        <div className="flex items-center gap-1">
          <span>BUILT WITH PRECISION IN</span>
          <Heart className="w-3 h-3 text-primary animate-pulse" />
          <span>AND TYPESCRIPT</span>
        </div>
      </div>
    </footer>
  );
}
