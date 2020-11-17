import { Injectable } from '@angular/core';
import produce from 'immer';
import { Store, StoreConfig } from '@datorama/akita';

export interface JwtData {
  googleId: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface AuthState {
  jwt: string | null;
  jwtData: JwtData | null
}

export function createInitialState(): AuthState {
  return {
    jwt: null,
    jwtData: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth', producerFn: produce })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState()) ;
  }
}
