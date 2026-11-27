import React from 'react';
import { IntakeSection } from '../components/intake/IntakeSection';
import { FAQSection } from '../components/home/FAQSection';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const ContactPage: React.FC = () => {
  useDocumentMeta({
    title: 'Start a Project — Riwa Creatives',
    description:
      'Have a brand, campaign, digital build, or live experience in mind? Start a project conversation with Riwa Creatives.',
    ogTitle: 'Start a Project — Riwa Creatives',
    ogDescription:
      'Have a project in mind? Configure your studio brief and reach Riwa Creatives directly.',
  });

  return (
    <>
      <main className="w-full">
        {/* Interactive Project Enquiry & Brief Builder */}
        <IntakeSection standalone />

        {/* Studio Frequently Asked Questions */}
        <FAQSection />
      </main>

      <EditorialFooter />
    </>
  );
};
