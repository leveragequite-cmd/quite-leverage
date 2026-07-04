import { useState } from 'react';
import { Toaster } from 'sonner';
import { ThemeProvider } from './lib/theme';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import ViewportZoom from './components/ViewportZoom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import PricingSection from './components/PricingSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

export default function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <ThemeProvider>
      {/* Toast notification portal */}
      <Toaster 
        position="top-center" 
        closeButton 
        theme="dark" // Will auto adapt but styled explicitly
        toastOptions={{
          style: {
            fontFamily: 'var(--font-sans)',
            borderRadius: '12px',
          }
        }}
      />

      {/* Screen blocker on load (1.5s duration) */}
      <Loader />

      {/* Dynamic scrolling line along the left margin */}
      <ScrollProgress />

      {/* Sticky top navigational layout bar */}
      <Header onOpenAuth={() => setIsAuthOpen(true)} />

      {/* Core scrollable content blocks wrapped with dynamic Viewport Zoom animations */}
      <main className="relative z-10 w-full">
        {/* Hero Section */}
        <ViewportZoom className="relative">
          <HeroSection />
        </ViewportZoom>

        {/* Projects Grid Section with Parallax Background Text */}
        <ViewportZoom className="relative">
          <ProjectsSection />
        </ViewportZoom>

        {/* Pricing Matrix Plans */}
        <ViewportZoom className="relative">
          <PricingSection />
        </ViewportZoom>

        {/* Contact Submission & Socials Coordinates */}
        <ViewportZoom className="relative">
          <ContactForm />
        </ViewportZoom>
      </main>

      {/* Footer with high-fidelity halftone SVG text ripples */}
      <ViewportZoom className="relative">
        <Footer />
      </ViewportZoom>

      {/* Modal overlays */}
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
      />
    </ThemeProvider>
  );
}
