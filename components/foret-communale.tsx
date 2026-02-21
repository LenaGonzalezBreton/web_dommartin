"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Trees, Flame, Axe, MapPin, Users } from "lucide-react";

export function ForetCommunale() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="mt-10 border border-green-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Header cliquable */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-green-50 hover:bg-green-100 transition-colors text-left"
            >
                <div className="flex items-center gap-4">
                    <div className="bg-green-600/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                        <Trees className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                        <span className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-0.5">
                            Cadre de vie – Patrimoine naturel
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">
                            Forêt communale : vigilance, transparence et implication locale
                        </h3>
                    </div>
                </div>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-green-700 shrink-0 ml-4" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-green-700 shrink-0 ml-4" />
                )}
            </button>

            {/* Contenu */}
            {isOpen && (
                <div className="p-6 md:p-8 bg-white space-y-8">

                    {/* Chapeau introductif */}
                    <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                        <p className="text-gray-700 leading-relaxed">
                            À Dommartin-lès-Remiremont, la forêt est un patrimoine vivant : cadre de vie, ressource économique, réservoir de biodiversité, et tradition locale (affouage). Dans un contexte de changement climatique, notre responsabilité est de concilier production, protection et partage.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            La municipalité en place a signé avec l'ONF l'aménagement de la forêt communale pour 2027–2046. Nous prenons acte de cet engagement. Mais un document valable 20 ans ne peut pas dispenser la commune d'un pilotage politique clair, assumé et transparent.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4 font-medium">
                            Dans un contexte de changement climatique, de fragilisation des peuplements et d'incertitudes économiques sur le bois, la gestion forestière ne peut plus être routinière. Elle doit être anticipée, expliquée et débattue.
                        </p>
                    </div>

                    {/* Thématiques */}
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Une forêt qui change */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <div className="flex items-center gap-3 mb-3">
                                <Trees className="w-5 h-5 text-green-700 shrink-0" />
                                <h4 className="font-bold text-gray-900">Une forêt qui change : la commune doit s'adapter</h4>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                Sécheresses, crises sanitaires, évolution des usages : la forêt d'aujourd'hui n'est plus celle d'hier.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                {[
                                    "Suivi exigeant de l'aménagement",
                                    "Attention aux choix de coupes",
                                    "Transparence sur les résultats financiers",
                                    "Adaptation proactive des essences",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-gray-500 italic mt-3">
                                L'aménagement 2027–2046 est un cadre technique. La responsabilité politique, elle, reste locale.
                            </p>
                        </div>

                        {/* Incendies */}
                        <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                            <div className="flex items-center gap-3 mb-3">
                                <Flame className="w-5 h-5 text-orange-600 shrink-0" />
                                <h4 className="font-bold text-gray-900">Incendies : ne pas attendre pour agir</h4>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                Le risque incendie progresse. L'ignorer serait une faute.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                {[
                                    "Intégration du risque dans la gestion forestière",
                                    "Coordination avec les services de lutte contre les incendies",
                                    "Réactivité en cas d'alerte",
                                    "Prévention : accès adaptés, information, anticipation",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Affouage */}
                        <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                            <div className="flex items-center gap-3 mb-3">
                                <Axe className="w-5 h-5 text-amber-700 shrink-0" />
                                <h4 className="font-bold text-gray-900">Affouage : rouvrir le débat, avec sérieux</h4>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                L'affouage a disparu. Nous pensons que le sujet mérite d'être reposé — non par nostalgie, mais parce qu'il touche à la solidarité locale et à l'accès au bois.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                {[
                                    "Remise en place sécurisée et équitable",
                                    "Compatible avec une gestion durable",
                                    "Règles claires, organisation rigoureuse",
                                    "Construit collectivement, pas improvisé",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Usages partagés */}
                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                            <div className="flex items-center gap-3 mb-3">
                                <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                                <h4 className="font-bold text-gray-900">Une forêt partagée : organiser les usages</h4>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                Promeneurs, randonneurs, vététistes, chasseurs, cavaliers, cueilleurs… la forêt est un espace de vie.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                {[
                                    "Information plus claire sur les usages",
                                    "Signalement d'obstacles",
                                    "Indication des périodes sensibles",
                                    "Amélioration progressive des chemins",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-gray-500 italic mt-3">
                                La liberté d'accès doit aller de pair avec la responsabilité.
                            </p>
                        </div>
                    </div>

                    {/* Commission Forêt & Bois */}
                    <div className="bg-green-700 text-white rounded-xl p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="w-6 h-6 shrink-0" />
                            <h4 className="text-lg font-bold">Une Commission Forêt &amp; Bois ouverte : plus de démocratie locale</h4>
                        </div>
                        <p className="opacity-90 text-sm mb-4">
                            Nous proposerons la création d'une Commission Forêt &amp; Bois associant élus, habitants, usagers et professionnels. Son rôle sera clair :
                        </p>
                        <ul className="space-y-2 text-sm mb-6">
                            {[
                                "Suivre l'aménagement 2027–2046",
                                "Examiner les choix structurants",
                                "Travailler les règles d'affouage",
                                "Analyser les résultats financiers et environnementaux",
                                "Formuler des propositions publiques",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0 opacity-80" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm opacity-80 italic border-t border-white/20 pt-4">
                            Parce qu'un vote en conseil municipal ne suffit pas. La forêt mérite un débat régulier, transparent et partagé.
                        </p>
                    </div>

                    {/* Engagement final */}
                    <div className="border-l-4 border-green-600 pl-6 py-2">
                        <p className="font-bold text-gray-900 mb-1">Notre engagement</p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Nous voulons une commune plus vigilante, plus transparente et plus impliquée dans la gestion de sa forêt.
                            La forêt appartient à tous. Sa gestion doit être pleinement assumée devant les habitants.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
