import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicenseTradePageRoutingModule } from './license-trade-routing.module';

import { LicenseTradePage } from './license-trade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicenseTradePageRoutingModule
  ],
  declarations: [LicenseTradePage]
})
export class LicenseTradePageModule {}
