import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromSearch from '@marvel-app/comics/store/reducers/search.reducer';
import * as fromComics from '@marvel-app/comics/store/reducers/comics.reducer';
import * as fromCheckout from '@marvel-app/comics/store/reducers/checkout.reducer';
import * as fromCoupons from '@marvel-app/comics/store/reducers/coupons.reducer';
import * as fromRoot from '@marvel-app/store/reducers';

export interface ComicsState {
  comics: fromComics.State;
  search: fromSearch.State;
  checkout: fromCheckout.State;
  coupons: fromCoupons.State;
}

export interface State  {
  comics: ComicsState;
}

export const reducers: ActionReducerMap<ComicsState, any> = {
  comics: fromComics.reducer,
  search: fromSearch.reducer,
  checkout: fromCheckout.reducer,
  coupons: fromCoupons.reducer
};

/**
 * Selects feature state `comics`
 */
export const getComicsState = createFeatureSelector<State, ComicsState>('comics');

/**
 * Select comics entities state
*/
export const getComicsEntitiesState = createSelector(
  getComicsState,
  state => state.comics
);

/**
 * Get selected comics id
 */
export const getSelectedComicId = createSelector(
  getComicsEntitiesState,
  fromComics.getSelectedId
);

/**
 * Default entity selectors
 */
export const {
  selectIds: getComicIds,
  selectEntities: getComicEntities,
  selectAll: getAllComics,
  selectTotal: getTotalComics,
} = fromComics.adapter.getSelectors(getComicsEntitiesState);

/**
 * Get selected comic
 */
export const getSelectedComic = createSelector(
  getComicEntities,
  getSelectedComicId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

/**
 * Get selected comic in router params
 */
export const getSelectedComicInRouter = createSelector(
  getComicEntities,
  fromRoot.getRouterState,
  (entities, router) => router.state && entities[router.state.params.id]
);

/**
 * Get search comic state
*/
export const getSearchState = createSelector(
  getComicsState,
  (state: ComicsState) => state.search
);

/**
 * Get search comic ids
 */
export const getSearchComicIds = createSelector(
  getSearchState,
  fromSearch.getIds
);

/**
 * Get search comic loading
 */
export const getSearchLoading = createSelector(
  getSearchState,
  fromSearch.getLoading
);

/**
 * Get search comic error
 */
export const getSearchError = createSelector(
  getSearchState,
  fromSearch.getError
);

/**
 * Get searched comics by ids
 */
export const getSearchResults = createSelector(
  getComicEntities,
  getSearchComicIds,
  (comics, searchIds) => searchIds.map(id => comics[id])
);

/**
 * Get checkout comic state
*/
export const getCheckoutState = createSelector(
  getComicsState,
  (state: ComicsState) => state.checkout
);

/**
 * Get checkout comics ids
 */
export const getCheckoutIds = createSelector(
  getCheckoutState,
  fromCheckout.getIds
);

/**
 * Get checkout loading
 */
export const getCheckoutLoading = createSelector(
  getCheckoutState,
  fromCheckout.getLoading
);

/**
 * Get cart ids in comics store
 */
export const getCheckoutComics = createSelector(
  getComicEntities,
  getCheckoutIds,
  (comics, cartIds) => cartIds.map(id => comics[id])
);

/**
 * Get if selected comic is in the checkout
 */
export const isSelectedComicInCheckout = createSelector(
  getCheckoutIds,
  getSelectedComicId,
  (ids, selected) => selected && ids.indexOf(selected) > -1
);

/**
 * Get coupons state
*/
export const getCouponsState = createSelector(
  getComicsState,
  (state: ComicsState) => state.coupons
);

/**
 * Get coupons
 */
export const getCoupons = createSelector(
  getCouponsState,
  fromCoupons.getCoupons
);

/**
 * Get coupons validating
 */
export const getCouponsValidating = createSelector(
  getCouponsState,
  fromCoupons.getValidating
);

/**
 * Get coupons loading
 */
export const getCouponsLoading = createSelector(
  getCouponsState,
  fromCoupons.getLoading
);
