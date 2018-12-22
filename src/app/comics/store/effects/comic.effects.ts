import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, withLatestFrom, filter, exhaustMap } from 'rxjs/operators';

import {
  FindComicPageActions,
  ComicsApiActions,
  ViewComicPageActions
} from '@marvel-app/comics/store/actions';
import { MarvelComicsService } from '@marvel-app/comics/services/marvel/marvel-comics.service';
import { GetBaseResponse } from '@marvel-app/shared/models/get-base-response.model';
import { Comic } from '@marvel-app/comics/models/comic.model';
import * as fromRoot from '@marvel-app/store/reducers';
import * as fromComics from '@marvel-app/comics/store/reducers';

@Injectable()
export class ComicEffects {

  /**
   * Search many comics
  */
  @Effect()
  searchComics$: Observable<Action> = this.actions$.pipe(
    ofType(FindComicPageActions.FindComicPageActionTypes.SearchComics),
    withLatestFrom(this.store.pipe(select(fromComics.getTotalComics))),
    filter(([action, total]) => total <= 1),
    exhaustMap(() => {
      const options = {
        offset: 0,
        limit: 15,
        formatType: 'comic'
      };
      return this.marvelComicsService
        .searchComics(options).pipe(
          map((response: GetBaseResponse<Comic>) => new ComicsApiActions.SearchAllSuccess(response.results)),
          catchError(error => of(new ComicsApiActions.SearchAllFailure(error)))
        );
    })
  );

  /**
   * Search a single comic by path param
  */
  @Effect()
  searchComic$: Observable<Action> = this.actions$.pipe(
    ofType(ViewComicPageActions.ViewComicPageActionTypes.SearchComic),
    withLatestFrom(this.rootStore.pipe(select(fromRoot.getRouterState))),
    map(([action, router]) => router.state && router.state.params.id),
    exhaustMap(id => this.marvelComicsService
      .searchComic(id).pipe(
        map((response: GetBaseResponse<Comic>) => new ComicsApiActions.SearchOneSuccess(response.results[0])),
        catchError(error => of(new ComicsApiActions.SearchOneFailure(error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private marvelComicsService: MarvelComicsService,
    private rootStore: Store<fromRoot.State>,
    private store: Store<fromComics.State>
  ) {}
}
