import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  GoogleApiModule, 
  GoogleApiService, 
  GoogleAuthService, 
  NgGapiClientConfig, 
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from "ng-gapi";
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "469802607999-eeqabie4pldo5f8o81194n0np6ppkmmj.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/v4/userActivity:search"],
  scope: [
    "email"
  ].join(" ")
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,GoogleApiModule.forRoot({
    provide: NG_GAPI_CONFIG,
    useValue: gapiClientConfig
  }),],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
