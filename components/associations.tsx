"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Heart, Star, Users, Calendar } from "lucide-react";

export function Associations() {
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
                            Associations : des engagements concrets, construits ensemble
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Rencontre du 30 janvier avec les associations de Dommartin
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

                            {/* Intro + Photos */}
                            <div className="mb-8">
                                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                    Le 30 janvier, nous avons organisé une rencontre dédiée avec les associations de Dommartin.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Ces échanges ont confirmé une chose essentielle : <strong>nos associations sont un pilier de la vie communale</strong>. Elles créent du lien social, animent la commune, accompagnent les jeunes et contribuent à son attractivité.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-8">
                                    Ils ont également mis en évidence une attente forte : davantage d'écoute dans la durée, des échanges réguliers, et un soutien plus concret dans les démarches. La démarche de dialogue que nous avons engagée a été saluée comme utile et attendue.
                                </p>

                                {/* Photos de la réunion */}
                                <div className="grid md:grid-cols-2 gap-4 mb-8">
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                                        <Image
                                            src="/reunion-associations-jan30-1.png"
                                            alt="Réunion avec les associations – vue 1"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                                        <Image
                                            src="/reunion-associations-jan30-2.png"
                                            alt="Réunion avec les associations – vue 2"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Priorités identifiées */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl mb-6">
                                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="bg-primary-light text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                                        <Star className="w-4 h-4" />
                                    </span>
                                    Les priorités identifiées avec les associations
                                </h4>
                                <p className="text-gray-600 mb-4">Au fil des échanges, plusieurs besoins concrets ont été exprimés :</p>
                                <ul className="space-y-4 text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span><strong>Instaurer un dialogue régulier</strong>, avec des temps d'échanges dédiés et des interlocuteurs identifiés.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span><strong>Mieux accompagner les démarches administratives</strong>, notamment pour le montage des dossiers et demandes de subventions.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span><strong>Renforcer l'appui des partenaires institutionnels</strong> (Communauté de communes, Département, Région) afin de soutenir et sécuriser les projets associatifs.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary-light rounded-full mt-2 shrink-0" />
                                        <span><strong>Trouver une solution au stockage du matériel</strong>, un sujet récurrent sur lequel nous travaillons déjà afin d'identifier une réponse adaptée et réaliste.</span>
                                    </li>
                                </ul>
                                <div className="mt-6 bg-primary-light/10 border-l-4 border-primary-light pl-6 py-3 rounded-r-xl">
                                    <p className="text-gray-800 font-medium italic">
                                        Nous voulons une municipalité présente, facilitatrice et partenaire des associations.
                                    </p>
                                </div>
                            </div>

                            {/* Fête des associations */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl mb-6">
                                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                                        <Calendar className="w-4 h-4" />
                                    </span>
                                    Une Fête des associations à la rentrée
                                </h4>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Nous proposons l'organisation, <strong>chaque année à la rentrée scolaire</strong>, d'une Fête des associations.
                                </p>
                                <p className="text-gray-600 mb-2 font-semibold">Objectifs :</p>
                                <ul className="space-y-2 text-gray-600 mb-0">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span>Faire découvrir les activités proposées à Dommartin et sur le territoire intercommunal</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span>Favoriser les rencontres et encourager les inscriptions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                                        <span>Valoriser l'engagement bénévole</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Mettre en lumière */}
                            <div className="bg-gradient-to-br from-primary-light to-primary p-6 md:p-8 rounded-2xl text-white">
                                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                                    <Heart className="w-5 h-5" />
                                    Mettre en lumière les réussites associatives
                                </h4>
                                <p className="opacity-90 mb-6 leading-relaxed">
                                    Cette journée se conclura par un moment de mise à l'honneur des réussites de nos associations picosées, de manière concrète et accessible à tous :
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                                        <span><strong>Présentation des résultats sportifs</strong> (clubs, tournois, équipes de jeunes, actions de formation…)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                                        <span><strong>Temps culturels</strong> (musique, chorale, démonstrations, scène ouverte selon les volontaires)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                                        <span><strong>Remerciements aux bénévoles et encadrants</strong>, qui font vivre nos associations au quotidien</span>
                                    </li>
                                </ul>
                                <div className="mt-6 pt-4 border-t border-white/20 text-center">
                                    <p className="font-heading font-bold text-lg">
                                        Reconnaître l'engagement et célébrer les réussites,
                                    </p>
                                    <p className="opacity-90 mt-1">
                                        c'est renforcer la fierté, l'envie de participer et la vitalité de notre commune.
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
