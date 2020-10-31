import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnershipPage } from './partnership.page';

const routes: Routes = [
  {
    path: '',
    component: PartnershipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnershipPageRoutingModule {}
