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
    <div className="w-full bg-[#111116] text-white border-b border-white/10 transition-colors">
      <section
        id="services"
        className={`relative w-full ${
          standalone
            ? 'pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-28 md:py-36'
            : 'py-16 sm:py-24 md:py-36'
        } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
      >
        {/* Floating Benchmark Pill on Desktop */}
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
              className="hidden md:flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/15 bg-[#09090C]/95 text-white shadow-2xl backdrop-blur-xl font-mono text-xs"
            >
              <Sparkles
                size={13}
                className={hoveredService.id === 'events-experiences' ? 'text-[#FD7D3C]' : 'text-[#EA1E4D]'}
              />
              <div>
                <span className="block text-[10px] text-white/50 uppercase tracking-wider">
                  Capability Outcome
                </span>
                <span
                  className={`font-bold flex items-center gap-1 ${
                    hoveredService.id === 'events-experiences' ? 'text-[#FD7D3C]' : 'text-[#EA1E4D]'
                  }`}
                >
                  <TrendingUp size={12} /> {hoveredService.flagshipKPI}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Split Editorial Capabilities Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Sticky Header Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-white/60 font-semibold block mb-4 select-none">
              {standalone ? 'OUR CAPABILITIES · FIVE CORE DISCIPLINES' : '03 / CAPABILITIES'}
            </span>

            <h2 className="font-display text-[clamp(2.3rem,6.5vw,4.35rem)] font-black uppercase tracking-tight text-white leading-[0.98]">
              <span>BIG IDEAS.</span><br />
              <span>BUILT FROM</span><br />
              <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
                every
              </span>{' '}
              <span>ANGLE</span><span className="text-[#EA1E4D]">.</span>
            </h2>

            <p className="mt-5 font-sans text-sm sm:text-base text-white/70 leading-relaxed max-w-md">
              Different challenges demand different thinking. Sometimes a brand needs a sharp identity. Sometimes it needs cultural attention, digital products, or an unforgettable live experience. Five specialized practices engineered to operate as one studio.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA1E4D]" />
                <span>01–04 Brand, Ad, Growth &amp; Tech</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FD7D3C]/40 bg-[#FD7D3C]/10 text-[#FD7D3C] font-semibold">
                <span>05 Events &amp; Live Activations</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Numbered Editorial Index */}
          <div className="lg:col-span-7 border-t border-white/15">
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
