import {
  ComicsApiActions,
  FindComicPageActions,
  ViewComicPageActions
} from '@marvel-app/comics/store/actions';

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
    | ViewComicPageActions.ViewComicPageActionsUnion
): State {
  switch (action.type) {
    case ViewComicPageActions.ViewComicPageActionTypes.SearchComic:
      return {
        ...state,
        loading: true,
        error: undefined
      };

    case FindComicPageActions.FindComicPageActionTypes.SearchComics:
      return {
        ...state,
        loading: state.ids.length <= 1,
        error: undefined
      };

    case ComicsApiActions.ComicsApiActionTypes.SearchAllSuccess: {
      const payloadIds = action.payload.map(comic => comic.id);
      const uniqueIds = (ids) => {
        return ids.filter((elem, pos, arr) => {
          return arr.indexOf(elem) === pos;
        });
      };

      return {
        ...state,
        ids: uniqueIds([...state.ids, ...payloadIds]),
        loading: false,
        error: undefined
      };
    }

    case ComicsApiActions.ComicsApiActionTypes.SearchOneSuccess:
      return {
        ...state,
        ids: state.ids.indexOf(action.payload.id) === -1 ?
          [...state.ids, action.payload.id] : state.ids,
        loading: false,
        error: undefined
      };

    case ComicsApiActions.ComicsApiActionTypes.SearchAllFailure:
    case ComicsApiActions.ComicsApiActionTypes.SearchOneFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

/**
* Searched ids
*/
export const getIds = (state: State) => state.ids;

/**
* Request loading
*/
export const getLoading = (state: State) => state.loading;

/**
* Request error
*/
export const getError = (state: State) => state.error;
