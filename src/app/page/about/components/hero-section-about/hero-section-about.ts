import { Component } from '@angular/core';
import { Category, Describe } from '../../../../models/articles.models';
import { categories, describe } from '../../../../data/articles';
import { DescribeSection } from '../../../../shared/components/describe-section/describe-section';
import { CategoryComponent } from '../../../../shared/components/category/category';

@Component({
  selector: 'app-hero-section-about',
  imports: [DescribeSection, CategoryComponent],
  templateUrl: './hero-section-about.html',
  styleUrl: './hero-section-about.css',
})
export class HeroSectionAbout {
  describes : Describe[] = describe;
  categories : Category[] = categories;
}
