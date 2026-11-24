import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceRowProps {
  service: ServiceItem;
  isOpen: boolean;
  onToggle: () => void;
  onHoverStart: (service: ServiceItem, e: React.MouseEvent) => void;
  onHoverEnd: () => void;
  onMouseMove: (e: React.MouseEvent) => void;
}

export const ServiceRow: React.FC<ServiceRowProps> = ({
  service,
  isOpen,
  onToggle,
  onHoverStart,
  onHoverEnd,
  onMouseMove,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={(e) => onHoverStart(service, e)}
      onMouseLeave={onHoverEnd}
      onMouseMove={onMouseMove}
      className="border-b border-[#2C2C30] transition-colors duration-300"
    >
      {/* Primary Clickable Row */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 text-left group cursor-pointer touch-manipulation"
      >
        {/* Left: Orange Index & Bold Editorial Discipline Name */}
        <div className="flex items-center gap-4 sm:gap-6 transition-transform duration-300 md:group-hover:translate-x-1 min-w-0">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#FD7D3C] shrink-0">
            {service.index}
          </span>
          <h3 className="font-display text-lg sm:text-2xl font-extrabold uppercase text-[#F4F1EA] tracking-tight group-hover:text-[#FD7D3C] transition-colors">
            {service.name}
          </h3>
        </div>

        {/* Right: Category Pill, KPI Pill & Chevron */}
        <div className="flex items-center justify-between md:justify-end gap-2.5 sm:gap-3.5 font-mono text-xs pl-0 w-full md:w-auto shrink-0">
          <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full border border-[#2C2C30] bg-[#1F1F23] text-[#9E9D98] text-[11px] uppercase tracking-wider group-hover:border-[#FD7D3C]/40 transition-colors whitespace-nowrap shrink-0">
            [{service.categoryTag}]
          </span>

          <span className="inline-flex items-center px-3 py-1 rounded-full font-bold text-xs border border-[#FD7D3C]/30 bg-[#FD7D3C]/10 text-[#FD7D3C] whitespace-nowrap shrink-0">
            {service.flagshipKPI}
          </span>

          <div
            className={`min-w-[36px] min-h-[36px] md:min-w-0 md:min-h-0 flex items-center justify-center p-2 rounded-full border border-[#2C2C30] text-[#9E9D98] transition-transform duration-300 shrink-0 ${
              isOpen ? 'rotate-180 text-[#FD7D3C] border-[#FD7D3C]' : 'group-hover:text-[#F4F1EA]'
            }`}
          >
            <ChevronDown size={14} />
          </div>
        </div>
      </button>

      {/* Accordion Detail Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pt-2 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pl-0 md:pl-10">
              {/* Full Description & Headline */}
              <div className="md:col-span-6 space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FD7D3C] block">
                  ✦ {service.headline || 'Capability Scope'}
                </span>
                <p className="font-sans text-sm text-[#F4F1EA]/90 leading-relaxed">
                  {service.shortDesc}
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#9E9D98] leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="inline-flex items-center gap-2.5 p-3 rounded-lg bg-[#1F1F23] border border-[#2C2C30] font-mono text-xs">
                  <span className="text-[#9E9D98]">Measurable Impact:</span>
                  <span className="font-bold text-[#FD7D3C]">{service.flagshipKPI || 'Direct Conversion'}</span>
                </div>
              </div>

              {/* Deliverables Checklist & Specific CTA */}
              <div className="md:col-span-6 space-y-4 font-mono">
                <span className="text-xs uppercase tracking-[0.2em] text-[#FD7D3C] font-bold block">
                  ✦ Deliverables &amp; Artifacts
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F4F1EA]/85">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#FD7D3C] shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FD7D3C] text-[#171719] text-xs font-bold hover:brightness-105 shadow-md shadow-[#FD7D3C]/20 transition-all cursor-pointer uppercase tracking-wider"
                  >
                    <span>{service.ctaText || 'START A PROJECT ↗'}</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
