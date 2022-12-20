import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeregistroPage } from './homeregistro.page';

const routes: Routes = [
  {
    path: '',
    component: HomeregistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeregistroPageRoutingModule {}
