import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
    title: "Communiqué de Presse | Dommartin avec vous",
    description: "Municipales 2026 : la liste « Dommartin avec Vous » se présente, menée par Jean-Jacques Rosaye.",
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
                            COMMUNIQUÉ DE PRESSE
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 font-heading leading-tight mb-4">
                            Municipales 2026 : la liste « Dommartin avec Vous » se présente
                        </h1>
                        <div className="flex items-center text-gray-500 font-medium">
                            <Calendar className="w-5 h-5 mr-2" />
                            Dommartin-lès-Remiremont, le 18 janvier 2026
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">

                    {/* Visual from FB */}
                    <div className="relative w-full aspect-video md:aspect-[21/9] bg-gray-100 rounded-3xl overflow-hidden shadow-lg mb-12">
                        <Image
                            src="/communique-2026.png"
                            alt="Visuel du communiqué de presse"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:text-primary max-w-none text-gray-800 leading-relaxed">
                        <p className="font-bold text-xl mb-8">
                            Menée par Jean-Jacques Rosaye, une équipe de Picosés annonce la création de la liste « Dommartin avec Vous » à l’occasion des élections municipales des 15 et 22 mars 2026.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Ø Une liste née d’une démarche d’écoute et de concertation</h3>

                        <p>
                            Depuis plusieurs semaines, la réflexion s’est construite à partir d’une démarche participative inédite.
                            Le collectif a multiplié les rencontres, les ateliers et les consultations pour recueillir les attentes
                            réelles des habitants. C'est de cette dynamique qu'est né le projet, avant même la constitution de la liste.
                        </p>

                        <p>
                            Aujourd'hui, l'équipe est au complet et prête à porter ce projet ambitieux et réaliste pour Dommartin-lès-Remiremont.
                            Elle rassemble des femmes et des hommes d'horizons divers, unis par la même volonté de servir l'intérêt général
                            et de redonner la parole aux citoyens.
                        </p>

                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-accent my-8">
                            <p className="italic text-gray-600 m-0">
                                « Nous voulons une gouvernance transparente, qui associe les habitants aux décisions structurantes.
                                C'est le sens de notre charte d'engagement. »
                                <br />
                                <span className="font-bold not-italic text-gray-900 mt-2 block">— Jean-Jacques Rosaye</span>
                            </p>
                        </div>
                    </div>

                    {/* External Link */}
                    <div className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                        <div>
                            <h4 className="font-bold text-lg text-gray-900">Lire l'article complet</h4>
                            <p className="text-gray-600">Retrouvez la couverture presse sur RemiremontVallées.com</p>
                        </div>
                        <Button asChild className="shrink-0" variant="outline">
                            <Link href="https://remiremontvallees.com/2026/01/19/dommartin-les-remiremont-municipales-2026-la-liste-dommartin-avec-vous-se-presente-menee-par-jean-jacques-rosaye/" target="_blank" rel="noopener noreferrer">
                                Lire sur le site média
                                <ExternalLink className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}
