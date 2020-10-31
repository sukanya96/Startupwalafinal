import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LmtdPageRoutingModule } from './lmtd-routing.module';

import { LmtdPage } from './lmtd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LmtdPageRoutingModule
  ],
  declarations: [LmtdPage]
})
export class LmtdPageModule {}
