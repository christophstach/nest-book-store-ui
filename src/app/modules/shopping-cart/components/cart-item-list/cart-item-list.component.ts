import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { ShoppingCartItem } from '../../entities/shopping-cart-item.entity';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShoppingCartService } from '../../state/shopping-cart.service';
import { ShoppingCartQuery } from '../../state/shopping-cart.query';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss']
})
export class CartItemListComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  displayedColumns$ = of(['type', 'title', 'removeFromCart']);
  loading$ = this.shoppingCartQuery.selectLoading();
  items$ = this.shoppingCartQuery.selectAll();

  constructor(
      private shoppingCartService: ShoppingCartService,
      private shoppingCartQuery: ShoppingCartQuery,
      private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.subscription = this.shoppingCartService.findAll().subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeFromCart(item: ShoppingCartItem) {
    this.subscription.add(
      this.shoppingCartService.remove(item).subscribe(() => {
        this.snackBar.open('Successfully removed item to cart', '', { duration: 5000 });
      })
    );
  }
}
