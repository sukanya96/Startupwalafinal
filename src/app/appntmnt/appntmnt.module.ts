import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppntmntPageRoutingModule } from './appntmnt-routing.module';

import { AppntmntPage } from './appntmnt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppntmntPageRoutingModule
  ],
  declarations: [AppntmntPage]
})
export class AppntmntPageModule {}
