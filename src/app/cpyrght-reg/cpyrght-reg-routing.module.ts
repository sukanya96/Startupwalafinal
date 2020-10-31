import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpyrghtRegPage } from './cpyrght-reg.page';

const routes: Routes = [
  {
    path: '',
    component: CpyrghtRegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpyrghtRegPageRoutingModule {}
