import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublcLmtdPage } from './publc-lmtd.page';

const routes: Routes = [
  {
    path: '',
    component: PublcLmtdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublcLmtdPageRoutingModule {}
