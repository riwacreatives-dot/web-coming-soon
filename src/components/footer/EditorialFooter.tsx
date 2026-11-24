import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, type Variants, type Transition } from 'framer-motion';
import { RegionalHubModal } from './RegionalHubModal';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

const LETTERS = ['R', 'I', 'W', 'A'];

const logoContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const dotVariants: Variants = {
  hidden: { opacity: 0, scale: 0.2, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.35, ease: [0.34, 1.56, 0.64, 1] },
  },
};

const letterHoverTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 25,
};

export const EditorialFooter: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'brand-dalal' | 'portal' | 'careers' | null>(null);
  const logoSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: logoSectionRef,
    offset: ['start end', 'end end'],
  });

  const logoScaleY = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const logoLetterSpacing = useTransform(scrollYProgress, [0, 1], ['-0.06em', '-0.02em']);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#111116] text-white border-t border-white/10">
      <footer className="relative w-full pt-12 md:pt-16 pb-32 md:pb-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {/* Hub Quick Links Bar */}
        <div className="py-4 md:py-8 border-b border-white/10 flex flex-col md:flex-row md:flex-wrap md:items-center justify-between gap-2 md:gap-6 font-mono text-xs sm:text-sm">
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-0 md:gap-8 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setActiveModal('brand-dalal')}
              className="group w-full md:w-auto min-h-[48px] md:min-h-0 flex items-center justify-between md:justify-start gap-2 py-3 md:py-0 border-b border-white/10 md:border-none text-white hover:text-[#FD7D3C] font-bold cursor-pointer transition-colors touch-manipulation"
            >
              <span>Brand Dalal Division</span>
              <ArrowUpRight size={15} className="text-[#FD7D3C]" />
            </button>

            <button
              type="button"
              onClick={() => setActiveModal('careers')}
              className="group w-full md:w-auto min-h-[48px] md:min-h-0 flex items-center justify-between md:justify-start gap-2 py-3 md:py-0 border-b border-white/10 md:border-none text-white hover:text-[#EA1E4D] font-bold cursor-pointer transition-colors touch-manipulation"
            >
              <span>Careers: Founder&apos;s Office</span>
              <ArrowUpRight size={15} className="text-[#EA1E4D]" />
            </button>

            <button
              type="button"
              onClick={() => setActiveModal('portal')}
              className="group w-full md:w-auto min-h-[48px] md:min-h-0 flex items-center justify-between md:justify-start gap-2 py-3 md:py-0 border-b border-white/10 md:border-none text-white hover:text-emerald-400 font-bold cursor-pointer transition-colors touch-manipulation"
            >
              <span>Client Portal Demo</span>
              <ArrowUpRight size={15} className="text-emerald-400" />
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-full md:w-auto min-h-[44px] md:min-h-0 text-white/50 hover:text-white uppercase tracking-wider text-xs sm:text-sm font-bold cursor-pointer touch-manipulation text-center md:text-right pt-2 md:pt-0"
          >
            [ Back To Top ↑ ]
          </button>
        </div>

        {/* Editorial Directory Grid */}
        <div className="py-10 md:py-14 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 font-mono text-xs sm:text-sm">
          {/* Official Brand Logo + Signature */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/brand/riwa-logo-transparent.png"
                alt="Riwa Creatives Official Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-display text-lg sm:text-xl font-black uppercase text-white tracking-tight">
                RIWA CREATIVES®
              </span>
            </div>
            <p className="text-white font-bold">
              MAKING UNREASONABLE BRANDS HAPPEN<span className="text-[#EA1E4D] font-black">.</span>
            </p>
            <p className="font-sans text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm">
              Independent Creative &amp; Growth Studio uniting brand identity, commercial advertising, technology, and live event experiences.
            </p>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-white/45 uppercase tracking-widest text-[11px] font-bold block">
              Explore
            </span>
            <ul className="space-y-2 text-white">
              <li><Link to="/" className="hover:text-[#EA1E4D] transition-colors">Home</Link></li>
              <li><Link to="/work" className="hover:text-[#EA1E4D] transition-colors">Work</Link></li>
              <li><Link to="/services" className="hover:text-[#EA1E4D] transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-[#EA1E4D] transition-colors">About</Link></li>
              <li><Link to="/leadership" className="hover:text-[#EA1E4D] transition-colors">Leadership</Link></li>
            </ul>
          </div>

          {/* Connect Links (Preserved Real Coordinates) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-white/45 uppercase tracking-widest text-[11px] font-bold block">
              Connect
            </span>
            <ul className="space-y-2 text-white">
              <li>
                <a href="mailto:riwacreatives@gmail.com" className="hover:text-[#EA1E4D] transition-colors">
                  Email · riwacreatives@gmail.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/madebyriwa" target="_blank" rel="noopener noreferrer" className="hover:text-[#EA1E4D] transition-colors">
                  Instagram · @madebyriwa
                </a>
              </li>
              <li>
                <Link to="/contact?type=event" className="hover:text-[#FD7D3C] transition-colors">
                  Events · Commission an Experience
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <span className="text-xs uppercase text-white/50 block mb-1 font-bold">
                Have a bold brief?
              </span>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-[#EA1E4D] font-bold hover:underline">
                <span>START A PROJECT ■</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Monumental "RIWA." Wordmark */}
        <div
          ref={logoSectionRef}
          className="group relative py-12 sm:py-24 select-none overflow-visible flex items-end justify-center"
        >
          <motion.h2
            data-no-spotlight="true"
            variants={logoContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              scaleY: logoScaleY,
              letterSpacing: logoLetterSpacing,
              transformOrigin: 'bottom center',
            }}
            className="w-full font-display text-[clamp(3.5rem,14vw,12.5rem)] font-black uppercase text-white leading-[0.85] tracking-tight whitespace-nowrap text-center flex items-baseline justify-center select-none will-change-transform"
          >
            {LETTERS.map((char, idx) => (
              <motion.span
                key={idx}
                variants={letterVariants}
                whileHover={{ y: -6, color: '#EA1E4D' }}
                transition={letterHoverTransition}
                className="inline-block cursor-pointer transition-colors duration-200"
              >
                {char}
              </motion.span>
            ))}

            <motion.span
              variants={dotVariants}
              whileHover={{ scale: 1.25, rotate: 45 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="inline-block text-[#EA1E4D] cursor-pointer select-none ml-1 sm:ml-2"
            >
              .
            </motion.span>
          </motion.h2>
        </div>

        {/* Bottom Accreditation & Legal Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs sm:text-sm text-white/55">
          <div className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-[#EA1E4D] shrink-0" />
            <span className="uppercase tracking-wider font-medium">
              Government of India MSME Registered Enterprise
            </span>
          </div>

          <div className="flex items-center gap-4 uppercase tracking-wider font-medium">
            <span>© {new Date().getFullYear()} RIWA CREATIVES. ALL RIGHTS RESERVED. · MADE WITH INTENTION.</span>
          </div>
        </div>
      </footer>

      <RegionalHubModal
        type={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
};
