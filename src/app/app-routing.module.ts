import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home-module').then(m => m.HomeModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store-module').then(m => m.StoreModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications-module').then(m => m.NotificationsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact-module').then(m => m.ContactModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
