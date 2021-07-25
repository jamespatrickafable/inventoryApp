import { Injectable,Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
const {Camera, Filesystem, Storage} = Plugins;
import {ItemServiceService} from '../../services/item-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-stockin',
  templateUrl: './stockin.page.html',
  styleUrls: ['./stockin.page.scss'],
})

export class StockinPage  {  
    DATA_STORAGE = 'data';
    code="";
    item_name="";
    item_stocks="";
    item_price="";
    items :any [];
    
    constructor(public itemService: ItemServiceService, public toast:ToastController, public router: Router, public htttp: HttpClient) { }
 
     insertDataToLumen(){
      this.itemService.insertDataToLumen(this.code,this.item_name,this.item_price,this.item_stocks).then(data =>{
        this.clearField();
        this.getAllData();
      });
      
    }
     clearField(){
      this.code="";
       this.item_name='';
       this.item_price='';
       this.item_stocks='';
     }
     getAllData(){
      this.itemService.getDataFromLumen();
     }
}
