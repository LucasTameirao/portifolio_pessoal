import React, { useState } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Terminal, 
  ArrowRight, 
  Download, 
  Sparkles, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code2,
  FolderGit2,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  language: Language;
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenCV }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'terminal' | 'stack'>('profile');
  const [copiedCode, setCopiedCode] = useState(false);
  const [cliInput, setCliInput] = useState('');
  const [cliLogs, setCliLogs] = useState<Array<{ command: string; output: string }>>([
    { 
      command: 'lucas.getCurrentStatus()', 
      output: language === 'pt' 
        ? '✓ Pronto para desenvolver soluções web modernas de alto impacto.' 
        : '✓ Ready to engineer high-impact modern web solutions.' 
    }
  ]);

  const developerCodeSnippet = `// lucas-profile.ts
import { Developer } from '@tech/core';

export const lucasTameirao: Developer = {
  name: "${PERSONAL_INFO.name}",
  role: "Full Stack Software Engineer",
  location: "Belo Horizonte, Brasil",
  mainStack: ["React", "TypeScript", "Node.js", "TailwindCSS"],
  passion: "Construir software performático, intuitivo e escalável",
  isAvailableForHire: true,
  contact: "${PERSONAL_INFO.email}"
};`;

  const copySnippet = () => {
    navigator.clipboard.writeText(developerCodeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliInput.trim()) return;

    const cmd = cliInput.trim().toLowerCase();
    let response = '';

    switch (cmd) {
      case 'help':
        response = 'Comandos disponíveis: whoami, skills, projects, contact, clear, date';
        break;
      case 'whoami':
        response = 'Lucas Assis Tameirão Martins - Desenvolvedor Full Stack apaixonado por código limpo e arquiteturas modernas.';
        break;
      case 'skills':
        response = 'React, TypeScript, Node.js, Express, Tailwind CSS, PostgreSQL, MongoDB, Redis, Docker, Git.';
        break;
      case 'projects':
        response = 'NexusFlow (SaaS), DevHub (Portfolio), TaskCraft (API), FinTrack (Finanças), WeatherPulse (Clima).';
        break;
      case 'contact':
        response = `Email: ${PERSONAL_INFO.email} | LinkedIn: /in/lucastameirao | GitHub: /LucasTameirao`;
        break;
      case 'date':
        response = new Date().toLocaleString();
        break;
      case 'clear':
        setCliLogs([]);
        setCliInput('');
        return;
      default:
        response = `Comando '${cmd}' não reconhecido. Digite 'help' para ver a lista de comandos.`;
    }

    setCliLogs(prev => [...prev, { command: cliInput, output: response }]);
    setCliInput('');
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Glow / Ambient background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introdução, Título, Filosofia e Ações */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-sm text-xs font-mono text-slate-300 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status[language]}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15] mb-4">
                {language === 'pt' ? (
                  <>
                    Construindo experiências <br className="hidden sm:inline" />
                    web com <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">precisão e tecnologia</span>
                  </>
                ) : (
                  <>
                    Engineering modern <br className="hidden sm:inline" />
                    web solutions with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">speed & elegance</span>
                  </>
                )}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
                {PERSONAL_INFO.bioSummary[language]}
              </p>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto"
            >
              <button
                id="hero-explore-projects-btn"
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm"
              >
                <FolderGit2 className="w-4 h-4 text-slate-950" />
                <span>{language === 'pt' ? 'Ver Projetos' : 'Explore Projects'}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                id="hero-open-cv-btn"
                onClick={onOpenCV}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer text-sm"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{language === 'pt' ? 'Currículo / CV' : 'Download CV'}</span>
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-cyan-400 bg-slate-900/50 hover:bg-slate-900 border border-slate-800/80 transition-all cursor-pointer text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>{language === 'pt' ? 'Entrar em Contato' : 'Contact Me'}</span>
              </button>
            </motion.div>

            {/* Social Proof & Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-6 pt-6 border-t border-slate-800/80 w-full"
            >
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                {language === 'pt' ? 'Conecte-se comigo:' : 'Connect with me:'}
              </div>
              <div className="flex items-center gap-3">
                <a
                  id="hero-github-link"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  id="hero-linkedin-link"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  id="hero-email-link"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 text-slate-400 hover:text-teal-400 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Code Sandbox / Terminal Box */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-black/60 backdrop-blur-xl overflow-hidden"
            >
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    lucas-environment
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    id="tab-profile"
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      activeTab === 'profile'
                        ? 'bg-slate-800 text-cyan-400 font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    profile.ts
                  </button>
                  <button
                    id="tab-terminal"
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
                      activeTab === 'terminal'
                        ? 'bg-slate-800 text-cyan-400 font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    terminal
                  </button>
                  <button
                    id="tab-stack"
                    onClick={() => setActiveTab('stack')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      activeTab === 'stack'
                        ? 'bg-slate-800 text-cyan-400 font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    stack.json
                  </button>
                </div>
              </div>

              {/* Window Content */}
              <div className="p-4 min-h-[300px] flex flex-col justify-between">
                {activeTab === 'profile' && (
                  <div>
                    <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-800/60 text-xs text-slate-400 font-mono">
                      <span>TypeScript v5.8 • ESM</span>
                      <button
                        id="btn-copy-code-snippet"
                        onClick={copySnippet}
                        className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                        title="Copiar código"
                      >
                        {copiedCode ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 text-[11px]">Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span className="text-[11px]">Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto">
                      <code>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-cyan-300">developer</span> = &#123;{'\n'}
                        {'  '}name: <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,{'\n'}
                        {'  '}headline: <span className="text-emerald-300">"Full Stack Developer"</span>,{'\n'}
                        {'  '}focus: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"TypeScript"</span>, <span className="text-amber-300">"Node.js"</span>],{'\n'}
                        {'  '}location: <span className="text-emerald-300">"Brasil"</span>,{'\n'}
                        {'  '}cleanCode: <span className="text-blue-400">true</span>,{'\n'}
                        {'  '}availableForWork: <span className="text-blue-400">true</span>{'\n'}
                        &#125;;{'\n\n'}
                        <span className="text-slate-500">// Clique em "Ver Projetos" para explorar</span>
                      </code>
                    </pre>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="flex flex-col h-full justify-between font-mono text-xs">
                    <div className="space-y-2 mb-3 max-h-[200px] overflow-y-auto pr-1">
                      <div className="text-slate-400">
                        Bem-vindo ao terminal interativo de Lucas Tameirão. Digite <span className="text-cyan-400 font-bold">'help'</span> para comandos.
                      </div>
                      {cliLogs.map((log, index) => (
                        <div key={index} className="space-y-0.5">
                          <div className="flex items-center gap-1.5 text-cyan-400">
                            <span className="text-slate-500">$</span>
                            <span>{log.command}</span>
                          </div>
                          <div className="text-slate-300 pl-3 text-[11px] leading-relaxed">
                            {log.output}
                          </div>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleCliSubmit} className="flex items-center gap-2 pt-2 border-t border-slate-800">
                      <span className="text-cyan-400">$</span>
                      <input
                        type="text"
                        id="cli-input-field"
                        value={cliInput}
                        onChange={(e) => setCliInput(e.target.value)}
                        placeholder="help, skills, whoami, clear..."
                        className="flex-1 bg-transparent text-slate-100 text-xs focus:outline-none placeholder-slate-600"
                      />
                      <button 
                        type="submit" 
                        id="cli-submit-btn"
                        className="text-[10px] uppercase font-bold text-slate-400 hover:text-cyan-400 px-2 py-0.5 rounded bg-slate-800"
                      >
                        Exec
                      </button>
                    </form>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="font-mono text-xs text-slate-300">
                    <div className="text-slate-400 mb-2 pb-2 border-b border-slate-800/60 flex items-center justify-between">
                      <span>technologies.json</span>
                      <span className="text-cyan-400 text-[11px]">Active stack</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                        <span className="text-cyan-400 font-semibold block mb-1">Frontend</span>
                        <p className="text-slate-400">React, TypeScript, Tailwind, Next.js, Redux, Motion</p>
                      </div>
                      <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                        <span className="text-emerald-400 font-semibold block mb-1">Backend</span>
                        <p className="text-slate-400">Node.js, Express, REST APIs, GraphQL, Fastify</p>
                      </div>
                      <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                        <span className="text-amber-400 font-semibold block mb-1">Database</span>
                        <p className="text-slate-400">PostgreSQL, MongoDB, Redis, Prisma, Mongoose</p>
                      </div>
                      <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                        <span className="text-purple-400 font-semibold block mb-1">DevOps & Tools</span>
                        <p className="text-slate-400">Git/GitHub, Docker, Jest, Vite, Figma</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom interactive status info */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Clean Architecture & TDD Ready</span>
                  </div>
                  <span className="text-slate-500">v2.5.0</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
