import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales | Dommartin avec vous",
    description: "Informations légales, politique de confidentialité et conditions d'utilisation du site Dommartin avec vous.",
};

export default function MentionsLegalesPage() {
    return (
        <div className="min-h-screen bg-stone-50 py-20 font-sans">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Mentions Légales</h1>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12">

                    {/* Éditeur */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                            1. Éditeur du site
                        </h2>
                        <div className="text-gray-600 leading-relaxed pl-4 border-l-2 border-primary/20">
                            <p><strong className="text-gray-900">Nom :</strong> Jean-Jacques Rosaye</p>
                            <p><strong className="text-gray-900">Adresse :</strong> 94 rue de Clos 88200 Dommartin-lès-Remiremont</p>
                            <p><strong className="text-gray-900">Email :</strong> jeanjacquesrosaye@gmail.com</p>
                            <p><strong className="text-gray-900">Téléphone :</strong> 06 83 18 66 57</p>
                        </div>
                    </section>

                    {/* Responsable */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">
                            2. Responsable de la publication
                        </h2>
                        <div className="text-gray-600 leading-relaxed pl-4 border-l-2 border-primary/20">
                            <p><strong className="text-gray-900">Nom :</strong> Jean-Jacques Rosaye</p>
                            <p><strong className="text-gray-900">Email :</strong> jeanjacquesrosaye@gmail.com</p>
                        </div>
                    </section>

                    {/* Hébergement */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">
                            3. Hébergement
                        </h2>
                        <div className="text-gray-600 leading-relaxed pl-4 border-l-2 border-primary/20">
                            <p><strong className="text-gray-900">Nom :</strong> Vercel Inc.</p>
                            <p><strong className="text-gray-900">Adresse :</strong> 440 N Barranca Ave #4133 Covina, CA 91723</p>
                            <p><strong className="text-gray-900">Site web :</strong> vercel.com</p>
                        </div>
                    </section>

                    {/* Propriété intellectuelle */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">
                            4. Propriété intellectuelle
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            L’ensemble des contenus présents sur ce site (textes, images, logo) est protégé par le droit d’auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.
                        </p>
                    </section>

                    {/* Responsabilité */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">
                            5. Responsabilité
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Nous nous efforçons de fournir des informations exactes et à jour. Toutefois, nous ne pouvons garantir l’absence d’erreurs. Le site peut contenir des liens vers des sites externes dont nous ne maîtrisons pas le contenu.
                        </p>
                    </section>

                    {/* RGPD */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">
                            6. Données personnelles (RGPD)
                        </h2>
                        <div className="text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Les informations collectées via les formulaires sont destinées à la communication de la liste <strong>Dommartin avec vous</strong>. Elles ne seront jamais transmises à des tiers.
                            </p>
                            <p>
                                Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données en écrivant à : <a href="mailto:jeanjacquesrosaye@gmail.com" className="text-primary hover:underline font-medium">jeanjacquesrosaye@gmail.com</a>.
                            </p>
                            <p>
                                Vous pouvez également introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>).
                            </p>
                        </div>
                    </section>

                    {/* Cookies */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">
                            7. Cookies
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Ce site peut utiliser des cookies pour améliorer l’expérience utilisateur et réaliser des statistiques. Vous pouvez paramétrer votre navigateur pour refuser les cookies.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
