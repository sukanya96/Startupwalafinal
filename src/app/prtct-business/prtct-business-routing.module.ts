import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrtctBusinessPage } from './prtct-business.page';

const routes: Routes = [
  {
    path: '',
    component: PrtctBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrtctBusinessPageRoutingModule {}
