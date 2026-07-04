import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, LogIn, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [role, setRole] = useState<'client' | 'admin'>('client');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields', {
        style: {
          background: 'var(--background)',
          color: 'var(--foreground)',
          borderColor: 'var(--border)',
        }
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Successfully logged in as ${role === 'client' ? 'Client' : 'Administrator'}`, {
        description: `Welcome back, ${email}!`,
        style: {
          background: 'var(--background)',
          color: 'var(--foreground)',
          borderColor: 'var(--border)',
        }
      });
      onClose();
      // Reset inputs
      setEmail('');
      setPassword('');
    }, 1200);
  };

  const handleGoogleLogin = () => {
    toast.success('Initiating secure Google connection...', {
      description: `Connecting ${role === 'client' ? 'Client Portal' : 'Admin Console'}`,
      style: {
        background: 'var(--background)',
        color: 'var(--foreground)',
        borderColor: 'var(--border)',
      }
    });
    setTimeout(() => {
      toast.success(`Authenticated via Google as ${role === 'client' ? 'Client' : 'Admin'}!`, {
        style: {
          background: 'var(--background)',
          color: 'var(--foreground)',
          borderColor: 'var(--border)',
        }
      });
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop blurring effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md glass-panel rounded-2xl p-8 z-10 shadow-2xl overflow-hidden"
          >
            {/* Design Accents */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary" />
            
            {/* Close Button */}
            <button
              id="close-auth-modal"
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-foreground/10 text-foreground/70 hover:text-foreground transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
                PORTAL ACCESS
              </h2>
              <p className="font-sans text-xs text-muted mt-1 uppercase tracking-wider">
                Select your workspace credentials
              </p>
            </div>

            {/* Role Switcher (Slider) */}
            <div className="relative flex p-1 bg-foreground/5 border border-border/40 rounded-full mb-6">
              <motion.div
                className="absolute top-1 bottom-1 rounded-full bg-primary"
                layoutId="active-role-bg"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                style={{
                  left: role === 'client' ? '4px' : '50%',
                  right: role === 'client' ? '50%' : '4px',
                }}
              />
              <button
                type="button"
                onClick={() => setRole('client')}
                className={`relative z-10 w-1/2 py-2 text-center text-xs font-display font-semibold transition-colors duration-300 ${
                  role === 'client' ? 'text-primary-foreground' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                CLIENT PORTAL
              </button>
              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`relative z-10 w-1/2 py-2 text-center text-xs font-display font-semibold transition-colors duration-300 ${
                  role === 'admin' ? 'text-primary-foreground' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                ADMIN DASHBOARD
              </button>
            </div>

            {/* Description according to role */}
            <div className="h-6 overflow-hidden mb-6 text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={role}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="font-sans text-xs text-muted/80 italic"
                >
                  {role === 'client' 
                    ? "Manage your active project deliveries and schedules." 
                    : "Access analytics, user databases, and platform controls."
                  }
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Google OAuth Button */}
            <button
              type="button"
              id="google-oauth-btn"
              onClick={handleGoogleLogin}
              className="w-full py-3 px-4 flex items-center justify-center gap-3 bg-foreground/5 hover:bg-foreground/10 border border-border/30 rounded-lg font-sans text-xs font-bold tracking-wider text-foreground hover:shadow-neon transition-all duration-300 mb-6 group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              CONTINUE WITH GOOGLE
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] flex-grow bg-border/20" />
              <span className="font-sans text-[10px] tracking-widest text-muted uppercase font-medium">
                OR EMAIL LOGIN
              </span>
              <div className="h-[1px] flex-grow bg-border/20" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div className="space-y-1.5">
                <label className="block font-sans text-[11px] font-bold tracking-wider text-foreground/80 uppercase">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full bg-foreground/[0.03] focus:bg-foreground/[0.07] border border-border/40 focus:border-primary/80 rounded-lg pl-10 pr-4 py-2.5 font-sans text-xs text-foreground placeholder-muted/50 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="block font-sans text-[11px] font-bold tracking-wider text-foreground/80 uppercase">
                    Password
                  </label>
                  <a
                    href="#forgot"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.info('Password recovery link sent to your workspace.', {
                        style: {
                          background: 'var(--background)',
                          color: 'var(--foreground)',
                          borderColor: 'var(--border)',
                        }
                      });
                    }}
                    className="font-sans text-[10px] text-primary hover:underline"
                  >
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-foreground/[0.03] focus:bg-foreground/[0.07] border border-border/40 focus:border-primary/80 rounded-lg pl-10 pr-4 py-2.5 font-sans text-xs text-foreground placeholder-muted/50 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="auth-submit-btn"
                disabled={isLoading}
                className="w-full mt-6 py-3 px-4 bg-primary hover:bg-primary-foreground hover:text-primary hover:border-primary border border-transparent rounded-lg font-display text-xs font-bold tracking-widest text-primary-foreground hover:shadow-neon transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="inline-block w-4 h-4 border-2 border-t-transparent border-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    SECURE SIGN IN
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
