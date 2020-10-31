import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsoPage } from './iso.page';

const routes: Routes = [
  {
    path: '',
    component: IsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsoPageRoutingModule {}
