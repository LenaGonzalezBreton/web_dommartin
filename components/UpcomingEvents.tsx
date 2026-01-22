"use client";

import { useState } from "react";
import { Calendar, MapPin, Users, Newspaper, X } from "lucide-react";
import { cn } from "@/lib/utils";

type EventData = {
    id: string;
    type: "association" | "public_meeting";
    category: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    date: string;
    time: string;
    location: string;
    icon: React.ElementType;
    colorClass: string;
    iconColorClass: string;
    borderColorClass: string;
    bgColorClass: string;
};

const EVENTS: EventData[] = [
    {
        id: "assoc",
        type: "association",
        category: "Associations",
        title: "Rencontre avec les associations",
        shortDescription: "Un temps d’écoute et de partage pour échanger sur vos besoins, idées et projets.",
        fullDescription: `Dans le cadre de notre démarche « Dommartin avec vous ! », nous avons invité l’ensemble des associations de Dommartin à une rencontre d’échange.

L’objectif : être à votre écoute, mieux comprendre vos besoins, vos idées, vos projets et vos difficultés, afin de construire un projet municipal au plus près de la réalité du tissu associatif.`,
        date: "VENDREDI 30 JANVIER 2026",
        time: "20h00",
        location: "Maison des Associations",
        icon: Users,
        colorClass: "text-accent",
        iconColorClass: "text-accent",
        borderColorClass: "border-accent",
        bgColorClass: "bg-accent/10",
    },
    {
        id: "public",
        type: "public_meeting",
        category: "Réunion Publique",
        title: "Programme & Équipe",
        shortDescription: "Venez découvrir notre programme et échanger avec l’équipe au complet.",
        fullDescription: "Venez découvrir notre programme complet pour Dommartin et échanger avec l'ensemble de l'équipe « Dommartin avec Vous ». Ce sera l'occasion de poser vos questions et de partager un moment convivial.",
        date: "JEUDI 12 FÉVRIER 2026",
        time: "20h00",
        location: "Espace Culturel",
        icon: Newspaper,
        colorClass: "text-primary",
        iconColorClass: "text-primary",
        borderColorClass: "border-primary",
        bgColorClass: "bg-primary/10",
    },
];

export function UpcomingEvents() {
    const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

    return (
        <section className="py-12 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-xl font-bold text-primary mb-2 uppercase tracking-wide">Prochains Rendez-vous</h2>
                    <h3 className="text-3xl font-bold text-gray-900 font-heading">À vos agendas</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {EVENTS.map((event) => (
                        <div
                            key={event.id}
                            onClick={() => setSelectedEvent(event)}
                            className={cn(
                                "bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 hover:shadow-xl transition-all relative overflow-hidden group cursor-pointer active:scale-[0.98]",
                                event.borderColorClass
                            )}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <event.icon className={cn("w-24 h-24", event.iconColorClass)} />
                            </div>
                            <div className="relative z-10">
                                <span className={cn("inline-block px-3 py-1 rounded-full text-sm font-bold mb-4", event.bgColorClass, event.colorClass)}>
                                    {event.category}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">{event.title}</h3>
                                <p className="text-gray-600 mb-6 min-h-[3rem]">
                                    {event.shortDescription}
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-900 font-bold">
                                        <Calendar className={cn("w-5 h-5", event.colorClass)} />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <MapPin className="w-5 h-5 text-gray-400" />
                                        <span>{event.time} - {event.location}</span>
                                    </div>
                                </div>
                                <div className="mt-6 text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors flex items-center gap-1">
                                    <span>Cliquez pour plus d'infos</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal / Overlay */}
            {selectedEvent && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setSelectedEvent(null)}
                >
                    <div
                        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full relative overflow-hidden animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header with Color */}
                        <div className={cn("h-4 w-full", selectedEvent.bgColorClass.replace("/10", ""))}></div>

                        <button
                            onClick={() => setSelectedEvent(null)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="p-8 md:p-10">
                            <span className={cn("inline-block px-3 py-1 rounded-full text-sm font-bold mb-4", selectedEvent.bgColorClass, selectedEvent.colorClass)}>
                                {selectedEvent.category}
                            </span>

                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
                                {selectedEvent.title}
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6 mb-8 bg-gray-50 p-6 rounded-2xl">
                                <div className="flex items-center gap-3">
                                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm", selectedEvent.colorClass)}>
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Date</p>
                                        <p className="font-bold text-gray-900">{selectedEvent.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm", selectedEvent.colorClass)}>
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Lieu & Heure</p>
                                        <p className="font-bold text-gray-900">{selectedEvent.location} • {selectedEvent.time}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-wrap">
                                {selectedEvent.fullDescription}
                            </div>

                            <div className="mt-10 flex justify-end">
                                <button
                                    onClick={() => setSelectedEvent(null)}
                                    className={cn("px-6 py-3 rounded-xl font-bold text-white shadow-lg shadow-gray-200 hover:shadow-xl transition-all hover:-translate-y-1", selectedEvent.colorClass === "text-accent" ? "bg-accent hover:bg-accent-dark" : "bg-primary hover:bg-primary-dark")}
                                >
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
