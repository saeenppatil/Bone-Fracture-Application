import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'image-upload',
        children: [
          {
              path: '',
              loadChildren: () => import('../image-upload/image-upload.module').then( m => m.ImageUploadPageModule)
          }
        ]
      }
    ]
  }, 
  {
    path: '',
    redirectTo: '/tabs/tabs/home',
    pathMatch: 'full'
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
