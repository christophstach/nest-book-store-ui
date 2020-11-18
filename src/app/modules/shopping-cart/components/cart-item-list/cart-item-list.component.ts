import { Component, OnInit } from '@angular/core';
import { ShoppingCartApiService } from '../../services/shopping-cart-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss']
})
export class CartItemListComponent implements OnInit {
  items$: Observable<any>;

  constructor(private shoppingCartApiService: ShoppingCartApiService) {
    this.items$ = this.shoppingCartApiService.findAll();
  }

  ngOnInit(): void {
  }

}
