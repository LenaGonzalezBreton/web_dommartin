"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

interface VideoHeroProps {
    videoSrc: string;
    title: React.ReactNode;
    description: string;
}

export function VideoHero({ videoSrc, title, description }: VideoHeroProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden cursor-pointer group"
                onClick={() => setIsOpen(true)}
            >
                {/* Video Background (Muted Loop) */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

                {/* Content */}
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="animate-fade-in relative z-20">
                        {title}
                    </div>

                    <p className="text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed mt-6 animate-slide-up font-medium drop-shadow-md relative z-20">
                        {description}
                    </p>

                    {/* Play Button (Refined) */}
                    <div className="mt-8 relative z-20 flex justify-center overflow-hidden">
                        <button
                            className="group/btn flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-white/50"
                            aria-label="Lancer la vidéo avec le son"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(true);
                            }}
                        >
                            <div className="bg-white text-primary rounded-full p-1.5 shadow-sm group-hover/btn:scale-110 transition-transform">
                                <Play className="w-3 h-3 fill-current" />
                            </div>
                            <span className="font-semibold tracking-wide text-sm uppercase">Lancer la vidéo</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                    onClick={() => setIsOpen(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(false);
                        }}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div
                        className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video
                            src={videoSrc}
                            className="w-full h-full"
                            controls
                            autoPlay
                        />
                    </div>
                </div>
            )}
        </>
    );
}
