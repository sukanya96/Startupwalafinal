import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CLlpPage } from './c-llp.page';

const routes: Routes = [
  {
    path: '',
    component: CLlpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CLlpPageRoutingModule {}
