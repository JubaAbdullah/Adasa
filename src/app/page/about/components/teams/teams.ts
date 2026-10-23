import { Article, Describe } from '../../../../models/articles.models';
import { articles, describe } from './../../../../data/articles';
import { Component } from '@angular/core';
import { DescribeSection } from '../../../../shared/components/describe-section/describe-section';
import { Author } from '../../../../shared/components/author/author';
import { FooterAbout } from '../footer-about/footer-about';

@Component({
  selector: 'app-teams',
  imports: [DescribeSection, Author, FooterAbout],
  templateUrl: './teams.html',
  styleUrl: './teams.css',
})
export class Teams {
  describe  : Describe[] = describe;
  teams : Article[] = articles;
}
