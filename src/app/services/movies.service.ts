import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout, retryWhen, delay } from 'rxjs/operators';

import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly URL_BASE: string = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {
  }

  getMovies(page: number,limit: number): Observable<Movie[]> {
    return this.http
    // Type-checking the response => .get<Movie[]>
    .get<Movie[]>(this.URL_BASE + `?_page=${page}&_limit=${limit}`)
    .pipe(
      retryWhen(error => error.pipe(delay(500))),
      timeout(5000)
    );
  }
}
