export function LienSocialIntergen() {
    return (
        <div className="mt-12">
            {/* En-tête */}
            <div className="bg-gradient-to-br from-primary-light/10 to-primary/5 p-6 md:p-8 rounded-2xl border border-primary-light/20 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading">
                    Dommartin&nbsp;: relier les générations pour renforcer notre village
                </h3>
                <p className="text-lg text-gray-700 font-medium">
                    👉 Notre équilibre repose sur la complémentarité des générations.
                </p>
                <p className="text-gray-600 mt-3 leading-relaxed">
                    Nous ne sommes ni un village dortoir, ni un village en déclin.<br />
                    Nous sommes un village à consolider, à fédérer et à projeter.
                </p>
            </div>

            {/* Ce que nous devons anticiper */}
            <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>📊</span> Ce que nous devons anticiper
            </h4>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
                {/* Vieillissement */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span>1️⃣</span> Le vieillissement progressif
                    </h5>
                    <p className="text-gray-600 text-sm mb-4">
                        Avec près d'un habitant sur trois de plus de 60&nbsp;ans, la question n'est pas seulement sociale&nbsp;: elle est stratégique.
                    </p>
                    <ul className="space-y-2 text-gray-600 text-sm mb-4">
                        {[
                            "Comment lutter contre l'isolement ?",
                            "Comment faciliter la mobilité vers les services ?",
                            "Comment permettre le maintien à domicile ?",
                            "Comment valoriser l'expérience et la mémoire locale ?",
                        ].map((q) => (
                            <li key={q} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary-light rounded-full mt-1.5 shrink-0" />
                                <span>{q}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm font-medium text-primary-light">
                        Nos aînés sont une richesse humaine, associative et culturelle.
                    </p>
                </div>

                {/* Jeunesse */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span>2️⃣</span> L'enjeu jeunesse
                    </h5>
                    <p className="text-gray-600 text-sm mb-4">
                        Avec près de 28&nbsp;% de moins de 25&nbsp;ans, l'avenir du village se joue aussi maintenant.
                    </p>
                    <ul className="space-y-2 text-gray-600 text-sm mb-4">
                        {[
                            "Maintenir l'attractivité pour les jeunes familles",
                            "Soutenir l'école",
                            "Donner une place réelle à la jeunesse dans les décisions",
                            "Favoriser l'engagement citoyen",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary-light rounded-full mt-1.5 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm font-medium text-primary-light">
                        Une commune qui n'investit pas dans sa jeunesse se fragilise.
                    </p>
                </div>
            </div>

            {/* Faire de l'intergénérationnel une politique */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-primary-light/20 shadow-sm mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span>🤝</span> Faire de l'intergénérationnel une politique publique locale
                </h4>
                <p className="text-gray-600 mb-1">Nous voulons aller au-delà des animations ponctuelles.</p>
                <p className="text-gray-700 font-medium">Nous proposons une démarche structurée et durable&nbsp;:</p>
            </div>

            {/* Actions */}
            <div className="space-y-6">

                {/* 1. Créer du lien */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="bg-primary-light text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                        <span>🏛 Créer du lien intergénérationnel</span>
                    </h5>
                    <ul className="space-y-2 text-gray-600 text-sm mb-3">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary-light rounded-full mt-1.5 shrink-0" />
                            <span>Un <strong>Conseil Municipal des Jeunes</strong> renforcé / Un <strong>Comité des Aînés</strong> (ou des Sages) — ils choisiront leur nom</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary-light rounded-full mt-1.5 shrink-0" />
                            <span>Des rencontres communes régulières pour partager des projets</span>
                        </li>
                    </ul>
                    <p className="text-sm text-primary-light font-medium">
                        🎯 Objectif&nbsp;: créer une culture du dialogue intergénérationnel.
                    </p>
                </div>

                {/* 2. Rendez-vous réguliers */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="bg-primary-light text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                        <span>🍲 Lancer des rendez-vous réguliers</span>
                    </h5>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        {[
                            "Repas intergénérationnels à la cantine",
                            "Ateliers cuisine & patrimoine culinaire",
                            "Ateliers numériques partagés",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <span className="text-primary-light shrink-0">✔️</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 4. Banque de savoir-faire */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="bg-primary-light text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
                        <span>🧰 Banque de savoir-faire locale</span>
                    </h5>
                    <p className="text-gray-600 text-sm mb-3">Recenser les compétences&nbsp;:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["couture", "bricolage", "jardinage", "mémoire historique", "musique", "métiers"].map((c) => (
                            <span key={c} className="bg-primary-light/10 text-primary-light text-xs font-semibold px-3 py-1 rounded-full">
                                {c}
                            </span>
                        ))}
                    </div>
                    <p className="text-sm text-gray-600">
                        Créer un réseau d'entraide intergénérationnel structuré, piloté par la commune.
                    </p>
                </div>

                {/* 5. Mémoire vivante */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="bg-primary-light text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
                        <span>📖 Projet « Mémoire vivante de Dommartin »</span>
                    </h5>
                    <ul className="space-y-2 text-gray-600 text-sm mb-3">
                        {[
                            "Collecte de témoignages",
                            "Création d'un fonds communal d'archives orales",
                            "Participation des élèves",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary-light rounded-full mt-1.5 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm text-primary-light font-medium">👉 Renforce l'identité communale.</p>
                </div>

                {/* 6. Réflexion sur l'habitat */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="bg-primary-light text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</span>
                        <span>🏡 Réflexion sur l'habitat</span>
                    </h5>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        {[
                            "Analyser l'occupation de l'habitat sur Dommartin",
                            "Encourager des formes d'habitat adaptés",
                            "Favoriser la cohabitation senior / étudiant / jeune actif",
                            "Travailler avec les partenaires du territoire",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary-light rounded-full mt-1.5 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Conviction finale */}
            <div className="bg-gradient-to-br from-primary-light to-primary p-8 rounded-2xl text-white shadow-lg mt-8">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span>🎯</span> Notre conviction
                </h4>
                <p className="font-medium mb-4">
                    L'intergénérationnel n'est pas un supplément d'âme.
                </p>
                <p className="mb-1 text-sm opacity-90">C'est&nbsp;:</p>
                <ul className="space-y-2 mb-6">
                    {[
                        "un levier contre l'isolement",
                        "un outil de transmission",
                        "un facteur d'attractivité",
                        "un ciment social",
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                            <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="border-t border-white/20 pt-4 mt-4">
                    <p className="font-medium">
                        Dans un village comme Dommartin, tout le monde se connaît ou peut se connaître.
                    </p>
                    <p className="font-bold text-lg mt-1">Faisons de cette proximité une force.</p>
                </div>
            </div>
        </div>
    );
}
