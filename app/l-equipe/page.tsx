import { Metadata } from "next";
import { candidats } from "@/data/candidats";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { User, Quote } from "lucide-react";

export const metadata: Metadata = {
    title: "L'Équipe",
    description:
        "Découvrez les candidats de Dommartin-Lès-Remiremont Ensemble pour les élections municipales 2026.",
};

export default function LEquipePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="mx-auto max-w-2xl text-center animate-fade-in">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Notre <span className="gradient-text">Équipe</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Des femmes et des hommes engagés pour Dommartin, de tous les hameaux,
                            pour apporter un <span className="font-semibold text-blue-600">souffle nouveau</span> à notre commune.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {candidats.map((candidat, index) => (
                            <Card
                                key={candidat.id}
                                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover bg-white"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Photo placeholder with gradient overlay */}
                                <div className="aspect-[4/3] relative bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center overflow-hidden">
                                    <User className="h-24 w-24 text-blue-300 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <CardHeader className="pb-2">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                                            {candidat.name}
                                        </CardTitle>
                                    </div>
                                    <CardDescription className="text-teal-600 font-semibold">
                                        {candidat.role}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="relative">
                                        <Quote className="absolute -top-2 -left-1 h-6 w-6 text-blue-100" />
                                        <p className="text-gray-600 pl-4 italic">
                                            {candidat.bio}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join us CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
                <div className="container mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Envie de nous rejoindre ?</h2>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                        Notre liste est ouverte à tous les citoyens qui partagent nos valeurs.
                    </p>
                </div>
            </section>
        </div>
    );
}
