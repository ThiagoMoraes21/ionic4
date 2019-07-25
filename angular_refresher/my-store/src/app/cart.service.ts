import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];
  constructor() { }

  addToCart(product) {
    return new Promise((resolve, reject) => {
      this.items.push(product);
      resolve(this.items);
    }).catch(err => {
      console.log('Err trying to add product to cart: ', err);
    });
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
