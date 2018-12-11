import { Action } from '@ngrx/store';

import { Comic } from '@marvel-app/comics/models/comic.model';

export enum CheckoutPageActionTypes {
  ValidateCoupon = '[CheckoutPage] Validate Coupon',
  SearchCoupons = '[CheckoutPage] Search Coupons'
}

export class ValidateCoupon implements Action {
  readonly type = CheckoutPageActionTypes.ValidateCoupon;
    constructor(public payload: { coupon: string, comic: Comic }) { }
}

export class SearchCoupons implements Action {
  readonly type = CheckoutPageActionTypes.SearchCoupons;
}

export type CheckoutPageActionsUnion =
  | ValidateCoupon
  | SearchCoupons;
