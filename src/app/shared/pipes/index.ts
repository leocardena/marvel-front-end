import { NgModule } from '@angular/core';

import { CreatorsPipe } from '@marvel-app/shared/pipes/creators.pipe';
import { PricePipe } from '@marvel-app/shared/pipes/price.pipe';

export const PIPES = [
  CreatorsPipe,
  PricePipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class PipesModule {}
