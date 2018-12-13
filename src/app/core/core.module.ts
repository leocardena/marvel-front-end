import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { AppComponent } from '@marvel-app/core/containers/app/app.component';
import { MaterialModule } from '@marvel-app/material';
import { LayoutComponent } from '@marvel-app/core/components/layout/layout.component';

export const COMPONENTS = [
  AppComponent,
  LayoutComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    LayoutModule
  ],
  exports: COMPONENTS
})
export class CoreModule { }
