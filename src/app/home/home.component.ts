import { BaseService } from './../base.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
id : number = 0;
name : string = '';
price : number = 0;
des: string = '';
products : Array<Product> = [];

  constructor(private b: BaseService) {
this.products = b.products;
   }

  ngOnInit(): void {
  }
create(){
  let pro :Product ={
    id: this.id,
    name: this.name,
    price: this.price,
    des: this.des
  }
  console.log(pro)
  this.products.push(pro);
  }
}
