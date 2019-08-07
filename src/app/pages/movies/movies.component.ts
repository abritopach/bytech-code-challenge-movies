import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material';
import { withLatestFrom } from 'rxjs/operators';
import { FetchMovies } from 'src/app/store/actions/movies.actions';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  private displayedColumns: string[] = ['title', 'year', 'director', 'genre', 'actions'];
  private dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort, {static: true}) private sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) private paginator: MatPaginator; 
  private isLoading: boolean = true;

  // Reads the name of the store from the store class.
  @Select(state => state.catalog.movies) movies$: Observable<Movie[]>;

  constructor(public moviesService: MoviesService, private router: Router, private store: Store) { }

  ngOnInit() {
    /*
    this.moviesService.getMovies(1, 10000).subscribe(movies => {
      console.log('movies', movies);
      this.dataSource = new MatTableDataSource(movies);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
    */
    this.fetchMovies(1, 10000);
  }

  fetchMovies(page, limit) {
    this.store.dispatch(new FetchMovies({page: page, limit: limit})).pipe(withLatestFrom(this.movies$))
      .subscribe(([movies]) => {
        this.dataSource = new MatTableDataSource(movies.catalog.movies);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      },
      err => console.log('MoviesComponent::fetchMovies() | method called -> received error' + err)
    );
  }

  viewMovieDetails(movie) {
    const movieDetailsURL = `/movie/${movie.id}`;
    this.router.navigate([movieDetailsURL]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showMoviesCarousel() {
    const moviesCarouselURL = `/carousel`;
    this.router.navigate([moviesCarouselURL]);
  }

}
