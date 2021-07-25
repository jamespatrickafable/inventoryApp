import { Component , OnInit} from '@angular/core';
import { ToastController } from '@ionic/angular';
import {ItemServiceService} from '../services/item-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';  
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  truck: any = [];
  constructor(public itemService: ItemServiceService, public toast:ToastController, public router: Router, public htttp: HttpClient) { }

  async ngOnInit() {
    this.getAllTruck();
  }
  getAllTruck(){
    this.itemService. getDataFromtruck().then(data => {
      this.truck = data;
      console.log(data)
    });
  }

}
