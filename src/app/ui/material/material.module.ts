import { NgModule } from '@angular/core';

// Angular Material Components.
import {  MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule,
            MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule,
            MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule,
            MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule,
            MatProgressSpinnerModule],
  exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule,
            MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule,
            MatProgressSpinnerModule]
})
export class MyCustomMaterialModule {}
