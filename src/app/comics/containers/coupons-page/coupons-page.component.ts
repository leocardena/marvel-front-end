import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Coupon } from '@marvel-app/comics/models/coupon.model';
import * as fromComics from '@marvel-app/comics/store/reducers';
import { CouponsPageActions } from '@marvel-app/comics/store/actions';

@Component({
  selector: 'marvel-app-coupons-page',
  templateUrl: './coupons-page.component.html',
  styleUrls: ['./coupons-page.component.scss']
})
export class CouponsPageComponent implements OnInit {
  coupons$: Observable<Coupon[]>;

  constructor(private store: Store<fromComics.State>) {
    this.coupons$ = this.store.pipe(select(fromComics.getCoupons));
  }

  ngOnInit() {
    this.store.dispatch(new CouponsPageActions.SearchCoupons());
  }

}
