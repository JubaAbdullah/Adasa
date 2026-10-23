import { categories } from './../../../../data/articles';
import { Component } from '@angular/core';
import { DescribeSection } from '../../../../shared/components/describe-section/describe-section';
import { CategoryComponent } from '../../../../shared/components/category/category';
import { Category, Describe } from '../../../../models/articles.models';
import { describe } from '../../../../data/articles';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-secction-home',
  imports: [DescribeSection, CategoryComponent, RouterLink],
  templateUrl: './hero-secction-home.html',
  styleUrl: './hero-secction-home.css',
})
export class HeroSecctionHome {
  describes : Describe[] = describe;
  categories : Category[] = categories; 
}
