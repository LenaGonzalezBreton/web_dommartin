import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, MapPin, Users, Heart, Shield, CheckCircle, ArrowRight, Leaf } from "lucide-react";
import { FacebookFeed } from "@/components/facebook-feed";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Dommartin avec vous",
    },
    description:
        "Rencontrez les initiateurs de la démarche citoyenne pour Dommartin-lès-Remiremont. Valérie Virion, Christophe Impéradori et bientôt toute l'équipe.",
};
// The following line was part of the instruction but appears to be a copy-paste error and is syntactically incorrect.
// It has been commented out to maintain valid JavaScript syntax.
// de Dommartin avec vous. Découvrez notre projet participatif pour les élections municipales de 2026 à Dommartin-lès-Remiremont.",
// };

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* HER SELECTION: Not full screen, impactful image */}
            <section className="relative h-[600px] flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/fond-dommartin.png"
                        alt="Vue de Dommartin"
                        fill
                        className="object-cover"
                        priority
                        quality={100}
                    />
                    {/* Darker overlay for text readability on the image */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg font-heading">
                            Dommartin <span className="text-accent">avec vous</span>
                        </h1>
                        <p className="text-xl md:text-3xl font-bold text-gray-100 tracking-wide max-w-3xl mx-auto drop-shadow-md">
                            Et si les élections municipales étaient une bonne occasion de se parler ?
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

            {/* VISION SECTION: White background, clean text */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 animate-slide-up font-heading">
                            Construire un projet, une équipe et une dynamique avec vous
                        </h2>

                        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed mb-12">
                            <p className="text-xl font-medium text-gray-800">
                                « Ici, vous découvrez les toutes premières pierres de notre programme, avant même la liste. »
                            </p>
                            <p className="font-semibold text-primary text-lg mt-4">
                                Parce qu’avant tout, ce qui nous motive, c’est Dommartin… avec vous !
                            </p>
                        </div>

                        {/* Jan 8 Meeting Card */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-primary shadow-lg text-left relative mx-auto max-w-3xl transform hover:-translate-y-1 transition-all duration-300">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                                Prochain Rendez-vous
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="bg-primary/10 p-4 rounded-xl shrink-0">
                                    <Calendar className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">Soyez acteurs avec nous de la démarche</h3>
                                    <p className="text-gray-600 mb-1">
                                        Rejoignez-nous le :
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold mt-2">
                                        <MapPin className="w-5 h-5" />
                                        <span>JEUDI 8 JANVIER 2026 à 20h30</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1 ml-7">Centre Culturel</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CHANTIERS SECTION: Light background for contrast */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg shadow-primary/20">1</span>
                        <h2 className="text-3xl font-bold text-gray-900 font-heading">3 Chantiers Majeurs</h2>
                        <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Shield className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Cadre de vie & sécurité</h3>
                            <p className="text-gray-600">Relier en sécurité les hameaux, les équipements et les services pour un quotidien apaisé.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                                <Leaf className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Vitalité & services</h3>
                            <p className="text-gray-600">Soutenir les commerces, l'emploi local et relever le défi énergétique de nos bâtiments.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="bg-primary-light/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-light group-hover:text-white transition-colors">
                                <Users className="w-7 h-7 text-primary-light group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Lien social & jeunesse</h3>
                            <p className="text-gray-600">Créer des lieux de rencontre et dynamiser la vie associative pour toutes les générations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* METHOD & CTA SECTION */}
            <section className="py-20 bg-white relative overflow-hidden">
                {/* Decorative background blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

                        {/* Method Column */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/20 shrink-0">2</span>
                                <h2 className="text-3xl font-bold text-gray-900 font-heading">Engagements de méthode</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-primary/10 p-2 rounded-lg h-fit">
                                        <CheckCircle className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-gray-900 mb-2">Participation & Transparence</h4>
                                        <p className="text-gray-600">Associer les habitant.e.s aux décisions d’investissement et créer des temps d’échanges réguliers.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-primary/10 p-2 rounded-lg h-fit">
                                        <Heart className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-gray-900 mb-2">Intérêt Général</h4>
                                        <p className="text-gray-600">Choisir ce qui rassemble, refuser ce qui divise, et agir efficacement au niveau intercommunal.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA / Meeting Column */}
                        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl border border-gray-100 relative">
                            <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">
                                Prochaine réunion
                            </div>

                            <h3 className="text-2xl font-bold text-primary mb-6">Soyez acteurs avec nous de la démarche</h3>

                            <p className="text-gray-600 mb-6">
                                Rejoignez-nous le jeudi 8 janvier pour construire ensemble l'avenir de Dommartin.
                            </p>

                            <div className="bg-primary/5 rounded-xl p-6 mb-8 border border-primary/10">
                                <p className="font-bold text-center text-gray-900 mb-2">REJOIGNEZ-NOUS</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3 text-primary text-lg justify-center">
                                        <Calendar className="w-6 h-6" />
                                        <span className="font-bold">JEUDI 8 JANVIER 2026</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700 justify-center">
                                        <MapPin className="w-5 h-5 shrink-0" />
                                        <span>20h30 - Centre Culturel</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm mb-8 text-center">
                                Votre participation, votre candidature peut-être, sont les bienvenues.
                            </p>

                            <Button asChild className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-12 text-lg shadow-lg hover:shadow-primary/30 transition-all">
                                <Link href="mailto:dommartinavecvous@proton.me">
                                    <Mail className="mr-2 h-5 w-5" />
                                    Nous contacter
                                </Link>
                            </Button>
                        </div>

                    </div>

                    <div className="mt-20 text-center">
                        <p className="text-2xl font-handwriting text-accent font-bold">
                            "Belles année 2026 et pleine santé aux Picosé.e.s !"
                        </p>
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
