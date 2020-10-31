import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellTradePageRoutingModule } from './sell-trade-routing.module';

import { SellTradePage } from './sell-trade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellTradePageRoutingModule
  ],
  declarations: [SellTradePage]
})
export class SellTradePageModule {}
