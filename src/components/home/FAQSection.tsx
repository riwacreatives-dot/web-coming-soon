import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../../data/faqData';
import { ChevronDown } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const FAQSection: React.FC = () => {
  const reduced = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-[#E7E7E9] dark:bg-[#14141A] text-[#111116] dark:text-white border-b border-[#111116]/15 dark:border-white/10 transition-colors">
      <section
        id="faq"
        className="relative w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <motion.div
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mb-12 sm:mb-16 max-w-3xl"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -12 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: STUDIO_EASE } },
            }}
            className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 font-semibold block mb-3 select-none"
          >
            02 — FREQUENTLY ASKED QUESTIONS
          </motion.span>
          <h2 className="font-display text-[clamp(2.2rem,6.5vw,4.2rem)] font-black uppercase tracking-tight text-[#111116] dark:text-white leading-[1.02]">
            <span className="block overflow-hidden">
              <motion.span
                variants={{
                  hidden: { y: '108%', opacity: 0 },
                  visible: { y: '0%', opacity: 1, transition: { duration: 0.68, delay: 0.05, ease: STUDIO_EASE } },
                }}
                className="block"
              >
                CLEAR ANSWERS.
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
              <motion.span
                variants={{
                  hidden: { y: '108%', opacity: 0 },
                  visible: { y: '0%', opacity: 1, transition: { duration: 0.72, delay: 0.14, ease: STUDIO_EASE } },
                }}
                className="block"
              >
                <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
                  zero
                </span>{' '}
                <span>GUESSWORK</span>
                <span className="text-[#EA1E4D]">.</span>
              </motion.span>
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.06 }}
          className="border-t border-[#111116]/20 dark:border-white/15 divide-y divide-[#111116]/20 dark:divide-white/15"
        >
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, x: 14 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, delay: idx * 0.06, ease: STUDIO_EASE },
                  },
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between gap-4 text-left group cursor-pointer touch-manipulation"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 min-w-0">
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-xs sm:text-sm text-[#EA1E4D] font-bold">
                        0{idx + 1}
                      </span>
                      <span className="px-2 py-0.5 bg-[#111116]/10 dark:bg-white/10 font-mono text-[10px] uppercase tracking-wider text-[#52525B] dark:text-white/70">
                        {item.category}
                      </span>
                    </div>
                    <span className="font-display text-base sm:text-xl font-bold uppercase tracking-tight text-[#111116] dark:text-white group-hover:text-[#EA1E4D] transition-colors">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border border-[#111116]/20 dark:border-white/20 flex items-center justify-center text-[#52525B] dark:text-white/60 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 border-[#EA1E4D] text-[#EA1E4D]' : 'group-hover:border-[#111116] dark:group-hover:border-white group-hover:text-[#111116] dark:group-hover:text-white'
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
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pl-0 sm:pl-12 max-w-3xl">
                        <p className="font-sans text-sm sm:text-base text-[#3F3F46] dark:text-white/75 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
};
