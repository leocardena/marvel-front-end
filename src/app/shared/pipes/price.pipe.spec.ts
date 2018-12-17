import { PricePipe } from '@marvel-app/shared/pipes/price.pipe';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

describe('PricePipe', () => {
  let pipe: PricePipe;
  const freeComicMessage = 'Grátis';
  const priceType = 'printPrice';
  const localeSeparator = String.fromCharCode(parseInt('a0', 16));

  beforeEach(() => {
    pipe = new PricePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return `Grátis` when prices param is not defined', () => {
    expect(pipe.transform(undefined)).toEqual(freeComicMessage);
  });

  it('should return `Grátis` when prices param length is equal or less than 0', () => {
    expect(pipe.transform([])).toEqual(freeComicMessage);
  });

  it('should return `Grátis` when price object inside prices param has price propertie equal or less than 0', () => {
    expect(pipe.transform([{ type: priceType, price: 0 }])).toEqual(freeComicMessage);
  });

  it('should transform `10.00` to R$ 10,00', () => {
    expect(pipe.transform([{ type: priceType, price: 10.00 }])).toEqual(`R$${localeSeparator}10,00`);
  });

  it('should transform `10.00` with 20% off to R$ 8,00', () => {
    expect(pipe.transform([{ type: priceType, price: 10.00 }], 20)).toEqual(`R$${localeSeparator}8,00`);
  });

});
