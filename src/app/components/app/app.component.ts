import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthQuery } from '../../modules/auth/state/auth.query';
import { Observable } from 'rxjs';
import { JwtData } from '../../modules/auth/state/auth.store';
import { AuthService } from '../../modules/auth/state/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  jwtData$: Observable<JwtData | null>;
  loading$: Observable<boolean>;

  constructor(
      private authQuery: AuthQuery,
      private authService: AuthService,
      private cdr: ChangeDetectorRef,
      private router: Router
  ) {
    this.jwtData$ = this.authQuery.jwtData$;
    this.loading$ = this.authQuery.selectLoading();
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
