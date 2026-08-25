import React from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  User, 
  Sparkles, 
  Target, 
  Code2, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  CheckCircle,
  Globe,
  Award,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  language: Language;
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const corePillars = [
    {
      icon: Code2,
      title: language === 'pt' ? 'Clean Code & Boas Práticas' : 'Clean Code & Best Practices',
      description: language === 'pt'
        ? 'Código modular, tipado com TypeScript, legível e preparado para manutenção de longo prazo.'
        : 'Modular, strictly typed TypeScript code that is readable and built for long-term maintainability.'
    },
    {
      icon: Zap,
      title: language === 'pt' ? 'Alta Performance' : 'High Performance',
      description: language === 'pt'
        ? 'Otimização de tempo de carregamento, renderização eficiente no React e APIs com resposta ágil.'
        : 'Load time optimization, lightweight React re-renders, and sub-second API response times.'
    },
    {
      icon: Layers,
      title: language === 'pt' ? 'Design Responsivo & Acessível' : 'Responsive & Accessible Design',
      description: language === 'pt'
        ? 'Interfaces fluidas com Tailwind CSS adaptáveis para mobile, tablet e desktop com acessibilidade.'
        : 'Fluid Tailwind CSS layouts tailored seamlessly across mobile, tablet, and desktop viewports.'
    },
    {
      icon: ShieldCheck,
      title: language === 'pt' ? 'Arquitetura Robusta' : 'Robust Architecture',
      description: language === 'pt'
        ? 'Segurança com JWT/RBAC, separação de responsabilidades e microsserviços desacoplados.'
        : 'Solid security layers with JWT/RBAC, clean separation of concerns, and decoupled services.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>{language === 'pt' ? 'CONHEÇA MINHA TRAJETÓRIA' : 'GET TO KNOW ME'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {language === 'pt' ? 'Sobre Mim' : 'About Me'}
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            {language === 'pt'
              ? 'Conheça um pouco mais sobre quem eu sou, minhas motivações e o que busco entregar em cada projeto.'
              : 'Learn more about who I am, what drives me, and the value I deliver across every project.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Bio Card & Story */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>{language === 'pt' ? 'Quem é Lucas Tameirão?' : 'Who is Lucas Tameirão?'}</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {PERSONAL_INFO.detailedBio[language]}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Localização</span>
                  <span className="text-slate-200 font-semibold flex items-center gap-1">
                    <Globe className="w-3 h-3 text-cyan-400" /> Brasil (Remoto)
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Idiomas</span>
                  <span className="text-slate-200 font-semibold">Português (Nativo) / Inglês</span>
                </div>
              </div>
            </div>

            {/* Stats Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center hover:border-cyan-500/40 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-medium">
                    {stat.label[language]}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Pillars of Excellence */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-100 mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
