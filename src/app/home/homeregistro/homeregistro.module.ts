import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeregistroPageRoutingModule } from './homeregistro-routing.module';

import { HomeregistroPage } from './homeregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeregistroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomeregistroPage]
})
export class HomeregistroPageModule {}
