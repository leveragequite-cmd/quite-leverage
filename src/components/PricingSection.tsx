import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Check, Sparkles, Terminal, ArrowRight } from 'lucide-react';

export default function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside pricing container to animate background text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Background parallax offset
  const textY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const handleSelectCustom = () => {
    // Auto scroll to contact form if it exists on page
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Otherwise navigate to the discuss route
      window.location.hash = '#contact';
    }
  };

  const capabilities = [
    { title: 'Tailored UI/UX Architecture', desc: 'Bespoke design system, micro-interactions, and fully responsive frontend assets crafted to match your exact brand.' },
    { title: 'Secure Serverless Authentication', desc: 'Firebase-backed secure user portal logins separating client accounts, project views, and administrative dashboards.' },
    { title: 'Dynamic Databases & Third-Party APIs', desc: 'Custom schema models, automated cloud storage configurations, and robust API endpoints linking external SaaS tools.' },
    { title: 'Gemini AI & Automated Logic', desc: 'Native AI models, content generation pipelines, and smart analytical dashboards integrated directly inside your app.' },
    { title: 'SEO Engineering & Loading Optimization', desc: 'Perfect Lighthouse audit compliance, optimal Core Web Vitals, and lightning-fast edge network deployments.' }
  ];

  return (
    <section 
      ref={containerRef}
      id="pricing" 
      className="relative py-24 overflow-hidden px-6 md:px-12 border-t border-border/10 bg-background"
    >
      {/* Parallax Background Text */}
      <motion.div 
        style={{ y: textY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="font-display text-[15vw] md:text-[18vw] font-black text-foreground/[0.03] leading-none tracking-widest">
          SCOPE
        </span>
      </motion.div>

      {/* Section Content */}
      <div className="relative max-w-5xl mx-auto z-10">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <span className="font-sans text-xs font-black tracking-[0.3em] text-primary uppercase block mb-3">
            TAILORED BUDGETS
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground uppercase">
            BESPOKE ESTIMATION
          </h2>
          <div className="w-20 h-[3px] bg-primary mt-6 mx-auto" />
        </div>

        {/* Custom Pricing Layout Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-12 relative rounded-2xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-neon transition-all duration-500 overflow-hidden"
        >
          {/* Accent Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left side: Information and Title */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full font-mono text-[9px] font-black tracking-widest uppercase">
                <Sparkles className="w-3 h-3 animate-spin" />
                <span>100% Custom Execution</span>
              </div>
              
              <h3 className="font-display text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight">
                PROJECT-BASED PRICING
              </h3>
              
              <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
                We believe premium results cannot fit into standardized templates. Our pricing is calculated transparently based on your specific requirements, system complexity, database architecture, and required delivery speed.
              </p>

              {/* Steps or approach */}
              <div className="space-y-4 pt-4 border-t border-border/10">
                <div className="flex gap-3">
                  <div className="font-mono text-[10px] text-primary font-bold bg-primary/10 w-5 h-5 rounded-full flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h5 className="font-display text-[10px] font-black text-foreground uppercase">Submit Scope Outline</h5>
                    <p className="font-sans text-[11px] text-muted">Use our discussion form below to tell us what features you need.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="font-mono text-[10px] text-primary font-bold bg-primary/10 w-5 h-5 rounded-full flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h5 className="font-display text-[10px] font-black text-foreground uppercase">Receive Custom Proposal</h5>
                    <p className="font-sans text-[11px] text-muted">We will evaluate your stack requirements and supply a fixed-cost proposal in 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Capability Features List */}
            <div className="lg:col-span-5 bg-foreground/[0.02] border border-border/10 p-6 md:p-8 rounded-xl flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <span className="font-mono text-[9px] text-muted tracking-widest uppercase block border-b border-border/10 pb-2">
                  CUSTOM SUITE CAPABILITIES
                </span>
                
                <ul className="space-y-3.5">
                  {capabilities.map((cap) => (
                    <li key={cap.title} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0 stroke-[3]" />
                      <div>
                        <span className="font-display text-[10px] font-black text-foreground uppercase tracking-tight block">
                          {cap.title}
                        </span>
                        <span className="font-sans text-[10px] text-muted leading-tight block mt-0.5">
                          {cap.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquire CTA */}
              <button
                type="button"
                id="pricing-custom-cta"
                onClick={handleSelectCustom}
                className="w-full mt-4 py-4 bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-primary border border-transparent rounded-xl font-display text-xs font-black tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
