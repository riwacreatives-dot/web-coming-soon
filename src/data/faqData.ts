export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category:
    | 'Working with Riwa'
    | 'Services'
    | 'Pricing & Scope'
    | 'Ongoing Brand Management'
    | 'Events & Experiences';
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'Working with Riwa',
    question: 'How does working with Riwa begin, and who do we collaborate with?',
    answer:
      'Every project begins with a direct conversation with founder Ranjan Kumar—never passed down to layers of account managers. Tell us what you are building via our Commission page or email riwacreatives@gmail.com to align on objectives and timeline.',
  },
  {
    id: 'faq-02',
    category: 'Services',
    question: 'What core creative and growth disciplines does Riwa handle?',
    answer:
      'Riwa operates across five connected practices: Brand & Identity, Commercial Creative & Advertising, Digital & Growth, Technology & Digital Experiences, and Events, Experiences & Activations.',
  },
  {
    id: 'faq-03',
    category: 'Pricing & Scope',
    question: 'How is pricing structured, and can we commission a single project?',
    answer:
      'Yes—you can commission a focused standalone identity, campaign, website, or event without a long-term lock-in. Every proposal is custom-scoped based on deliverables, complexity, and sprint duration.',
  },
  {
    id: 'faq-04',
    category: 'Ongoing Brand Management',
    question: 'Does Riwa support ongoing brand management and creative stewardship?',
    answer:
      'Yes. Beyond launching a visual system, we provide ongoing brand stewardship and monthly creative retainers to ensure every campaign, deck, storefront update, and visual drop stays consistent and sharp as you scale.',
  },
  {
    id: 'faq-05',
    category: 'Events & Experiences',
    question: 'Can Riwa handle hackathons, MUNs, festivals, and conferences end-to-end?',
    answer:
      'Yes. We handle everything from concept and visual identity to sponsor decks, participant acquisition, digital ticketing/registration portals, and on-ground event coordination.',
  },
];
