import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from 'src/app/common/shared-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CarouselComponent
      }
    ]),
    SharedComponentsModule,
    FlexLayoutModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselPageModule { }
