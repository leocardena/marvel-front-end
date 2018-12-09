import { Action } from '@ngrx/store';

export enum ViewComicPageActionTypes {
  SearchComic = '[ViewComicPage] Search Comic'
}

export class SearchComic implements Action {
  readonly type = ViewComicPageActionTypes.SearchComic;
}

export type ViewComicPageActionsUnion = SearchComic;
