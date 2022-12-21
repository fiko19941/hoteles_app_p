import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,SweetAlert2Module],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
