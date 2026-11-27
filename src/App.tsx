import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MotionConfig, motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { HeaderHUD } from './components/navigation/HeaderHUD';
import { MenuDrawer } from './components/navigation/MenuDrawer';
import { StickyProjectBar } from './components/navigation/StickyProjectBar';
import { ScrollToTop } from './components/common/ScrollToTop';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { useStickyOffset } from './hooks/useStickyOffset';

// Code-split routes cleanly
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const WorkPage = lazy(() => import('./pages/WorkPage').then((m) => ({ default: m.WorkPage })));
const ProjectDetailPage = lazy(() =>
  import('./pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage }))
);
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() =>
  import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const ServiceDetailPage = lazy(() =>
  import('./pages/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage }))
);
const LeadershipPage = lazy(() =>
  import('./pages/LeadershipPage').then((m) => ({ default: m.LeadershipPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

export const AppContent: React.FC = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const appShellRef = useRef<HTMLDivElement>(null);

  useStickyOffset();

  // Accessible background inertness when modal navigation drawer is open
  useEffect(() => {
    const el = appShellRef.current as (HTMLDivElement & { inert?: boolean }) | null;
    if (el) {
      el.inert = isMenuOpen;
    }
  }, [isMenuOpen]);

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <ScrollToTop />
        <ScrollProgressBar />

        {/* Non-blocking razor-thin editorial aperture sweep on route transition */}
        <motion.div
          key={`sweep-${pathname}`}
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0.95 }}
          animate={{ scaleX: [0, 1, 1], opacity: [0.95, 0.95, 0] }}
          transition={{ duration: 0.55, times: [0, 0.55, 1], ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#EA1E4D] via-[#FD7D3C] to-[#EA1E4D] origin-left z-[160] pointer-events-none"
        />

        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <div
          ref={appShellRef}
          className="relative min-h-screen bg-canvas text-text-primary transition-colors duration-300 overflow-x-clip"
        >
          <HeaderHUD
            isMenuOpen={isMenuOpen}
            onOpenMenu={() => setIsMenuOpen(true)}
            onCloseMenu={() => setIsMenuOpen(false)}
            menuTriggerRef={menuTriggerRef}
          />

          <div id="main-content" tabIndex={-1} className="outline-none">
            <Suspense fallback={<div className="min-h-screen bg-canvas" />}>
              <motion.div
                key={pathname}
                initial={{ opacity: 0.72, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/work" element={<WorkPage />} />
                  <Route path="/work/:projectId" element={<ProjectDetailPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/vision" element={<Navigate to="/about" replace />} />
                  <Route path="/protocol" element={<Navigate to="/about" replace />} />
                  <Route path="/manifesto" element={<Navigate to="/about" replace />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
                  <Route path="/leadership" element={<LeadershipPage />} />
                  <Route path="/team" element={<Navigate to="/leadership" replace />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/brief" element={<Navigate to="/contact" replace />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </motion.div>
            </Suspense>
          </div>
        </div>

        <MenuDrawer
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          returnFocusRef={menuTriggerRef}
        />

        <StickyProjectBar isMenuOpen={isMenuOpen} />
      </MotionConfig>
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
