"use client";

import Image from "next/image";

export function Vitalite() {
    return (
        <div className="mt-10 space-y-10">
            {/* Introduction */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-accent/20 shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    À Dommartin-lès-Remiremont, l'économie locale est bien plus présente qu'on ne l'imagine. Derrière l'image d'un village agréable à vivre, il y a aussi une réalité quotidienne : des femmes et des hommes qui travaillent ici, produisent ici, entreprennent ici.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Artisans, commerçants, entreprises, professions libérales, acteurs du bâtiment et des services, agriculteurs… ce tissu économique est réel, varié et engagé. Il crée de l'emploi, rend des services essentiels, participe à l'attractivité de la commune et soutient également la vie associative et les événements locaux.
                </p>
            </div>

            {/* Démarche de terrain */}
            <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">🤝</span>
                    Une démarche de terrain, fondée sur l&apos;écoute
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Plutôt que de rester dans les intentions générales, nous avons choisi de commencer par le concret : écrire aux acteurs économiques, puis aller à leur rencontre, directement dans leurs entreprises et sur leurs exploitations. Ces échanges ont fait ressortir une attente simple : pouvoir s'appuyer sur une commune qui écoute, oriente et facilite.
                </p>

                {/* Photos */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="/visite-exploitation-agricole.jpg"
                            alt="Visite d'une exploitation agricole avec robot de traite DeLaval"
                            width={600}
                            height={400}
                            className="w-full h-56 object-cover"
                        />
                        <p className="text-xs text-gray-500 italic px-3 py-2 bg-gray-50">
                            Visite d'une exploitation agricole locale — robot de traite DeLaval
                        </p>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="/visite-acteurs-economiques.jpg"
                            alt="Rencontre avec des acteurs économiques locaux"
                            width={600}
                            height={400}
                            className="w-full h-56 object-cover"
                        />
                        <p className="text-xs text-gray-500 italic px-3 py-2 bg-gray-50">
                            Rencontre avec des acteurs économiques du territoire
                        </p>
                    </div>
                </div>
            </div>

            {/* Identité forêt / bois / agriculture */}
            <div className="bg-gradient-to-br from-green-50 to-accent/5 p-6 md:p-8 rounded-2xl border border-accent/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                    🌲 Une identité économique à préserver : forêt, bois et agriculture
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Parmi nos forces, nous avons la chance d'avoir encore, sur la commune et autour, une économie de production :
                </p>
                <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                        <span>
                            <strong>La forêt et la filière bois</strong>, emblématiques des Vosges, avec des savoir-faire et des métiers qui structurent notre territoire ;
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                        <span>
                            <strong>L'agriculture</strong>, qui façonne nos paysages, contribue à la qualité de vie et porte une identité rurale forte.
                        </span>
                    </li>
                </ul>
                <p className="mt-4 text-gray-700 font-medium italic border-l-4 border-accent pl-4">
                    Ces métiers sont exigeants, essentiels, et pourtant fragilisés. Notre responsabilité est de les valoriser et de les soutenir, pour qu'ils restent ici et continuent de faire vivre notre territoire.
                </p>
            </div>

            {/* Ce que la commune peut faire */}
            <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    Ce que la commune peut faire, concrètement
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Le développement économique se construit aussi à l'échelle intercommunale, mais la commune a un rôle déterminant : être un interlocuteur de proximité, un facilitateur et un point d'entrée clair.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-accent/40 transition-colors">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">🪧</span>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Signalétique économique</h4>
                                <p className="text-sm text-gray-600">Rendre les activités plus visibles, avec une signalétique adaptée et cohérente</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-accent/40 transition-colors">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">📋</span>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Registre communal des entreprises</h4>
                                <p className="text-sm text-gray-600">Mieux connaître et valoriser le tissu local, grâce à un registre tenu à jour</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-accent/40 transition-colors">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">☕</span>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Petit-déjeuner des acteurs économiques</h4>
                                <p className="text-sm text-gray-600">Un rendez-vous régulier de dialogue réunissant élus, acteurs locaux, porteurs de projets et partenaires institutionnels</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-accent/40 transition-colors">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">🚜</span>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Portes ouvertes agricoles</h4>
                                <p className="text-sm text-gray-600">Travailler avec les exploitants agricoles à l'organisation de portes ouvertes, sur la base du volontariat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Propositions intercommunales */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-primary/20 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                    🏛️ Porter des propositions à l&apos;échelle intercommunale
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Le développement économique se construit aussi avec la Communauté de communes de la Porte des Vosges Méridionales. Nous voulons y être force de proposition et relais de terrain, notamment sur :
                </p>
                <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                        <span>Une démarche pour <strong>mieux valoriser nos savoir-faire</strong> et renforcer la visibilité du territoire ;</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                        <span>Une <strong>stratégie intégrant les enjeux de transition</strong> au service des entreprises (énergie, adaptation, sobriété), à porter à l'échelle intercommunale.</span>
                    </li>
                </ul>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-br from-accent to-accent/80 p-6 md:p-8 rounded-2xl text-white shadow-lg">
                <h3 className="text-xl font-bold mb-4">Une commune utile, accueillante et engagée</h3>
                <p className="leading-relaxed mb-4 opacity-95">
                    Soutenir l'économie locale, ce n'est pas un thème de communication : c'est soutenir l'emploi, renforcer la vie associative, préserver l'identité forestière et rurale, et préparer l'avenir de Dommartin-lès-Remiremont avec sérieux et responsabilité.
                </p>
                <p className="font-semibold text-lg">
                    Nous voulons une commune à l'écoute, facilitatrice et engagée — un point d'entrée clair pour celles et ceux qui souhaitent s'implanter ou se développer.
                </p>
            </div>
        </div>
    );
}
