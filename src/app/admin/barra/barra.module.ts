import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarraPageRoutingModule } from './barra-routing.module';

import { BarraPage } from './barra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarraPageRoutingModule
  ],
  declarations: [BarraPage]
})
export class BarraPageModule {}
