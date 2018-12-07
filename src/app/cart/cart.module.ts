import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from '@marvel-app/cart/cart-routing.module';
import { CheckoutPageComponent } from '@marvel-app/cart/checkout-page/checkout-page.component';

@NgModule({
  declarations: [CheckoutPageComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
