import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './pages/home/home.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared-module';
import { ArticlePageComponent } from './pages/article-page/article-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    ArticleComponent,
    ArticlePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
    SharedModule
  ]
})
export class HomeModule { }
