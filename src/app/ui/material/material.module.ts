import { NgModule } from '@angular/core';

// Angular Material Components.
import { MatListModule, MatLineModule, MatToolbarModule, MatSidenavModule, MatSlideToggleModule, MatCardModule,
         MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule,
         MatSortModule } from '@angular/material';

import { ScrollingModule } from '@angular/cdk/scrolling';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  imports: [MatListModule, MatLineModule, MatToolbarModule, MatSidenavModule, MatSlideToggleModule, MatCardModule, MatButtonModule,
            MatIconModule, ScrollingModule, LayoutModule, MatFormFieldModule, MatInputModule,
            MatTableModule, MatPaginatorModule, MatSortModule],
  exports: [MatListModule, MatLineModule, MatToolbarModule, MatSidenavModule, MatSlideToggleModule, MatCardModule, MatButtonModule,
            MatIconModule, ScrollingModule, LayoutModule, MatFormFieldModule, MatInputModule, MatTableModule,
            MatPaginatorModule, MatSortModule]
})
export class MyCustomMaterialModule {}
