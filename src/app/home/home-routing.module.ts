import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'homeregistro',
    loadChildren: () => import('./homeregistro/homeregistro.module').then( m => m.HomeregistroPageModule)
  },
  {
    path: 'homemenu',
    loadChildren: () => import('./homemenu/homemenu.module').then( m => m.HomemenuPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
