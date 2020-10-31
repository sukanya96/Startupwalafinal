import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GstRegPageRoutingModule } from './gst-reg-routing.module';

import { GstRegPage } from './gst-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GstRegPageRoutingModule
  ],
  declarations: [GstRegPage]
})
export class GstRegPageModule {}
