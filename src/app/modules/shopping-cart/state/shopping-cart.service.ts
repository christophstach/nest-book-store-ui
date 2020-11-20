import { Injectable } from '@angular/core';
import { ShoppingCartStore } from './shopping-cart.store';
import { catchError, tap } from 'rxjs/operators';
import { ShoppingCartApiService } from '../services/shopping-cart-api.service';
import { ShoppingCartItem } from '../entities/shopping-cart-item.entity';


@Injectable({ providedIn: 'root' })
export class ShoppingCartService {

  constructor(
    private shoppingCartStore: ShoppingCartStore,
    private shoppingCartApiService: ShoppingCartApiService,
  ) {
      this.shoppingCartStore.setLoading(false);
  }

  findAll() {
    this.shoppingCartStore.setLoading(true);

    return this.shoppingCartApiService.findAll().pipe(
      tap(items => {
        this.shoppingCartStore.set(items);
        this.shoppingCartStore.setLoading(false);
      }),
    )
  }

  remove(item: ShoppingCartItem) {
    this.shoppingCartStore.setLoading(true);
    return this.shoppingCartApiService.removeFromShoppingCart(item.id).pipe(
        tap(() => {
            this.shoppingCartStore.remove(item.id)
            this.shoppingCartStore.setLoading(true);
        })
    );
  }
}
