import { Metadata } from "next";
import { Shield, Leaf, Users, Building2, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TerrainMultisport } from "@/components/terrain-multisport";
import { HalleMarche } from "@/components/halle-marche";
import { DeplacementsSecurises } from "@/components/deplacements-securises";

export const metadata: Metadata = {
    title: "Nos Projets | Dommartin avec vous",
    description:
        "Découvrez les 3 chantiers majeurs de la liste Dommartin avec Vous : Cadre de vie & sécurité, Vitalité & services, Lien social & jeunesse, et notre vision intercommunale.",
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
            <section className="py-4 bg-white border-b sticky top-16 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-nowrap justify-start md:justify-center gap-3 overflow-x-auto scrollbar-hide pb-2 -mb-2">
                        <a
                            href="#cadre-de-vie"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-white transition-all whitespace-nowrap shrink-0"
                        >
                            <Shield className="w-4 h-4" />
                            Cadre de vie
                        </a>
                        <a
                            href="#vitalite"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold hover:bg-accent hover:text-white transition-all whitespace-nowrap shrink-0"
                        >
                            <Leaf className="w-4 h-4" />
                            Vitalité
                        </a>
                        <a
                            href="#lien-social"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light/10 text-primary-light font-semibold hover:bg-primary-light hover:text-white transition-all whitespace-nowrap shrink-0"
                        >
                            <Users className="w-4 h-4" />
                            Lien social
                        </a>
                        {/* Séparateur visuel */}
                        <div className="w-px h-8 bg-gray-300 mx-1 shrink-0" />
                        <a
                            href="#intercommunalite"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-dark/10 text-primary-dark font-semibold hover:bg-primary-dark hover:text-white transition-all whitespace-nowrap shrink-0"
                        >
                            <Building2 className="w-4 h-4" />
                            Intercommunalité
                        </a>
                        {/* Séparateur visuel */}
                        <div className="w-px h-8 bg-gray-300 mx-1 shrink-0" />
                        <a
                            href="#consultatif"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold hover:bg-accent hover:text-white transition-all whitespace-nowrap shrink-0"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Consultatif
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

                            {/* Projet Déplacements sécurisés */}
                            <DeplacementsSecurises />
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

            {/* Section 4: Intercommunalité */}
            <section id="intercommunalite" className="py-20 bg-gray-50 scroll-mt-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-primary-dark/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                                <Building2 className="w-8 h-8 text-primary-dark" />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-primary-dark uppercase tracking-wider">Cadre Intercommunal</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
                                    Intercommunalité
                                </h2>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            {/* Introduction CCPVM */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-primary/20 shadow-sm mb-8">
                                <p className="text-lg text-gray-600 font-medium mb-2">
                                    Communauté de Communes de la Porte des Vosges Méridionales (CCPVM)
                                </p>
                                <h3 className="text-xl font-bold text-primary mb-4">
                                    Agir, peser, sécuriser les services du quotidien
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Notre projet pour Dommartin-lès-Remiremont s'inscrit dans une réalité institutionnelle claire :
                                    une part croissante des décisions structurantes se joue à l'échelle intercommunale, via la
                                    Communauté de Communes de la Porte des Vosges Méridionales (CCPVM).
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Pour autant, le transfert de compétences ne doit jamais signifier un transfert de responsabilité politique :
                                    les élus municipaux ont le devoir de porter la voix des habitants, de défendre les priorités locales
                                    et d'exiger des décisions utiles et équitables pour Dommartin.
                                </p>
                            </div>

                            {/* Nos priorités intercommunales */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 mt-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Nos priorités, au regard des compétences intercommunales</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <div>
                                            <span className="font-semibold text-gray-900">Services essentiels</span>
                                            <span className="text-gray-600"> (eau potable, assainissement collectif, déchets) : continuité dans le service de proximité aux habitants, amélioration de la qualité de l'eau, maintien d'un prix raisonnable</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <div>
                                            <span className="font-semibold text-gray-900">Urbanisme</span>
                                            <span className="text-gray-600"> : défense des spécificités de notre commune dans le nouveau PLUI et dans le SCOT, création d'une aide à la réhabilitation du bâti existant</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <div>
                                            <span className="font-semibold text-gray-900">Cadre de vie et sécurité</span>
                                            <span className="text-gray-600"> : aménagement cohérent sur les communes, accès à la mobilité adaptée sur tout le territoire intercommunal</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <div>
                                            <span className="font-semibold text-gray-900">Attractivité & économie locale</span>
                                            <span className="text-gray-600"> : soutien au tissu économique local, valorisation de notre territoire et de nos hébergements vis-à-vis du tourisme, partenariat avec le Club Vosgien pour l'entretien des sentiers de randonnée</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <div>
                                            <span className="font-semibold text-gray-900">Familles & solidarités</span>
                                            <span className="text-gray-600"> : partage de l'accès de nos enfants aux centres aérés dans des conditions identiques pour tous, aide à la réflexion pour la création d'une MAM dans notre commune</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <div>
                                            <span className="font-semibold text-gray-900">Transition & résilience</span>
                                            <span className="text-gray-600"> : gestion des milieux aquatiques réaliste et travaux de bon sens en accord avec les riverains</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <div>
                                            <span className="font-semibold text-gray-900">Culture & sport</span>
                                            <span className="text-gray-600"> : accès aux équipements et services intercommunaux avec les mêmes conditions pour tous les habitants</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Engagement gouvernance */}
                            <div className="bg-gradient-to-br from-primary to-primary-dark p-6 md:p-8 rounded-2xl mt-8 text-white">
                                <h3 className="text-xl font-bold mb-4">Notre engagement : une gouvernance exigeante au service des Picosés</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                                        <span><strong>Présence et travail actif</strong> dans les instances intercommunales : défendre Dommartin dans les arbitrages</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                                        <span><strong>Position claire</strong> sur les dossiers : priorités, calendriers, niveaux de service, financements</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                                        <span><strong>Suivi des engagements</strong> : points d'étape réguliers et bilan annuel</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                                        <span><strong>Transparence</strong> : informer sur les décisions intercommunales qui impactent directement la commune</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                                        <span><strong>Maîtrise du budget intercommunal</strong></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Dommartin en dialogue */}
            <section id="dialogue" className="py-20 bg-white scroll-mt-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                                <MessageCircle className="w-8 h-8 text-accent" />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-accent uppercase tracking-wider">Nouvelle démarche</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
                                    Dommartin en dialogue
                                </h2>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                                <strong className="text-primary">Démocratie locale : renforcer la participation citoyenne à Dommartin.</strong>
                                <br />
                                Fidèles à notre démarche, construire un programme qui réponde aux attentes des Picosés en allant à leur rencontre,
                                en les écoutant et en les associant, nous voulons créer des espaces de participation clairs et utiles.
                            </p>

                            <div className="bg-accent/5 p-6 md:p-8 rounded-2xl border border-accent/20 mt-8 mb-8">
                                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                    Ainsi nous renforcerons la participation des habitants à la vie communale, dans un cadre clair, respectueux des compétences du conseil municipal et conforme au Code général des collectivités territoriales (CGCT).
                                </p>
                            </div>

                            {/* 1. Conseil consultatif citoyen */}
                            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                                <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                Créer un Conseil consultatif citoyen
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Ce conseil serait un espace permanent de dialogue entre habitants et élus. Il pourrait :
                            </p>
                            <ul className="space-y-3 text-gray-600 mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                    <span>Permettre une saisine du conseil municipal par les habitants sur des propositions d’intérêt communal</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                    <span>Être saisi par le conseil municipal pour avis avant certaines décisions ayant un impact important</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                    <span>Contribuer à identifier et prioriser des projets communaux</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                    <span>Le cas échéant, aider à organiser des consultations locales sur des priorités d’investissement impliquant de façon conséquente les finances de la commune</span>
                                </li>
                            </ul>
                            <div className="bg-white border-l-4 border-accent pl-6 py-2 my-6">
                                <p className="text-gray-700 italic">
                                    <strong>Il ne se substituerait pas au conseil municipal :</strong> La décision resterait toujours de la compétence des élus. Mais elle serait éclairée, enrichie et mieux comprise.
                                </p>
                            </div>

                            {/* 2. Commissions municipales */}
                            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                                <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                Mettre en place des commissions municipales ouvertes et thématiques
                            </h3>
                            <div className="grid md:grid-cols-3 gap-4 mb-6">
                                <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100 hover:border-accent/40 transition-colors">
                                    <span className="font-bold text-gray-900 block mb-1">Forêt & Bois</span>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100 hover:border-accent/40 transition-colors">
                                    <span className="font-bold text-gray-900 block mb-1">Mobilités</span>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100 hover:border-accent/40 transition-colors">
                                    <span className="font-bold text-gray-900 block mb-1">Jeunesse / Vie associative</span>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-8">
                                Ces commissions associeraient élus, habitants volontaires et, selon les sujets, partenaires ou professionnels.
                            </p>

                            {/* Notre objectif */}
                            <div className="bg-gradient-to-br from-primary to-primary-light p-8 rounded-2xl text-white shadow-lg">
                                <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">Notre objectif</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="bg-white/20 p-1.5 rounded-full">
                                            <MessageCircle className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium">Favoriser le dialogue et la transparence</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-white/20 p-1.5 rounded-full">
                                            <Users className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium">Encourager l’engagement responsable des habitants</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-white/20 p-1.5 rounded-full">
                                            <Shield className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium">Construire des décisions mieux partagées</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-white/20 p-1.5 rounded-full">
                                            <Leaf className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium">Faire vivre la participation au centre comme dans les hameaux</span>
                                    </li>
                                </ul>
                                <div className="mt-8 pt-6 border-t border-white/20 text-center">
                                    <p className="text-xl font-heading font-bold">
                                        Dommartin est riche de ses habitants.
                                    </p>
                                    <p className="opacity-90 mt-2">
                                        Nous voulons leur donner les moyens de contribuer, dans un cadre organisé, respectueux et constructif.
                                    </p>
                                </div>
                            </div>
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
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
                        <Button asChild size="lg">
                            <Link href="mailto:dommartinavecvous@proton.me">
                                Nous contacter
                            </Link>
                        </Button>
                        <div className="flex items-center gap-3 text-left bg-white/50 p-4 rounded-xl border border-gray-100">
                            <div className="bg-primary/10 p-2 rounded-full shrink-0">
                                <Calendar className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <span className="block font-bold text-gray-900 text-sm">Permanences</span>
                                <span className="text-gray-600 text-sm block">
                                    Samedis 21, 28 février et 7 mars <br />
                                    de 10h à 12h à la Maison des Associations.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
