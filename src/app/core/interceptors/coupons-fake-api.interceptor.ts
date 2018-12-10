import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { coupons } from '@marvel-app/core/utils/coupons.mock';

@Injectable()
export class CouponsFakeApiInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.endsWith('/api/coupons')) {
      return next.handle(request);
    }

    switch (request.method) {
      case 'POST': {
        const couponFound = coupons.find(coupon => coupon.value === request.body.value);
        if (!couponFound) {
          return Observable.throw('Bad Request');
        }

        return of(new HttpResponse({ status: 200, body: couponFound }));
      }

      case 'GET': {
        const body = { results: coupons };
        return of(new HttpResponse({ status: 200, body }));
      }

      default: {
        return Observable.throw('Method Not Allowed');
      }

    }
  }
}

