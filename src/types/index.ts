// Project & Case Study types
export interface ProjectItem {
  id: string;
  archiveCode: string;
  client: string;
  industry: string;
  isConcept?: boolean;
  title: string;
  category: string;
  headline: string;
  description: string;
  heroImage: string;
  galleryImages?: string[];
  badge: string;
  metric: string;
  year: string;
  accentColor: string;
  deliverables: string[];
  brief: string;
  challenge: string;
  insight: string;
  role: string;
  execution: string;
  verifiedOutcome?: string;
}

// Service & Discipline types
export interface ServiceItem {
  id: string;
  index: string;
  name: string;
  categoryTag: string;
  headline?: string;
  shortDesc: string;
  fullDesc: string;
  ctaText?: string;
  flagshipKPI: string;
  kpiLabel: string;
  deliverables: string[];
  problemsAddressed: string[];
  collaborationModel: string;
  relatedProjectIds: string[];
  previewImage?: string;
}

// Studio Leadership types
export interface FounderItem {
  name: string;
  role: string;
  department: string;
  bio: string;
  trackRecord: string;
  specialties: string[];
  portraitImage?: string;
}

// World Clock type
export interface ClockHub {
  city: string;
  country: string;
  timezone: string;
  coordinates: string;
  offsetHours: number;
  offsetMinutes: number;
}

// Intake Form types
export interface IntakeSubmissionPayload {
  selectedDisciplines: string[];
  selectedBudget: string;
  name: string;
  email: string;
  brandOrWebsite: string;
  projectVision: string;
  submittedAt: string;
}
