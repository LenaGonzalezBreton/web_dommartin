import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, ArrowRight, Target, Users, Lightbulb } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "La Démarche Participative | Dommartin avec vous",
    description: "Consultez le diagnostic partagé et les comptes-rendus des ateliers citoyens. Construisons ensemble l'avenir de Dommartin-lès-Remiremont.",
};

export default function DemarchePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
                        Une démarche <span className="text-accent">citoyenne</span> et transparente
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-slide-up">
                        Retrouvez ici les comptes-rendus de nos ateliers participatifs. C'est ensemble, en croisant nos regards, que nous construisons le projet de demain.
                    </p>
                </div>
            </section>

            {/* Compte-rendu Réunion 1 */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">

                        <div className="flex items-center gap-4 mb-8">
                            <Badge className="bg-primary text-white hover:bg-primary px-3 py-1 text-sm">Réunion #1</Badge>
                            <span className="text-gray-500 font-medium">Décembre 2025</span>
                        </div>

                        <div className="prose max-w-none mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Diagnostic Partagé : les forces et les faiblesses de la commune</h2>
                            <p className="text-gray-700">
                                Lors de notre première grande réunion publique, <strong>41 habitants</strong> de tous les quartiers (Centre, Gare, Franould, Poirie, etc.) ont travaillé ensemble.
                                Voici la synthèse de vos échanges sur l'état des lieux de notre commune.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {/* Atouts */}
                            <Card className="border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-accent-foreground">
                                        <CheckCircle className="w-6 h-6 text-accent" />
                                        Les Atouts
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {[
                                            "Services et équipements de santé (maison médicale, pharmacie...)",
                                            "Proximité de la ville centre",
                                            "Environnement, nature, cadre de vie, forêt",
                                            "Écoles",
                                            "Accessibilité routière, ferroviaire et voie verte",
                                            "Espace culturel et tissu associatif",
                                            "Habitat senior (Blés d’or) et mixité de l'habitat"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-700">
                                                <span className="bg-accent/10 text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Faiblesses */}
                            <Card className="border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-primary">
                                        <AlertTriangle className="w-6 h-6" />
                                        Les Faiblesses
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {[
                                            "Manque de commerces",
                                            "Insuffisance d’infrastructures pour les jeunes",
                                            "Insuffisance d’espaces de rencontres",
                                            "Sécurité (écoles) et manque d'espaces cyclistes/piétons",
                                            "Manque d’entreprises",
                                            "Village dortoir",
                                            "Topographie (habitat dispersé, liens difficiles entre hameaux)",
                                            "Sous-utilisation de l’espace culturel"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-700">
                                                <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Pistes de travail */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-inner">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <Target className="text-accent w-7 h-7" />
                                6 Priorités pour l'avenir
                            </h3>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-primary mb-2 flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Économie</div>
                                    <p className="text-sm text-gray-600">Soutenir la vie économique locale et favoriser l’implantation de commerces.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-primary mb-2 flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Jeunesse & Culture</div>
                                    <p className="text-sm text-gray-600">Espaces pour les jeunes, développement de l'Espace culturel, équipements sportifs, café solidaire.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-primary mb-2 flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Mobilités</div>
                                    <p className="text-sm text-gray-600">Circulations sécurisées pour tous (piétons, vélos) reliant les hameaux au centre.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-primary mb-2 flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Démocratie</div>
                                    <p className="text-sm text-gray-600">Plus de communication directe : réunions publiques régulières, rencontres par quartier.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-primary mb-2 flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Eau</div>
                                    <p className="text-sm text-gray-600">Sécuriser la ressource en eau et sa qualité.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-primary mb-2 flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Énergie</div>
                                    <p className="text-sm text-gray-600">Ambition forte sur la production d’énergie renouvelable (réseau de chaleur, solaire...).</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Next Steps Banner */}
            <section className="py-12 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-white/10 p-3 rounded-full">
                                <Users className="w-8 h-8 text-accent" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-xl font-bold">Prochaine étape</h4>
                                <p className="text-primary-foreground/80">Transformer ces idées en plan d'action</p>
                            </div>
                        </div>
                        <div className="hidden md:block h-12 w-px bg-white/20"></div>
                        <div className="text-left">
                            <p className="text-lg font-semibold">Venez participer le Jeudi 8 Janvier</p>
                            <p className="text-sm text-accent font-bold">20h30 - Espace Culturel</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
