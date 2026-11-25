import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { SparkElement } from '../common/SparkElement';

export const ThePeople: React.FC = () => {
  const navigate = useNavigate();
  const reduced = useReducedMotion();

  return (
    <section
      id="chapter-people"
      className="relative w-full bg-[#111116] dark:bg-[#0A0A0E] text-white overflow-hidden"
    >
      <div id="about" className="sr-only" aria-hidden="true" />
      <div id="leadership" className="sr-only" aria-hidden="true" />

      <div className="max-w-7xl mx-auto py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12">

        {/* Chapter Label with THE SPARK Aperture ○ */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3 mb-10 sm:mb-14"
        >
          <SparkElement chapter={5} size={20} />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#EA1E4D] font-bold">
            06 — THE PEOPLE &amp; STUDIO STORY
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.4rem,6.5vw,5.2rem)] font-black uppercase tracking-tighter text-white leading-[0.92] mb-12 sm:mb-18 max-w-4xl"
        >
          <span className="block">MADE BY PEOPLE</span>
          <span className="block font-serif italic font-normal tracking-tight text-[#EA1E4D] text-[1.06em] lowercase mt-1">
            who care too much.
          </span>
        </motion.h2>

        {/* Main Studio Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 sm:mb-20 items-start">

          {/* LEFT (5 Cols): Founder Portrait Aperture Plate + Authentic Hiring & Regional Assets */}
          <div className="lg:col-span-5 space-y-6">
            {/* Founder Plate framed honestly by THE SPARK Aperture Ring ○ */}
            <div className="bg-[#0B0B0F] border border-white/15 p-6 sm:p-8">
              <div className="flex items-center justify-between font-mono text-[10px] text-white/50 uppercase tracking-widest pb-4 mb-6 border-b border-white/10">
                <span>FOUNDER PLATE // 01</span>
                <span className="text-[#EA1E4D] font-bold">CREATIVE DIRECTION</span>
              </div>

              <div className="py-4 flex flex-col items-center text-center">
                {/* Circular Aperture Framing Ring (THE SPARK Ch06 state) */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center mb-5">
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#EA1E4D]"
                    animate={reduced ? undefined : { scale: [1, 1.035, 1], opacity: [0.85, 0.45, 0.85] }}
                    transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
                  />
                  <div className="w-[88%] h-[88%] rounded-full border border-white/15 bg-[#17171E] flex flex-col items-center justify-center px-4">
                    <span className="font-display text-4xl sm:text-5xl font-black text-white leading-none">
                      RK<span className="text-[#EA1E4D]">.</span>
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/45 mt-2">
                      PORTRAIT PENDING
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white">
                  Ranjan Kumar
                </h3>
                <span className="font-mono text-xs text-[#EA1E4D] font-bold uppercase tracking-widest mt-1">
                  Founder &amp; Creative Director
                </span>
              </div>
            </div>

            {/* Authentic Visual Pair: Hiring Poster + Brand Dalal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Active Hiring Banner (genuine poster) */}
              <div className="border border-[#EA1E4D]/35 bg-[#17171E] p-4 flex items-center gap-4">
                <img
                  src="/brand/riwa-hiring-poster.jpg"
                  alt="Riwa Creatives Founder's Office Hiring Poster"
                  loading="lazy"
                  className="w-16 h-20 object-cover border border-white/20 shrink-0"
                />
                <div className="min-w-0">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#FD7D3C] font-bold flex items-center gap-1 mb-1">
                    <Sparkles size={11} /> WE&apos;RE GROWING
                  </span>
                  <p className="font-display text-sm font-black uppercase text-white leading-tight mb-1">
                    Founder&apos;s Office Role
                  </p>
                  <a
                    href="mailto:riwacreatives@gmail.com?subject=Application%20—%20Founder%27s%20Office%20Role"
                    className="font-mono text-[10px] text-[#EA1E4D] font-bold hover:underline inline-flex items-center gap-1 uppercase"
                  >
                    <span>Pitch Yourself</span>
                    <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>

              {/* Brand Dalal Regional Initiative (genuine mascot) */}
              <div className="border border-white/15 bg-[#17171E] p-4 flex items-center gap-4">
                <div className="w-16 h-16 bg-[#0B0B0F] border border-white/10 p-1.5 flex items-center justify-center shrink-0">
                  <img
                    src="/brand/dalal-mascot.png"
                    alt="Brand Dalal Regional Street Initiative"
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/45 font-bold block mb-0.5">
                    STREET DIVISION // IN-HOUSE
                  </span>
                  <p className="font-display text-sm font-black uppercase text-white leading-tight mb-1">
                    Brand Dalal
                  </p>
                  <p className="font-mono text-[10px] text-white/60 leading-snug">
                    Hyper-local hospitality &amp; cultural street outreach engine.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT (7 Cols): Authentic Personal Note + Studio Reality */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              className="border-l-4 border-[#EA1E4D] pl-5 sm:pl-7 py-2 space-y-4"
            >
              <p className="font-display text-xl sm:text-3xl font-black uppercase tracking-tight text-white leading-snug">
                Why Riwa doesn&apos;t split thinking from making.
              </p>
              <p className="font-serif italic text-lg sm:text-xl text-white/65 leading-relaxed">
                &ldquo;Too many ambitious founders end up coordinating one shop for a logo, another for performance ads, someone else for code, and a separate team for live events — and the brand loses its soul in the handoffs.&rdquo;
              </p>
            </motion.div>

            <div className="space-y-5 font-sans text-sm sm:text-base text-white/75 leading-relaxed border-t border-white/10 pt-6">
              <p>
                I started Riwa Creatives out of Delhi around a simple frustration: good work rarely comes out of bloated agency telephone games. When strategy, design taste, copywriting, frontend engineering, and live production sit around the same workbench, an idea keeps its sharp edges all the way into the market.
              </p>
              <p>
                Every project here involves direct collaboration from day one — questioning assumptions early, prototyping visually, and shipping work you can actually measure in orders, engagement, or packed rooms. We stay intentionally lean so we can care obsessively about every drop we put our name on.
              </p>
            </div>

            {/* Grounded Reality Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono">
              <div className="p-4 border border-white/15 bg-[#17171E]">
                <span className="text-[9px] text-[#EA1E4D] font-bold uppercase tracking-widest block mb-1">01 // ACCESS</span>
                <p className="text-xs text-white font-bold">Direct Maker Collaboration</p>
              </div>
              <div className="p-4 border border-white/15 bg-[#17171E]">
                <span className="text-[9px] text-[#FD7D3C] font-bold uppercase tracking-widest block mb-1">02 // STATUS</span>
                <p className="text-xs text-white font-bold">Govt. of India MSME</p>
              </div>
              <div className="p-4 border border-white/15 bg-[#17171E]">
                <span className="text-[9px] text-[#EA1E4D] font-bold uppercase tracking-widest block mb-1">03 // BASE</span>
                <p className="text-xs text-white font-bold">Delhi · Across India</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => navigate('/about')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#111116] hover:bg-[#EA1E4D] hover:text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                <span>READ FULL ABOUT PAGE</span>
                <ArrowUpRight size={14} />
              </button>
              <button
                type="button"
                onClick={() => navigate('/leadership')}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-white/70 hover:text-[#EA1E4D] uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>LEADERSHIP DOSSIER</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Verified Collaborations & Transparent Endorsement Policy */}
        <div className="border-t border-white/10 pt-10 sm:pt-14">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-6">
            VERIFIED COLLABORATION RECORD
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-[#17171E] border border-white/15 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-white/10 font-mono text-[10px] uppercase tracking-widest">
                <span className="text-[#EA1E4D] font-bold">FEATURED COLLABORATION // HOSPITALITY</span>
                <span className="text-white/40">2026</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3">
                Solanas Chinese • Thai
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed mb-6">
                Multi-drop commercial campaign spanning street posters, key visual styling, Meta ad acquisition creatives, and flagship menu photography.
              </p>
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10 font-mono mb-6">
                <div>
                  <span className="text-xl sm:text-2xl font-black text-[#EA1E4D] block">+420%</span>
                  <span className="text-[10px] uppercase text-white/45">Weekend Orders</span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black text-[#EA1E4D] block">+340%</span>
                  <span className="text-[10px] uppercase text-white/45">Dinner Inbounds</span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black text-[#EA1E4D] block">6.2%</span>
                  <span className="text-[10px] uppercase text-white/45">Meta Ads CTR</span>
                </div>
              </div>
              <Link
                to="/work/solanas-campaign"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#EA1E4D] hover:text-white transition-colors uppercase tracking-wider"
              >
                <span>READ FULL DOSSIER</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="flex-1 bg-[#17171E] border border-white/15 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#FD7D3C] uppercase tracking-widest font-bold block mb-3">
                    // PARTNER ENDORSEMENTS
                  </span>
                  <h4 className="font-display text-xl font-black uppercase tracking-tight mb-2">
                    Verified Partner Quotes Pending
                  </h4>
                  <p className="font-sans text-sm text-white/60 leading-relaxed">
                    We do not invent fake testimonials. Signed named statements from founders and organizing heads are published only once approved.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#FD7D3C] hover:text-white transition-colors uppercase tracking-wider"
                >
                  <span>Start Next Collaboration</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              <div className="bg-[#17171E] border border-white/15 p-6">
                <span className="font-mono text-[10px] text-[#EA1E4D] uppercase tracking-widest font-bold block mb-2">
                  // OPEN FOR SPRINT BRIEFS
                </span>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  Taking select brand systems, commercial shoots, custom web builds, and festival/hackathon productions across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
