// Project & Case Study types
export interface ProjectItem {
  id: string;
  client: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  heroImage: string;
  badge: string;
  metric: string;
  year: string;
  accentColor: string;
  deliverables: string[];
}

// Service & Discipline types
export interface ServiceItem {
  id: string;
  index: string;
  name: string;
  categoryTag: string;
  shortDesc: string;
  fullDesc: string;
  flagshipKPI: string;
  kpiLabel: string;
  deliverables: string[];
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

