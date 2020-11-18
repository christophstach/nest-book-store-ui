import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthQuery } from '../../auth/state/auth.query';

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
    return this.http.get(
      `${this.endpoint}/shopping-cart`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.authQuery.getValue().jwt}`
        })
      }
    );
  }
}
