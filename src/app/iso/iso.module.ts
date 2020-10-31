import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsoPageRoutingModule } from './iso-routing.module';

import { IsoPage } from './iso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsoPageRoutingModule
  ],
  declarations: [IsoPage]
})
export class IsoPageModule {}
