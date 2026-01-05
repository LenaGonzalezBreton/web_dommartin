import { Metadata } from "next";
import { candidats } from "@/data/candidats";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { User, Users, Quote } from "lucide-react";

export const metadata: Metadata = {
    title: "L'Équipe des Initiateurs | Dommartin avec vous",
    description:
        "Rencontrez les initiateurs de la démarche citoyenne pour Dommartin-lès-Remiremont. Valérie Virion, Christophe Impéradori et bientôt toute l'équipe.",
};

export default function LEquipePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="mx-auto max-w-2xl text-center animate-fade-in">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Notre <span className="gradient-text">Équipe</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Une équipe au service de Dommartin,<span className="font-semibold text-primary"> issue d’une écoute active des habitants, </span> pour traduire leurs priorités en actions concrètes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Initiators Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-4 inline-block">
                            La Genèse du Projet
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900">Les Initiateurs de la démarche</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                        {candidats.filter(c => c.role.includes("Initiat")).map((candidat, index) => (
                            <Card
                                key={candidat.id}
                                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover bg-white ring-1 ring-gray-100"
                            >
                                <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden">
                                    {/* Placeholder if no real image */}
                                    <User className="h-32 w-32 text-gray-300" />
                                </div>

                                <CardHeader className="pb-2 text-center">
                                    <CardTitle className="text-2xl font-bold text-gray-900">
                                        {candidat.name}
                                    </CardTitle>
                                    <CardDescription className="text-accent font-semibold text-lg">
                                        {candidat.role}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="text-center pb-8 px-8">
                                    <p className="text-gray-600 italic leading-relaxed">
                                        "{candidat.bio}"
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Teaser Section */}
                    <div className="max-w-3xl mx-auto text-center bg-gray-50 rounded-3xl p-12 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                            <div className="grid grid-cols-6 gap-4 p-4 transform -rotate-12 scale-110">
                                {[...Array(24)].map((_, i) => (
                                    <User key={i} className="w-12 h-12" />
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                L’équipe se dévoile très prochainement…
                            </h3>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Nos réunions et temps d’écoute ont permis de construire le projet ; ils ont aussi fait émerger une équipe renouvelée, mobilisée et représentative de tous les hameaux de Dommartin.
                                <br />
                                <strong>Rendez-vous très prochainement pour la présentation officielle !</strong>
                            </p>
                            <div className="inline-flex items-center gap-2 text-gray-400 text-sm font-medium bg-white px-4 py-2 rounded-full border border-gray-200">
                                <span className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></span>
                                Annonce à venir
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join us CTA */}
            <section className="py-16 bg-gradient-to-r from-primary to-accent">
                <div className="container mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Envie de nous rejoindre ?</h2>
                    <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                        Notre liste est ouverte à tous les citoyens qui partagent nos valeurs.
                    </p>
                </div>
            </section>
        </div>
    );
}
