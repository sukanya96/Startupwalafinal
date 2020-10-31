import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RocOpcPage } from './roc-opc.page';

const routes: Routes = [
  {
    path: '',
    component: RocOpcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RocOpcPageRoutingModule {}
