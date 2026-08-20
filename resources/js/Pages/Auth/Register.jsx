import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { UserPlus, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function Register() {
    const [showPwd, setShowPwd] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Créer un compte — OMYA INVEST" />

            {/* Header */}
            <div className="mb-7">
                <h1 className="text-2xl font-black" style={{ color: '#0C4A6E' }}>
                    Créer un compte
                </h1>
                <p className="text-sky-500 text-sm mt-1">
                    Rejoignez OMYA INVEST et accédez aux marchés financiers CEMAC.
                </p>
            </div>

            <form onSubmit={submit} className="space-y-4">

                {/* Name */}
                <div>
                    <InputLabel htmlFor="name" value="Nom complet"
                        className="text-xs font-bold uppercase tracking-wider mb-1.5"
                        style={{ color: '#0C4A6E' }} />
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            autoComplete="name"
                            isFocused
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-sky-200 rounded-xl text-sm transition"
                            placeholder="Jean-Pierre Nzinga"
                        />
                    </div>
                    <InputError message={errors.name} className="mt-1.5" />
                </div>

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
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-sky-200 rounded-xl text-sm transition"
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
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
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

                {/* Confirm Password */}
                <div>
                    <InputLabel htmlFor="password_confirmation" value="Confirmer le mot de passe"
                        className="text-xs font-bold uppercase tracking-wider mb-1.5"
                        style={{ color: '#0C4A6E' }} />
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                        <TextInput
                            id="password_confirmation"
                            type={showConfirm ? 'text' : 'password'}
                            name="password_confirmation"
                            value={data.password_confirmation}
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                            className="w-full pl-10 pr-10 py-3 border border-sky-200 rounded-xl text-sm transition"
                            placeholder="••••••••"
                        />
                        <button type="button" onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 hover:text-sky-600">
                            {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>
                    <InputError message={errors.password_confirmation} className="mt-1.5" />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition hover:opacity-90 active:scale-95 disabled:opacity-60 mt-2"
                    style={{ background: 'linear-gradient(135deg, #0EA5E9, #0284C7)' }}
                >
                    <UserPlus className="w-4 h-4" />
                    {processing ? 'Création en cours…' : 'Créer mon compte'}
                </button>

                {/* Login link */}
                <p className="text-center text-sm text-sky-500 pt-1">
                    Déjà inscrit ?{' '}
                    <Link href={route('login')}
                        className="font-bold hover:underline transition"
                        style={{ color: '#0369A1' }}>
                        Se connecter
                    </Link>
                </p>
            </form>
        </GuestLayout>
    );
}
