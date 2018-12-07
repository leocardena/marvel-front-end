import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindComicPageComponent } from '@marvel-app/comics/find-comic-page/find-comic-page.component';
import { ComicCollectionPageComponent } from '@marvel-app/comics/comic-collection-page/comic-collection-page.component';
import { ViewComicPageComponent } from '@marvel-app/comics/view-comic-page/view-comic-page.component';

const routes: Routes = [
  { path: '', component: FindComicPageComponent },
  { path: 'collection', component: ComicCollectionPageComponent },
  { path: ':id', component: ViewComicPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
