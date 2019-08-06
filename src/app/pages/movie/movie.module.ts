import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from 'src/app/common/shared-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MovieComponent
      }
    ]),
    SharedComponentsModule,
    FlexLayoutModule
  ]
})
export class MoviePageModule { }
