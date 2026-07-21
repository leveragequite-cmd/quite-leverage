import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ThemeProvider } from './lib/theme';
import { AuthProvider } from './lib/authContext';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import ViewportZoom from './components/ViewportZoom';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Discuss from './pages/Discuss';

// Helper component to restore scroll state to top on page transition
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <ThemeProvider>
          {/* Toast notification portal */}
          <Toaster 
            position="top-center" 
            closeButton 
            theme="dark" 
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

          {/* Core pages mapped via Routes */}
          <main className="relative z-10 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/discuss" element={<Discuss />} />
            </Routes>
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
      </Router>
    </AuthProvider>
  );
}
