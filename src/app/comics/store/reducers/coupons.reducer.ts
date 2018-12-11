import {
  CheckoutPageActions,
  ComicsApiActions
} from '@marvel-app/comics/store/actions';
import { coupons } from '@marvel-app/core/utils/coupons.mock';

export interface State {
  coupons: string[];
  loading: boolean;
  validating: boolean;
  error: any;
}

export const initialState: State = {
  coupons: [],
  loading: false,
  validating: false,
  error: undefined
};

export function reducer(
  state = initialState,
  action:
    | CheckoutPageActions.CheckoutPageActionsUnion
    | ComicsApiActions.ComicsApiActionsUnion
): State {
  switch (action.type) {
    case CheckoutPageActions.CheckoutPageActionTypes.SearchCoupons:
    case CheckoutPageActions.CheckoutPageActionTypes.ValidateCoupon:
      return {
        ...state,
        loading: true
      };

    case ComicsApiActions.ComicsApiActionTypes.ValidateCouponSuccess:
      return {
        ...state,
        loading: false
      };

    case ComicsApiActions.ComicsApiActionTypes.ValidateCouponFailure:
    case ComicsApiActions.ComicsApiActionTypes.SearchCouponsFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case ComicsApiActions.ComicsApiActionTypes.SearchCouponsSuccess:
      return {
        ...state,
        loading: false,
        coupons: action.payload
      };

    default:
      return state;
  }
}

/**
* Request loading
*/
export const getLoading = (state: State) => state.loading;

/**
* Coupons Validating
*/
export const getValidating = (state: State) => state.validating;

/**
* Searching Coupons
*/
export const getCoupons = (state: State) => state.coupons;
