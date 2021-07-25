import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockoutPageModule } from '../stockout/stockout.module';
import { InventoryPage } from './inventory.page';

const routes: Routes = [
  {
    path: '',
    component: InventoryPage
  },
  {
    path: 'out',
    loadChildren: () => import('../stockout/stockout.module').then( m => StockoutPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryPageRoutingModule {}
