import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksQuery } from '../../state/books.query';
import { BooksService } from '../../state/books.service';
import { Book } from '../../entities/book.entity';
import { AuthQuery } from '../../../auth/state/auth.query';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  displayedColumns$: Observable<string[]>;

  books$ = this.booksQuery.selectAll();
  loading$ = this.booksQuery.selectLoading();
  jwtData$ = this.authQuery.jwtData$;

  constructor(
      private booksQuery: BooksQuery,
      private booksService: BooksService,
      private authQuery: AuthQuery,
  ) {
    this.subscription = this.booksService.findAll().subscribe();


    this.displayedColumns$ = this.jwtData$.pipe(
        map((jwtData) => {
          if (jwtData) {
            return ['id', 'title', 'author', 'isbn', 'publisher', 'publicationYear', 'addToCart'];
          } else {
            return ['id', 'title', 'author', 'isbn', 'publisher', 'publicationYear'];
          }
        })
    )
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



  addToCart(book: Book) {
    this.booksService.addToCart(book);
  }
}
