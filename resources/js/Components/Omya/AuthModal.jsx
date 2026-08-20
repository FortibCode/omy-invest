import React, { useState } from 'react';
import { X, Mail, Lock, User, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/Context/LanguageContext';

export default function AuthModal({ isOpen, onClose, initialTab = 'login', titleMode = 'client' }) {
  const [tab, setTab] = useState(initialTab); // 'login' or 'register'
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#082F49]/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-[#0C4A6E] border border-[#0284C7]/40 rounded-2xl shadow-2xl overflow-hidden text-white transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#38BDF8]" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-sky-400 hover:text-white p-1.5 rounded-full bg-sky-900/60 border border-sky-800 transition"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 pb-4 text-center space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#075985] border border-[#0284C7]/30 text-[11px] font-bold text-[#0EA5E9]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{titleMode === 'member' ? t.memberSpace : t.clientSpace}</span>
          </div>

          <h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
            {tab === 'login' ? t.authModalLoginTitle : t.authModalRegisterTitle}
          </h2>
          <p className="text-xs text-sky-400">
            {tab === 'login' ? t.authModalLoginDesc : t.authModalRegisterDesc}
          </p>
        </div>

        <div className="flex border-b border-sky-800 px-6">
          <button
            onClick={() => setTab('login')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition border-b-2 ${
              tab === 'login'
                ? 'text-[#0284C7] border-[#0284C7]'
                : 'text-sky-400 border-transparent hover:text-white'
            }`}
          >
            {t.login}
          </button>
          <button
            onClick={() => setTab('register')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition border-b-2 ${
              tab === 'register'
                ? 'text-[#0284C7] border-[#0284C7]'
                : 'text-sky-400 border-transparent hover:text-white'
            }`}
          >
            {t.register}
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => alert("Connexion via Google initialisée")}
              className="flex items-center justify-center space-x-2 bg-sky-900 hover:bg-sky-800 border border-sky-700/80 rounded-lg py-2.5 px-3 text-xs font-semibold text-sky-200 transition shadow-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.14C3.26 21.27 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.59H1.29C.47 8.22 0 10.05 0 12s.47 3.78 1.29 5.41l3.99-3.14z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.73 1.29 6.59l3.99 3.14c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              onClick={() => alert("Connexion via Apple initialisée")}
              className="flex items-center justify-center space-x-2 bg-sky-900 hover:bg-sky-800 border border-sky-700/80 rounded-lg py-2.5 px-3 text-xs font-semibold text-sky-200 transition shadow-sm"
            >
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.09c.67-.82 1.12-1.96.99-3.1-.96.04-2.13.64-2.82 1.45-.61.71-1.15 1.87-1.01 2.99 1.08.08 2.17-.52 2.84-1.34z"/>
              </svg>
              <span>Apple</span>
            </button>
          </div>

          <div className="relative flex items-center justify-center my-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-sky-800" />
            </div>
            <span className="relative px-3 bg-[#0C4A6E] text-[10px] text-sky-500 uppercase tracking-widest">
              {t.orByEmail}
            </span>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5 text-xs">
            {tab === 'register' && (
              <div>
                <label className="block text-sky-300 font-semibold mb-1">
                  {t.fullName}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-sky-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Jean-Baptiste Fortune"
                    className="w-full bg-[#075985] border border-sky-700/80 rounded-lg pl-9 pr-3 py-2.5 text-white placeholder-sky-500 focus:border-[#0284C7] focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sky-300 font-semibold mb-1">
                {t.emailAddr}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-sky-500 absolute left-3 top-3" />
                <input
                  type="email"
                  placeholder="investisseur@domaine.com"
                  className="w-full bg-[#075985] border border-sky-700/80 rounded-lg pl-9 pr-3 py-2.5 text-white placeholder-sky-500 focus:border-[#0284C7] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sky-300 font-semibold">
                  {t.passwordLabel}
                </label>
                {tab === 'login' && (
                  <a href="#" className="text-[11px] text-[#0284C7] hover:underline">
                    {t.forgotPass}
                  </a>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-sky-500 absolute left-3 top-3" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-[#075985] border border-sky-700/80 rounded-lg pl-9 pr-3 py-2.5 text-white placeholder-sky-500 focus:border-[#0284C7] focus:outline-none"
                />
              </div>
            </div>

            {tab === 'register' && (
              <div>
                <label className="block text-sky-300 font-semibold mb-1">
                  {t.investorType}
                </label>
                <select className="w-full bg-[#075985] border border-sky-700/80 rounded-lg px-3 py-2.5 text-white focus:border-[#0284C7] focus:outline-none">
                  <option value="particulier">{t.particulier}</option>
                  <option value="entreprise">{t.corporate}</option>
                </select>
              </div>
            )}

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center space-x-2 cursor-pointer text-sky-300">
                <input type="checkbox" className="rounded bg-sky-900 border-sky-700 text-[#0284C7] focus:ring-0" />
                <span className="text-[11px]">
                  {tab === 'login' ? t.rememberMe : t.acceptTerms}
                </span>
              </label>
            </div>

            <button
              type="submit"
              onClick={() => {
                alert(tab === 'login' ? 'Connexion réussie !' : 'Compte créé avec succès !');
                onClose();
              }}
              className="w-full bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#38BDF8] text-[#0C4A6E] font-extrabold py-3 rounded-lg uppercase tracking-wider transition shadow-lg mt-2 flex items-center justify-center space-x-2"
            >
              <span>{tab === 'login' ? t.submitLogin : t.submitRegister}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
