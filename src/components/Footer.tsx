import React from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Code2, 
  ArrowUp, 
  Heart, 
  Github, 
  Linkedin, 
  Mail,
  FileText
} from 'lucide-react';

interface FooterProps {
  language: Language;
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-100 text-base">
                Lucas <span className="text-cyan-400">Tameirão</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {language === 'pt'
                ? 'Desenvolvedor Full Stack focado na criação de soluções digitais modernas, eficientes e escaláveis com React, TypeScript e Node.js.'
                : 'Full Stack Developer committed to crafting modern, performant, and scalable digital solutions with React, TypeScript, and Node.js.'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              {language === 'pt' ? 'NAVEGAÇÃO' : 'NAVIGATION'}
            </h4>
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollTo('home')} 
                className="text-left text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {language === 'pt' ? 'Início' : 'Home'}
              </button>
              <button 
                onClick={() => scrollTo('about')} 
                className="text-left text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {language === 'pt' ? 'Sobre Mim' : 'About'}
              </button>
              <button 
                onClick={() => scrollTo('skills')} 
                className="text-left text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {language === 'pt' ? 'Habilidades & Tecnologias' : 'Skills & Tech'}
              </button>
              <button 
                onClick={() => scrollTo('projects')} 
                className="text-left text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {language === 'pt' ? 'Projetos em Destaque' : 'Projects'}
              </button>
              <button 
                onClick={() => scrollTo('experience')} 
                className="text-left text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {language === 'pt' ? 'Trajetória' : 'Experience'}
              </button>
            </div>
          </div>

          {/* Connect & Resume */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              {language === 'pt' ? 'CONTATO & REDES' : 'CONNECT'}
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 hover:text-cyan-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 hover:text-teal-400 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenCV}
                className="flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer font-mono"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>CV</span>
              </button>
            </div>
            <p className="text-slate-500 text-[11px] font-mono">
              Email: {PERSONAL_INFO.email}
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs flex items-center gap-1">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>por</span>
            <span className="text-slate-300 font-semibold">{PERSONAL_INFO.name}</span>
          </p>

          <button
            id="btn-back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer text-xs"
          >
            <span>{language === 'pt' ? 'Voltar ao topo' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
