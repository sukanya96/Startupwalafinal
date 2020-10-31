import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageBusinessPage } from './manage-business.page';

const routes: Routes = [
  {
    path: '',
    component: ManageBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageBusinessPageRoutingModule {}
