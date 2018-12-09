import { Action } from '@ngrx/store';

export enum ViewComicPageActionTypes {
  LoadViewComicPages = '[ViewComicPage] Load ViewComicPages'
}

export class LoadViewComicPages implements Action {
  readonly type = ViewComicPageActionTypes.LoadViewComicPages;
}

export type ViewComicPageActions = LoadViewComicPages;
