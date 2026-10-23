import { Component, Input } from '@angular/core';
import { Article } from '../../../models/articles.models';

@Component({
  selector: 'app-author',
  imports: [],
  templateUrl: './author.html',
  styleUrl: './author.css',
})
export class Author {
  @Input() author! : Article;
}
