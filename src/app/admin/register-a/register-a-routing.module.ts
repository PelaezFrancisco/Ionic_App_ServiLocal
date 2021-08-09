import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterAPage } from './register-a.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterAPageRoutingModule {}
