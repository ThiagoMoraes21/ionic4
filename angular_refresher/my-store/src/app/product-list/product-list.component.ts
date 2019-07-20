import { Component, OnInit } from '@angular/core';
import { productsList } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products = productsList;
  constructor() {}

  ngOnInit() {}

  share() {
    window.alert('You shared this product!');
  }

  onNotify() {
    window.alert('You will be notified when the produt goes on sale.');
  }
}
