import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSuccessComponent } from './components/login-success/login-success.component';
import { LoginFailureComponent } from './components/login-failure/login-failure.component';

const routes: Routes = [
  {
    path: 'login/success/:jwt',
    component: LoginSuccessComponent
  },
  {
    path: 'login/failure',
    component: LoginFailureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
