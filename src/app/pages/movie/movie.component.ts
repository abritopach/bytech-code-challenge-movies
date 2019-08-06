import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  private movie: Movie = null;

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovieDetails(id);
  }

  getMovieDetails(id: string) {
    this.moviesService.getMovieDetails(id).subscribe((movie: Movie) => {
      console.log('movie', movie);
      this.movie = movie;
    });
  }

}
