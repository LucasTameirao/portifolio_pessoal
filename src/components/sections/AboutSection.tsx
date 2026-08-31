import React from 'react';
import { User, Target, Rocket, Coffee, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Sobre Mim</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Trajetória, Foco & Paixão por Tecnologia
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Bio Card */}
          <div className="lg:col-span-2 glass-panel p-8 rounded-2xl border border-slate-800 space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Desenvolvedor focado em criar valor real
            </h3>
            
            <p className="text-slate-300 leading-relaxed">
              Olá! Sou <strong>{PERSONAL_INFO.name}</strong>, desenvolvedor focado em desenvolvimento front-end e full stack. 
              Gosto de transformar conceitos e designs em código limpo, eficiente e de alto impacto para os usuários finais.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Minha trajetória é impulsionada pela curiosidade contínua em aprender as melhores tecnologias do ecossistema JavaScript e TypeScript, 
              sempre priorizando a modularidade, boas práticas de componentização e a melhor experiência do usuário (UX/UI).
            </p>

            {/* Quick highlight points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Objetivo</h4>
                  <p className="text-xs text-slate-400">Construir produtos digitais escaláveis e acessíveis.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Mentalidade</h4>
                  <p className="text-xs text-slate-400">Aprendizado contínuo e evolução constante.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Info Cards */}
          <div className="space-y-4">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <div className="text-cyan-400 font-mono text-xs uppercase mb-1">Localização</div>
              <div className="text-lg font-semibold text-white">{PERSONAL_INFO.location}</div>
              <p className="text-xs text-slate-400 mt-1">Disponível para trabalho remoto e presencial.</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <div className="text-cyan-400 font-mono text-xs uppercase mb-1">Especialidade Principal</div>
              <div className="text-lg font-semibold text-white">Ecossistema React & TypeScript</div>
              <p className="text-xs text-slate-400 mt-1">Desenvolvimento de SPAs modernas, rápidas e tipadas.</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <div className="text-cyan-400 font-mono text-xs uppercase mb-1">Contato Rápido</div>
              <div className="text-sm font-mono text-slate-300 break-all">{PERSONAL_INFO.email}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
