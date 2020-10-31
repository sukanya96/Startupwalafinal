import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RocOpcPageRoutingModule } from './roc-opc-routing.module';

import { RocOpcPage } from './roc-opc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RocOpcPageRoutingModule
  ],
  declarations: [RocOpcPage]
})
export class RocOpcPageModule {}
