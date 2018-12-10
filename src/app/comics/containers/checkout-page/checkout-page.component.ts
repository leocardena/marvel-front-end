import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Comic } from '@marvel-app/comics/models/comic.model';
import * as fromCheckout from '@marvel-app/comics/store/reducers';

@Component({
  selector: 'marvel-app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  comics$: Observable<Comic[]>;

  constructor(private store: Store<fromCheckout.State>) { }

  ngOnInit() {
    this.comics$ = this.store.pipe(select(fromCheckout.getCheckoutComics));
  }

}
