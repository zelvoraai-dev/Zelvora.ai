export type ServiceId = 
  | 'ai-automation'
  | 'websites-internal-tools'
  | 'whatsapp-systems'
  | 'lead-generation'
  | 'freelance-development';

export interface ServiceDepartment {
  id: ServiceId;
  number: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  badge: string;
  deliverables: string[];
  techStack: string[];
  idealFor: string[];
  sampleWorkflow: {
    trigger: string;
    engine: string;
    output: string;
  };
  metrics: string;
}

export type SolutionProblemId = 
  | 'more-leads'
  | 'automate-business'
  | 'need-website'
  | 'whatsapp-automation'
  | 'custom-software'
  | 'not-sure-yet';

export interface SolutionOption {
  id: SolutionProblemId;
  label: string;
  shortGoal: string;
  bottleneck: string;
  recommendedArchitecture: string[];
  departmentsInvolved: ServiceId[];
  timeline: string;
  deliverablesSummary: string;
  ctaText: string;
}

export type ProjectCategory = 'Real Client' | 'Demo & Prototype' | 'Internal Zelvora System';

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: ProjectCategory;
  clientName?: string;
  industry: string;
  serviceId: ServiceId;
  headline: string;
  problem: string;
  solution: string;
  architecture: string[];
  results: {
    label: string;
    metric: string;
  }[];
  tags: string[];
  demoType: 'live' | 'diagram' | 'prototype';
}

export interface UseCaseWorkflow {
  id: string;
  name: string;
  category: string;
  impactMetric: string;
  metricLabel: string;
  description: string;
  steps: {
    number: number;
    title: string;
    desc: string;
    system: string;
  }[];
}

export interface ProcessMilestone {
  step: number;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface ProjectInquiryData {
  fullName: string;
  email: string;
  company: string;
  phoneWhatsapp?: string;
  services: ServiceId[];
  budget: string;
  projectOverview: string;
  timeline: string;
  honeypot?: string;
}

export interface ConfirmationEmailReceipt {
  ticketId: string;
  timestamp: string;
  clientName: string;
  clientEmail: string;
  company: string;
  services: string[];
  budget: string;
  overviewSnippet: string;
  recipientStudio: string;
  status: 'Verified & Queued' | 'Sent';
}

export interface ClientTestimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  serviceDelivered: string;
  verifiedMetric: string;
  metricLabel: string;
  rating: number;
}

export type ThemeMode = 'light' | 'dark';

