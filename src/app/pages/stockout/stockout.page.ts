import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import {ItemServiceService} from '../../services/item-service.service';
@Component({
  selector: 'app-stockout',
  templateUrl: './stockout.page.html',
  styleUrls: ['./stockout.page.scss'],
})
export class StockoutPage implements OnInit {
  DATA_STORAGE = 'data';
    tname="";
    dname="";
    truck :any [];

  constructor(public itemService: ItemServiceService,public htttp: HttpClient) { }
  async ngOnInit() {
    this.getAllData();
  }
  
  insertDataToTruck(){
    this.itemService.insertDataToTruck(this.tname,this.dname).then(data =>{
      this.clearField();
      this.getAllData();
    });
    
  }
   clearField(){
    this.tname="";
     this.dname='';
   }
   getAllData(){
    this.itemService.getDataFromtruck();
   }

}
