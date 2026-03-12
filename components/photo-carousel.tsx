"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const THUMB_VISIBLE = 5;

export function PhotoCarousel({ photos }: { photos: { src: string; alt: string }[] }) {
    const [activePhoto, setActivePhoto] = useState(0);

    const thumbStart = Math.max(0, Math.min(activePhoto - Math.floor(THUMB_VISIBLE / 2), photos.length - THUMB_VISIBLE));
    const visibleIndices = Array.from({ length: Math.min(THUMB_VISIBLE, photos.length) }, (_, k) => thumbStart + k).filter(i => i < photos.length);

    const prevPhoto = () => setActivePhoto((p) => (p - 1 + photos.length) % photos.length);
    const nextPhoto = () => setActivePhoto((p) => (p + 1) % photos.length);

    return (
        <div>
            {/* Carousel principal */}
            <div className="relative rounded-xl overflow-hidden shadow-lg mb-3 bg-white border border-gray-100 aspect-[1/1.4]">
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
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextPhoto}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
                {/* Compteur */}
                <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full font-medium shadow-sm backdrop-blur-sm">
                    {activePhoto + 1} / {photos.length}
                </div>
            </div>

            {/* Vignettes */}
            <div className="flex justify-center gap-2">
                {visibleIndices.map((i) => (
                    <button
                        key={i}
                        onClick={() => setActivePhoto(i)}
                        className={`relative rounded-lg overflow-hidden border-2 transition-all bg-white aspect-[1/1.4] w-16 md:w-20 ${i === activePhoto
                            ? "border-primary shadow-md scale-105"
                            : "border-transparent hover:border-gray-300 opacity-70 hover:opacity-100"
                            }`}
                    >
                        <Image
                            src={photos[i].src}
                            alt={photos[i].alt}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
