export type Language = 'pt' | 'en';

export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile & API';
  shortDescription: {
    pt: string;
    en: string;
  };
  fullDescription: {
    pt: string;
    en: string;
  };
  image: string;
  thumbnailGradient: string;
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl: string;
  featured: boolean;
  date: string;
  role: {
    pt: string;
    en: string;
  };
  features: {
    pt: string[];
    en: string[];
  };
  challenges: {
    pt: string;
    en: string;
  };
  architecture: {
    pt: string;
    en: string;
  };
  metrics?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  experienceYears: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  icon: string;
  description: {
    pt: string;
    en: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: {
    pt: string;
    en: string;
  };
  company: string;
  location: string;
  period: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  achievements: {
    pt: string[];
    en: string[];
  };
  technologies: string[];
  current?: boolean;
}

export interface EducationItem {
  id: string;
  degree: {
    pt: string;
    en: string;
  };
  institution: string;
  period: string;
  description: {
    pt: string;
    en: string;
  };
  badge?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp?: string;
}

export type ContactFormData = ContactMessage;

