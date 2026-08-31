import React from 'react';
import { Heart, Linkedin, Github, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'Github':
        return <Github className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-white font-bold text-base tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs text-slate-500">
              Desenvolvido com <Heart className="w-3.5 h-3.5 inline text-rose-500 fill-rose-500/20" /> utilizando React & Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-slate-800/60 transition-all duration-200"
              >
                {getIcon(link.iconName)}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-600">
          &copy; {currentYear} Lucas Assis Tameirão Martins. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
