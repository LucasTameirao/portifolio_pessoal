import React, { useState } from 'react';
import { ProjectItem } from '../../types/project';
import { Sparkles } from 'lucide-react';

interface PolaroidCardProps {
  project: ProjectItem;
  isSelected?: boolean;
  onClick: () => void;
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({
  project,
  isSelected = false,
  onClick,
}) => {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <button
      onClick={onClick}
      className="group relative w-full aspect-[4/5] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform text-left focus:outline-none hover:scale-[1.02] hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-orange-500/25"
      style={{
        background: 'linear-gradient(180deg, #ea6322 0%, #c44f15 45%, #233446 80%, #172433 100%)',
        padding: '16px 16px 36px 16px', // Classic Polaroid padding with larger bottom margin
      }}
      aria-label={`Ver detalhes do projeto ${project.title}`}
    >
      {/* Inner Polaroid Canvas (Square/Rectangle image area) */}
      <div className="w-full h-[76%] rounded-md bg-white overflow-hidden relative shadow-inner flex items-center justify-center">
        {project.polaroidImage && !hasImageError ? (
          <img
            src={project.polaroidImage}
            alt={project.title}
            onError={() => setHasImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Placeholder Idêntico ao Wireframe caso não tenha imagem */
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-white text-slate-800">
            <span className="font-semibold text-lg sm:text-xl tracking-tight text-slate-900">
              {project.title || 'Project'}
            </span>
            {project.tagline && (
              <span className="text-xs text-slate-500 mt-1 font-mono line-clamp-1">
                {project.tagline}
              </span>
            )}
          </div>
        )}

        {/* Hover Highlight Badge */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/70 backdrop-blur-xs text-orange-300 text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5" />
          <span>Ver projeto</span>
        </div>
      </div>

      {/* Polaroid Bottom Label (Classic space for handwritten style title) */}
      <div className="h-[24%] pt-3 flex items-center justify-between px-1">
        <span className="text-white font-medium text-sm sm:text-base tracking-tight truncate pr-2">
          {project.title}
        </span>
        <span className="text-[11px] font-mono text-orange-200/80 bg-slate-900/60 px-2 py-0.5 rounded-md shrink-0">
          {project.technologies[0] || 'Web'}
        </span>
      </div>
    </button>
  );
};
