import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, MapPin, Users, Heart, Shield, CheckCircle, ArrowRight, Leaf, FileText, Newspaper } from "lucide-react";
import { Metadata } from "next";

import { UpcomingEvents } from "@/components/UpcomingEvents";

export const metadata: Metadata = {
    title: {
        absolute: "Dommartin avec vous",
    },
    description:
        "Suivez la construction du programme et de l'équipe Dommartin avec Vous. Une démarche participative pour les municipales 2026.",
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* HER SELECTION: Not full screen, impactful image */}
            <section className="relative min-h-[80vh] md:h-[600px] flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/fond-dommartin.png"
                        alt="Vue de Dommartin"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    {/* Darker overlay for text readability on the image */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="animate-fade-in">
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg font-heading">
                            Dommartin <span className="text-accent">avec vous</span>
                        </h1>
                        <p className="text-xl md:text-3xl font-bold text-gray-100 tracking-wide max-w-4xl mx-auto drop-shadow-md leading-relaxed">
                            Ici, vous suivez la construction du programme et de l’équipe.
                        </p>
                        <div className="mt-10">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium tracking-wide shadow-lg hover:bg-white/20 transition-all cursor-default group">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(224,160,93,0.8)]" />
                                Élections municipales des 15 et 22 mars 2026
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* A LA UNE SECTION */}
            <section className="py-12 md:py-20 bg-white -mt-10 md:-mt-20 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">À la une</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Carte 1: Charte */}
                        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Charte d’engagement</h3>
                            <p className="text-gray-600 mb-8 text-lg">
                                Transparence, vote éclairé, consultation citoyenne... Découvrez les 4 engagements signés par nos candidats.
                            </p>
                            <Button asChild className="w-full md:w-auto" size="lg">
                                <Link href="/charte">
                                    Lire la charte
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>

                        {/* Carte 2: Communiqué */}
                        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <Newspaper className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">L’équipe se présente</h3>
                            <p className="text-gray-600 mb-8 text-lg">
                                <span className="font-semibold text-gray-800">Municipales 2026 :</span> la liste « Dommartin avec Vous » se présente, menée par Jean-Jacques Rosaye.
                            </p>
                            <Button asChild className="w-full md:w-auto" variant="outline" size="lg">
                                <Link href="/communique">
                                    Lire le communiqué
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>

                    </div>
                </div>
            </section>

            {/* PROCHAINS RENDEZ-VOUS SECTION */}
            <UpcomingEvents />

            {/* TEAM SECTION (NEW) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/equipe-groupe.jpg"
                                alt="Équipe Dommartin avec Vous"
                                fill
                                className="object-cover blur-xl scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-2xl md:text-4xl font-bold font-heading uppercase tracking-[0.2em] px-10 py-4 rounded-full shadow-lg">
                                    Prochainement
                                </span>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-4">
                                <span className="text-accent font-bold uppercase tracking-wider text-sm">Une équipe soudée</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
                                Une équipe à votre image
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Venus de tous les hameaux, engagés dans la vie associative et locale, nous unissons nos forces pour Dommartin.
                                <br />
                                <span className="font-semibold text-primary">Découvrez les visages de ceux qui s'engagent pour vous.</span>
                            </p>
                            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/20 h-14 px-8 text-lg rounded-full">
                                <Link href="/l-equipe">
                                    Découvrir notre liste
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>


            {/* CHANTIERS SECTION: Light background for contrast */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg shadow-primary/20">1</span>
                        <h2 className="text-3xl font-bold text-gray-900 font-heading">3 Chantiers Majeurs</h2>
                        <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Card 1 */}
                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Shield className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Cadre de vie & sécurité</h3>
                            <p className="text-gray-600">Relier en sécurité les hameaux, les équipements et les services pour un quotidien apaisé.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                                <Leaf className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Vitalité & services</h3>
                            <p className="text-gray-600">Soutenir les commerces, l'emploi local et relever le défi énergétique de nos bâtiments.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="bg-primary-light/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-light group-hover:text-white transition-colors">
                                <Users className="w-7 h-7 text-primary-light group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Lien social & jeunesse</h3>
                            <p className="text-gray-600">Créer des lieux de rencontre et dynamiser la vie associative pour toutes les générations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEMARCHE & VISION SECTION */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                {/* Decorative background blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg shadow-primary/20">2</span>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-slide-up font-heading">
                            Notre Démarche
                        </h2>
                        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed max-w-3xl">
                            <p className="text-xl font-medium text-gray-800">
                                La liste « Dommartin avec Vous » se présente pour les municipales 2026, menée par Jean-Jacques Rosaye.
                            </p>
                            <p className="font-semibold text-primary text-lg mt-4">
                                Découvrez notre démarche, nos engagements et rejoignez-nous pour construire ensemble l'avenir de Dommartin.
                            </p>
                        </div>
                        <div className="mt-8 flex justify-center gap-4">
                            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                                <Link href="/demarche">
                                    En savoir plus sur la démarche
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 text-center">
                        <h3 className="text-2xl font-bold text-primary mb-6">Soyez acteurs avec nous</h3>

                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Votre participation, votre soutien, et vos idées sont les bienvenus pour enrichir notre projet.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild className="bg-primary hover:bg-primary-dark text-white font-bold h-12 px-8 text-lg shadow-lg hover:shadow-primary/30 transition-all">
                                <Link href="mailto:dommartinavecvous@proton.me">
                                    <Mail className="mr-2 h-5 w-5" />
                                    Nous contacter
                                </Link>
                            </Button>
                        </div>

                        <div className="mt-12">
                            <p className="text-2xl font-handwriting text-accent font-bold">
                                "Belle année 2026 et pleine santé aux picosé.e.s. !"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FACEBOOK CTA SECTION */}
            <section className="py-16 bg-[#fcfaf8]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">Suivez notre actualité</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            Retrouvez nos dernières publications, photos et échanges sur notre page Facebook officielle.
                        </p>
                        <Button asChild size="lg" className="bg-[#1877F2] hover:bg-[#1864D9] text-white shadow-lg shadow-blue-200">
                            <Link href="https://www.facebook.com/profile.php?id=61585026020662" target="_blank" rel="noopener noreferrer">
                                <span className="mr-2 text-xl font-bold">f</span>
                                Rejoignez-nous sur Facebook
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>


        </div>
    );
}
