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
                videoSrc="/videos/dommartin-video.mp4"
                className="h-[80vh] min-h-[700px]"
                title={
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in shadow-sm">
                        Une démarche <span className="text-accent">citoyenne</span> et transparente
                    </h1>
                }
                description="Retrouvez ici les comptes-rendus de nos ateliers participatifs. C'est ensemble, en croisant nos regards, que nous construisons le projet de demain."
            />

            {/* SECTION 1: CHARTE D'ENGAGEMENT (Imported) */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Charte d’Engagement</h2>
                            <p className="text-gray-600 text-lg">
                                L'équipe municipale de « <strong className="text-primary">Dommartin avec Vous</strong> » s’engage, pour toute la durée du mandat,
                                à agir dans l’intérêt général, à décider de manière collégiale et à associer les habitants aux décisions importantes.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 mb-12">
                            {/* Engagement 1 */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border-l-4 border-primary hover:bg-gray-100 transition-colors">
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Transparence</h3>
                                        <p className="text-gray-600">Sur nos décisions et nos actions au quotidien.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Engagement 2 */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border-l-4 border-primary hover:bg-gray-100 transition-colors">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="w-6 h-6 text-primary shrink-0 mt-1" /> {/* Using AlertTriangle as Scale replacement if Scale not imported, but Scale is better if available. Checking imports... */}
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Vote éclairé</h3>
                                        <p className="text-gray-600">Si les informations sont insuffisantes, la décision est reportée.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Engagement 3 */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border-l-4 border-primary hover:bg-gray-100 transition-colors">
                                <div className="flex items-start gap-4">
                                    <Users className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Consultation citoyenne</h3>
                                        <p className="text-gray-600">Systématique pour les investissements structurants.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Engagement 4 */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border-l-4 border-primary hover:bg-gray-100 transition-colors">
                                <div className="flex items-start gap-4">
                                    <Target className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Respect des principes</h3>
                                        <p className="text-gray-600">Conformité à la Charte de l’élu local.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 text-center border border-gray-200 dashed-border relative overflow-hidden">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 font-handwriting">
                                “ Signée par l'équipe de Dommartin avec vous ”
                            </h3>
                            <div className="mt-6">
                                <a
                                    href="/charte.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border border-primary/20 rounded-full font-bold shadow-sm hover:bg-primary hover:text-white transition-all"
                                >
                                    Télécharger la Charte (PDF)
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: COMPTE-RENDU RÉUNION PUBLIQUE (12 Février) */}
            <section id="reunion-publique-fevrier" className="py-16 bg-gray-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/reunion-12-fevrier.jpg')] opacity-40 bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-4 mb-8 justify-center flex-wrap">
                            <Badge className="bg-white/20 text-white hover:bg-white/30 px-3 py-1 text-sm">Passé</Badge>
                            <Badge className="bg-accent text-white hover:bg-accent px-3 py-1 text-sm">Réunion Publique</Badge>
                            <span className="text-white/80 font-medium">12 Février 2026</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Réunion Publique du 12 Février</h2>

                        <div className="space-y-8">
                            {/* Intro / Thank you */}
                            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20">
                                <h3 className="text-2xl font-bold text-accent mb-4">MERCI !</h3>
                                <p className="text-lg leading-relaxed mb-4">
                                    Hier soir, nous avons tenu notre réunion publique pour présenter notre programme et l’ensemble des colistiers.
                                    Cette soirée a été une réussite : vous, habitantes et habitants de Dommartin êtes venus nombreux, et nous vous en remercions chaleureusement.
                                </p>
                                <p className="leading-relaxed opacity-90">
                                    Votre présence témoigne de votre intérêt pour la vie communale. Elle motive encore davantage notre équipe à poursuivre dans cette direction : l’écoute, l’échange et la restitution.
                                </p>
                            </div>

                            {/*Permanences */}
                            <div className="bg-accent/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-accent/30">
                                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    Permanences à venir
                                </h4>
                                <p className="mb-4 opacity-90">Pour continuer à construire avec vous, nous mettons en place des permanences :</p>
                                <div className="grid sm:grid-cols-4 gap-3 mb-4">
                                    <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                                        <span className="block text-lg font-bold">Samedi 21</span>
                                        <span className="text-sm opacity-80">février</span>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                                        <span className="block text-lg font-bold">Samedi 28</span>
                                        <span className="text-sm opacity-80">février</span>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                                        <span className="block text-lg font-bold">Samedi 7</span>
                                        <span className="text-sm opacity-80">mars</span>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                                        <span className="block text-lg font-bold">Mardi 10</span>
                                        <span className="text-sm opacity-80">mars</span>
                                        <span className="block text-xs opacity-70 mt-1">18h - 21h</span>
                                    </div>
                                </div>
                                <p className="font-semibold text-accent">Maison des Associations — Samedis 10h-12h / Mardi 10 mars 18h-21h.</p>
                                <p className="mt-2 text-sm opacity-80">Chacun pourra venir à notre rencontre pour échanger, poser ses questions et faire des suggestions.</p>
                            </div>

                            {/* Visites de terrain */}
                            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20">
                                <p className="leading-relaxed mb-4">
                                    Parallèlement, nous organiserons des <strong>visites de terrain</strong> afin d’identifier, sur place et avec les habitants qui le souhaitent, les « points noirs » et les difficultés du quotidien : par exemple l’accès piéton à l’école, les arrêts de bus, la place des AFN, etc.
                                </p>
                                <p className="text-accent font-medium text-center text-lg">
                                    Nous vous informerons au fur et à mesure des points de rendez-vous et des prochaines dates.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 mt-8 text-center">
                            <a href="mailto:dommartinavecvous@proton.me" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-bold transition-colors">
                                <span className="underline decoration-2 underline-offset-4">dommartinavecvous@proton.me</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Compte-rendu Rencontre Associations (Jan 30) */}
            <section id="associations" className="py-16 bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-3 py-1 text-sm">Passé</Badge>
                            <Badge className="bg-accent text-white hover:bg-accent px-3 py-1 text-sm">Associations</Badge>
                            <span className="text-gray-500 font-medium">30 Janvier 2026</span>
                        </div>

                        <div className="prose max-w-none">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Rencontre avec les Associations</h2>

                            <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src="/reunion-associations-jan2026.jpg"
                                    alt="Rencontre avec les associations - 30 janvier 2026"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
                                <p className="text-xl text-primary font-medium italic">
                                    "Un temps d'écoute et d'échanges avec l'ensemble des représentants des associations de la commune."
                                </p>
                            </div>

                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <p>
                                    Vendredi 30 janvier, la liste « Dommartin avec Vous » a invité l'ensemble des représentants des associations de la commune pour un temps d'écoute et d'échanges, afin de mieux connaître leurs réalités et de comprendre leurs besoins.
                                </p>

                                <p>
                                    Cette rencontre a été l'occasion de dialoguer ouvertement sur le fonctionnement au quotidien des associations, leurs réussites, les difficultés rencontrées (organisation, bénévolat, stockage, financements, communication, etc.) ainsi que leurs attentes pour l'avenir. Les échanges ont mis en lumière la richesse et l'engagement du tissu associatif, mais aussi des points concrets qui méritent d'être travaillés collectivement.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5 text-accent" />
                                    Notre méthode
                                </h3>
                                <p>
                                    Fidèles à notre engagement, nous voulons avancer avec une méthode simple : <strong>écouter, échanger, comprendre, puis proposer des solutions réalistes</strong>. Notre objectif est de formuler des réponses utiles et applicables, au plus près des besoins exprimés, dans un esprit de respect et de coopération, tout en gardant une vigilance constante sur la maîtrise des dépenses communales.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-accent" />
                                    Remerciements
                                </h3>
                                <p>
                                    Nous remercions chaleureusement les participant(e)s d'être venus en nombre, représentant l'ensemble du monde associatif sportif, culturel et social, pour la qualité des échanges, la franchise des retours et la richesse des contributions.
                                </p>

                                <div className="bg-accent/10 p-6 rounded-xl mt-8 border border-accent/20">
                                    <p className="text-primary font-medium text-center">
                                        <Target className="w-5 h-5 inline-block mr-2" />
                                        Des réponses et des propositions ont été présentées lors de notre <a href="#reunion-publique-fevrier" className="underline font-bold hover:text-primary-dark transition-colors">réunion publique du 12 février</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Compte-rendu Réunion 2 (Jan 8) */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-3 py-1 text-sm">Passé</Badge>
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
                                    La réunion du jeudi 8 a confirmé une dynamique forte : une participation active et nombreuse, malgré les intempéries, et une envie partagée de construire ensemble un projet municipal citoyen, non partisan et participatif. Les échanges ont permis de clarifier la feuille de route, de mieux faire ressortir les attentes prioritaires des picosés, et d’avancer concrètement vers un programme qui a été présenté lors de la réunion publique du 12 février 2026.
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

            {/* SECTION 5: Compte-rendu Réunion 1 (Dec) */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">

                        <div className="flex items-center gap-4 mb-8">
                            <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-3 py-1 text-sm">Passé</Badge>
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
        </div>
    );
}
