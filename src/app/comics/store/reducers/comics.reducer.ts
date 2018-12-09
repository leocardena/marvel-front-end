import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ComicsApiActions } from '@marvel-app/comics/store/actions';
import { Comic } from '@marvel-app/comics/models/comic.model';

export interface State extends EntityState<Comic> {
  selectedComicId: string | undefined;
}

export const adapter: EntityAdapter<Comic> = createEntityAdapter<Comic>({
  selectId: (comic: Comic) => comic.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  selectedComicId: undefined,
});

export function reducer(
  state = initialState,
  action: ComicsApiActions.ComicsApiActionsUnion
  ): State {
    switch (action.type) {
      case ComicsApiActions.ComicsApiActionTypes.SearchAllSuccess:
        return adapter.addMany(action.payload, state);

      case ComicsApiActions.ComicsApiActionTypes.SearchOneSuccess:
        return {
          ...adapter.addOne(action.payload, state),
          selectedComicId: action.payload.id
        };

      default:
        return state;
    }
}

/**
 * Get selected comics id
*/
export const getSelectedId = (state: State) => state.selectedComicId;
