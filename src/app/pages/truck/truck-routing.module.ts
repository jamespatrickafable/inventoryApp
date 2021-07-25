import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckinventoryPageModule } from '../truckinventory/truckinventory.module';
import { TruckstockoutPageModule } from '../truckstockout/truckstockout.module';

import { TruckPage } from './truck.page';

const routes: Routes = [
  {
    path: '',
    component: TruckPage
  },
  {
    path: 'truckinventory',
    loadChildren: () => import('../truckinventory/truckinventory.module').then( m => TruckinventoryPageModule)
  },
  {
    path: 'truckstockout',
    loadChildren: () => import('../truckstockout/truckstockout.module').then( m => TruckstockoutPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TruckPageRoutingModule {}
