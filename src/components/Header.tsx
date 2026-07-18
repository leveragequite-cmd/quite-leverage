import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Sun, Moon, LogIn, Menu, X } from 'lucide-react';
import { useTheme } from '../lib/theme';

interface HeaderProps {
  onOpenAuth: () => void;
}

export default function Header({ onOpenAuth }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'PROJECTS', href: '#projects' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel py-3 shadow-lg border-b border-border/30' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logotype */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 hover:scale-[1.02] transition-transform duration-200"
        >
          <img src="/logo.png" alt="Quite Leverage Logo" className="w-8 h-8 rounded-lg object-cover border border-border/20" />
          <span className="font-display text-base md:text-lg font-black tracking-tighter text-primary">
            QUITE LEVERAGE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-xs font-bold tracking-widest text-foreground/80 hover:text-primary transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            id="theme-toggle-desktop"
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 border border-border/20 text-foreground transition-all duration-300"
            aria-label="Toggle visual theme"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-primary" />
            ) : (
              <Sun className="w-4 h-4 text-primary" />
            )}
          </button>

          {/* Login Button */}
          <button
            id="login-btn-desktop"
            onClick={onOpenAuth}
            className="px-5 py-2.5 rounded-lg bg-foreground/5 hover:bg-primary border border-border/30 hover:border-transparent font-sans text-xs font-bold tracking-widest text-foreground hover:text-primary-foreground hover:shadow-neon transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <LogIn className="w-3.5 h-3.5" />
            LOGIN
          </button>
        </div>

        {/* Mobile Controls Trigger */}
        <div className="flex md:hidden items-center gap-3">
          {/* Theme Toggle (Mobile) */}
          <button
            id="theme-toggle-mobile"
            onClick={toggleTheme}
            className="p-2 rounded-full bg-foreground/5 border border-border/20 text-foreground"
          >
            {theme === 'light' ? <Moon className="w-4 h-4 text-primary" /> : <Sun className="w-4 h-4 text-primary" />}
          </button>

          {/* Mobile Menu Icon */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full bg-foreground/5 text-foreground hover:bg-foreground/10 border border-border/20"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-border/20 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-xs font-extrabold tracking-widest text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-[1px] bg-border/20 my-2" />
              <button
                id="login-btn-mobile"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full py-3 rounded-lg bg-primary font-sans text-xs font-bold tracking-widest text-primary-foreground hover:shadow-neon transition-all duration-300 flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                LOGIN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
