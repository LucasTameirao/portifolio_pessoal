import React, { useEffect } from 'react';
import { Project, Language } from '../types';
import { 
  X, 
  ExternalLink, 
  Github, 
  Calendar, 
  UserCheck, 
  CheckCircle2, 
  Layers, 
  AlertCircle, 
  Sparkles,
  ArrowRight,
  Code2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectDetailModalProps {
  project: Project | null;
  language: Language;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ 
  project, 
  language, 
  onClose 
}) => {
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        id="project-detail-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-950/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          id="project-detail-modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        >
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800/80 sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
                {project.category}
              </span>
              <span className="text-slate-400 text-xs font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.date}
              </span>
            </div>

            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Fechar (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            
            {/* Title and Role */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-2">
                {project.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <UserCheck className="w-3.5 h-3.5" />
                  {project.role[language]}
                </span>
                {project.metrics && (
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((m, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {m}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Visual Image / Showcase */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-lg group">
              <div className={`w-full h-56 sm:h-72 bg-gradient-to-tr ${project.thumbnailGradient} relative flex items-center justify-center overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="text-xs font-mono text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700 backdrop-blur-sm">
                    {project.technologies.slice(0, 4).join(" • ")}
                  </div>
                </div>
              </div>
            </div>

            {/* Overview / Full Description */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>{language === 'pt' ? 'Visão Geral do Projeto' : 'Project Overview'}</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.fullDescription[language]}
              </p>
            </div>

            {/* Key Features Checkmarks */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{language === 'pt' ? 'Principais Funcionalidades' : 'Key Features'}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features[language].map((feature, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/50 border border-slate-800 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture & Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  {language === 'pt' ? 'Arquitetura & Engenharia' : 'Architecture & Engineering'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.architecture[language]}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  {language === 'pt' ? 'Desafios & Soluções' : 'Challenges & Solutions'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.challenges[language]}
                </p>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                {language === 'pt' ? 'TECNOLOGIAS UTILIZADAS' : 'TECHNOLOGIES USED'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-slate-800 text-slate-200 border border-slate-700 flex items-center gap-1.5"
                  >
                    <Code2 className="w-3 h-3 text-cyan-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="px-6 py-4 bg-slate-950 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              {language === 'pt' ? 'Fechar' : 'Close'}
            </button>

            <div className="flex items-center gap-3">
              <a
                id="modal-github-link"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{language === 'pt' ? 'Ver Repositório' : 'GitHub Repo'}</span>
              </a>

              {project.liveDemoUrl && (
                <a
                  id="modal-demo-link"
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl shadow-md shadow-cyan-500/20 transition-all"
                >
                  <span>{language === 'pt' ? 'Demonstração Ao Vivo' : 'Live Demo'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
