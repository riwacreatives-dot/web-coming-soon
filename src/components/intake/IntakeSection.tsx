import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CategoryPills } from './CategoryPills';
import { BudgetTiers, BUDGET_TIERS } from './BudgetTiers';
import { ResponsiveModalShell } from '../common/ResponsiveModalShell';
import { ArrowUpRight, Check, Copy, Mail, Send, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG, FOUNDER_PRINCIPAL } from '../../data/studioData';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface IntakeSectionProps {
  standalone?: boolean;
}

interface CommissionType {
  id: 'brand' | 'campaign' | 'digital' | 'event' | 'other';
  code: string;
  label: string;
  subline: string;
  defaultDisciplines: string[];
  visionPlaceholder: string;
  extraFieldLabel?: string;
  extraFieldPlaceholder?: string;
}

const COMMISSION_TYPES: CommissionType[] = [
  {
    id: 'brand',
    code: '01',
    label: 'A BRAND',
    subline: 'Identity, naming, visual systems & packaging',
    defaultDisciplines: ['Brand & Identity'],
    visionPlaceholder: 'Tell us about your company stage, brand personality, and what should set you apart...',
    extraFieldLabel: 'Brand Scope / Stage',
    extraFieldPlaceholder: 'e.g. New launch, full rebrand, visual guidelines',
  },
  {
    id: 'campaign',
    code: '02',
    label: 'A CAMPAIGN',
    subline: 'Commercial key visuals, reels & paid growth sprints',
    defaultDisciplines: ['Commercial Creative & Advertising', 'Digital Marketing & Growth'],
    visionPlaceholder: 'What are we launching or selling? Share campaign timeline, channels, and key creative goals...',
    extraFieldLabel: 'Primary Channels / Media',
    extraFieldPlaceholder: 'e.g. Instagram reels, Meta ads, print posters, OOH',
  },
  {
    id: 'digital',
    code: '03',
    label: 'A DIGITAL EXPERIENCE',
    subline: 'Interactive websites, web apps & creative technology',
    defaultDisciplines: ['Website & Technology'],
    visionPlaceholder: 'Describe the website or digital product experience, interactive goals, and target launch window...',
    extraFieldLabel: 'Target Launch / Current URL',
    extraFieldPlaceholder: 'e.g. Target 4 weeks, current site example.com',
  },
  {
    id: 'event',
    code: '04',
    label: 'AN EVENT',
    subline: 'Hackathons, MUNs, festivals, stage & registration systems',
    defaultDisciplines: ['Events & Experiences', 'Content & Production'],
    visionPlaceholder: 'Share your event concept, expected crowd/delegate size, sponsorship targets, and venue/dates...',
    extraFieldLabel: 'Event Format & Expected Scale',
    extraFieldPlaceholder: 'e.g. 1,000+ builder Hackathon / MUN / College Fest (Dates & City)',
  },
  {
    id: 'other',
    code: '05',
    label: 'SOMETHING ELSE',
    subline: 'Hybrid sprint, advisory, or unreasonable collaboration',
    defaultDisciplines: ['Something else'],
    visionPlaceholder: "Don't worry about fitting a template—describe what you're building or imagining...",
  },
];

