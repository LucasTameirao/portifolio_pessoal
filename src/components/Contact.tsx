import React, { useState } from 'react';
import { Language, ContactFormData } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  MapPin, 
  MessageSquare, 
  Sparkles, 
  PhoneCall, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  language: Language;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const quickSubjects = [
    { pt: "Proposta de Projeto", en: "Project Proposal" },
    { pt: "Oportunidade Full Stack", en: "Full Stack Opportunity" },
    { pt: "Consultoria Técnica", en: "Technical Consulting" },
    { pt: "Networking & Parceria", en: "Networking & Partnership" }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage('');
    setSubmittedSuccess(false);

    // Validação
    if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim()
    ) {
        setErrorMessage(
            language === 'pt'
                ? 'Por favor, preencha todos os campos obrigatórios.'
                : 'Please fill in all required fields.'
        );
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email.trim())) {
        setErrorMessage(
            language === 'pt'
                ? 'Por favor, insira um e-mail válido.'
                : 'Please provide a valid email address.'
        );
        return;
    }

    setIsSubmitting(true);

    try {
        const formDataToSend = new FormData();

        formDataToSend.append(
            'access_key',
            'c8eda8fe-619e-40e2-9407-33a41fe62d47'
        );

        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('subject', formData.subject);
        formDataToSend.append('message', formData.message);

        const response = await fetch(
            'https://api.web3forms.com/submit',
            {
                method: 'POST',
                body: formDataToSend,
            }
        );

        const data = await response.json();

        if (!data.success) {
            throw new Error(
                data.message || 'Erro ao enviar formulário.'
            );
        }

        // Envio realizado
        setSubmittedSuccess(true);

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });

    } catch (error) {
        console.error('Erro ao enviar formulário:', error);

        setErrorMessage(
            language === 'pt'
                ? 'Não foi possível enviar a mensagem. Tente novamente.'
                : 'Could not send the message. Please try again.'
        );

    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative border-t border-slate-900">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{language === 'pt' ? 'VAMOS CONVERSAR' : 'GET IN TOUCH'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {language === 'pt' ? 'Entre em Contato' : 'Contact Me'}
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            {language === 'pt'
              ? 'Tem uma oportunidade, projeto ou quer trocar uma ideia sobre tecnologia? Me envie uma mensagem!'
              : 'Have a project in mind, an exciting job opportunity, or just want to talk tech? Drop me a message!'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Channels & Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-100">E-mail</h3>
                    <p className="text-xs text-slate-400 font-mono">{PERSONAL_INFO.email}</p>
                  </div>
                </div>

                <button
                  id="btn-copy-email"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                  title={language === 'pt' ? 'Copiar E-mail' : 'Copy Email'}
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedEmail && (
                <div className="text-[11px] text-emerald-400 font-mono mt-2">
                  ✓ {language === 'pt' ? 'E-mail copiado para a área de transferência!' : 'Email copied to clipboard!'}
                </div>
              )}
            </div>

            {/* LinkedIn Card */}
            <a
              id="card-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl flex items-center justify-between hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">LinkedIn</h3>
                  <p className="text-xs text-slate-400 font-mono">linkedin.com/in/lucastameirao</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              id="card-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl flex items-center justify-between hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">GitHub</h3>
                  <p className="text-xs text-slate-400 font-mono">github.com/LucasTameirao</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* Location & Availability Note */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs font-mono text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Brasil (Disponibilidade Remota / Híbrida)</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {language === 'pt'
                  ? 'Atendimento e reuniões via Google Meet, Discord ou Teams. Resposta usual em menos de 24 horas.'
                  : 'Meetings via Google Meet, Discord or Teams. Typical response in under 24 hours.'}
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-2xl backdrop-blur-sm">
              <h3 className="text-lg font-bold text-slate-100 mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>{language === 'pt' ? 'Envie uma mensagem direta' : 'Send a direct message'}</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {language === 'pt'
                  ? 'Preencha o formulário abaixo e entrarei em contato o mais rápido possível.'
                  : 'Fill out the form below and I will get back to you promptly.'}
              </p>

              {/* Quick Subject Chips */}
              <div className="mb-5">
                <label className="block text-xs font-mono text-slate-400 mb-2">
                  {language === 'pt' ? 'Sugestão de assunto rápido:' : 'Quick subject suggestion:'}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {quickSubjects.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, subject: s[language] }))}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      + {s[language]}
                    </button>
                  ))}
                </div>
              </div>

              {submittedSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-100">
                    {language === 'pt' ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!'}
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    {language === 'pt'
                      ? 'Muito obrigado pelo contato! Recebi sua mensagem e retornarei em breve.'
                      : 'Thank you for reaching out! I have received your note and will reply shortly.'}
                  </p>
                  <button
                    onClick={() => setSubmittedSuccess(false)}
                    className="px-4 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-800 rounded-lg transition-colors cursor-pointer"
                  >
                    {language === 'pt' ? 'Enviar outra mensagem' : 'Send another note'}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1.5">
                        {language === 'pt' ? 'Seu Nome *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder={language === 'pt' ? 'Ex: Ana Clara' : 'e.g. Jane Doe'}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1.5">
                        {language === 'pt' ? 'Seu E-mail *' : 'Your Email *'}
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder={language === 'pt' ? 'Ex: seu.email@exemplo.com' : 'e.g. your.email@domain.com'}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-400 mb-1.5">
                      {language === 'pt' ? 'Assunto' : 'Subject'}
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder={language === 'pt' ? 'Ex: Oportunidade de Projeto / Vaga' : 'e.g. Project Opportunity / Job'}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5">
                      {language === 'pt' ? 'Mensagem *' : 'Message *'}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder={language === 'pt' ? 'Escreva detalhes sobre o projeto, escopo ou proposta...' : 'Write details about your project, scope or proposal...'}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="btn-submit-contact"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>{language === 'pt' ? 'Enviando...' : 'Sending...'}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>{language === 'pt' ? 'Enviar Mensagem' : 'Send Message'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
