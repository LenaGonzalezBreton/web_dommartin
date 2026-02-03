import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ExternalLink, AlertTriangle, FileText, Newspaper } from "lucide-react";

export const metadata: Metadata = {
    title: "Dans les médias | Dommartin avec vous",
    description: "Courrier aux acteurs économiques et couverture presse de la liste Dommartin avec Vous.",
};

export default function CommuniquePage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-4 py-8">
                    <Button asChild variant="ghost" className="mb-4 text-gray-600 hover:text-primary">
                        <Link href="/">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Retour à l'accueil
                        </Link>
                    </Button>
                    <div className="max-w-4xl mx-auto">
                        <span className="bg-primary/10 text-primary font-bold px-4 py-1.5 rounded-full text-sm inline-block mb-4">
                            DANS LES MÉDIAS
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 font-heading leading-tight mb-4">
                            Actualités & Publications
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* SECTION PRINCIPALE: Courrier aux acteurs économiques */}
                    <section className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10 rounded-3xl border border-primary/20 shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-accent text-white font-bold px-4 py-1.5 rounded-full text-sm animate-pulse">
                                NOUVEAU
                            </span>
                            <span className="bg-primary/10 text-primary font-bold px-4 py-1.5 rounded-full text-sm">
                                Acteurs économiques
                            </span>
                        </div>

                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                                <FileText className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                    Courrier aux acteurs économiques
                                </h2>
                                <p className="text-lg text-primary font-medium italic">
                                    "Une phase d'écoute et de concertation pour construire ensemble un diagnostic partagé."
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                            <p>
                                Dans le cadre de la démarche « <strong className="text-primary">Dommartin avec vous !</strong> », nous avons adressé une lettre aux acteurs économiques de la commune afin d'engager une phase d'écoute et de concertation. L'objectif est de recueillir vos priorités, difficultés et propositions pour construire un diagnostic partagé et identifier des leviers concrets en faveur de l'activité locale.
                            </p>
                            <p>
                                L'intégralité de la lettre est disponible via le lien ci-dessous.
                            </p>
                        </div>

                        {/* Rectificatif */}
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl mb-8">
                            <p className="text-amber-800 font-medium flex items-start gap-2">
                                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                                <span>
                                    <strong>Rectificatif :</strong> une première version de la lettre comportait une erreur dans l'adresse mail. Nous vous confirmons que la bonne adresse est : <a href="mailto:dommartinavecvous@proton.me" className="text-primary underline font-bold">dommartinavecvous@proton.me</a>
                                </span>
                            </p>
                        </div>

                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg">
                            <a
                                href="/Acteurs économiques.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Consulter la lettre (PDF)
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </Button>
                    </section>

                    {/* Séparateur */}
                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-gray-400 font-medium text-sm uppercase tracking-wider">Revue de presse</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    {/* SECTION SECONDAIRE: Articles de presse (minimisée) */}
                    <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <Newspaper className="w-5 h-5 text-gray-500" />
                            <h3 className="text-lg font-bold text-gray-700">Articles de presse</h3>
                        </div>

                        <p className="text-gray-600 mb-6 text-sm">
                            Municipales 2026 : la liste « Dommartin avec Vous » se présente, menée par Jean-Jacques Rosaye.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild variant="outline" size="sm" className="text-gray-600 border-gray-300 hover:bg-gray-100">
                                <Link href="https://remiremontvallees.com/2026/01/19/dommartin-les-remiremont-municipales-2026-la-liste-dommartin-avec-vous-se-presente-menee-par-jean-jacques-rosaye/" target="_blank" rel="noopener noreferrer">
                                    RemiremontVallées.com
                                    <ExternalLink className="ml-2 w-3 h-3" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="sm" className="text-gray-600 border-gray-300 hover:bg-gray-100">
                                <Link href="https://www.facebook.com/share/1BsfkAgXqk/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                                    Voir sur Facebook (Aveu 88)
                                    <ExternalLink className="ml-2 w-3 h-3" />
                                </Link>
                            </Button>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
