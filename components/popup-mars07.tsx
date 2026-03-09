"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
    { src: "/mars07-photo1.png", alt: "Membres de l'équipe en gilets lors du nettoyage de printemps" },
    { src: "/mars07-photo2.png", alt: "Nettoyage de printemps - ramassage en bord de route" },
    { src: "/mars07-photo3.png", alt: "Étude de terrain sur les arrêts de bus - échanges entre colistiers" },
    { src: "/mars07-photo4.png", alt: "Travail de terrain - analyse des conditions de circulation" },
    { src: "/mars07-photo5.png", alt: "Inspection d'un arrêt de bus avec l'équipe" },
];

const THUMB_VISIBLE = 5;

function PhotoCarousel({ photos }: { photos: { src: string; alt: string }[] }) {
    const [activePhoto, setActivePhoto] = useState(0);

    const thumbStart = Math.max(0, Math.min(activePhoto - Math.floor(THUMB_VISIBLE / 2), photos.length - THUMB_VISIBLE));
    const visibleIndices = Array.from({ length: Math.min(THUMB_VISIBLE, photos.length) }, (_, k) => thumbStart + k).filter(i => i < photos.length);

    const prevPhoto = () => setActivePhoto((p) => (p - 1 + photos.length) % photos.length);
    const nextPhoto = () => setActivePhoto((p) => (p + 1) % photos.length);

    return (
        <div>
            {/* Carousel principal */}
            <div className="relative rounded-2xl overflow-hidden shadow-md mb-3 bg-gray-900" style={{ height: "300px" }}>
                <Image
                    key={activePhoto}
                    src={photos[activePhoto].src}
                    alt={photos[activePhoto].alt}
                    fill
                    className="object-contain"
                />
                {/* Flèches navigation */}
                <button
                    onClick={prevPhoto}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={nextPhoto}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
                {/* Compteur */}
                <div className="absolute bottom-2 right-3 bg-black/60 text-white text-xs px-2.5 py-0.5 rounded-full font-medium">
                    {activePhoto + 1} / {photos.length}
                </div>
            </div>

            {/* Vignettes */}
            <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${Math.min(photos.length, THUMB_VISIBLE)}, 1fr)` }}>
                {visibleIndices.map((i) => (
                    <button
                        key={i}
                        onClick={() => setActivePhoto(i)}
                        className={`relative rounded-xl overflow-hidden border-2 transition-all bg-gray-900 ${i === activePhoto
                            ? "border-primary shadow-md scale-105"
                            : "border-transparent hover:border-gray-300"
                            }`}
                        style={{ height: "56px" }}
                    >
                        <Image
                            src={photos[i].src}
                            alt={photos[i].alt}
                            fill
                            className="object-contain"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

export function PopupMars07() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const modal = (
        <div
            style={{ position: "fixed", inset: 0, zIndex: 999999 }}
            className="flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Panel */}
            <div
                style={{ position: "relative", zIndex: 1000000 }}
                className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 rounded-t-3xl flex items-center justify-between" style={{ zIndex: 1000001 }}>
                    <div>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Compte-rendu</span>
                        <h2 className="text-xl font-bold text-gray-900 font-heading">Samedi 7 mars</h2>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* Content */}
                <div className="px-6 py-5 space-y-6">
                    {/* Badge */}
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                        <span className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                            Permanence + Nettoyage + Terrain arrêts de bus
                        </span>
                    </div>

                    {/* Titre */}
                    <div className="bg-primary/5 border border-primary/15 rounded-xl p-4">
                        <p className="text-gray-800 font-semibold mb-2">
                            Une journée bien remplie au service de Dommartin
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Ce samedi a illustré concrètement l&apos;engagement collectif de notre équipe.
                            Tout au long de la journée, les membres de la liste se sont réparti différentes activités,
                            chacun contribuant à la dynamique locale.
                        </p>
                    </div>

                    {/* Permanence du matin */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">☕</span>
                            <h3 className="text-base font-bold text-gray-900">Permanence du samedi matin</h3>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            La matinée a débuté avec la permanence habituelle du samedi, moment d&apos;échange privilégié avec les habitants.
                            Plusieurs Picosés sont venus partager leurs observations, poser des questions ou nous adresser leurs encouragements.
                            Ces échanges directs sont essentiels pour nourrir notre réflexion et construire un projet au plus près des réalités du terrain.
                        </p>
                    </div>

                    {/* Nettoyage de printemps */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">🌿</span>
                            <h3 className="text-base font-bold text-green-800">Nettoyage de printemps</h3>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Dans le même temps, plusieurs membres de l&apos;équipe ont participé au nettoyage de printemps organisé dans le cadre
                            de la journée nationale « J&apos;aime la nature propre », aux côtés du Conseil municipal des enfants et de la
                            commission environnement. Une action concrète et collective pour préserver notre cadre de vie et sensibiliser
                            chacun au respect de l&apos;environnement.
                        </p>
                    </div>

                    {/* Arrêts de bus */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">🚌</span>
                            <h3 className="text-base font-bold text-blue-800">Terrain : arrêts de bus et circulation</h3>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            L&apos;après-midi a été consacré à un travail de terrain sur les arrêts de bus et les conditions de circulation
                            des transports scolaires et publics. Munis du cadastre, nous avons étudié différentes pistes permettant
                            d&apos;améliorer la sécurité et l&apos;organisation des déplacements, en prenant en compte les contraintes
                            d&apos;aménagement et la réalité des espaces disponibles.
                        </p>
                    </div>

                    {/* Saint-Patrick */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">🍀</span>
                            <h3 className="text-base font-bold text-amber-800">Soirée Saint-Patrick</h3>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            La journée se conclura dans un esprit convivial avec la soirée de la Saint-Patrick organisée par le Comité des fêtes,
                            preuve que la vie associative et les moments partagés participent pleinement à la vitalité du village.
                        </p>
                    </div>

                    {/* Galerie photos */}
                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">📸 Photos de la journée</p>
                        <PhotoCarousel photos={photos} />
                    </div>

                    {/* Conclusion */}
                    <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-5 text-white">
                        <p className="leading-relaxed text-sm mb-2">
                            Car un village, c&apos;est avant tout une communauté vivante, où chacun peut s&apos;impliquer selon ses centres
                            d&apos;intérêt et participer aux initiatives qui font avancer la commune.
                        </p>
                        <p className="font-bold text-accent text-sm">
                            Notre équipe est soudée, motivée et prête à s&apos;engager pleinement pour faire avancer Dommartin et accompagner son développement.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Carte cliquable 7 mars */}
            <button
                onClick={() => setIsOpen(true)}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex flex-col items-center justify-center text-center hover:bg-white/30 transition-all relative group cursor-pointer"
            >
                <span className="text-xs font-bold opacity-80 uppercase mb-1">MARS</span>
                <span className="text-3xl font-bold mb-1">07</span>
                <span className="text-sm font-semibold">Samedi</span>
                <span className="text-xs opacity-90 mt-1">10h - 12h</span>
                {/* Badge compte-rendu */}
                <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md group-hover:scale-110 transition-transform">
                    ✓ Compte-rendu
                </span>
            </button>

            {/* Portal : rendu directement dans document.body */}
            {mounted && isOpen && createPortal(modal, document.body)}
        </>
    );
}
