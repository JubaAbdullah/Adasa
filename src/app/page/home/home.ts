import { Component } from '@angular/core';
import { HeroSecctionHome } from './components/hero-secction-home/hero-secction-home';
import { LatestArticles } from './components/latest-articles/latest-articles';
import { Object } from './components/object/object';
import { SelectedArticles } from './components/selected-articles/selected-articles';

@Component({
  selector: 'app-home',
  imports: [HeroSecctionHome, LatestArticles, Object, SelectedArticles],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
