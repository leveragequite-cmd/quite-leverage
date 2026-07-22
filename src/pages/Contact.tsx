import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Linkedin, 
  Instagram, 
  Facebook, 
  Mail, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Globe,
  Share2,
  MessageSquare
} from 'lucide-react';
import { toast } from 'sonner';

interface SocialPlatform {
  id: string;
  name: string;
  category: string;
  handle: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  brandColor: string;
  bgGradient: string;
  borderGlow: string;
  badge: string;
}

export default function Contact() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const socials: SocialPlatform[] = [
    {
      id: 'linkedin',
      name: 'LinkedIn Profile',
      category: 'PROFESSIONAL NETWORK',
      handle: 'quiteleverage',
      url: 'https://www.linkedin.com/in/quiteleverage/',
      description: 'Connect with our executive team, explore technical case studies, and follow agency development milestones.',
      icon: <Linkedin className="w-8 h-8 text-[#0A66C2]" />,
      brandColor: '#0A66C2',
      bgGradient: 'from-[#0A66C2]/15 via-background/90 to-[#0A66C2]/5',
      borderGlow: 'hover:border-[#0A66C2]/60 hover:shadow-[0_0_30px_rgba(10,102,194,0.3)]',
      badge: 'B2B & CAREERS'
    },
    {
      id: 'instagram',
      name: 'Instagram Hub',
      category: 'DESIGN & MEDIA',
      handle: '@quite.leverage',
      url: 'https://www.instagram.com/quite.leverage/',
      description: 'Behind-the-scenes engineering, motion design UI showcases, tech reels, and high-frequency design insights.',
      icon: <Instagram className="w-8 h-8 text-[#E4405F]" />,
      brandColor: '#E4405F',
      bgGradient: 'from-[#E4405F]/15 via-background/90 to-[#C13584]/5',
      borderGlow: 'hover:border-[#E4405F]/60 hover:shadow-[0_0_30px_rgba(228,64,95,0.3)]',
      badge: 'VISUAL SHOWCASE'
    },
    {
      id: 'facebook',
      name: 'Facebook Community',
      category: 'COMMUNITY & NEWS',
      handle: 'Quite Leverage Agency',
      url: 'https://www.facebook.com/quiteleverage',
      description: 'Official Facebook community hub for agency announcements, product launches, client feedback, and live event streams.',
      icon: <Facebook className="w-8 h-8 text-[#1877F2]" />,
      brandColor: '#1877F2',
      bgGradient: 'from-[#1877F2]/15 via-background/90 to-[#1877F2]/5',
      borderGlow: 'hover:border-[#1877F2]/60 hover:shadow-[0_0_30px_rgba(24,119,242,0.3)]',
      badge: 'OFFICIAL PAGE'
    },
    {
      id: 'email',
      name: 'Direct Email Line',
      category: 'PROJECT INQUIRIES',
      handle: 'leveragequite@gmail.com',
      url: 'mailto:leveragequite@gmail.com',
      description: 'Send direct technical briefs, proposal inquiries, or partnership opportunities directly to our engineering desk.',
      icon: <Mail className="w-8 h-8 text-primary" />,
      brandColor: 'var(--primary)',
      bgGradient: 'from-primary/15 via-background/90 to-primary/5',
      borderGlow: 'hover:border-primary/60 hover:shadow-neon',
      badge: 'DIRECT CONTACT'
    }
  ];

  const handleRedirect = (url: string, platformName: string) => {
    toast.success(`Redirecting to ${platformName}...`, {
      description: `Opening ${url} in a new tab.`,
      style: {
        background: 'var(--background)',
        color: 'var(--foreground)',
        borderColor: 'var(--border)',
      }
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyHandle = (e: React.MouseEvent, handle: string, id: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(handle);
    setCopiedId(id);
    toast.success(`Copied handle: ${handle}`, {
      style: {
        background: 'var(--background)',
        color: 'var(--foreground)',
        borderColor: 'var(--border)',
      }
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-6 md:px-12 relative overflow-hidden bg-background">
      
      {/* Background Animated Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0A66C2]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-primary bg-primary/10 border border-primary/30 px-3 py-1 rounded-full uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>OFFICIAL SOCIAL MEDIA & CONTACT DIRECTORY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase"
          >
            CONNECT & <span className="text-primary">FOLLOW US</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed"
          >
            Stay linked with <strong className="text-foreground">Quite Leverage</strong> across all official channels. Touch or click any interactive card below to connect directly with our agency team on LinkedIn, Instagram, Facebook, or Email.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="pt-2 flex items-center justify-center gap-6 font-mono text-[10px] text-muted uppercase"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              INSTANT 1-TOUCH REDIRECT
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-primary" />
              VERIFIED CHANNELS
            </span>
          </motion.div>
        </div>

        {/* Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {socials.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleRedirect(platform.url, platform.name)}
              className={`relative glass-panel p-8 rounded-3xl border border-border/30 bg-gradient-to-br ${platform.bgGradient} ${platform.borderGlow} transition-all duration-300 shadow-xl cursor-pointer group overflow-hidden`}
            >
              {/* Corner Watermark Accent Icon */}
              <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none scale-150 transform group-hover:rotate-12">
                {platform.icon}
              </div>

              {/* Card Top Row Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-foreground/[0.04] border border-border/20 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {platform.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-bold text-muted tracking-widest uppercase block">
                      {platform.category}
                    </span>
                    <h3 className="font-display text-lg font-extrabold text-foreground group-hover:text-primary transition-colors">
                      {platform.name}
                    </h3>
                  </div>
                </div>

                <span className="font-mono text-[8px] font-extrabold px-2.5 py-1 rounded-md bg-foreground/5 border border-border/20 text-foreground/80 uppercase tracking-widest group-hover:border-primary/40 group-hover:text-primary transition-colors">
                  {platform.badge}
                </span>
              </div>

              {/* Description */}
              <p className="font-sans text-xs text-foreground/80 leading-relaxed mb-6">
                {platform.description}
              </p>

              {/* Bottom Interactive Row */}
              <div className="pt-4 border-t border-border/15 flex items-center justify-between">
                
                {/* Handle Copy Button */}
                <button
                  type="button"
                  onClick={(e) => handleCopyHandle(e, platform.handle, platform.id)}
                  title="Click to copy handle"
                  className="flex items-center gap-2 font-mono text-xs font-bold text-foreground/90 hover:text-primary bg-foreground/5 hover:bg-foreground/10 px-3 py-1.5 rounded-lg border border-border/20 transition-all duration-200"
                >
                  {copiedId === platform.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-muted group-hover:text-primary" />
                  )}
                  <span>{platform.handle}</span>
                </button>

                {/* Touch / Redirect Action Badge */}
                <div className="flex items-center gap-1.5 font-display text-xs font-extrabold text-primary group-hover:translate-x-1 transition-transform duration-200">
                  <span className="uppercase tracking-wider">TOUCH TO VISIT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Interactive Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-panel p-8 rounded-3xl border border-primary/30 text-center space-y-4 bg-gradient-to-r from-primary/10 via-background/90 to-primary/5"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mx-auto">
            <MessageSquare className="w-6 h-6 animate-bounce" />
          </div>
          <h2 className="font-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">
            NEED A CUSTOM PROJECT ESTIMATE?
          </h2>
          <p className="font-sans text-xs md:text-sm text-foreground/80 max-w-xl mx-auto leading-relaxed">
            You can also initiate a live architecture discussion with our project team directly on our dedicated discussion platform.
          </p>
          <div className="pt-2">
            <a
              href="/discuss"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-foreground hover:text-primary border border-transparent rounded-xl font-display text-xs font-bold tracking-widest text-primary-foreground shadow-neon transition-all duration-300 cursor-pointer"
            >
              <span>GO TO LET'S DISCUSS PAGE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
