import Link from "next/link";
import { Heart, Facebook, Instagram, Share2 } from "lucide-react";

export function Footer() {
    const siteUrl = "https://dommartin-ensemble.fr";
    const shareMessage = "Découvrez Dommartin avec vous - Élections Municipales 2026 !";

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-lg">
                                D
                            </div>
                            <span className="text-lg font-bold text-white">
                                Dommartin avec vous
                            </span>
                        </div>
                        <p className="text-sm text-gray-400">
                            Un souffle jeune pour le village et ses hameaux.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Navigation</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/" className="text-sm hover:text-blue-400 transition-colors">
                                Accueil
                            </Link>
                            <Link href="/l-equipe" className="text-sm hover:text-blue-400 transition-colors">
                                L'Équipe
                            </Link>
                            <Link href="/programme" className="text-sm hover:text-blue-400 transition-colors">
                                Le Programme
                            </Link>
                        </nav>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Informations</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/mentions-legales" className="text-sm hover:text-blue-400 transition-colors">
                                Mentions légales
                            </Link>
                            <p className="text-sm text-gray-400">
                                © {new Date().getFullYear()} Tous droits réservés.
                            </p>
                        </nav>
                    </div>

                    {/* Social Share */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Suivez-nous & Partagez</h3>
                        <div className="flex space-x-3 mb-6">
                            <a
                                href="https://www.facebook.com/profile.php?id=61585026020662"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                                aria-label="Suivez-nous sur Facebook"
                            >
                                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                                aria-label="Suivez-nous sur Instagram"
                            >
                                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                        </div>

                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}&quote=${encodeURIComponent(shareMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 font-medium"
                        >
                            <Share2 className="h-4 w-4" />
                            Partager le site
                        </a>
                        <p className="text-xs text-gray-500 mt-2">
                            Aidez-nous à faire connaître notre projet !
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
                    <p className="flex items-center justify-center gap-1">
                        Fait avec <Heart className="h-4 w-4 text-red-500" /> pour Dommartin-Lès-Remiremont
                    </p>
                </div>
            </div>
        </footer>
    );
}
