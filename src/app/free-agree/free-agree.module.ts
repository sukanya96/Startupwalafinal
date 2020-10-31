import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreeAgreePageRoutingModule } from './free-agree-routing.module';

import { FreeAgreePage } from './free-agree.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    FreeAgreePageRoutingModule
  ],
  declarations: [FreeAgreePage]
})
export class FreeAgreePageModule {}
