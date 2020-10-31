import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradeRegPage } from './trade-reg.page';

const routes: Routes = [
  {
    path: '',
    component: TradeRegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradeRegPageRoutingModule {}
