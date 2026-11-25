import React from 'react';
import { useWorldClocks } from '../../hooks/useWorldClocks';

export const WorldClocks: React.FC = () => {
  const clocks = useWorldClocks();

  if (!clocks.length) return null;

  return (
    <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs tracking-wider uppercase select-none">
      {/* Desktop & Tablet: Display all 4 hubs */}
      <div className="hidden lg:flex items-center gap-6">
        {clocks.map((clock) => (
          <div key={clock.city} className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <span className="text-text-secondary font-medium">{clock.city}</span>
            <span className="text-text-primary font-bold">{clock.timeStr}</span>
            <span className="text-[10px] text-text-secondary/70">{clock.period}</span>
          </div>
        ))}
      </div>

      {/* Medium Screen: Show Delhi & London */}
      <div className="hidden sm:flex lg:hidden items-center gap-4">
        {clocks.slice(0, 2).map((clock) => (
          <div key={clock.city} className="flex items-center gap-1.5 opacity-90">
            <span className="text-text-secondary font-medium">{clock.city}</span>
            <span className="text-text-primary font-bold">{clock.timeStr}</span>
            <span className="text-[10px] text-text-secondary/70">{clock.period}</span>
          </div>
        ))}
      </div>

      {/* Mobile: Show Primary Delhi Bureau */}
      <div className="flex sm:hidden items-center gap-1.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red"></span>
        <span className="text-text-secondary font-medium">{clocks[0]?.city}</span>
        <span className="text-text-primary font-bold">{clocks[0]?.timeStr}</span>
      </div>
    </div>
  );
};
