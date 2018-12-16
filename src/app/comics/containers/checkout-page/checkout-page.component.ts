import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { Comic } from '@marvel-app/comics/models/comic.model';
import * as fromComics from '@marvel-app/comics/store/reducers';
import {  CheckoutPageActions } from '@marvel-app/comics/store/actions';

@Component({
  selector: 'marvel-app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent {

  comics$: Observable<Comic[]>;
  totalPrice$: Observable<number>;

  constructor(private store: Store<fromComics.State>) {
    this.comics$ = this.store.pipe(select(fromComics.getCheckoutComics));
    this.totalPrice$ = this.store.pipe(select(fromComics.getTotalCheckoutPrice));
  }

  validateCoupon({ comic, coupon }) {
    this.store.dispatch(new CheckoutPageActions.ValidateCoupon({ comic, coupon }));
  }

  removeComicFromCheckout(comic: Comic) {
    this.store.dispatch(new CheckoutPageActions.RemoveFromCheckout(comic));
  }

}
