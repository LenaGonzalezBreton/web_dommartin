import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ExternalLink, AlertTriangle, FileText, Newspaper, Tractor, Trees } from "lucide-react";

export const metadata: Metadata = {
    title: "Dans les médias | Dommartin avec vous",
    description: "Actualités, courrier aux acteurs économiques et couverture presse de la liste Dommartin avec Vous.",
};

export default function CommuniquePage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-4 py-8">
                    <Button asChild variant="ghost" className="mb-4 text-gray-600 hover:text-primary">
                        <Link href="/">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Retour à l'accueil
                        </Link>
                    </Button>
                    <div className="max-w-4xl mx-auto">
                        <span className="bg-primary/10 text-primary font-bold px-4 py-1.5 rounded-full text-sm inline-block mb-4">
                            DANS LES MÉDIAS
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 font-heading leading-tight mb-4">
                            Actualités & Publications
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* SECTION: Menuiserie Demangel - NEW */}
                    <section className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-10 rounded-3xl border border-amber-100 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-accent text-white font-bold px-4 py-1.5 rounded-full text-sm animate-pulse">
                                    A LA UNE
                                </span>
                                <span className="bg-amber-100 text-amber-800 font-bold px-4 py-1.5 rounded-full text-sm">
                                    Economie locale
                                </span>
                            </div>

                            <div className="flex items-start gap-4 mb-8">
                                <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                                    <Trees className="w-8 h-8 text-amber-700" />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 font-heading leading-tight">
                                        À la rencontre des acteurs économiques : Menuiserie Demangel
                                    </h2>
                                    <p className="text-lg text-amber-800 font-medium italic">
                                        "Une véritable histoire familiale locale depuis 1968, ancrée dans la commune."
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-10">
                                <p>
                                    Dans la continuité de notre lettre adressée aux acteurs économiques du territoire, nous avons reçu plusieurs retours par mail. <strong className="text-amber-700">Merci à celles et ceux qui ont pris le temps de nous répondre</strong> et de partager leurs réalités, leurs attentes et leurs idées.
                                </p>
                                <p>
                                    Nous avons également commencé une série de visites sur le terrain. Nous étions récemment à la rencontre du dirigeant de la <strong className="text-gray-900">menuiserie Demangel</strong>, implantée à Dommartin-les-Remiremont depuis 1968.
                                </p>
                                <p>
                                    Spécialisée dans les menuiseries extérieures bois, l’entreprise propose également depuis une quinzaine d’années des menuiseries mixtes bois/aluminium, pour répondre à l’évolution des besoins et des usages.
                                </p>
                                <p>
                                    Avec <strong className="text-amber-700">6 actifs</strong>, la menuiserie Demangel réalise une menuiserie sur mesure de qualité, et travaille avec des clients professionnels fidèles, devenus au fil des années de véritables partenaires.
                                </p>

                                <div className="bg-white/80 p-6 rounded-2xl border-l-4 border-accent shadow-sm my-8">
                                    <p className="italic text-gray-800 mb-2 font-medium">
                                        "Ces rencontres sont précieuses."
                                    </p>
                                    <p className="text-sm">
                                        Elles permettent de mieux comprendre les enjeux concrets des entreprises locales — emploi, savoir-faire, transmission, conditions d’activité — et de construire une <strong className="text-accent">action municipale réaliste, au plus près du terrain</strong>.
                                    </p>
                                </div>

                                <p>
                                    Nous poursuivrons ces visites dans les semaines à venir, avec la même conviction : un territoire est un ensemble, et ses entreprises, artisans, agriculteurs, commerçants, professions libérales et acteurs du tourisme apportent une pierre essentielle à la vie communale.
                                </p>
                            </div>

                            {/* Photos */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                                    <Image
                                        src="/menuiserie-demangel-1.jpg"
                                        alt="Rencontre avec l'équipe de la Menuiserie Demangel"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white font-medium text-sm">Échanges avec l'équipe dirigeante</p>
                                    </div>
                                </div>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                                    <Image
                                        src="/menuiserie-demangel-2.jpg"
                                        alt="Visite de l'atelier Menuiserie Demangel à Dommartin"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white font-medium text-sm">Au cœur de l'atelier de fabrication</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: Désenrochement aux Mézins */}
                    <section className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 md:p-10 rounded-3xl border border-green-100 shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-accent text-white font-bold px-4 py-1.5 rounded-full text-sm animate-pulse">
                                NOUVEAU
                            </span>
                            <span className="bg-green-100 text-green-700 font-bold px-4 py-1.5 rounded-full text-sm">
                                Environnement & Cadre de vie
                            </span>
                        </div>

                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                                <Trees className="w-7 h-7 text-green-700" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                    Désenrochement aux Mézins : un dossier à reprendre avec attention
                                </h2>
                                <p className="text-lg text-green-800 font-medium italic">
                                    "Un esprit de transparence, de concertation et de préservation de notre cadre de vie."
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                            <p>
                                Nous nous sommes rendus sur les rives de la <strong className="text-green-700">Moselotte</strong>, au niveau du site des Mézins, afin d&apos;évoquer le dossier des travaux de désenrochement envisagés sur ce secteur et les conséquences possibles qu&apos;un tel projet pourrait entraîner.
                            </p>
                            <p>
                                Ce déplacement nous a permis de constater la situation sur le terrain et d&apos;échanger sur les enjeux environnementaux, paysagers et de sécurité liés à ce projet, ainsi que sur ses impacts potentiels pour le cadre de vie et les usages locaux.
                            </p>
                            <p>
                                Ce type de projet appelle une <strong className="text-green-700">information transparente et préalable des habitants</strong>, afin qu&apos;ils puissent connaître les objectifs, mesurer les impacts possibles et contribuer aux échanges en amont des arbitrages.
                            </p>
                            <div className="bg-white/60 p-4 rounded-xl border-l-4 border-green-500 italic">
                                C&apos;est pourquoi ce dossier mérite d&apos;être repris avec une attention approfondie, dans un esprit de transparence, de concertation et de préservation de notre cadre de vie. Nous continuerons à suivre ce sujet et à vous tenir informés des éléments et des prochaines étapes.
                            </div>
                        </div>

                        {/* Photos */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    src="/mezins-moselotte.jpg"
                                    alt="Désenrochement aux Mézins - Rives de la Moselotte"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    src="/mezins-moselotte-2.jpg"
                                    alt="Désenrochement aux Mézins - Visite sur le terrain"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* SECTION: Visite au GAEC des Mitreuches */}
                    <section className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10 rounded-3xl border border-primary/20 shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-primary/10 text-primary font-bold px-4 py-1.5 rounded-full text-sm">
                                Sur le terrain
                            </span>
                        </div>

                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                                <Tractor className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium mb-1">Samedi 14 février 2026</p>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                    Visite au GAEC des Mitreuches
                                </h2>
                            </div>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                            <p>
                                Nos colistiers étaient récemment en visite au <strong className="text-primary">GAEC des Mitreuches</strong> afin d&apos;échanger avec Rémi et Colin, à la tête d&apos;une exploitation en GAEC dynamique et engagée.
                            </p>
                            <p>
                                L&apos;exploitation compte <strong>120 vaches laitières</strong> (sur un cheptel total d&apos;environ 300 animaux) et s&apos;étend sur <strong>200 hectares</strong>, exploités en pâturage, en fauche et en cultures, notamment de maïs sur les terres labourables.
                            </p>
                            <p>
                                Ces échanges, francs et constructifs, nous ont permis de mieux comprendre les réalités du monde agricole local, ses contraintes comme ses perspectives. Ils nous confortent dans notre volonté d&apos;être <strong className="text-primary">à l&apos;écoute du tissu économique</strong> de notre commune et de soutenir les acteurs qui font vivre notre territoire.
                            </p>
                        </div>

                        {/* Photo grid - 3 photos */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md md:col-span-1">
                                <Image
                                    src="/gaec-mitreuches-1.jpg"
                                    alt="Visite au GAEC des Mitreuches - Découverte des installations"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md md:col-span-1">
                                <Image
                                    src="/gaec-mitreuches-2.jpg"
                                    alt="Visite au GAEC des Mitreuches - Échanges dans l'étable"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md md:col-span-1">
                                <Image
                                    src="/gaec-mitreuches-3.jpg"
                                    alt="Visite au GAEC des Mitreuches - Échanges en extérieur"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Séparateur */}
                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-gray-400 font-medium text-sm uppercase tracking-wider">Publications</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    {/* SECTION PRINCIPALE: Courrier aux acteurs économiques */}
                    <section className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-md">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-primary/10 text-primary font-bold px-4 py-1.5 rounded-full text-sm">
                                Acteurs économiques
                            </span>
                        </div>

                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                                <FileText className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                    Courrier aux acteurs économiques
                                </h2>
                                <p className="text-lg text-primary font-medium italic">
                                    "Une phase d'écoute et de concertation pour construire ensemble un diagnostic partagé."
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                            <p>
                                Dans le cadre de la démarche « <strong className="text-primary">Dommartin avec vous !</strong> », nous avons adressé une lettre aux acteurs économiques de la commune afin d'engager une phase d'écoute et de concertation. L'objectif est de recueillir vos priorités, difficultés et propositions pour construire un diagnostic partagé et identifier des leviers concrets en faveur de l'activité locale.
                            </p>
                            <p>
                                L'intégralité de la lettre est disponible via le lien ci-dessous.
                            </p>
                        </div>

                        {/* Rectificatif */}
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl mb-8">
                            <p className="text-amber-800 font-medium flex items-start gap-2">
                                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                                <span>
                                    <strong>Rectificatif :</strong> une première version de la lettre comportait une erreur dans l'adresse mail. Nous vous confirmons que la bonne adresse est : <a href="mailto:dommartinavecvous@proton.me" className="text-primary underline font-bold">dommartinavecvous@proton.me</a>
                                </span>
                            </p>
                        </div>

                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg">
                            <a
                                href="/Acteurs économiques.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Consulter la lettre (PDF)
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </Button>
                    </section>

                    {/* Séparateur */}
                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-gray-400 font-medium text-sm uppercase tracking-wider">Revue de presse</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    {/* SECTION SECONDAIRE: Articles de presse (minimisée) */}
                    <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <Newspaper className="w-5 h-5 text-gray-500" />
                            <h3 className="text-lg font-bold text-gray-700">Articles de presse</h3>
                        </div>

                        <p className="text-gray-600 mb-6 text-sm">
                            Municipales 2026 : la liste « Dommartin avec Vous » se présente, menée par Jean-Jacques Rosaye.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild variant="outline" size="sm" className="text-gray-600 border-gray-300 hover:bg-gray-100">
                                <Link href="https://remiremontvallees.com/2026/01/19/dommartin-les-remiremont-municipales-2026-la-liste-dommartin-avec-vous-se-presente-menee-par-jean-jacques-rosaye/" target="_blank" rel="noopener noreferrer">
                                    RemiremontVallées.com
                                    <ExternalLink className="ml-2 w-3 h-3" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="sm" className="text-gray-600 border-gray-300 hover:bg-gray-100">
                                <Link href="https://www.facebook.com/share/1BsfkAgXqk/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                                    Voir sur Facebook (Aveu 88)
                                    <ExternalLink className="ml-2 w-3 h-3" />
                                </Link>
                            </Button>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
