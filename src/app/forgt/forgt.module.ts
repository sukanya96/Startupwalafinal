import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgtPageRoutingModule } from './forgt-routing.module';

import { ForgtPage } from './forgt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ForgtPageRoutingModule
  ],
  declarations: [ForgtPage]
})
export class ForgtPageModule {}
