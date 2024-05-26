import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElegirUsuarioPageRoutingModule } from './elegir-usuario-routing.module';

import { ElegirUsuarioPage } from './elegir-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElegirUsuarioPageRoutingModule
  ],
  declarations: [ElegirUsuarioPage]
})
export class ElegirUsuarioPageModule {}
