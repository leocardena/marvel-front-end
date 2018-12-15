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
  private commonRarity = 'Common';
  private rareRarity = 'Rare';

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
  searchComics(params): Observable<GetBaseResponse<Comic>> {
    return this.http
      .get<{ data: GetBaseResponse<Comic> }>(this.URL, { params })
      .pipe(map(response => {
        const baseResponse: GetBaseResponse<Comic> = response.data;
        baseResponse.results = this.markComicsAsRare(baseResponse.results);
        return baseResponse;
      }));
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
          .pipe(map(response => {
            const baseResponse: GetBaseResponse<Comic> = response.data;
            const comic: Comic = baseResponse.results[0];
            comic.rarity = this.commonRarity;
            baseResponse.results = [comic];
            return baseResponse;
          }));
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

  /**
  * Marks the comics as rare at random
  *
  * @param comics - the comics
  * @returns the marked comics
  */
  private markComicsAsRare(comics: Comic[]) {
      const comicsCopy = [...comics];
      const marked = [];

      // 10 percent
      const total = Math.floor(comicsCopy.length * 0.1);

      for (let i = 1; i <= total; i++) {
        const randomIndex = this.randomInteger(0, comicsCopy.length - 1);
        const comic: Comic = comicsCopy.splice(randomIndex, 1).pop();
        comic.rarity = this.rareRarity;
        marked.push(comic);
      }

      return [...marked, ...this.markComicsAsCommon(comicsCopy)];
  }

  /**
  * Marks the comics as common
  *
  * @param comics - the comics
  * @returns the marked comics
  */
  private markComicsAsCommon(comics: Comic[]) {
    return comics.map(comic => {
      return { ...comic, rarity: 'Common' };
    });
  }

  /**
  * Get a random integer between min and max.
  *
  * @param min - min number
  * @param max - max number
  * @returns a random integer
  */
  private randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}

