import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '../../data/servicesData';
import { ServiceRow } from './ServiceRow';
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
    <div className="w-full bg-[#171719] text-[#F4F1EA] border-b border-[#2C2C30] transition-colors">
      <section
        id="services"
        className={`relative w-full ${
          standalone
            ? 'pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-28 md:py-36'
            : 'py-16 sm:py-24 md:py-36'
        } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
      >
        {/* Floating Benchmark Badge on Desktop */}
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
              className="hidden md:flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#2C2C30] bg-[#111113]/95 text-[#F4F1EA] shadow-2xl backdrop-blur-xl font-mono text-xs"
            >
              <Sparkles size={13} className="text-[#FD7D3C]" />
              <div>
                <span className="block text-xs text-[#9E9D98] uppercase tracking-wider">
                  Flagship KPI
                </span>
                <span className="font-bold text-[#FD7D3C] flex items-center gap-1">
                  <TrendingUp size={12} /> {hoveredService.flagshipKPI}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 12-Column Swiss Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Anchored Headline & Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.24em] text-[#9E9D98] font-semibold block mb-4 select-none">
              {standalone ? 'OUR CAPABILITIES · STRATEGY TO EXECUTION' : '03 / WHAT WE DO'}
            </span>

            <h2 className="font-display text-[clamp(2.4rem,6.5vw,4.5rem)] font-extrabold uppercase tracking-tight text-[#F4F1EA] leading-[0.98]">
              <span>BIG IDEAS.</span><br />
              <span>BUILT FROM</span><br />
              <span className="font-serif italic font-normal tracking-normal text-[#FD7D3C] text-[1.12em] lowercase select-none">
                all
              </span>{' '}
              <span>ANGLES</span><span className="text-[#FD7D3C] font-bold">.</span>
            </h2>

            <p className="mt-5 font-sans text-sm sm:text-base text-[#9E9D98] leading-relaxed max-w-md">
              Different challenges demand different thinking. Sometimes a brand needs a new identity. Sometimes it needs attention. Sometimes it needs an entirely new digital platform or physical event activation. We bring the right creative and technical disciplines together to make it happen.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs text-[#9E9D98]">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2C2C30] bg-[#1F1F23]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FD7D3C]" />
                <span>05 Core Disciplines</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2C2C30] bg-[#1F1F23]">
                <span>Zero Outsourcing</span>
              </span>
            </div>
          </div>

          {/* Right Column: Service Index with Fine Divider Lines */}
          <div className="lg:col-span-7 border-t border-[#2C2C30]">
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
        </div>
      </section>
    </div>
  );
};
