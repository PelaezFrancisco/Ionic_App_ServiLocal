import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarraPage } from './barra.page';

const routes: Routes = [
  {
    path: 'admin',
    component: BarraPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'add',
        loadChildren: () => import('../crear/crear.module').then(m => m.CrearPageModule)
      },
      {
        path: 'pedidos',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      
      {
        path: '',
        redirectTo: '/admin/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/admin/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarraPageRoutingModule {}
