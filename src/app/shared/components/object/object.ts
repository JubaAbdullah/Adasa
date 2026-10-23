import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { articles } from '../../../data/articles';

@Component({
  selector: 'app-object-shared',
  imports: [RouterLink],
  templateUrl: './object.html',
  styleUrl: './object.css',
})
export class ObjectComponent {
  constructor(private router : Router){}
  // ! Properites 
  categories = this.getCategories();
  // ! Function
  getCategories(){
    const map = new Map <string , number>();
    articles.forEach(article => {
      map.set(article.category , (map.get(article.category) || 0) + 1);
    });
    return Array.from(map.entries()).map(([category , count]) => ({
      category, count
    }))
  }

  goToCategory(categoryName : string ) {
    this.router.navigate(['/blog'], {queryParams :{category : categoryName}})
    .then(() => window.scrollTo({top: 0 , behavior:"smooth"}));
  }
}

