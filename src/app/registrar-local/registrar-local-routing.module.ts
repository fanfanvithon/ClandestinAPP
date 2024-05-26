import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarLocalPage } from './registrar-local.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarLocalPageRoutingModule {}
