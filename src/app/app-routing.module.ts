import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  
  {
    path: 'home',
    children: [
    {path:"",loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
     
    },
    {
      path:"homemenu", 
      loadChildren: () => import('./home/homemenu/homemenu.module').then(m => m.HomemenuPageModule),
      canActivate:[AuthGuard]      
     },
    {
      path:":regristroId",
      loadChildren: () => import('./home/homeregistro/homeregistro.module').then(m => m.HomeregistroPageModule),
      canActivate:[AuthGuard]  
    },
    ]
  },
  {
    path: 'hoteles',
    canActivate:[AuthGuard]  ,
    children:[
      {
        path:"", loadChildren: () => import('./hoteles/hoteles.module').then( m => m.HotelesPageModule)
      },
      {
        path: ":hotelId", 
        loadChildren: () => import('./hoteles/hotel-detail/hotel-detail.module').then(m =>m.HotelDetailPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
