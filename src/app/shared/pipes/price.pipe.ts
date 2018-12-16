import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Price } from '@marvel-app/comics/models/price.model';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  private priceType = 'printPrice';
  private freeComicMessage = 'Grátis';
  private currencyCode = 'BRL';

  transform(prices: Price[], discount?: number): string {
    if (!prices) {
      return this.freeComicMessage;
    }

    const printPrices = prices.filter(price => price.type === this.priceType);

    if (printPrices.length <= 0 || printPrices[0].price <= 0)  {
      return this.freeComicMessage;
    }



    const currencyPipe: CurrencyPipe = new CurrencyPipe('pt');
    const newPrice = discount ? this.applyDiscount(printPrices[0].price, discount) : printPrices[0].price;
    const newValue: string = currencyPipe.transform(newPrice, this.currencyCode);

    return newValue;
  }

  /**
   * Applies a discount percentage
   */
  private applyDiscount(price: number, discount: number) {
    return price - (price * (discount / 100));
  }

}
