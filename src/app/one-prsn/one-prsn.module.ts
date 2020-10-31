import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnePrsnPageRoutingModule } from './one-prsn-routing.module';

import { OnePrsnPage } from './one-prsn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnePrsnPageRoutingModule
  ],
  declarations: [OnePrsnPage]
})
export class OnePrsnPageModule {}