export const IntakeSection: React.FC<IntakeSectionProps> = ({ standalone = false }) => {
  const [searchParams] = useSearchParams();
  const reduced = useReducedMotion();
  const initialTypeParam = searchParams.get('type') || searchParams.get('service');

  const resolveCategoryId = (param: string | null): CommissionType['id'] | null => {
    if (!param) return null;
    if (param === 'brand-identity') return 'brand';
    if (param === 'creative-advertising') return 'campaign';
    if (param === 'digital-technology') return 'digital';
    if (param === 'events-experiences') return 'event';
    if (param === 'brand-management-growth') return 'other';
    const matched = COMMISSION_TYPES.find((t) => t.id === param);
    return matched ? matched.id : null;
  };

  const [selectedTypeId, setSelectedTypeId] = useState<CommissionType['id'] | null>(() => {
    return resolveCategoryId(initialTypeParam) || 'brand';
  });

  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    'Brand & Identity',
  ]);
  const [selectedBudget, setSelectedBudget] = useState<string>(BUDGET_TIERS[1]);
  const [extraDetail, setExtraDetail] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandOrWebsite: '',
    projectVision: '',
  });

  const [isSubmittedModalOpen, setIsSubmittedModalOpen] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [formattedBriefText, setFormattedBriefText] = useState('');

  useEffect(() => {
    const resolvedId = resolveCategoryId(initialTypeParam);
    const matched = COMMISSION_TYPES.find((t) => t.id === resolvedId);
    if (matched) {
      setSelectedTypeId(matched.id);
      setSelectedDisciplines(matched.defaultDisciplines);
    }
  }, [initialTypeParam]);

  const activeCommission =
    COMMISSION_TYPES.find((t) => t.id === selectedTypeId) || COMMISSION_TYPES[0];

  const handleSelectCommission = (type: CommissionType) => {
    setSelectedTypeId(type.id);
    setSelectedDisciplines(type.defaultDisciplines);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    const briefPlain =
      `NEW COMMISSION BRIEF — ${activeCommission.code} (${activeCommission.label})\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Name & Title: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Brand / Org / Handle: ${formData.brandOrWebsite || 'Not provided'}\n` +
      (extraDetail ? `${activeCommission.extraFieldLabel}: ${extraDetail}\n` : '') +
      `Selected Disciplines: ${selectedDisciplines.join(', ')}\n` +
      `Approximate Budget: ${selectedBudget}\n\n` +
      `Project Brief:\n${formData.projectVision || 'Not provided'}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Prepared via riwacreatives.in · ${new Date().toLocaleDateString()}`;

    setFormattedBriefText(briefPlain);

    const subject = encodeURIComponent(
      `Riwa Commission Brief [${activeCommission.label}] — ${formData.name}`
    );
    const body = encodeURIComponent(briefPlain);

    // Trigger user's default mail client cleanly using preserved handler target
    window.location.href = `mailto:${CONTACT_CONFIG.clientSideMailtoHandlerEmail}?subject=${subject}&body=${body}`;
    setIsSubmittedModalOpen(true);
  };

  const handleCopyBrief = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard && formattedBriefText) {
      navigator.clipboard.writeText(formattedBriefText).catch(() => {});
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    }
  };

  const isEventSelected = activeCommission.id === 'event';
  const accentColor = isEventSelected ? '#FD7D3C' : '#EA1E4D';

  return (
    <section
      id="contact"
      className={`relative w-full ${
        standalone
          ? 'pt-28 sm:pt-36 pb-16 sm:pb-28'
          : 'py-16 sm:py-28 border-t border-line-border'
      } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
    >
      {/* Top Studio Eyebrow */}
      <motion.div
        initial={reduced ? false : 'hidden'}
        animate="visible"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -12 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: STUDIO_EASE } },
          }}
          className="flex flex-wrap items-center gap-3 mb-8 font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-text-secondary font-semibold select-none"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#EA1E4D]" />
          <span className="text-text-primary font-bold">01 — COMMISSION A PROJECT</span>
          <span className="text-line-border">|</span>
          <span style={{ color: accentColor }} className="font-bold">
            DIRECT FOUNDER DESK · RANJAN KUMAR
          </span>
        </motion.div>

        {/* Main Prompt Headline */}
        <div className="max-w-5xl mb-10 sm:mb-14">
          <h1 className="font-display text-[clamp(2.35rem,7vw,5.4rem)] font-black uppercase tracking-tighter text-text-primary leading-[0.94] mb-5">
            <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em] px-1 -mx-1">
              <motion.span
                variants={{
                  hidden: { y: '108%', opacity: 0 },
                  visible: { y: '0%', opacity: 1, transition: { duration: 0.72, delay: 0.05, ease: STUDIO_EASE } },
                }}
                className="block"
              >
                <span>WHAT ARE WE</span>{' '}
                <span
                  style={{ color: accentColor }}
                  className="font-serif italic font-normal tracking-normal lowercase text-[1.12em]"
                >
                  making
                </span>{' '}
                <span>TODAY</span>
                <span style={{ color: accentColor }}>?</span>
              </motion.span>
            </span>
          </h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.16, ease: STUDIO_EASE } },
            }}
            className="font-sans text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed"
          >
            Select what you are building below to configure and launch your studio commission brief
            {CONTACT_CONFIG.publicEmail ? (
              <>
                {' '}
                or write directly to{' '}
                <a
                  href={`mailto:${CONTACT_CONFIG.publicEmail}`}
                  className="text-text-primary font-bold underline decoration-[#EA1E4D]"
                >
                  {CONTACT_CONFIG.publicEmail}
                </a>
              </>
            ) : (
              '. Your brief opens directly in your email client or can be copied cleanly in one click'
            )}
            .
          </motion.p>
        </div>

        {/* STEP 01: Interactive Project Commissioning Categories */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary font-bold block mb-4">
            01 / CHOOSE YOUR COMMISSION CATEGORY
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {COMMISSION_TYPES.map((type, idx) => {
              const isSelected = activeCommission.id === type.id;
              const activeBg = type.id === 'event' ? 'bg-[#FD7D3C] text-[#111116]' : 'bg-[#EA1E4D] text-white';
              return (
                <motion.button
                  key={type.id}
                  type="button"
                  onClick={() => handleSelectCommission(type)}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: 0.12 + idx * 0.05, ease: STUDIO_EASE },
                    },
                  }}
                  whileTap={reduced ? undefined : { scale: 0.98 }}
                  className={`p-5 text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[132px] ${
                    isSelected
                      ? `${activeBg} border-transparent shadow-lg -translate-y-0.5`
                      : 'bg-surface/40 border-line-border text-text-primary hover:border-text-primary/50 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs font-bold mb-3">
                    <span>{type.code} —</span>
                    <ArrowUpRight size={14} className={isSelected ? 'opacity-100' : 'opacity-40'} />
                  </div>

                  <div>
                    <span className="font-display text-base sm:text-lg font-black uppercase tracking-tight block leading-tight mb-1">
                      {type.label}
                    </span>
                    <span
                      className={`font-sans text-xs block leading-snug ${
                        isSelected
                          ? type.id === 'event'
                            ? 'text-[#111116]/85 font-medium'
                            : 'text-white/90'
                          : 'text-text-secondary'
                      }`}
                    >
                      {type.subline}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* STEP 02: Dynamic Contextual Enquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.form
              key={activeCommission.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 border border-line-border bg-surface/40 backdrop-blur-sm space-y-8 shadow-xl"
            >
              <div className="pb-4 border-b border-line-border flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                <span style={{ color: accentColor }} className="font-bold uppercase tracking-widest flex items-center gap-2">
                  <Sparkles size={13} />
                  COMMISSIONING: {activeCommission.code} — {activeCommission.label}
                </span>
                <span className="text-text-secondary">TAILORED BRIEF FIELDS</span>
              </div>

              {/* Discipline Multi-Select */}
              <CategoryPills
                selected={selectedDisciplines}
                onChange={setSelectedDisciplines}
              />

              {/* Budget Tiers */}
              <BudgetTiers
                selected={selectedBudget}
                onChange={setSelectedBudget}
              />

              {/* Dynamic Context Field Based on Category */}
              {activeCommission.extraFieldLabel && (
                <div className="font-mono text-xs sm:text-sm">
                  <label className="text-xs sm:text-sm uppercase tracking-wider text-text-secondary block mb-2 font-bold">
                    {activeCommission.extraFieldLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={activeCommission.extraFieldPlaceholder}
                    value={extraDetail}
                    onChange={(e) => setExtraDetail(e.target.value)}
                    className="w-full bg-transparent border-b border-line-border py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-[#EA1E4D] focus:outline-none transition-colors"
                  />
                </div>
              )}

              {/* Standard Identity & Vision Fields */}
              <div className="space-y-6 font-mono text-xs sm:text-sm">
                <div>
                  <label className="text-xs sm:text-sm uppercase tracking-wider text-text-secondary block mb-2 font-bold">
                    04 / Your Name &amp; Role *
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g. Priya Sharma, Founder"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-line-border py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-[#EA1E4D] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm uppercase tracking-wider text-text-secondary block mb-2 font-bold">
                    05 / Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    placeholder="e.g. priya@company.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-line-border py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-[#EA1E4D] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm uppercase tracking-wider text-text-secondary block mb-2 font-bold">
                    06 / Brand, Event Name or Social Handle
                  </label>
                  <input
                    type="text"
                    autoComplete="organization"
                    placeholder="e.g. Studio Name, @brandhandle, or company.in"
                    value={formData.brandOrWebsite}
                    onChange={(e) => setFormData({ ...formData, brandOrWebsite: e.target.value })}
                    className="w-full bg-transparent border-b border-line-border py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-[#EA1E4D] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm uppercase tracking-wider text-text-secondary block mb-2 font-bold">
                    07 / What Are We Making Together?
                  </label>
                  <textarea
                    rows={3}
                    placeholder={activeCommission.visionPlaceholder}
                    value={formData.projectVision}
                    onChange={(e) => setFormData({ ...formData, projectVision: e.target.value })}
                    className="w-full bg-transparent border-b border-line-border py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-[#EA1E4D] focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  style={{ backgroundColor: accentColor }}
                  className={`w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-widest hover:brightness-110 shadow-xl transition-all cursor-pointer touch-manipulation ${
                    isEventSelected ? 'text-[#111116]' : 'text-white'
                  }`}
                >
                  <Send size={15} />
                  <span>Prepare &amp; Send Commission Brief ↗</span>
                </button>
              </div>
            </motion.form>
          </AnimatePresence>
        </div>

        {/* Right Column: Verified Studio Guidance & Conditional Direct Channels */}
        <div className="lg:col-span-4 space-y-4 font-mono">
          <div className="p-6 border border-line-border bg-surface/40 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C4123D] dark:text-[#FD7D3C] font-bold block">
              ✦ Studio Project Desk
            </span>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              Every project enquiry goes directly to founder {FOUNDER_PRINCIPAL.name}. Use the brief configurator to launch your email app or copy your formatted summary cleanly.
            </p>

            {(CONTACT_CONFIG.publicEmail ||
              CONTACT_CONFIG.instagramUrl ||
              CONTACT_CONFIG.publicWhatsappUrl ||
              CONTACT_CONFIG.linkedinUrl) && (
              <div className="space-y-3 pt-2 border-t border-line-border text-xs">
                {CONTACT_CONFIG.publicEmail && (
                  <a
                    href={`mailto:${CONTACT_CONFIG.publicEmail}`}
                    className="flex items-center justify-between py-2 text-text-primary hover:text-[#EA1E4D] font-bold transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Mail size={14} className="text-[#EA1E4D]" aria-hidden="true" />
                      {CONTACT_CONFIG.publicEmail}
                    </span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
                {CONTACT_CONFIG.instagramUrl && (
                  <a
                    href={CONTACT_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 text-text-primary hover:text-[#EA1E4D] font-bold border-t border-line-border transition-colors"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
                {CONTACT_CONFIG.publicWhatsappUrl && (
                  <a
                    href={CONTACT_CONFIG.publicWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 text-text-primary hover:text-emerald-500 font-bold border-t border-line-border transition-colors"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
                {CONTACT_CONFIG.linkedinUrl && (
                  <a
                    href={CONTACT_CONFIG.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 text-text-primary hover:text-[#EA1E4D] font-bold border-t border-line-border transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Honest Mailto Brief Action Modal (No Fabricated Backend Success) */}
      <ResponsiveModalShell
        isOpen={isSubmittedModalOpen}
        onClose={() => setIsSubmittedModalOpen(false)}
        maxWidthClass="max-w-lg"
        zIndexClass="z-[130]"
        panelClassName="border border-[#EA1E4D]/40 bg-[#111116] text-white"
        mobileFooter={
          <button
            type="button"
            onClick={() => setIsSubmittedModalOpen(false)}
            className="w-full min-h-[46px] px-6 rounded-full bg-white text-[#111116] font-mono text-xs font-bold uppercase tracking-wider"
          >
            Done
          </button>
        }
      >
        <div className="p-6 sm:p-10 font-mono space-y-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#FD7D3C] font-bold block mb-2">
              ✦ Commission Brief Draft Prepared
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white">
              Send via Email Client<span className="text-[#EA1E4D]">.</span>
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
              Your formatted brief for <strong className="text-white">{activeCommission.label}</strong> has been prepared and opened in your email app. If your browser didn&apos;t launch an email app automatically, copy the formatted brief below.
            </p>
          </div>

          <pre className="p-4 bg-black/50 border border-white/15 text-[11px] text-white/80 whitespace-pre-wrap max-h-44 overflow-y-auto leading-relaxed">
            {formattedBriefText}
          </pre>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleCopyBrief}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#EA1E4D] text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
            >
              {copiedSummary ? <Check size={14} /> : <Copy size={14} />}
              <span>{copiedSummary ? 'Copied to Clipboard' : 'Copy Formatted Brief'}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsSubmittedModalOpen(false)}
              className="px-6 py-3 rounded-full border border-white/25 text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#111116] transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </ResponsiveModalShell>
    </section>
  );
};
