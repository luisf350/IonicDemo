import { Component, inject, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';
import { WebService } from 'src/app/services/web-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit {

  private webService = inject(WebService);
  articles:Models.Home.IArticulo[] = [];
  cargando:boolean = false;

  
  constructor() { }

  ngOnInit() { 
    this.getArticles();
  }

  async getArticles() {
    this.cargando = true;
    const response = await this.webService.request<Models.Home.IArticulo[]>('https://jsonplaceholder.typicode.com', 'posts', 'GET');
    console.log('data ->', response);
    if (response) {
      this.articles = response;
    }
    this.cargando = false;
  }


}

