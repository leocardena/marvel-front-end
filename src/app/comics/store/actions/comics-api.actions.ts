import { Action } from '@ngrx/store';
import { Comic } from '@marvel-app/comics/models/comic.model';

export enum ComicsApiActionTypes {
  SearchSuccess = '[Comics/API] Search Success',
  SearchFailure = '[Comics/API] Search Failure',
}

export class SearchSuccess implements Action {
  readonly type = ComicsApiActionTypes.SearchSuccess;

  constructor(public payload: Comic[]) {}
}

export class SearchFailure implements Action {
  readonly type = ComicsApiActionTypes.SearchFailure;

  constructor(public payload: any) {}
}

export type ComicsApiActionsUnion = SearchSuccess
  | SearchFailure;
