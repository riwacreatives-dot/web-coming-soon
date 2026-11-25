import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight, Check, ChevronDown, Copy, Mail, Send } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { SparkElement } from '../common/SparkElement';

const EDITORIAL_FAQ = [
  {
    id: 'faq-01',
    q: 'How does working with Riwa begin?',
    a: 'Every commission starts directly with founder Ranjan Kumar—never handed off through account manager layers. Configure your idea above, copy the brief, or email riwacreatives@gmail.com.',
  },
  {
    id: 'faq-02',
    q: 'Can we commission a single sprint or project without a retainer?',
    a: 'Yes. Focused standalone identities, ad campaigns, websites, or live event builds are welcome. Every proposal is custom-scoped around deliverables and timeline.',
  },
  {
    id: 'faq-03',
    q: 'Does Riwa support ongoing brand stewardship after launch?',
    a: 'Yes. Beyond initial system launches, we partner monthly to guard typography, campaign drops, decks, and new touchpoints as your business scales.',
  },
  {
    id: 'faq-04',
    q: 'Can Riwa run events end-to-end — hackathons, MUNs, festivals?',
    a: 'Yes. We handle identity systems, sponsor decks, participant acquisition, digital ticketing portals, and on-ground production coordination.',
  },
];

const PROJECT_TYPES = [
  { id: 'brand', label: 'BRAND & IDENTITY', sub: 'Identity, naming & guidelines' },
  { id: 'campaign', label: 'CAMPAIGN & ADVERTISING', sub: 'Key visuals, reels & paid growth' },
  { id: 'digital', label: 'DIGITAL & GROWTH', sub: 'Websites, content & acquisition' },
  { id: 'technology', label: 'TECHNOLOGY & EXPERIENCE', sub: 'Custom React web & interactive UX' },
  { id: 'event', label: 'EVENTS & ACTIVATIONS', sub: 'Hackathons, MUNs, fests & summits' },
  { id: 'other', label: "I'M NOT SURE YET", sub: "Tell us what you're imagining" },
];

