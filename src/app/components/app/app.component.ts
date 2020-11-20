import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthQuery } from '../../modules/auth/state/auth.query';
import { combineLatest, Observable } from 'rxjs';
import { JwtData } from '../../modules/auth/state/auth.store';
import { AuthService } from '../../modules/auth/state/auth.service';
import { Router } from '@angular/router';
import { BooksQuery } from '../../modules/books/state/books.query';
import { ShoppingCartQuery } from '../../modules/shopping-cart/state/shopping-cart.query';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  jwtData$: Observable<JwtData | null>;
  loading$: Observable<boolean>;
  globalLoading$: Observable<boolean>;

  constructor(
      private booksQuery: BooksQuery,
      private shoppingCartQuery: ShoppingCartQuery,
      private authQuery: AuthQuery,
      private authService: AuthService,
      private cdr: ChangeDetectorRef,
      private router: Router,
  ) {
    this.jwtData$ = this.authQuery.jwtData$;
    this.loading$ = this.authQuery.selectLoading();
    this.globalLoading$ = combineLatest([
        this.booksQuery.selectLoading(),
        this.shoppingCartQuery.selectLoading(),
        this.authQuery.selectLoading(),
    ]).pipe(
        map((loadings) => loadings.reduce((acc, curr) => (acc || curr)))
    );
  }

  ngOnInit() {
  }

  login(){
    this.authService.loginWithGoogle();
  }

  logout() {
    this.router.navigate(['auth/logout']);
  }

  shoppingCart() {
    this.router.navigate(['cart']);
  }
}
