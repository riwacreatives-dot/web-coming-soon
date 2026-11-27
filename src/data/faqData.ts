export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category:
    | 'Working with Riwa'
    | 'Services'
    | 'Scope'
    | 'Ongoing Brand Management'
    | 'Events & Experiences';
}

// Draft editorial FAQ aligned with Blueprint-3 claims discipline (DEC-10 founder review)
export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'Working with Riwa',
    question: 'How does working with Riwa begin?',
    answer:
      'Every project begins by sharing your brief through our Contact page so we can align on objectives, deliverables, and timeline.',
  },
  {
    id: 'faq-02',
    category: 'Services',
    question: 'What core capabilities does Riwa cover?',
    answer:
      'Riwa operates across five connected capabilities: Brand & Identity, Creative & Advertising, Digital & Technology, Events & Experiences, and Brand Management & Growth.',
  },
  {
    id: 'faq-03',
    category: 'Scope',
    question: 'Can we commission a single focused project?',
    answer:
      'Yes. Focused identities, campaigns, websites, or live events can be scoped as standalone engagements without long-term lock-in.',
  },
  {
    id: 'faq-04',
    category: 'Ongoing Brand Management',
    question: 'Does Riwa support ongoing brand management after launch?',
    answer:
      'Yes. We support ongoing brand strategy, stewardship, and growth marketing so identity and campaign materials stay coherent beyond launch day.',
  },
  {
    id: 'faq-05',
    category: 'Events & Experiences',
    question: 'What does Events & Experiences include?',
    answer:
      'We plan, brand, and produce conferences, hackathons, and brand activations—connecting visual identity, physical collateral, and room experience.',
  },
];
