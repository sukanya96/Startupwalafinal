import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppntmntPage } from './appntmnt.page';

const routes: Routes = [
  {
    path: '',
    component: AppntmntPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppntmntPageRoutingModule {}
