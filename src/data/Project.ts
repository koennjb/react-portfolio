export interface Project {
    name: string;
    image: string;
    start: Date;
    end?: Date;
    company: string;
    url?: string;
    shortDescription: string;
    points: string[];
}
