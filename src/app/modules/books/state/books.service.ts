import { Injectable } from '@angular/core';
import { BookStoreApiService } from '../services/book-store-api.service';
import { BooksStore } from './books.store';
import { tap } from 'rxjs/operators';
import { Book } from '../entities/book.entity';


@Injectable({ providedIn: 'root' })
export class BooksService {

  constructor(
    private booksStore: BooksStore,
    private bookStoreApiService: BookStoreApiService
  ) { }

  findAll() {
    this.booksStore.setLoading(true);

    return this.bookStoreApiService.findAll().pipe(
      tap(books => {
        this.booksStore.set(books);
        this.booksStore.setLoading(false);
      }),
    )
  }

  addToCart(book: Book) {

  }
}
