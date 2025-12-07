import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  standalone: false,
})
export class ArticleComponent implements OnInit {

  article: IArticle;

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

interface IArticle {
  id: string;  
  title: string;
  description: string;
  image: {
    url: string;
    desc: string;
    }
}
