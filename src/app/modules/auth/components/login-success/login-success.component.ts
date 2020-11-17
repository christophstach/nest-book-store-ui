import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, mapTo, switchMapTo, tap } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';
import { AuthService } from '../../state/auth.service';
import { AuthQuery } from '../../state/auth.query';
import { JwtData } from '../../state/auth.store';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.scss']
})
export class LoginSuccessComponent implements OnInit, OnDestroy {
  jwtData$: Observable<JwtData>

  constructor(route: ActivatedRoute, private authService: AuthService, private authQuery: AuthQuery) {
    this.jwtData$ = route.paramMap.pipe(
      map(paramMap => {
        const jwt = paramMap.get('jwt');

        if(jwt) {
          return jwt;
        } else {
          throw new Error('No JWT provided');
        }
      }),
      tap(jwt => this.authService.persistJwt(jwt)),
      switchMapTo(this.authQuery.jwtData$)
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }



}
