import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { of, throwError, Observable } from 'rxjs';
import { coupons } from '@marvel-app/core/utils/coupons.mock';

@Injectable()
export class CouponsFakeApiInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.endsWith('/api/coupons')) {
      return next.handle(request);
    }

    switch (request.method) {
      case 'POST': {
        const { coupon, comicRarity } = request.body;
        const couponFound = coupons.find(c => c.value === coupon);

        if (!couponFound || couponFound.rarity !== comicRarity) {
          return throwError('Bad Request');
        }

        return of(new HttpResponse({ status: 200 }));
      }

      case 'GET': {
        const body = { results: coupons };
        return of(new HttpResponse({ status: 200, body }));
      }

      default: {
        return throwError('Method Not Allowed');
      }

    }
  }
}

