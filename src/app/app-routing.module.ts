import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'warehouse',
    loadChildren: () => import('./pages/warehouse/warehouse.module').then( m => m.WarehousePageModule)
  },
  {
    path: 'stockout',
    loadChildren: () => import('./pages/stockout/stockout.module').then( m => m.StockoutPageModule)
  },
  {
    path: 'stockin',
    loadChildren: () => import('./pages/stockin/stockin.module').then( m => m.StockinPageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./pages/inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'truck',
    loadChildren: () => import('./pages/truck/truck.module').then( m => m.TruckPageModule)
  },
  {
    path: 'truckinventory',
    loadChildren: () => import('./pages/truckinventory/truckinventory.module').then( m => m.TruckinventoryPageModule)
  },
  {
    path: 'truckstockout',
    loadChildren: () => import('./pages/truckstockout/truckstockout.module').then( m => m.TruckstockoutPageModule)
  },
  {
    path: 'stores',
    loadChildren: () => import('./pages/stores/stores.module').then( m => m.StoresPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
