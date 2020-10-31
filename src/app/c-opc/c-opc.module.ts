import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { COpcPageRoutingModule } from './c-opc-routing.module';

import { COpcPage } from './c-opc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    COpcPageRoutingModule
  ],
  declarations: [COpcPage]
})
export class COpcPageModule {}
