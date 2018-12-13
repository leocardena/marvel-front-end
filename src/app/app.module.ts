import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';

import { AppComponent } from '@marvel-app/core/containers/app/app.component';
import { metaReducers, reducers } from '@marvel-app/store/reducers';
import { interceptors } from '@marvel-app/core/interceptors';
import { CustomRouterSerializer } from '@marvel-app/core/custom/custom-router-serializer';
import { CoreModule } from '@marvel-app/core/core.module';
import { AppRoutingModule } from '@marvel-app/app-routing.module';

import { environment } from '../environments/environment';

registerLocaleData(localePT);

@NgModule({
  imports: [
    // Angular internal libs
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    // Store imports
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Comics App',
      logOnly: environment.production,
    })
  ],
  providers: [
    ...interceptors,
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterSerializer
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
