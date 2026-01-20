import { Metadata } from "next";
import { CheckCircle, FileText, Users, Scale, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Charte d'engagement | Dommartin avec vous",
    description: "Les engagements des candidats de la liste Dommartin avec Vous.",
};

export default function ChartePage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 py-8">
                    <Button asChild variant="ghost" className="mb-4 text-gray-600 hover:text-primary">
                        <Link href="/">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Retour à l'accueil
                        </Link>
                    </Button>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-primary font-heading">
                        Notre Charte d’Engagement
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">

                    {/* Intro Card */}
                    <div className="bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100 mb-10">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-accent/10 p-4 rounded-2xl shrink-0">
                                <FileText className="w-12 h-12 text-accent" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Nous signons notre charte d’engagement</h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Les colistiers de « <strong className="text-primary">Dommartin avec Vous</strong> » s’engagent, pour toute la durée du mandat,
                                    à agir dans l’intérêt général, à décider de manière collégiale et à associer les habitants aux décisions importantes pour la commune.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Commitments List */}
                    <div className="grid gap-6 md:grid-cols-2 mb-12">
                        {/* Engagement 1 */}
                        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-primary">
                            <div className="flex items-start gap-4">
                                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Transparence</h3>
                                    <p className="text-gray-600">Sur nos décisions et nos actions au quotidien.</p>
                                </div>
                            </div>
                        </div>

                        {/* Engagement 2 */}
                        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-primary">
                            <div className="flex items-start gap-4">
                                <Scale className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Vote éclairé</h3>
                                    <p className="text-gray-600">Si les informations sont insuffisantes, la décision est reportée.</p>
                                </div>
                            </div>
                        </div>

                        {/* Engagement 3 */}
                        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-primary">
                            <div className="flex items-start gap-4">
                                <Users className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Consultation citoyenne</h3>
                                    <p className="text-gray-600">Systématique pour les investissements structurants.</p>
                                </div>
                            </div>
                        </div>

                        {/* Engagement 4 */}
                        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-primary">
                            <div className="flex items-start gap-4">
                                <FileText className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Respect des principes</h3>
                                    <p className="text-gray-600">Conformité à la Charte de l’élu local (CGCT, art. L.1111-1-1).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Signature Box */}
                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-6 md:p-12 text-center border border-gray-200 dashed-border relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 font-handwriting">
                                “ Signée par les candidat·e·s de la liste Dommartin avec vous ”
                            </h3>
                            {/* Hand-drawn underline effect or signature visual could go here */}
                            <div className="w-32 h-1 bg-accent/40 mx-auto rounded-full" />
                        </div>
                    </div>

                    {/* Download Button */}
                    <div className="mt-12 text-center">
                        <a
                            href="/charte.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
                        >
                            <FileText className="w-5 h-5" />
                            Télécharger la Charte au format PDF
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
