import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelesPage } from './hoteles.page';

const routes: Routes = [
  {
    path: '',
    component: HotelesPage
  },
  {
    path: 'hotel-detail',
    loadChildren: () => import('./hotel-detail/hotel-detail.module').then( m => m.HotelDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelesPageRoutingModule {}
