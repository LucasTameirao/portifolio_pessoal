import React, { useState } from 'react';
import { Menu, X, Code2, Sparkles } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Lucas Tameirão
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call to action button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-lg shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Contato
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Abrir menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg"
            >
              <Sparkles className="w-4 h-4" />
              Fale Comigo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
