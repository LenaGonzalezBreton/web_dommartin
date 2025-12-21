import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Dommartin avec vous | Campagne Municipale 2026",
        template: "%s | Dommartin avec vous",
    },
    description:
        "Dommartin avec vous : un souffle jeune pour notre village et ses hameaux. Découvrez notre programme et notre équipe pour les élections municipales 2026.",
    keywords: [
        "Dommartin-Lès-Remiremont",
        "Dommartin avec vous",
        "élections municipales",
        "campagne",
        "programme",
        "2026",
    ],
    authors: [{ name: "Dommartin avec vous" }],
    openGraph: {
        type: "website",
        locale: "fr_FR",
        siteName: "Dommartin avec vous",
        title: "Dommartin avec vous | Campagne Municipale 2026",
        description:
            "Dommartin avec vous : un souffle jeune pour notre village et ses hameaux. Découvrez notre programme et notre équipe.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dommartin avec vous | Campagne Municipale 2026",
        description:
            "Dommartin avec vous : un souffle jeune pour notre village et ses hameaux. Découvrez notre programme et notre équipe.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={inter.className}>
                <div className="flex min-h-screen flex-col">
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
