import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, LogIn, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../lib/authContext';
import PricingSection from '../components/PricingSection';
import ContactForm from '../components/ContactForm';
import DiscussionGraphic from '../components/DiscussionGraphic';

export default function Discuss() {
  const { user, isLoading, openAuthModal } = useAuth();
  const [hasAutoPrompted, setHasAutoPrompted] = useState(false);

  // Prompt the unauthenticated user when they visit the Let's Discuss page
  useEffect(() => {
    if (!isLoading && !user && !hasAutoPrompted) {
      setHasAutoPrompted(true);
      
      // Auto open login prompt modal with enhanced statement
      openAuthModal("Login to access full potential — Unlock direct architect collaboration, live project quotes, and instant scope submission.");
      
      // Display high visibility toast
      toast.info("LOGIN TO ACCESS FULL POTENTIAL", {
        description: "Sign in to access live project discussions and personalized estimation tools.",
        duration: 5000,
        style: {
          background: 'var(--background)',
          color: 'var(--foreground)',
          borderColor: 'var(--border)',
        }
      });
    }
  }, [isLoading, user, hasAutoPrompted, openAuthModal]);

  return (
    <main className="min-h-screen pt-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto pt-6 space-y-6">
        
        {/* Login Prompt Banner for Guest Users */}
        {!user && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-4xl mx-auto glass-panel p-6 md:p-8 rounded-2xl border border-primary/40 shadow-2xl overflow-hidden bg-gradient-to-r from-primary/10 via-background/90 to-primary/5"
          >
            {/* Glowing Backdrop Accent */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] font-bold text-primary bg-primary/15 border border-primary/30 px-2 py-0.5 rounded uppercase tracking-widest flex items-center gap-1.5">
                    <ShieldAlert className="w-3 h-3" />
                    GUEST ACCESS MODE
                  </span>
                  <span className="font-mono text-[9px] font-bold text-muted tracking-widest uppercase">
                    • AUTHENTICATION RECOMMENDED
                  </span>
                </div>

                <h1 className="font-display text-xl md:text-2xl font-black tracking-tight text-foreground uppercase flex items-center gap-2.5">
                  <Sparkles className="w-6 h-6 text-primary animate-pulse shrink-0" />
                  LOGIN TO ACCESS FULL POTENTIAL
                </h1>

                <p className="font-sans text-xs md:text-sm text-foreground/80 leading-relaxed">
                  Unlock real-time lead architect consultations, direct feature breakdown requests, transparent project pricing, and secure client dashboard deliverables.
                </p>
              </div>

              {/* Login CTA Button */}
              <button
                onClick={() => openAuthModal("Login to access full potential — Unlock direct architect collaboration, live project quotes, and instant scope submission.")}
                className="shrink-0 py-3.5 px-6 bg-primary hover:bg-primary-foreground hover:text-primary hover:border-primary border border-transparent rounded-xl font-display text-xs font-bold tracking-widest text-primary-foreground shadow-neon transition-all duration-300 flex items-center gap-2.5 cursor-pointer group"
              >
                <LogIn className="w-4 h-4 transition-transform group-hover:scale-110" />
                LOGIN TO UNLOCK FULL ACCESS
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Authenticated User Status Banner */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl mx-auto glass-panel p-4 md:p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] font-bold text-emerald-500 uppercase tracking-widest">
                    FULL POTENTIAL UNLOCKED
                  </span>
                  <span className="font-mono text-[9px] text-muted uppercase">
                    ({user.role.toUpperCase()} SESSION)
                  </span>
                </div>
                <h3 className="font-display text-xs md:text-sm font-bold text-foreground truncate max-w-md">
                  AUTHENTICATED AS: {user.email}
                </h3>
              </div>
            </div>
            <span className="hidden sm:inline-block font-mono text-[9px] text-emerald-500/80 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
              READY FOR DIRECT COLLABORATION
            </span>
          </motion.div>
        )}

        <DiscussionGraphic />
      </div>
      
      <PricingSection />
      <ContactForm />
    </main>
  );
}
