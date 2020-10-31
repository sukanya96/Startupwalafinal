import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GstPageRoutingModule } from './gst-routing.module';

import { GstPage } from './gst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GstPageRoutingModule
  ],
  declarations: [GstPage]
})
export class GstPageModule {}
