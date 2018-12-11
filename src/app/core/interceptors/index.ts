import { APIEndpointInterceptor } from './api-endpoint.interceptor';
import { ApiKeyInterceptor } from './api-key.interceptor';
import { CouponsFakeApiInterceptor } from './coupons-fake-api.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CouponsFakeApiInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: APIEndpointInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiKeyInterceptor,
    multi: true
  }
];
