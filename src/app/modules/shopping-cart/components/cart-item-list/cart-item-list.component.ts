import { Component, OnInit } from '@angular/core';
import { ShoppingCartApiService } from '../../services/shopping-cart-api.service';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ShoppingCartItem } from '../../entities/shopping-cart-item.entity';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss']
})
export class CartItemListComponent implements OnInit {
  loading$: BehaviorSubject<boolean>;
  displayedColumns$: BehaviorSubject<string[]>;
  items$: BehaviorSubject<ShoppingCartItem[]>;

  constructor(
      private shoppingCartApiService: ShoppingCartApiService,
      private snackBar: MatSnackBar
  ) {
    this.displayedColumns$ = new BehaviorSubject<string[]>(['type', 'title', 'removeFromCart']);
    this.loading$ = new BehaviorSubject<boolean>(true);
    this.items$ = new BehaviorSubject([] as ShoppingCartItem[]);

    this.shoppingCartApiService.findAll().pipe(
      tap(items => {
        this.loading$.next(false);
        this.items$.next(items);
      })
    ).subscribe();
  }

  ngOnInit(): void {
  }

  removeFromCart(item: ShoppingCartItem) {
    this.shoppingCartApiService.removeFromShoppingCart(item.id).subscribe(() => {
      this.items$.next(this.items$.value.filter(i => i.id != item.id));
      this.snackBar.open('Successfully removed item to cart', '', { duration: 5000 });
    });
  }

}
