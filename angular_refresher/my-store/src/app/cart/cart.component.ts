import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public items: any[];
  public checkoutForm: any;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getItems();
    this.setupCheckoutForm();
  }

  getItems() {
    this.items = this.cartService.getItems();
  }

  setupCheckoutForm() {
    return new Promise((resolve, reject) => {
      resolve( this.checkoutForm = this.formBuilder.group({ name: '', address: ''}) );
    }).catch(err => {
      console.log('Error trying to setup checkout form: ', err);
    });
  }

  onSubmit(value) {
    console.log('User input: ', value);
    console.log('Selected products: ', this.items);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
