import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error('All contact fields are required', {
        style: {
          background: 'var(--background)',
          color: 'var(--foreground)',
          borderColor: 'var(--border)',
        }
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Inquiry received successfully!', {
        description: `Thank you, ${name}. We will get back to you at ${email} within 24 hours.`,
        style: {
          background: 'var(--background)',
          color: 'var(--foreground)',
          borderColor: 'var(--border)',
        }
      });
      // Clear form
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  const socialLinks = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/quiteleverage/',
      handle: 'quiteleverage'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://www.instagram.com/quite.leverage/',
      handle: '@quite.leverage'
    },
    {
      id: 'email',
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:leveragequite@gmail.com',
      handle: 'leveragequite@gmail.com'
    }
  ];

  return (
    <section 
      id="contact" 
      className="relative py-32 overflow-hidden px-6 md:px-12 border-t border-border/10 bg-background"
    >
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section header */}
        <div className="mb-20">
          <span className="font-sans text-xs font-black tracking-[0.3em] text-primary uppercase block mb-3">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground">
            START A PROJECT
          </h2>
          <div className="w-20 h-[3px] bg-primary mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Informational left col */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-foreground uppercase mb-4">
                Let's discuss details
              </h3>
              <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
                Whether you need a simple landing page, a clean portfolio, or a fully custom dashboard, we provide robust, lightweight solutions at prices that respect your budget.
              </p>
            </div>

            {/* Interactive Social Grid */}
            <div className="space-y-4 border-t border-border/10 pt-8">
              <span className="block font-mono text-[10px] text-muted tracking-wider uppercase font-bold">
                Social Coordinates (Hover to illuminate)
              </span>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-border/20 bg-foreground/[0.02] text-foreground hover:text-primary hover:border-primary/50 hover:shadow-neon transition-all duration-300"
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {social.icon}
                    </div>
                    <div className="overflow-hidden">
                      <span className="block font-sans text-[11px] font-bold tracking-tight text-foreground leading-none mb-1">
                        {social.name}
                      </span>
                      <span className="block font-mono text-[9px] text-muted truncate">
                        {social.handle}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form right col */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="block font-sans text-xs font-bold tracking-wider text-foreground/80 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-foreground/[0.03] focus:bg-foreground/[0.07] border border-border/40 focus:border-primary/85 rounded-lg px-4 py-3 font-sans text-xs text-foreground placeholder-muted/50 outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="block font-sans text-xs font-bold tracking-wider text-foreground/80 uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nikesh@example.com"
                      className="w-full bg-foreground/[0.03] focus:bg-foreground/[0.07] border border-border/40 focus:border-primary/85 rounded-lg px-4 py-3 font-sans text-xs text-foreground placeholder-muted/50 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="block font-sans text-xs font-bold tracking-wider text-foreground/80 uppercase">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your website goals, pages required, and timeline..."
                    className="w-full bg-foreground/[0.03] focus:bg-foreground/[0.07] border border-border/40 focus:border-primary/85 rounded-lg px-4 py-3 font-sans text-xs text-foreground placeholder-muted/50 outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary hover:bg-primary-foreground hover:text-primary hover:border-primary border border-transparent rounded-xl font-display text-xs font-black tracking-widest text-primary-foreground hover:shadow-neon transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer select-none"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-t-transparent border-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      SUBMIT INQUIRY
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
