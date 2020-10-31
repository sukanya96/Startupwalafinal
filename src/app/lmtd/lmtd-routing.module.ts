import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LmtdPage } from './lmtd.page';

const routes: Routes = [
  {
    path: '',
    component: LmtdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LmtdPageRoutingModule {}
