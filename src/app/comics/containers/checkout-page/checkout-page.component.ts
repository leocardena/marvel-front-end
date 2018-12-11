import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Comic } from '@marvel-app/comics/models/comic.model';
import * as fromComics from '@marvel-app/comics/store/reducers';
import {  CheckoutPageActions } from '@marvel-app/comics/store/actions';

@Component({
  selector: 'marvel-app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  comics$: Observable<Comic[]>;
  coupons$: Observable<string[]>;

  constructor(private store: Store<fromComics.State>) {
    this.comics$ = this.store.pipe(select(fromComics.getCheckoutComics));
    this.coupons$ = this.store.pipe(select(fromComics.getCoupons));
  }

  ngOnInit() {
    this.store.dispatch(new CheckoutPageActions.SearchCoupons());
  }

  validateCoupon(coupon: string, comic: Comic) {
    const c: Comic = {} as Comic;
    c.rarity = 'Common';
    c.id = '23561';
    this.store.dispatch(new CheckoutPageActions.ValidateCoupon({ coupon, comic: c }));
  }

}
