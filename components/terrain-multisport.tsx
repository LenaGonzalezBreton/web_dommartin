"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function TerrainMultisport() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="bg-gradient-to-br from-primary-light/5 to-primary/5 rounded-3xl border border-primary-light/20 overflow-hidden">
                {/* Header - Clickable */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full p-6 md:p-10 pb-6 flex items-center justify-between gap-4 text-left hover:bg-primary-light/5 transition-colors"
                >
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading">
                            Terrain multisport : un projet concret pour la jeunesse
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Un lieu accessible, pensé pour les jeunes, pour pratiquer du sport librement.
                        </p>
                    </div>
                    <ChevronDown
                        className={`w-6 h-6 text-primary-light shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                </button>

                {/* Content - Collapsible */}
                <div
                    className={`grid transition-all duration-500 ease-in-out ${isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                >
                    <div className="overflow-hidden">
                        <div className="px-6 md:px-10 pb-6 md:pb-10">
                            {/* Intro + Image */}
                            <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        Nous voulons doter Dommartin-lès-Remiremont d'un <strong>terrain multisport moderne, durable et sécurisé</strong> : un lieu accessible, pensé pour les jeunes, pour pratiquer du sport librement, se retrouver et créer du lien.
                                    </p>
                                </div>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/terrain-multisport.png"
                                        alt="Exemple de terrain multisport"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Pourquoi ce projet */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Pourquoi ce projet ?</h4>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span><strong>Dynamiser les loisirs :</strong> offrir un espace dédié au sport et aux rencontres.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span><strong>Favoriser l'intégration :</strong> rassembler les jeunes, quels que soient leurs âges et leurs pratiques.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span><strong>Garantir la sécurité :</strong> un aménagement de qualité, adapté à la fréquentation et aux usages.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Ce que nous proposons */}
                            <div className="mt-6 bg-white p-6 md:p-8 rounded-2xl">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Concrètement, ce que nous proposons</h4>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span>Un lieu de <strong>sport libre et diversifié</strong> (multi-activités).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span>Un <strong>espace de rencontre et d'échanges</strong> : un vrai lieu de vie pour la jeunesse.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span>Un <strong>aménagement durable</strong>, sécurisé et bien intégré au cadre de vie.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Méthode */}
                            <div className="mt-6 bg-white p-6 md:p-8 rounded-2xl">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Une méthode sérieuse : concertation, transparence, suivi</h4>
                                <p className="text-gray-600 mb-4">Parce que c'est un investissement important, nous mènerons le projet avec une méthode claire :</p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span><strong>Choix de l'implantation et des usages</strong> avec les habitants, en particulier les jeunes et les familles.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span><strong>Décision transparente</strong> et informations régulières sur l'avancement.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span><strong>Suivi technique et financier public</strong>, étape par étape.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Budget */}
                            <div className="mt-6 grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 md:p-8 rounded-2xl">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Budget & financements</h4>
                                    <p className="text-gray-600 mb-4">
                                        Le coût estimatif est de l'ordre de <strong>120 000 €</strong> (pose et équipements).
                                        Notre objectif est de mobiliser les subventions disponibles afin de <strong>limiter au maximum le reste à charge communal</strong>.
                                    </p>
                                    <p className="text-gray-600 mb-2">Financeurs possibles :</p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                            <span>Agence Nationale du Sport (ANS)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                            <span>DETR (Dotation d'Équipement des Territoires Ruraux)</span>
                                        </li>
                                    </ul>
                                    <p className="text-sm text-gray-500 mt-4 italic">
                                        Nous engagerons le projet uniquement avec un montage financier soutenable pour la commune.
                                    </p>
                                </div>

                                <div className="bg-white p-6 md:p-8 rounded-2xl">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Des options à étudier avec vous</h4>
                                    <p className="text-gray-600 mb-4">
                                        Selon les attentes et la faisabilité, nous pourrons étudier des compléments attractifs :
                                    </p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                            <span><strong>Pumptrack</strong> (vélo / trottinette / BMX)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                            <span><strong>Skatepark modulaire</strong> (évolutif)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
