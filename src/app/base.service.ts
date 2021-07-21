import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
   products: Array<Product> = [];

  constructor() { 
    let p1: Product={
      id: 1,
      name: "iphone",
      price: 200000,
      des: "dat vl"
    }
    let p2: Product={
      id: 2,
      name: "ipad",
      price: 18000,
      des: "dat vl luon"
    }
    this.products.push(p1,p2);
  
  }
}
