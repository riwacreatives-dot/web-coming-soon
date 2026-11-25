import React, { useState } from 'react';
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
      className="border-t border-line-border transition-colors duration-300"
    >
      {/* Primary Clickable Row */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-5 sm:py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 text-left group cursor-pointer touch-manipulation"
      >
        {/* Left: Index & Bold Editorial Discipline Name */}
        <div className="flex items-center gap-3.5 sm:gap-8 transition-transform duration-300 md:group-hover:translate-x-2 min-w-0">
          <span className="font-mono text-xs sm:text-sm text-text-secondary group-hover:text-brand-red transition-colors shrink-0">
            {service.index}
          </span>
          <h3 className="font-display text-lg sm:text-2xl md:text-3xl font-extrabold uppercase text-text-primary tracking-tight group-hover:text-brand-red transition-colors">
            {service.name}
          </h3>
        </div>

        {/* Right: Category Pill, KPI Pill & Accessible Chevron */}
        <div className="flex items-center justify-between md:justify-end gap-2.5 sm:gap-3.5 font-mono text-xs sm:text-sm pl-0 w-full md:w-auto shrink-0">
          <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full border border-line-border bg-surface text-text-secondary text-xs uppercase tracking-wider group-hover:border-brand-red/40 transition-colors whitespace-nowrap shrink-0">
            [{service.categoryTag}]
          </span>

          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-brand-red/10 text-brand-red font-bold text-xs sm:text-sm border border-brand-red/30 whitespace-nowrap shrink-0">
            {service.flagshipKPI}
          </span>

          <div
            className={`min-w-[40px] min-h-[40px] md:min-w-0 md:min-h-0 flex items-center justify-center p-2 rounded-full border border-line-border text-text-secondary transition-transform duration-300 shrink-0 ${
              isOpen ? 'rotate-180 text-brand-red border-brand-red' : 'group-hover:text-text-primary'
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
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 md:pb-10 pt-1 md:pt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 pl-0 md:pl-16">
              {/* Full Description & KPI */}
              <div className="lg:col-span-6 space-y-4">
                <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-brand-red font-bold block">
                  ✦ Discipline Objective
                </span>
                <p className="font-mono text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="inline-flex items-center gap-3 p-3 rounded-lg bg-surface border border-line-border font-mono text-xs sm:text-sm">
                  <span className="text-text-secondary">Benchmark Metric:</span>
                  <span className="text-brand-red font-bold">{service.kpiLabel}</span>
                </div>
              </div>

              {/* Deliverables Checklist & CTA */}
              <div className="lg:col-span-6 space-y-4 font-mono">
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-brand-red font-bold block">
                  ✦ Included Deliverables
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-text-primary">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-brand-red shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-red text-white text-xs font-bold hover:brightness-110 shadow-lg shadow-brand-red/20 transition-all cursor-pointer uppercase tracking-wider"
                  >
                    <span>Request Capability Sprint</span>
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

