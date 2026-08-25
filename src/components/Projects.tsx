import React, { useState } from 'react';
import { Project, Language } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowUpRight, 
  Search,
  Code2,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsProps {
  language: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'All', label: language === 'pt' ? 'Todos os Projetos' : 'All Projects' },
    { id: 'Full Stack', label: 'Full Stack' },
    { id: 'Frontend', label: 'Frontend' },
    { id: 'Backend', label: 'Backend' },
    { id: 'Mobile & API', label: 'Mobile & API' }
  ];

  const filteredProjects = PROJECTS_DATA.filter(project => {
    const matchesCat = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-slate-950 relative border-t border-slate-900">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{language === 'pt' ? 'PORTFÓLIO & CASES' : 'PORTFOLIO & CASES'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {language === 'pt' ? 'Projetos em Destaque' : 'Featured Projects'}
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            {language === 'pt'
              ? 'Conheça alguns dos principais projetos que desenvolvi, com detalhes de arquitetura, desafios e demonstrações ao vivo.'
              : 'Explore a curated collection of applications I engineered, featuring architecture breakdowns, live demos, and source code.'}
          </p>
        </div>

        {/* Filters & Search Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-project-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              id="project-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'pt' ? 'Buscar projeto ou stack...' : 'Search project or stack...'}
              className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/40 shadow-xl shadow-black/20 hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Project Image Banner / Mockup */}
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="relative h-48 sm:h-52 overflow-hidden cursor-pointer bg-slate-950"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.thumbnailGradient} opacity-30 group-hover:opacity-40 transition-opacity`} />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    
                    {/* Category & Date badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-slate-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          {language === 'pt' ? 'Destaque' : 'Featured'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Card Content */}
                  <div className="p-5">
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors cursor-pointer mb-2 flex items-center justify-between"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                      {project.shortDescription[language]}
                    </p>

                    {/* Tech Stack tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-950 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[11px] font-mono rounded bg-slate-800 text-slate-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons Bar */}
                <div className="p-4 pt-0 border-t border-slate-800/60 mt-2 flex items-center justify-between gap-2">
                  <button
                    id={`btn-view-details-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-cyan-400 hover:text-cyan-300 bg-cyan-950/30 hover:bg-cyan-950/60 border border-cyan-800/40 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>{language === 'pt' ? 'Ver Detalhes' : 'View Details'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    id={`btn-github-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
                    title={language === 'pt' ? 'Código no GitHub' : 'GitHub Source Code'}
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.liveDemoUrl && (
                    <a
                      id={`btn-demo-${project.id}`}
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
                      title={language === 'pt' ? 'Demonstração Ao Vivo' : 'Live Demo'}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900/30 rounded-2xl border border-dashed border-slate-800">
            <FolderGit2 className="w-8 h-8 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400 text-sm">
              {language === 'pt' ? 'Nenhum projeto encontrado para este filtro.' : 'No projects found for the selected filter.'}
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 px-3 py-1 text-xs text-cyan-400 hover:underline cursor-pointer"
            >
              {language === 'pt' ? 'Ver todos os projetos' : 'View all projects'}
            </button>
          </div>
        )}

      </div>

      {/* Deep-dive Project Details Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        language={language} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
