import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResgntnPageRoutingModule } from './resgntn-routing.module';

import { ResgntnPage } from './resgntn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResgntnPageRoutingModule
  ],
  declarations: [ResgntnPage]
})
export class ResgntnPageModule {}
