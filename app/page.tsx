import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, MapPin, Users, Heart, Shield, CheckCircle, ArrowRight, Leaf, FileText, Newspaper, Instagram, Building2, MessageCircle } from "lucide-react";
import { Metadata } from "next";

import { UpcomingEvents } from "@/components/UpcomingEvents";
import { PopupFev21 } from "@/components/popup-fev21";
import { PopupFev28 } from "@/components/popup-fev28";

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
            <section className="relative min-h-[70vh] md:h-[80vh] min-h-[600px] flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/fond-dommartin.jpg"
                        alt="Vue de Dommartin"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    {/* Darker overlay for text readability on the image */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                    {/* Jean-Jacques Rosaye portrait overlay */}
                    <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 flex flex-col items-center">
                        <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                            <Image
                                src="/jean-jacques-rosaye.jpg"
                                alt="Jean-Jacques Rosaye"
                                width={200}
                                height={200}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="mt-3 bg-white px-5 py-2 rounded-full shadow-xl">
                            <span className="text-sm md:text-base font-bold text-primary">avec Jean-Jacques ROSAYE</span>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="animate-fade-in">
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg font-heading">
                            Dommartin <span className="text-accent">avec vous</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-gray-100 tracking-wide max-w-4xl mx-auto drop-shadow-md leading-relaxed">
                            Un projet partagé, porté par l’écoute, le dialogue et l’engagement collectif.
                        </p>
                        <div className="mt-10">
                            <div className="inline-flex flex-row items-center justify-center md:gap-3 px-6 py-3 md:px-5 md:py-2.5 rounded-xl md:rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm md:text-base font-medium tracking-wide shadow-lg hover:bg-white/20 transition-all cursor-default group max-w-full text-center">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(224,160,93,0.8)] shrink-0 hidden md:block" />
                                <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-1.5">
                                    <span className="font-bold text-base md:text-lg">Municipales 2026 : rendez-vous le 15 mars</span>
                                </div>
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

                    <div className="max-w-6xl mx-auto space-y-8">
                        {/* Top Row: Charte & Communiqué */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Carte 1: Rendez-vous & Comptes-rendus */}
                            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                    <Calendar className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Rendez-vous</h3>
                                <div className="text-gray-600 mb-6 flex-grow space-y-4">
                                    {/* Sécurité arrêts de bus */}
                                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">Nouveau</span>
                                        </div>
                                        <p className="font-bold text-gray-900 mb-1">🚌 Sécurité des arrêts de bus</p>
                                        <p className="text-sm text-gray-700 font-semibold mt-1">👉 Rendez-vous samedi à 14h – place Saint-Laurent.</p>
                                        <p className="text-sm text-gray-600 mt-2">Nous irons voir plusieurs points d&apos;arrêt dans la commune afin d&apos;échanger sur les questions de visibilité, d&apos;éclairage, d&apos;aménagement et de sécurité.</p>
                                        <p className="text-sm text-gray-600 mt-1">L&apos;objectif : mieux protéger les enfants, améliorer les conditions d&apos;attente et réfléchir ensemble à des solutions pour des déplacements plus sûrs.</p>
                                        <p className="text-sm text-primary font-semibold mt-2">Habitants, parents, riverains : votre regard est précieux.</p>
                                    </div>
                                    <div className="w-full h-px bg-gray-100" />
                                    {/* Compte-rendu réunion publique 12 février */}
                                    <div className="bg-primary/5 p-4 rounded-xl border border-primary/20">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">Compte-rendu</span>
                                        </div>
                                        <span className="font-bold text-gray-900 block">12 Février - Réunion Publique</span>
                                        <p className="text-sm text-gray-600 mt-1">Présentation du programme et de l&#39;équipe. Une soirée réussie avec les picosés !</p>
                                        <Link href="/demarche#reunion-publique-fevrier" className="text-primary font-semibold text-sm inline-flex items-center gap-1 mt-2 hover:gap-2 transition-all">
                                            Lire le compte-rendu <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                    <div className="w-full h-px bg-gray-100" />
                                    {/* Compte-rendu de la réunion associations */}
                                    <div className="bg-accent/5 p-4 rounded-xl border border-accent/20">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="bg-accent text-white text-xs font-bold px-2 py-0.5 rounded-full">Compte-rendu</span>
                                        </div>
                                        <span className="font-bold text-gray-900 block">30 Janvier - Associations</span>
                                        <p className="text-sm text-gray-600 mt-1">Échanges avec le tissu associatif sportif, culturel et social.</p>
                                        <Link href="/demarche#associations" className="text-accent font-semibold text-sm inline-flex items-center gap-1 mt-2 hover:gap-2 transition-all">
                                            Lire le compte-rendu <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>

                                </div>
                                <Button asChild className="w-full md:w-auto mt-auto" size="lg">
                                    <Link href="/demarche#agendas">
                                        Voir tous les rendez-vous
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>

                            {/* Carte 2: Actualités & Médias */}
                            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                                        <FileText className="w-8 h-8 text-accent" />
                                    </div>
                                    <span className="bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-full animate-pulse">Nouveau</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Actualités</h3>
                                <div className="text-gray-600 mb-8 flex-grow space-y-4">
                                    {/* Nouvel article : Maison Louis */}
                                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="bg-accent text-white text-xs font-bold px-2 py-0.5 rounded-full">Nouveau</span>
                                        </div>
                                        <p className="font-bold text-gray-900 mb-1">🧀 Rencontre : la Maison Louis</p>
                                        <p className="text-gray-600 text-sm">Visite des locaux d&apos;affinage de fromages et du magasin « Le Panier de Louis ».</p>
                                        <Link href="/communique" className="text-accent font-semibold text-sm inline-flex items-center gap-1 mt-2 hover:gap-2 transition-all">
                                            Lire l&apos;article <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                    <div className="w-full h-px bg-gray-100" />
                                    {/* Article : visites menuiserie + scierie */}
                                    <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs text-gray-500">28 février</span>
                                        </div>
                                        <p className="font-bold text-gray-900 mb-1">🌳 Le bois au cœur de nos savoir-faire</p>
                                        <p className="text-gray-600 text-sm">Visite de la Menuiserie Rustique Bois (Adam Étienne) et de la Scierie Mobile Perrin — deux colistiers, acteurs économiques de Dommartin.</p>
                                    </div>
                                    <div className="w-full h-px bg-gray-100" />
                                    <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                                        <p className="font-semibold text-amber-800 text-sm mb-0.5">Menuiserie Demangel</p>
                                        <p className="text-gray-500 text-xs">Rencontre avec un acteur historique de l&apos;économie locale.</p>
                                        <Link href="/communique" className="text-accent font-semibold text-sm inline-flex items-center gap-1 mt-1 hover:gap-2 transition-all">
                                            Lire l&apos;article <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                                        <p className="font-semibold text-green-800 text-sm mb-0.5">Désenrochement aux Mézins</p>
                                        <p className="text-gray-500 text-xs">Un dossier à suivre avec attention.</p>
                                    </div>
                                    <div className="bg-primary/5 p-3 rounded-xl border border-primary/10">
                                        <p className="font-semibold text-primary text-sm mb-0.5">Visite au GAEC des Mitreuches</p>
                                        <p className="text-gray-500 text-xs">Échanges sur les réalités agricoles.</p>
                                    </div>
                                </div>
                                <Button asChild className="w-full md:w-auto mt-auto" size="lg">
                                    <Link href="/communique">
                                        Consulter
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Permanences (Full width) */}
                        <div className="bg-gradient-to-br from-primary to-primary-dark p-6 md:p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="text-center md:text-left shrink-0">
                                    <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                                        Rencontres
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2 font-heading">Permanences</h3>
                                    <p className="text-white/90 max-w-xs">Venez échanger avec nous et poser toutes vos questions.</p>
                                    <p className="mt-4 font-bold text-accent flex items-center justify-center md:justify-start gap-2">
                                        <MapPin className="w-5 h-5" />
                                        Maison des Associations
                                    </p>
                                </div>

                                <div className="flex-grow w-full md:w-auto">
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        <PopupFev21 />
                                        <PopupFev28 />
                                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex flex-col items-center justify-center text-center hover:bg-white/20 transition-all">
                                            <span className="text-xs font-bold opacity-80 uppercase mb-1">MARS</span>
                                            <span className="text-3xl font-bold mb-1">07</span>
                                            <span className="text-sm font-semibold">Samedi</span>
                                            <span className="text-xs opacity-90 mt-1">10h - 12h</span>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex flex-col items-center justify-center text-center hover:bg-white/20 transition-all">
                                            <span className="text-xs font-bold opacity-80 uppercase mb-1">MARS</span>
                                            <span className="text-3xl font-bold mb-1">10</span>
                                            <span className="text-sm font-semibold">Mardi</span>
                                            <span className="text-xs opacity-90 mt-1">18h - 21h</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row: L'équipe (Featured) */}
                        <div className="bg-gray-50 p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
                            {/* Decorative background */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-110" />

                            <div className="relative z-10 grid md:grid-cols-5 gap-8 items-center">
                                <div className="md:col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/equipe-accueil.jpg"
                                        alt="L'équipe Dommartin avec Vous"
                                        fill
                                        className="object-cover object-[15%_center]"
                                    />
                                </div>

                                <div className="md:col-span-3">
                                    <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
                                        <span className="text-primary font-bold uppercase tracking-wider text-sm">Notre équipe</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">21 candidats engagés</h3>
                                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                        Découvrez les 21 candidats qui composent la liste « Dommartin avec Vous ».
                                        <br />
                                        <span className="font-semibold text-primary">Des profils variés, unis par l'envie d'agir</span> pour notre commune.
                                    </p>
                                    <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 h-12 text-lg shadow-lg shadow-primary/20">
                                        <Link href="/l-equipe">
                                            Découvrir l'équipe
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
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
                        <Link href="/nos-projets#cadre-de-vie" className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group block">
                            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Shield className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Cadre de vie & sécurité</h3>
                            <p className="text-gray-600 mb-4">Relier en sécurité les hameaux, les équipements et les services pour un quotidien apaisé.</p>
                            <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                En savoir plus <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>

                        {/* Card 2 */}
                        <Link href="/nos-projets#vitalite" className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group block">
                            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                                <Leaf className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Vitalité & services</h3>
                            <p className="text-gray-600 mb-4">Soutenir les commerces, l'emploi local et relever le défi énergétique de nos bâtiments.</p>
                            <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                En savoir plus <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>

                        {/* Card 3 */}
                        <Link href="/nos-projets#lien-social" className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group block">
                            <div className="bg-primary-light/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-light group-hover:text-white transition-colors">
                                <Users className="w-7 h-7 text-primary-light group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Lien social & jeunesse</h3>
                            <p className="text-gray-600 mb-4">Créer des lieux de rencontre et dynamiser la vie associative pour toutes les générations.</p>
                            <span className="text-primary-light font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                En savoir plus <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                    </div>

                    {/* Encart Intercommunalité */}
                    <div className="max-w-6xl mx-auto mt-12">
                        <Link href="/nos-projets#intercommunalite" className="block bg-gradient-to-br from-primary-dark/5 to-primary/10 p-6 md:p-8 rounded-2xl shadow-lg border border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                <div className="bg-primary-dark/10 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary-dark group-hover:text-white transition-colors">
                                    <Building2 className="w-8 h-8 text-primary-dark group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex-grow">
                                    <span className="text-sm font-bold text-primary-dark uppercase tracking-wider">Cadre Intercommunal</span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-heading">Intercommunalité</h3>
                                    <p className="text-gray-600">Agir, peser, sécuriser les services du quotidien au sein de la Communauté de Communes de la Porte des Vosges Méridionales.</p>
                                </div>
                                <div className="shrink-0">
                                    <span className="text-primary-dark font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Découvrir notre vision <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Encart Dommartin en dialogue */}
                    <div className="max-w-6xl mx-auto mt-8">
                        <Link href="/nos-projets#consultatif" className="block bg-gradient-to-br from-accent/5 to-accent/20 p-6 md:p-8 rounded-2xl shadow-lg border border-accent/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                                    <MessageCircle className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex-grow">
                                    <span className="text-sm font-bold text-accent uppercase tracking-wider">Nouvelle démarche</span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-heading">Dommartin en dialogue</h3>
                                    <p className="text-gray-600">Conseil consultatif citoyen, commissions ouvertes... Découvrez comment nous voulons renforcer la participation à Dommartin.</p>
                                </div>
                                <div className="shrink-0">
                                    <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Voir le dispositif <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>
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
                                Découvrez notre démarche, nos engagements et soutenez-nous pour construire ensemble l'avenir de Dommartin.
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
            {/* CTA SECTION */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        {/* Soyez acteurs */}
                        <div className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 text-center flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-primary mb-6">Soyez acteurs avec nous</h3>
                            <p className="text-gray-600 mb-8 mx-auto">
                                Votre participation, votre soutien, et vos id&#233;es sont les bienvenus pour enrichir notre projet.
                            </p>
                            <div className="flex justify-center">
                                <Button asChild className="bg-primary hover:bg-primary-dark text-white font-bold h-12 px-8 text-lg shadow-lg hover:shadow-primary/30 transition-all">
                                    <Link href="mailto:dommartinavecvous@proton.me">
                                        <Mail className="mr-2 h-5 w-5" />
                                        Nous contacter
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOCIAL MEDIA CTA SECTION */}
            <section className="py-16 bg-[#fcfaf8]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">Suivez notre actualité</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            Retrouvez nos dernières publications, photos et échanges sur nos réseaux sociaux.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" className="bg-[#1877F2] hover:bg-[#1864D9] text-white shadow-lg shadow-blue-200">
                                <Link href="https://www.facebook.com/profile.php?id=61585026020662" target="_blank" rel="noopener noreferrer">
                                    <span className="mr-2 text-xl font-bold">f</span>
                                    Rejoignez-nous sur Facebook
                                </Link>
                            </Button>
                            <Button asChild size="lg" className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90 text-white shadow-lg shadow-pink-200 border-0">
                                <Link href="https://www.instagram.com/dommartinavecvous88200" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="mr-2 w-6 h-6" />
                                    Suivez-nous sur Instagram
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>


        </div >
    );
}
