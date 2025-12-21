import { Metadata } from "next";
import { programme } from "@/data/programme";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import * as LucideIcons from "lucide-react";
import { LucideIcon, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Le Programme",
    description:
        "Découvrez le programme de Dommartin-Lès-Remiremont Ensemble : sécurité, environnement, transport, éducation et culture.",
};

// Helper to get icon component by name
function getIcon(iconName: string): LucideIcon {
    const icons = LucideIcons as unknown as Record<string, LucideIcon>;
    return icons[iconName] || LucideIcons.Circle;
}

// Group programme points by category
function groupByCategory(points: typeof programme) {
    return points.reduce((acc, point) => {
        if (!acc[point.category]) {
            acc[point.category] = [];
        }
        acc[point.category].push(point);
        return acc;
    }, {} as Record<string, typeof programme>);
}

// Category colors
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
    "Sécurité": { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    "Environnement": { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
    "Transport": { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
    "Éducation": { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
    "Culture": { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200" },
};

export default function ProgrammePage() {
    const groupedProgramme = groupByCategory(programme);
    const categories = Object.keys(groupedProgramme);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="mx-auto max-w-2xl text-center animate-fade-in">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Notre <span className="gradient-text">Programme</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            8 engagements concrets pour transformer Dommartin-Lès-Remiremont
                            et améliorer le quotidien de tous les habitants.
                        </p>
                    </div>
                </div>
            </section>

            {/* Programme by Category */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {categories.map((category, catIndex) => {
                            const colors = categoryColors[category] || { bg: "bg-gray-50", text: "text-gray-600", border: "border-gray-200" };

                            return (
                                <div
                                    key={category}
                                    className="animate-fade-in"
                                    style={{ animationDelay: `${catIndex * 150}ms` }}
                                >
                                    {/* Category Header */}
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} ${colors.text} font-semibold mb-6`}>
                                        <CheckCircle2 className="h-5 w-5" />
                                        {category}
                                    </div>

                                    {/* Accordion */}
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        {groupedProgramme[category].map((point) => {
                                            const IconComponent = getIcon(point.iconName);
                                            return (
                                                <AccordionItem
                                                    key={point.id}
                                                    value={point.id}
                                                    className={`border ${colors.border} rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow`}
                                                >
                                                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50/50 [&[data-state=open]]:bg-gray-50/50">
                                                        <div className="flex items-center gap-4 text-left">
                                                            <div className={`p-2 rounded-lg ${colors.bg}`}>
                                                                <IconComponent className={`h-5 w-5 ${colors.text}`} />
                                                            </div>
                                                            <span className="font-semibold text-gray-900">{point.title}</span>
                                                        </div>
                                                    </AccordionTrigger>
                                                    <AccordionContent className="px-6 pb-6">
                                                        <div className="pl-14 pt-2">
                                                            <p className="text-gray-600 leading-relaxed">
                                                                {point.content}
                                                            </p>
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            );
                                        })}
                                    </Accordion>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Summary CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
                <div className="container mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Un programme ambitieux et réaliste</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto">
                        Chaque engagement a été pensé avec les habitants et pourra être mis en œuvre
                        grâce à une gestion rigoureuse des finances communales.
                    </p>
                </div>
            </section>
        </div>
    );
}
