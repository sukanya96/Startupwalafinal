import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GstFilingsPage } from './gst-filings.page';

const routes: Routes = [
  {
    path: '',
    component: GstFilingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GstFilingsPageRoutingModule {}
