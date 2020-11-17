import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http: HttpClient) { }

  loginByToken(tokenId: string) {
    return this.http.post<{ jwt: string }>(environment.tokenLoginUrl, { tokenId }).pipe(
        map(response => response.jwt)
    );
  }
}
