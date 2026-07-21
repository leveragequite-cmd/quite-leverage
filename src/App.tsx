import { useState, useEffect, lazy, Suspense } from 'react';
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

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Discuss = lazy(() => import('./pages/Discuss'));
const Auth = lazy(() => import('./pages/Auth'));

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
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/discuss" element={<Discuss />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/login" element={<Auth />} />
                <Route path="/signin" element={<Auth />} />
                <Route path="/admin" element={<Auth />} />
                <Route path="/admin/login" element={<Auth />} />
                <Route path="/secret-admin" element={<Auth />} />
              </Routes>
            </Suspense>
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
