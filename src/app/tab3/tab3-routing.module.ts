import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { TruckinventoryPageModule } from '../pages/truckinventory/truckinventory.module';
import { TruckstockoutPageModule } from '../pages/truckstockout/truckstockout.module';
import { StoresPageModule } from '../pages/stores/stores.module';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'truckinventory',
    loadChildren: () => import('../pages/truckinventory/truckinventory.module').then( m => TruckinventoryPageModule)
  },
  {
    path: 'truckstockout',
    loadChildren: () => import('../pages/truckstockout/truckstockout.module').then( m => TruckstockoutPageModule)
  },
  {
    path: 'stores',
    loadChildren: () => import('../pages/stores/stores.module').then( m => StoresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
