import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradeRegPageRoutingModule } from './trade-reg-routing.module';

import { TradeRegPage } from './trade-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TradeRegPageRoutingModule
  ],
  declarations: [TradeRegPage]
})
export class TradeRegPageModule {}
