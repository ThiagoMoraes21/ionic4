import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];
  constructor(
    private http: HttpClient
  ) { }

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

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
