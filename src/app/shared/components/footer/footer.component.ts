import { Component, Inject, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';
import { CarritoService } from 'src/app/services/carrito-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false,
})
export class FooterComponent  implements OnInit {

  cant:number=0;
  private carritoService = Inject(CarritoService);

  constructor() { }

  ngOnInit() {

  }

}
