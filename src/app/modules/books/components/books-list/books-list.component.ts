import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksQuery } from '../../state/books.query';
import { BooksService } from '../../state/books.service';
import { Book } from '../../entities/book.entity';
import { AuthQuery } from '../../../auth/state/auth.query';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingCartApiService } from '../../../shopping-cart/services/shopping-cart-api.service';
import { ShoppingCartItemType } from '../../../shopping-cart/entities/shopping-cart-item.entity';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  displayedColumns$: Observable<string[]>;

  books$ = this.booksQuery.selectAll();
  loading$ = this.booksQuery.selectLoading();
  jwtData$ = this.authQuery.jwtData$;

  constructor(
      private booksQuery: BooksQuery,
      private booksService: BooksService,
      private authQuery: AuthQuery,
      private shoppingCartApiService: ShoppingCartApiService,
      private snackBar: MatSnackBar
  ) {
    this.displayedColumns$ = this.jwtData$.pipe(
        map((jwtData) => {
          if (jwtData) {
            return ['title', 'author', 'publisher', 'addToCart'];
          } else {
            return ['title', 'author', 'publisher'];
          }
        })
    )
  }

  ngOnInit() {
    this.booksService.findAll().subscribe();
  }

  addToShoppingCart(book: Book) {
      this.shoppingCartApiService.addToShoppingCart({
          title: book.title,
          referenceUrl: '',
          referenceId: book.id,
          type: ShoppingCartItemType.Book
      }).subscribe(() => {
          this.snackBar.open('Successfully added book to cart', '', {duration: 5000});
      })
  }
}
