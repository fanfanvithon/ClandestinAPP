import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarRepartidorPageRoutingModule } from './registrar-repartidor-routing.module';

import { RegistrarRepartidorPage } from './registrar-repartidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarRepartidorPageRoutingModule
  ],
  declarations: [RegistrarRepartidorPage]
})
export class RegistrarRepartidorPageModule {}
