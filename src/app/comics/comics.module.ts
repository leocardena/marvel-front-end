import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ComicsRoutingModule } from '@marvel-app/comics/comics-routing.module';
import { FindComicPageComponent } from '@marvel-app/comics/containers/find-comic-page/find-comic-page.component';
import { ViewComicPageComponent } from '@marvel-app/comics/containers/view-comic-page/view-comic-page.component';
import { ComicEffects } from '@marvel-app/comics/store/effects/comic.effects';
import { MarvelComicsService } from '@marvel-app/comics/services/marvel/marvel-comics.service';
import { CouponsService } from '@marvel-app/comics/services/coupons/coupons.service';
import * as fromComic from '@marvel-app/comics/store/reducers';
import { ComicsPreviewListComponent } from '@marvel-app/comics/components/comics-preview-list/comics-preview-list.component';
import { ComicDetailComponent } from '@marvel-app/comics/components/comic-detail/comic-detail.component';
import { CheckoutPageComponent } from '@marvel-app/comics/containers/checkout-page/checkout-page.component';
import { CheckoutItemsListComponent } from '@marvel-app/comics/components/checkout-items-list/checkout-items-list.component';
import { CouponsEffects } from '@marvel-app/comics/store/effects/coupons.effects';
import { MaterialModule } from '@marvel-app/material/material.module';
import { PipesModule } from '@marvel-app/shared/pipes';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CouponsPageComponent } from '@marvel-app/comics/containers/coupons-page/coupons-page.component';
import { CouponsListComponent } from '@marvel-app/comics/components/coupons-list/coupons-list.component';

const COMPONENTS = [
  FindComicPageComponent,
  ViewComicPageComponent,
  ComicsPreviewListComponent,
  ComicDetailComponent,
  CheckoutPageComponent,
  CheckoutItemsListComponent,
  CouponsPageComponent,
  CouponsListComponent
];

@NgModule({
  imports: [
    CommonModule,
    ComicsRoutingModule,
    PipesModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forFeature('comics', fromComic.reducers),
    EffectsModule.forFeature([
      ComicEffects,
      CouponsEffects
    ])
  ],
  declarations: COMPONENTS,
  providers: [
    MarvelComicsService,
    CouponsService
   ]
})
export class ComicsModule { }
