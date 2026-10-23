import { Component } from '@angular/core';
import { HeroSectionAbout } from './components/hero-section-about/hero-section-about';
import { Teams } from './components/teams/teams';
import { Values } from './components/values/values';

@Component({
  selector: 'app-about',
  imports: [HeroSectionAbout, Teams, Values],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
