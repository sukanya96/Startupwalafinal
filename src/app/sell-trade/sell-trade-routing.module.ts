import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellTradePage } from './sell-trade.page';

const routes: Routes = [
  {
    path: '',
    component: SellTradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellTradePageRoutingModule {}
