import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TruckinventoryPageRoutingModule } from './truckinventory-routing.module';

import { TruckinventoryPage } from './truckinventory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TruckinventoryPageRoutingModule
  ],
  declarations: [TruckinventoryPage]
})
export class TruckinventoryPageModule {}
