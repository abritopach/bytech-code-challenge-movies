import { Component, OnInit } from '@angular/core';
import { CardItem } from 'st-three-dimensional-card-carousel/dist/types/models/cardItem.model';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { Store } from '@ngxs/store';
import { MoviesState } from 'src/app/store/state/movies.state';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  private slides: CardItem[] = [];
  private slidesColors = ['#1abc9c', '#e67e22', '#e74c3c', '#2c3e50', '#2980b9',
  '#9b59b6', '#AFB42B', '#FFC107', '#B3E5FC', '#BDBDBD', '#C2185B', '#00BCD4'];
  private movies: Observable<Movie[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.getMovies();
  }


  getMovies() {
    this.movies = this.store.select(MoviesState.getMovies).pipe();
    this.movies.subscribe(movies => {
      this.builtCarouselSlides(movies);
    });
  }

  builtCarouselSlides(movies) {
    this.slides = [...movies.map((movie: any, index: number) => {
      return {
        id: index,
        title: movie.title + ' (' + movie.year + ')',
        description: movie.director,
        subtitle: {
            text: movie.genre,
            icon: 'fa fa-tag',
        },
        imgUrl: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        color: this.slidesColors[Math.floor(Math.random() * (11 - 1 + 1)) + 1],
        currentPlacement: 0,
      };
    })];
  }

  loadMore() {
    const cardCarouselElement = document.querySelector('st-3D-card-carousel');
        (cardCarouselElement as any).loadMore().then((newSlides: CardItem[]) => {
            console.log('loadMore newSlides: ', newSlides);
    });
  }

  handleAutoloop() {
    const cardCarouselElement = document.querySelector('st-3D-card-carousel');
    (cardCarouselElement as any).cycle();
  }

}
