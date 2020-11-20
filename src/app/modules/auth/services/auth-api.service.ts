import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  private endpoint = environment.authEndpoint

  constructor(
      private http: HttpClient,
      @Inject(DOCUMENT) private document: Document
  ) { }

  loginWithGoogle() {
    this.document.location.href = `${this.endpoint}/auth/google`;
  }
}
