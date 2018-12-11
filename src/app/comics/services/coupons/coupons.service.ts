import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CouponsService {

  private URL = '/api/coupons';

  constructor(private http: HttpClient) { }

  /**
  * Search all coupons in API.
  *
  * @returns http response containing a array of coupons
  */
  searchCoupons(): Observable<string[]> {
    return this.http.get(this.URL).pipe(
      map((response: any) => response.results.map(result => result.value))
    );
  }

 /**
 * Validate the cupon.
 *
 * @param body - coupon infos to validate
 * @returns http response containing a empty body
 */
  validateCoupon(body: { coupon: string, comicRarity: string }) {
    return this.http.post(this.URL, body);
  }

}
