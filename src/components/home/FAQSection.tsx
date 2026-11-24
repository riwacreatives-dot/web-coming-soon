import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative w-full py-16 sm:py-24 md:py-32 border-t border-line-border px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* Eyebrow & Headline */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-12 sm:mb-20">
        <div className="max-w-3xl">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-text-secondary font-semibold block mb-3 select-none">
            11 / FAQ
          </span>
          <h2 className="font-display text-[clamp(2.2rem,6.8vw,4.5rem)] font-extrabold uppercase tracking-tight text-text-primary leading-[1.05]">
            <span>CLEAR ANSWERS.</span><br />
            <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.14em] lowercase select-none">
              zero
            </span>{' '}
            <span>GUESSWORK</span><span className="text-brand-red font-bold">.</span>
          </h2>
          <p className="mt-4 font-mono text-xs sm:text-sm text-text-secondary leading-relaxed max-w-2xl">
            Everything you need to know about partnering with Riwa Creatives.
          </p>
        </div>
      </div>

      {/* Accordion List */}
      <div className="border-t border-line-border divide-y divide-line-border font-mono">
        {FAQ_DATA.map((item, idx) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="transition-colors">
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="w-full py-6 sm:py-8 flex items-center justify-between gap-4 text-left group cursor-pointer touch-manipulation"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-xs text-text-secondary group-hover:text-brand-red font-bold transition-colors">
                    {`0${idx + 1}`}
                  </span>
                  <span className="font-display text-base sm:text-xl font-bold uppercase tracking-tight text-text-primary group-hover:text-brand-red transition-colors">
                    {item.question}
                  </span>
                </div>

                <div
                  className={`w-8 h-8 rounded-full border border-line-border flex items-center justify-center text-text-secondary shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 border-brand-red text-brand-red' : ''
                  }`}
                >
                  <ChevronDown size={14} />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-8 sm:pl-12 max-w-3xl">
                      <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
