import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../../common/shared-components.module';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MoviesComponent
      }
    ]),
    SharedComponentsModule
  ]
})
export class MoviesPageModule { }
