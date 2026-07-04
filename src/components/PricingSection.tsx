import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Check, Flame, HelpCircle } from 'lucide-react';
import { toast } from 'sonner';

interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  delivery: string;
}

export default function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside pricing container to animate background text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Background parallax offset
  const textY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const plans: PricingPlan[] = [
    {
      id: 'basic',
      name: 'BASIC',
      tagline: 'Perfect for portfolios, events & marketing pages.',
      price: '₹399',
      delivery: '< 5 days',
      features: [
        '1–2 page responsive website',
        'Modern landing page design',
        'Portfolio or business showcase',
        'Contact & social media links',
        'Mobile-friendly layout'
      ],
      ctaText: 'Get Started'
    },
    {
      id: 'pro',
      name: 'PRO',
      tagline: 'For businesses that need dynamic functionality.',
      price: '₹1299',
      isPopular: true,
      delivery: '< 3 days',
      features: [
        'Everything in Basic',
        'Login & signup system',
        'User data storage',
        'Contact forms & dashboards',
        'Database integration',
        'Admin panel (basic)',
        'Dynamic content'
      ],
      ctaText: 'Get Started'
    },
    {
      id: 'ultimate',
      name: 'ULTIMATE',
      tagline: 'Custom solutions built for your business.',
      price: 'Custom Quote',
      delivery: 'Built to your requirements',
      features: [
        'Full-stack web applications',
        'Custom dashboards',
        'Role-based authentication',
        'API integrations',
        'Payment gateway integration',
        'AI & automation features',
        'Ongoing support & maintenance'
      ],
      ctaText: 'Contact Us'
    }
  ];

  const handleSelectPlan = (plan: PricingPlan) => {
    toast.success(`Plan Selected: ${plan.name}`, {
      description: `Thank you for choosing ${plan.name}! Let's discuss your requirements below.`,
      style: {
        background: 'var(--background)',
        color: 'var(--foreground)',
        borderColor: 'var(--border)',
      }
    });
    // Auto scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      id="pricing" 
      className="relative py-32 overflow-hidden px-6 md:px-12 border-t border-border/10 bg-background"
    >
      {/* Parallax Background Text */}
      <motion.div 
        style={{ y: textY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="font-display text-[15vw] md:text-[18vw] font-black text-foreground/[0.03] leading-none tracking-widest">
          PRICING
        </span>
      </motion.div>

      {/* Section Content */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Title */}
        <div className="mb-20 text-center md:text-left">
          <span className="font-sans text-xs font-black tracking-[0.3em] text-primary uppercase block mb-3">
            AFFORDABLE SCALE
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground">
            TRANSPARENT PLANS
          </h2>
          <div className="w-20 h-[3px] bg-primary mt-6 mx-auto md:mx-0" />
        </div>

        {/* 3-Column Plan Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 cursor-default glass-panel ${
                plan.isPopular 
                  ? 'border-2 border-primary/60 scale-[1.02] lg:scale-[1.04] shadow-xl' 
                  : 'hover:-translate-y-1 hover:border-primary/40'
              } hover:shadow-neon`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary flex items-center gap-1.5 shadow-md">
                  <Flame className="w-3.5 h-3.5 text-primary-foreground animate-pulse" />
                  <span className="font-display text-[9px] font-black tracking-widest text-primary-foreground">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div>
                <span className="font-mono text-[10px] text-muted tracking-widest uppercase block mb-1">
                  PLAN LEVEL
                </span>
                <h3 className="font-display text-2xl font-black tracking-tight text-foreground mb-3">
                  {plan.name}
                </h3>
                <p className="font-sans text-xs text-muted leading-relaxed mb-6 h-10">
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-8 border-b border-border/10 pb-6">
                  <span className="font-display text-3xl md:text-4xl font-black text-primary">
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom Quote' && (
                    <span className="font-sans text-xs text-muted">/ base package</span>
                  )}
                </div>

                {/* SLA / Delivery */}
                <div className="mb-6 py-2 px-3 bg-foreground/5 border border-border/10 rounded-lg text-center">
                  <span className="font-sans text-xs font-bold text-foreground/95 uppercase tracking-wide">
                    {plan.delivery}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="p-0.5 rounded-full bg-primary/10 text-primary mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="font-sans text-xs md:text-sm text-foreground/90 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                id={`plan-cta-${plan.id}`}
                onClick={() => handleSelectPlan(plan)}
                className={`w-full py-4.5 rounded-xl font-display text-xs font-black tracking-widest transition-all duration-300 cursor-pointer text-center select-none ${
                  plan.isPopular 
                    ? 'bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-primary border border-transparent' 
                    : 'bg-foreground/5 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-transparent border border-border/30'
                }`}
              >
                {plan.ctaText.toUpperCase()}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
