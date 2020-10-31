import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgtPage } from './forgt.page';

const routes: Routes = [
  {
    path: '',
    component: ForgtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgtPageRoutingModule {}
