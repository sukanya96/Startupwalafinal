import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncCapitalPageRoutingModule } from './inc-capital-routing.module';

import { IncCapitalPage } from './inc-capital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncCapitalPageRoutingModule
  ],
  declarations: [IncCapitalPage]
})
export class IncCapitalPageModule {}
