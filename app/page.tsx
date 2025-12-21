import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Leaf, Shield, GraduationCap } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-[90vh] flex items-center">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50" />

                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/50 to-teal-100/50 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 py-20 relative z-10">
                    <div className="mx-auto max-w-4xl text-center animate-fade-in">
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-2 mb-8 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                            <span className="text-sm font-medium text-gray-600">Élections Municipales 2026</span>
                        </div>

                        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl animate-slide-up">
                            Dommartin
                            <span className="block mt-2 gradient-text">
                                avec vous
                            </span>
                        </h1>

                        <p className="mt-8 text-xl text-gray-600 sm:text-2xl max-w-2xl mx-auto leading-relaxed">
                            Redonnons un <span className="font-semibold text-blue-600">souffle jeune</span> à
                            notre village et ses <span className="font-semibold text-teal-600">hameaux</span>.
                        </p>

                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-lg btn-shine bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 text-white">
                                <Link href="/programme">
                                    Découvrir le programme
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg border-2 hover:bg-gray-50">
                                <Link href="/l-equipe">
                                    <Users className="mr-2 h-5 w-5" />
                                    Rencontrer l'équipe
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold sm:text-4xl gradient-text inline-block">Nos Valeurs</h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Les principes qui guident notre action pour l'avenir de notre commune.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Heart, title: "Solidarité", desc: "Une ville où personne n'est laissé de côté", color: "text-rose-500", bg: "bg-rose-50" },
                            { icon: Leaf, title: "Écologie", desc: "Un environnement préservé pour nos enfants", color: "text-emerald-500", bg: "bg-emerald-50" },
                            { icon: Shield, title: "Sécurité", desc: "Une commune sûre et apaisée", color: "text-blue-500", bg: "bg-blue-50" },
                            { icon: GraduationCap, title: "Éducation", desc: "Les meilleures conditions pour apprendre", color: "text-amber-500", bg: "bg-amber-50" },
                        ].map((value, i) => (
                            <div key={i} className="group text-center p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border border-gray-100">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${value.bg} ${value.color} mb-6 group-hover:scale-110 transition-transform`}>
                                    <value.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "6", label: "Candidats engagés" },
                            { value: "8", label: "Engagements concrets" },
                            { value: "5", label: "Thématiques clés" },
                            { value: "2026", label: "Élections municipales" },
                        ].map((stat, i) => (
                            <div key={i} className="p-4">
                                <p className="text-5xl font-bold mb-2">{stat.value}</p>
                                <p className="text-blue-100">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
                        <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                            Prêts à nous rejoindre ?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Découvrez notre vision pour Dommartin-Lès-Remiremont et les femmes et hommes qui portent ce projet.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                                <Link href="/l-equipe">
                                    Découvrir l'équipe
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/programme">
                                    Voir le programme
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
