import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthQuery } from '../../auth/state/auth.query';
import { AddToShoppingCartDto } from '../dtos/add-to-shopping-cart.dto';
import { ShoppingCartItem } from '../entities/shopping-cart-item.entity';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartApiService {
  private endpoint = environment.shoppingCartEndpoint

  constructor(
      private http: HttpClient,
      private authQuery: AuthQuery
  ) { }

  findAll() {
    return this.http.get<ShoppingCartItem[]>(
      `${this.endpoint}/shopping-cart`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.authQuery.getValue().jwt}`
        })
      }
    );
  }

  addToShoppingCart(addToShoppingCartDto: AddToShoppingCartDto) {
    return this.http.post(
      `${this.endpoint}/shopping-cart`,
      addToShoppingCartDto,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.authQuery.getValue().jwt}`
        })
      }
    );
  }

  removeFromShoppingCart(id: string) {
    return this.http.delete(
        `${this.endpoint}/shopping-cart/${id}`,
          {
              headers: new HttpHeaders({
                  Authorization: `Bearer ${this.authQuery.getValue().jwt}`
              })
          }
    );
  }
}
