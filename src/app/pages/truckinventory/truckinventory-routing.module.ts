import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TruckinventoryPage } from './truckinventory.page';

const routes: Routes = [
  {
    path: '',
    component: TruckinventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TruckinventoryPageRoutingModule {}
