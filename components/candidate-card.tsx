"use client";

import { useState } from "react";
import { User } from "lucide-react";
import { Candidate } from "@/types";
import { cn } from "@/lib/utils";


interface CandidateCardProps {
    candidate: Candidate;
    onReadMore: (candidate: Candidate) => void;
}

export function CandidateCard({ candidate, onReadMore }: CandidateCardProps) {
    const [imgError, setImgError] = useState(false);

    // Initial truncated description (first paragraph) for the card
    const getExcerpt = (bio: string) => {
        const firstParagraph = bio.split('\n\n')[0];
        return firstParagraph.length > 200 ? firstParagraph.slice(0, 200) + "..." : firstParagraph;
    };

    return (
        <div className="max-w-2xl mx-auto w-full bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row transition-transform hover:-translate-y-1 duration-300">
            {/* Image Section */}
            <div className="md:w-5/12 relative min-h-[250px] md:min-h-full bg-gray-50">
                {candidate.photoUrl && !imgError ? (
                    <img
                        src={candidate.photoUrl}
                        alt={candidate.name}
                        className="w-full h-auto object-contain rounded-t-[2rem] md:rounded-l-[2rem] md:rounded-tr-none"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <User className="h-32 w-32 text-gray-300" />
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="md:w-7/12 p-6 flex flex-col justify-center text-left">
                <div className="mb-3">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-2">
                        {candidate.role}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-heading">
                        {candidate.name}
                    </h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed whitespace-pre-wrap text-sm md:text-base">
                    {getExcerpt(candidate.bio)}
                </p>

                <button
                    onClick={() => onReadMore(candidate)}
                    className="text-primary font-bold hover:underline self-start flex items-center text-sm"
                >
                    Lire la biographie complète →
                </button>
            </div>
        </div>
    );
}
