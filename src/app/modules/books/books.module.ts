import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './components/books-list/books-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BooksListComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ]
})
export class BooksModule {
  constructor() {
   console.log('BooksModule');
  }
}
