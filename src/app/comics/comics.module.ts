import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from '@marvel-app/comics/comics-routing.module';
import { FindComicPageComponent } from '@marvel-app/comics/find-comic-page/find-comic-page.component';
import { ViewComicPageComponent } from '@marvel-app/comics/view-comic-page/view-comic-page.component';
import { ComicCollectionPageComponent } from '@marvel-app/comics/comic-collection-page/comic-collection-page.component';

@NgModule({
  imports: [
    CommonModule,
    ComicsRoutingModule
  ],
  declarations: [
    FindComicPageComponent,
    ViewComicPageComponent,
    ComicCollectionPageComponent
  ]
})
export class ComicsModule { }
