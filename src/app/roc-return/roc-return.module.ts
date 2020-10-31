import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RocReturnPageRoutingModule } from './roc-return-routing.module';

import { RocReturnPage } from './roc-return.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RocReturnPageRoutingModule
  ],
  declarations: [RocReturnPage]
})
export class RocReturnPageModule {}
