import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, ArrowRight, Target, Users, Lightbulb } from "lucide-react";
import { Metadata } from "next";
import { VideoHero } from "@/components/video-hero";

export const metadata: Metadata = {
    title: "La Démarche Participative | Dommartin avec vous",
    description: "Consultez le diagnostic partagé et les comptes-rendus des ateliers citoyens. Construisons ensemble l'avenir de Dommartin-lès-Remiremont.",
};

export default function DemarchePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Video Component */}
            <VideoHero
                videoSrc="/videos/Dommartin%20avec%20vous%2088200.MP4"
                title={
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in shadow-sm">
                        Une démarche <span className="text-accent">citoyenne</span> et transparente
                    </h1>
                }
                description="Retrouvez ici les comptes-rendus de nos ateliers participatifs. C'est ensemble, en croisant nos regards, que nous construisons le projet de demain."
            />

            {/* Compte-rendu Réunion 2 */}
            <section className="py-16 bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <Badge className="bg-primary text-white hover:bg-primary px-3 py-1 text-sm">Réunion #2</Badge>
                            <span className="text-gray-500 font-medium">8 Janvier 2026</span>
                        </div>

                        <div className="prose max-w-none">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Retour sur la réunion du 8 Janvier</h2>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
                                <p className="text-xl text-primary font-medium italic">
                                    "Une dynamique forte : une participation active et envieuse de construire ensemble un projet municipal citoyen."
                                </p>
                            </div>

                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <p>
                                    La réunion du jeudi 8 a confirmé une dynamique forte : une participation active et nombreuse, malgré les intempéries, et une envie partagée de construire ensemble un projet municipal citoyen, non partisan et participatif. Les échanges ont permis de clarifier la feuille de route, de mieux faire ressortir les attentes prioritaires des picosés, et d’avancer concrètement vers un programme qui sera présenté lors de la prochaine réunion du 12 février 2026.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-accent" />
                                    Une intelligence collective en action
                                </h3>
                                <p>
                                    Belle réunion ce jeudi soir pour construire un projet municipal participatif qui rassemble et propose de nouvelles méthodes de travail en intelligence collective. Il se dégage un besoin marqué de dialogue, de s’écouter, et d’être davantage associé à la gestion communale, y compris dans les sujets qui se jouent à l’échelle de l’intercommunalité.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5 text-accent" />
                                    Des attentes claires
                                </h3>
                                <p>
                                    Les participants ("picosés") ont poursuivi le travail engagé lors de la première rencontre : identifier, hiérarchiser et préciser les attentes, puis les traduire en actions. Les échanges ont confirmé des demandes fortes : davantage de dialogue, une information plus claire, une transparence assumée, et une commune qui s’organise avec une méthode plus collective, plus proche du quotidien, et plus efficace dans la mise en œuvre.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-accent" />
                                    Le collectif grandit
                                </h3>
                                <p>
                                    La participation, dynamique et constructive, montre que beaucoup souhaitent être acteurs d’une démarche citoyenne : proposer, débattre, améliorer, et co-construire un projet réaliste. La feuille de route se clarifie et l’organisation de la liste se structure. Des picosés s’engagent dès maintenant pour faire vivre le programme, et d’autres se proposent pour suivre des sujets, apporter leurs compétences, et participer aux commissions consultatives.
                                </p>
                            </div>
                        </div>
                    </div>
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
            <section className="py-16 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Prochaine Échéance</h2>

                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8 transform hover:scale-105 transition-transform duration-300">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                                <div className="text-center md:text-right">
                                    <p className="text-lg opacity-90">Rendez-vous le</p>
                                    <p className="text-3xl font-bold text-accent">Jeudi 12 Février 2026</p>
                                </div>
                                <div className="hidden md:block h-12 w-px bg-white/30"></div>
                                <div className="text-center md:text-left">
                                    <p className="text-3xl font-bold">20h00</p>
                                    <p className="text-lg opacity-90">Espace Culturel</p>
                                </div>
                            </div>

                            <p className="text-lg leading-relaxed opacity-90 mb-6">
                                Nous y présenterons un programme construit à partir de vos attentes et de vos propositions, puis travaillé au regard des réalités réglementaires et des contraintes budgétaires, afin de proposer un projet sérieux, applicable et financé.
                            </p>

                            <Badge variant="secondary" className="bg-white text-primary hover:bg-white/90 text-sm py-1 px-4">
                                Présentation du programme & des candidats
                            </Badge>
                        </div>

                        <div className="space-y-4">
                            <p className="text-lg opacity-90">
                                D’ici le 12 février, on continue d’échanger et de recueillir vos idées. Si vous avez envie de faire avancer Dommartin, votre énergie est la bienvenue.
                            </p>
                            <a href="mailto:dommartinavecvous@proton.me" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-bold transition-colors">
                                <span className="underline decoration-2 underline-offset-4">dommartinavecvous@proton.me</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
