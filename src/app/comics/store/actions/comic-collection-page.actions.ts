import { Action } from '@ngrx/store';

export enum ComicCollectionPageActionTypes {
  LoadComics = '[Comic Collection Page] Load Comics'
}

export class LoadComics implements Action {
  readonly type = ComicCollectionPageActionTypes.LoadComics;
}

export type ComicCollectionPageActions = LoadComics;
