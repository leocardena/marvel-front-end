import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { AppRoutingModule } from '@marvel-app/app-routing.module';
import { AppComponent } from '@marvel-app/app.component';
import { metaReducers, reducers } from '@marvel-app/store/reducers';
import { interceptors } from '@marvel-app/core/interceptors';
import { CustomRouterSerializer } from '@marvel-app/core/router/custom-router-serializer';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular internal libs
    BrowserModule,
    HttpClientModule,
    // App imports
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
