import React, { useState } from 'react';
import { Language } from '../types';
import { EXPERIENCES_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Sparkles,
  ArrowRight,
  Code2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ExperienceProps {
  language: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="experience" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{language === 'pt' ? 'CARREIRA & FORMAÇÃO' : 'CAREER & EDUCATION'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {language === 'pt' ? 'Trajetória Profissional' : 'Experience & Education'}
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            {language === 'pt'
              ? 'Conheça meu histórico de atuações no desenvolvimento de software, principais entregas e formação acadêmica.'
              : 'Explore my professional background in software development, key achievements, and academic foundations.'}
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              id="tab-experience-btn"
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>{language === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}</span>
            </button>

            <button
              id="tab-education-btn"
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>{language === 'pt' ? 'Formação & Certificações' : 'Education & Degrees'}</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div
                key="experience-timeline"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10"
              >
                {EXPERIENCES_DATA.map((item, idx) => (
                  <div key={item.id} className="relative group">
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-sm shadow-cyan-400/50" />

                    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors shadow-lg">
                      {/* Role & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                          <span>{item.role[language]}</span>
                          {item.current && (
                            <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                              {language === 'pt' ? 'Atual' : 'Current'}
                            </span>
                          )}
                        </h3>
                        <div className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period[language]}</span>
                        </div>
                      </div>

                      {/* Company & Location */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4 font-mono">
                        <span className="font-semibold text-slate-300">{item.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {item.location}
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                        {item.description[language]}
                      </p>

                      {/* Key Achievements */}
                      <div className="space-y-2 mb-5">
                        {item.achievements[language].map((ach, achIdx) => (
                          <div key={achIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                        {item.technologies.map(tech => (
                          <span 
                            key={tech}
                            className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-slate-950 border border-slate-800 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education-timeline"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8"
              >
                {EDUCATION_DATA.map((item) => (
                  <div key={item.id} className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-sm shadow-cyan-400/50" />

                    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors shadow-lg">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-100">
                          {item.degree[language]}
                        </h3>
                        <span className="text-xs font-mono text-cyan-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                          {item.period}
                        </span>
                      </div>

                      <div className="text-xs font-mono text-slate-300 font-semibold mb-3">
                        {item.institution}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description[language]}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
