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
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
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
      <footer className="relative w-full pt-12 md:pt-16 pb-28 md:pb-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {/* Studio Brand Bar */}
        <div className="pb-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/brand/riwa-logo-official.png"
              alt="Riwa Creatives Official Logo"
              className="h-16 sm:h-20 w-auto object-contain"
            />
            <div>
              <span className="font-display text-lg sm:text-xl font-black uppercase text-white tracking-tight block">
                RIWA CREATIVES®
              </span>
              <span className="font-mono text-xs text-white/60 block">
                MAKING UNREASONABLE BRANDS HAPPEN<span className="text-[#EA1E4D]">.</span>
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="self-start sm:self-auto font-mono text-xs sm:text-sm text-white/60 hover:text-white uppercase tracking-wider font-bold cursor-pointer"
          >
            [ Back To Top ↑ ]
          </button>
        </div>

        {/* 4 Information Groups: STUDIO · CAPABILITIES · CONNECT · INFORMATION */}
        <div className="py-10 md:py-14 border-b border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8 font-mono text-xs sm:text-sm">
          {/* Group 01: STUDIO */}
          <div className="space-y-3">
            <span className="text-white/45 uppercase tracking-widest text-[11px] font-bold block">
              STUDIO
            </span>
            <ul className="space-y-2 text-white">
              <li><Link to="/" className="hover:text-[#EA1E4D] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#EA1E4D] transition-colors">About Riwa</Link></li>
              <li><Link to="/leadership" className="hover:text-[#EA1E4D] transition-colors">Leadership</Link></li>
              <li><a href="/#process" className="hover:text-[#EA1E4D] transition-colors">Our Process</a></li>
            </ul>
          </div>

          {/* Group 02: CAPABILITIES */}
          <div className="space-y-3">
            <span className="text-white/45 uppercase tracking-widest text-[11px] font-bold block">
              CAPABILITIES
            </span>
            <ul className="space-y-2 text-white">
              <li><Link to="/services/brand-identity" className="hover:text-[#EA1E4D] transition-colors">Brand &amp; Identity</Link></li>
              <li><Link to="/services/commercial-advertising" className="hover:text-[#EA1E4D] transition-colors">Commercial Creative</Link></li>
              <li><Link to="/services/digital-growth" className="hover:text-[#EA1E4D] transition-colors">Digital &amp; Growth</Link></li>
              <li><Link to="/services/technology-experiences" className="hover:text-[#EA1E4D] transition-colors">Technology &amp; Web</Link></li>
              <li><Link to="/services/events-experiences" className="hover:text-[#FD7D3C] transition-colors">Events &amp; Activations</Link></li>
            </ul>
          </div>

          {/* Group 03: CONNECT */}
          <div className="space-y-3">
            <span className="text-white/45 uppercase tracking-widest text-[11px] font-bold block">
              CONNECT
            </span>
            <ul className="space-y-2 text-white">
              <li>
                <Link to="/contact" className="text-[#EA1E4D] font-bold hover:underline inline-flex items-center gap-1">
                  <span>Start a Project</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
              <li>
                <a href="mailto:riwacreatives@gmail.com" className="hover:text-[#EA1E4D] transition-colors break-all">
                  riwacreatives@gmail.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/madebyriwa" target="_blank" rel="noopener noreferrer" className="hover:text-[#EA1E4D] transition-colors">
                  Instagram · @madebyriwa
                </a>
              </li>
              <li>
                <a href="https://wa.me/917015048144" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  WhatsApp · +91 70150 48144
                </a>
              </li>
            </ul>
          </div>

          {/* Group 04: INFORMATION */}
          <div className="space-y-3">
            <span className="text-white/45 uppercase tracking-widest text-[11px] font-bold block">
              INFORMATION
            </span>
            <ul className="space-y-2 text-white">
              <li><Link to="/work" className="hover:text-[#EA1E4D] transition-colors">The Creative Archive</Link></li>
              <li><a href="/#faq" className="hover:text-[#EA1E4D] transition-colors">Studio FAQs</a></li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('careers')}
                  className="hover:text-[#EA1E4D] transition-colors text-left cursor-pointer"
                >
                  Careers · Founder&apos;s Office
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('brand-dalal')}
                  className="hover:text-[#FD7D3C] transition-colors text-left cursor-pointer"
                >
                  Brand Dalal Division
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Monumental "RIWA." Wordmark */}
        <div
          ref={logoSectionRef}
          className="group relative py-12 sm:py-20 select-none overflow-visible flex items-end justify-center"
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
