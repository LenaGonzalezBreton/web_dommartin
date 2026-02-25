"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Zap, Lightbulb, Droplets, Sun } from "lucide-react";

export function TransitionEnvironnementale() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="mt-10 border border-green-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-colors text-left"
            >
                <div className="flex items-center gap-4">
                    <div className="bg-green-600/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                        <span className="text-2xl">🌱</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold text-green-700 uppercase tracking-wider mb-1">
                            Plan 2026–2030
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 font-heading leading-snug">
                            Transition environnementale : un plan concret pour l'eau et l'énergie
                        </h3>
                    </div>
                </div>
                <div className="shrink-0 text-green-700">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
            </button>

            {/* Content */}
            {isOpen && (
                <div className="p-6 md:p-8 bg-white space-y-8">
                    {/* Intro */}
                    <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            La transition environnementale ne peut pas se limiter à des intentions.
                            Nous proposons pour Dommartin un <strong>Plan Sobriété Énergie–Eau–Éclairage public 2026–2030</strong>,
                            structuré, progressif et financièrement responsable.
                        </p>
                        <p className="font-semibold text-green-800 mb-2">Objectifs :</p>
                        <ul className="space-y-1.5 text-gray-700">
                            {[
                                "Réduire durablement les charges communales",
                                "Moderniser nos équipements",
                                "Préserver notre environnement",
                                "Maintenir un haut niveau de sécurité",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Volet 1 – Sobriété énergétique */}
                    <div className="rounded-xl border border-yellow-100 overflow-hidden">
                        <div className="flex items-center gap-3 bg-yellow-50 px-5 py-3 border-b border-yellow-100">
                            <Zap className="w-5 h-5 text-yellow-600 shrink-0" />
                            <h4 className="font-bold text-gray-900">
                                Volet 1 – Sobriété énergétique des bâtiments
                            </h4>
                        </div>
                        <div className="px-5 py-4">
                            <p className="text-sm text-gray-600 mb-3">Dès 2026 :</p>
                            <ul className="space-y-2 text-gray-700">
                                {[
                                    "Audit énergétique des bâtiments communaux",
                                    "Plan d'actions priorisé",
                                    "Mesures rapides (réglages, LED, petits travaux)",
                                    "Travaux structurants ciblés (isolation, chauffage, ventilation…)",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Volet 2 – Éclairage public */}
                    <div className="rounded-xl border border-blue-100 overflow-hidden">
                        <div className="flex items-center gap-3 bg-blue-50 px-5 py-3 border-b border-blue-100">
                            <Lightbulb className="w-5 h-5 text-blue-600 shrink-0" />
                            <h4 className="font-bold text-gray-900">
                                Volet 2 – Modernisation intelligente de l'éclairage public
                            </h4>
                        </div>
                        <div className="px-5 py-4 space-y-3">
                            <p className="text-sm text-gray-600 italic">En lien avec le SDEV :</p>
                            <ul className="space-y-2 text-gray-700">
                                {[
                                    "Remplacement progressif des anciens luminaires par des LED plus sobres",
                                    "Éclairage recentré sur les cheminements utiles",
                                    "Un abaissement nocturne raisonné lorsque la fréquentation est faible",
                                    "Installation possible de détecteurs de présence dans certains secteurs",
                                    "Renforcement des zones stratégiques : passages piétons, école, carrefours",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm font-medium text-blue-700 bg-blue-50 rounded-lg px-4 py-2">
                                Objectif : réduire la consommation, limiter la pollution lumineuse et maintenir la sécurité.
                            </p>
                        </div>
                    </div>

                    {/* Volet 3 – Eau */}
                    <div className="rounded-xl border border-cyan-100 overflow-hidden">
                        <div className="flex items-center gap-3 bg-cyan-50 px-5 py-3 border-b border-cyan-100">
                            <Droplets className="w-5 h-5 text-cyan-600 shrink-0" />
                            <h4 className="font-bold text-gray-900">
                                Volet 3 – Eau : sobriété et résilience
                            </h4>
                        </div>
                        <div className="px-5 py-4 space-y-3">
                            <p className="text-sm text-gray-600 italic">
                                En cohérence avec la Communauté de communes des Portes des Vosges Méridionales :
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                {[
                                    "Suivi de la qualité et du prix de l'eau",
                                    "Sobriété et suivi précis des consommations dans les bâtiments communaux",
                                    "Étude de récupération des eaux pluviales",
                                    "Travail partenarial sur la réduction des fuites et la sécurisation du réseau",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Volet 4 – Production d'énergie */}
                    <div className="rounded-xl border border-orange-100 overflow-hidden">
                        <div className="flex items-center gap-3 bg-orange-50 px-5 py-3 border-b border-orange-100">
                            <Sun className="w-5 h-5 text-orange-600 shrink-0" />
                            <h4 className="font-bold text-gray-900">
                                Volet 4 – Produire une part de notre énergie
                            </h4>
                        </div>
                        <div className="px-5 py-4 space-y-5">
                            <p className="text-gray-700">
                                En complément de la sobriété, nous souhaitons étudier les possibilités de production d'énergie locale.
                            </p>

                            {/* Photovoltaïque */}
                            <div>
                                <h5 className="flex items-center gap-2 font-semibold text-gray-900 mb-2">
                                    <span>🔋</span>
                                    Photovoltaïque en toiture
                                </h5>
                                <ul className="space-y-2 text-gray-700 pl-6">
                                    {[
                                        "Autoconsommation pour les bâtiments communaux",
                                        "Réduction des dépenses énergétiques",
                                        "Mobilisation des aides régionales et nationales",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hydroélectrique */}
                            <div>
                                <h5 className="flex items-center gap-2 font-semibold text-gray-900 mb-2">
                                    <span>💧</span>
                                    Réflexion sur le potentiel hydroélectrique
                                </h5>
                                <p className="text-gray-700 mb-3">
                                    Nous engagerons une étude d'opportunité sur la faisabilité d'une production d'énergie par
                                    hydroélectricité, si le potentiel hydraulique local le permet.
                                </p>
                                <p className="text-sm text-gray-600 mb-2">Cette réflexion devra :</p>
                                <ul className="space-y-2 text-gray-700 pl-6">
                                    {[
                                        "Évaluer la faisabilité technique et environnementale",
                                        "Mesurer l'équilibre financier du projet (partenariat)",
                                        "S'inscrire dans le respect du cadre réglementaire",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm italic text-gray-600 mt-3">
                                    L'objectif n'est pas de promettre, mais d'examiner sérieusement les possibilités offertes par notre territoire.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Financement */}
                    <div className="bg-gradient-to-br from-green-700 to-emerald-800 rounded-xl p-6 text-white">
                        <h4 className="flex items-center gap-2 font-bold text-lg mb-4">
                            <span>💰</span>
                            Une transition financée et maîtrisée
                        </h4>
                        <p className="font-semibold text-green-100 mb-3">Mobilisation des aides :</p>
                        <ul className="space-y-2">
                            {[
                                "État (DETR, DSIL, Fonds vert)",
                                "Région Grand Est",
                                "CEE",
                                "Agence de l'eau",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-300 rounded-full shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-green-100 text-sm font-medium">
                            Participation communale encadrée et gestion budgétaire responsable.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
