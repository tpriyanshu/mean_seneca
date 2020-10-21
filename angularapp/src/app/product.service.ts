import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  serverUrl:string = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(`${this.serverUrl}/product/view`);
  }
  getProductsByCategory(category){
    return this.http.get(`${this.serverUrl}/product/filter?category=${category}`);
    //return this.http.get(`${this.serverUrl}/product/filter/${category}`);
  }
  getProductsByPrice(price){
    return this.http.get(`${this.serverUrl}/product/filter?price=${price}`);
  }
  addProduct(prodObj){
    return this.http.post(`${this.serverUrl}/product/add`,prodObj);
  }
}
