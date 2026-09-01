import { Project, SkillCategory, SocialLink, NavItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Lucas Assis Tameirão Martins',
  displayName: 'Lucas',
  role: 'Fullstack Dev',
  tagline: "Oi, eu sou o lucas. Deixe eu me apresentar!",
  subTagline: "Sou um desenvolvedor full stack que adora criar sites para ajudar as pessoas a resolverem seus problemas.",
  ctaExploreText: "Deixe-me te apresentar os meus projetos. Aposto que vai te interessar!",
  
  // Caminho da foto de perfil:
  // Coloque seu arquivo 'avatar.png' ou 'avatar.jpg' na pasta /public (ou /src/assets/avatar.png)
  avatar: '/src/data/foto-de-perfil.jpg', 

  aboutTitle: 'Sobre mim',
  aboutText: `Sou Desenvolvedor Full Stack com foco em Back-End, apaixonado por criar experiências digitais fluidas, intuitivas e de alto desempenho. Com sólida experiência no ecossistema JavaScript e TypeScript — atuando com React, Node.js e arquiteturas de back-end modernas —, transformo ideias complexas em soluções robustas, escaláveis e elegantes.`,
  
  location: 'Brasil',
  email: 'lucas.atmartins@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lucastameirao',
  github: 'https://github.com/LucasTameirao',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', iconName: 'Home' },
  { label: 'About', href: '#about-section', iconName: 'User' },
  { label: 'Projects', href: '#projects', iconName: 'Briefcase' },
  { label: 'Skills', href: '#skills', iconName: 'Code' },
  { label: 'Contact', href: '#contact', iconName: 'Mail' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Front-end',
    iconName: 'Layout',
    skills: [
      { name: 'React 19', level: 'Avançado' },
      { name: 'TypeScript', level: 'Avançado' },
      { name: 'Tailwind CSS', level: 'Avançado' },
      { name: 'JavaScript (ES6+)', level: 'Avançado' },
      { name: 'HTML5 & CSS3', level: 'Avançado' },
    ],
  },
  {
    title: 'Back-end & DevOps',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', level: 'Intermediário' },
      { name: 'Express', level: 'Intermediário' },
      { name: 'Git & GitHub', level: 'Avançado' },
      { name: 'Docker / Dev Containers', level: 'Intermediário' },
      { name: 'Vite / Bundlers', level: 'Avançado' },
    ],
  },
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'portfolio-pessoal',
    title: 'Portfólio Pessoal Interativo',
    description: 'Interface moderna com gradiente fluido animado, navegação por scroll contínuo e arquitetura modular em React.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: '/wireframe/Home.png',
    githubUrl: 'https://github.com/LucasTameirao/portifolio_pessoal',
    featured: true,
  },
  {
    id: 'gestao-tarefas',
    title: 'App de Gestão & Produtividade',
    description: 'Dashboard interativo com gestão de fluxos de trabalho e métricas em tempo real.',
    tags: ['React', 'Node.js', 'Express', 'TypeScript'],
    image: '/wireframe/Projects.png',
    githubUrl: 'https://github.com/LucasTameirao',
    featured: true,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lucastameirao',
    iconName: 'Linkedin',
    username: 'lucastameirao',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/LucasTameirao',
    iconName: 'Github',
    username: 'LucasTameirao',
  },
  {
    label: 'E-mail',
    url: 'mailto:lucas.atmartins@gmail.com',
    iconName: 'Mail',
    username: 'lucas.atmartins@gmail.com',
  },
];
