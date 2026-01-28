import { Metadata } from "next";
import { Shield, Leaf, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TerrainMultisport } from "@/components/terrain-multisport";
import { HalleMarche } from "@/components/halle-marche";

export const metadata: Metadata = {
    title: "Nos Projets | Dommartin avec vous",
    description:
        "Découvrez les 3 chantiers majeurs de la liste Dommartin avec Vous : Cadre de vie & sécurité, Vitalité & services, Lien social & jeunesse.",
};

export default function NosProjects() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-accent/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 inline-block">
                            Notre Vision
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-heading">
                            Nos <span className="text-primary">Projets</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            3 chantiers majeurs pour construire ensemble l'avenir de Dommartin.
                            Découvrez nos priorités et nos engagements concrets.
                        </p>
                    </div>
                </div>
            </section>

            {/* Navigation entre sections */}
            <section className="py-8 bg-white border-b sticky top-16 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="#cadre-de-vie"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-white transition-all"
                        >
                            <Shield className="w-4 h-4" />
                            Cadre de vie
                        </a>
                        <a
                            href="#vitalite"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold hover:bg-accent hover:text-white transition-all"
                        >
                            <Leaf className="w-4 h-4" />
                            Vitalité
                        </a>
                        <a
                            href="#lien-social"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light/10 text-primary-light font-semibold hover:bg-primary-light hover:text-white transition-all"
                        >
                            <Users className="w-4 h-4" />
                            Lien social
                        </a>
                    </div>
                </div>
            </section>

            {/* Section 1: Cadre de vie & sécurité */}
            <section id="cadre-de-vie" className="py-20 bg-white scroll-mt-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-primary uppercase tracking-wider">Chantier 1</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
                                    Cadre de vie & sécurité
                                </h2>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                                Relier en sécurité les hameaux, les équipements et les services pour un quotidien apaisé.
                            </p>

                            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 mt-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Nos priorités :</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span>Sécuriser les déplacements piétons et cyclistes entre les hameaux</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span>Améliorer l'éclairage public dans les zones sensibles</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span>Entretenir et valoriser les espaces publics</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Vitalité & services */}
            <section id="vitalite" className="py-20 bg-gray-50 scroll-mt-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                                <Leaf className="w-8 h-8 text-accent" />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-accent uppercase tracking-wider">Chantier 2</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
                                    Vitalité & services
                                </h2>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                                Soutenir les commerces, l'emploi local et relever le défi énergétique de nos bâtiments.
                            </p>

                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 mt-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Nos priorités :</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span>Accompagner et soutenir les commerces de proximité</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span>Favoriser l'emploi local et les circuits courts</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span>Améliorer la performance énergétique des bâtiments communaux</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Projet Halle */}
                            <HalleMarche />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Lien social & jeunesse */}
            <section id="lien-social" className="py-20 bg-white scroll-mt-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-primary-light/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                                <Users className="w-8 h-8 text-primary-light" />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-primary-light uppercase tracking-wider">Chantier 3</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
                                    Lien social & jeunesse
                                </h2>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                                Créer des lieux de rencontre et dynamiser la vie associative pour toutes les générations.
                            </p>

                            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 mt-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Nos priorités :</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span>Créer des espaces de rencontre intergénérationnels</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span>Soutenir et dynamiser la vie associative</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span>Proposer des activités adaptées pour les jeunes</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Projet Terrain Multisport */}
                            <TerrainMultisport />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Participez à la construction du programme</h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Vos idées et suggestions sont les bienvenues pour enrichir ces projets.
                    </p>
                    <Button asChild size="lg">
                        <Link href="mailto:dommartinavecvous@proton.me">
                            Nous contacter
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
