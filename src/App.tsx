import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [isCVOpen, setIsCVOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Radial Glow & Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-100 pointer-events-none -z-20" />
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none -z-10" />

      {/* Main Navigation */}
      <Navbar 
        language={language} 
        onToggleLanguage={toggleLanguage} 
        onOpenCV={() => setIsCVOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero 
          language={language} 
          onOpenCV={() => setIsCVOpen(true)} 
        />

        {/* About Me Section */}
        <About 
          language={language} 
        />

        {/* Skills & Technologies Section */}
        <Skills 
          language={language} 
        />

        {/* Featured Projects Section */}
        <Projects 
          language={language} 
        />

        {/* Career & Education Timeline */}
        <Experience 
          language={language} 
        />

        {/* Contact & Direct Channels */}
        <Contact 
          language={language} 
        />
      </main>

      {/* Footer */}
      <Footer 
        language={language} 
        onOpenCV={() => setIsCVOpen(true)} 
      />

      {/* Curriculum Vitae Modal */}
      <CVModal 
        isOpen={isCVOpen} 
        language={language} 
        onClose={() => setIsCVOpen(false)} 
      />
    </div>
  );
}

