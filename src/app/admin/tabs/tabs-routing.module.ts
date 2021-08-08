import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../inicio/inicio.module#InicioPageModule'
          }
        ]
      },
      {
        path: 'add',
        children: [
          {
            path: '',
            loadChildren: '../crear/crear.module#CrearPageModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../perfil/perfil.module#PerfilPageModule'
          }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/admin/tabs/inicio',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
