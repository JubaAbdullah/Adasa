import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isScrolled = false;
  @HostListener("window:scroll")
  onWindowScroll(){
    this.isScrolled = window.scrollY > 50;
  }
}
