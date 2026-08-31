import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { FluidBackground } from './components/common/FluidBackground';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-100 relative selection:bg-orange-500/30 selection:text-orange-200">
      {/* Background com Gradiente Fluido Animado */}
      <FluidBackground />

      {/* Seção Home Exclusiva (Dobra 1: Apresentação + Dobra 2: About Me e Avatar) */}
      <main className="relative z-10">
        <HeroSection />
      </main>
    </div>
  );
};

export default App;
