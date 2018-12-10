import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CouponsService {

  private URL = '/api/coupns';

  constructor(private http: HttpClient) { }

  getCoupons(): Observable<string[]> {
    return this.http.get(this.URL).pipe(
      map((response: any) => response.results.map(result => result.value))
    );
  }

  validateCoupon(body: { coupon: string, comicRarity: string}) {
    return this.http.post(this.URL, body);
  }

}
