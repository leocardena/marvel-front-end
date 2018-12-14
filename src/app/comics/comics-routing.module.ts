import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindComicPageComponent } from '@marvel-app/comics/containers/find-comic-page/find-comic-page.component';
import { ViewComicPageComponent } from '@marvel-app/comics/containers/view-comic-page/view-comic-page.component';
import { CheckoutPageComponent } from '@marvel-app/comics/containers/checkout-page/checkout-page.component';

const routes: Routes = [
  { path: '', component: FindComicPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: ':id', component: ViewComicPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
