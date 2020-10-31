import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenewTradePageRoutingModule } from './renew-trade-routing.module';

import { RenewTradePage } from './renew-trade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenewTradePageRoutingModule
  ],
  declarations: [RenewTradePage]
})
export class RenewTradePageModule {}
