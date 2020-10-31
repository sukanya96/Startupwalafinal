import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReplyTradePageRoutingModule } from './reply-trade-routing.module';

import { ReplyTradePage } from './reply-trade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReplyTradePageRoutingModule
  ],
  declarations: [ReplyTradePage]
})
export class ReplyTradePageModule {}
