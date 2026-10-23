import { Component } from '@angular/core';
import { DescribeSection } from '../../../../shared/components/describe-section/describe-section';
import { MasteryPhotograpghyWidth } from '../../../../shared/components/mastery-photograpghy-width/mastery-photograpghy-width';
import { Article, Describe } from '../../../../models/articles.models';
import { articles, describe } from '../../../../data/articles';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-selected-articles',
  imports: [DescribeSection, MasteryPhotograpghyWidth, RouterLink],
  templateUrl: './selected-articles.html',
  styleUrl: './selected-articles.css',
})
export class SelectedArticles {
  titles : Describe[] = describe;
  articles : Article[] = articles;
}
