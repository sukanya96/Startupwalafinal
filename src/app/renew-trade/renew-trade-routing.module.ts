import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenewTradePage } from './renew-trade.page';

const routes: Routes = [
  {
    path: '',
    component: RenewTradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenewTradePageRoutingModule {}
