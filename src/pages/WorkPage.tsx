import React from 'react';
import { SelectedWorks } from '../components/work/SelectedWorks';
import { ScrollVelocityMarquee } from '../components/common/ScrollVelocityMarquee';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const WorkPage: React.FC = () => {
  useDocumentMeta({
    title: 'Selected Creative Work & Campaigns — Riwa Creatives',
    description:
      'Explore selected branding, advertising, campaign and digital experience projects by Riwa Creatives.',
    ogTitle: 'Selected Creative Work & Campaigns — Riwa Creatives',
    ogDescription:
      'Explore selected branding, advertising, campaign and digital experience projects by Riwa Creatives.',
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
