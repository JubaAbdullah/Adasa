import { Component } from '@angular/core';
import { Describe } from '../../../../models/articles.models';
import { describe } from '../../../../data/articles';
import { DescribeSection } from '../../../../shared/components/describe-section/describe-section';

@Component({
  selector: 'app-hero-section-blog',
  imports: [DescribeSection],
  templateUrl: './hero-section-blog.html',
  styleUrl: './hero-section-blog.css',
})
export class HeroSectionBlog {
  describes : Describe[] = describe;
}
