"use client";

import { useState } from "react";
import { candidats } from "@/data/candidats";
import { CandidateCard } from "@/components/candidate-card";
import { Candidate } from "@/types";
import { X } from "lucide-react";

export function TeamList() {
    // Filter visible candidates
    const visibleCandidates = candidats.filter((c) => c.isVisible);

    // Identify Head of List (First one or by role if needed)
    const headOfList = visibleCandidates.length > 0 ? visibleCandidates[0] : null;
    const teamMembers = visibleCandidates.length > 1 ? visibleCandidates.slice(1) : [];

    // State for modal
    const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

    // Initial truncated description (first paragraph) for the card
    const getExcerpt = (bio: string) => {
        const firstParagraph = bio.split('\n\n')[0];
        return firstParagraph.length > 200 ? firstParagraph.slice(0, 200) + "..." : firstParagraph;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden flex items-center justify-center min-h-[50vh]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/equipe-complete.jpg"
                        alt="Equipe Dommartin avec Vous"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="mx-auto max-w-4xl text-center animate-fade-in">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white mb-6 font-heading drop-shadow-lg">
                            Notre Équipe
                        </h1>
                        <p className="text-lg md:text-xl text-gray-100 leading-relaxed font-medium drop-shadow-md max-w-2xl mx-auto">
                            Une équipe au service de Dommartin, issue d’une écoute active des habitants, pour traduire leurs priorités en actions concrètes.
                        </p>
                    </div>
                </div>
            </section>


            {/* Team Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">

                    {/* Head of List - Featured Layout */}
                    {headOfList && (
                        <div className="mb-20 animate-slide-up">
                            <div className="max-w-3xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row">
                                <div className="md:w-5/12 relative min-h-[300px] md:min-h-full bg-gray-50">
                                    <img
                                        src={headOfList.photoUrl}
                                        alt={headOfList.name}
                                        className="w-full h-auto object-contain rounded-t-[2rem] md:rounded-l-[2rem] md:rounded-tr-none"
                                    />
                                </div>
                                <div className="md:w-7/12 p-8 flex flex-col justify-center">
                                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 self-start">
                                        {headOfList.role}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-heading">
                                        {headOfList.name}
                                    </h2>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {getExcerpt(headOfList.bio)}
                                    </p>
                                    <button
                                        onClick={() => setSelectedCandidate(headOfList)}
                                        className="text-primary font-bold hover:underline self-start"
                                    >
                                        Lire la biographie complète →
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Team List (Others) */}
                    {teamMembers.length > 0 && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
                            <div className="text-center mb-4 lg:col-span-2">
                                <h3 className="text-2xl font-bold text-gray-900">Les Co-listiers</h3>
                                <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
                            </div>

                            {teamMembers.map((candidat) => (
                                <CandidateCard
                                    key={candidat.id}
                                    candidate={candidat}
                                    onReadMore={setSelectedCandidate}
                                />
                            ))}
                        </div>
                    )}

                </div>
            </section>



            {/* Modal */}
            {selectedCandidate && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setSelectedCandidate(null)}
                >
                    <div
                        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full relative overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedCandidate(null)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 text-black/60 hover:text-black transition-colors z-20"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="relative h-64 md:h-80 flex-shrink-0">
                            <img
                                src={selectedCandidate.photoUrl}
                                alt={selectedCandidate.name}
                                className="absolute inset-0 w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div>
                                    <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-2">
                                        {selectedCandidate.role}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white font-heading">
                                        {selectedCandidate.name}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 overflow-y-auto">
                            <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-wrap">
                                {selectedCandidate.bio}
                            </div>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}
