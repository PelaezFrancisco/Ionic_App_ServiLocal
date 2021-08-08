import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule), canActivate: [AuthGuard]
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule),canActivate: [AuthGuard]
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule),canActivate: [AuthGuard]
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule),canActivate: [AuthGuard]
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
    loadChildren: () => import('./pages/local/local.module').then( m => m.LocalPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'producto',
    loadChildren: () => import('./pages/producto/producto.module').then( m => m.ProductoPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'detalle',
    loadChildren: () => import('./pages/pedido/detalle/detalle.module').then( m => m.DetallePageModule),canActivate: [AuthGuard]
  },
  {
    path: 'edit-info',
    loadChildren: () => import('./user/edit-info/edit-info.module').then( m => m.EditInfoPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'edit-pass',
    loadChildren: () => import('./user/edit-pass/edit-pass.module').then( m => m.EditPassPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'politicas',
    loadChildren: () => import('./user/politicas/politicas.module').then( m => m.PoliticasPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'faq',
    loadChildren: () => import('./user/faq/faq.module').then( m => m.FaqPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./admin/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./admin/crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./admin/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./admin/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./admin/barra/barra.module').then( m => m.BarraPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'login-a',
    loadChildren: () => import('./admin/login-a/login-a.module').then( m => m.LoginAPageModule)
  },
  {
    path: 'register-a',
    loadChildren: () => import('./admin/register-a/register-a.module').then( m => m.RegisterAPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
