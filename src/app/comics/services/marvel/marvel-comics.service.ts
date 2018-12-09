import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { State, select } from '@ngrx/store';

import { Comic } from '@marvel-app/comics/models/comic.model';
import { GetBaseResponse } from '@marvel-app/shared/models/get-base-response.model';
import * as fromComics from '@marvel-app/comics/store/reducers';

@Injectable()
export class MarvelComicsService {

  private URL = '/comics';

  constructor(
    private http: HttpClient,
    private store: State<fromComics.State>
  ) { }

  /**
   * Search comics in Marvel's API
   *
   * @param options search options can be formatType, limit and offset
   * @returns an observable of GetBaseResponse<Comic>
   */
  searchComics(options): Observable<GetBaseResponse<Comic>> {
    return this.http
      .get<{ data: GetBaseResponse<Comic> }>(
        this.URL,
        {
          params: options
        }
      )
      .pipe(map(response => response.data));
  }

  /**
   * Search a single comic in Marvel's API
   *
   * @param comicId the commic id
   * @returns an observable of GetBaseResponse<Comic>
   */
  searchComic(comicId: string): Observable<GetBaseResponse<Comic>> {
    return this.hasComicInStore(comicId).pipe(
      switchMap(inStore => {
        if (inStore) {
          const baseResponse = {} as GetBaseResponse<Comic>;
          baseResponse.results = [inStore];
          return of(baseResponse);
        }

        return this.http
          .get<{ data: GetBaseResponse<Comic> }>(`${this.URL}/${comicId}`)
          .pipe(map(response => response.data));
      })
    );
  }

  /**
   * Check if comic exists in store
   *
   * @param comicId the commic id to check
   */
  private hasComicInStore(comicId) {
    return this.store.pipe(
      select(fromComics.getComicEntities),
      map(entities => entities[comicId]),
      take(1)
    );
  }
}

