"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function HalleMarche() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl border border-accent/20 overflow-hidden">
                {/* Header - Clickable */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full p-6 md:p-10 pb-6 flex items-center justify-between gap-4 text-left hover:bg-accent/5 transition-colors"
                >
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading">
                            Une halle pour dynamiser Dommartin-lès-Remiremont
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Un équipement simple, durable et utile pour animer la commune toute l'année.
                        </p>
                    </div>
                    <ChevronDown
                        className={`w-6 h-6 text-accent shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
                                        Nous voulons créer une <strong>halle</strong> : un équipement simple, durable et utile pour animer la commune, rassembler les habitants et soutenir l'économie locale, tout au long de l'année.
                                    </p>
                                </div>
                                <div>
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                        <Image
                                            src="/halle-marche.png"
                                            alt="Exemple de halle de marché"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2 text-center italic">
                                        Source : Mairie de Farges Halle
                                    </p>
                                </div>
                            </div>

                            {/* Pourquoi une halle */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Pourquoi une halle ?</h4>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span><strong>Un lieu couvert :</strong> marchés et événements maintenus même en cas de pluie ou de forte chaleur.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span><strong>Un point de rencontre régulier :</strong> plus de convivialité et de lien social, pour tous.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span><strong>Un levier économique :</strong> une opportunité pour les producteurs, artisans, commerçants et associations, avec plus d'attractivité et de fréquentation.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span><strong>Une vitrine du "local" :</strong> circuits courts, produits du territoire, savoir-faire et initiatives du coin.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Ce qu'on pourra y faire */}
                            <div className="mt-6 bg-white p-6 md:p-8 rounded-2xl">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Ce qu'on pourra y faire</h4>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span><strong>Animations et rendez-vous communaux :</strong> fêtes de saison, petites scènes/concerts, moments conviviaux.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span><strong>Événements associatifs :</strong> ateliers, expositions, bourse aux plantes, vide-greniers, rencontres thématiques.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span><strong>Temps forts intergénérationnels :</strong> repas partagés, moments familiaux, actions favorisant le lien social.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span>Et, quand c'est pertinent, <strong>accueil ponctuel de producteurs/artisans</strong> (format souple, selon la demande et la dynamique locale).</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Méthode */}
                            <div className="mt-6 bg-white p-6 md:p-8 rounded-2xl">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Une méthode sérieuse : du besoin au projet</h4>
                                <p className="text-gray-600 mb-4">Nous avancerons étape par étape, avec une logique de faisabilité :</p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span><strong>Étude d'implantation</strong> (où ?)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span><strong>Définition des usages</strong> (pour quoi ? avec qui ?)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span><strong>Analyse des coûts et financements</strong>, recherche des subventions (les dotations d'investissement de l'État DETR / DSIL)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span><strong>Calendrier</strong>, puis lancement d'un événement pilote pour valider le fonctionnement.</span>
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
