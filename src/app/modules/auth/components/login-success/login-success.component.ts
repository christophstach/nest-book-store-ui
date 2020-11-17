import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../state/auth.service';
import { AuthQuery } from '../../state/auth.query';
import { JwtData } from '../../state/auth.store';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.scss']
})
export class LoginSuccessComponent implements OnInit, OnDestroy {
    subscription: Subscription;
  jwtData$: Observable<JwtData | null>

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,
      private authQuery: AuthQuery
  ) {
    this.subscription = this.route.paramMap.pipe(
      tap((paramMap) => {
        const jwt = paramMap.get('jwt');

        if(jwt) {
            this.authService.persistJwt(jwt);
            this.router.navigate(['auth/login/success']);
        }
      }),
    ).subscribe();

    this.jwtData$ = this.authQuery.jwtData$;
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
