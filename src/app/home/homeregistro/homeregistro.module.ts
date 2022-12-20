import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeregistroPageRoutingModule } from './homeregistro-routing.module';

import { HomeregistroPage } from './homeregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeregistroPageRoutingModule
  ],
  declarations: [HomeregistroPage]
})
export class HomeregistroPageModule {}
