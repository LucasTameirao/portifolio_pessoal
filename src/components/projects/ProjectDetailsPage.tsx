import React, { useState } from 'react';
import { ProjectItem } from '../../types/project';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Image as ImageIcon,
} from 'lucide-react';

interface ProjectDetailsPageProps {
  project: ProjectItem;
  onBack: () => void;
}

export const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({
  project,
  onBack,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasBannerError, setHasBannerError] = useState(false);
  const [hasCarouselError, setHasCarouselError] = useState<{ [key: number]: boolean }>({});
  const [isExiting, setIsExiting] = useState(false);

  const handleSmoothBack = () => {
    setIsExiting(true);
    setTimeout(() => {
      onBack();
    }, 180);
  };

  const carouselImages = project.carouselImages || [];
  const totalSlides = carouselImages.length;

  const nextSlide = () => {
    if (totalSlides > 0) {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
  };

  const prevSlide = () => {
    if (totalSlides > 0) {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  return (
    <div
      className={`min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 text-slate-100 flex flex-col justify-between transition-all duration-300 ${
        isExiting ? 'animate-pageExit' : 'animate-pageEnter'
      }`}
    >
      {/* Container Central com Largura Máxima */}
      <div className="w-full max-w-4xl mx-auto flex flex-col justify-between flex-1">
        
        {/* Barra Superior com Botão de Voltar */}
        <div className="flex items-center justify-between pb-8 border-b border-slate-800/80">
          <button
            onClick={handleSmoothBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-medium text-sm transition-all transform hover:-translate-x-1 cursor-pointer shadow-lg hover:shadow-orange-500/10"
            aria-label="Voltar para a lista de projetos"
          >
            <ArrowLeft className="w-4 h-4 text-orange-400" />
            <span>Voltar para My projects</span>
          </button>

          <span className="text-xs font-mono text-orange-300 bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-orange-500/30">
            Detalhes da Aplicação
          </span>
        </div>

        {/* ===================================================================== */}
        {/* CABEÇALHO DO PROJETO COM TÍTULO                                       */}
        {/* ===================================================================== */}
        <div className="space-y-6 pt-8">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {project.title}
            </h1>
            {project.tagline && (
              <p className="text-lg text-orange-300 font-medium font-sans">
                {project.tagline}
              </p>
            )}
          </div>

          {/* Banner Principal do Projeto (com fallback do Wireframe) */}
          <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 relative shadow-2xl flex items-center justify-center">
            {project.bannerImage && !hasBannerError ? (
              <img
                src={project.bannerImage}
                alt={project.title}
                onError={() => setHasBannerError(true)}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              /* Placeholder Wireframe (Caixa com X) */
              <div className="w-full h-full bg-[#d5d7dc] relative flex items-center justify-center overflow-hidden">
                <svg className="absolute inset-0 w-full h-full text-[#8e939d]" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.8" />
                </svg>
                <div className="relative z-10 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl text-white font-mono text-sm border border-slate-700">
                  {project.title} • Banner
                </div>
              </div>
            )}
          </div>

          {/* ===================================================================== */}
          {/* SEÇÕES DE DETALHES (Contexto, Tecnologias e Links)                   */}
          {/* ===================================================================== */}
          <div className="space-y-8 pt-4">
            
            {/* 1. Contexto & Desafio */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Contexto & Desafio
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                {project.contextAndChallenge || project.shortDescription}
              </p>
            </div>

            {/* 2. Tecnologias utilizadas */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Tecnologias utilizadas
              </h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 text-sm text-slate-200 bg-slate-900/85 border border-slate-800 px-3.5 py-2.5 rounded-xl shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-orange-400" />
                    <span className="font-mono text-xs text-slate-100">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Links relevantes */}
            <div className="space-y-3 pt-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Link relevantes
              </h2>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 text-slate-200 hover:text-white text-sm font-medium transition-all transform hover:-translate-y-0.5 shadow-md"
                  >
                    <Github className="w-4 h-4 text-orange-400" />
                    <span>Github</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 text-slate-200 hover:text-white text-sm font-medium transition-all transform hover:-translate-y-0.5 shadow-md"
                  >
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Site do projeto</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}
              </div>
            </div>

            {/* =================================================================== */}
            {/* 4. CARROSSEL COM TELAS DO SISTEMA (WIREFRAME INFERIOR)             */}
            {/* =================================================================== */}
            <div className="space-y-4 pt-6 border-t border-slate-800/80">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Carrossel com telas do sistema
                </h2>
                {totalSlides > 1 && (
                  <span className="text-xs font-mono text-slate-400">
                    {currentSlide + 1} de {totalSlides}
                  </span>
                )}
              </div>

              {totalSlides > 0 ? (
                <div className="relative w-full h-72 sm:h-96 md:h-[450px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex items-center justify-center group">
                  {/* Imagem do Slide Atual */}
                  {!hasCarouselError[currentSlide] ? (
                    <img
                      src={carouselImages[currentSlide].url}
                      alt={carouselImages[currentSlide].caption || `Tela ${currentSlide + 1}`}
                      onError={() =>
                        setHasCarouselError((prev) => ({ ...prev, [currentSlide]: true }))
                      }
                      className="w-full h-full object-contain bg-slate-950/90 transition-all duration-300"
                    />
                  ) : (
                    /* Fallback Idêntico ao Wireframe */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-700 bg-[#d5d7dc]">
                      <ImageIcon className="w-12 h-12 text-slate-400 mb-2" />
                      <span className="text-lg font-medium text-slate-800">
                        Carrossel com telas do sistema
                      </span>
                      <span className="text-xs text-slate-500 font-mono mt-1">
                        (Adicione os prints no arquivo projects.json)
                      </span>
                    </div>
                  )}

                  {/* Legenda do Slide */}
                  {carouselImages[currentSlide].caption && (
                    <div className="absolute bottom-3 left-4 right-4 text-center">
                      <span className="inline-block px-3.5 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md text-xs font-mono text-slate-200 border border-slate-800 shadow-lg">
                        {carouselImages[currentSlide].caption}
                      </span>
                    </div>
                  )}

                  {/* Controles do Carrossel (Setas) */}
                  {totalSlides > 1 && (
                    <>
                      <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white border border-slate-700 backdrop-blur-md shadow-lg transition-all opacity-85 group-hover:opacity-100 hover:scale-110 cursor-pointer"
                        aria-label="Imagem anterior"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white border border-slate-700 backdrop-blur-md shadow-lg transition-all opacity-85 group-hover:opacity-100 hover:scale-110 cursor-pointer"
                        aria-label="Próxima imagem"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <div className="w-full h-64 rounded-2xl bg-[#d5d7dc] flex items-center justify-center text-slate-700 text-base font-medium">
                  Carrossel com telas do sistema
                </div>
              )}

              {/* Indicadores / Dots do Carrossel */}
              {totalSlides > 1 && (
                <div className="flex justify-center items-center gap-2 pt-2">
                  {carouselImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === idx
                          ? 'w-8 bg-orange-400'
                          : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Ir para o slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Botão Final para Retornar com Transição Fluida */}
        <div className="flex justify-center pt-12 pb-6 border-t border-slate-800/80 mt-12">
          <button
            onClick={handleSmoothBack}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-slate-950 font-semibold text-sm sm:text-base shadow-xl shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para My projects</span>
          </button>
        </div>

      </div>
    </div>
  );
};
