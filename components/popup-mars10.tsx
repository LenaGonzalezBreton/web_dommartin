"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, CheckCircle } from "lucide-react";

export function PopupMars10() {
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
                        <h2 className="text-xl font-bold text-gray-900 font-heading">Mardi 10 mars</h2>
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
                            Permanence
                        </span>
                    </div>

                    {/* Titre */}
                    <div className="bg-primary/5 border border-primary/15 rounded-xl p-4">
                        <p className="text-gray-800 font-semibold mb-2">
                            Retour sur notre permanence du 10 mars
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Le 10 mars dernier, l’équipe était réunie autour de Jean-Jacques Rosaye, notre tête de liste, pour cette dernière permanence avant l’échéance électorale.
                        </p>
                    </div>

                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                        <p>
                            Ce moment d’échange nous a permis de rencontrer plusieurs Picosés aux profils variés, illustrant toute la diversité et la richesse humaine de notre commune.
                        </p>

                        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
                            <p className="font-medium text-amber-900 mb-2">Rencontres inspirantes :</p>
                            <ul className="list-disc pl-5 space-y-2 text-amber-800">
                                <li>
                                    Nous avons notamment échangé avec une jeune femme récemment installée à Dommartin avec son conjoint, venue partager son souhait de s’implanter durablement dans le village et de participer à sa vie locale.
                                </li>
                                <li>
                                    Nous avons également rencontré un Picosé très engagé dans le monde associatif, qui contribue activement à faire vivre notre commune… et même à faire danser Dommartin à travers ses activités.
                                </li>
                            </ul>
                        </div>

                        <p>
                            Ces échanges confirment une conviction qui guide notre démarche : <strong className="text-primary">Dommartin est une commune riche de ses habitants, de leurs parcours, de leurs engagements et de leurs envies de faire vivre le village.</strong>
                        </p>

                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center mt-6">
                            <p className="font-semibold text-gray-800">
                                Merci à toutes celles et ceux qui sont venus nous rencontrer et partager ce moment de dialogue.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Carte cliquable 10 mars */}
            <button
                onClick={() => setIsOpen(true)}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex flex-col items-center justify-center text-center hover:bg-white/30 transition-all relative group cursor-pointer"
            >
                <span className="text-xs font-bold opacity-80 uppercase mb-1">MARS</span>
                <span className="text-3xl font-bold mb-1">10</span>
                <span className="text-sm font-semibold">Mardi</span>
                <span className="text-xs opacity-90 mt-1">18h - 21h</span>
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
