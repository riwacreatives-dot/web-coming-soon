import React, { useState } from 'react';
import { ArrowUpRight, Check, CheckCircle2, Copy, Sparkles } from 'lucide-react';
import { ResponsiveModalShell } from '../common/ResponsiveModalShell';

interface RegionalHubModalProps {
  type: 'brand-dalal' | 'portal' | 'careers' | null;
  onClose: () => void;
}

export const RegionalHubModal: React.FC<RegionalHubModalProps> = ({ type, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('riwacreatives@gmail.com').catch(() => {});
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const mobileFooter = type && (
    <div className="flex items-center justify-between gap-2 font-mono">
      <button
        type="button"
        onClick={onClose}
        className="min-h-[46px] px-3.5 rounded-full border border-white/20 text-white/80 text-xs uppercase tracking-wider font-semibold touch-manipulation shrink-0"
      >
        Close
      </button>

      {(type === 'brand-dalal' || type === 'careers') && (
        <button
          type="button"
          onClick={handleCopyEmail}
          aria-label="Copy founder email"
          className="min-h-[46px] px-3.5 rounded-full border border-white/20 bg-white/5 text-white text-[11px] uppercase tracking-wider font-semibold inline-flex items-center gap-1.5 touch-manipulation shrink-0"
        >
          {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
        </button>
      )}

      {type === 'brand-dalal' && (
        <a
          href="mailto:riwacreatives@gmail.com?subject=Brand%20Dalal%20Inquiry"
          className="min-h-[46px] flex-1 inline-flex items-center justify-center gap-1.5 px-4 rounded-full bg-[#F5B31B] text-black font-bold text-xs uppercase tracking-wider touch-manipulation"
        >
          <span>Brief Dalal</span>
          <ArrowUpRight size={14} />
        </a>
      )}

      {type === 'portal' && (
        <button
          type="button"
          onClick={onClose}
          className="min-h-[46px] flex-1 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider touch-manipulation"
        >
          Done Viewing Demo
        </button>
      )}

      {type === 'careers' && (
        <a
          href="mailto:riwacreatives@gmail.com?subject=Application%20—%20Founder%27s%20Office%20Role"
          className="min-h-[46px] flex-1 inline-flex items-center justify-center gap-1.5 px-4 rounded-full bg-brand-red text-white font-bold text-xs uppercase tracking-wider touch-manipulation"
        >
          <span>Submit Pitch</span>
          <ArrowUpRight size={14} />
        </a>
      )}
    </div>
  );

  return (
    <ResponsiveModalShell
      isOpen={!!type}
      onClose={onClose}
      maxWidthClass="max-w-3xl"
      zIndexClass="z-[120]"
      mobileFooter={mobileFooter}
    >
      <div className="p-5 sm:p-10 font-mono">
        {type === 'brand-dalal' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/brand/dalal-mascot.png"
                alt="Brand Dalal Mascot"
                className="h-16 w-auto object-contain"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#F5B31B] font-bold">
                    ✦ Hyper-Local Street Media Division
                  </span>
                </div>
                <h3 className="font-display text-3xl font-extrabold uppercase text-white">
                  BRAND DALAL
                </h3>
                <p className="text-xs sm:text-sm text-[#F5B31B] font-bold">
                  "Dikhega Toh Bikega"
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Brand Dalal is our hyper-local growth powerhouse engineered exclusively for high-traffic food hubs. We pair provocative street poster drops across key culinary clusters with viral Instagram reels and geofenced footfall ads that physically drive patrons to your doors.
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs text-white/50 uppercase font-bold tracking-wider block">
                Regional Capabilities
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#F5B31B] shrink-0" />
                  <span>Viral Food Reels &amp; Street Food Cinematics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#F5B31B] shrink-0" />
                  <span>Hyper-Geofenced Footfall Meta Campaigns</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#F5B31B] shrink-0" />
                  <span>OOH Street Posters &amp; Billboards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#F5B31B] shrink-0" />
                  <span>Zomato &amp; Swiggy Growth Optimization</span>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex pt-4 border-t border-white/10 items-center justify-between">
              <span className="text-xs text-white/50 uppercase">
                Taking 2 New Brands For Q1/Q2
              </span>
              <a
                href="mailto:riwacreatives@gmail.com?subject=Brand%20Dalal%20Inquiry"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#F5B31B] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
              >
                <span>Brief Brand Dalal</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}

        {type === 'portal' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-xs sm:text-sm uppercase text-brand-red font-bold">
                  RIWA CLIENT COMMAND CENTER · DEMO
                </span>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 shrink-0">
                ACTIVE SPRINT
              </span>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                Solanas Hospitality &amp; DTC Sprint
              </h3>
              <span className="text-xs sm:text-sm text-white/60">
                Sprint Duration: Day 42 of 90 · Target: ₹2.5 Cr Net Run Rate
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-white/50 uppercase tracking-wider block font-bold">
                Sprint Milestones &amp; Approvals
              </span>
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-white/80">Solanas 'Hotter Than Baddies' ad scaling sprint</span>
                  <span className="text-emerald-400 font-bold text-xs shrink-0">✓ APPROVED</span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-white/80">Commercial food poster photoshoot &amp; 3D fluid art</span>
                  <span className="text-emerald-400 font-bold text-xs shrink-0">✓ DELIVERED</span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-white/80">Scale Meta Advantage+ daily ad spend to ₹2,50,000</span>
                  <span className="text-[#F5B31B] font-bold text-xs shrink-0">IN PROGRESS</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex pt-4 border-t border-white/10 items-center justify-between">
              <span className="text-xs text-white/50 uppercase">
                Client Slack Access Available 24/7
              </span>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-white text-black font-bold text-xs uppercase cursor-pointer"
              >
                Close Demo
              </button>
            </div>
          </div>
        )}

        {type === 'careers' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-brand-red" />
              <span className="text-xs uppercase text-brand-red font-bold">
                FOUNDER'S OFFICE · CAREERS
              </span>
            </div>

            <div>
              <h3 className="font-display text-3xl font-extrabold uppercase text-white">
                Founder's Office Role
              </h3>
              <p className="text-xs text-white/70 mt-1">
                "Thinks like a founder. Creates like an artist."
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-white/80 leading-relaxed">
              <p>
                We are scaling RIWA rapidly and need a high-velocity right-hand person to operate alongside Abhinav Singh across high-ticket client pitches, commercial ad campaigns, and squad orchestration.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs uppercase font-bold text-white/50 tracking-wider block">
                  Ideal Profile
                </span>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✦</span>
                    <span>Relentless founder mindset with bias for high-speed action.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✦</span>
                    <span>Deep taste in commercial ad art direction &amp; typography.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✦</span>
                    <span>Mathematical fluency with paid media ROAS &amp; telemetry.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden md:flex pt-4 border-t border-white/10 items-center justify-between">
              <span className="text-xs text-white/50 uppercase">
                Remote / Hybrid Worldwide
              </span>
              <a
                href="mailto:riwacreatives@gmail.com?subject=Application%20—%20Founder%27s%20Office%20Role"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-red text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
              >
                <span>Submit Pitch to Founders</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </ResponsiveModalShell>
  );
};
