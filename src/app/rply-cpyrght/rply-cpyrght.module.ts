import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RplyCpyrghtPageRoutingModule } from './rply-cpyrght-routing.module';

import { RplyCpyrghtPage } from './rply-cpyrght.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RplyCpyrghtPageRoutingModule
  ],
  declarations: [RplyCpyrghtPage]
})
export class RplyCpyrghtPageModule {}
