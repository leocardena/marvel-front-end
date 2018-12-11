import { Action } from '@ngrx/store';

import { Comic } from '@marvel-app/comics/models/comic.model';

export enum CheckoutPageActionTypes {
  ValidateCoupon = '[CheckoutPage] Validate Coupon',
  SearchCoupons = '[CheckoutPage] Search Coupons',
  RemoveFromCheckout = '[CheckoutPage] Remove From Checkout'
}

export class ValidateCoupon implements Action {
  readonly type = CheckoutPageActionTypes.ValidateCoupon;
    constructor(public payload: { comic: Comic, coupon: string }) { }
}

export class SearchCoupons implements Action {
  readonly type = CheckoutPageActionTypes.SearchCoupons;
}

export class RemoveFromCheckout implements Action {
  readonly type = CheckoutPageActionTypes.RemoveFromCheckout;

  constructor(public payload: Comic) {}
}

export type CheckoutPageActionsUnion =
  | ValidateCoupon
  | SearchCoupons
  | RemoveFromCheckout;
