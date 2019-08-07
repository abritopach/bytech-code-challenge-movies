import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/models/movie.model';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { MoviesState } from 'src/app/store/state/movies.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  private movie: Movie = null;
  private selectedMovie: Observable<Movie>;

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService,
              private store: Store) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovieDetails(id);
  }

  getMovieDetails(id: string) {
    /*
    this.moviesService.getMovieDetails(id).subscribe((movie: Movie) => {
      console.log('movie', movie);
      this.movie = movie;
    });
    */

    this.selectedMovie = this.store.select(MoviesState.movieById).pipe(map(filterFn => filterFn(id)));
    this.selectedMovie.subscribe(movie => {
      this.movie = movie;
    });
  }

}
