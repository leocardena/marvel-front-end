import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Comic } from '@marvel-app/comics/models/comic.model';
import { Discount } from '@marvel-app/core/utils/discount.enum';

@Component({
  selector: 'marvel-app-checkout-items-list',
  templateUrl: './checkout-items-list.component.html',
  styleUrls: ['./checkout-items-list.component.scss']
})
export class CheckoutItemsListComponent {
  discountPercentage: number = Discount.Percentage;
  @Input() comics: Comic[];
  @Output() validateCoupon = new EventEmitter<{ comic: Comic, coupon: string }>();
  @Output() removeComicFromCheckout = new EventEmitter<Comic>();

  validate(comic: Comic, coupon: string) {
    this.validateCoupon.emit({ comic, coupon });
  }
}
