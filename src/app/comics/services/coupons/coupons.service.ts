import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Coupon } from '@marvel-app/comics/models/coupon.model';

@Injectable()
export class CouponsService {

  private URL = '/api/coupons';

  constructor(private http: HttpClient) { }

  /**
  * Search all coupons in API.
  *
  * @returns http response containing a array of coupons
  */
  searchCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.URL);
  }

 /**
 * Validate the cupon.
 *
 * @param request - coupon infos to validate
 * @returns http response containing a empty body
 */
  validateCoupon(request) {
    const { comic: { rarity }, coupon } = request;
    return this.http.post(this.URL, { comicRarity: rarity, coupon });
  }

}
