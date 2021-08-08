import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule),canActivate: [AuthGuard]
  },
  {
    path: 'forgetp',
    loadChildren: () => import('./pages/forgetp/forgetp.module').then( m => m.ForgetpPageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./pages/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./pages/local/local.module').then( m => m.LocalPageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./pages/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./pages/pedido/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'edit-info',
    loadChildren: () => import('./user/edit-info/edit-info.module').then( m => m.EditInfoPageModule)
  },
  {
    path: 'edit-pass',
    loadChildren: () => import('./user/edit-pass/edit-pass.module').then( m => m.EditPassPageModule)
  },
  {
    path: 'politicas',
    loadChildren: () => import('./user/politicas/politicas.module').then( m => m.PoliticasPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./user/faq/faq.module').then( m => m.FaqPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
