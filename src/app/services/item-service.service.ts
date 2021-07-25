import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  DATA_STORAGE = 'data';

  constructor(public http: HttpClient) { }
  
  insertDataToLumen(code,item_name,item_price,item_stocks): Promise<any> {
    return new Promise((resolve,reject) => {
      const data = {
        code: code,
        item_name: item_name,
        item_price: item_price,
        item_stocks: item_stocks
      };
      this.http.put('http://localhost:8100/api/creation',data).subscribe(data=>{
        resolve(data);
      }, err =>{
        reject(err);
      });
    });
  }

  insertDataToRegister(ownername,address,contact,username,password): Promise<any> {
    return new Promise((resolve,reject) => {
      const data = {
        ownername: ownername,
        address: address,
        contact: contact,
        username: username,
        password:password
      };
      this.http.put('http://localhost:8100/api/users',data).subscribe(data=>{
        resolve(data);
      }, err =>{
        reject(err);
      });
    });
  }

getDataFromLumen(): Promise<any>{
    return new Promise((resolve, reject)=>{
      this.http.get("http://localhost:8100/api/item").subscribe(data=>{
        resolve(data);
    }, err=>{
      reject(err);
      });
    });
  }

  getDataFromtruck(): Promise<any>{
    return new Promise((resolve, reject)=>{
      this.http.get("http://localhost:8100/api/trucklist").subscribe(data=>{
        resolve(data);
    }, err=>{
      reject(err);
      });
    });
  }

  getDataItem(): Promise<any>{
    return new Promise((resolve, reject)=>{
      this.http.get("http://localhost:8100/api/item/{$id}").subscribe(data=>{
        resolve(data);
    }, err=>{
      reject(err);
      });
    });
  }

  insertDataToTruck(tname,dname): Promise<any> {
    return new Promise((resolve,reject) => {
      const data = {
        tname: tname,
        dname: dname,
      };
      this.http.put('http://localhost:8100/api/truck',data).subscribe(data=>{
        resolve(data);
      }, err =>{
        reject(err);
      });
    });
  }
  

}