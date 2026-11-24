import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Ticket } from 'lucide-react';

const EVENT_SERVICES = [
  'Event planning and management',
  'Hackathon conceptualization and execution',
  'MUN and conference management',
  'College festivals and youth events',
  'Corporate events and conferences',
  'Event branding and creative production',
  'Delegate and participant acquisition',
  'Sponsorship strategy and acquisition',
  'Event marketing and promotions',
  'Registration and ticketing infrastructure',
  'Event websites and digital experiences',
  'On-ground event coordination',
];

const EXPERIENCE_SUITES = [
  {
    code: 'EXP—01',
    type: 'CONCEPT / TURNKEY ARCHITECTURE',
    title: 'HACK UTTAR PRADESH',
    subtitle: 'Hackathon Branding · Stage LED Graphics · Registration Portal',
    spec: '1,200+ Builders Scale Blueprint',
  },
  {
    code: 'EXP—02',
    type: 'CONCEPT / CONFERENCE SUITE',
    title: 'HORIZON MUN',
    subtitle: 'Diplomatic Visual Identity · Delegate Acquisition · Stage Direction',
    spec: '450+ Delegates Format Blueprint',
  },
];

export const EventsTakeoverSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#FD7D3C] text-[#111116] border-y-2 border-[#111116] relative overflow-hidden transition-colors">
      {/* Oversized Graphic Numeral Watermark */}
      <div
        aria-hidden="true"
        className="absolute -right-6 sm:right-6 top-6 sm:top-10 font-display font-black text-[9rem] sm:text-[18rem] md:text-[24rem] leading-none text-[#111116]/[0.07] pointer-events-none select-none tracking-tighter"
      >
        005
      </div>

      {/* Top Perforated Festival / Ticket Strip */}
      <div className="w-full bg-[#111116] text-white py-2.5 border-b-2 border-dashed border-[#FD7D3C] overflow-hidden select-none">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
          className="flex items-center whitespace-nowrap font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] font-bold"
        >
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-4">
              <span className="text-[#FD7D3C]">ADMIT ONE ★</span>
              <span>RIWA / EXPERIENCES / 005</span>
              <span className="text-[#FD7D3C]">✳</span>
              <span>HACKATHONS · MUNS · COLLEGE FESTIVALS · BRAND ACTIVATIONS</span>
              <span className="text-[#FD7D3C]">✳</span>
            </span>
          ))}
        </motion.div>
      </div>

      <section
        id="events-takeover"
        className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        {/* Eyebrow Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 sm:mb-14 border-b-2 border-[#111116] font-mono text-xs sm:text-sm uppercase tracking-[0.22em] font-bold">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 bg-[#111116] text-white">08 / LIVE EXPERIENCES</span>
            <span>RIWA / EXPERIENCES / 005</span>
          </div>
          <span className="text-white bg-[#111116] px-3 py-1">
            [ THE ORANGE TAKEOVER ]
          </span>
        </div>

        {/* Asymmetric Poster-Inspired Headline & Visual Passes Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-14 sm:mb-20">
          {/* Left: Monumental Black & White Headline */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-[clamp(2.4rem,7vw,5.4rem)] font-black uppercase tracking-tighter text-[#111116] leading-[0.92]">
              <span className="block text-white text-[0.58em] tracking-tight mb-2">
                WE DON&apos;T JUST MAKE EVENTS.
              </span>
              <span>WE MAKE</span><br />
              <span className="font-serif italic font-normal tracking-normal text-white text-[1.15em] lowercase select-none">
                moments
              </span>{' '}
              <span>HAPPEN</span><span className="text-white">.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg md:text-xl text-[#111116] font-semibold leading-relaxed max-w-2xl">
              From the first announcement to the final applause, we help organizations conceptualize, promote and execute experiences that bring people together.
            </p>

            {/* Primary CTA: Links directly with Event Type selected */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => navigate('/contact?type=event')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#111116] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#111116] transition-all cursor-pointer shadow-[6px_6px_0px_rgba(255,255,255,0.45)]"
              >
                <span>CREATE AN EXPERIENCE</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Right: Ticket-Stub & Event Pass Blueprint Graphic Stack */}
          <div className="lg:col-span-5 space-y-5">
            {EXPERIENCE_SUITES.map((suite, idx) => (
              <div
                key={suite.code}
                className={`relative bg-[#FFFFFF] text-[#111116] border-2 border-[#111116] p-5 sm:p-6 shadow-[8px_8px_0px_#111116] ${
                  idx === 1 ? 'sm:ml-6' : ''
                }`}
              >
                {/* Ticket Stub Notches */}
                <span className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FD7D3C] border-r-2 border-[#111116]" />
                <span className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FD7D3C] border-l-2 border-[#111116]" />

                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-dashed border-[#111116]/30 font-mono text-[10px] uppercase tracking-widest font-bold">
                  <span className="text-[#EA1E4D]">{suite.code} // {suite.type}</span>
                  <Ticket size={14} className="text-[#111116]" />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight leading-none mb-1.5">
                  {suite.title}
                </h3>
                <p className="font-mono text-xs text-[#52525B] mb-4">
                  {suite.subtitle}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[#111116]/15 font-mono text-[11px] font-bold">
                  <span className="px-2 py-0.5 bg-[#FD7D3C]/25 text-[#111116]">{suite.spec}</span>
                  <span className="text-[#52525B] uppercase">ILLUSTRATIVE CASE SUITE</span>
                </div>
              </div>
            ))}

            <p className="font-mono text-[11px] text-[#111116]/85 font-medium leading-relaxed px-1">
              * Note: Showcase passes above illustrate Riwa&apos;s turnkey hackathon &amp; MUN production architecture. Dedicated live event photography gallery in active curation.
            </p>
          </div>
        </div>

        {/* Full 12-Capability Events Matrix */}
        <div className="bg-[#111116] text-white p-6 sm:p-10 md:p-12 border-2 border-[#111116] shadow-[10px_10px_0px_rgba(255,255,255,0.3)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-8 border-b border-white/15 font-mono">
            <div>
              <span className="text-[#FD7D3C] text-xs uppercase tracking-[0.22em] font-bold block mb-1">
                ✦ COMPLETE TURNKEY SCOPE
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight">
                END-TO-END EXPERIENCE CAPABILITIES
              </h3>
            </div>
            <span className="font-mono text-xs text-white/50 uppercase">
              [ 12 SPECIALIZED DELIVERABLES ]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {EVENT_SERVICES.map((service, index) => (
              <div
                key={service}
                className="flex items-start gap-3 py-2 border-b border-white/10 font-mono text-xs sm:text-sm text-white/90"
              >
                <span className="text-[#FD7D3C] font-bold shrink-0">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <span className="leading-snug">{service}</span>
                <Check size={13} className="text-[#FD7D3C] shrink-0 ml-auto mt-0.5 opacity-70" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
