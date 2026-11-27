import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
      id={service.id}
      onMouseEnter={(e) => onHoverStart(service, e)}
      onMouseLeave={onHoverEnd}
      onMouseMove={onMouseMove}
      className="border-b border-white/15 dark:border-[#111116]/20 transition-colors duration-300"
    >
      {/* Primary Clickable Row */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 text-left group cursor-pointer touch-manipulation"
      >
        <div className="flex items-center gap-4 sm:gap-6 transition-transform duration-300 md:group-hover:translate-x-1 min-w-0">
          <span className="font-mono text-xs sm:text-sm font-bold shrink-0 text-[#FD7D3C] dark:text-[#C4123D]">
            {service.index} —
          </span>
          <h3
            className={`font-display text-lg sm:text-2xl font-extrabold uppercase text-white dark:text-[#111116] tracking-tight transition-colors ${
              isEvents
                ? 'group-hover:text-[#FD7D3C] dark:group-hover:text-[#C4123D]'
                : 'group-hover:text-[#EA1E4D] dark:group-hover:text-[#C4123D]'
            }`}
          >
            {service.name}
          </h3>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-2.5 sm:gap-3 font-mono text-xs w-full sm:w-auto shrink-0">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full font-bold text-[11px] border whitespace-nowrap shrink-0 ${
              isEvents
                ? 'bg-[#FD7D3C] text-[#111116] border-[#FD7D3C]'
                : 'bg-white/5 text-[#F5F4F0] border-white/25 dark:bg-[#111116] dark:text-white dark:border-[#111116]'
            }`}
          >
            {service.flagshipKPI}
          </span>

          <div
            className={`min-w-[36px] min-h-[36px] sm:min-w-0 sm:min-h-0 flex items-center justify-center p-2 rounded-full border border-white/15 dark:border-[#111116]/25 text-white/60 dark:text-[#111116]/75 transition-transform duration-300 shrink-0 ${
              isOpen
                ? isEvents
                  ? 'rotate-180 text-[#FD7D3C] dark:text-[#C4123D] border-[#FD7D3C] dark:border-[#C4123D]'
                  : 'rotate-180 text-[#EA1E4D] dark:text-[#C4123D] border-[#EA1E4D] dark:border-[#C4123D]'
                : 'group-hover:text-white dark:group-hover:text-[#111116] dark:group-hover:border-[#111116]'
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
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold block text-[#FD7D3C] dark:text-[#C4123D]">
                  ✦ {service.headline || 'Capability Scope'}
                </span>
                <p className="font-sans text-sm text-white/90 dark:text-[#111116] leading-relaxed">
                  {service.shortDesc}
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#B4B4BE] dark:text-[#3F3F46] leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              <div className="md:col-span-6 space-y-4 font-mono">
                <span className="text-xs uppercase tracking-[0.2em] font-bold block text-[#FD7D3C] dark:text-[#C4123D]">
                  ✦ Scope &amp; Deliverables
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/85 dark:text-[#111116]">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <CheckCircle2
                        size={13}
                        className="text-[#FD7D3C] dark:text-[#C4123D] shrink-0 mt-0.5"
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <Link
                    to={`/services/${service.id}`}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold hover:brightness-110 transition-all uppercase tracking-wider ${
                      isEvents
                        ? 'bg-[#FD7D3C] text-[#111116]'
                        : 'bg-[#C4123D] text-white hover:bg-[#EA1E4D]'
                    }`}
                  >
                    <span>Explore Service Page</span>
                    <ArrowUpRight size={14} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => navigate(`/contact?service=${service.id}`)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 dark:border-[#111116]/30 text-white dark:text-[#111116] hover:border-white dark:hover:bg-[#111116] dark:hover:text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    <span>Start Brief ↗</span>
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
