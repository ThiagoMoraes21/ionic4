import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  public shippingCost: any;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getShipping();
  }

  getShipping() {
    this.shippingCost = this.cartService.getShippingPrices();
    return this.shippingCost;
  }

}
