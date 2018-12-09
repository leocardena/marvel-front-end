import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Comic } from '@marvel-app/comics/models/comic.model';
import { GetBaseResponse } from '@marvel-app/shared/models/get-base-response';

@Injectable()
export class MarvelComicsService {

  private URL = '/comics';

  constructor(private http: HttpClient) { }

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
}

