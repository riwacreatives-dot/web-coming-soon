import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { CategoryPills } from './CategoryPills';
import { BudgetTiers, BUDGET_TIERS } from './BudgetTiers';
import { ResponsiveModalShell } from '../common/ResponsiveModalShell';
import { ArrowUpRight, CheckCircle2, Mail, Send } from 'lucide-react';

interface IntakeSectionProps {
  standalone?: boolean;
}

const headlineVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const lineRevealVariants: Variants = {
  hidden: {
    y: '105%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const iconicWordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.15,
    },
  },
};

const dotPopVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 450,
      damping: 16,
      delay: 0.28,
    },
  },
};

export const IntakeSection: React.FC<IntakeSectionProps> = ({ standalone = false }) => {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    'Commercial Poster Art',
    'Paid Performance Media',
  ]);
  const [selectedBudget, setSelectedBudget] = useState<string>(BUDGET_TIERS[1]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandOrWebsite: '',
    projectVision: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setIsSubmitting(true);

    // Build structured email body
    const subject = encodeURIComponent(`Growth Sprint Brief — ${formData.name}`);
    const body = encodeURIComponent(
      `NEW GROWTH BRIEF RECEIVED\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Brand / Website: ${formData.brandOrWebsite || 'Not provided'}\n\n` +
      `Selected Disciplines: ${selectedDisciplines.join(', ')}\n` +
      `Budget Tier: ${selectedBudget}\n\n` +
      `Project Vision:\n${formData.projectVision || 'Not provided'}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Submitted via riwacreatives.vercel.app\n` +
      `Timestamp: ${new Date().toISOString()}`
    );

    // Try Web3Forms API first (free, no backend needed)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY', // User needs to replace this
          name: formData.name,
          email: formData.email,
          subject: `Growth Sprint Brief — ${formData.name}`,
          message: `Disciplines: ${selectedDisciplines.join(', ')}\nBudget: ${selectedBudget}\nBrand: ${formData.brandOrWebsite}\n\nVision:\n${formData.projectVision}`,
          from_name: 'RIWA Website',
          to: 'riwacreatives@gmail.com',
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        return;
      }
    } catch {
      // Web3Forms failed, fall through to mailto
    }

    // Fallback: open mailto with structured data
    window.location.href = `mailto:riwacreatives@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className={`relative w-full ${
        standalone
          ? 'pt-24 sm:pt-32 md:pt-36 pb-14 sm:pb-28 md:pb-32'
          : 'py-14 sm:py-28 md:py-32 border-t border-line-border'
      } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
    >
      {/* Header Eyebrow */}
      <div className="flex items-center gap-3 mb-10 font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-text-secondary font-semibold select-none">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
        <span className="text-text-primary font-semibold">
          {standalone ? '06 / INTAKE & PARTNERSHIP INQUIRIES' : '06 / INTAKE & PARTNERSHIP INQUIRIES'}
        </span>
        <span className="text-line-border">|</span>
        <span className="text-brand-red font-bold">SENIOR FOUNDER DESK</span>
      </div>

      {/* Top Hero Section: Headline & Editorial Statement with Masked Stagger Animation */}
      <div className="max-w-4xl mb-12 sm:mb-16">
        <motion.div
          variants={headlineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          data-no-spotlight="true"
        >
          {standalone ? (
            <h1 className="font-display text-[clamp(2.1rem,6.2vw,5.25rem)] lg:text-[clamp(2.4rem,5.8vw,5.75rem)] font-black uppercase tracking-tight text-text-primary leading-[0.98] select-none mb-6">
              {/* Line 1: LET'S BUILD */}
              <span className="block overflow-hidden pb-1 -mb-1">
                <motion.span
                  variants={lineRevealVariants}
                  className="block whitespace-nowrap"
                >
                  LET'S BUILD
                </motion.span>
              </span>

              {/* Line 2: SOMETHING iconic. */}
              <span className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3.5 mt-1 sm:mt-2">
                <span className="overflow-hidden pb-1 -mb-1">
                  <motion.span
                    variants={lineRevealVariants}
                    className="inline-block"
                  >
                    SOMETHING
                  </motion.span>
                </span>{' '}
                <motion.span
                  variants={iconicWordVariants}
                  whileHover={{
                    scale: 1.05,
                    textShadow: '0 0 32px rgba(255, 42, 85, 0.65)',
                    transition: { duration: 0.2 },
                  }}
                  className="inline-block font-serif italic font-normal tracking-normal text-brand-red text-[1.12em] lowercase select-none cursor-pointer transition-colors"
                >
                  iconic
                </motion.span>
                <motion.span
                  variants={dotPopVariants}
                  whileHover={{
                    rotate: 45,
                    scale: 1.3,
                  }}
                  className="inline-block text-brand-red font-black cursor-pointer select-none"
                >
                  .
                </motion.span>
              </span>
            </h1>
          ) : (
            <h2 className="font-display text-[clamp(2rem,6vw,5rem)] lg:text-[clamp(2.25rem,5.5vw,5.5rem)] font-black uppercase tracking-tight text-text-primary leading-[0.98] select-none mb-6">
              {/* Line 1: LET'S BUILD */}
              <span className="block overflow-hidden pb-1 -mb-1">
                <motion.span
                  variants={lineRevealVariants}
                  className="block whitespace-nowrap"
                >
                  LET'S BUILD
                </motion.span>
              </span>

              {/* Line 2: SOMETHING iconic. */}
              <span className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3.5 mt-1 sm:mt-2">
                <span className="overflow-hidden pb-1 -mb-1">
                  <motion.span
                    variants={lineRevealVariants}
                    className="inline-block"
                  >
                    SOMETHING
                  </motion.span>
                </span>{' '}
                <motion.span
                  variants={iconicWordVariants}
                  whileHover={{
                    scale: 1.05,
                    textShadow: '0 0 32px rgba(255, 42, 85, 0.65)',
                    transition: { duration: 0.2 },
                  }}
                  className="inline-block font-serif italic font-normal tracking-normal text-brand-red text-[1.12em] lowercase select-none cursor-pointer transition-colors"
                >
                  iconic
                </motion.span>
                <motion.span
                  variants={dotPopVariants}
                  whileHover={{
                    rotate: 45,
                    scale: 1.3,
                  }}
                  className="inline-block text-brand-red font-black cursor-pointer select-none"
                >
                  .
                </motion.span>
              </span>
            </h2>
          )}
        </motion.div>

        <p className="font-mono text-sm sm:text-base text-text-secondary max-w-3xl leading-relaxed">
          "<span className="text-brand-red font-bold">Drop it, we'll build it.</span>" Whether you require{' '}
          <span className="text-brand-red font-bold">museum-grade commercial artwork</span>, a multi-channel acquisition engine, or a full{' '}
          <span className="text-brand-red font-bold">90-day scaling sprint</span>—brief our founding partner desk directly<span className="text-brand-red font-bold">.</span> We operate with founder-led precision and zero junior handoffs<span className="text-brand-red font-bold">.</span>
        </p>

        {/* Direct Channels Quick Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-line-border font-mono text-xs sm:text-sm">
          <div className="p-3.5 sm:p-4 rounded-xl border border-line-border bg-surface/30">
            <span className="text-xs uppercase text-brand-red tracking-widest font-bold block mb-1">
              ✦ Senior Founder Desk
            </span>
            <a
              href="mailto:riwacreatives@gmail.com"
              className="font-bold text-text-primary hover:text-brand-red flex items-center gap-1.5 transition-colors text-xs sm:text-sm"
            >
              <Mail size={14} className="text-brand-red shrink-0" />
              <span>riwacreatives@gmail.com</span>
            </a>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl border border-line-border bg-surface/30">
            <span className="text-xs uppercase text-brand-red tracking-widest font-bold block mb-1">
              ✦ Instagram Direct Line
            </span>
            <a
              href="https://instagram.com/madebyriwa"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-text-primary hover:text-brand-red flex items-center gap-1.5 transition-colors text-xs sm:text-sm"
            >
              <span>@madebyriwa</span>
              <ArrowUpRight size={14} className="text-brand-red shrink-0" />
            </a>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl border border-line-border bg-surface/30">
            <span className="text-xs uppercase text-brand-red tracking-widest font-bold block mb-1">
              ✦ Response Velocity
            </span>
            <span className="font-bold text-text-primary block text-xs sm:text-sm">
              &lt; 12 Hours Guaranteed<span className="text-brand-red font-bold">.</span>
            </span>
          </div>
        </div>
      </div>

      {/* Form Shifted Below: Full-Width RIWA Interactive Form */}
      <div className="w-full max-w-4xl">
        <form
          onSubmit={handleSubmit}
          className="p-5 sm:p-12 rounded-2xl border border-line-border bg-surface/30 backdrop-blur-sm space-y-7 sm:space-y-10 shadow-xl"
        >
          {/* Section 01: Category Scope */}
          <CategoryPills
            selected={selectedDisciplines}
            onChange={setSelectedDisciplines}
          />

          {/* Section 02: Budget Tiers (Rupees Only) */}
          <BudgetTiers
            selected={selectedBudget}
            onChange={setSelectedBudget}
          />

          {/* Section 03 - 06: Underlined Minimalist Text Inputs */}
          <div className="space-y-6 sm:space-y-8 font-mono text-xs sm:text-sm">
            <div>
              <label className="text-xs sm:text-sm uppercase tracking-wider text-text-secondary block mb-2 font-bold">
                03 / Your Name & Title *
              </label>
              <input
                type="text"
                required
                autoComplete="name"
                autoCapitalize="words"
                enterKeyHint="next"
                placeholder="e.g. Alex Vance, Founder & CEO"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-line-border py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-brand-red focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm uppercase tracking-wider text-text-secondary block mb-2 font-bold">
                04 / Work Email *
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                enterKeyHint="next"
                placeholder="e.g. alex@hyperbrand.io"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-line-border py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-brand-red focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm uppercase tracking-wider text-text-secondary block mb-2 font-bold">
                05 / Brand / Website / Social Handle
              </label>
              <input
                type="text"
                autoComplete="organization"
                enterKeyHint="next"
                placeholder="e.g. solanas.in or @solanas"
                value={formData.brandOrWebsite}
                onChange={(e) => setFormData({ ...formData, brandOrWebsite: e.target.value })}
                className="w-full bg-transparent border-b border-line-border py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-brand-red focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm uppercase tracking-wider text-text-secondary block mb-2 font-bold">
                06 / Project Vision, Bottlenecks & Revenue Targets
              </label>
              <textarea
                rows={3}
                enterKeyHint="done"
                placeholder="Tell us what you want to achieve (current ROAS, target ₹ revenue, poster art direction)..."
                value={formData.projectVision}
                onChange={(e) => setFormData({ ...formData, projectVision: e.target.value })}
                className="w-full bg-transparent border-b border-line-border py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-brand-red focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>

          {/* Submission Button */}
          <div className="pt-2 sm:pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              data-cursor-text="SUBMIT"
              className="w-full sm:w-auto min-h-[50px] inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-red text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-widest hover:brightness-110 shadow-xl shadow-brand-red/25 transition-all cursor-pointer disabled:opacity-50 touch-manipulation"
            >
              {isSubmitting ? (
                <span>Dispatching Brief...</span>
              ) : (
                <>
                  <Send size={15} />
                  <span>Submit Growth Brief ✦</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Confirmation Modal (Desktop Lightbox / Mobile Swipe Bottom Sheet) */}
      <ResponsiveModalShell
        isOpen={isSubmitted}
        onClose={() => setIsSubmitted(false)}
        maxWidthClass="max-w-lg"
        zIndexClass="z-[130]"
        panelClassName="border border-brand-red/40 bg-[#0A0C10] text-white"
        mobileFooter={
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="w-full min-h-[46px] px-6 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-wider touch-manipulation"
          >
            Return to Studio
          </button>
        }
      >
        <div className="p-6 sm:p-10 font-mono text-center space-y-6">
          <div className="mx-auto w-12 h-12 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center text-brand-red">
            <CheckCircle2 size={24} />
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-red font-bold block mb-1">
              ✦ Protocol Initiated
            </span>
            <h3 className="font-display text-3xl font-extrabold uppercase text-white">
              Brief Received<span className="text-brand-red font-black">.</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
              Thank you, <span className="text-white font-bold">{formData.name}</span><span className="text-brand-red font-bold">.</span> Our founder desk has received your brief for{' '}
              <span className="text-brand-red font-bold">{selectedDisciplines.join(', ')}</span><span className="text-brand-red font-bold">.</span>
            </p>
            <p className="text-xs text-white/60 mt-2">
              Abhinav Singh &amp; the senior team will review your brand brief and reach out within 12 hours<span className="text-brand-red font-bold">.</span>
            </p>
          </div>

          <div className="hidden md:block pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-brand-red hover:text-white transition-all cursor-pointer"
            >
              Return to Studio
            </button>
          </div>
        </div>
      </ResponsiveModalShell>
    </section>
  );
};
