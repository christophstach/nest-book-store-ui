import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./modules/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
