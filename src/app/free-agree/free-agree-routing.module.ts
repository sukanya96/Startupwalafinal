import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreeAgreePage } from './free-agree.page';

const routes: Routes = [
  {
    path: '',
    component: FreeAgreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreeAgreePageRoutingModule {}
