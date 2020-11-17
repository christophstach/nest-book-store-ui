import { Inject, Injectable } from '@angular/core';
import { AuthState, AuthStore, JwtData } from './auth.store';

import jwtDecode from 'jwt-decode';
import { environment } from '../../../../environments/environment';
import { DOCUMENT } from '@angular/common';


@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private authStore: AuthStore,
    @Inject(DOCUMENT) private document: Document
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

    this.authStore.setLoading(false);
  }

  loginWithGoogle() {
    this.authStore.setLoading(true);
    this.document.location.href = environment.googleAuthUrl;
  }

  logout() {
    this.authStore.update({
      jwtData: null,
      jwt: null
    });

    this.authStore.setLoading(false);
  }
}
