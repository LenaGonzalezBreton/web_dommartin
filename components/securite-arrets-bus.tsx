"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function SecuriteArretsBus() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="bg-gradient-to-br from-blue-50 to-primary/5 rounded-3xl border border-blue-200 overflow-hidden shadow-lg">
                {/* Header - Clickable */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full p-6 md:p-10 pb-6 flex items-center justify-between gap-4 text-left hover:bg-blue-50/80 transition-colors"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-primary text-white font-bold px-3 py-1 rounded-full text-xs">
                                NOUVEAU
                            </span>
                            <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-xs">
                                Sécurité
                            </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading">
                            🚌 Sécurité des arrêts de bus
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Mieux voir, mieux protéger, mieux organiser.
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

                            <p className="text-xl text-gray-700 font-medium mb-6 leading-relaxed">
                                À Dommartin-lès-Remiremont, la sécurité du quotidien commence par des choses concrètes.
                            </p>

                            <div className="space-y-6 text-gray-700 leading-relaxed text-[17px]">
                                <p>
                                    En automne et en hiver, les départs et retours scolaires se font souvent dans la pénombre.
                                    Mais le risque ne vient pas seulement du manque de lumière.
                                </p>

                                <p>Sur certains points d&apos;arrêt, il y a aussi :</p>
                                <ul className="space-y-2 ml-2">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span>des bords de route étroits ou dangereux,</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span>des zones peu ou pas aménagées (pas d&apos;abri, pas d&apos;espace d&apos;attente sécurisé),</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span>et parfois une vitesse excessive des véhicules à proximité.</span>
                                    </li>
                                </ul>

                                <div className="bg-white/80 p-6 rounded-2xl border-l-4 border-red-400 shadow-sm">
                                    <p className="font-medium text-gray-800">
                                        Un arrêt mal situé ou mal protégé, c&apos;est un enfant exposé.<br />
                                        C&apos;est une inquiétude pour les familles.<br />
                                        C&apos;est un danger supplémentaire sur la chaussée.
                                    </p>
                                </div>

                                <p className="text-primary font-bold text-lg">
                                    👉 Éclairage, aménagement, visibilité et vitesse : la sécurité des arrêts de bus doit être pensée globalement.
                                </p>
                            </div>

                            {/* Photos */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                                    <Image
                                        src="/arret-bus-1.png"
                                        alt="Arrêt de bus à Dommartin - vue de jour"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white font-medium text-sm">Un arrêt de bus en journée</p>
                                    </div>
                                </div>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                                    <Image
                                        src="/arret-bus-2.png"
                                        alt="Arrêt de bus à Dommartin - éclairage insuffisant"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white font-medium text-sm">Éclairage insuffisant en soirée</p>
                                    </div>
                                </div>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                                    <Image
                                        src="/arret-bus-3.jpg"
                                        alt="Arrêt de bus à Dommartin - conditions hivernales"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white font-medium text-sm">Un point d&apos;arrêt en bord de route</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section Éclairage */}
                            <div className="bg-white/80 p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm mb-6">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">
                                    💡 Un éclairage plus intelligent et plus sûr
                                </h4>
                                <p className="text-gray-700 mb-4">
                                    Nous voulons engager un travail spécifique sur l&apos;éclairage public, en partenariat avec le <strong className="text-primary">Syndicat Départemental d&apos;Électricité des Vosges</strong>, afin d&apos;étudier des solutions modernes et adaptées :
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                                        <span className="text-gray-700">Renforcement ciblé des points lumineux aux arrêts sensibles</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                                        <span className="text-gray-700">Mise en place d&apos;horloges astronomiques connectées, ajustant automatiquement l&apos;éclairage selon les saisons</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                                        <span className="text-gray-700">Installation de drivers LED pilotables, permettant de moduler l&apos;intensité lumineuse</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                                        <span className="text-gray-700">Pilotage via réseau radio ou wifi pour adapter l&apos;éclairage aux horaires scolaires</span>
                                    </li>
                                </ul>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="bg-green-50 p-3 rounded-xl border border-green-200 flex-1">
                                        <p className="text-green-800 font-medium text-sm">✔️ Améliorer la visibilité et la sécurité</p>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded-xl border border-green-200 flex-1">
                                        <p className="text-green-800 font-medium text-sm">✔️ Maîtriser la consommation énergétique</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section Aménagements */}
                            <div className="bg-white/80 p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm mb-6">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">
                                    🏗️ Des aménagements adaptés et intégrés
                                </h4>
                                <p className="text-gray-700 mb-4">
                                    La sécurité ne repose pas uniquement sur la lumière.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Il faudra aussi réfléchir à l&apos;équipement des points d&apos;arrêt, comme c&apos;est déjà le cas par exemple à celui de « la Gare » :
                                </p>
                                <ul className="space-y-3 mb-4">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span className="text-gray-700">abris sécurisants,</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span className="text-gray-700">protection contre les intempéries,</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span className="text-gray-700">implantation adaptée par rapport à la chaussée,</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                                        <span className="text-gray-700">intégration harmonieuse dans le paysage.</span>
                                    </li>
                                </ul>
                                <p className="text-gray-600 italic">
                                    Chaque arrêt a sa configuration propre : visibilité, circulation, environnement immédiat.
                                </p>
                            </div>

                            {/* Section Mobilité */}
                            <div className="bg-gradient-to-br from-primary to-primary-dark p-6 md:p-8 rounded-2xl text-white shadow-lg">
                                <h4 className="text-xl font-bold mb-4">
                                    🚶‍♀️ Une réflexion globale sur la mobilité
                                </h4>
                                <p className="mb-4 leading-relaxed">
                                    La mobilité est un enjeu intergénérationnel et un levier direct de qualité de vie à Dommartin.
                                    Elle conditionne l&apos;accès à l&apos;école et aux activités pour les enfants, mais aussi l&apos;autonomie des aînés, l&apos;accès aux services, la participation à la vie associative et aux sorties organisées.
                                </p>
                                <p className="mb-4 leading-relaxed">
                                    Quand les solutions de déplacement sont sûres et adaptées, ce sont des familles rassurées, des seniors moins isolés, et un territoire plus dynamique.
                                </p>
                                <p className="mb-6 leading-relaxed">
                                    C&apos;est pourquoi nous voulons penser les arrêts, les points de ramassage et l&apos;organisation des déplacements dans une logique globale, au service de tous les habitants.
                                </p>
                                <div className="border-t border-white/20 pt-6 text-center">
                                    <p className="text-lg font-bold">
                                        Sécuriser les arrêts de bus, c&apos;est protéger nos enfants.
                                    </p>
                                    <p className="opacity-90 mt-2 font-medium">
                                        Penser la mobilité, c&apos;est améliorer la qualité de vie de tous les habitants de Dommartin-lès-Remiremont.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
