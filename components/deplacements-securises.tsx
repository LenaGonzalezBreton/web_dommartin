"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function DeplacementsSecurises() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl border border-primary/20 overflow-hidden">
                {/* Header - Clickable */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full p-6 md:p-10 pb-6 flex items-center justify-between gap-4 text-left hover:bg-primary/5 transition-colors"
                >
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading">
                            Déplacements apaisés et sécurisés
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Des aménagements simples, efficaces et concrets pour la sécurité de tous.
                        </p>
                    </div>
                    <ChevronDown
                        className={`w-6 h-6 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Pour renforcer la sécurité de tous et améliorer la cohabitation entre piétons, cyclistes et automobilistes, nous proposons des <strong>aménagements simples, efficaces et concrets</strong> sur Dommartin-lès-Remiremont.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Ils seront <strong>concertés lors de réunions dans chaque hameau</strong>, pour tenir compte des usages réels et des points sensibles.
                                    </p>
                                </div>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/radar-pedagogique.png"
                                        alt="Radar pédagogique - ralentissez"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* 1) Radars pédagogiques */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-primary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">1</span>
                                    <h4 className="text-xl font-bold text-gray-900">Radars pédagogiques</h4>
                                </div>
                                <p className="text-gray-600 mb-4 italic">
                                    Objectif : sensibiliser sans sanctionner, et faire baisser les vitesses là où c'est nécessaire.
                                </p>
                                <p className="text-gray-700 font-semibold mb-2">Ce que nous proposons :</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span>Installer des radars pédagogiques aux <strong>points stratégiques</strong> : entrées de village, abords d'équipements fréquentés, zones résidentielles.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span><strong>Mesurer et comparer</strong> les vitesses avant/après, pour objectiver l'efficacité.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* 2) Voies partagées sécurisées */}
                            <div className="mt-6 bg-white p-6 md:p-8 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-primary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">2</span>
                                    <h4 className="text-xl font-bold text-gray-900">Voies partagées sécurisées</h4>
                                </div>
                                <p className="text-gray-600 mb-4 italic">
                                    Objectif : rendre les déplacements à pied et à vélo plus sûrs, entre hameaux et centre-bourg.
                                </p>
                                <p className="text-gray-700 font-semibold mb-2">Ce que nous proposons :</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span>Créer des <strong>zones ou itinéraires "partagés"</strong> où chacun trouve sa place : signalisation claire, marquages lisibles, continuités piétonnes.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span>Favoriser une <strong>mobilité douce respectueuse et apaisée</strong>, plutôt qu'une route pensée uniquement pour la vitesse.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* 3) Aménagements aux entrées de village */}
                            <div className="mt-6 bg-white p-6 md:p-8 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-primary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">3</span>
                                    <h4 className="text-xl font-bold text-gray-900">Aménagements aux entrées de village</h4>
                                </div>
                                <p className="text-gray-600 mb-4 italic">
                                    Objectif : marquer visiblement l'entrée en zone habitée et inciter à lever le pied.
                                </p>
                                <p className="text-gray-700 font-semibold mb-2">Ce que nous proposons :</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span>Des <strong>aménagements lisibles</strong> : marquages au sol (zébras, bandes d'annonce) et signalétique renforcée.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span>Une logique de <strong>"porte d'entrée"</strong> : on comprend immédiatement qu'on entre dans un espace de vie.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Méthode */}
                            <div className="mt-6 bg-white p-6 md:p-8 rounded-2xl">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Méthode : concertation + transparence</h4>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span><strong>Réunions par hameau :</strong> localisation des points noirs, priorités, solutions adaptées.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span><strong>Étapes claires :</strong> diagnostic → choix des solutions → chiffrage → calendrier.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span><strong>Suivi public :</strong> information sur les décisions et l'avancement.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
