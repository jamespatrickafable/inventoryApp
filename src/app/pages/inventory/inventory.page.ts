import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {ItemServiceService} from '../../services/item-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';  

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
  items: any = [];

  constructor(public itemService: ItemServiceService, public toast:ToastController, public router: Router, public htttp: HttpClient) { }

  async ngOnInit() {
    this.getAllData();
  }

  getAllData(){
    this.itemService.getDataFromLumen().then(data => {
      this.items = data;
      console.log(data)
    });
  }

  getitem(){
    this.itemService.getDataItem().then(data => {
      this.items = data;
      console.log(data)
    });
  }

  

}
