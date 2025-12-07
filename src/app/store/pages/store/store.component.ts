import { Component, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  standalone: false,
})
export class StoreComponent implements OnInit {

  items: Models.Store.IItem[] = [];
  cargando: boolean = true;
  carrito: Models.Store.ICarrito = {
    items: [],
    total: 0
  };

  constructor() {
    this.loadItems();
    this.initCarrito();
  }

  ngOnInit() { }

  initCarrito() {
    this.carrito = {
      items: [],
      total: 0
    };
  }

  loadItems() {
    this.cargando = true;
    setTimeout(() => {
      this.items = [
        {
          id: '1',
          name: 'Item 1',
          price: 11.1,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
          image: './assets/images/Hamburguesa1.jpeg'
        },
        {
          id: '2',
          name: 'Item 2',
          price: 12.2,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
        {
          id: '3',
          name: 'Item 3',
          price: 13.3,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
          image: './assets/images/Hamburguesa3.jpeg'
        }
      ];
      this.cargando = false;
      console.log('Items loaded', this.items);
    }, 2000);
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

  getTotalItems() {
    return this.carrito.items.map((i) => i.cant).reduce((a, b) => a + b, 0);
  }

}
