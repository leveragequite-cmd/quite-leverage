import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable scrolling during load
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="initial-loader"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.12,
            transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          <div className="text-center px-6 max-w-4xl">
            {/* Animated accent dot */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-4 h-4 bg-primary rounded-full mx-auto mb-6"
            />
            
            {/* Main Logo Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-7xl font-extrabold tracking-tighter text-primary select-none"
            >
              QUITE LEVERAGE
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 font-sans text-xs md:text-sm tracking-[0.35em] font-semibold text-foreground uppercase select-none"
            >
              Web Solutions at Maximum leverage
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
