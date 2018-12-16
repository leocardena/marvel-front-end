import { Action } from '@ngrx/store';

export enum CouponsPageActionTypes {
  SearchCoupons = '[CouponsPage] Search Coupons',
}

export class SearchCoupons implements Action {
  readonly type = CouponsPageActionTypes.SearchCoupons;
}

export type CouponsPageActionsUnion = SearchCoupons;
