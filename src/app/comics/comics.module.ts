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
import { ComicsPreviewListComponent } from '@marvel-app/comics/components/comics-preview-list/comics-preview-list.component';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ComicsRoutingModule,
    StoreModule.forFeature('comics', fromComic.reducers),
    EffectsModule.forFeature([ComicEffects])
  ],
  declarations: [
    FindComicPageComponent,
    ViewComicPageComponent,
    ComicCollectionPageComponent,
    ComicsPreviewListComponent,
    ComicDetailComponent
  ],
  providers: [ MarvelComicsService ]
})
export class ComicsModule { }
