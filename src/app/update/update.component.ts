import { BaseService } from './../base.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id : any = 10;
  name : string = '';
  price : number = 0;
  des: string = '';
  products : Array<Product> = [];

  sub:Subscription;
  constructor(private b: BaseService, private active: ActivatedRoute, private router: Router) { 
    this.products = b.products;
    this.sub =this.active.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id')
    })
  }

  ngOnInit(): void {
  }
  update(){
    let pro :Product ={
      id: this.id,
      name: this.name,
      price: this.price,
      des: this.des
    }
    this.updateNow(this.id, pro);
  }
  updateNow(id : number, newProduct: Product ){
    for (let index = 0; index < this.products.length; index++) {
      if(this.products[index].id == id){
        this.products[index] = newProduct;
      }
    }
  }
}