export const TheNextIdea: React.FC = () => {
  const reduced = useReducedMotion();
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type');

  const [selected, setSelected] = useState<string | null>(() => {
    if (!initialType) return null;
    return PROJECT_TYPES.some((t) => t.id === initialType) ? initialType : null;
  });
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', idea: '' });
  const [submittedBrief, setSubmittedBrief] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialType && PROJECT_TYPES.some((t) => t.id === initialType)) {
      setSelected(initialType);
    }
  }, [initialType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    const selectedType = PROJECT_TYPES.find((t) => t.id === selected);
    const briefText =
      `NEW RIWA COMMISSION BRIEF\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Project Type: ${selectedType?.label || 'Not specified'}\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `The Idea / Problem:\n${formData.idea || 'Not provided'}\n\n` +
      `Sent via riwacreatives.in · ${new Date().toLocaleDateString()}`;

    setSubmittedBrief(briefText);

    const subject = encodeURIComponent(`Riwa Commission — ${selectedType?.label || 'New Project'} — ${formData.name}`);
    const body = encodeURIComponent(briefText);
    window.location.href = `mailto:riwacreatives@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopyBrief = () => {
    if (!submittedBrief || typeof navigator === 'undefined' || !navigator.clipboard) return;
    navigator.clipboard.writeText(submittedBrief).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="chapter-next-idea"
      className="relative w-full bg-[#07080B] text-white overflow-hidden"
    >
      <div id="contact" className="sr-only" aria-hidden="true" />

      <div className="max-w-7xl mx-auto py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12">

        {/* Chapter Label with THE SPARK Returning in Warm Orange ● */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3 mb-10 sm:mb-14"
        >
          <SparkElement chapter={6} size={20} />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#FD7D3C] font-bold">
            07 — THE NEXT IDEA · START A PROJECT
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.5rem,7vw,5.6rem)] font-black uppercase tracking-tighter text-white leading-[0.91] mb-12 sm:mb-16 max-w-4xl"
        >
          <span className="block">WHAT&apos;S YOUR</span>
          <span className="block font-serif italic font-normal tracking-tight text-[#FD7D3C] text-[1.08em] lowercase mt-1">
            unreasonable idea?
          </span>
        </motion.h2>

        <AnimatePresence mode="wait">
          {submittedBrief ? (
            <motion.div
              key="success"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl border border-[#FD7D3C]/40 bg-[#0F1016] p-7 sm:p-12 space-y-6"
            >
              <div>
                <span className="font-mono text-[10px] text-[#FD7D3C] uppercase tracking-widest font-bold block mb-3">
                  ● YOUR SPARK IS READY TO SEND
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-3">
                  BRIEF PREPARED FOR RIWA<span className="text-[#FD7D3C]">.</span>
                </h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  We&apos;ve opened your email client addressed to <strong className="text-white">riwacreatives@gmail.com</strong>. If your browser blocked the mail popup, copy your formatted brief below or message us directly on WhatsApp.
                </p>
              </div>

              <pre className="p-4 bg-black/50 border border-white/10 font-mono text-[11px] text-white/80 whitespace-pre-wrap max-h-40 overflow-y-auto leading-relaxed">
                {submittedBrief}
              </pre>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#EA1E4D] text-white font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY FORMATTED BRIEF'}</span>
                </button>

                <a
                  href="https://wa.me/917015048144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FD7D3C] text-[#07080B] font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  <span>WHATSAPP US DIRECTLY</span>
                  <ArrowUpRight size={14} />
                </a>

                <button
                  type="button"
                  onClick={() => setSubmittedBrief(null)}
                  className="px-5 py-3.5 rounded-full border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/5 transition-all cursor-pointer"
                >
                  EDIT BRIEF
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="form">
              {/* 6 Project Type Selectors */}
              <div className="mb-10 sm:mb-12">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/45 font-bold block mb-4">
                  01 // SELECT WHAT WE ARE BUILDING TOGETHER
                </span>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
                  {PROJECT_TYPES.map((type, idx) => {
                    const isSelected = selected === type.id;
                    return (
                      <motion.button
                        key={type.id}
                        type="button"
                        onClick={() => setSelected(type.id)}
                        whileHover={reduced ? undefined : { y: -2 }}
                        className={`p-4 sm:p-5 text-left border transition-all cursor-pointer flex flex-col justify-between min-h-[100px] sm:min-h-[118px] touch-manipulation ${
                          isSelected
                            ? 'bg-[#FD7D3C] border-[#FD7D3C] text-[#07080B]'
                            : 'bg-white/[0.03] border-white/15 text-white hover:border-white/35'
                        }`}
                      >
                        <span className={`font-mono text-[10px] font-bold ${isSelected ? 'text-[#07080B]/70' : 'text-white/35'}`}>
                          0{idx + 1}
                        </span>
                        <div>
                          <span className={`font-display text-xs sm:text-base font-black uppercase tracking-tight block leading-tight mb-1 ${isSelected ? 'text-[#07080B]' : 'text-white'}`}>
                            {type.label}
                          </span>
                          <span className={`font-sans text-[11px] sm:text-xs block leading-snug ${isSelected ? 'text-[#07080B]/80 font-medium' : 'text-white/45'}`}>
                            {type.sub}
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Minimal High-Contrast Brief Form */}
              <form onSubmit={handleSubmit} className="max-w-3xl space-y-8">
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/45 mb-2.5">
                    <label htmlFor="next-idea-textarea" className="font-bold">
                      02 // TELL US ABOUT YOUR IDEA
                    </label>
                    <span>{formData.idea.length} CHARS</span>
                  </div>
                  <textarea
                    id="next-idea-textarea"
                    rows={3}
                    value={formData.idea}
                    onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                    placeholder="What are you launching, fixing, or imagining?"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-base sm:text-sm text-white placeholder:text-white/30 focus:border-[#FD7D3C] focus:outline-none transition-colors font-sans resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="next-idea-name" className="font-mono text-[10px] uppercase tracking-widest text-white/45 font-bold block mb-2.5">
                      03 // YOUR NAME *
                    </label>
                    <input
                      id="next-idea-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma, Founder"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-base sm:text-sm text-white placeholder:text-white/30 focus:border-[#FD7D3C] focus:outline-none transition-colors font-mono"
                    />
                  </div>
                  <div>
                    <label htmlFor="next-idea-email" className="font-mono text-[10px] uppercase tracking-widest text-white/45 font-bold block mb-2.5">
                      04 // YOUR EMAIL *
                    </label>
                    <input
                      id="next-idea-email"
                      type="email"
                      required
                      inputMode="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priya@company.in"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-base sm:text-sm text-white placeholder:text-white/30 focus:border-[#FD7D3C] focus:outline-none transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FD7D3C] text-[#07080B] font-mono text-xs font-bold uppercase tracking-widest hover:brightness-110 shadow-xl transition-all cursor-pointer touch-manipulation"
                  >
                    <Send size={14} />
                    <span>PREPARE &amp; SEND BRIEF</span>
                  </button>

                  <a
                    href="https://wa.me/917015048144"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-white/65 hover:text-emerald-400 transition-colors uppercase tracking-wider"
                  >
                    <span>OR WHATSAPP +91 70150 48144</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>

                <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest">
                  DIRECT FOUNDER DESK · RIWACREATIVES@GMAIL.COM
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── SMALL EDITORIAL FAQ NEAR END OF HOMEPAGE (#faq) ── */}
        <div id="faq" className="mt-20 sm:mt-24 pt-12 sm:pt-16 border-t border-white/15">
          <div className="flex items-center gap-4 mb-7">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#FD7D3C] font-bold">
              QUICK ANSWERS // STUDIO FAQ
            </span>
            <div className="flex-1 h-[1px] bg-white/10 max-w-[100px]" />
          </div>

          <div className="max-w-3xl border-t border-white/15">
            {EDITORIAL_FAQ.map((item) => {
              const isOpen = openFaq === item.id;
              return (
                <div key={item.id} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    className="w-full py-5 flex items-center justify-between gap-4 text-left group cursor-pointer touch-manipulation"
                  >
                    <span className="font-display text-sm sm:text-lg font-bold uppercase tracking-tight text-white/80 group-hover:text-white transition-colors">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-white/40 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#FD7D3C]' : 'group-hover:text-white'
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 font-sans text-sm text-white/60 leading-relaxed max-w-2xl">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Direct Verified Channels Row */}
          <div className="mt-10 flex flex-wrap gap-6 font-mono text-xs">
            <a
              href="mailto:riwacreatives@gmail.com"
              className="flex items-center gap-2 text-white/55 hover:text-white transition-colors"
            >
              <Mail size={13} className="text-[#EA1E4D]" />
              <span>riwacreatives@gmail.com</span>
            </a>
            <a
              href="https://instagram.com/madebyriwa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 hover:text-white transition-colors"
            >
              Instagram · @madebyriwa
            </a>
            <a
              href="https://wa.me/917015048144"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 hover:text-emerald-400 transition-colors"
            >
              WhatsApp · +91 70150 48144
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
