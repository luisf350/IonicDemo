import { Component, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: false,
})
export class ProductDetailComponent  implements OnInit {

  carrito: Models.Store.ICarrito;
  item: Models.Store.IItem;
  pedidos: Models.Store.IPedido[];

  constructor() { }

  ngOnInit() {}

}
