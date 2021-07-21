import { BaseService } from './../base.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  products : Array<Product> = [];
  id : any;
  sub:Subscription;
  constructor(private b: BaseService, private active: ActivatedRoute, private router: Router) { 
    this.products = b.products;
    this.sub =this.active.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id')
  
    })
  }

  ngOnInit(): void {
  }
  delete(id : number){
    for (let index = 0; index < this.products.length; index++) {
      if(this.products[index].id == id){
        this.products.splice(index);
      }
    }
  }
}
