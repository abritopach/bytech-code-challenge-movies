export class FetchMovies {
    static readonly type = '[Movies] Fetch movies';

    constructor(public payload: {page: number, limit: number}) {}
}

export class ClearState {
    static readonly type = '[Movies] Clear state';
}