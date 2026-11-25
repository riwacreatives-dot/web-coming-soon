import React from 'react';
import { useWorldClocks } from '../../hooks/useWorldClocks';

export const WorldClocks: React.FC = () => {
  const clocks = useWorldClocks();

  if (!clocks.length) return null;

  return (
    <div className="flex items-center gap-3 xl:gap-4 font-mono text-[11px] tracking-wider uppercase select-none">
      <div className="flex items-center gap-3 xl:gap-4">
        {clocks.map((clock, idx) => (
          <div
            key={clock.city}
            className={`flex items-center gap-1.5 opacity-85 hover:opacity-100 transition-opacity ${
              idx >= 2 ? 'hidden 2xl:flex' : 'flex'
            }`}
          >
            <span className="text-text-secondary font-medium">{clock.city}</span>
            <span className="text-text-primary font-bold">{clock.timeStr}</span>
            <span className="text-[9px] text-brand-red font-bold">{clock.period}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
