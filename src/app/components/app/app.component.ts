import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthQuery } from '../../modules/auth/state/auth.query';
import { Observable } from 'rxjs';
import { JwtData } from '../../modules/auth/state/auth.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  googleAuthUrl: string;
  jwtData$: Observable<JwtData>

  constructor(
      private authQuery: AuthQuery
  ) {
    this.googleAuthUrl = environment.googleAuthUrl;
    this.jwtData$ = this.authQuery.jwtData$;
  }

  ngOnInit() {
  }
}
