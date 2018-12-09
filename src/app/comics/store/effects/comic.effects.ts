import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  FindComicPageActions,
  ComicsApiActions
} from '@marvel-app/comics/store/actions';
import { MarvelComicsService } from '@marvel-app/comics/services/marvel/marvel-comics.service';
import { GetBaseResponse } from '@marvel-app/shared/models/get-base-response';
import { Comic } from '@marvel-app/comics/models/comic.model';

@Injectable()
export class ComicEffects {

  @Effect()
  searchComics$: Observable<Action> = this.actions$.pipe(
    ofType(FindComicPageActions.FindComicPageActionTypes.SearchComics),
    switchMap(() => {
      const options = {
        offset: 0,
        limit: 10,
        formatType: 'comic'
      };
      return this.marvelComicsService
        .searchComics(options).pipe(
          map((response: GetBaseResponse<Comic>) => new ComicsApiActions.SearchSuccess(response.results)),
          catchError(error => of(new ComicsApiActions.SearchFailure(error)))
        );
    })
  );

  constructor(
    private actions$: Actions,
    private marvelComicsService: MarvelComicsService
  ) {}
}
