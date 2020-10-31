import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnershipPageRoutingModule } from './partnership-routing.module';

import { PartnershipPage } from './partnership.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnershipPageRoutingModule
  ],
  declarations: [PartnershipPage]
})
export class PartnershipPageModule {}
