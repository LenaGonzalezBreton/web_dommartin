import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit", // Alternative to Garet (Geometric Sans)
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Dommartin avec vous | Projet citoyen participatif 2026",
        template: "%s | Dommartin avec vous - Municipales 2026",
    },
    description:
        "Dommartin avec vous : un projet citoyen participatif pour Dommartin-lès-Remiremont. Rejoignez la démarche pour construire ensemble l'avenir de notre commune et de ses hameaux.",
    keywords: [
        "Dommartin-Lès-Remiremont",
        "Mairie Dommartin-Lès-Remiremont",
        "Élections municipales 2026",
        "Dommartin avec vous",
        "Projet citoyen",
        "Participatif",
        "Liste citoyenne",
        "Vote",
        "Vosges",
    ],
    authors: [{ name: "L'équipe Dommartin avec vous" }],
    openGraph: {
        type: "website",
        locale: "fr_FR",
        siteName: "Dommartin avec vous",
        title: "Dommartin avec vous | Le projet citoyen pour 2026",
        description:
            "Rejoignez la dynamique citoyenne pour Dommartin-lès-Remiremont. Un projet participatif construit avec vous, pour vous.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dommartin avec vous | Municipales 2026",
        description:
            "Le projet citoyen et participatif pour Dommartin-lès-Remiremont. Découvrez notre démarche et rejoignez-nous !",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${montserrat.variable} ${outfit.variable} font-sans`}>
                <div className="flex min-h-screen flex-col">
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
