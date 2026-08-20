import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { LogIn, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function Login({ status, canResetPassword }) {
    const [showPwd, setShowPwd] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), { onFinish: () => reset('password') });
    };

    return (
        <GuestLayout>
            <Head title="Connexion — OMYA INVEST" />

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-black" style={{ color: '#0C4A6E' }}>
                    Connexion
                </h1>
                <p className="text-sky-500 text-sm mt-1">
                    Bienvenue ! Connectez-vous à votre espace investisseur.
                </p>
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-5">

                {/* Email */}
                <div>
                    <InputLabel htmlFor="email" value="Adresse e-mail"
                        className="text-xs font-bold uppercase tracking-wider mb-1.5"
                        style={{ color: '#0C4A6E' }} />
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            isFocused
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-sky-200 rounded-xl text-sm focus:ring-2 focus:border-transparent transition"
                            style={{ '--tw-ring-color': '#0EA5E9' }}
                            placeholder="votre@email.com"
                        />
                    </div>
                    <InputError message={errors.email} className="mt-1.5" />
                </div>

                {/* Password */}
                <div>
                    <InputLabel htmlFor="password" value="Mot de passe"
                        className="text-xs font-bold uppercase tracking-wider mb-1.5"
                        style={{ color: '#0C4A6E' }} />
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                        <TextInput
                            id="password"
                            type={showPwd ? 'text' : 'password'}
                            name="password"
                            value={data.password}
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                            className="w-full pl-10 pr-10 py-3 border border-sky-200 rounded-xl text-sm transition"
                            placeholder="••••••••"
                        />
                        <button type="button" onClick={() => setShowPwd(!showPwd)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 hover:text-sky-600">
                            {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>
                    <InputError message={errors.password} className="mt-1.5" />
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="rounded"
                        />
                        <span className="text-sm text-sky-600">Se souvenir de moi</span>
                    </label>

                    {canResetPassword && (
                        <Link href={route('password.request')}
                            className="text-sm font-semibold hover:underline transition"
                            style={{ color: '#0EA5E9' }}>
                            Mot de passe oublié ?
                        </Link>
                    )}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition hover:opacity-90 active:scale-95 disabled:opacity-60"
                    style={{ background: 'linear-gradient(135deg, #0EA5E9, #0284C7)' }}
                >
                    <LogIn className="w-4 h-4" />
                    {processing ? 'Connexion en cours…' : 'Se connecter'}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-1">
                    <div className="flex-1 h-px bg-sky-200" />
                    <span className="text-xs text-sky-400">ou</span>
                    <div className="flex-1 h-px bg-sky-200" />
                </div>

                {/* Register link */}
                <p className="text-center text-sm text-sky-500">
                    Pas encore de compte ?{' '}
                    <Link href={route('register')}
                        className="font-bold hover:underline transition"
                        style={{ color: '#0369A1' }}>
                        Créer un compte
                    </Link>
                </p>
            </form>
        </GuestLayout>
    );
}
