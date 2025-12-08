import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: false,
})
export class ProductDetailComponent  implements OnInit {

  cantidad: number = 0;
  @Input()
  item: Models.Store.IItem;

  @Output() 
  addItemEvent = new EventEmitter<Models.Store.IItem>();

    @Output() 
  removeItemEvent = new EventEmitter<Models.Store.IItem>();

  constructor() { }

  ngOnInit() {
    console.log(this.item);
  }

  addItem() {
    this.cantidad++;
    this.addItemEvent.emit(this.item);
  }

  removeItem() {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.removeItemEvent.emit(this.item);
    }
  }

}
