import { Component } from '@angular/core';
import { Article, Describe } from '../../../../models/articles.models';
import { articles, describe } from '../../../../data/articles';
import { DescribeSection } from '../../../../shared/components/describe-section/describe-section';
import { RouterLink } from '@angular/router';
import { MasteryPhotograpghyLength } from '../../../../shared/components/mastery-photograpghy-length/mastery-photograpghy-length';

@Component({
  selector: 'app-latest-articles',
  imports: [DescribeSection, RouterLink, MasteryPhotograpghyLength],
  templateUrl: './latest-articles.html',
  styleUrl: './latest-articles.css',
})
export class LatestArticles {
  titles : Describe[] = describe;
  articles : Article[] = articles;  
}
