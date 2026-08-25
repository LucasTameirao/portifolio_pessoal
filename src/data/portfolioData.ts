import { Project, Skill, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Lucas Assis Tameirão Martins",
  shortName: "Lucas Tameirão",
  headline: {
    pt: "Desenvolvedor Full Stack & Engenheiro de Software",
    en: "Full Stack Developer & Software Engineer"
  },
  bioSummary: {
    pt: "Desenvolvedor Full Stack com sólida experiência na criação de aplicações web escaláveis, interfaces modernas e responsivas em React/TypeScript, e APIs robustas em Node.js. Focado em qualidade de código, arquitetura limpa e entrega de valor real.",
    en: "Full Stack Developer with solid expertise building scalable web applications, modern responsive UIs with React/TypeScript, and robust APIs with Node.js. Focused on code quality, clean architecture, and real business value."
  },
  detailedBio: {
    pt: "Olá! Sou o Lucas, um desenvolvedor apaixonado por transformar ideias complexas em experiências digitais intuitivas, performáticas e elegantes. Com anos de dedicação ao ecossistema JavaScript/TypeScript, atuo tanto no design e desenvolvimento de interfaces de usuário ricas com React e Tailwind CSS quanto na concepção de microsserviços e bancos de dados relacionais e não-relacionais. Busco sempre me atualizar com as melhores práticas de engenharia de software, testes automatizados e integração contínua.",
    en: "Hello! I'm Lucas, a developer passionate about transforming complex ideas into intuitive, high-performance, and elegant digital experiences. Dedicated to the JavaScript/TypeScript ecosystem, I work on both rich UI design and development with React and Tailwind CSS as well as backend microservices and databases. I always pursue clean software engineering principles, automated testing, and continuous delivery."
  },
  email: "lucas.atmartins@gmail.com",
  github: "https://github.com/LucasTameirao",
  linkedin: "https://www.linkedin.com/in/lucastameirao/",
  location: "Brasil",
  status: {
    pt: "Disponível para novos projetos e oportunidades",
    en: "Available for new projects & opportunities"
  },
  stats: [
    { value: "4+", label: { pt: "Anos de Prática", en: "Years of Practice" } },
    { value: "25+", label: { pt: "Projetos Desenvolvidos", en: "Projects Built" } },
    { value: "99.9%", label: { pt: "Comprometimento com Qualidade", en: "Quality Commitment" } },
    { value: "100%", label: { pt: "Design Responsivo", en: "Responsive Design" } }
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "nexus-flow-saas",
    title: "NexusFlow - Gestão Inteligente & Analytics",
    category: "Full Stack",
    featured: true,
    date: "2025",
    role: {
      pt: "Desenvolvedor Full Stack Líder",
      en: "Lead Full Stack Developer"
    },
    thumbnailGradient: "from-cyan-600 via-blue-700 to-indigo-900",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    shortDescription: {
      pt: "Plataforma completa de gestão de fluxo de trabalho, métricas em tempo real e dashboards analíticos de alta performance.",
      en: "Complete workflow management platform featuring real-time telemetry, analytical dashboards, and high performance."
    },
    fullDescription: {
      pt: "O NexusFlow é uma solução completa para equipes modernas que necessitam de visibilidade em tempo real sobre entregas, alocação de tarefas e relatórios analíticos dinâmicos. Construído com React, TypeScript e Tailwind CSS no front-end, integrado a uma API REST em Node.js e banco PostgreSQL.",
      en: "NexusFlow is a full-featured solution for agile teams needing real-time visibility over sprint deliverables, task allocation, and dynamic analytics reports. Engineered with React, TypeScript, and Tailwind on the front-end, integrated with a Node.js REST API and PostgreSQL."
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Recharts"],
    liveDemoUrl: "https://nexusflow-demo.vercel.app",
    githubUrl: "https://github.com/LucasTameirao/nexusflow-platform",
    features: {
      pt: [
        "Painel interativo com gráficos em tempo real e filtros dinâmicos de período",
        "Sistema de autenticação seguro com JWT e controle de permissões por perfil (RBAC)",
        "Quadro Kanban com drag-and-drop fluído e persistência instantânea",
        "Exportação de relatórios analíticos em PDF e planilhas CSV",
        "Modo escuro e claro com transições suaves e design 100% responsivo"
      ],
      en: [
        "Interactive dashboard with real-time charts and dynamic timeframe filters",
        "Secure authentication system with JWT and Role-Based Access Control (RBAC)",
        "Fluid drag-and-drop Kanban board with immediate state persistence",
        "Export analytical reports to PDF and structured CSV sheets",
        "Seamless Dark and Light theme toggle with 100% responsive layout"
      ]
    },
    challenges: {
      pt: "Otimização de renderização em grandes volumes de dados tabulares e gráficos sem perda de 60fps na interface, resolvido com virtualização de listas e memoização granular no React.",
      en: "Optimizing render cycles when aggregating large tabular datasets and charts to maintain a steady 60fps UI, resolved using list virtualization and granular React memoization."
    },
    architecture: {
      pt: "Arquitetura em camadas com separação estrita de responsabilidades: Hooks customizados para cache de requisições, componentes puros e reutilizáveis, e camada de serviços tipada.",
      en: "Layered architecture with strict separation of concerns: custom hooks for API caching, pure reusable UI components, and typed service layers."
    },
    metrics: ["100/100 Lighthouse Performance", "< 80ms Tempo de Resposta de API", "Design System Modular"]
  },
  {
    id: "dev-hub-portfolio",
    title: "DevHub - Comunidade & Portfólio Interativo",
    category: "Frontend",
    featured: true,
    date: "2025",
    role: {
      pt: "Arquiteto Frontend & UI Designer",
      en: "Frontend Architect & UI Designer"
    },
    thumbnailGradient: "from-blue-600 via-indigo-700 to-purple-900",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    shortDescription: {
      pt: "Ambiente interativo de vitrine para desenvolvedores com customização de temas, testes de componentes e visualizador de código.",
      en: "Interactive showcase environment for developers featuring theme customization, component playgrounds, and code inspector."
    },
    fullDescription: {
      pt: "Uma aplicação web moderna focada em proporcionar aos desenvolvedores uma plataforma rica para catalogar projetos, compartilhar snippets e visualizar métricas de código com animações suaves e micro-interações refinadas.",
      en: "A cutting-edge web application designed to give developers a rich platform to showcase engineering projects, share code snippets, and inspect code metrics with refined micro-interactions."
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion", "Lucide Icons", "Vite"],
    liveDemoUrl: "https://devhub-showcase.vercel.app",
    githubUrl: "https://github.com/LucasTameirao/portifolio_pessoal",
    features: {
      pt: [
        "Navegação fluída por âncoras e modais detalhados de estudos de caso",
        "Suporte a múltiplos idiomas (Português / Inglês) instantâneo",
        "Formulário de contato interativo com validação e feedback com confete",
        "Terminal interativo com comandos CLI simulados para exploração rápida",
        "Componentes modulares de alta fidelidade e acessibilidade WCAG AA"
      ],
      en: [
        "Smooth anchor scroll navigation and in-depth case study modals",
        "Instant internationalization (Portuguese / English) switch",
        "Interactive contact form with real validation and celebratory feedback",
        "Simulated CLI terminal for rapid portfolio exploration",
        "Modular high-fidelity UI components compliant with WCAG AA accessibility"
      ]
    },
    challenges: {
      pt: "Criar uma experiência visual de alto impacto sem recorrer a bibliotecas pesadas de 3D, garantindo carregamento ultrarrápido em dispositivos móveis.",
      en: "Crafting a high-impact visual aesthetic without bloated 3D dependencies, ensuring lightning-fast load times on mobile devices."
    },
    architecture: {
      pt: "Componentização limpa com TypeScript, gerenciamento de estado unificado e renderização otimizada com Vite.",
      en: "Clean TypeScript componentization, unified lightweight state management, and optimized Vite build configuration."
    },
    metrics: ["0.4s First Contentful Paint", "100% Responsivo", "TypeScript Strict Mode"]
  },
  {
    id: "task-craft-api",
    title: "TaskCraft - API de Microsserviços & Automação",
    category: "Backend",
    featured: true,
    date: "2024",
    role: {
      pt: "Desenvolvedor Backend",
      en: "Backend Engineer"
    },
    thumbnailGradient: "from-emerald-600 via-teal-700 to-slate-900",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    shortDescription: {
      pt: "API RESTful escalável para gerenciamento de fluxos de automação de tarefas com filas assíncronas e documentação Swagger.",
      en: "Scalable RESTful API for task automation workflows with asynchronous queues and automated Swagger documentation."
    },
    fullDescription: {
      pt: "Backend robusto projetado para processar milhares de requisições concorrentes, executar rotinas agendadas (cron jobs), emitir webhooks e persistir dados com integridade referencial.",
      en: "Robust backend engineered to process concurrent requests, trigger scheduled jobs, broadcast webhook notifications, and maintain relational data integrity."
    },
    technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Redis", "Docker", "Swagger"],
    liveDemoUrl: "https://taskcraft-api-docs.onrender.com",
    githubUrl: "https://github.com/LucasTameirao/taskcraft-backend-api",
    features: {
      pt: [
        "Autenticação Stateless com JWT e Refresh Tokens criptografados",
        "Fila de processamento assíncrono em background utilizando Redis",
        "Validação estrita de schemas de entrada com Zod / Joi",
        "Documentação interativa OpenAPI / Swagger acessível via rota",
        "Cobertura abrangente de testes unitários e de integração com Jest"
      ],
      en: [
        "Stateless authentication with encrypted JWT and Refresh Tokens",
        "Background job processing queues powered by Redis",
        "Strict input payload validation schemas using Zod / Joi",
        "Interactive OpenAPI / Swagger documentation live route",
        "Comprehensive unit and integration test coverage with Jest"
      ]
    },
    challenges: {
      pt: "Garantir tolerância a falhas e retentativas exponenciais automáticas quando serviços externos de mensageria sofrem instabilidade.",
      en: "Implementing fault tolerance and exponential backoff retry mechanisms when external messaging services experience downtime."
    },
    architecture: {
      pt: "Clean Architecture com divisão em Domínio, Casos de Uso, Controladores e Repositórios com Injeção de Dependências.",
      en: "Clean Architecture separating Domain, Use Cases, Controllers, and Repositories via Dependency Injection."
    },
    metrics: ["95%+ Cobertura de Testes", "Docker Containerized", "Taxa de Erro < 0.01%"]
  },
  {
    id: "finance-track-app",
    title: "FinTrack - Controle Financeiro Pessoal",
    category: "Full Stack",
    featured: false,
    date: "2024",
    role: {
      pt: "Desenvolvedor Full Stack",
      en: "Full Stack Developer"
    },
    thumbnailGradient: "from-amber-600 via-orange-700 to-rose-950",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80",
    shortDescription: {
      pt: "Aplicativo web para gestão orçamentária, categorização automática de despesas e gráficos de projeção financeira.",
      en: "Web app for personal budget management, automatic expense categorisation, and financial forecast charts."
    },
    fullDescription: {
      pt: "Uma ferramenta prática que simplifica a vida financeira do usuário através de dashboards visuais, metas de economia mensais e relatórios comparativos entre receitas e custos fixos/variáveis.",
      en: "A handy tool designed to simplify personal finances through interactive visual charts, monthly savings goals, and comparative income vs expense reports."
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    liveDemoUrl: "https://fintrack-web.vercel.app",
    githubUrl: "https://github.com/LucasTameirao/fintrack-app",
    features: {
      pt: [
        "Classificação instantânea de transações por categoria com ícones dinâmicos",
        "Gráficos interativos de pizza e barras para análise de fluxo de caixa",
        "Definição de metas com barra de progresso visual em tempo real",
        "Armazenamento seguro e filtragem avançada por mês e tipo de despesa"
      ],
      en: [
        "Instant transaction categorization with dynamic icons",
        "Interactive pie and bar visualizers for cashflow analysis",
        "Savings goals tracker with real-time visual progress indicators",
        "Secure persistence and advanced filtering by month and expense category"
      ]
    },
    challenges: {
      pt: "Cálculo preciso de projeções financeiras e tratamento de diferentes moedas e formatações locais.",
      en: "Precision in financial floating calculations and localized currency formatters."
    },
    architecture: {
      pt: "Frontend modular com componentes atômicos e context API para controle de estado financeiro reativo.",
      en: "Modular frontend with atomic components and React Context for reactive financial state."
    }
  },
  {
    id: "weather-pulse",
    title: "WeatherPulse - Radar & Previsão Meteorológica",
    category: "Frontend",
    featured: false,
    date: "2024",
    role: {
      pt: "Desenvolvedor Frontend",
      en: "Frontend Developer"
    },
    thumbnailGradient: "from-sky-600 via-blue-800 to-indigo-950",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80",
    shortDescription: {
      pt: "Aplicação de clima em tempo real com geolocalização, previsões horárias para 7 dias e alertas climáticos.",
      en: "Real-time weather radar application with geolocation, 7-day hourly forecasts, and climate warnings."
    },
    fullDescription: {
      pt: "Plataforma focada em design limpo e responsivo para visualização das condições atmosféricas, umidade, velocidade dos ventos, índice UV e mapas interativos de satélite.",
      en: "Platform with a clean and responsive layout displaying atmospheric conditions, humidity, wind velocity, UV index, and weather forecasts."
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API", "Lucide Icons"],
    liveDemoUrl: "https://weatherpulse-live.vercel.app",
    githubUrl: "https://github.com/LucasTameirao/weatherpulse",
    features: {
      pt: [
        "Detecção automática da localização do usuário com um clique",
        "Busca global de cidades com autocompletar inteligente",
        "Variação dinâmica de temas baseada nas condições do clima (chuva, sol, noite)",
        "Previsão detalhada de hora em hora com gráficos de temperatura"
      ],
      en: [
        "One-click automatic user geolocation detection",
        "Global city search with responsive autocomplete suggestions",
        "Dynamic theme accents adapting to current weather conditions",
        "Detailed hourly forecast with smooth temperature graphs"
      ]
    },
    challenges: {
      pt: "Gerenciamento de estados de carregamento e fallbacks inteligentes caso a geolocalização seja negada pelo navegador.",
      en: "Managing loading states and graceful fallbacks when geolocation permissions are denied."
    },
    architecture: {
      pt: "Integração desacoplada de API com debounce nas buscas e cache local de consultas frequentes.",
      en: "Decoupled API integration with debounced search and localStorage caching for frequent queries."
    }
  },
  {
    id: "micro-auth-service",
    title: "AuthShield - Serviço de Autenticação Segura",
    category: "Mobile & API",
    featured: false,
    date: "2024",
    role: {
      pt: "Engenheiro Backend & Segurança",
      en: "Backend & Security Engineer"
    },
    thumbnailGradient: "from-violet-600 via-purple-800 to-slate-950",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    shortDescription: {
      pt: "Microsserviço de autenticação centralizada com OAuth2, 2FA (TOTP) e rate limiting preventivo contra ataques de força bruta.",
      en: "Centralized authentication microservice featuring OAuth2, 2FA (TOTP), and proactive rate limiting against brute-force attacks."
    },
    fullDescription: {
      pt: "Módulo desacoplado de autenticação empresarial pronto para ser plugado em qualquer ecossistema de microsserviços. Implementa melhores práticas OWASP.",
      en: "Decoupled enterprise auth module ready to integrate into any microservice cluster, strictly adhering to OWASP top security guidelines."
    },
    technologies: ["Node.js", "Express", "TypeScript", "Redis", "PostgreSQL", "JWT", "Bcrypt"],
    liveDemoUrl: undefined,
    githubUrl: "https://github.com/LucasTameirao/authshield-service",
    features: {
      pt: [
        "Suporte a múltiplos provedores de login social (Google, GitHub)",
        "Autenticação de dois fatores (2FA) via aplicativos autenticadores padrão TOTP",
        "Rate limiting por IP e chave de usuário com Redis",
        "Auditoria completa de logs de acesso e sessões ativas"
      ],
      en: [
        "Multi-provider social login support (Google, GitHub)",
        "Two-factor authentication (2FA) via standard TOTP authenticator apps",
        "IP and API key rate limiting orchestrated with Redis",
        "Comprehensive audit logging of access attempts and active sessions"
      ]
    },
    challenges: {
      pt: "Garantir revogação instantânea de sessões e tokens sem penalizar a performance das requisições subsequentes.",
      en: "Ensuring instant invalidation of JWT tokens and sessions without degrading request latency."
    },
    architecture: {
      pt: "Microsserviço conteinerizado com Docker, isolado por rede privada e documentado com OpenAPI.",
      en: "Containerized Docker microservice isolated in private network and documented via OpenAPI."
    }
  }
];

export const SKILLS_DATA: Skill[] = [
  // Frontend
  {
    name: "React.js",
    level: 95,
    experienceYears: "4+ anos",
    category: "frontend",
    icon: "Atom",
    description: {
      pt: "Hooks avançados, Context API, renderização otimizada, Server/Client components e ecossistema moderno.",
      en: "Advanced hooks, Context API, optimized rendering, Server/Client components, and modern ecosystem."
    }
  },
  {
    name: "TypeScript",
    level: 92,
    experienceYears: "3+ anos",
    category: "frontend",
    icon: "FileCode2",
    description: {
      pt: "Tipagem estrita, generics, interfaces avançadas e integração segura em toda a aplicação.",
      en: "Strict typing, generics, advanced interfaces, and end-to-end type safety."
    }
  },
  {
    name: "JavaScript (ES6+)",
    level: 95,
    experienceYears: "4+ anos",
    category: "frontend",
    icon: "Braces",
    description: {
      pt: "Programação assíncrona (Promises, async/await), manipulação de DOM, closures e boas práticas.",
      en: "Asynchronous programming (Promises, async/await), DOM manipulation, closures, and best practices."
    }
  },
  {
    name: "Tailwind CSS & CSS3",
    level: 94,
    experienceYears: "4+ anos",
    category: "frontend",
    icon: "Palette",
    description: {
      pt: "Design systems customizados, animações fluidas, Flexbox/Grid e layouts 100% responsivos para qualquer tela.",
      en: "Custom design systems, fluid animations, Flexbox/Grid, and 100% mobile-first responsive layouts."
    }
  },
  {
    name: "Next.js / Vite",
    level: 88,
    experienceYears: "3+ anos",
    category: "frontend",
    icon: "Zap",
    description: {
      pt: "Builds ultra-rápidos, roteamento avançado, otimização de imagens e SSR/SSG.",
      en: "Lightning-fast bundlers, advanced routing, asset optimization, and SSR/SSG setups."
    }
  },

  // Backend
  {
    name: "Node.js",
    level: 90,
    experienceYears: "3+ anos",
    category: "backend",
    icon: "Server",
    description: {
      pt: "Desenvolvimento de servidores assíncronos, processamento de streams, middlewares e microsserviços.",
      en: "Asynchronous server development, event loop, stream processing, middlewares, and microservices."
    }
  },
  {
    name: "Express.js",
    level: 92,
    experienceYears: "3+ anos",
    category: "backend",
    icon: "Layers",
    description: {
      pt: "APIs RESTful performáticas, arquitetura modular, segurança de rotas, middlewares de autenticação e logs.",
      en: "Performant RESTful APIs, modular routing, route security, auth middlewares, and structured logging."
    }
  },
  {
    name: "APIs RESTful & GraphQL",
    level: 90,
    experienceYears: "3+ anos",
    category: "backend",
    icon: "Network",
    description: {
      pt: "Modelagem de contratos de dados, versionamento, paginação, filtros e documentação com Swagger.",
      en: "API schema design, versioning, pagination, query filtering, and Swagger documentation."
    }
  },

  // Database
  {
    name: "PostgreSQL",
    level: 85,
    experienceYears: "3+ anos",
    category: "database",
    icon: "Database",
    description: {
      pt: "Modelagem relacional, consultas complexas, índices otimizados, migrations e integridade de dados.",
      en: "Relational data modeling, complex queries, index optimization, migrations, and referential integrity."
    }
  },
  {
    name: "MongoDB",
    level: 86,
    experienceYears: "3+ anos",
    category: "database",
    icon: "FileSpreadsheet",
    description: {
      pt: "Modelagem NoSQL de documentos, pipelines de agregação, índices e integração com Mongoose.",
      en: "NoSQL document schemas, aggregation pipelines, indexing strategies, and Mongoose ORM."
    }
  },
  {
    name: "Redis",
    level: 78,
    experienceYears: "2+ anos",
    category: "database",
    icon: "Cpu",
    description: {
      pt: "Cache em memória, gerenciamento de sessões, filas assíncronas e controle de taxa de requisições.",
      en: "In-memory caching, session stores, async job queues, and API rate limiting."
    }
  },

  // Tools & DevOps
  {
    name: "Git & GitHub",
    level: 94,
    experienceYears: "4+ anos",
    category: "tools",
    icon: "GitBranch",
    description: {
      pt: "Versionamento de código, Git Flow, pull requests, code reviews e resolução avançada de conflitos.",
      en: "Version control, Git Flow branching, pull request reviews, and advanced merge conflict resolution."
    }
  },
  {
    name: "Docker & Conteinerização",
    level: 80,
    experienceYears: "2+ anos",
    category: "tools",
    icon: "Box",
    description: {
      pt: "Criação de Dockerfiles multi-stage, docker-compose para ambientes de desenvolvimento e deploy.",
      en: "Multi-stage Dockerfiles, docker-compose configuration for local dev and deploy workflows."
    }
  },
  {
    name: "Testes (Jest / Testing Library)",
    level: 84,
    experienceYears: "2+ anos",
    category: "tools",
    icon: "CheckCircle2",
    description: {
      pt: "Testes unitários e de integração, mocks, TDD e garantia contínua de estabilidade do código.",
      en: "Unit and integration testing, mocks, TDD patterns, and continuous code stability."
    }
  },
  {
    name: "Figma & UI/UX Design",
    level: 88,
    experienceYears: "3+ anos",
    category: "tools",
    icon: "Figma",
    description: {
      pt: "Prototipagem de interfaces, wireframes, design systems e transformação fiel de layouts em código.",
      en: "UI prototyping, wireframes, component design systems, and pixel-perfect design-to-code implementation."
    }
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    role: {
      pt: "Desenvolvedor Full Stack",
      en: "Full Stack Developer"
    },
    company: "Projetos Independentes & Consultoria de Software",
    location: "Brasil (Remoto)",
    period: {
      pt: "2023 - Presente",
      en: "2023 - Present"
    },
    current: true,
    description: {
      pt: "Desenvolvimento de soluções web completas de ponta a ponta, desde a prototipagem de UI/UX até o deploy de APIs escaláveis e interfaces responsivas.",
      en: "End-to-end full stack web development, spanning UI/UX wireframing to deploying scalable APIs and responsive frontends."
    },
    achievements: {
      pt: [
        "Implementação de mais de 10 aplicações em produção com 100% de satisfação dos clientes",
        "Redução média de 40% no tempo de carregamento de páginas através de otimizações no frontend com React/Vite",
        "Construção de APIs RESTful seguras com autenticação JWT e validações rigorosas",
        "Criação de Design Systems modulares e reutilizáveis acelerando o desenvolvimento de novas telas em 50%"
      ],
      en: [
        "Delivered 10+ production applications with 100% customer satisfaction score",
        "Achieved an average 40% reduction in page load latency via frontend optimizations in React/Vite",
        "Engineered secure RESTful APIs with JWT authentication and strict payload validation",
        "Created modular reusable Design Systems accelerating feature delivery speed by 50%"
      ]
    },
    technologies: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "PostgreSQL", "Git"]
  },
  {
    id: "exp-2",
    role: {
      pt: "Desenvolvedor Frontend",
      en: "Frontend Developer"
    },
    company: "Tech Solutions & Projetos Colaborativos",
    location: "Brasil",
    period: {
      pt: "2022 - 2023",
      en: "2022 - 2023"
    },
    current: false,
    description: {
      pt: "Criação e manutenção de interfaces de usuário web interativas, integração contínua com APIs REST e foco na experiência do usuário e acessibilidade.",
      en: "Creation and maintenance of interactive web user interfaces, continuous integration with REST APIs, and focus on user experience and accessibility."
    },
    achievements: {
      pt: [
        "Desenvolvimento de componentes acessíveis e reativos seguindo padrões WCAG",
        "Refatoração de bases de código legadas para TypeScript, aumentando a confiabilidade",
        "Integração de serviços de mapas, gráficos e formulários interativos com validações em tempo real"
      ],
      en: [
        "Developed accessible and reactive UI components complying with WCAG guidelines",
        "Refactored legacy codebases to TypeScript, drastically improving type safety",
        "Integrated dynamic maps, interactive charts, and real-time validated forms"
      ]
    },
    technologies: ["React", "JavaScript ES6+", "HTML5/CSS3", "Tailwind CSS", "REST APIs", "Figma"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    degree: {
      pt: "Bacharelado / Graduação em Tecnologia da Informação / Engenharia de Software",
      en: "Bachelor's Degree in Information Technology / Software Engineering"
    },
    institution: "Ensino Superior em Tecnologia",
    period: "Graduação Contínua",
    badge: "Ensino Superior",
    description: {
      pt: "Formação sólida em algoritmos, estruturas de dados, engenharia de software, banco de dados e arquitetura de sistemas.",
      en: "Solid foundation in algorithms, data structures, software engineering, databases, and systems architecture."
    }
  },
  {
    id: "edu-2",
    degree: {
      pt: "Especialização em Desenvolvimento Full Stack Moderno",
      en: "Specialization in Modern Full Stack Development"
    },
    institution: "Certificações & Bootcamps Avançados",
    period: "2023 - 2024",
    badge: "Certificado",
    description: {
      pt: "Aprofundamento prático no ecossistema React, TypeScript, Node.js, arquitetura limpa, microsserviços e testes automatizados.",
      en: "Hands-on immersion in the React, TypeScript, Node.js ecosystem, clean architecture, microservices, and testing."
    }
  }
];
