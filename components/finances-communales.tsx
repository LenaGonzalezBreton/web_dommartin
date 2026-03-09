"use client";

import Image from "next/image";

export function FinancesCommunales() {
    return (
        <div className="mt-10 space-y-10">
            {/* Introduction avec image */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-primary-dark/20 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">💶</span>
                    Finances de Dommartin : rigueur, transparence et vision à long terme
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    La gestion des finances communales n&apos;est pas qu&apos;une question de technique : c&apos;est une question de responsabilité envers chaque Picosé.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                    Depuis 2025, certaines compétences (comme l&apos;eau et l&apos;assainissement) ont été transférées à la Communauté de communes de la Porte des Vosges Méridionales (CCPVM). Cela signifie qu&apos;une partie des décisions financières qui impactent notre quotidien se décide désormais aussi à l&apos;échelle intercommunale.
                </p>
                <div className="rounded-xl overflow-hidden shadow-md">
                    <Image
                        src="/finances-communales.jpg"
                        alt="Illustration gestion rigoureuse : balance entre mairie et communauté de communes"
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Engagement pour l'avenir */}
            <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="bg-primary-dark text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">🎯</span>
                    Notre engagement pour l&apos;avenir
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Nous souhaitons mettre en place une gestion particulièrement rigoureuse et transparente, fondée sur une méthode claire.
                </p>
            </div>

            {/* Indicateurs de suivi */}
            <div className="bg-gradient-to-br from-blue-50 to-primary-dark/5 p-6 md:p-8 rounded-2xl border border-primary-dark/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-accent font-bold text-lg">✅</span>
                    Des indicateurs de suivi simples et accessibles
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Pour que chacun puisse comprendre et suivre l&apos;évolution des finances, nous voulons publier régulièrement des indicateurs lisibles, par exemple :
                </p>
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary-dark rounded-full shrink-0" />
                        <span className="text-gray-700">Évolution des dépenses de fonctionnement</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary-dark rounded-full shrink-0" />
                        <span className="text-gray-700">Niveau d&apos;investissement</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary-dark rounded-full shrink-0" />
                        <span className="text-gray-700">Encours de dette et capacité de désendettement</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary-dark rounded-full shrink-0" />
                        <span className="text-gray-700">Part des projets financée par des aides</span>
                    </div>
                </div>
                <p className="text-gray-700 font-medium italic border-l-4 border-primary-dark pl-4">
                    L&apos;objectif : permettre à chaque Picosé de suivre le budget communal, mais aussi de mieux comprendre le budget intercommunal quand il concerne directement Dommartin.
                </p>
            </div>

            {/* Recherche de subventions */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-primary-dark/20 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-accent font-bold text-lg">✅</span>
                    Une recherche systématique de subventions
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Tout dossier d&apos;investissement devra s&apos;accompagner d&apos;une recherche permanente et organisée de financements extérieurs (État, Région, Département, Europe, agences…).
                </p>
                <p className="text-gray-700 font-semibold mb-4">Le but est clair :</p>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary-dark rounded-full mt-2 shrink-0" />
                        <span>Préserver la capacité d&apos;investissement</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary-dark rounded-full mt-2 shrink-0" />
                        <span>Limiter le recours à l&apos;emprunt</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary-dark rounded-full mt-2 shrink-0" />
                        <span>Éviter de faire peser inutilement le financement sur les habitants</span>
                    </li>
                </ul>
            </div>

            {/* Plan pluriannuel */}
            <div className="bg-gradient-to-br from-blue-50 to-primary-dark/5 p-6 md:p-8 rounded-2xl border border-primary-dark/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-accent font-bold text-lg">✅</span>
                    Un plan pluriannuel d&apos;investissement
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Les projets ne doivent pas se décider &quot;au coup par coup&quot;. Nous voulons un plan de programmation pluriannuel, avec :
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                    <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary-dark rounded-full mt-2 shrink-0" />
                        <span>Des priorités clairement annoncées</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary-dark rounded-full mt-2 shrink-0" />
                        <span>Un calendrier réaliste</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary-dark rounded-full mt-2 shrink-0" />
                        <span>Des projets préparés suffisamment en amont pour sécuriser les subventions</span>
                    </li>
                </ul>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-br from-primary-dark to-primary p-6 md:p-8 rounded-2xl text-white shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-xl">🤝</span>
                    Informer pour associer
                </h3>
                <p className="leading-relaxed mb-4 opacity-95">
                    La transparence budgétaire n&apos;est pas un slogan : c&apos;est un engagement. Expliquer, publier, comparer, anticiper : pour que chacun puisse suivre, comprendre, et juger sur pièces.
                </p>
                <p className="font-semibold text-lg">
                    En combinant programmation pluriannuelle, recherche de subventions et suivi rigoureux des dépenses, notre objectif est de maintenir une fiscalité stable pour les Picosés.
                </p>
            </div>
        </div>
    );
}
