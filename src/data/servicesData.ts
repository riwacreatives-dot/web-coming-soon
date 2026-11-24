export interface CapabilityItem {
  id: string;
  index: string;
  name: string;
  headline: string;
  categoryTag: string;
  shortDesc: string;
  fullDesc: string;
  ctaText: string;
  deliverables: string[];
  flagshipKPI?: string;
  kpiLabel?: string;
}

export const CAPABILITIES_DATA: CapabilityItem[] = [
  {
    id: 'brand-identity',
    index: '01',
    name: 'Brand & Identity',
    categoryTag: 'Identity & Systems',
    headline: 'MAKE YOUR BRAND MEAN SOMETHING.',
    shortDesc:
      'We build distinctive brand identities that give businesses a recognisable voice, a consistent visual language and a reason to stand apart.',
    fullDesc:
      'From emerging startups to established companies, we design visual identities and strategic positioning systems that give your business cultural weight, instant recognition, and staying power.',
    ctaText: 'BUILD YOUR IDENTITY ↗',
    flagshipKPI: 'Distinctive Recognition',
    kpiLabel: 'Bespoke Visual Systems',
    deliverables: [
      'Brand strategy and positioning',
      'Brand naming and identity',
      'Logo and visual systems',
      'Brand guidelines',
      'Graphic and communication design',
      'Packaging and promotional design',
      'Art direction',
    ],
  },
  {
    id: 'commercial-advertising',
    index: '02',
    name: 'Commercial Creative & Advertising',
    categoryTag: 'Advertising & Motion',
    headline: 'MAKE PEOPLE STOP SCROLLING.',
    shortDesc:
      'We create visual-first advertising and commercial campaigns designed to capture attention, communicate value and make brands memorable.',
    fullDesc:
      'In a feed filled with predictable templates, we craft provocative posters, cinematic motion, and culture-first commercial campaigns that people actually pause for, remember, and share.',
    ctaText: 'CREATE A CAMPAIGN ↗',
    flagshipKPI: 'Scroll-Stopping Craft',
    kpiLabel: 'High Watch-Time',
    deliverables: [
      'Commercial advertising concepts',
      'Creative direction',
      'Campaign development',
      'Product advertising',
      'Promotional videos and reels',
      'Motion graphics and animation',
      'Social-first campaign creatives',
      'Digital campaign assets',
    ],
  },
  {
    id: 'digital-growth',
    index: '03',
    name: 'Digital & Growth',
    categoryTag: 'Growth & Strategy',
    headline: 'ATTENTION IS GOOD. ACTION IS BETTER.',
    shortDesc:
      'We help brands connect with the right audiences through digital communication, content and growth-focused marketing.',
    fullDesc:
      'Creative work must drive real outcomes. We combine strategic content distribution, targeted audience acquisition, and disciplined digital advertising to turn initial curiosity into engaged customers.',
    ctaText: 'ACCELERATE YOUR GROWTH ↗',
    flagshipKPI: 'Disciplined Growth',
    kpiLabel: 'High-Intent Acquisition',
    deliverables: [
      'Social media strategy and management',
      'Instagram and LinkedIn campaigns',
      'Content strategy',
      'Digital advertising',
      'Audience acquisition',
      'Campaign management',
      'Marketing strategy',
      'Performance analysis',
    ],
  },
  {
    id: 'technology-experiences',
    index: '04',
    name: 'Technology & Experiences',
    categoryTag: 'Web & Digital Craft',
    headline: 'TURN AMBITIOUS IDEAS INTO WORKING EXPERIENCES.',
    shortDesc:
      'We bring creative thinking and technology together to build digital products, platforms and experiences that serve real business objectives.',
    fullDesc:
      'We design and engineer ultra-fast, visually striking web experiences, custom platforms, and digital event infrastructure with clean code, purposeful interactions, and zero unnecessary fluff.',
    ctaText: 'BUILD SOMETHING NEW ↗',
    flagshipKPI: 'Sub-Second Speed',
    kpiLabel: 'Immersive Experience',
    deliverables: [
      'Website and landing page development',
      'UI/UX design',
      'Web applications',
      'AI-powered solutions',
      'Digital automation',
      'Event websites and digital infrastructure',
      'Digital event experiences',
    ],
  },
];

// Backward-compatible alias for existing imports
export const SERVICES_DATA = CAPABILITIES_DATA;
