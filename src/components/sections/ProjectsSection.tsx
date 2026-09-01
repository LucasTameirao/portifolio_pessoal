import React from 'react';
import { PROJECTS_DATA } from '../../data/projectsData';
import { ProjectItem } from '../../types/project';
import { PolaroidCard } from '../projects/PolaroidCard';
import { Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenDetails: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenDetails }) => {
  return (
    <section id="projects" className="w-full relative py-16 sm:py-24 bg-white text-slate-900 border-t-8 border-[#213243]">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        {/* ===================================================================== */}
        {/* CABEÇALHO DA SEÇÃO ("My projects" DO WIREFRAME)                       */}
        {/* ===================================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Meus projetos
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-1 font-normal">
              Clique em qualquer Polaroid para ver os detalhes completos da aplicação
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>{PROJECTS_DATA.length} Projetos Cadastrados</span>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* GRID DE CARDS POLAROID (DIRETO PARA DETALHES AO CLICAR)               */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
          {PROJECTS_DATA.map((project) => (
            <PolaroidCard
              key={project.id}
              project={project}
              isSelected={false}
              onClick={() => onOpenDetails(project)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
