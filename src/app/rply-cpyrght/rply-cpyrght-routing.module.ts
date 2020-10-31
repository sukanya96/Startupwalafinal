import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RplyCpyrghtPage } from './rply-cpyrght.page';

const routes: Routes = [
  {
    path: '',
    component: RplyCpyrghtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RplyCpyrghtPageRoutingModule {}
