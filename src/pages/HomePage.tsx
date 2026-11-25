import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { BrandTicker } from '../components/home/BrandTicker';
import { ThePointOfView } from '../components/chapters/ThePointOfView';
import { TheAttention } from '../components/chapters/TheAttention';
import { TheWorld } from '../components/chapters/TheWorld';
import { TheRealWorld } from '../components/chapters/TheRealWorld';
import { ThePeople } from '../components/chapters/ThePeople';
import { ManifestoSection } from '../components/home/ManifestoSection';
import { TheNextIdea } from '../components/chapters/TheNextIdea';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { ChapterIndicator } from '../components/common/ChapterIndicator';
import { useChapterScroll } from '../hooks/useChapterScroll';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const HomePage: React.FC = () => {
  const activeChapter = useChapterScroll();

  useDocumentMeta({
    title: 'Riwa Creatives — Independent Creative & Growth Studio',
    description:
      'Riwa Creatives is an independent creative and growth studio bringing together brand identity, commercial advertising, digital growth, technology, and live experiences.',
    ogTitle: 'Riwa Creatives — Making Unreasonable Brands Happen',
    ogDescription:
      'We turn ambitious ideas into distinctive identities, disruptive campaigns and digital experiences.',
  });

  return (
    <>
      {/* Fixed Left Chapter Datum + Continuous Spark State (xl+ desktop gutter, never obstructs content) */}
      <ChapterIndicator activeChapter={activeChapter} />

      <main className="w-full">
        {/* ══ CH01 — THE SPARK (Studio Workbench Hero) ══ */}
        <HeroSection />

        {/* Discipline Ticker Transition Strip */}
        <BrandTicker />

        {/* ══ CH02 — THE POINT OF VIEW (Brand & Identity + System Specimen) ══ */}
        <ThePointOfView />

        {/* ══ CH03 — THE ATTENTION (Commercial Creative & 4-Stage Solanas Case Spread) ══ */}
        <TheAttention />

        {/* ══ CH04 — THE WORLD (Digital & Growth + Interactive UI Sandbox + Embedded Process) ══ */}
        <TheWorld />

        {/* ══ CH05 — THE REAL WORLD (Full #FD7D3C Orange Events Stage Takeover) ══ */}
        <TheRealWorld />

        {/* ══ CH06 — THE PEOPLE (Personal Founder Story, Genuine Assets & Verified Proof) ══ */}
        <ThePeople />

        {/* Narrative Beat bridging Studio Reality into Your Next Idea */}
        <ManifestoSection eyebrow="STUDIO CREDO // THE RIWA WAY" />

        {/* ══ CH07 — THE NEXT IDEA (Enquiry Selectors, Direct Brief & Editorial FAQ) ══ */}
        <TheNextIdea />
      </main>

      <EditorialFooter />
    </>
  );
};
