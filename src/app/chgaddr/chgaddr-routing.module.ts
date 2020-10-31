import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChgaddrPage } from './chgaddr.page';

const routes: Routes = [
  {
    path: '',
    component: ChgaddrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChgaddrPageRoutingModule {}
