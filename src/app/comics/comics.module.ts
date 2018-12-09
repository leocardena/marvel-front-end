import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ComicsRoutingModule } from '@marvel-app/comics/comics-routing.module';
import { FindComicPageComponent } from '@marvel-app/comics/containers/find-comic-page/find-comic-page.component';
import { ViewComicPageComponent } from '@marvel-app/comics/containers/view-comic-page/view-comic-page.component';
import { ComicCollectionPageComponent } from '@marvel-app/comics/containers/comic-collection-page/comic-collection-page.component';
import { ComicEffects } from '@marvel-app/comics/store/effects/comic.effects';
import { MarvelComicsService } from '@marvel-app/comics/services/marvel/marvel-comics.service';
import * as fromComic from '@marvel-app/comics/store/reducers';

@NgModule({
  imports: [
    CommonModule,
    ComicsRoutingModule,
    StoreModule.forFeature('comic', fromComic.reducers),
    EffectsModule.forFeature([ComicEffects])
  ],
  declarations: [
    FindComicPageComponent,
    ViewComicPageComponent,
    ComicCollectionPageComponent
  ],
  providers: [ MarvelComicsService ]
})
export class ComicsModule { }
