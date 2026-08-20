import OmyaLogo from '@/Components/Omya/OmyaLogo';
import { Link } from '@inertiajs/react';
import { TrendingUp, ShieldCheck, Award } from 'lucide-react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

            {/* ── Left Branding Panel ── */}
            <div
                className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0C4A6E 0%, #0369A1 60%, #075985 100%)' }}
            >
                {/* Decorative circles */}
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10"
                    style={{ background: '#0EA5E9' }} />
                <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full opacity-10"
                    style={{ background: '#0EA5E9' }} />
                <div className="absolute top-1/2 right-0 w-48 h-48 rounded-full opacity-5"
                    style={{ background: '#ffffff' }} />

                {/* Logo */}
                <Link href="/">
                    <OmyaLogo light className="h-10" />
                </Link>

                {/* Center content */}
                <div className="space-y-8 relative z-10">
                    <div>
                        <h2 className="text-4xl font-black text-white leading-tight mb-4">
                            Votre Partenaire<br />
                            <span style={{ color: '#0EA5E9' }}>Financier de Confiance</span>
                        </h2>
                        <p className="text-sky-300 text-base leading-relaxed max-w-sm">
                            Accédez aux marchés financiers de la CEMAC avec l'expertise
                            d'une société de bourse agréée COSUMAF, membre de la BVMAC.
                        </p>
                    </div>

                    {/* Trust badges */}
                    <div className="space-y-3">
                        {[
                            { icon: ShieldCheck, text: 'Agréée COSUMAF — Zone CEMAC' },
                            { icon: Award,       text: 'Membre officiel de la BVMAC' },
                            { icon: TrendingUp,  text: 'Gestion de portefeuille certifiée' },
                        ].map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: 'rgba(14, 165, 233,0.18)', border: '1px solid rgba(14, 165, 233,0.35)' }}>
                                    <Icon className="w-4 h-4" style={{ color: '#0EA5E9' }} />
                                </div>
                                <span className="text-sky-200 text-sm font-medium">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer quote */}
                <p className="text-sky-500 text-xs relative z-10">
                    © {new Date().getFullYear()} OMYA INVEST — Tous droits réservés.
                </p>
            </div>

            {/* ── Right Form Panel ── */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-sky-50">

                {/* Mobile logo */}
                <div className="mb-8 lg:hidden">
                    <Link href="/">
                        <OmyaLogo className="h-10" />
                    </Link>
                </div>

                {/* Form card */}
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-sky-100 p-8">
                    {children}
                </div>

                <p className="mt-6 text-xs text-sky-400 text-center">
                    Plateforme sécurisée · Données chiffrées SSL/TLS
                </p>
            </div>
        </div>
    );
}
