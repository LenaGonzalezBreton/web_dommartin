"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const photosTract = [
    { src: "/fev28-photo1.png", alt: "Distribution de tracts - échange avec un habitant" },
    { src: "/fev28-photo2.png", alt: "Visite d'entreprise - deux candidats devant le bâtiment" },
    { src: "/fev28-photo3.png", alt: "Remise du tract à la porte d'un habitant" },
    { src: "/fev28-photo4.png", alt: "Distribution dans le village - deux colistiers" },
    { src: "/fev28-photo5.png", alt: "Échange avec des habitants en extérieur" },
    { src: "/fev28-photo6.png", alt: "Remise du tract entre deux colistiers en extérieur" },
    { src: "/fev28-photo7.jpg", alt: "Échange devant une porte avec le tract" },
    { src: "/fev28-photo8.jpg", alt: "Selfie de deux colistiers avec le tract lors de la distribution" },
];

const photosBois = [
    { src: "/bois-menuiserie.png", alt: "Visite de la Menuiserie Rustique Bois - Adam Étienne" },
    { src: "/bois-scierie1.png", alt: "Visite de la Scierie Mobile Perrin - site de l'entreprise" },
    { src: "/bois-scierie2.jpg", alt: "Scierie Mobile Perrin - vue de l'extérieur" },
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

export function PopupFev28() {
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
                        <h2 className="text-xl font-bold text-gray-900 font-heading">Samedi 28 février</h2>
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
                            Permanence + Terrain + Distribution de tracts
                        </span>
                    </div>

                    {/* Introduction */}
                    <div className="bg-primary/5 border border-primary/15 rounded-xl p-4">
                        <p className="text-gray-800 font-semibold mb-2">
                            Un week-end intense et très enrichissant pour l&apos;ensemble de nos colistiers&nbsp;!
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Permanence le samedi matin pour des échanges libres et individuels, visites de plusieurs
                            entreprises du village mais surtout distribution de notre dernier tract. Une nouvelle
                            occasion de venir à votre rencontre.
                        </p>
                    </div>

                    {/* ---- NOUVELLE SECTION : Visites entreprises bois ---- */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">🌳</span>
                            <h3 className="text-base font-bold text-gray-900">
                                Nos colistiers, acteurs économiques de Dommartin : le bois au cœur de nos savoir-faire
                            </h3>
                        </div>

                        <p className="text-gray-700 text-sm leading-relaxed">
                            La liste <span className="font-semibold text-primary">« Dommartin avec Vous »</span> est allée à la rencontre de deux entreprises locales,
                            pour illustrer une réalité qui nous tient à cœur : parmi nos colistiers, certains sont directement
                            impliqués dans la vie de Dommartin au quotidien, à travers leur activité professionnelle
                            (artisans, entrepreneurs, agriculteurs…).
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Ces visites ont aussi été l&apos;occasion de mettre en valeur un patrimoine essentiel pour notre commune :
                            la forêt et l&apos;usage du bois 🌳
                        </p>

                        {/* Galerie photos bois */}
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">📸 Photos des visites</p>
                            <PhotoCarousel photos={photosBois} />
                        </div>

                        {/* Menuiserie Rustique Bois */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                            <p className="font-bold text-amber-800 mb-1 text-sm uppercase tracking-wide">
                                🪵 Menuiserie Rustique Bois — Adam Étienne
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Rustique Bois est une menuiserie spécialisée dans le travail du bois sur mesure.
                                Adam Étienne y conçoit et fabrique des <strong>escaliers personnalisés</strong>, ainsi que
                                des <strong>meubles uniques</strong> adaptés aux besoins de chacun : aménagements intérieurs,
                                mobilier pour particuliers, mais aussi créations pour des bars, restaurants et établissements
                                professionnels. Un savoir-faire local qui allie précision, créativité et sens du détail.
                            </p>
                        </div>

                        {/* Scierie Mobile Perrin */}
                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                            <p className="font-bold text-green-800 mb-1 text-sm uppercase tracking-wide">
                                🌲 Scierie Mobile Perrin — Arnaud & Élisabeth Perrin
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                La Scierie Mobile Perrin intervient au plus près de la ressource : elle est capable de scier
                                le bois <strong>directement en forêt</strong>, mais aussi sur le site de l&apos;entreprise.
                                Son activité consiste à transformer les grumes en bois d&apos;œuvre et bois de charpente,
                                principalement en résineux, avec également un peu de feuillus. Cette capacité de travail
                                <em>« sur place »</em> est un vrai atout pour valoriser les forêts locales et répondre
                                efficacement aux besoins des projets de construction et d&apos;aménagement.
                            </p>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed italic">
                            Nous continuerons à aller à la rencontre du cœur économique de notre commune, en nous rendant
                            directement sur le terrain, chez nos colistiers comme chez tous les Picosés qui font vivre
                            Dommartin par leur travail, leur savoir-faire et leur engagement au quotidien.
                        </p>
                    </div>

                    {/* ---- FIN SECTION bois ---- */}

                    {/* Séparateur */}
                    <div className="border-t border-gray-100 pt-2">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">📸 Distribution de tracts — photos du week-end</p>
                    </div>

                    {/* Remerciements */}
                    <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                        <p className="text-gray-700 text-sm leading-relaxed">
                            <span className="text-accent font-bold">❤️ Un grand merci</span> pour votre accueil,
                            vos sourires, vos messages de sympathie et de soutien.
                        </p>
                    </div>

                    {/* Galerie photos tract */}
                    <div>
                        <PhotoCarousel photos={photosTract} />
                    </div>

                    {/* Conclusion */}
                    <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-5 text-white">
                        <p className="leading-relaxed text-sm font-medium">
                            Ces moments de rencontre sont au cœur de notre engagement.
                        </p>
                        <p className="mt-2 font-bold text-accent text-sm">
                            Proximité, écoute et transparence, pour construire un projet communal avec vous.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Carte cliquable 28 février */}
            <button
                onClick={() => setIsOpen(true)}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex flex-col items-center justify-center text-center hover:bg-white/30 transition-all relative group cursor-pointer"
            >
                <span className="text-xs font-bold opacity-80 uppercase mb-1">FÉVRIER</span>
                <span className="text-3xl font-bold mb-1">28</span>
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
