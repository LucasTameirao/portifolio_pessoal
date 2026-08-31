import React from 'react';
import { Code, Layout, Server, CheckCircle, Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Stack Tecnológica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Habilidades & Tecnologias
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Ferramentas e linguagens que utilizo no dia a dia para desenvolver projetos eficientes e escaláveis.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                  {category.iconName === 'Layout' ? (
                    <Layout className="w-6 h-6" />
                  ) : (
                    <Server className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <span className="text-xs text-slate-400">Tecnologias e ferramentas principais</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between group hover:border-cyan-500/30 transition-colors"
                  >
                    <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
