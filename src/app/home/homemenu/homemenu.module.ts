import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomemenuPageRoutingModule } from './homemenu-routing.module';

import { HomemenuPage } from './homemenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomemenuPageRoutingModule
  ],
  declarations: [HomemenuPage]
})
export class HomemenuPageModule {}
