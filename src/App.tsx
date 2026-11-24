import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { TransitionProvider } from './contexts/TransitionContext';
import { SmoothScroll } from './components/common/SmoothScroll';
import { StudioCardWarpLoader } from './components/common/StudioCardWarpLoader';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { HeaderHUD } from './components/navigation/HeaderHUD';
import { MenuDrawer } from './components/navigation/MenuDrawer';
import { BottomDock } from './components/navigation/BottomDock';
import { CustomCursor } from './components/common/CustomCursor';
import { NoiseOverlay } from './components/common/NoiseOverlay';
import { ScrollToTop } from './components/common/ScrollToTop';
import { WhatsAppCTA } from './components/common/WhatsAppCTA';

// Code-split route components to avoid monolithic 600kB+ initial bundle
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const WorkPage = lazy(() => import('./pages/WorkPage').then((m) => ({ default: m.WorkPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const VisionPage = lazy(() => import('./pages/VisionPage').then((m) => ({ default: m.VisionPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const LeadershipPage = lazy(() => import('./pages/LeadershipPage').then((m) => ({ default: m.LeadershipPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const AppContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <ThemeProvider>
      <TransitionProvider>
        <SmoothScroll>
          <ScrollToTop />
          <div className="relative min-h-screen bg-canvas text-text-primary transition-colors duration-300 overflow-x-hidden pb-16 md:pb-20">
            {/* Top Red Laser Scroll Progress Bar */}
            <ScrollProgressBar />

            {/* 3D Card Warp Loader & In-Between Transition */}
            <StudioCardWarpLoader />

            {/* Tactile Analog Noise Film Grain */}
            <NoiseOverlay />

            {/* RIWA Inertial Custom Cursor */}
            <CustomCursor />

            {/* Direct Studio WhatsApp Concierge */}
            <WhatsAppCTA />

            {/* RIWA Fixed Difference Navigation HUD */}
            <HeaderHUD
              isMenuOpen={isMenuOpen}
              onOpenMenu={() => setIsMenuOpen(true)}
              onCloseMenu={() => setIsMenuOpen(false)}
            />

            {/* RIWA 3D Page Tilt Container */}
            <motion.div
              id="page-main"
              animate={
                isMenuOpen
                  ? isDesktop
                    ? {
                        rotate: 8,
                        x: 200,
                        y: 250,
                        scale: 1.08,
                        opacity: 0.15,
                        filter: 'blur(6px)',
                      }
                    : {
                        opacity: 0.25,
                      }
                  : isDesktop
                    ? {
                        rotate: 0,
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        filter: 'none',
                      }
                    : {
                        opacity: 1,
                      }
              }
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={
                isDesktop
                  ? {
                      transformOrigin: 'top right',
                      transform: isMenuOpen ? undefined : 'none',
                    }
                  : undefined
              }
              className="w-full"
            >
              <Suspense fallback={<div className="min-h-screen bg-canvas" />}>
                <Routes>
                  <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
                  <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
                  <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
                  <Route path="/vision" element={<Navigate to="/about" replace />} />
                  <Route path="/protocol" element={<Navigate to="/about" replace />} />
                  <Route path="/manifesto" element={<Navigate to="/about" replace />} />
                  <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
                  <Route path="/leadership" element={<PageTransition><LeadershipPage /></PageTransition>} />
                  <Route path="/team" element={<Navigate to="/leadership" replace />} />
                  <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
                  <Route path="/brief" element={<Navigate to="/contact" replace />} />
                  <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
                </Routes>
              </Suspense>
            </motion.div>

            {/* RIWA Diagonal Polygon Menu Curtain */}
            <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            {/* Fixed Difference Bottom Dock (Desktop) & Floating Thumb Capsule (Mobile) */}
            <BottomDock
              isMenuOpen={isMenuOpen}
              onOpenMenu={() => setIsMenuOpen(true)}
              onCloseMenu={() => setIsMenuOpen(false)}
            />
          </div>
        </SmoothScroll>
      </TransitionProvider>
    </ThemeProvider>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
