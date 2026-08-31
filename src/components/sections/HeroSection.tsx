import React from 'react';
import { ExternalLink, ChevronDown, Linkedin, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ProfileAvatar } from '../common/ProfileAvatar';

export const HeroSection: React.FC = () => {
  // Função para scroll suave até qualquer seção por ID
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative w-full text-slate-100 flex flex-col items-center">
      
      {/* ========================================================================= */}
      {/* DOBRA 1: APRESENTAÇÃO / INTRODUÇÃO (WIREFRAME SUPERIOR)                  */}
      {/* ========================================================================= */}
      <section className="min-h-[85vh] sm:min-h-[90vh] w-full max-w-6xl mx-auto px-6 sm:px-12 pt-16 sm:pt-24 pb-12 flex flex-col justify-between">
        
        {/* Bloco de Apresentação de Texto */}
        <div className="space-y-6 sm:space-y-8 max-w-3xl pt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.25] tracking-tight text-white/95">
            {PERSONAL_INFO.tagline}
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-medium leading-snug">
            {PERSONAL_INFO.subTagline}
          </p>

          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-medium leading-snug">
            {PERSONAL_INFO.ctaExploreText}
          </p>

          {/* Botão Pill LinkedIn */}
          <div className="pt-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0a66c2] hover:bg-[#004182] text-white font-medium text-sm sm:text-base shadow-lg shadow-blue-900/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>Linkedin</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Botão Central "explore" (Pill Button do Wireframe) */}
        <div className="flex justify-center py-10">
          <button
            onClick={() => scrollToSection('about-section')}
            className="wireframe-pill-btn px-8 sm:px-12 py-3 sm:py-3.5 rounded-full text-base sm:text-lg font-medium cursor-pointer flex items-center gap-2 group"
            aria-label="Explorar sobre mim"
          >
            <span>explore</span>
            <ChevronDown className="w-5 h-5 text-slate-600 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DOBRA 2: ABOUT ME & AVATAR (WIREFRAME INFERIOR)                           */}
      {/* ========================================================================= */}
      <section 
        id="about-section" 
        className="min-h-[85vh] sm:min-h-[90vh] w-full max-w-6xl mx-auto px-6 sm:px-12 pt-12 pb-16 flex flex-col justify-between"
      >
        {/* Grid com Card About Me e Avatar */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 pt-8">
          
          {/* Card Dark Slate "About me" */}
          <div className="w-full lg:flex-1 wireframe-dark-card rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {PERSONAL_INFO.aboutTitle}
            </h2>
            
            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              {PERSONAL_INFO.aboutText}
            </p>

            <div className="pt-2 text-xs sm:text-sm text-cyan-300 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>React • TypeScript • Tailwind CSS • Node.js</span>
            </div>
          </div>

          {/* Avatar Circular com Foto / Placeholder */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <ProfileAvatar size="lg" />
          </div>

        </div>

        {/* Botão Central "projects" (Pill Button do Wireframe) */}
        <div className="flex justify-center py-10">
          <button
            onClick={() => scrollToSection('projects')}
            className="wireframe-pill-btn px-8 sm:px-12 py-3 sm:py-3.5 rounded-full text-base sm:text-lg font-medium cursor-pointer flex items-center gap-2 group"
            aria-label="Ir para projetos"
          >
            <span>projects</span>
            <ChevronDown className="w-5 h-5 text-slate-600 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
};
