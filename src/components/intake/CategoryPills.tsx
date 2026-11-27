import React from 'react';
import { Check } from 'lucide-react';

interface CategoryPillsProps {
  selected: string[];
  onChange: (categories: string[]) => void;
}

const CATEGORIES = [
  'Brand & Identity',
  'Commercial Creative & Advertising',
  'Digital Marketing & Growth',
  'Website & Technology',
  'Content & Production',
  'Events & Experiences',
  'Something else',
];

export const CategoryPills: React.FC<CategoryPillsProps> = ({ selected, onChange }) => {
  const toggle = (cat: string) => {
    if (selected.includes(cat)) {
      onChange(selected.filter((c) => c !== cat));
    } else {
      onChange([...selected, cat]);
    }
  };

  return (
    <div className="space-y-3 font-mono">
      <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-text-secondary block">
        02 / Select Disciplines & Scope (Multi-select)
      </label>

      <div className="flex flex-wrap gap-2 sm:gap-2.5">
        {CATEGORIES.map((cat) => {
          const isSelected = selected.includes(cat);
          return (
            <button
              key={cat}
              type="button"
              onClick={() => toggle(cat)}
              className={`min-h-[44px] sm:min-h-0 flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-medium uppercase tracking-wider transition-all cursor-pointer border touch-manipulation ${
                isSelected
                  ? 'bg-brand-red text-white border-brand-red shadow-lg shadow-brand-red/25'
                  : 'bg-surface border-line-border text-text-secondary hover:border-brand-red/50 hover:text-text-primary'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center border text-[10px] ${
                  isSelected ? 'border-white bg-white/20 text-white' : 'border-line-border'
                }`}
              >
                {isSelected && <Check size={11} strokeWidth={3} />}
              </div>
              <span>{cat}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

