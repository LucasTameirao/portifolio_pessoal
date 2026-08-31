import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';
import { FluidBackground } from './components/common/FluidBackground';
import { RefreshCw } from 'lucide-react';

export const App: React.FC = () => {
  const [testCount, setTestCount] = useState(0);

  return (
    <div className="min-h-screen text-slate-100 flex flex-col relative selection:bg-orange-500/30 selection:text-orange-200">
      
      {/* Background com Gradiente Fluido Animado */}
      <FluidBackground />

      {/* Top Banner de Ambiente de Teste */}
      <div className="bg-slate-950/75 backdrop-blur-md border-b border-orange-500/20 px-4 py-2 text-xs text-slate-300 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-orange-400 animate-ping" />
            <span className="font-mono font-semibold text-orange-300">PÁGINA HOME INTEGRADA (WIREFRAME + GRADIENTE FLUIDO)</span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-400">
              One-Page Scroll contínuo • Avatar personalizável
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTestCount((prev) => prev + 1)}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/40 text-orange-200 font-mono text-[11px] transition-colors"
            >
              <RefreshCw className={`w-3 h-3 ${testCount > 0 ? 'animate-spin' : ''}`} />
              React Reativo: <strong>{testCount}</strong>
            </button>
          </div>
        </div>
      </div>

      {/* Navbar com links de ancoragem */}
      <Navbar />

      {/* Conteúdo Principal com One-Page Scroll Contínuo */}
      <main className="flex-grow z-10">
        {/* Seção Home (Intro + About me + Avatar do Wireframe) */}
        <HeroSection />

        {/* Seção de Habilidades / Stacks */}
        <SkillsSection />

        {/* Seção de Projetos em Destaque */}
        <ProjectsSection />

        {/* Seção de Contato */}
        <ContactSection />
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default App;
