import { BaseService } from './base.service';
import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'md5-b5-forms';

  products: Array<Product> = [];
  constructor(private b: BaseService ){
    this.products = b.products;
    console.log(b.products);
  }
}
