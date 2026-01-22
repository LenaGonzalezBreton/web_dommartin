import { Metadata } from "next";
import { TeamList } from "./TeamList";

export const metadata: Metadata = {
    title: "L'Équipe | Dommartin avec vous",
    description:
        "Rencontrez l'équipe engagée pour Dommartin-lès-Remiremont. Une équipe renouvelée et à l'écoute.",
};

export default function LEquipePage() {
    return <TeamList />;
}
