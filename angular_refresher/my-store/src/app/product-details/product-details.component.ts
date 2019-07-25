import { Component, OnInit } from '@angular/core';
import { productsList } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('Obsevable params: ', params);
      this.product = productsList[+params.get('productId')];

      console.log('Product id: ', this.product);
    });
  }

  buyProduct(item) {
    this.cartService.addToCart(item).then(res => {
      window.alert('Your product has been added to the cart!');
      console.log('Product added: ', res);
    });
  }

}
