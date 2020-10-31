import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrowBusinessPageRoutingModule } from './grow-business-routing.module';

import { GrowBusinessPage } from './grow-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrowBusinessPageRoutingModule
  ],
  declarations: [GrowBusinessPage]
})
export class GrowBusinessPageModule {}
