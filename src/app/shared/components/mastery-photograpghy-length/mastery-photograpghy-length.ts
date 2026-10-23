import { Component, Input } from '@angular/core';
import { Article } from '../../../models/articles.models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mastery-photograpghy-length',
  imports: [RouterLink],
  templateUrl: './mastery-photograpghy-length.html',
  styleUrl: './mastery-photograpghy-length.css',
})
export class MasteryPhotograpghyLength {
@Input() article! : Article;
@Input() layout = 'list';
}
