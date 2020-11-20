import { Injectable } from '@angular/core';
import produce from 'immer';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ShoppingCartItem } from '../entities/shopping-cart-item.entity';

export interface ShoppingCartState extends EntityState<ShoppingCartItem, string>, ActiveState { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'shoppingCart', producerFn: produce })
export class ShoppingCartStore extends EntityStore<ShoppingCartState> {
  constructor() {
    super({ loading: false }) ;
  }
}
