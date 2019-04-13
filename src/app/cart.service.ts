import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // data for food
  private data = [
    {
      category: 'Sweets',
      expanded: true,
      products: [
        { id: 0, name: 'Skittles', price: '1'},
        { id: 1, name: 'Malteasers', price: '1'},
        { id: 2, name: 'Mintstrels', price: '1'}
      ]
    },
    {
      category: 'Popcorn',
      products: [
        { id: 3, name: 'Large', price: '4'},
        { id: 4, name: 'Medium', price: '3'},
        { id: 5, name: 'Small', price: '2'}
      ]
    },
    {
      category: 'Drink',
      products: [
        { id: 6, name: 'Coke', price: '4'},
        { id: 7, name: 'Fanta', price: '3'},
        { id: 8, name: 'Sprite', price: '2'}
      ]
    },
    {
    category: 'Deals',
    products: [
      { id: 9, name: 'Large Deal', price: '7'},
      { id: 10, name: 'Medium Deal', price: '6'},
      { id: 11, name: 'Small Deal', price: '75'},
    ]
  }
  ];

  private cart = [];

  constructor() { }

  getProducts(){
    return this.data;
  }
  getCart(){
    return this.cart;
  }
  addProduct(product){
    this.cart.push(product);
  }
  // Add remove function
}
