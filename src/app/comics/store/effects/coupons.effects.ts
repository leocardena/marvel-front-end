import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';

import {
  CheckoutPageActions,
  ComicsApiActions,
  CouponsPageActions
} from '@marvel-app/comics/store/actions';
import { CouponsService } from '@marvel-app/comics/services/coupons/coupons.service';

@Injectable()
export class CouponsEffects {

  @Effect()
  searchCoupons$: Observable<Action> = this.actions$.pipe(
    ofType(CouponsPageActions.CouponsPageActionTypes.SearchCoupons),
    switchMap(() =>
      this.couponsService
        .searchCoupons().pipe(
          map((response: any) => new ComicsApiActions.SearchCouponsSuccess(response.results)),
          catchError(error => of(new ComicsApiActions.SearchCouponsFailure(error)))
        )
    )
  );

  @Effect()
  validateCoupon$: Observable<Action> = this.actions$.pipe(
    ofType(CheckoutPageActions.CheckoutPageActionTypes.ValidateCoupon),
    map((action: CheckoutPageActions.ValidateCoupon) => action.payload),
    switchMap(payload =>
      this.couponsService
        .validateCoupon(payload).pipe(
          map(() => new ComicsApiActions.ValidateCouponSuccess(payload.comic)),
          catchError(error => of(new ComicsApiActions.ValidateCouponFailure(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private couponsService: CouponsService
    ) {}
}
