import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryPageModule } from '../inventory/inventory.module';
import { StockinPageModule } from '../stockin/stockin.module';
import { StockoutPageModule } from '../stockout/stockout.module';

import { WarehousePage } from './warehouse.page';

const routes: Routes = [
  {
    path: '',
    component: WarehousePage
  },
  {
    path: 'inventory',
    loadChildren: () => import('../inventory/inventory.module').then( m => InventoryPageModule)
  },
  {
    path: 'stockin',
    loadChildren: () => import('../stockin/stockin.module').then( m => StockinPageModule)
  },
  {
    path: 'stockout',
    loadChildren: () => import('../stockout/stockout.module').then( m => StockoutPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarehousePageRoutingModule {}
