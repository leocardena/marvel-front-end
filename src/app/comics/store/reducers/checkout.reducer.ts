import {
  ViewComicPageActions
} from '@marvel-app/comics/store/actions';

export interface State {
  ids: string[];
  loading: boolean;
}

export const initialState: State = {
  ids: [],
  loading: false,
};

export function reducer(
  state = initialState,
  action: ViewComicPageActions.ViewComicPageActionsUnion
): State {
  switch (action.type) {
    case ViewComicPageActions.ViewComicPageActionTypes.AddToCheckout:
      return {
        ...state,
        ids: state.ids.indexOf(action.payload.id) === -1 ?
          [...state.ids, action.payload.id] : state.ids
      };

    default: {
      return state;
    }
  }
}

/**
* Checkout loading
*/
export const getLoading = (state: State) => state.loading;

/**
* Get comics ids in checkout
*/
export const getIds = (state: State) => state.ids;
