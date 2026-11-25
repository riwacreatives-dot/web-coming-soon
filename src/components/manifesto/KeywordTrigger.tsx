import React from 'react';

interface KeywordTriggerProps {
  label: string;
  type: 'art' | 'math';
  onHoverStart: (type: 'art' | 'math', e: React.MouseEvent) => void;
  onHoverEnd: () => void;
  onMouseMove: (e: React.MouseEvent) => void;
}

export const KeywordTrigger: React.FC<KeywordTriggerProps> = ({
  label,
  type,
  onHoverStart,
  onHoverEnd,
  onMouseMove,
}) => {
  return (
    <span
      onMouseEnter={(e) => onHoverStart(type, e)}
      onMouseLeave={onHoverEnd}
      onMouseMove={onMouseMove}
      className="inline-flex items-center px-2 py-0.5 mx-1 rounded border border-brand-red/40 bg-brand-red/10 text-brand-red font-mono text-[0.8em] font-bold uppercase tracking-wider cursor-pointer transition-all duration-300 hover:bg-brand-red hover:text-white hover:border-brand-red select-none"
    >
      [{label}]
    </span>
  );
};

