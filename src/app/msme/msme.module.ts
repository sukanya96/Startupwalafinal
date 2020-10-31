import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsmePageRoutingModule } from './msme-routing.module';

import { MsmePage } from './msme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MsmePageRoutingModule
  ],
  declarations: [MsmePage]
})
export class MsmePageModule {}
