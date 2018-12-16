import { Component, Input } from '@angular/core';
import { Coupon } from '@marvel-app/comics/models/coupon.model';

@Component({
  selector: 'marvel-app-coupons-list',
  templateUrl: './coupons-list.component.html',
  styleUrls: ['./coupons-list.component.scss']
})
export class CouponsListComponent {
  @Input() coupons: Coupon[];
}
