import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarRepartidorPage } from './registrar-repartidor.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarRepartidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarRepartidorPageRoutingModule {}
