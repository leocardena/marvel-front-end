import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromSearch from '@marvel-app/comics/store/reducers/search.reducer';
import * as fromComics from '@marvel-app/comics/store/reducers/comics.reducer';

export interface ComicsState {
  comics: fromComics.State;
  search: fromSearch.State;
  collection: undefined;
}

export interface State  {
  comics: ComicsState;
}

export const reducers: ActionReducerMap<ComicsState, any> = {
  search: fromSearch.reducer,
  comics: fromComics.reducer,
  collection: undefined
};

/**
 * Selects feature state `comics`
 */
export const getComicsState = createFeatureSelector<State, ComicsState>('comics');
