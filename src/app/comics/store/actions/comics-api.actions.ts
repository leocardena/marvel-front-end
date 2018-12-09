import { Action } from '@ngrx/store';
import { Comic } from '@marvel-app/comics/models/comic.model';

export enum ComicsApiActionTypes {
  SearchAllSuccess = '[Comics/API] Search All Success',
  SearchAllFailure = '[Comics/API] Search All Failure',
  SearchOneSuccess = '[Comics/API] Search One Success',
  SearchOneFailure = '[Comics/API] Search One Failure'
}

export class SearchAllSuccess implements Action {
  readonly type = ComicsApiActionTypes.SearchAllSuccess;

  constructor(public payload: Comic[]) {}
}

export class SearchAllFailure implements Action {
  readonly type = ComicsApiActionTypes.SearchAllFailure;

  constructor(public payload: any) {}
}

export class SearchOneSuccess implements Action {
  readonly type = ComicsApiActionTypes.SearchOneSuccess;

  constructor(public payload: Comic) {}
}

export class SearchOneFailure implements Action {
  readonly type = ComicsApiActionTypes.SearchOneFailure;

  constructor(public payload: any) {}
}

export type ComicsApiActionsUnion =
  | SearchAllSuccess
  | SearchAllFailure
  | SearchOneSuccess
  | SearchOneFailure;
