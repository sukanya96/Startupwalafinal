import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { COpcPage } from './c-opc.page';

const routes: Routes = [
  {
    path: '',
    component: COpcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class COpcPageRoutingModule {}
