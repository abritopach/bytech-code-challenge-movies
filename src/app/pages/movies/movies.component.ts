import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  displayedColumns: string[] = ['title', 'year', 'director'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies(1, 50).subscribe(movies => {
      console.log('movies', movies);
      this.dataSource = new MatTableDataSource(movies);
      this.dataSource.sort = this.sort;
    });
  }

}
