import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnePrsnPage } from './one-prsn.page';

const routes: Routes = [
  {
    path: '',
    component: OnePrsnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnePrsnPageRoutingModule {}
