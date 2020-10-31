import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GstRegPage } from './gst-reg.page';

const routes: Routes = [
  {
    path: '',
    component: GstRegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GstRegPageRoutingModule {}
