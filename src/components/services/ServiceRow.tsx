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
  const isEvents = service.id === 'events-experiences';

  return (
    <div
      onMouseEnter={(e) => onHoverStart(service, e)}
      onMouseLeave={onHoverEnd}
      onMouseMove={onMouseMove}
      className="border-b border-white/15 transition-colors duration-300"
    >
      {/* Primary Clickable Row */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 text-left group cursor-pointer touch-manipulation"
      >
        <div className="flex items-center gap-4 sm:gap-6 transition-transform duration-300 md:group-hover:translate-x-1 min-w-0">
          <span
            className={`font-mono text-xs sm:text-sm font-bold shrink-0 ${
              isEvents ? 'text-[#FD7D3C]' : 'text-[#EA1E4D]'
            }`}
          >
            {service.index} —
          </span>
          <h3
            className={`font-display text-lg sm:text-2xl font-extrabold uppercase text-white tracking-tight transition-colors ${
              isEvents ? 'group-hover:text-[#FD7D3C]' : 'group-hover:text-[#EA1E4D]'
            }`}
          >
            {service.name}
          </h3>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-2.5 sm:gap-3 font-mono text-xs w-full sm:w-auto shrink-0">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full font-bold text-[11px] border whitespace-nowrap shrink-0 ${
              isEvents
                ? 'bg-[#FD7D3C]/15 text-[#FD7D3C] border-[#FD7D3C]/35'
                : 'bg-[#EA1E4D]/15 text-[#EA1E4D] border-[#EA1E4D]/35'
            }`}
          >
            {service.flagshipKPI}
          </span>

          <div
            className={`min-w-[36px] min-h-[36px] sm:min-w-0 sm:min-h-0 flex items-center justify-center p-2 rounded-full border border-white/15 text-white/60 transition-transform duration-300 shrink-0 ${
              isOpen
                ? isEvents
                  ? 'rotate-180 text-[#FD7D3C] border-[#FD7D3C]'
                  : 'rotate-180 text-[#EA1E4D] border-[#EA1E4D]'
                : 'group-hover:text-white'
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
              <div className="md:col-span-6 space-y-4">
                <span
                  className={`font-mono text-xs uppercase tracking-[0.2em] font-bold block ${
                    isEvents ? 'text-[#FD7D3C]' : 'text-[#EA1E4D]'
                  }`}
                >
                  ✦ {service.headline || 'Capability Scope'}
                </span>
                <p className="font-sans text-sm text-white/90 leading-relaxed">
                  {service.shortDesc}
                </p>
                <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              <div className="md:col-span-6 space-y-4 font-mono">
                <span
                  className={`text-xs uppercase tracking-[0.2em] font-bold block ${
                    isEvents ? 'text-[#FD7D3C]' : 'text-[#EA1E4D]'
                  }`}
                >
                  ✦ Scope &amp; Deliverables
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/85">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <CheckCircle2
                        size={13}
                        className={`${isEvents ? 'text-[#FD7D3C]' : 'text-[#EA1E4D]'} shrink-0 mt-0.5`}
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => navigate(isEvents ? '/contact?type=event' : '/contact')}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold hover:brightness-110 transition-all cursor-pointer uppercase tracking-wider ${
                      isEvents
                        ? 'bg-[#FD7D3C] text-[#111116]'
                        : 'bg-[#EA1E4D] text-white'
                    }`}
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
