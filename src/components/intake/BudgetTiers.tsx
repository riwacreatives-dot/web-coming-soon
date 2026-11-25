import React from 'react';

interface BudgetTiersProps {
  selected: string;
  onChange: (tier: string) => void;
}

export const BUDGET_TIERS = [
  '< ₹5,00,000 (Growth Tier)',
  '₹5,00,000 – ₹20,00,000 (Scale Sprint)',
  '₹20,00,000 – ₹50,00,000 (Omnichannel Flywheel)',
  '₹50,00,000+ (Enterprise Scale)',
];

export const BudgetTiers: React.FC<BudgetTiersProps> = ({ selected, onChange }) => {
  return (
    <div className="space-y-3 font-mono">
      <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-text-secondary block">
        02 / Monthly Media Budget (Rupees Only)
      </label>

      <div className="flex flex-wrap gap-2 sm:gap-2.5">
        {BUDGET_TIERS.map((tier) => {
          const isSelected = selected === tier;
          return (
            <button
              key={tier}
              type="button"
              onClick={() => onChange(tier)}
              className={`min-h-[44px] sm:min-h-0 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-medium uppercase tracking-wider transition-all cursor-pointer border touch-manipulation ${
                isSelected
                  ? 'bg-brand-red text-white border-brand-red font-bold shadow-md shadow-brand-red/20'
                  : 'bg-surface border-line-border text-text-secondary hover:border-brand-red/50 hover:text-text-primary'
              }`}
            >
              {tier}
            </button>
          );
        })}
      </div>
    </div>
  );
};
