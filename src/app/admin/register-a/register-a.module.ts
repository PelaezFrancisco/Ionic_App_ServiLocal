import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterAPageRoutingModule } from './register-a-routing.module';

import { RegisterAPage } from './register-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterAPageRoutingModule
  ],
  declarations: [RegisterAPage]
})
export class RegisterAPageModule {}
