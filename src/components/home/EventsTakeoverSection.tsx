import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

const EXPERIENCE_BLUEPRINTS = [
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

export const EventsTakeoverSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#FD7D3C] text-[#111116] border-y-2 border-[#111116] relative overflow-hidden transition-colors">
      {/* Top Running Experience Banner */}
      <div className="w-full bg-[#111116] text-white py-2.5 border-b-2 border-dashed border-[#FD7D3C] overflow-hidden select-none">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 24 }}
          className="flex items-center whitespace-nowrap font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] font-bold"
        >
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-4">
              <span className="text-[#FD7D3C]">★ RIWA / EXPERIENCES / 005</span>
              <span>HACKATHONS · MUNS &amp; CONFERENCES · COLLEGE FESTIVALS · CORPORATE EVENTS</span>
              <span className="text-[#FD7D3C]">✳</span>
              <span>SPONSORSHIP &amp; OUTREACH · DIGITAL REGISTRATION · PRODUCTION</span>
            </span>
          ))}
        </motion.div>
      </div>

      <section
        id="events-takeover"
        className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        {/* Metadata Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 sm:mb-14 border-b-2 border-[#111116] font-mono text-xs sm:text-sm uppercase tracking-[0.22em] font-bold">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 bg-[#111116] text-white">08 / EVENTS &amp; EXPERIENCES</span>
            <span>RIWA / EXPERIENCES / 005</span>
          </div>
          <Link
            to="/services/events-experiences"
            className="text-white bg-[#111116] px-3.5 py-1.5 hover:bg-white hover:text-[#111116] transition-colors"
          >
            DEDICATED EVENTS PAGE ↗
          </Link>
        </div>

        {/* Headline + Intro + Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(2.4rem,7vw,5.4rem)] font-black uppercase tracking-tighter text-[#111116] leading-[0.92]">
              <span className="block text-white text-[0.58em] tracking-tight mb-2">
                WE DON&apos;T JUST MAKE EVENTS.
              </span>
              <span>WE MAKE</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-white text-[1.15em] lowercase select-none">
                moments
              </span>{' '}
              <span>HAPPEN</span><span className="text-white">.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <p className="font-sans text-sm sm:text-base text-[#111116] font-semibold leading-relaxed">
              From the first announcement to the final applause, we help organizations conceptualize, brand, promote, register, sponsor, and execute experiences that bring people together.
            </p>
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

        {/* ============================================================ */}
        {/* EXPERIENTIAL SHOWCASE: 1 LARGE VISUAL + 2 SUPPORTING VISUALS */}
        {/* ============================================================ */}
        <div className="space-y-6 mb-14 sm:mb-16">
          {/* 1 Large Feature Stage & Registration Showcase Visual (Clearly Marked Illustrative) */}
          <div className="bg-[#111116] text-white border-2 border-[#111116] p-6 sm:p-10 md:p-12 shadow-[10px_10px_0px_rgba(255,255,255,0.35)] relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-white/15 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
              <span className="text-[#FD7D3C] font-bold">
                SHOWCASE // STAGE ENVIRONMENT &amp; DIGITAL TICKETING SYSTEM
              </span>
              <span className="px-2.5 py-0.5 bg-white text-[#111116] font-bold">
                ILLUSTRATIVE PRODUCTION SYSTEM
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-white/60 block">
                  CONCEPT ARCHITECTURE · FROM BRANDING TO ON-GROUND EXECUTION
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight leading-none">
                  HACKATHONS · MUNS · COLLEGE FESTIVALS · CORPORATE SUMMITS
                </h3>
                <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl">
                  Unified experience production combining event identity, digital registration &amp; ticketing infrastructure, sponsorship acquisition decks, delegate outreach campaigns, and venue coordination.
                </p>

                <div className="flex flex-wrap gap-2 pt-2 font-mono text-[10px] uppercase tracking-wider">
                  {[
                    'Event Branding',
                    'Sponsorship & Outreach',
                    'Digital Registration',
                    'Production & Execution',
                  ].map((pill) => (
                    <span key={pill} className="px-3 py-1.5 border border-[#FD7D3C]/40 bg-[#FD7D3C]/10 text-[#FD7D3C] font-bold">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ticket Pass Hardware Graphic Stack */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm bg-[#FD7D3C] text-[#111116] p-6 border-2 border-white shadow-[8px_8px_0px_#EA1E4D] relative">
                  <div className="flex items-center justify-between border-b-2 border-dashed border-[#111116] pb-3 mb-4 font-mono text-[10px] font-bold uppercase tracking-widest">
                    <span>PASS NO. 005</span>
                    <Ticket size={15} />
                  </div>
                  <p className="font-display text-2xl sm:text-3xl font-black uppercase leading-none mb-2">
                    RIWA LIVE EXPERIENCE
                  </p>
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#111116]/80 mb-5">
                    ALL-ACCESS PRODUCTION SPEC
                  </p>
                  <div className="pt-3 border-t border-[#111116]/25 flex justify-between font-mono text-[10px] font-bold">
                    <span>STAGE · WEB · DELEGATES</span>
                    <span>ADMIT ALL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 Supporting Conceptual Visuals Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIENCE_BLUEPRINTS.map((bp) => (
              <Link
                key={bp.code}
                to={`/work/${bp.slug}`}
                className="group bg-[#FFFFFF] text-[#111116] border-2 border-[#111116] p-6 shadow-[8px_8px_0px_#111116] hover:translate-y-[-2px] transition-transform flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-dashed border-[#111116]/30 font-mono text-[10px] uppercase tracking-widest font-bold">
                    <span className="text-[#EA1E4D]">{bp.code}</span>
                    <span className="px-2 py-0.5 bg-[#111116] text-white">CONCEPT BLUEPRINT</span>
                  </div>

                  <h4 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight leading-snug mb-2 group-hover:text-[#EA1E4D] transition-colors">
                    {bp.title}
                  </h4>

                  <p className="font-mono text-xs text-[#52525B] mb-5 leading-relaxed">
                    {bp.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#111116]/15 flex items-center justify-between font-mono text-[11px] font-bold uppercase">
                  <span className="text-[#111116]">Illustrative Framework Only</span>
                  <span className="text-[#EA1E4D] inline-flex items-center gap-1">
                    <span>Open Blueprint</span>
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Complete 12-Service Events List */}
        <div className="bg-[#111116] text-white p-6 sm:p-10 border-2 border-[#111116]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b border-white/15 font-mono">
            <span className="text-[#FD7D3C] text-xs uppercase tracking-[0.22em] font-bold">
              ✦ FULL EVENT &amp; ACTIVATION DELIVERABLES
            </span>
            <span className="text-xs text-white/50 uppercase">
              [ 12 SPECIALIZED SERVICES ]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3.5">
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
