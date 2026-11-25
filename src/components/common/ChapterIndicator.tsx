import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CHAPTER_IDS, ChapterIndex } from '../../hooks/useChapterScroll';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useTheme } from '../../contexts/ThemeContext';
import { SparkElement } from './SparkElement';

interface ChapterIndicatorProps {
  activeChapter: ChapterIndex;
}

const CHAPTER_LABELS = ['SPARK', 'BRAND', 'CAMPAIGN', 'DIGITAL', 'EVENTS', 'PEOPLE', 'IDEA'];
const TOTAL = 7;

export const ChapterIndicator: React.FC<ChapterIndicatorProps> = ({ activeChapter }) => {
  const reduced = useReducedMotion();
  const { theme } = useTheme();

  // Chapters 1 (charcoal), 5 (charcoal), 6 (near-black) are always dark; Chapters 0, 2, 3 follow active theme; Chapter 4 is vivid orange
  const isOrangeChapter = activeChapter === 4;
  const isDarkSurface =
    activeChapter === 1 || activeChapter === 5 || activeChapter === 6 || (!isOrangeChapter && theme === 'dark');

  const scrollToChapter = (idx: number) => {
    const id = CHAPTER_IDS[idx];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
    }
  };

  const labelTone = isOrangeChapter
    ? 'text-[#111116]/75'
    : isDarkSurface
      ? 'text-white/55'
      : 'text-[#111116]/55';

  const inactiveBarTone = isOrangeChapter
    ? 'rgba(17, 17, 22, 0.35)'
    : isDarkSurface
      ? 'rgba(255, 255, 255, 0.25)'
      : 'rgba(17, 17, 22, 0.25)';

  const activeBarColor = isOrangeChapter ? '#111116' : activeChapter === 6 ? '#FD7D3C' : '#EA1E4D';
  const counterColor = isOrangeChapter ? 'text-[#111116]' : activeChapter === 6 ? 'text-[#FD7D3C]' : 'text-[#EA1E4D]';

  return (
    <nav
      aria-label="Story Chapters Navigation"
      className="fixed left-3 2xl:left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-2.5 select-none"
    >
      {/* Continuous Spark signature integrated at top of architectural datum */}
      <SparkElement chapter={activeChapter} size={20} onOrange={isOrangeChapter} />

      {/* Continuous hair-line datum connecting Spark to chapter rail */}
      <div
        className={`w-[1px] h-4 transition-colors ${
          isOrangeChapter ? 'bg-[#111116]/30' : isDarkSurface ? 'bg-white/20' : 'bg-[#111116]/20'
        }`}
        aria-hidden="true"
      />

      {/* Chapter Index */}
      <AnimatePresence mode="wait">
        <motion.span
          key={activeChapter}
          initial={reduced ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.22 }}
          className={`font-mono text-[10px] font-bold tracking-widest ${counterColor}`}
          style={{ writingMode: 'vertical-rl' }}
        >
          {String(activeChapter + 1).padStart(2, '0')} / {TOTAL}
        </motion.span>
      </AnimatePresence>

      {/* Interactive Chapter Progress Rail */}
      <div className="flex flex-col items-center gap-1.5 py-1">
        {CHAPTER_LABELS.map((label, i) => {
          const isActive = i === activeChapter;
          return (
            <button
              key={label}
              type="button"
              onClick={() => scrollToChapter(i)}
              title={`Jump to 0${i + 1} — ${label}`}
              aria-label={`Jump to Chapter 0${i + 1}: ${label}`}
              className="group p-1 cursor-pointer focus:outline-none"
            >
              <motion.div
                animate={{
                  width: isActive ? 16 : 5,
                  height: 4,
                  backgroundColor: isActive ? activeBarColor : inactiveBarTone,
                }}
                transition={{ duration: reduced ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-full group-hover:scale-125 transition-transform"
              />
            </button>
          );
        })}
      </div>

      {/* Chapter Label */}
      <AnimatePresence mode="wait">
        <motion.span
          key={`label-${activeChapter}`}
          initial={reduced ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.22 }}
          className={`font-mono text-[9px] font-bold tracking-[0.18em] uppercase transition-colors ${labelTone}`}
          style={{ writingMode: 'vertical-rl' }}
        >
          {CHAPTER_LABELS[activeChapter]}
        </motion.span>
      </AnimatePresence>
    </nav>
  );
};
