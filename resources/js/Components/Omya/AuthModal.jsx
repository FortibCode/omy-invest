import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/Context/LanguageContext';

const inputClass =
  'w-full bg-white border border-slate-300 rounded-md pl-10 pr-3 py-3 text-[#001D3D] placeholder-slate-400 focus:outline-none focus:border-[#002E5B] focus:ring-2 focus:ring-[#002E5B]/15 transition';

function Field({ label, icon: Icon, error, children, aside }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm font-semibold text-[#001D3D]">{label}</label>
        {aside}
      </div>
      <div className="relative">
        <Icon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        {children}
      </div>
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

// Connexion et inscription branchées sur l'authentification Laravel (Breeze) : routes 'login' et 'register'.
export default function AuthModal({ isOpen, onClose, initialTab = 'login', titleMode = 'client' }) {
  const [tab, setTab] = useState(initialTab);
  const { t } = useLanguage();
  const form = useForm({ name: '', email: '', password: '', password_confirmation: '', remember: false });

  useEffect(() => {
    if (isOpen) setTab(initialTab);
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const switchTab = (next) => {
    setTab(next);
    form.clearErrors();
  };

  const submit = (e) => {
    e.preventDefault();
    const onFinish = () => form.reset('password', 'password_confirmation');
    if (tab === 'login') {
      form.post(route('login'), { onFinish });
    } else {
      form.post(route('register'), { onFinish });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001D3D]/70" onClick={onClose}>
      <div
        className="relative w-full max-w-md max-h-[92vh] overflow-y-auto bg-white rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-[#001D3D] p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-8 pt-8 pb-5">
          <p className="text-sm text-slate-500 mb-1">{titleMode === 'member' ? t.memberSpace : t.clientSpace}</p>
          <h2 className="text-2xl font-bold text-[#001D3D]">
            {tab === 'login' ? t.authModalLoginTitle : t.authModalRegisterTitle}
          </h2>
          <p className="text-slate-500 mt-1">
            {tab === 'login' ? t.authModalLoginDesc : t.authModalRegisterDesc}
          </p>
        </div>

        <div className="flex border-b border-slate-200 px-8">
          {[['login', t.login], ['register', t.register]].map(([key, label]) => (
            <button
              key={key}
              onClick={() => switchTab(key)}
              className={`flex-1 py-3 text-sm font-semibold transition-colors border-b-2 -mb-px ${
                tab === key ? 'text-[#002E5B] border-[#002E5B]' : 'text-slate-400 border-transparent hover:text-[#001D3D]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="px-8 py-6 space-y-4">
          {tab === 'register' && (
            <Field label={t.fullName} icon={User} error={form.errors.name}>
              <input
                type="text"
                required
                autoComplete="name"
                value={form.data.name}
                onChange={(e) => form.setData('name', e.target.value)}
                className={inputClass}
              />
            </Field>
          )}

          <Field label={t.emailAddr} icon={Mail} error={form.errors.email}>
            <input
              type="email"
              required
              autoComplete="email"
              value={form.data.email}
              onChange={(e) => form.setData('email', e.target.value)}
              className={inputClass}
            />
          </Field>

          <Field
            label={t.passwordLabel}
            icon={Lock}
            error={form.errors.password}
            aside={tab === 'login' && (
              <a href={route('password.request')} className="text-sm text-[#002E5B] hover:underline">
                {t.forgotPass}
              </a>
            )}
          >
            <input
              type="password"
              required
              autoComplete={tab === 'login' ? 'current-password' : 'new-password'}
              value={form.data.password}
              onChange={(e) => form.setData('password', e.target.value)}
              className={inputClass}
            />
          </Field>

          {tab === 'register' && (
            <Field label={t.passwordConfirm} icon={Lock} error={form.errors.password_confirmation}>
              <input
                type="password"
                required
                autoComplete="new-password"
                value={form.data.password_confirmation}
                onChange={(e) => form.setData('password_confirmation', e.target.value)}
                className={inputClass}
              />
            </Field>
          )}

          {tab === 'login' && (
            <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-600">
              <input
                type="checkbox"
                checked={form.data.remember}
                onChange={(e) => form.setData('remember', e.target.checked)}
                className="rounded border-slate-300 text-[#002E5B] focus:ring-[#002E5B]"
              />
              <span>{t.rememberMe}</span>
            </label>
          )}

          <button
            type="submit"
            disabled={form.processing}
            className="btn-bvmac-primary w-full justify-center mt-2 disabled:opacity-60"
          >
            <span>{tab === 'login' ? t.submitLogin : t.submitRegister}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
