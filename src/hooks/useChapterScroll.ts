import { useState, useEffect, useCallback } from 'react';

export type ChapterIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const CHAPTER_IDS = [
  'chapter-spark',
  'chapter-point-of-view',
  'chapter-attention',
  'chapter-world',
  'chapter-real-world',
  'chapter-people',
  'chapter-next-idea',
] as const;

export function useChapterScroll(): ChapterIndex {
  const [activeChapter, setActiveChapter] = useState<ChapterIndex>(0);

  const handleScroll = useCallback(() => {
    const viewportMid = window.scrollY + window.innerHeight * 0.45;
    let found: ChapterIndex = 0;
    CHAPTER_IDS.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) return;
      const { top, bottom } = el.getBoundingClientRect();
      const absTop = top + window.scrollY;
      const absBottom = bottom + window.scrollY;
      if (viewportMid >= absTop && viewportMid < absBottom) {
        found = index as ChapterIndex;
      }
    });
    setActiveChapter(found);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return activeChapter;
}
