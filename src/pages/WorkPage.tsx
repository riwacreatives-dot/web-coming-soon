import React from 'react';
import { SelectedWorks } from '../components/work/SelectedWorks';
import { ScrollVelocityMarquee } from '../components/common/ScrollVelocityMarquee';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const WorkPage: React.FC = () => {
  useDocumentMeta({
    title: 'Selected Work & Art Direction — RIWA CREATIVES',
    description:
      'Award-winning commercial poster art, 3D fluid dynamics, and viral campaign suites. Featuring the Solanas 5-piece art masterpiece with +420% order growth.',
    ogTitle: 'Selected Work & Commercial Art Direction — RIWA CREATIVES',
    ogDescription:
      'Museum-grade commercial poster design, liquid 3D dim sum dynamics, and brutalist performance media.',
    ogImage: 'https://riwacreatives.vercel.app/work/solanas-chilli-chicken.jpg',
  });

  return (
    <>
      <main className="w-full">
        <SelectedWorks standalone />

        {/* Marquee Banner */}
        <ScrollVelocityMarquee
          items={[
            'SOLANAS RETRO POP-ART',
            'DIKHEGA TOH BIKEGA',
            'COMMERCIAL POSTER DIRECTION',
            'WORK THAT STOPS THE SCROLL',
            '86,000+ ORGANIC SHARES',
            'THINKS LIKE A FOUNDER',
          ]}
          baseVelocity={1.4}
        />
      </main>

      <EditorialFooter />
    </>
  );
};
