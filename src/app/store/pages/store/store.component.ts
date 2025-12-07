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
  constructor() {
    this.loadItems();
  }

  ngOnInit() { }

  loadItems() {
    this.cargando = true;
    setTimeout(() => {
      this.items = [
        {
          id: '1',
          name: 'Item 1',
          price: 10,
          description: 'Description 1',
          image: './assets/images/Hamburguesa1.jpeg'
        },
        {
          id: '2',
          name: 'Item 2',
          price: 20,
          description: 'Description 2',
        },
        {
          id: '3',
          name: 'Item 3',
          price: 30,
          description: 'Description 3',
          image: './assets/images/Hamburguesa3.jpeg'
        }
      ];
      this.cargando = false;
      console.log('Items loaded', this.items);
    }, 2000);
  }

}
