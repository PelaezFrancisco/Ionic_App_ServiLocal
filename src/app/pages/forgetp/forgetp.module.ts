import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetpPageRoutingModule } from './forgetp-routing.module';

import { ForgetpPage } from './forgetp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetpPageRoutingModule
  ],
  declarations: [ForgetpPage]
})
export class ForgetpPageModule {}
