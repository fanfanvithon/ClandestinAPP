import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarLocalPageRoutingModule } from './registrar-local-routing.module';

import { RegistrarLocalPage } from './registrar-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarLocalPageRoutingModule
  ],
  declarations: [RegistrarLocalPage]
})
export class RegistrarLocalPageModule {}
