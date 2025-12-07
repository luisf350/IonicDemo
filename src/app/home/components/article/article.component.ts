import { Component, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  standalone: false,
})
export class ArticleComponent implements OnInit {

  article: Models.Home.IArticle;

  constructor() { 
    this.loadArticle();
  }

  ngOnInit() { }

  loadArticle() {
    this.article = {
      id: '1',
      title: 'Angular',
      description: 'Angular es un framework para crear aplicaciones web',
      image: {
        url: 'https://angular.io/assets/images/logos/angular/angular.svg',
        desc: 'Angular'
      }
    };
  }

}