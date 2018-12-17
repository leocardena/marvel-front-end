import { OnSaleDatePipe } from '@marvel-app/shared/pipes/on-sale-date.pipe';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

describe('OnSaleDatePipe', () => {
  let pipe: OnSaleDatePipe;
  const dateNotFount = 'Data não encontrada';

  beforeEach(() => {
    pipe = new OnSaleDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return `Data não encontrada` when dates param is not defined', () => {
    expect(pipe.transform(undefined)).toEqual(dateNotFount);
  });

  it('should return `Data não encontrada` when dates param length is equal or less than 0', () => {
    expect(pipe.transform([])).toEqual(dateNotFount);
  });

  it('should transform 2018-12-06T10:00:00 to 06/12/2018', () => {
    const date = {
      date: new Date('2018-12-06T10:00:00'),
      type: 'onsaleDate'
    };

    expect(pipe.transform([date])).toEqual('06/12/2018');
  });

});
