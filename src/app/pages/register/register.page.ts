import { Component, OnInit } from '@angular/core';
import {ItemServiceService} from '../../services/item-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  DATA_STORAGE = 'data';
  ownername="";
  address="";
  contact="";
  username="";
  pasword="";
  users :any [];

  constructor(public itemService: ItemServiceService, public toast:ToastController, public router: Router, public htttp: HttpClient) { }

  insertDataToRegister(){
    this.itemService.insertDataToRegister(this.ownername,this.address,this.contact,this.username,this.pasword).then(data =>{
      this.clearField();
    });  
  }

  clearField(){
    this.ownername="";
    this.address="";
    this.contact="";
    this.username="";
    this.pasword="";
  }

}
