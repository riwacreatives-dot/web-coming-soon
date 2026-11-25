import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Zap, ArrowDownRight, Sparkles, Sliders } from 'lucide-react';
import { KineticCounter } from '../common/KineticCounter';

const PRESETS = [
  { label: '₹5L / mo', value: 500000 },
  { label: '₹15L / mo', value: 1500000 },
  { label: '₹30L / mo', value: 3000000 },
  { label: '₹50L+ / mo', value: 5000000 },
];

export const TelemetrySimulator: React.FC = () => {
  const [budget, setBudget] = useState(1500000); // Default ₹15 Lakhs

  // Dynamic calculations based on unit economics
  const telemetry = useMemo(() => {
    // Blended ROAS scales with artistic thumb-stop creative + advantage+ retention
    const roas = 4.4 + (budget / 5000000) * 1.8;
    const monthlyRevenue = budget * roas;
    const sprint90DayRevCr = ((monthlyRevenue * 3) / 10000000).toFixed(2);
    const estOrders = Math.round(monthlyRevenue / 1850);
    const cacReduction = Math.min(46, Math.round(28 + (budget / 5000000) * 16));

    // Dynamic SVG curve coordinates (0 to 100)
    const points = [
      { x: 0, y: 75 },
      { x: 25, y: 65 - (budget / 5000000) * 10 },
      { x: 50, y: 48 - (budget / 5000000) * 15 },
      { x: 75, y: 30 - (budget / 5000000) * 18 },
      { x: 100, y: Math.max(8, 20 - (budget / 5000000) * 16) },
    ];
    const pathD = `M ${points[0].x} ${points[0].y} Q ${points[1].x} ${points[1].y}, ${points[2].x} ${points[2].y} T ${points[4].x} ${points[4].y}`;

    return {
      roas: roas.toFixed(1),
      monthlyRevenue,
      sprint90DayRevCr,
      estOrders,
      cacReduction,
      pathD,
      points,
    };
  }, [budget]);

  const handleSelectModel = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatRupees = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  return (
    <div className="w-full mt-10 md:mt-24 rounded-2xl md:rounded-3xl border border-line-border bg-gradient-to-b from-surface/50 to-surface/20 p-4 sm:p-10 md:p-12 shadow-2xl backdrop-blur-sm">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-6 pb-6 md:pb-8 border-b border-line-border">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Zap size={12} className="text-brand-red" />
              <span>Interactive Telemetry Sandbox</span>
            </span>
            <span className="hidden sm:inline-block font-mono text-xs text-emerald-400 font-bold">
              ● REAL-TIME MODELING
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl font-black uppercase text-text-primary tracking-tight">
            PREDATORY MATH SIMULATOR<span className="text-brand-red">.</span>
          </h3>
          <p className="font-mono text-xs sm:text-sm text-text-secondary mt-1">
            Drag the capital allocation dial to model your 90-day scaling trajectory.
          </p>
        </div>

        {/* Preset Quick Chips (2x2 touch matrix on < sm; flex wrap inline on sm+) */}
        <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 font-mono text-xs sm:flex-wrap">
          <span className="col-span-2 sm:col-span-1 text-text-secondary mr-1">Scale Tiers:</span>
          {PRESETS.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setBudget(p.value)}
              className={`min-h-[44px] sm:min-h-0 px-3 py-1.5 rounded-full border transition-all cursor-pointer font-bold touch-manipulation ${
                budget === p.value
                  ? 'bg-brand-red text-white border-brand-red shadow-md shadow-brand-red/20'
                  : 'bg-surface border-line-border text-text-secondary hover:text-text-primary hover:border-text-primary'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Mobile pins Live Curve ABOVE controls (order-1 / order-2); Desktop restores Left Controls / Right Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 pt-6 sm:pt-10">
        {/* Controls Column: Bottom on Mobile (Thumb Zone), Left on Desktop */}
        <div className="order-2 lg:order-1 lg:col-span-5 space-y-6 md:space-y-8 font-mono">
          <div>
            <div className="flex items-center justify-between mb-2 md:mb-3">
              <span className="text-xs uppercase tracking-wider text-text-secondary font-bold">
                Monthly Performance Media Budget
              </span>
              <span className="text-sm font-bold text-text-primary">
                {formatRupees(budget)} / mo
              </span>
            </div>

            {/* Custom Range Slider (Enlarged Thumb Track on Mobile via globals.css) */}
            <div className="relative py-2">
              <input
                type="range"
                min="250000"
                max="5000000"
                step="250000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full riwa-mobile-slider md:h-2 bg-line-border rounded-lg appearance-none cursor-pointer accent-brand-red focus:outline-none touch-pan-y"
              />
              <div className="flex justify-between text-[11px] text-text-secondary mt-2">
                <span>₹2.5L Growth</span>
                <span>₹25L Scale Sprint</span>
                <span>₹50L+ Enterprise</span>
              </div>
            </div>
          </div>

          {/* Metric Badges */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="p-3.5 md:p-4 rounded-xl border border-line-border bg-surface/40">
              <span className="text-xs text-text-secondary block mb-1">
                Blended ROAS Yield
              </span>
              <span className="text-2xl sm:text-3xl font-black font-display text-emerald-400 flex items-center gap-1.5">
                <TrendingUp size={20} />
                <span>{telemetry.roas}x</span>
              </span>
              <span className="text-[11px] text-text-secondary mt-1 block">
                Advantage+ & Creative Lift
              </span>
            </div>

            <div className="p-3.5 md:p-4 rounded-xl border border-line-border bg-surface/40">
              <span className="text-xs text-text-secondary block mb-1">
                Blended CAC Reduction
              </span>
              <span className="text-2xl sm:text-3xl font-black font-display text-brand-red">
                -{telemetry.cacReduction}%
              </span>
              <span className="text-[11px] text-text-secondary mt-1 block">
                Thumb-Stop Ad Efficiency
              </span>
            </div>
          </div>

          {/* Lock In Model CTA */}
          <div className="pt-1 md:pt-2">
            <button
              type="button"
              onClick={handleSelectModel}
              data-cursor-text="LOCK"
              className="w-full min-h-[48px] flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-brand-red text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg shadow-brand-red/25 transition-all cursor-pointer touch-manipulation"
            >
              <span>Lock In This Sprint Model</span>
              <ArrowDownRight size={15} />
            </button>
          </div>
        </div>

        {/* Live SVG Curve Column: Top on Mobile (Always Visible During Thumb Drag), Right on Desktop */}
        <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col justify-between p-5 sm:p-8 rounded-2xl border border-line-border bg-black/60 backdrop-blur-md text-white font-mono">
          <div className="flex items-center justify-between gap-2 mb-3 md:mb-4 pb-3 border-b border-white/10 text-[11px] sm:text-xs">
            <div className="flex items-center gap-2 min-w-0">
              <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
              <span className="uppercase text-white/80 font-bold truncate">
                90-Day Revenue Compounding
              </span>
            </div>
            <span className="text-brand-red font-bold shrink-0">
              EST. {telemetry.estOrders.toLocaleString('en-IN')} ORDERS
            </span>
          </div>

          {/* Giant Output Projection */}
          <div className="my-1 md:my-2">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/50 block">
              Projected 90-Day Net Scaled Run Rate
            </span>
            <div className="font-display text-4xl sm:text-6xl font-black text-white mt-1">
              ₹{telemetry.sprint90DayRevCr}{' '}
              <span className="text-brand-red text-2xl sm:text-3xl font-light">
                Cr+
              </span>
            </div>
          </div>

          {/* Interactive Live SVG Growth Curve */}
          <div className="relative h-28 sm:h-40 w-full my-3 md:my-4">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Subtle grid lines */}
              <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

              {/* Area fill */}
              <defs>
                <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent-red)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--accent-red)" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d={`${telemetry.pathD} L 100 100 L 0 100 Z`}
                fill="url(#curveGradient)"
              />

              {/* Curve Stroke */}
              <path
                d={telemetry.pathD}
                fill="none"
                stroke="var(--accent-red)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="transition-all duration-500 ease-out"
              />

              {/* Peak indicator dot */}
              <circle
                cx={telemetry.points[4].x}
                cy={telemetry.points[4].y}
                r="3.5"
                fill="#FFFFFF"
              />
            </svg>
          </div>

          <div className="flex items-center justify-between gap-2 text-[10px] sm:text-xs text-white/50 pt-3 border-t border-white/10">
            <span className="sm:hidden">D00 · Audit</span>
            <span className="hidden sm:inline">Day 00: Creative Audit &amp; CAPI Sync</span>
            <span className="sm:hidden">D45 · Funnels</span>
            <span className="hidden sm:inline">Day 45: Street Posters &amp; Funnels</span>
            <span className="sm:hidden text-brand-red font-bold">D90 · Scale</span>
            <span className="hidden sm:inline text-brand-red font-bold">Day 90: Predatory Scale</span>
          </div>
        </div>
      </div>
    </div>
  );
};

