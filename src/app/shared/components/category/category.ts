import { Component, Input } from '@angular/core';
import { Category } from '../../../models/articles.models';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [NgClass],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class CategoryComponent {
  @Input() category ! : Category;
}
