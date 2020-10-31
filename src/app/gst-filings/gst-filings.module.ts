import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GstFilingsPageRoutingModule } from './gst-filings-routing.module';

import { GstFilingsPage } from './gst-filings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GstFilingsPageRoutingModule
  ],
  declarations: [GstFilingsPage]
})
export class GstFilingsPageModule {}
