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

  transform(prices: Price[], symbolDisplay: boolean = true, digits?: string): string {
    if (!prices) {
      return this.freeComicMessage;
    }

    const printPrices = prices.filter(price => price.type === this.priceType);

    if (printPrices.length <= 0 || printPrices[0].price <= 0)  {
      return this.freeComicMessage;
    }

    const currencyPipe: CurrencyPipe = new CurrencyPipe('pt');
    const newValue: string = currencyPipe.transform(printPrices[0].price, this.currencyCode, symbolDisplay, digits);

    return newValue;
  }

}
