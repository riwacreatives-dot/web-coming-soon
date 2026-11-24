import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface TelemetryCardProps {
  type: 'art' | 'math';
  x: number;
  y: number;
}

export const TelemetryCard: React.FC<TelemetryCardProps> = ({ type, x, y }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      style={{
        position: 'fixed',
        left: x + 20,
        top: y - 80,
        pointerEvents: 'none',
        zIndex: 90,
      }}
      className="hidden md:block w-80 rounded-xl border border-white/20 bg-black/90 p-4 text-white shadow-2xl backdrop-blur-xl font-mono text-xs"
    >
      {type === 'art' ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="flex items-center gap-1.5 text-brand-red font-bold uppercase tracking-wider text-xs">
              <Sparkles size={12} />
              <span>Provocative Ad Direction</span>
            </span>
            <span className="text-xs text-white/50">Solanas Suite</span>
          </div>

          <div className="relative h-28 w-full overflow-hidden rounded-md border border-white/10">
            <img
              src="/work/solanas-chilli-chicken.jpg"
              alt="Hotter Than Baddies"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <span className="absolute bottom-1.5 left-2 text-xs font-bold text-white uppercase">
              +420% Weekend Orders
            </span>
          </div>

          <p className="text-xs text-white/75 leading-relaxed">
            Museum-grade commercial ad art stopping the scroll dead to print revenue.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="flex items-center gap-1.5 text-brand-red font-bold uppercase tracking-wider text-xs">
              <Zap size={12} />
              <span>Commercial Media Performance</span>
            </span>
            <span className="text-xs text-emerald-400 font-bold">● LIVE</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-2.5 rounded bg-white/5 border border-white/5">
              <span className="text-xs text-white/60">Blended ROAS:</span>
              <span className="text-sm font-bold text-emerald-400 flex items-center gap-1">
                <TrendingUp size={12} /> 5.4x
              </span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded bg-white/5 border border-white/5">
              <span className="text-xs text-white/60">CAPI Accuracy:</span>
              <span className="text-sm font-bold text-white flex items-center gap-1">
                <ShieldCheck size={12} className="text-brand-red" /> 99.4%
              </span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded bg-white/5 border border-white/5">
              <span className="text-xs text-white/60">Blended CAC:</span>
              <span className="text-sm font-bold text-brand-red">-34% Lower</span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

