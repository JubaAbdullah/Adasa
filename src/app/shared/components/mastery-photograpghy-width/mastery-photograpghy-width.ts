import { Component, Input } from '@angular/core';
import { Article } from '../../../models/articles.models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mastery-photograpghy-width',
  imports: [RouterLink],
  templateUrl: './mastery-photograpghy-width.html',
  styleUrl: './mastery-photograpghy-width.css',
})
export class MasteryPhotograpghyWidth {
  @Input() article! : Article;
  
}
