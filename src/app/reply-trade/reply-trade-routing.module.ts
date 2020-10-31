import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReplyTradePage } from './reply-trade.page';

const routes: Routes = [
  {
    path: '',
    component: ReplyTradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReplyTradePageRoutingModule {}
