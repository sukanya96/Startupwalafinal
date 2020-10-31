import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChgaddrPageRoutingModule } from './chgaddr-routing.module';

import { ChgaddrPage } from './chgaddr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChgaddrPageRoutingModule
  ],
  declarations: [ChgaddrPage]
})
export class ChgaddrPageModule {}
