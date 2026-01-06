import Link from "next/link";
import { Heart, Facebook, Instagram, Share2 } from "lucide-react";

export function Footer() {
    const siteUrl = "https://dommartin-ensemble.fr";
    const shareMessage = "Découvrez Dommartin avec vous - Élections Municipales 2026 !";

    return (
        <footer className="bg-stone-50 pt-20 pb-10 text-gray-600 border-t border-gray-200 font-sans">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand & Mission - Col 4 */}
                    <div className="md:col-span-4 lg:col-span-5 flex flex-col items-start">
                        <div className="flex items-center space-x-3 mb-6 group">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform duration-300">
                                D
                            </div>
                            <span className="text-xl font-bold text-gray-900 tracking-tight">
                                Dommartin <span className="text-primary">Avec Vous</span>
                            </span>
                        </div>
                        <p className="text-base leading-relaxed text-gray-600 mb-8 max-w-sm">
                            Un nouvel élan citoyen pour construire ensemble l'avenir de nos quartiers et de nos hameaux.
                            <br />
                            <span className="text-sm text-gray-500 mt-2 block">Élections municipales 2026</span>
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=61585026020662"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#1877F2] hover:border-[#1877F2] transition-all duration-300 shadow-sm hover:shadow-md"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links - Col 2 */}
                    <div className="md:col-span-3 lg:col-span-2">
                        <h3 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Navigation</h3>
                        <nav className="flex flex-col space-y-4">
                            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors flex items-center group">
                                <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                Accueil
                            </Link>
                            <Link href="/demarche" className="text-sm font-medium hover:text-primary transition-colors flex items-center group">
                                <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                La Démarche
                            </Link>
                            <Link href="/l-equipe" className="text-sm font-medium hover:text-primary transition-colors flex items-center group">
                                <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                L'Équipe
                            </Link>
                        </nav>
                    </div>

                    {/* Legal - Col 2 */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <h3 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Infos</h3>
                        <nav className="flex flex-col space-y-4">
                            <Link href="/mentions-legales" className="text-sm font-medium hover:text-primary transition-colors">
                                Mentions légales
                            </Link>
                            <Link href="mailto:dommartinavecvous@proton.me" className="text-sm font-medium hover:text-primary transition-colors">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* CTA - Col 3 */}
                    <div className="md:col-span-3">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2 text-sm">Soutenez le projet</h3>
                            <p className="text-xs text-gray-500 mb-4">Partagez le site autour de vous !</p>
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}&quote=${encodeURIComponent(shareMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            >
                                <Share2 className="h-4 w-4" />
                                Partager le site
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Dommartin avec vous.
                    </p>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                        <span>Fait avec</span>
                        <Heart className="h-3 w-3 text-red-500 fill-red-500 mx-0.5" />
                        <span>par des citoyens engagés</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
