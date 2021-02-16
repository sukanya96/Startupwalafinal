import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreimgPageRoutingModule } from './storeimg-routing.module';

import { StoreimgPage } from './storeimg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    StoreimgPageRoutingModule
  ],
  declarations: [StoreimgPage]
})
export class StoreimgPageModule {}
