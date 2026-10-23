import { Component } from '@angular/core';
import { HeroSectionBlog } from './components/hero-section-blog/hero-section-blog';
import { Articles } from './components/articles/articles';

@Component({
  selector: 'app-blog',
  imports: [HeroSectionBlog, Articles],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {}
