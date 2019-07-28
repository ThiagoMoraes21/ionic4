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
    if(value.name !== '' && value.address !== '' && this.items.length > 0) {
      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
    }else if(this.items.length == 0) {
      window.alert('Your cart is empty, please choose some product!');
    } else {
      window.alert('Please enter your name and address!');
    }
  }

  onRemove(itemIndex) {
    this.cartService.removeItem(itemIndex);
  }

}
