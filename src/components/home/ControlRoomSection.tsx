import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface ControlRoomItem {
  id: string;
  code: string;
  label: string;
  headline: string;
  explanation: string;
  capabilityName: string;
  deliverables: string[];
  projectTitle: string;
  projectLink: string;
  accent: 'red' | 'orange';
}

const CONTROL_ITEMS: ControlRoomItem[] = [
  {
    id: 'brand',
    code: '01',
    label: 'BRAND',
    headline: 'BUILD IDENTITIES IMPOSSIBLE TO CONFUSE WITH COMPETITORS.',
    explanation:
      'We define brand strategy, naming, custom visual systems, and tone of voice so your business enters any market with unmistakable creative authority.',
    capabilityName: 'Capability 01 — Brand & Identity',
    deliverables: ['Positioning & Narrative', 'Visual Systems & Logos', 'Packaging & Guidelines'],
    projectTitle: 'Dim Sum Silk Dynamics (Solanas Visual System)',
    projectLink: '/work',
    accent: 'red',
  },
  {
    id: 'campaign',
    code: '02',
    label: 'CAMPAIGN',
    headline: 'WORK ENGINEERED TO INTERRUPT THE ENDLESS SCROLL.',
    explanation:
      'We direct bold key visuals, street posters, and motion campaigns rooted in culture rather than tired agency templates.',
    capabilityName: 'Capability 02 — Commercial Creative & Advertising',
    deliverables: ['Commercial Concepts', 'Art Direction & Key Visuals', 'Motion & Reels'],
    projectTitle: 'Hotter Than Baddies (Viral Street Poster)',
    projectLink: '/work',
    accent: 'red',
  },
  {
    id: 'growth',
    code: '03',
    label: 'GROWTH',
    headline: 'TURN CREATIVE ATTENTION INTO MEASURABLE DEMAND.',
    explanation:
      'Disciplined content strategy, paid social amplification, and audience acquisition working tightly together with commercial creative.',
    capabilityName: 'Capability 03 — Digital & Growth',
    deliverables: ['Campaign Strategy', 'Paid Meta & LinkedIn', 'Conversion Audits'],
    projectTitle: 'Sushi Condensed Key Art (Meta Ad Sprint)',
    projectLink: '/services',
    accent: 'red',
  },
  {
    id: 'technology',
    code: '04',
    label: 'TECHNOLOGY',
    headline: 'MODERN INTERACTIVE WEB EXPERIENCES & CUSTOM TOOLS.',
    explanation:
      'Custom React interfaces, fast storefronts, automation workflows, and AI-enabled products engineered for clarity and speed.',
    capabilityName: 'Capability 04 — Technology & Digital Experiences',
    deliverables: ['Interactive Websites', 'UI/UX Architecture', 'Event Tech & Automation'],
    projectTitle: 'DTC Brand Accelerator Prototype (Exploration)',
    projectLink: '/work',
    accent: 'red',
  },
  {
    id: 'experiences',
    code: '05',
    label: 'EXPERIENCES',
    headline: 'FROM HACKATHON STAGES TO SOLD-OUT FESTIVALS.',
    explanation:
      'End-to-end event conceptualization, visual branding, sponsorship decks, delegate acquisition, ticketing portals, and on-ground stage execution.',
    capabilityName: 'Capability 05 — Events, Experiences & Activations',
    deliverables: ['Hackathons & MUNs', 'Stage & Identity Production', 'Delegate Acquisition'],
    projectTitle: 'Hack Uttar Pradesh & Horizon MUN Concepts',
    projectLink: '/contact?type=event',
    accent: 'orange',
  },
];

export const ControlRoomSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = CONTROL_ITEMS[activeIndex];
  const accentHex = current.accent === 'orange' ? '#FD7D3C' : '#EA1E4D';

  return (
    <div className="w-full bg-[#111116] text-white border-y border-white/15 transition-colors">
      <section
        id="control-room"
        className="relative w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#EA1E4D] font-bold block mb-2">
              STUDIO INDEX // INTERACTIVE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none">
              THE RIWA <span className="font-serif italic font-normal lowercase text-[#FD7D3C]">control</span> ROOM<span className="text-[#EA1E4D]">.</span>
            </h2>
          </div>

          <p className="font-mono text-xs text-white/60 max-w-sm leading-relaxed">
            Explore how Riwa operates as one connected creative force across five core disciplines.
          </p>
        </div>

        {/* 12-Column Interactive Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/15 bg-[#16161C]">
          {/* Left Rail: Discipline Selector */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/15 flex lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar">
            {CONTROL_ITEMS.map((item, idx) => {
              const isSelected = idx === activeIndex;
              const itemAccent = item.accent === 'orange' ? '#FD7D3C' : '#EA1E4D';
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-6 border-r lg:border-r-0 lg:border-b last:border-r-0 lg:last:border-b-0 border-white/15 text-left transition-all cursor-pointer shrink-0 lg:shrink font-mono ${
                    isSelected
                      ? 'bg-white text-[#111116]'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      style={{ color: isSelected ? itemAccent : undefined }}
                      className={`text-xs font-bold ${isSelected ? '' : 'text-white/40'}`}
                    >
                      {item.code}
                    </span>
                    <span className="font-display text-sm sm:text-lg font-extrabold uppercase tracking-tight whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={15}
                    style={{ color: isSelected ? itemAccent : undefined }}
                    className={isSelected ? 'opacity-100' : 'opacity-30'}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Panel: Editorial Discipline Readout */}
          <div className="lg:col-span-8 p-6 sm:p-10 md:p-12 flex flex-col justify-between min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs uppercase tracking-widest border-b border-white/15 pb-4">
                  <span style={{ color: accentHex }} className="font-bold flex items-center gap-2">
                    <Sparkles size={13} />
                    {current.capabilityName}
                  </span>
                  <span className="text-white/40">DISCIPLINE {current.code} / 05</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-[1.05]">
                  {current.headline}
                </h3>

                <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl">
                  {current.explanation}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {current.deliverables.map((del) => (
                    <span
                      key={del}
                      className="px-3 py-1.5 border border-white/15 bg-white/5 font-mono text-xs text-white/85 uppercase tracking-wider"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-8 mt-8 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
              <div>
                <span className="text-white/45 uppercase block text-[10px] tracking-widest">
                  Featured Proof / Suite
                </span>
                <span className="text-white font-bold">{current.projectTitle}</span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to={current.projectLink}
                  style={{ backgroundColor: accentHex }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-bold uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  <span>Explore {current.label}</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
