"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X, Heart, Star, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PopupVictoire() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Only show popup automatically once per session, and wait a bit after load
    useEffect(() => {
        setMounted(true);
        const hasSeenPopup = sessionStorage.getItem("hasSeenVictoryPopup");
        
        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem("hasSeenVictoryPopup", "true");
            }, 1500); // 1.5 second delay before popping up
            
            return () => clearTimeout(timer);
        }
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
            className="flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsOpen(false)}
        >
            {/* Backdrop with a slightly festive tint */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

            {/* Panel */}
            <div
                style={{ position: "relative", zIndex: 1000000 }}
                className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Decorative top border */}
                <div className="h-3 w-full bg-gradient-to-r from-primary via-accent to-primary-dark"></div>
                
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100/80 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                >
                    <X className="w-5 h-5 text-gray-600" />
                </button>

                {/* Content */}
                <div className="px-8 pb-10 pt-8 text-center">
                    
                    {/* Festive Icon Header */}
                    <div className="flex justify-center mb-6 relative">
                        <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-150"></div>
                        <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary-dark rounded-full flex items-center justify-center shadow-xl shadow-accent/30 relative z-10 ring-8 ring-white">
                            <PartyPopper className="w-12 h-12 text-white" />
                        </div>
                    </div>

                    <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-1 rounded-full text-sm tracking-wider uppercase mb-4">
                        Élections Municipales
                    </span>
                    
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 font-heading leading-tight">
                        Un immense <span className="text-accent">MERCI</span> !
                    </h2>

                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-8">
                        <p className="font-medium text-gray-900">
                            Chers Picosés,
                        </p>
                        <p>
                            Nous tenons à vous remercier du fond du cœur pour la confiance que vous avez accordée à Jean-Jacques Rosaye et à l&apos;ensemble de la liste « Dommartin avec vous ».
                        </p>
                        
                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 my-6 relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 opacity-10">
                                <Heart className="w-24 h-24 text-primary" />
                            </div>
                            <p className="font-semibold text-primary-dark italic relative z-10">
                                &quot;C&apos;est avec fierté, humilité et un grand sens des responsabilités que nous nous engageons à travailler pour l&apos;avenir de notre commune, dans l&apos;écoute et le partage.&quot;
                            </p>
                        </div>

                        <p>
                            Cette victoire est la vôtre. Dès demain, nous serons au travail pour mettre en œuvre notre programme et améliorer notre cadre de vie, ensemble.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            onClick={() => setIsOpen(false)}
                            className="bg-primary hover:bg-primary-dark text-white font-bold h-12 px-8 rounded-xl shadow-lg hover:shadow-primary/30 transition-all text-base w-full sm:w-auto"
                        >
                            <Heart className="mr-2 h-5 w-5" />
                            Continuer sur le site
                        </Button>
                    </div>
                </div>
                
                {/* Decorative bottom element */}
                <div className="bg-gray-50 p-4 text-center border-t border-gray-100 rounded-b-3xl">
                    <p className="text-sm font-semibold text-gray-500 flex items-center justify-center gap-2">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        Ensemble pour Dommartin
                        <Star className="w-4 h-4 text-accent fill-accent" />
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {mounted && isOpen && createPortal(modal, document.body)}
        </>
    );
}
