import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageBusinessPageRoutingModule } from './manage-business-routing.module';

import { ManageBusinessPage } from './manage-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageBusinessPageRoutingModule
  ],
  declarations: [ManageBusinessPage]
})
export class ManageBusinessPageModule {}
