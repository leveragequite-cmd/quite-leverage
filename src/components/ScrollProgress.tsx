import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Create a spring animation for the progress to make it super smooth
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      id="scroll-progress-container"
      className="fixed left-3 md:left-6 top-0 bottom-0 w-[2px] z-40 flex flex-col justify-between py-12 pointer-events-none"
    >
      {/* Background track */}
      <div className="absolute top-12 bottom-12 left-0 w-[1px] bg-border opacity-20" />
      
      {/* Scroll indicator top marker */}
      <div className="w-1.5 h-1.5 rounded-full bg-primary -ml-[2px] opacity-40" />

      {/* Dynamic line */}
      <motion.div
        id="scroll-accent-line"
        className="absolute top-12 bottom-12 left-0 w-[2px] bg-primary origin-top"
        style={{ scaleY }}
      />

      {/* Scroll indicator bottom marker */}
      <div className="w-1.5 h-1.5 rounded-full bg-primary -ml-[2px] opacity-40" />
    </div>
  );
}
