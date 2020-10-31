import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpyrghtRegPageRoutingModule } from './cpyrght-reg-routing.module';

import { CpyrghtRegPage } from './cpyrght-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpyrghtRegPageRoutingModule
  ],
  declarations: [CpyrghtRegPage]
})
export class CpyrghtRegPageModule {}
