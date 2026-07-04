import { motion } from 'motion/react';
import React from 'react';

interface ViewportZoomProps {
  children: React.ReactNode;
  className?: string;
}

export default function ViewportZoom({ children, className = '' }: ViewportZoomProps) {
  return (
    <motion.div
      initial={{ scale: 0.94, opacity: 0.82 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ 
        ease: [0.25, 1, 0.5, 1], // High-end cubic-bezier transition
        duration: 0.85 
      }}
      className={`w-full origin-center ${className}`}
    >
      {children}
    </motion.div>
  );
}
