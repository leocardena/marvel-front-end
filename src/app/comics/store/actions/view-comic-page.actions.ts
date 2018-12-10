import { Action } from '@ngrx/store';

import { Comic } from '@marvel-app/comics/models/comic.model';

export enum ViewComicPageActionTypes {
  SearchComic = '[ViewComicPage] Search Comic',
  AddToCheckout = '[ViewComicPage] Add to Checkout'
}

export class SearchComic implements Action {
  readonly type = ViewComicPageActionTypes.SearchComic;
}

export class AddToCheckout implements Action {
  readonly type = ViewComicPageActionTypes.AddToCheckout;

  constructor(public payload: Comic) {}
}

export type ViewComicPageActionsUnion =
  | SearchComic
  | AddToCheckout;
