import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { FetchMovies, ClearState } from './../actions/movies.actions';
import { MoviesService } from '../../services/movies.service';


export class MoviesStateModel {
    movies: Movie[];
}

@State<MoviesStateModel>({
    name: 'catalog',
    defaults: {
        movies: [],
    }
})

export class MoviesState implements NgxsOnInit {

    constructor(private moviesService: MoviesService) {}

    @Selector()
    static getMovies(state: MoviesStateModel) {
        return state.movies;
    }

    @Selector()
    static movieById(state: MoviesStateModel) {
        return (id: string) => {
            return state.movies.filter(movie => movie.id === id)[0];
        };
    }

    ngxsOnInit(ctx: StateContext<MoviesStateModel>) {
        console.log('State initialized.');
        ctx.dispatch(new ClearState());
    }

    @Action(ClearState)
    clearState({ setState }: StateContext<MoviesStateModel>) {
        setState({
            movies: [],
        });
    }

    @Action(FetchMovies, { cancelUncompleted: true })
    fetchMovies({ getState, setState }: StateContext<MoviesStateModel>, { payload }) {
        console.log('MovieState::fetchMovies() | method called', payload);
        const { page, limit } = payload;
        if (getState().movies.length === 0) {
            return this.moviesService.getMovies(page, limit).pipe(
                catchError((x, caught) => {
                    return throwError(x);
                }),
                tap((result) => {
                const state = getState();
                setState({
                    ...state,
                    movies: [ ...state.movies, ...result ]
                });
            },
            (error) => {
                console.log('error', error.message);
            }));
        }
    }

}