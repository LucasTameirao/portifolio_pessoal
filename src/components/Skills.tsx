import React, { useState } from 'react';
import { Language, Skill } from '../types';
import { SKILLS_DATA } from '../data/portfolioData';
import { 
  Code2, 
  Search, 
  Atom, 
  FileCode2, 
  Braces, 
  Palette, 
  Zap, 
  Server, 
  Layers, 
  Network, 
  Database, 
  FileSpreadsheet, 
  Cpu, 
  GitBranch, 
  Box, 
  CheckCircle2, 
  Figma,
  Sparkles,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SkillsProps {
  language: Language;
}

// Icon mapper for skills
const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'Atom': return <Atom className="w-5 h-5 text-cyan-400" />;
    case 'FileCode2': return <FileCode2 className="w-5 h-5 text-blue-400" />;
    case 'Braces': return <Braces className="w-5 h-5 text-amber-400" />;
    case 'Palette': return <Palette className="w-5 h-5 text-teal-400" />;
    case 'Zap': return <Zap className="w-5 h-5 text-yellow-400" />;
    case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
    case 'Layers': return <Layers className="w-5 h-5 text-sky-400" />;
    case 'Network': return <Network className="w-5 h-5 text-purple-400" />;
    case 'Database': return <Database className="w-5 h-5 text-blue-400" />;
    case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-emerald-500" />;
    case 'Cpu': return <Cpu className="w-5 h-5 text-red-400" />;
    case 'GitBranch': return <GitBranch className="w-5 h-5 text-orange-400" />;
    case 'Box': return <Box className="w-5 h-5 text-blue-500" />;
    case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-lime-400" />;
    case 'Figma': return <Figma className="w-5 h-5 text-pink-400" />;
    default: return <Code2 className="w-5 h-5 text-cyan-400" />;
  }
};

export const Skills: React.FC<SkillsProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tools'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: language === 'pt' ? 'Todas' : 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: language === 'pt' ? 'Banco de Dados' : 'Database' },
    { id: 'tools', label: language === 'pt' ? 'DevOps & Ferramentas' : 'DevOps & Tools' },
  ];

  const filteredSkills = SKILLS_DATA.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description[language].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 bg-slate-950 relative border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'pt' ? 'STACK TECNOLÓGICA' : 'TECH STACK'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {language === 'pt' ? 'Habilidades & Tecnologias' : 'Skills & Technologies'}
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            {language === 'pt'
              ? 'Conjunto de linguagens, frameworks e ferramentas que utilizo no dia a dia para desenvolver produtos escaláveis.'
              : 'The set of languages, frameworks, and tools I leverage daily to engineer robust, scalable software products.'}
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                id={`skill-cat-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id as any)}
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

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              id="skill-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'pt' ? 'Buscar habilidade...' : 'Search technology...'}
              className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all group flex flex-col justify-between shadow-lg shadow-black/20"
              >
                <div>
                  {/* Skill header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {getSkillIcon(skill.icon)}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-mono text-cyan-400/80 uppercase">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {skill.experienceYears}
                    </span>
                  </div>

                  {/* Skill Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {skill.description[language]}
                  </p>
                </div>

                {/* Level Progress Bar */}
                <div className="pt-2 border-t border-slate-800/60">
                  <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 mb-1.5">
                    <span>Proficiência</span>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 bg-slate-900/30 rounded-2xl border border-dashed border-slate-800">
            <Filter className="w-8 h-8 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400 text-sm">
              {language === 'pt' ? 'Nenhuma habilidade encontrada para essa busca.' : 'No skills found matching your search criteria.'}
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 px-3 py-1 text-xs text-cyan-400 hover:underline cursor-pointer"
            >
              {language === 'pt' ? 'Limpar filtros' : 'Reset filters'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
