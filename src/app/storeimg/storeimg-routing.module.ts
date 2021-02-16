import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreimgPage } from './storeimg.page';

const routes: Routes = [
  {
    path: '',
    component: StoreimgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreimgPageRoutingModule {}
