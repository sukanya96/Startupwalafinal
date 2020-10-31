import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsmePage } from './msme.page';

const routes: Routes = [
  {
    path: '',
    component: MsmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsmePageRoutingModule {}
