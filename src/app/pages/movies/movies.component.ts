import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material';

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

  constructor(public moviesService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.moviesService.getMovies(1, 10000).subscribe(movies => {
      console.log('movies', movies);
      this.dataSource = new MatTableDataSource(movies);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }

  viewMovieDetails(movie) {
    console.log('MoviesComponent::viewMovieDetails | method called', movie);
    const movieDetailsURL = `/movie/${movie.id}`;
    this.router.navigate([movieDetailsURL]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
