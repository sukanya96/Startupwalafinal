import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RocReturnPage } from './roc-return.page';

const routes: Routes = [
  {
    path: '',
    component: RocReturnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RocReturnPageRoutingModule {}
