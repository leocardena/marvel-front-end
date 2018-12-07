import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/comics', pathMatch: 'full' },
  {
    path: 'comics',
    loadChildren: '@marvel-app/comics/comics.module#ComicsModule',
  },
  {
    path: 'checkout',
    loadChildren: '@marvel-app/cart/cart.module#CartModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
