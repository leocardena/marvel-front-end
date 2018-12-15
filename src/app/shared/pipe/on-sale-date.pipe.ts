import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSaleDate'
})
export class OnSaleDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
