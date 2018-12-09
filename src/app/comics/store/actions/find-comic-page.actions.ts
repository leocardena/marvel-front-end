import { Action } from '@ngrx/store';

export enum FindComicPageActionTypes {
  SearchComics = '[FindComicPage] Search Comics'
}

export class SearchComics implements Action {
  readonly type = FindComicPageActionTypes.SearchComics;
}

export type FindComicPageActionsUnion = SearchComics;
