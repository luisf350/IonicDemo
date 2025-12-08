import { Injectable } from '@angular/core';
import { Models } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  carrito: Models.Store.ICarrito;

  constructor() {
    this.initCarrito();
  }

  private initCarrito() {
    this.carrito = {
      items: [],
      total: 0
    };
  }

  addItem(item: Models.Store.IItem) {
    console.log('Add item', item);
    if (this.carrito.items.find((i) => i.item.id === item.id)) {
      this.carrito.items.find((i) => i.item.id === item.id)!.cant += 1;
    } else {
      this.carrito.items.push({ item, cant: 1 });
    }
    this.carrito.total += item.price;
  }

  removeItem(item: Models.Store.IItem) {
    console.log('Remove item', item);
    if (this.carrito.items.find((i) => i.item.id === item.id)) {
      const itemIndex = this.carrito.items.findIndex((i) => i.item.id === item.id);
      if (this.carrito.items[itemIndex].cant > 1) {
        this.carrito.items[itemIndex].cant -= 1;
      } else {
        this.carrito.items.splice(itemIndex, 1);
      }
      this.carrito.total -= item.price;
    }
  }

  getTotal() {
    return this.carrito.total;
  }

  getTotalItems() {
    return this.carrito.items.map((i) => i.cant).reduce((a, b) => a + b, 0);
  }
}
