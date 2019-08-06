import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', loadChildren: './pages/movies/movies.module#MoviesPageModule' },
  { path: 'movie/:id', loadChildren: './pages/movie/movie.module#MoviePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- Debugging purposes only.
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
