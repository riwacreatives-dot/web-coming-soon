import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, type Variants, type Transition } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
  CONTACT_CONFIG,
  LOCKED_CAPABILITIES,
  STUDIO_IDENTITY,
} from '../../data/studioData';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const LETTERS = ['R', 'I', 'W', 'A'];

const logoContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const dotVariants: Variants = {
  hidden: { opacity: 0, scale: 0.3, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] },
  },
};

const letterHoverTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 25,
};

export const EditorialFooter: React.FC = () => {
  const reduced = useReducedMotion();
  const logoSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: logoSectionRef,
    offset: ['start end', 'end end'],
  });

  const logoScaleY = useTransform(scrollYProgress, [0, 1], [reduced ? 1 : 0.8, 1]);
  const logoLetterSpacing = useTransform(
    scrollYProgress,
    [0, 1],
    [reduced ? '-0.03em' : '-0.06em', '-0.02em']
  );

  const hasExternalDirectChannels = Boolean(
    CONTACT_CONFIG.publicEmail ||
      CONTACT_CONFIG.publicWhatsappUrl ||
      CONTACT_CONFIG.instagramUrl ||
      CONTACT_CONFIG.linkedinUrl
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <div className="w-full bg-[#111116] text-white border-t border-white/10 overflow-x-clip">
      <footer
        aria-labelledby="footer-brand-heading"
        className="relative w-full pt-12 md:pt-16 pb-12 md:pb-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        {/* Top Studio Identity Row */}
        <div className="pb-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/brand/riwa-logo-official.png"
              alt="Riwa Creatives Official Logo"
              className="h-14 sm:h-16 w-auto object-contain"
            />

            <div>
              <h2
                id="footer-brand-heading"
                className="font-display text-lg sm:text-xl font-extrabold uppercase text-white tracking-tight"
              >
                {STUDIO_IDENTITY.name}
              </h2>
              <span className="font-mono text-xs text-[#B4B4BE] block">
                {STUDIO_IDENTITY.descriptor}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="self-start sm:self-auto min-h-[44px] px-4 py-2 rounded-full border border-white/15 font-mono text-xs text-[#B4B4BE] hover:text-white hover:border-white/40 uppercase tracking-wider font-bold cursor-pointer transition-colors"
          >
            [ Back To Top ↑ ]
          </button>
        </div>

        {/* Navigation & Capabilities Columns */}
        <div
          className={`py-10 md:py-14 border-b border-white/10 grid gap-8 font-mono text-xs sm:text-sm ${
            hasExternalDirectChannels ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {/* Studio Navigation */}
          <nav aria-label="Footer Studio Links" className="space-y-3">
            <span className="text-[#B4B4BE] uppercase tracking-widest text-[11px] font-bold block">
              STUDIO
            </span>
            <ul className="space-y-1.5 text-white">
              <li>
                <Link to="/" className="inline-flex items-center min-h-[36px] hover:text-[#FD7D3C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" className="inline-flex items-center min-h-[36px] hover:text-[#FD7D3C] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="inline-flex items-center min-h-[36px] hover:text-[#FD7D3C] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-flex items-center min-h-[36px] hover:text-[#FD7D3C] transition-colors">
                  About Riwa
                </Link>
              </li>
              <li>
                <Link to="/about#process" className="inline-flex items-center min-h-[36px] hover:text-[#FD7D3C] transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/contact#faq" className="inline-flex items-center min-h-[36px] hover:text-[#FD7D3C] transition-colors">
                  Studio FAQs
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="inline-flex items-center min-h-[36px] hover:text-[#FD7D3C] transition-colors">
                  Leadership
                </Link>
              </li>
            </ul>
          </nav>

          {/* Five Confirmed Capabilities */}
          <nav aria-label="Capabilities Navigation" className="space-y-3">
            <span className="text-[#B4B4BE] uppercase tracking-widest text-[11px] font-bold block">
              CAPABILITIES
            </span>
            <ul className="space-y-1.5 text-white">
              {LOCKED_CAPABILITIES.map((cap) => (
                <li key={cap.id}>
                  <Link
                    to={`/services/${cap.id}`}
                    className="inline-flex items-center min-h-[36px] hover:text-[#FD7D3C] transition-colors"
                  >
                    {cap.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Conditional Verified Direct Channels */}
          {hasExternalDirectChannels && (
            <div className="space-y-3">
              <span className="text-[#B4B4BE] uppercase tracking-widest text-[11px] font-bold block">
                CONNECT
              </span>
              <ul className="space-y-2 text-white">
                {CONTACT_CONFIG.publicEmail && (
                  <li>
                    <a
                      href={`mailto:${CONTACT_CONFIG.publicEmail}`}
                      className="hover:text-[#FD7D3C] transition-colors break-all"
                    >
                      {CONTACT_CONFIG.publicEmail}
                    </a>
                  </li>
                )}
                {CONTACT_CONFIG.instagramUrl && (
                  <li>
                    <a
                      href={CONTACT_CONFIG.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FD7D3C] transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                )}
                {CONTACT_CONFIG.publicWhatsappUrl && (
                  <li>
                    <a
                      href={CONTACT_CONFIG.publicWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FD7D3C] transition-colors"
                    >
                      WhatsApp
                    </a>
                  </li>
                )}
                {CONTACT_CONFIG.linkedinUrl && (
                  <li>
                    <a
                      href={CONTACT_CONFIG.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FD7D3C] transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Direct Project Enquiry */}
          <div className="space-y-4">
            <span className="text-[#B4B4BE] uppercase tracking-widest text-[11px] font-bold block">
              START A PROJECT
            </span>
            <p className="font-sans text-sm text-[#B4B4BE] leading-relaxed">
              Have a brand, campaign, digital build, or live event in mind?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FD7D3C] text-[#111116] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
            >
              <span>Open Project Brief</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Original Monumental Interactive "RIWA." Wordmark */}
        <div
          ref={logoSectionRef}
          aria-hidden="true"
          className="group relative py-10 sm:py-16 select-none overflow-hidden flex items-end justify-center"
        >
          <motion.div
            data-no-spotlight="true"
            variants={logoContainerVariants}
            initial={reduced ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              scaleY: logoScaleY,
              letterSpacing: logoLetterSpacing,
              transformOrigin: 'bottom center',
            }}
            className="w-full font-display text-[clamp(2.75rem,13.5vw,12.5rem)] font-extrabold uppercase text-white leading-[0.85] tracking-tight whitespace-nowrap text-center flex items-baseline justify-center select-none"
          >
            {LETTERS.map((char, idx) => (
              <motion.span
                key={idx}
                variants={letterVariants}
                whileHover={reduced ? undefined : { y: -6, color: '#EA1E4D' }}
                transition={letterHoverTransition}
                className="inline-block transition-colors duration-200"
              >
                {char}
              </motion.span>
            ))}

            <motion.span
              variants={dotVariants}
              whileHover={reduced ? undefined : { scale: 1.25, rotate: 45 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="inline-block text-[#EA1E4D] ml-1 sm:ml-2"
            >
              .
            </motion.span>
          </motion.div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#B4B4BE]">
          <span>
            © {new Date().getFullYear()} {STUDIO_IDENTITY.name}. All rights reserved.
          </span>
          <span>
            Independent Creative &amp; Growth Studio
            {CONTACT_CONFIG.city ? ` · ${CONTACT_CONFIG.city}` : ''}
          </span>
        </div>
      </footer>
    </div>
  );
};
