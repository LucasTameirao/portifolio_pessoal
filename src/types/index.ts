export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

export interface SocialLink {
  label: string;
  url: string;
  iconName: string;
  username: string;
}

export interface NavItem {
  label: string;
  href: string;
  iconName?: string;
}
