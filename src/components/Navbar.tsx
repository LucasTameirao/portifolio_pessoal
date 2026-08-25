import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Code2, 
  Menu, 
  X, 
  Linkedin, 
  Github, 
  Mail, 
  Languages, 
  FileText,
  Send,
  Terminal
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  language: Language;
  onToggleLanguage: () => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, onToggleLanguage, onOpenCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: language === 'pt' ? 'Início' : 'Home' },
    { id: 'about', label: language === 'pt' ? 'Sobre' : 'About' },
    { id: 'skills', label: language === 'pt' ? 'Habilidades' : 'Skills' },
    { id: 'projects', label: language === 'pt' ? 'Projetos' : 'Projects' },
    { id: 'experience', label: language === 'pt' ? 'Trajetória' : 'Experience' },
    { id: 'contact', label: language === 'pt' ? 'Contato' : 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <button 
            id="brand-logo-btn"
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-slate-100 text-base sm:text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
                <span>Lucas</span>
                <span className="text-cyan-400">Tameirão</span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
                Full Stack Developer
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-cyan-500/20 border border-cyan-500/40 rounded-full shadow-inner shadow-cyan-500/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLanguage}
              title={language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-slate-300 hover:text-cyan-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <Languages className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'pt' ? 'PT-BR' : 'EN-US'}</span>
            </button>

            {/* Social Direct Icons */}
            <a
              id="nav-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="nav-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Curriculum Vitae Button */}
            <button
              id="nav-cv-btn"
              onClick={onOpenCV}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'pt' ? 'Currículo' : 'Resume'}</span>
            </button>

            {/* Talk to me CTA */}
            <button
              id="nav-contact-cta-btn"
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-lg shadow-sm shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-slate-950" />
              <span>{language === 'pt' ? 'Fale Comigo' : 'Get in Touch'}</span>
            </button>
          </div>

          {/* Mobile menu triggers */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-lang-btn"
              onClick={onToggleLanguage}
              className="p-2 text-xs font-mono font-bold text-cyan-400 bg-slate-900 border border-slate-800 rounded-lg"
            >
              {language === 'pt' ? 'PT' : 'EN'}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg cursor-pointer"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 backdrop-blur-xl"
          >
            <div className="flex flex-col space-y-2 mb-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    activeSection === link.id
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2">
              <button
                id="mobile-cv-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 rounded-lg"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>{language === 'pt' ? 'Ver Currículo' : 'View Resume'}</span>
              </button>

              <button
                id="mobile-contact-btn"
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'pt' ? 'Contato' : 'Contact'}</span>
              </button>
            </div>

            <div className="flex justify-center items-center gap-4 mt-4 pt-3 text-slate-400">
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 rounded-lg text-slate-300 hover:text-white"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 rounded-lg text-slate-300 hover:text-cyan-400"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 bg-slate-900 rounded-lg text-slate-300 hover:text-white"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
