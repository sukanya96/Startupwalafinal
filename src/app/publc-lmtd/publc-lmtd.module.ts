import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublcLmtdPageRoutingModule } from './publc-lmtd-routing.module';

import { PublcLmtdPage } from './publc-lmtd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublcLmtdPageRoutingModule
  ],
  declarations: [PublcLmtdPage]
})
export class PublcLmtdPageModule {}
