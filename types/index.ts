export interface Candidate {
    id: string;
    name: string;
    role: string;
    bio: string;
    photoUrl: string;
    imagePosition?: string;
    isVisible: boolean;
}

export interface ProgrammePoint {
    id: string;
    category: string;
    title: string;
    content: string;
    iconName: string;
}
