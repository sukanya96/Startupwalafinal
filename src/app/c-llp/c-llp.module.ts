import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CLlpPageRoutingModule } from './c-llp-routing.module';

import { CLlpPage } from './c-llp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CLlpPageRoutingModule
  ],
  declarations: [CLlpPage]
})
export class CLlpPageModule {}
