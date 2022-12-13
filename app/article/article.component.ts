import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  article: Article;

  constructor() {
    //this.article = new Article('Angular', 'http://angular.io', 10);
    // article is populated by the Input now,
    // so we don't need anything here
  }

  voteUp(): boolean {
    this.article.voteUp();

    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {}
}
