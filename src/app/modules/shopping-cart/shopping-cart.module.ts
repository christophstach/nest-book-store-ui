import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { CartItemListComponent } from './components/cart-item-list/cart-item-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CartItemListComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    SharedModule
  ]
})
export class ShoppingCartModule { }
