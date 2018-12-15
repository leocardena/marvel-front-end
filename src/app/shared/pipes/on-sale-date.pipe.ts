import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'onSaleDate'
})
export class OnSaleDatePipe implements PipeTransform {

  private dateType = 'onsaleDate';
  private noDateMessage = 'Data não encontrada';
  private dateFormat = 'dd/MM/yyyy';

  transform(dates): string {
    if (!dates) {
      return this.noDateMessage;
    }

    const onsaleDates = dates.filter(date => date.type === this.dateType);

    if (onsaleDates.length <= 0)  {
      return this.noDateMessage;
    }

    const datePipe: DatePipe = new DatePipe('pt');
    const newValue: string = datePipe.transform(onsaleDates[0].date, this.dateFormat);

    return newValue;
  }
}
