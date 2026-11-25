import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '../../data/servicesData';
import { ServiceRow } from './ServiceRow';
import { SplitHeading } from '../common/SplitHeading';
import { ServiceItem } from '../../types';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Sparkles, TrendingUp } from 'lucide-react';

interface ServicesSectionProps {
  standalone?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ standalone = false }) => {
  const isMobile = useIsMobile();
  const [openServiceId, setOpenServiceId] = useState<string | null>(() =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? null : SERVICES_DATA[0].id
  );
  const [hoveredService, setHoveredService] = useState<ServiceItem | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleHoverStart = (service: ServiceItem, e: React.MouseEvent) => {
    if (isMobile) return;
    setHoveredService(service);
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleHoverEnd = () => {
    if (isMobile) return;
    setHoveredService(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="services"
      className={`relative w-full ${
        standalone
          ? 'pt-24 sm:pt-32 md:pt-36 pb-14 sm:pb-28 md:py-36'
          : 'py-14 sm:py-28 md:py-36 border-t border-line-border'
      } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
    >
      {/* Floating Hover Badge following cursor on desktop */}
      <AnimatePresence>
        {!isMobile && hoveredService && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            style={{
              position: 'fixed',
              left: mousePos.x + 20,
              top: mousePos.y - 40,
              pointerEvents: 'none',
              zIndex: 90,
            }}
            className="hidden md:flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/20 bg-black/90 text-white shadow-2xl backdrop-blur-xl font-mono text-xs"
          >
            <Sparkles size={13} className="text-brand-red" />
            <div>
              <span className="block text-xs text-white/50 uppercase tracking-wider">
                Flagship Benchmark
              </span>
              <span className="font-bold text-brand-red flex items-center gap-1">
                <TrendingUp size={12} /> {hoveredService.flagshipKPI}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Eyebrow */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-20">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-text-secondary font-semibold block mb-3 select-none">
            {standalone
              ? '04 / AGENCY ARCHITECTURE · SIX REVENUE DISCIPLINES'
              : '04 / DISCIPLINES & REVENUE CAPABILITIES'}
          </span>
          {standalone ? (
            <h1 className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-extrabold uppercase tracking-tight text-text-primary leading-[1.05]">
              <span>SIX DISCIPLINES</span><span className="text-brand-red font-bold">.</span><br />
              <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.14em] lowercase select-none">
                zero
              </span>{' '}
              <span>FLUFF</span><span className="text-brand-red font-bold">.</span>
            </h1>
          ) : (
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-text-primary leading-[1.08]">
              <span>SIX DISCIPLINES</span><span className="text-brand-red font-bold">.</span><br />
              <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.14em] lowercase select-none">
                zero
              </span>{' '}
              <span>FLUFF</span><span className="text-brand-red font-bold">.</span>
            </h2>
          )}
        </div>

        <p className="max-w-md font-mono text-xs sm:text-sm text-text-secondary leading-relaxed">
          Six synchronized revenue disciplines designed to take your brand from <span className="text-brand-red font-bold">ad fatigue</span> to predictable <span className="text-brand-red font-bold">8-figure run rates</span><span className="text-brand-red font-bold">.</span>
        </p>
      </div>

      {/* Dual-Column Line-Appear Rows */}
      <div className="border-b border-line-border">
        {SERVICES_DATA.map((service) => (
          <ServiceRow
            key={service.id}
            service={service}
            isOpen={openServiceId === service.id}
            onToggle={() =>
              setOpenServiceId(openServiceId === service.id ? null : service.id)
            }
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            onMouseMove={handleMouseMove}
          />
        ))}
      </div>
    </section>
  );
};
