import { NgModule } from '@angular/core';

import { CreatorsPipe } from '@marvel-app/shared/pipes/creators.pipe';
import { PricePipe } from '@marvel-app/shared/pipes/price.pipe';
import { OnSaleDatePipe } from '@marvel-app/shared/pipes/on-sale-date.pipe';

export const PIPES = [
  CreatorsPipe,
  PricePipe,
  OnSaleDatePipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class PipesModule {}
