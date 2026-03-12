import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhotoCarousel } from "@/components/photo-carousel";
import { ArrowLeft, ArrowRight, ExternalLink, AlertTriangle, FileText, Newspaper, Tractor, Trees } from "lucide-react";

export const metadata: Metadata = {
    title: "Dans les médias | Dommartin avec vous",
    description: "Actualités, courrier aux acteurs économiques et couverture presse de la liste Dommartin avec Vous.",
};

const professionFoiPhotos = [
    { src: "/profession-foi-1.png", alt: "Profession de foi - Page 1" },
    { src: "/profession-foi-2.jpg", alt: "Profession de foi - Page 2" },
    { src: "/profession-foi-3.png", alt: "Profession de foi - Page 3" },
];

const fermeMoineauxPhotos = [
    { src: "/moineaux-1.jpg", alt: "Ferme Aux Moineaux - Photo 1" },
    { src: "/moineaux-2.png", alt: "Ferme Aux Moineaux - Photo 2" },
    { src: "/moineaux-3.png", alt: "Ferme Aux Moineaux - Photo 3" },
    { src: "/moineaux-4.png", alt: "Ferme Aux Moineaux - Photo 4" },
    { src: "/moineaux-5.png", alt: "Ferme Aux Moineaux - Photo 5" },
];
const THUMB_VISIBLE = 5;

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

                    {/* SECTION: Profession de foi */}
                    <section id="profession-foi" className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-10 rounded-3xl border border-amber-100 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-accent text-white font-bold px-4 py-1.5 rounded-full text-sm animate-pulse">
                                    A LA UNE
                                </span>
                                <span className="bg-amber-100 text-amber-800 font-bold px-4 py-1.5 rounded-full text-sm">
                                    Elections Municipales
                                </span>
                            </div>

                            <div className="flex items-start gap-4 mb-8">
                                <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                                    <FileText className="w-8 h-8 text-amber-700" />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 font-heading leading-tight">
                                        Dommartin : un projet pour rassembler et préparer l’avenir
                                    </h2>
                                    <p className="text-lg text-amber-800 font-medium italic">
                                        &quot;L’équipe Dommartin avec vous&quot;
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-10">
                                <p>
                                    À l’approche de l’élection de ce dimanche, nous avons souhaité partager avec les habitants notre profession de foi.
                                </p>
                                <p>
                                    À travers cette profession de foi, nous partageons avec vous notre démarche fondée sur l’écoute des habitants et les priorités que nous portons pour l’avenir de Dommartin. <strong className="text-gray-900">Améliorer le cadre de vie, soutenir la vie associative, renforcer les services et préparer l’avenir de notre village</strong> font partie des engagements que nous proposons.
                                </p>
                                <p>
                                    Nous restons bien sûr toutes et tous disponibles pour échanger avec vous, répondre à vos questions et écouter vos idées. Le dialogue avec les habitants est au cœur de notre démarche.
                                </p>

                                <div className="bg-white/80 p-6 rounded-2xl border-l-4 border-accent shadow-sm my-8">
                                    <p className="italic text-gray-800 mb-2 font-medium">
                                        Depuis le début, nous menons cette campagne avec une conviction simple : être disponibles, à l’écoute et respectueux de chacun.
                                    </p>
                                    <p className="text-sm font-bold text-accent">
                                        Nous ne voulons pas diviser les Picosés.<br />
                                        Nous voulons rassembler et construire ensemble l’avenir de Dommartin.
                                    </p>
                                </div>
                            </div>

                            {/* Images de la profession de foi */}
                            <div className="mt-10 max-w-2xl mx-auto">
                                <PhotoCarousel photos={professionFoiPhotos} />
                            </div>
                        </div>
                    </section>

                    {/* SECTION: Ferme Aux Moineaux */}
                    <section id="ferme-moineaux" className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 md:p-10 rounded-3xl border border-green-100 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-green-600 text-white font-bold px-4 py-1.5 rounded-full text-sm animate-pulse">
                                    NOUVEAU
                                </span>
                                <span className="bg-green-100 text-green-800 font-bold px-4 py-1.5 rounded-full text-sm">
                                    Agriculture & Tourisme
                                </span>
                            </div>

                            <div className="flex items-start gap-4 mb-8">
                                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                                    <Tractor className="w-8 h-8 text-green-700" />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 font-heading leading-tight">
                                        Visite de l’équipe « Dommartin avec vous » à la Ferme Aux Moineaux
                                    </h2>
                                    <p className="text-lg text-green-800 font-medium italic">
                                        Rencontre avec notre colistier Thomas et son épouse Sofiane.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-10">
                                <p>
                                    Dans le cadre de nos rencontres avec les acteurs de la vie locale, l’équipe <strong className="text-gray-900">Dommartin avec vous</strong> s’est rendue à la Ferme Aux Moineaux, exploitée par notre colistier Thomas et son épouse Sofiane.
                                </p>
                                <p>
                                    La composition de notre liste reflète notre volonté de rassembler des habitants représentant les différents secteurs d’activité de la commune. <strong className="text-green-700">Cette diversité est essentielle pour construire un projet municipal équilibré</strong> et attentif aux réalités du territoire.
                                </p>
                                <p>
                                    Installés sur une ferme de montagne d’environ 50 hectares, Sofiane et Thomas développent plusieurs activités complémentaires qui s’inscrivent dans <strong className="text-gray-900">une démarche respectueuse de la nature</strong>.
                                </p>
                                
                                <div className="bg-white/80 p-6 rounded-2xl border-l-4 border-green-500 shadow-sm my-8">
                                    <h3 className="font-bold text-gray-900 mb-2">Des activités complémentaires et locales :</h3>
                                    <ul className="list-disc pl-5 space-y-3 text-gray-700">
                                        <li>
                                            <strong className="text-green-800">Élevage ovin bio :</strong> Ils élèvent tout d’abord des brebis en agriculture biologique, nourries exclusivement à l’herbe ou au foin produit sur la ferme. La viande est commercialisée en vente directe, favorisant une économie très locale : les animaux sont nés, élevés et abattus sur le territoire.
                                        </li>
                                        <li>
                                            <strong className="text-green-800">Élevage équin :</strong> La ferme accueille également un élevage de chevaux de race Franches-Montagnes, élevés en plein air et en troupeau.
                                        </li>
                                        <li>
                                            <strong className="text-green-800">Tourisme rural :</strong> En parallèle de ces activités agricoles, Thomas et son épouse ont développé une activité touristique, avec un gîte de groupe pouvant accueillir jusqu’à 25 personnes ainsi que deux chambres d’hôtes. Cette offre contribue à l’attractivité touristique de notre commune et à la découverte de notre environnement naturel.
                                        </li>
                                    </ul>
                                </div>

                                <p>
                                    Cette visite a été l’occasion de mieux comprendre leur travail, leur organisation entre élevage et accueil touristique, mais aussi leur <strong className="text-gray-900">attachement à notre territoire</strong>.
                                </p>
                                <p className="italic font-medium text-gray-800">
                                    Nous remercions chaleureusement Sofiane et Thomas pour leur accueil et pour le partage de leur passion pour la nature et la vie rurale.
                                </p>
                            </div>

                            {/* Images Carousel */}
                            <div className="mt-10 max-w-2xl mx-auto">
                                <PhotoCarousel photos={fermeMoineauxPhotos} />
                            </div>
                        </div>
                    </section>

                    {/* SECTION: Maison Louis - Affinage de fromages */}
                    <section className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-amber-50 text-amber-700 font-bold px-4 py-1.5 rounded-full text-sm">
                                    Economie locale
                                </span>
                            </div>

                            <div className="flex items-start gap-4 mb-8">
                                <div className="bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                                    <Trees className="w-8 h-8 text-amber-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 font-heading leading-tight">
                                        Rencontre avec les acteurs économiques : la Maison Louis
                                    </h2>
                                    <p className="text-lg text-amber-700 font-medium italic">
                                        &quot;Une belle entreprise picosée, dynamique et tournée vers l&apos;avenir.&quot;
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-10">
                                <p>
                                    Dans le cadre de nos rencontres régulières avec les acteurs économiques de notre village, nous poursuivons nos visites afin de mieux comprendre leurs activités, leurs projets et les éventuelles préoccupations qu&apos;ils peuvent rencontrer.
                                </p>
                                <p>
                                    C&apos;est dans cet esprit que la <strong className="text-amber-700">Maison Louis</strong> nous a récemment accueillis dans ses locaux d&apos;affinage de fromages ainsi que dans son magasin.
                                </p>
                                <p>
                                    Entreprise picosée, la Maison Louis a été créée en 1994 au centre du hameau de Pont. Face au développement de son activité, elle a construit en 2019 de nouveaux locaux situés à proximité de la rue du Haut des Rang.
                                </p>
                                <p>
                                    Spécialisé dans l&apos;affinage de fromages fermiers, biologiques ou non, et principalement de munsters, <strong className="text-gray-900">Bernard Louis</strong> travaille en lien étroit avec le territoire : chaque semaine, il est approvisionné en fromages blancs par trois exploitations situées dans un rayon d&apos;environ 10 km.
                                </p>
                                <p>
                                    Au fil des années, l&apos;entreprise a également développé ses propres spécialités. Parmi elles, un fromage fermier plus fondant, présenté dans une boîte en bois et destiné à être chauffé avant dégustation, baptisé <strong className="text-amber-700">« le Louis d&apos;🟡 »</strong>.
                                </p>
                                <p>
                                    Après trois à quatre semaines d&apos;affinage, les munsters fermiers, les Louis d&apos;🟡 et les fromages fermiers fumés au bois de hêtre sont expédiés dans toute la France, notamment vers le marché de Rungis, afin d&apos;approvisionner crémeries, revendeurs spécialisés et tables de restaurants.
                                </p>

                                <div className="bg-white/80 p-6 rounded-2xl border-l-4 border-accent shadow-sm my-8">
                                    <p className="italic text-gray-800 mb-2 font-medium">
                                        Le Panier de Louis
                                    </p>
                                    <p className="text-sm">
                                        En complément de cette activité, le magasin « Le Panier de Louis » propose à la vente une sélection de produits locaux : boissons, pains de la Grenouille, gâteaux, confiseries et bien sûr les produits issus de l&apos;atelier d&apos;affinage voisin. Un système de <strong className="text-accent">casiers en libre-service</strong>, accessible à toute heure, permet désormais aux habitants et visiteurs de se procurer ces spécialités en dehors des horaires classiques d&apos;ouverture.
                                    </p>
                                </div>

                                <p>
                                    Cette visite nous a permis de découvrir une belle entreprise picosée, dynamique et tournée vers l&apos;avenir, qui emploie aujourd&apos;hui <strong className="text-amber-700">cinq personnes</strong> au sein de ses deux structures et porte encore de nombreux projets.
                                </p>
                            </div>

                            {/* Photos */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                                    <Image
                                        src="/maison-louis-1.png"
                                        alt="Rencontre avec Bernard Louis devant les locaux d'affinage"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white font-medium text-sm">Échanges devant les locaux d&apos;affinage</p>
                                    </div>
                                </div>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                                    <Image
                                        src="/maison-louis-2.png"
                                        alt="Visite des caves d'affinage de la Maison Louis"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white font-medium text-sm">Visite des caves d&apos;affinage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: Menuiserie Demangel */}
                    <section className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-10 rounded-3xl border border-amber-100 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
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
