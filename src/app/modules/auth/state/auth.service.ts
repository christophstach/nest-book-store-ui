import { Injectable } from '@angular/core';
import { AuthState, AuthStore, JwtData } from './auth.store';

import jwtDecode from 'jwt-decode';


@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private authStore: AuthStore
  ) { }

  persistJwt(jwt: string) {
    const { picture, firstName, lastName, googleId } = jwtDecode(jwt) as JwtData;

    this.authStore.update({
      jwt,
      jwtData: {
        googleId,
        picture,
        firstName,
        lastName
      }
    });
  }
}
