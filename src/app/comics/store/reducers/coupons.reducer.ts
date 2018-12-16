import {
  CheckoutPageActions,
  ComicsApiActions,
  CouponsPageActions
} from '@marvel-app/comics/store/actions';
import { Coupon } from '@marvel-app/comics/models/coupon.model';

export interface State {
  coupons: Coupon[];
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
    | CouponsPageActions.CouponsPageActionsUnion
): State {
  switch (action.type) {
    case CouponsPageActions.CouponsPageActionTypes.SearchCoupons:
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
