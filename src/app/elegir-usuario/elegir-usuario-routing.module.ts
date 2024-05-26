import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElegirUsuarioPage } from './elegir-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ElegirUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElegirUsuarioPageRoutingModule {}
