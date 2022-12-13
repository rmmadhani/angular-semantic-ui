import { Component } from '@angular/core';
import { Article } from './article/article.model'; // <-- import this

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';

  
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
     console.log(`Adding article title: ${title.value} and link: ${link.value}`);
     return false;
     }
    }

