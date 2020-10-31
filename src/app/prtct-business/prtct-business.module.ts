import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrtctBusinessPageRoutingModule } from './prtct-business-routing.module';

import { PrtctBusinessPage } from './prtct-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrtctBusinessPageRoutingModule
  ],
  declarations: [PrtctBusinessPage]
})
export class PrtctBusinessPageModule {}
