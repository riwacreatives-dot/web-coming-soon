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
    <div className="w-full bg-[#171719] text-[#F4F1EA] border-t border-[#2C2C30]">
      <footer className="relative w-full pt-12 md:pt-16 pb-32 md:pb-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {/* Hub Quick Links Bar */}
        <div className="py-4 md:py-8 border-b border-[#2C2C30] flex flex-col md:flex-row md:flex-wrap md:items-center justify-between gap-2 md:gap-6 font-mono text-xs sm:text-sm">
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-0 md:gap-8 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setActiveModal('brand-dalal')}
              className="group w-full md:w-auto min-h-[48px] md:min-h-0 flex items-center justify-between md:justify-start gap-2 py-3 md:py-0 border-b border-[#2C2C30] md:border-none text-[#F4F1EA] hover:text-[#FD7D3C] font-bold cursor-pointer transition-colors touch-manipulation"
            >
              <span>Brand Dalal Division</span>
              <ArrowUpRight
                size={15}
                className="text-[#FD7D3C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>

            <button
              type="button"
              onClick={() => setActiveModal('careers')}
              className="group w-full md:w-auto min-h-[48px] md:min-h-0 flex items-center justify-between md:justify-start gap-2 py-3 md:py-0 border-b border-[#2C2C30] md:border-none text-[#F4F1EA] hover:text-[#FD7D3C] font-bold cursor-pointer transition-colors touch-manipulation"
            >
              <span>Careers: Founder's Office</span>
              <ArrowUpRight
                size={15}
                className="text-[#FD7D3C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>

            <button
              type="button"
              onClick={() => setActiveModal('portal')}
              className="group w-full md:w-auto min-h-[48px] md:min-h-0 flex items-center justify-between md:justify-start gap-2 py-3 md:py-0 border-b border-[#2C2C30] md:border-none text-[#F4F1EA] hover:text-emerald-400 font-bold cursor-pointer transition-colors touch-manipulation"
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
            className="w-full md:w-auto min-h-[44px] md:min-h-0 text-[#9E9D98] hover:text-[#F4F1EA] uppercase tracking-wider text-xs sm:text-sm font-bold cursor-pointer touch-manipulation text-center md:text-right pt-2 md:pt-0"
          >
            [ Back To Top ↑ ]
          </button>
        </div>

        {/* Editorial Directory Grid */}
        <div className="py-10 md:py-14 border-b border-[#2C2C30] grid grid-cols-1 md:grid-cols-12 gap-8 font-mono text-xs sm:text-sm">
          {/* Brand Vision */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-display text-lg sm:text-xl font-black uppercase text-[#F4F1EA] tracking-tight block">
              RIWA CREATIVES®
            </span>
            <p className="text-[#F4F1EA] font-bold">
              MAKING UNREASONABLE BRANDS HAPPEN<span className="text-[#FD7D3C] font-black">.</span>
            </p>
            <p className="font-sans text-[#9E9D98] text-xs sm:text-sm leading-relaxed max-w-sm">
              Independent Creative &amp; Growth Studio. We build distinctive brand identities, ambitious campaigns and digital experiences that help businesses get noticed.
            </p>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[#9E9D98] uppercase tracking-widest text-[11px] font-bold block">
              Explore
            </span>
            <ul className="space-y-2 text-[#F4F1EA]">
              <li><Link to="/" className="hover:text-[#FD7D3C] transition-colors">Home</Link></li>
              <li><Link to="/work" className="hover:text-[#FD7D3C] transition-colors">Work</Link></li>
              <li><Link to="/services" className="hover:text-[#FD7D3C] transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-[#FD7D3C] transition-colors">About</Link></li>
              <li><Link to="/leadership" className="hover:text-[#FD7D3C] transition-colors">Leadership</Link></li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[#9E9D98] uppercase tracking-widest text-[11px] font-bold block">
              Connect
            </span>
            <ul className="space-y-2 text-[#F4F1EA]">
              <li><a href="mailto:hello@riwacreatives.in" className="hover:text-[#FD7D3C] transition-colors">Email · hello@riwacreatives.in</a></li>
              <li><a href="https://instagram.com/madebyriwa" target="_blank" rel="noopener noreferrer" className="hover:text-[#FD7D3C] transition-colors">Instagram · @madebyriwa</a></li>
              <li><a href="https://linkedin.com/company/riwacreatives" target="_blank" rel="noopener noreferrer" className="hover:text-[#FD7D3C] transition-colors">LinkedIn · Riwa Creatives</a></li>
              <li><a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-[#FD7D3C] transition-colors">WhatsApp · Studio Concierge</a></li>
            </ul>

            <div className="pt-3">
              <span className="text-xs uppercase text-[#9E9D98] block mb-1 font-bold">Have a good idea? Don't keep it to yourself.</span>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-[#FD7D3C] font-bold hover:underline">
                <span>START A PROJECT ■</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Monumental "RIWA." Logo */}
        <div
          ref={logoSectionRef}
          className="group relative py-12 sm:py-24 select-none overflow-visible flex items-end justify-center"
        >
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
            <div className="w-3/4 max-w-4xl h-24 sm:h-36 bg-[#FD7D3C]/10 filter blur-[80px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
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
            className="w-full font-display text-[clamp(3.5rem,14vw,12.5rem)] font-black uppercase text-[#F4F1EA] leading-[0.85] tracking-tight whitespace-nowrap text-center flex items-baseline justify-center select-none will-change-transform"
          >
            {LETTERS.map((char, idx) => (
              <motion.span
                key={idx}
                variants={letterVariants}
                whileHover={{
                  y: -6,
                  color: '#FD7D3C',
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
              className="inline-block text-[#FD7D3C] cursor-pointer select-none ml-1 sm:ml-2"
            >
              .
            </motion.span>
          </motion.h2>
        </div>

        {/* Bottom Accreditation & Legal Bar */}
        <div className="pt-6 border-t border-[#2C2C30] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs sm:text-sm text-[#9E9D98]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-[#FD7D3C] shrink-0" />
            <span className="uppercase tracking-wider font-medium">
              Government of India MSME Registered Enterprise
            </span>
          </div>

          <div className="flex items-center gap-4 uppercase tracking-wider font-medium">
            <span>© {new Date().getFullYear()} RIWA CREATIVES. ALL RIGHTS RESERVED. · MADE WITH INTENTION.</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <RegionalHubModal
        type={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
};
