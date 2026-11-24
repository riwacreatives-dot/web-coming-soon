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
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const dotVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    y: 10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.35,
      ease: [0.34, 1.56, 0.64, 1],
    },
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

  const logoScaleY = useTransform(scrollYProgress, [0, 1], [0.72, 1]);
  const logoLetterSpacing = useTransform(scrollYProgress, [0, 1], ['-0.06em', '-0.02em']);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative w-full pt-12 md:pt-16 pb-32 md:pb-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-line-border">
        {/* Hub Quick Links Bar (Mobile: Full-width Hairline Rows; Desktop: Horizontal Ribbon) */}
        <div className="py-4 md:py-8 border-b border-line-border flex flex-col md:flex-row md:flex-wrap md:items-center justify-between gap-2 md:gap-6 font-mono text-xs sm:text-sm">
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-0 md:gap-8 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setActiveModal('brand-dalal')}
              className="group w-full md:w-auto min-h-[48px] md:min-h-0 flex items-center justify-between md:justify-start gap-2 py-3 md:py-0 border-b border-line-border md:border-none text-text-primary hover:text-[#F5B31B] font-bold cursor-pointer transition-colors touch-manipulation"
            >
              <span>Brand Dalal Division</span>
              <ArrowUpRight
                size={15}
                className="text-[#F5B31B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>

            <button
              type="button"
              onClick={() => setActiveModal('careers')}
              className="group w-full md:w-auto min-h-[48px] md:min-h-0 flex items-center justify-between md:justify-start gap-2 py-3 md:py-0 border-b border-line-border md:border-none text-text-primary hover:text-brand-red font-bold cursor-pointer transition-colors touch-manipulation"
            >
              <span>Careers: Founder's Office</span>
              <ArrowUpRight
                size={15}
                className="text-brand-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>

            <button
              type="button"
              onClick={() => setActiveModal('portal')}
              className="group w-full md:w-auto min-h-[48px] md:min-h-0 flex items-center justify-between md:justify-start gap-2 py-3 md:py-0 border-b border-line-border md:border-none text-text-primary hover:text-emerald-400 font-bold cursor-pointer transition-colors touch-manipulation"
            >
              <span>Client Portal Demo</span>
              <ArrowUpRight
                size={15}
                className="text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            data-cursor-text="TOP"
            className="w-full md:w-auto min-h-[44px] md:min-h-0 text-text-secondary hover:text-text-primary uppercase tracking-wider text-xs sm:text-sm font-bold cursor-pointer touch-manipulation text-center md:text-right pt-2 md:pt-0"
          >
            [ Back To Top ↑ ]
          </button>
        </div>

        {/* Editorial Directory Grid */}
        <div className="py-10 md:py-14 border-b border-line-border grid grid-cols-1 md:grid-cols-12 gap-8 font-mono text-xs sm:text-sm">
          {/* Brand Vision */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-display text-lg sm:text-xl font-black uppercase text-text-primary tracking-tight block">
              RIWA CREATIVES®
            </span>
            <p className="text-text-primary font-bold">
              MAKING UNREASONABLE BRANDS HAPPEN<span className="text-brand-red font-black">.</span>
            </p>
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-sm">
              Independent Creative &amp; Growth Studio. We build distinctive brand identities, ambitious campaigns and digital experiences that help businesses get noticed.
            </p>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-text-secondary uppercase tracking-widest text-[11px] font-bold block">
              Explore
            </span>
            <ul className="space-y-2 text-text-primary">
              <li><Link to="/" className="hover:text-brand-red transition-colors">Home</Link></li>
              <li><Link to="/work" className="hover:text-brand-red transition-colors">Work</Link></li>
              <li><Link to="/services" className="hover:text-brand-red transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-red transition-colors">About</Link></li>
              <li><Link to="/leadership" className="hover:text-brand-red transition-colors">Leadership</Link></li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-text-secondary uppercase tracking-widest text-[11px] font-bold block">
              Connect
            </span>
            <ul className="space-y-2 text-text-primary">
              <li><a href="mailto:riwacreatives@gmail.com" className="hover:text-brand-red transition-colors">Email · riwacreatives@gmail.com</a></li>
              <li><a href="https://instagram.com/riwacreatives" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">Instagram · @riwacreatives</a></li>
              <li><a href="https://linkedin.com/company/riwa-creatives" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">LinkedIn · Riwa Creatives</a></li>
              <li><a href="https://wa.me/919871000000" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">WhatsApp · Studio Concierge</a></li>
            </ul>

            <div className="pt-3">
              <span className="text-xs uppercase text-text-secondary block mb-1 font-bold">Have a good idea? Don't keep it to yourself.</span>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-brand-red font-bold hover:underline">
                <span>START A PROJECT ■</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Cinematic Monumental "RIWA." Logo with Scroll-Scrub Stretch */}
        <div
          ref={logoSectionRef}
          className="group relative py-12 sm:py-24 select-none overflow-visible flex items-end justify-center"
        >
          {/* Ambient Glow behind the logo */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
            <div className="w-3/4 max-w-4xl h-24 sm:h-36 bg-brand-red/10 filter blur-[70px] sm:blur-[90px] rounded-full transition-opacity duration-500 opacity-60 group-hover:opacity-100" />
          </div>

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
            className="w-full font-display text-[clamp(3.5rem,14vw,12.5rem)] font-black uppercase text-text-primary leading-[0.85] tracking-tight whitespace-nowrap text-center flex items-baseline justify-center select-none will-change-transform"
          >
            {LETTERS.map((char, idx) => (
              <motion.span
                key={idx}
                variants={letterVariants}
                whileHover={{
                  y: -6,
                  color: 'var(--accent-red)',
                  textShadow: '0 10px 30px rgba(255, 42, 85, 0.35)',
                }}
                transition={letterHoverTransition}
                className="inline-block cursor-pointer transition-colors duration-200"
              >
                {char}
              </motion.span>
            ))}

            <motion.span
              variants={dotVariants}
              whileHover={{
                scale: 1.25,
                rotate: 45,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 20,
              }}
              className="inline-block text-brand-red cursor-pointer select-none ml-1 sm:ml-2"
            >
              .
            </motion.span>
          </motion.h2>
        </div>

        {/* Bottom Accreditation & Legal Bar with Upgraded Font Size */}
        <div className="pt-6 border-t border-line-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs sm:text-sm text-text-secondary">
          <div className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-brand-red shrink-0" />
            <span className="uppercase tracking-wider font-medium">
              Government of India MSME Registered Enterprise
            </span>
          </div>

          <div className="flex items-center gap-4 uppercase tracking-wider font-medium">
            <span>© {new Date().getFullYear()} RIWA CREATIVES. ALL RIGHTS RESERVED. · MADE WITH INTENTION.</span>
          </div>
        </div>
      </footer>

      {/* Slide-over Modals */}
      <RegionalHubModal
        type={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </>
  );
};
