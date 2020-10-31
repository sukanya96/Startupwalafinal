import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RocLlpPage } from './roc-llp.page';

const routes: Routes = [
  {
    path: '',
    component: RocLlpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RocLlpPageRoutingModule {}
