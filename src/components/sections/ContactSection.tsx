import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Chave de acesso lida de forma segura da variável de ambiente .env
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus('error');
      setErrorMessage('Chave de API não configurada no arquivo .env (VITE_WEB3FORMS_ACCESS_KEY).');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const formData = new FormData();
      formData.append('access_key', accessKey);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('from_name', `Portfólio - ${name}`);
      formData.append('subject', `Novo contato no portfólio de: ${name}`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => {
          setStatus('idle');
        }, 6000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Ocorreu um erro ao enviar. Tente novamente.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Falha na conexão ao enviar a mensagem. Verifique sua internet.');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="w-full min-h-[90vh] relative py-20 px-6 sm:px-12 text-slate-100 flex flex-col justify-between">
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-between space-y-12">
        
        {/* ===================================================================== */}
        {/* TÍTULO DA SEÇÃO ("Contact" DO WIREFRAME)                              */}
        {/* ===================================================================== */}
        <div className="space-y-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Contact
          </h2>
        </div>

        {/* ===================================================================== */}
        {/* FORMULÁRIO COM INTEGRAÇÃO WEB3FORMS (CHAVE PROTEGIDA VIA .ENV)        */}
        {/* ===================================================================== */}
        <div className="max-w-2xl w-full space-y-6">
          {status === 'success' ? (
            <div className="wireframe-dark-card rounded-[28px] p-8 sm:p-10 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30 shadow-lg">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">Mensagem Enviada com Sucesso!</h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                Obrigado pelo contato! O e-mail foi entregue via Web3Forms e responderei o mais rápido possível.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Campo: Seu nome */}
              <div className="space-y-2">
                <label htmlFor="user-name" className="block text-lg sm:text-xl font-medium text-white/95">
                  Seu nome
                </label>
                <input
                  id="user-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Exemplo da silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full px-5 py-3.5 rounded-2xl sm:rounded-full bg-[#213243]/90 hover:bg-[#213243] focus:bg-[#213243] border border-slate-700/80 text-white placeholder-slate-400 text-base focus:outline-none focus:border-orange-400/80 focus:ring-1 focus:ring-orange-400/80 transition-all shadow-inner disabled:opacity-50"
                />
              </div>

              {/* Campo: Seu e-mail (para resposta direta) */}
              <div className="space-y-2">
                <label htmlFor="user-email" className="block text-lg sm:text-xl font-medium text-white/95">
                  Seu e-mail
                </label>
                <input
                  id="user-email"
                  name="email"
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full px-5 py-3.5 rounded-2xl sm:rounded-full bg-[#213243]/90 hover:bg-[#213243] focus:bg-[#213243] border border-slate-700/80 text-white placeholder-slate-400 text-base focus:outline-none focus:border-orange-400/80 focus:ring-1 focus:ring-orange-400/80 transition-all shadow-inner disabled:opacity-50"
                />
              </div>

              {/* Campo: Assunto / Mensagem */}
              <div className="space-y-2">
                <label htmlFor="user-message" className="block text-lg sm:text-xl font-medium text-white/95">
                  Assunto
                </label>
                <textarea
                  id="user-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Escreva sua mensagem ou proposta aqui..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full p-6 rounded-[24px] sm:rounded-[32px] bg-[#213243]/90 hover:bg-[#213243] focus:bg-[#213243] border border-slate-700/80 text-white placeholder-slate-400 text-base focus:outline-none focus:border-orange-400/80 focus:ring-1 focus:ring-orange-400/80 transition-all resize-none shadow-inner leading-relaxed disabled:opacity-50"
                />
              </div>

              {/* Mensagem de Erro (se houver) */}
              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-200 text-sm animate-fadeIn">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                  <span>{errorMessage || 'Erro ao enviar o formulário. Tente novamente.'}</span>
                </div>
              )}

              {/* Botão de Envio */}
              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-300 hover:to-amber-300 shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar mensagem</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

        {/* ===================================================================== */}
        {/* BOTÕES PILL DIRETOS DE CONTATO (E-MAIL + LINKEDIN NA BASE)            */}
        {/* ===================================================================== */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-8 pb-4">
          
          {/* Botão Pill: E-mail */}
          <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#132535] hover:bg-[#183147] border border-slate-700/80 text-slate-200 hover:text-white text-xs sm:text-sm font-mono shadow-md transition-all group">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2"
              title="Clique para enviar um e-mail"
            >
              <span className="truncate">{PERSONAL_INFO.email}</span>
            </a>
            
            {/* Ícone de E-mail / Copiar */}
            <button
              onClick={handleCopyEmail}
              className="p-1 rounded-full text-slate-400 hover:text-orange-400 transition-colors ml-1 cursor-pointer"
              title="Copiar e-mail"
            >
              {copiedEmail ? (
                <span className="text-[10px] text-emerald-400 font-sans">Copiado!</span>
              ) : (
                <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-3.5 h-3.5" />
                </div>
              )}
            </button>
          </div>

          {/* Botão Pill: LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#132535] hover:bg-[#183147] border border-slate-700/80 text-slate-200 hover:text-white text-xs sm:text-sm font-mono shadow-md transition-all group"
          >
            <span>linkedin.com/in/lucastameirao/</span>
            <div className="w-5 h-5 rounded-full bg-[#0a66c2] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Linkedin className="w-3.5 h-3.5 fill-current" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};
