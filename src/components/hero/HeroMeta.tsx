import React from 'react';
import { KineticCounter } from '../common/KineticCounter';

export const HeroMeta: React.FC = () => {
  return (
    <>
      {/* Mobile-Only Hairline 2x2 Architectural Matrix (< 640px) */}
      <div className="sm:hidden w-full grid grid-cols-2 border-t border-l border-line-border rounded-xl overflow-hidden bg-surface/30 font-mono text-[11px] tracking-wider uppercase text-text-secondary select-none">
        <div className="p-3.5 border-r border-b border-line-border">
          <span className="block text-brand-red font-bold text-[10px] mb-1">01 / VELOCITY</span>
          <span className="text-text-primary font-bold block leading-snug">14-DAY SPRINTS</span>
        </div>

        <div className="p-3.5 border-r border-b border-line-border">
          <span className="block text-brand-red font-bold text-[10px] mb-1">02 / CAPITAL</span>
          <span className="text-text-primary font-bold block leading-snug">
            <KineticCounter target={400} prefix="₹" suffix=" Cr+" className="text-brand-red font-bold" /> SCALED
          </span>
        </div>

        <div className="p-3.5 border-r border-b border-line-border">
          <span className="block text-brand-red font-bold text-[10px] mb-1">03 / RETENTION</span>
          <span className="text-text-primary font-bold block leading-snug">
            <KineticCounter target={99.4} decimals={1} suffix="%" className="text-brand-red font-bold" /> CLIENT STAY
          </span>
        </div>

        <div className="p-3.5 border-r border-b border-line-border">
          <span className="block text-brand-red font-bold text-[10px] mb-1">04 / HYBRID</span>
          <span className="text-text-primary font-bold block leading-snug">
            <span className="text-brand-red font-bold">ART</span> × <span className="text-brand-red font-bold">MATH</span>
          </span>
        </div>
      </div>

      {/* Desktop / Tablet Horizontal Row (>= 640px — 100% Preserved) */}
      <div className="hidden sm:grid w-full grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-line-border font-mono text-[11px] sm:text-xs md:text-sm tracking-wider uppercase text-text-secondary select-none">
        <div>
          <span className="block text-brand-red font-bold">01 / SPRINT VELOCITY</span>
          <span className="text-text-primary">14-DAY HIGH-TICKET SPRINTS</span>
        </div>

        <div>
          <span className="block text-brand-red font-bold">02 / CAPITAL SCALE</span>
          <span className="text-text-primary">
            <KineticCounter
              target={400}
              prefix="₹"
              suffix=" Cr+"
              className="text-brand-red font-bold"
            />{' '}
            REVENUE SCALED
          </span>
        </div>

        <div>
          <span className="block text-brand-red font-bold">03 / SPRINT RETENTION</span>
          <span className="text-text-primary">
            <KineticCounter
              target={99.4}
              decimals={1}
              suffix="%"
              className="text-brand-red font-bold"
            />{' '}
            CLIENT RETENTION
          </span>
        </div>

        <div>
          <span className="block text-brand-red font-bold">04 / DISCIPLINE HYBRID</span>
          <span className="text-text-primary">
            <span className="text-brand-red font-bold">AD ART</span> ×{' '}
            <span className="text-brand-red font-bold">PERFORMANCE</span>
          </span>
        </div>
      </div>
    </>
  );
};
