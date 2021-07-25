import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TruckstockoutPageRoutingModule } from './truckstockout-routing.module';

import { TruckstockoutPage } from './truckstockout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TruckstockoutPageRoutingModule
  ],
  declarations: [TruckstockoutPage]
})
export class TruckstockoutPageModule {}
