import React from 'react';
import { ProjectItem } from '../../types/project';
import { X, ArrowRight } from 'lucide-react';

interface ProjectPreviewCardProps {
  project: ProjectItem;
  onClose: () => void;
  onViewMore: () => void;
}

export const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({
  project,
  onClose,
  onViewMore,
}) => {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[420px] bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-800 flex flex-col justify-between space-y-6 relative">
      {/* Botão de Fechar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        aria-label="Fechar pré-visualização"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Conteúdo do Menu */}
      <div className="space-y-4 pr-6 pt-1">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-normal text-slate-900 leading-snug">
          About <strong className="font-bold text-slate-950">{project.title}</strong>
        </h3>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
          {project.shortDescription}
        </p>

        {/* Tags de Tecnologias */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 text-xs font-mono text-slate-400">
              +{project.technologies.length - 5} mais
            </span>
          )}
        </div>
      </div>

      {/* Botão "view more" do Wireframe */}
      <div className="flex justify-end pt-4 border-t border-slate-100">
        <button
          onClick={onViewMore}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-white bg-[#213243] hover:bg-[#16222f] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>view more</span>
          <ArrowRight className="w-4 h-4 text-orange-400" />
        </button>
      </div>
    </div>
  );
};
