import { ComicsApiActions, FindComicPageActions } from '@marvel-app/comics/store/actions';

export interface State {
  ids: string[];
  loading: boolean;
  error: any;
}

export const initialState: State = {
  ids: [],
  loading: false,
  error: undefined
};

export function reducer(
  state = initialState,
  action:
    | ComicsApiActions.ComicsApiActionsUnion
    | FindComicPageActions.FindComicPageActionsUnion
): State {
  switch (action.type) {
    case FindComicPageActions.FindComicPageActionTypes.SearchComics:
      return {
        ...state,
        loading: true,
        error: undefined
      };

    case ComicsApiActions.ComicsApiActionTypes.SearchSuccess:
      return {
        ...state,
        ids: action.payload.map(comic => comic.id),
        loading: false,
        error: undefined
      };

    case ComicsApiActions.ComicsApiActionTypes.SearchFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
