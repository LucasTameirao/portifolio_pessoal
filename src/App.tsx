import React, { useState, useRef, useLayoutEffect } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ProjectDetailsPage } from './components/projects/ProjectDetailsPage';
import { FluidBackground } from './components/common/FluidBackground';
import { ProjectItem } from './types/project';

export const App: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const shouldRestoreProjectsScroll = useRef(false);

  const handleOpenDetails = (project: ProjectItem) => {
    setActiveProject(project);
  };

  const handleBackToProjects = () => {
    shouldRestoreProjectsScroll.current = true;
    setActiveProject(null);
  };

  // useLayoutEffect executa ANTES do navegador desenhar na tela:
  useLayoutEffect(() => {
    if (activeProject) {
      // 1. Ao entrar nos detalhes: reseta o scroll diretamente no topo instantaneamente
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } else if (shouldRestoreProjectsScroll.current) {
      // 2. Ao voltar para os projetos: posiciona diretamente na seção de projetos
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'instant' });
      }
      shouldRestoreProjectsScroll.current = false;
    }
  }, [activeProject]);

  return (
    <div className="min-h-screen text-slate-100 relative selection:bg-orange-500/30 selection:text-orange-200">
      {/* Background com Gradiente Fluido Animado */}
      <FluidBackground />

      <main className="relative z-10">
        {activeProject ? (
          /* Página Dedicada de Detalhes */
          <ProjectDetailsPage
            project={activeProject}
            onBack={handleBackToProjects}
          />
        ) : (
          /* Página Principal: Home + My Projects */
          <>
            <HeroSection />
            <ProjectsSection onOpenDetails={handleOpenDetails} />
          </>
        )}
      </main>
    </div>
  );
};

export default App;
