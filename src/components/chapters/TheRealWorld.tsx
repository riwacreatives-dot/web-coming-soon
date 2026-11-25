import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Check, ChevronDown, Ticket } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { SparkElement } from '../common/SparkElement';

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

const CONCEPT_EVENTS = [
  {
    code: 'EXP—01 // HACKATHONS & FESTIVALS',
    slug: 'hack-uttar-pradesh',
    title: 'HACK UTTAR PRADESH BLUEPRINT',
    subtitle: 'Event Branding · Digital Registration · Stage Production · Sponsor Decks',
  },
  {
    code: 'EXP—02 // MUNS, SUMMITS & CORPORATE',
    slug: 'horizon-mun',
    title: 'HORIZON MUN ASSEMBLY BLUEPRINT',
    subtitle: 'Conference Visual Identity · Delegate Acquisition · On-Ground Execution',
  },
];

export const TheRealWorld: React.FC = () => {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  const [passFlipped, setPassFlipped] = useState(false);
  const [showMobileDeliverables, setShowMobileDeliverables] = useState(false);

  return (
    <div
      id="chapter-real-world"
      className="w-full bg-[#FD7D3C] text-[#111116] border-y-2 border-[#111116] relative overflow-hidden"
    >
      {/* Legacy Section Anchor Support */}
      <div id="events-takeover" className="sr-only" aria-hidden="true" />

      {/* THE SPARK — Ch05 Stage Lighting Cones & Starburst Energy */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[480px] h-[480px] pointer-events-none opacity-35"
        style={{
          background:
            'conic-gradient(from 200deg at 80% 15%, rgba(255,255,255,0.45) 0deg, transparent 28deg, rgba(17,17,22,0.12) 48deg, transparent 85deg)',
        }}
      />

      {/* Running Experience Banner */}
      <div className="w-full bg-[#111116] text-white py-2.5 border-b-2 border-dashed border-[#FD7D3C] overflow-hidden select-none relative z-10">
        <motion.div
          animate={reduced ? undefined : { x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 24 }}
          className="flex items-center whitespace-nowrap font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] font-bold"
        >
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-4">
              <span className="text-[#FD7D3C]">★ RIWA / EXPERIENCES / 005</span>
              <span>HACKATHONS · MUNS &amp; CONFERENCES · COLLEGE FESTIVALS · CORPORATE EVENTS</span>
              <span className="text-[#FD7D3C]">✦</span>
              <span>SPONSORSHIP &amp; OUTREACH · DIGITAL REGISTRATION · PRODUCTION</span>
            </span>
          ))}
        </motion.div>
      </div>

      <section className="relative z-10 py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {/* Chapter Header with THE SPARK Stage Starburst ✦ */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <SparkElement chapter={4} size={22} onOrange />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#111116] font-bold">
              05 — EVENTS, EXPERIENCES &amp; ACTIVATIONS
            </span>
          </div>

          <Link
            to="/services/events-experiences"
            className="text-white bg-[#111116] px-3.5 py-1.5 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#111116] transition-colors"
          >
            DEDICATED EVENTS PAGE ↗
          </Link>
        </div>

        {/* Takeover Headline */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-display text-[clamp(2.5rem,7.5vw,5.8rem)] font-black uppercase tracking-tighter text-[#111116] leading-[0.9]">
            <span className="block text-white text-[0.56em] tracking-tight mb-2.5">
              WE DON&apos;T JUST MAKE EVENTS.
            </span>
            <span>WE MAKE</span>{' '}
            <span className="font-serif italic font-normal tracking-normal text-white text-[1.12em] lowercase">
              moments
            </span>{' '}
            <span>HAPPEN</span><span className="text-white">.</span>
          </h2>
        </motion.div>

        {/* Intro + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <p className="font-sans text-base sm:text-lg text-[#111116] font-semibold leading-relaxed max-w-2xl">
              From the first announcement drop to the final applause, we help organizations conceptualize, brand, promote, register, sponsor, and execute physical experiences that bring people into the same room.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <button
              type="button"
              onClick={() => navigate('/contact?type=event')}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#111116] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#111116] transition-all cursor-pointer shadow-[6px_6px_0px_rgba(255,255,255,0.4)]"
            >
              <span>CREATE AN EXPERIENCE</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Stage Environment Production Block Illuminated by THE SPARK */}
        <div className="bg-[#111116] text-white border-2 border-[#111116] p-6 sm:p-10 shadow-[10px_10px_0px_rgba(255,255,255,0.35)] mb-6 relative overflow-hidden">
          {/* Warm Stage Beam Gradient Inside Showcase */}
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
              ILLUSTRATIVE PRODUCTION SPEC
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-white/60 block">
                END-TO-END ARCHITECTURE · BRANDING TO VENUE FLOOR
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight leading-none">
                HACKATHONS · MUNS · COLLEGE FESTIVALS · CORPORATE SUMMITS
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl">
                Every physical experience connects four working layers under one direction: campaign posters and badges, digital ticketing portals, sponsor acquisition decks, and on-ground coordination.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px] uppercase tracking-wider">
                {['Event Branding', 'Sponsorship & Outreach', 'Digital Ticketing', 'On-Ground Production'].map((pill) => (
                  <span key={pill} className="px-3 py-1.5 border border-[#FD7D3C]/40 bg-[#FD7D3C]/10 text-[#FD7D3C] font-bold">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Flip Live Pass Artifact */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-3">
              <button
                type="button"
                onClick={() => setPassFlipped((p) => !p)}
                aria-label="Toggle All-Access Pass front and back specification"
                className="w-full max-w-sm text-left bg-[#FD7D3C] text-[#111116] p-6 border-2 border-white shadow-[8px_8px_0px_#EA1E4D] relative cursor-pointer hover:brightness-105 transition-all"
              >
                <div className="flex items-center justify-between border-b-2 border-dashed border-[#111116] pb-3 mb-4 font-mono text-[10px] font-bold uppercase tracking-widest">
                  <span>{passFlipped ? 'SPEC BACK // RUN OF SHOW' : 'PASS NO. 005'}</span>
                  <span className="inline-flex items-center gap-1">
                    <Ticket size={12} />
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
                    <p className="font-display text-2xl sm:text-3xl font-black uppercase leading-none mb-2">
                      RIWA LIVE EXPERIENCE
                    </p>
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#111116]/80 mb-5">
                      ALL-ACCESS PRODUCTION SPEC
                    </p>
                  </>
                )}

                <div className="pt-3 mt-4 border-t border-[#111116]/25 flex justify-between font-mono text-[10px] font-bold">
                  <span>STAGE · WEB · DELEGATES</span>
                  <span>ADMIT ALL</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Supporting Conceptual Event Blueprints */}
        <div className="mobile-snap-track flex md:grid md:grid-cols-2 gap-4 sm:gap-5 overflow-x-auto no-scrollbar pb-2 mb-10 sm:mb-14 -mx-4 px-4 md:mx-0 md:px-0">
          {CONCEPT_EVENTS.map((bp) => (
            <Link
              key={bp.code}
              to={`/work/${bp.slug}`}
              className="snap-start shrink-0 w-[80vw] md:w-auto group bg-white text-[#111116] border-2 border-[#111116] p-6 shadow-[8px_8px_0px_#111116] hover:-translate-y-[2px] transition-transform flex flex-col justify-between min-h-[168px]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-dashed border-[#111116]/25 font-mono text-[10px] uppercase tracking-widest font-bold">
                  <span className="text-[#EA1E4D]">{bp.code}</span>
                  <span className="px-2 py-0.5 bg-[#111116] text-white">CONCEPT BLUEPRINT</span>
                </div>
                <h4 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight leading-snug mb-2 group-hover:text-[#EA1E4D] transition-colors">
                  {bp.title}
                </h4>
                <p className="font-mono text-xs text-[#52525B] leading-relaxed">{bp.subtitle}</p>
              </div>
              <div className="pt-3 border-t border-[#111116]/15 flex items-center justify-between font-mono text-[11px] font-bold uppercase mt-4">
                <span>Illustrative Framework Only</span>
                <span className="text-[#EA1E4D] inline-flex items-center gap-1">
                  Open Blueprint <ArrowUpRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* 12-Service Deliverables Matrix (Desktop Always Visible / Mobile Collapsible Accordion) */}
        <div className="bg-[#111116] text-white p-6 sm:p-10 border-2 border-[#111116]">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 md:pb-5 border-b border-white/15 font-mono">
            <span className="text-[#FD7D3C] text-xs uppercase tracking-[0.22em] font-bold">
              ✦ FULL EVENT &amp; ACTIVATION DELIVERABLES
            </span>
            <button
              type="button"
              onClick={() => setShowMobileDeliverables((s) => !s)}
              className="md:hidden inline-flex items-center gap-1.5 text-xs text-white font-bold uppercase cursor-pointer"
            >
              <span>{showMobileDeliverables ? 'HIDE LIST' : 'VIEW ALL 12'}</span>
              <ChevronDown
                size={14}
                className={`transition-transform ${showMobileDeliverables ? 'rotate-180' : ''}`}
              />
            </button>
            <span className="hidden md:inline text-xs text-white/50 uppercase">
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
                <Check size={13} className="text-[#FD7D3C] shrink-0 ml-auto mt-0.5 opacity-70" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
