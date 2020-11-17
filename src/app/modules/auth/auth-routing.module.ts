import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSuccessComponent } from './components/login-success/login-success.component';
import { LoginFailureComponent } from './components/login-failure/login-failure.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: 'login/success/:jwt',
    component: LoginSuccessComponent
  },
  {
    path: 'login/success',
    component: LoginSuccessComponent
  },
  {
    path: 'login/failure',
    component: LoginFailureComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
