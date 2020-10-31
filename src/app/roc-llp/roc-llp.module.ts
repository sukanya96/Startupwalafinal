import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RocLlpPageRoutingModule } from './roc-llp-routing.module';

import { RocLlpPage } from './roc-llp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RocLlpPageRoutingModule
  ],
  declarations: [RocLlpPage]
})
export class RocLlpPageModule {}
