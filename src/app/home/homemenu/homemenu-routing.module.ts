import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomemenuPage } from './homemenu.page';

const routes: Routes = [
  {
    path: '',
    component: HomemenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomemenuPageRoutingModule {}
