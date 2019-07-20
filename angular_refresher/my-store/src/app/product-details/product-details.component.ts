import { Component, OnInit } from '@angular/core';
import { productsList } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('Obsevable params: ', params);
      this.product = productsList[+params.get('productId')];

      console.log('Product id: ', this.product);
    });
  }

}
