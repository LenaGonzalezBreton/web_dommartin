"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, CheckCircle } from "lucide-react";

export function PopupFev21() {
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
                        <h2 className="text-xl font-bold text-gray-900 font-heading">Samedi 21 février</h2>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* Content */}
                <div className="px-6 py-5 space-y-5">
                    {/* Badge */}
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                        <span className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                            Permanence + Présence terrain
                        </span>
                    </div>

                    {/* Introduction */}
                    <p className="text-gray-700 leading-relaxed">
                        La journée du samedi 21 février a montré toute la complémentarité de notre démarche :
                        être présents sur le terrain et disponibles en proximité, pour écouter et construire avec vous.
                    </p>

                    {/* Photo terrain */}
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/permanence-21fev-terrain.png"
                            alt="Équipe sur le terrain le 21 février"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Paragraphe terrain */}
                    <div className="bg-primary/5 border border-primary/15 rounded-xl p-4">
                        <p className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide text-primary">🚶 Sur le terrain</p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            D&apos;un côté, une partie de l&apos;équipe Dommartin avec Vous est allée à la rencontre des
                            Picosés, au plus près du quotidien. Ces échanges ont permis d&apos;aborder des sujets très concrets
                            qui touchent directement à la sécurité et au cadre de vie : la sécurisation de l&apos;accès à
                            l&apos;école primaire, le plan de circulation autour de l&apos;église et de la mairie, ou encore
                            la place des AFN. La matinée a aussi été l&apos;occasion de rencontrer les acteurs économiques
                            locaux, avec la visite de l&apos;entreprise EVOPRO (M. Thinet), spécialisée dans la réparation
                            de machines à coudre.
                        </p>
                    </div>

                    {/* Photo réunion */}
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/permanence-21fev-reunion.png"
                            alt="Permanence du 21 février à la Maison des Associations"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Paragraphe permanence */}
                    <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                        <p className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide text-accent">📋 Permanence Maison des Associations</p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            En parallèle, nous avons tenu une permanence de proximité à la Maison des Associations, de
                            10h à 12h : un temps d&apos;échange simple, ouvert à toutes et tous, pour poser des questions,
                            partager des idées, exprimer des attentes ou discuter d&apos;un sujet du quotidien. Ce format,
                            pensé pour le samedi matin, permet au plus grand nombre de venir facilement, et pour celles
                            et ceux qui ne sont pas disponibles, il reste toujours possible d&apos;organiser un rendez-vous.
                        </p>
                    </div>

                    {/* Conclusion */}
                    <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-5 text-white">
                        <p className="leading-relaxed text-sm">
                            Aller sur le terrain pour voir, comprendre et dialoguer, et tenir une permanence pour accueillir,
                            approfondir et prolonger les échanges : ces deux actions se répondent et se renforcent.
                            C&apos;est ainsi que nous faisons vivre notre engagement :
                        </p>
                        <p className="mt-3 font-bold text-accent text-sm">
                            Proximité, écoute et transparence, pour construire un projet communal avec vous.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Carte cliquable 21 février */}
            <button
                onClick={() => setIsOpen(true)}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex flex-col items-center justify-center text-center hover:bg-white/30 transition-all relative group cursor-pointer"
            >
                <span className="text-xs font-bold opacity-80 uppercase mb-1">FÉVRIER</span>
                <span className="text-3xl font-bold mb-1">21</span>
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
