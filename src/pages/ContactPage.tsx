import React from 'react';
import { IntakeSection } from '../components/intake/IntakeSection';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const ContactPage: React.FC = () => {
  useDocumentMeta({
    title: 'Commission a Sprint — RIWA CREATIVES',
    description:
      'Brief our senior founder desk directly. Commercial poster art, paid performance media, 3D web, or a full 90-day brand accelerator sprint. Guaranteed response within 12 hours.',
    ogTitle: 'Commission a Sprint — RIWA CREATIVES Senior Founder Desk',
    ogDescription:
      'Drop it, we will build it. Brief our founding partner desk directly for commercial art and performance scaling.',
  });

  return (
    <>
      <main className="w-full">
        <IntakeSection standalone />
      </main>

      <EditorialFooter />
    </>
  );
};

