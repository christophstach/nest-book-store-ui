import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginSuccessComponent } from './components/login-success/login-success.component';
import { LoginFailureComponent } from './components/login-failure/login-failure.component';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [LoginSuccessComponent, LoginFailureComponent, LogoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
      SharedModule
  ]
})
export class AuthModule { }
