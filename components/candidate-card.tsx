"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Candidate } from "@/types";
import { cn } from "@/lib/utils";

interface CandidateCardProps {
    candidate: Candidate;
}

import Image from "next/image";

// ... existing imports

export function CandidateCard({ candidate }: CandidateCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [imgError, setImgError] = useState(false);
    const isLongBio = candidate.bio.length > 200; // Threshold for expansion

    return (
        <>
            <Card
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover bg-white ring-1 ring-gray-100 flex flex-col h-full"
            >
                <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden shrink-0">
                    {candidate.photoUrl && !imgError ? (
                        <Image
                            src={candidate.photoUrl}
                            alt={candidate.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <User className="h-32 w-32 text-gray-300" />
                    )}
                </div>

                <CardHeader className="pb-2 text-center">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                        {candidate.name}
                    </CardTitle>
                    <CardDescription className="text-accent font-semibold text-lg">
                        {candidate.role}
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-8 px-8 flex-grow flex flex-col">
                    <div className={cn(
                        "text-gray-600 italic leading-relaxed",
                        !isExpanded && isLongBio && "line-clamp-3"
                    )}>
                        {isExpanded ? (
                            candidate.bio.split('\n').map((paragraph, i) => (
                                <p key={i} className="mb-4 last:mb-0 text-left not-italic">
                                    {paragraph}
                                </p>
                            ))
                        ) : (
                            `"${candidate.bio}"`
                        )}
                    </div>

                    {isLongBio && (
                        <div className="mt-4 pt-4 border-t border-gray-100 w-full">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-primary hover:text-primary-dark hover:bg-primary/5 font-medium"
                            >
                                {isExpanded ? "Réduire" : "Lire la suite"}
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Modal for full view could be added here, but inline expansion is often smoother for mobile */}
        </>
    );
}
