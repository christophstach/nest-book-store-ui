import { Inject, Injectable } from '@angular/core';
import { AuthStore, JwtData } from './auth.store';

import jwtDecode from 'jwt-decode';
import { AuthApiService } from '../services/auth-api.service';
import { PersistState } from '@datorama/akita';


@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private authStore: AuthStore,
    private authApiService: AuthApiService,
    @Inject('persistStorage') private persistStorage: PersistState
  ) {
    this.authStore.setLoading(false);
  }

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
    this.authApiService.loginWithGoogle();
  }

  logout() {
    this.authStore.setLoading(true);
    this.authStore.update({
      jwtData: null,
      jwt: null
    });

    this.persistStorage.clearStore();
    this.authStore.setLoading(false);
  }
}
