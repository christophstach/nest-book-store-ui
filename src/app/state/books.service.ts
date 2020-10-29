import { Injectable } from '@angular/core';
import { BookStoreApiService } from '../services/book-store-api.service';
import { BooksStore } from './books.store';
import { tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class BooksService {

  constructor(
    private booksStore: BooksStore, 
    private bookStoreApiService: BookStoreApiService
  ) { }

  findAll() {
    return this.bookStoreApiService.findAll().pipe(
      tap(books => this.booksStore.set(books))
    )
  }


}
