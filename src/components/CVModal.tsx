import React, { useEffect } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO, SKILLS_DATA, EXPERIENCES_DATA, EDUCATION_DATA, PROJECTS_DATA } from '../data/portfolioData';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  CheckCircle2,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CVModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, language, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div 
        id="cv-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          id="cv-modal-container"
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        >
          {/* CV Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800/80 sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-100 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Curriculum Vitae • {PERSONAL_INFO.shortName}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                title="Imprimir / Salvar como PDF"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">{language === 'pt' ? 'Imprimir / PDF' : 'Print / PDF'}</span>
              </button>

              <button
                id="close-cv-modal-btn"
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div id="printable-cv" className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-900 text-slate-200">
            
            {/* Header info */}
            <div className="border-b border-slate-800 pb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-cyan-400 font-semibold text-sm sm:text-base mt-1">
                {PERSONAL_INFO.headline[language]}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-4">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                  linkedin.com/in/lucastameirao
                </span>
                <span className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  github.com/LucasTameirao
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>{language === 'pt' ? 'RESUMO PROFISSIONAL' : 'PROFESSIONAL SUMMARY'}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {PERSONAL_INFO.detailedBio[language]}
              </p>
            </div>

            {/* Core Competencies / Stacks */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Code2 className="w-4 h-4" />
                <span>{language === 'pt' ? 'COMPETÊNCIAS TÉCNICAS' : 'CORE TECHNICAL SKILLS'}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-1">Frontend:</span>
                  <span className="text-slate-400">React.js, TypeScript, Next.js, JavaScript (ES6+), Tailwind CSS, HTML5/CSS3, Motion, Responsive Design.</span>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-1">Backend:</span>
                  <span className="text-slate-400">Node.js, Express.js, RESTful APIs, GraphQL, Microservices, JWT/OAuth Authentication.</span>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-1">Banco de Dados:</span>
                  <span className="text-slate-400">PostgreSQL, MongoDB, Redis, Prisma, Mongoose, Data Modeling & Indexing.</span>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-1">Ferramentas & Metodologias:</span>
                  <span className="text-slate-400">Git & GitHub, Docker, Jest/Testing Library, Vite, Figma UI/UX, Clean Code, CI/CD, Scrum.</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" />
                <span>{language === 'pt' ? 'EXPERIÊNCIA PROFISSIONAL' : 'PROFESSIONAL EXPERIENCE'}</span>
              </h2>
              <div className="space-y-5">
                {EXPERIENCES_DATA.map((exp) => (
                  <div key={exp.id} className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h3 className="font-bold text-slate-100 text-sm">{exp.role[language]}</h3>
                      <span className="text-xs font-mono text-cyan-400">{exp.period[language]}</span>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      {exp.company} • {exp.location}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {exp.description[language]}
                    </p>
                    <div className="space-y-1 pt-1">
                      {exp.achievements[language].map((ach, i) => (
                        <div key={i} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                <span>{language === 'pt' ? 'FORMAÇÃO ACADÊMICA' : 'EDUCATION & CERTIFICATIONS'}</span>
              </h2>
              <div className="space-y-3">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 text-xs">
                    <div className="flex justify-between items-center font-bold text-slate-200">
                      <span>{edu.degree[language]}</span>
                      <span className="text-cyan-400 font-mono">{edu.period}</span>
                    </div>
                    <div className="text-slate-400 mt-0.5">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer bar */}
          <div className="px-6 py-4 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-mono">
              Lucas Assis Tameirão Martins • {language === 'pt' ? 'Portfólio & Currículo' : 'Portfolio & Resume'}
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              {language === 'pt' ? 'Fechar' : 'Close'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
