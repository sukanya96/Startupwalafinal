import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClosurePageRoutingModule } from './closure-routing.module';

import { ClosurePage } from './closure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClosurePageRoutingModule
  ],
  declarations: [ClosurePage]
})
export class ClosurePageModule {}
