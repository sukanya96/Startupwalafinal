import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncCapitalPage } from './inc-capital.page';

const routes: Routes = [
  {
    path: '',
    component: IncCapitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncCapitalPageRoutingModule {}
