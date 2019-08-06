export interface Movie {
    id: string;
    title: string;
    year: number;
    director: string | null;
    cast: string | null;
    genre: string | null;
    notes: string | null;
    poster: string | null;
}