import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/comics', pathMatch: 'full' },
  {
    path: 'comics',
    loadChildren: '@marvel-app/comics/comics.module#ComicsModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        scrollPositionRestoration: 'top'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
