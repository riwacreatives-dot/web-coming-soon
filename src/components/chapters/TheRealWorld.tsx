import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Check, ChevronDown, Ticket } from 'lucide-react';
import { getPublicWorkStories } from '../../data/studioData';

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

interface TheRealWorldProps {
  embedded?: boolean;
}

export const TheRealWorld: React.FC<TheRealWorldProps> = ({ embedded = false }) => {
  const navigate = useNavigate();
  const [passFlipped, setPassFlipped] = useState(false);
  const [showMobileDeliverables, setShowMobileDeliverables] = useState(false);

  const clearedEventProjects = getPublicWorkStories().filter((p) =>
    p.category.toLowerCase().includes('event')
  );

  return (
    <div
      id="events-experiences-showcase"
      className="w-full bg-[#FD7D3C] text-[#111116] border-y-2 border-[#111116] relative overflow-hidden"
    >
      <div id="events-takeover" className="sr-only" aria-hidden="true" />

      {/* Stage Lighting Accent (Subtle Static Gradient) */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[480px] h-[480px] pointer-events-none opacity-30"
        style={{
          background:
            'conic-gradient(from 200deg at 80% 15%, rgba(17,17,22,0.16) 0deg, transparent 35deg, rgba(17,17,22,0.08) 55deg, transparent 90deg)',
        }}
      />

      {/* Clean Static Charcoal Experience Banner (Zero infinite loops) */}
      <div className="w-full bg-[#111116] text-white py-3 border-b-2 border-dashed border-[#FD7D3C] overflow-x-auto no-scrollbar select-none relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] font-bold">
          <span className="text-[#FD7D3C]">★ RIWA / EXPERIENCES / 04</span>
          <span>HACKATHONS · CONFERENCES · FESTIVALS · ACTIVATIONS</span>
          <span className="text-[#FD7D3C] hidden sm:inline">IDENTITY · REGISTRATION · PRODUCTION</span>
        </div>
      </div>

      <section className="relative z-10 py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rotate-45 bg-[#111116] inline-block" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.26em] text-[#111116] font-bold">
              04 — EVENTS, EXPERIENCES &amp; ACTIVATIONS
            </span>
          </div>

          {!embedded && (
            <Link
              to="/services/events-experiences"
              className="text-white bg-[#111116] px-3.5 py-2 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#111116] transition-colors"
            >
              DEDICATED EVENTS PAGE ↗
            </Link>
          )}
        </div>

        {/* Takeover Headline (Charcoal #111116 on #FD7D3C = 7.33:1 AAA contrast) */}
        <div className="mb-10 sm:mb-14">
          <h2 className="font-display text-[clamp(2.2rem,6.8vw,5.2rem)] font-extrabold uppercase tracking-tighter text-[#111116] leading-[0.92]">
            <span className="block text-[0.58em] tracking-tight mb-2 text-[#111116]">
              WE DON&apos;T JUST MAKE EVENTS.
            </span>
            <span>WE MAKE</span>{' '}
            <span className="font-serif italic font-normal tracking-normal text-[#111116] underline decoration-2 underline-offset-4 text-[1.1em] lowercase">
              moments
            </span>{' '}
            <span>HAPPEN.</span>
          </h2>
        </div>

        {/* Intro + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-14">
          <div className="lg:col-span-7">
            <p className="font-sans text-base sm:text-lg text-[#111116] font-semibold leading-relaxed max-w-2xl">
              From the first announcement drop to the final applause, we help organizations conceptualize, brand, promote, register, and produce live rooms and experiences that unite communities.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <button
              type="button"
              onClick={() => navigate('/contact?service=events-experiences')}
              className="inline-flex items-center gap-3 min-h-[48px] px-7 py-4 rounded-full bg-[#111116] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#111116] transition-all cursor-pointer shadow-[6px_6px_0px_rgba(17,17,22,0.28)]"
            >
              <span>CREATE AN EXPERIENCE</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Stage Environment Production Block + Interactive Flip Live Pass */}
        <div className="bg-[#111116] text-white border-2 border-[#111116] p-6 sm:p-10 shadow-[10px_10px_0px_rgba(17,17,22,0.25)] mb-8 relative overflow-hidden">
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none opacity-25"
            style={{ background: 'radial-gradient(circle, #FD7D3C 0%, transparent 68%)' }}
            aria-hidden="true"
          />

          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-white/15 font-mono text-[10px] sm:text-xs uppercase tracking-widest relative z-10">
            <span className="text-[#FD7D3C] font-bold">
              STAGE SYSTEM // IDENTITY, REGISTRATION &amp; LIVE EXECUTION
            </span>
            <span className="px-2.5 py-0.5 bg-white text-[#111116] font-bold">
              STUDIO PRODUCTION SPEC
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#B4B4BE] block">
                END-TO-END ARCHITECTURE · BRANDING TO VENUE FLOOR
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight leading-none">
                HACKATHONS · CONFERENCES · FESTIVALS · ACTIVATIONS
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                Every physical experience connects four working layers under one creative direction: visual identity and passes, digital registration flows, sponsorship positioning, and on-ground execution.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px] uppercase tracking-wider">
                {['Event Branding', 'Sponsorship Decks', 'Digital Ticketing', 'On-Ground Crew'].map((pill) => (
                  <span key={pill} className="px-3 py-1.5 border border-[#FD7D3C]/45 bg-[#FD7D3C]/10 text-[#FD7D3C] font-bold">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Flip Pass Artifact */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-3">
              <button
                type="button"
                onClick={() => setPassFlipped((p) => !p)}
                aria-label="Toggle All-Access Pass front and back specification"
                className="w-full max-w-sm text-left bg-[#FD7D3C] text-[#111116] p-6 border-2 border-white shadow-[8px_8px_0px_#EA1E4D] relative cursor-pointer hover:brightness-105 transition-all"
              >
                <div className="flex items-center justify-between border-b-2 border-dashed border-[#111116] pb-3 mb-4 font-mono text-[10px] font-bold uppercase tracking-widest">
                  <span>{passFlipped ? 'SPEC BACK // RUN OF SHOW' : 'PASS NO. 004'}</span>
                  <span className="inline-flex items-center gap-1">
                    <Ticket size={12} aria-hidden="true" />
                    <span>FLIP</span>
                  </span>
                </div>

                {passFlipped ? (
                  <div className="space-y-2.5 font-mono text-xs py-1">
                    <p className="font-bold uppercase text-[#111116]">
                      01. Visual &amp; Stage LED Direction
                    </p>
                    <p className="font-bold uppercase text-[#111116]">
                      02. Registration &amp; Delegate Funnel
                    </p>
                    <p className="font-bold uppercase text-[#111116]">
                      03. Sponsor Deck &amp; On-Ground Crew
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="font-display text-2xl sm:text-3xl font-extrabold uppercase leading-none mb-2">
                      RIWA LIVE EXPERIENCE
                    </p>
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#111116] mb-5">
                      ALL-ACCESS PRODUCTION SPEC
                    </p>
                  </>
                )}

                <div className="pt-3 mt-4 border-t border-[#111116]/30 flex justify-between font-mono text-[10px] font-bold">
                  <span>STAGE · WEB · DELEGATES</span>
                  <span>ADMIT ALL</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Cleared Event Case Studies (Only rendered if permissionApproved === true) */}
        {clearedEventProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {clearedEventProjects.map((ev) => (
              <Link
                key={ev.id}
                to={`/work/${ev.id}`}
                className="group bg-white text-[#111116] border-2 border-[#111116] p-6 shadow-[8px_8px_0px_#111116] hover:-translate-y-[2px] transition-transform flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#C4123D] uppercase tracking-widest block mb-2">
                    {ev.archiveCode}
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight mb-2">
                    {ev.title}
                  </h4>
                  <p className="font-sans text-sm text-[#3F3F46]">{ev.description}</p>
                </div>
                <span className="font-mono text-xs font-bold uppercase text-[#111116] inline-flex items-center gap-1 mt-4">
                  <span>Open Case Study</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        )}

        {/* 12-Service Deliverables Matrix */}
        <div className="bg-[#111116] text-white p-6 sm:p-10 border-2 border-[#111116]">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 md:pb-5 border-b border-white/15 font-mono">
            <span className="text-[#FD7D3C] text-xs uppercase tracking-[0.22em] font-bold">
              ✦ FULL EVENT &amp; ACTIVATION DELIVERABLES
            </span>
            <button
              type="button"
              onClick={() => setShowMobileDeliverables((s) => !s)}
              className="md:hidden min-h-[40px] inline-flex items-center gap-1.5 text-xs text-white font-bold uppercase cursor-pointer"
            >
              <span>{showMobileDeliverables ? 'HIDE LIST' : 'VIEW ALL 12'}</span>
              <ChevronDown
                size={14}
                className={`transition-transform ${showMobileDeliverables ? 'rotate-180' : ''}`}
              />
            </button>
            <span className="hidden md:inline text-xs text-[#B4B4BE] uppercase">
              [ 12 SPECIALIZED SERVICES ]
            </span>
          </div>

          <div
            className={`${
              showMobileDeliverables ? 'grid' : 'hidden md:grid'
            } grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3.5 pt-5`}
          >
            {EVENT_SERVICES.map((service, index) => (
              <div
                key={service}
                className="flex items-start gap-3 py-2 border-b border-white/10 font-mono text-xs sm:text-sm text-white/90"
              >
                <span className="text-[#FD7D3C] font-bold shrink-0">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <span className="leading-snug">{service}</span>
                <Check size={13} className="text-[#FD7D3C] shrink-0 ml-auto mt-0.5 opacity-80" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
