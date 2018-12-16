import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '@marvel-app/core/containers/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/comics', pathMatch: 'full' },
  {
    path: 'comics',
    loadChildren: '@marvel-app/comics/comics.module#ComicsModule'
  },
  { path: '**', component: NotFoundPageComponent },
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
