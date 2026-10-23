import { articles } from './../../../../data/articles';
import { Component, HostListener } from '@angular/core';
import { MasteryPhotograpghyLength } from '../../../../shared/components/mastery-photograpghy-length/mastery-photograpghy-length';
import { Article } from '../../../../models/articles.models';
import { ActivatedRoute } from '@angular/router';
import { MasteryPhotograpghyWidth } from '../../../../shared/components/mastery-photograpghy-width/mastery-photograpghy-width';

@Component({
  selector: 'app-articles',
  imports: [MasteryPhotograpghyLength, MasteryPhotograpghyWidth],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  constructor(private route : ActivatedRoute){}


  viewMode = "grid" ;
  setView(mode : string){
    this.viewMode = mode;
  }











  // !! scroll
   isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
 
 

 
  articles :  Article[] = articles;


  //patination logic

  //! Properities Patination

  allArticles : Article[] = articles;

  displayedArticles : Article[] = [];


  //Pages

  pageSize : number = 6;
  currentPage : number = 1;
  totalPages : number = 1;
  pages : number[] = [];

  //! Functions
  
  ngOnInit() :void{
    this.updatePaginationMeta();
    this.updateDisplayedArticles();
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      this.activeSlug = category || "all";
      this.currentPage = 1;
      this.applyFilters();
    })
    this.applyFilters();
  }


  updatePaginationMeta() : void{
    this.totalPages = Math.ceil(this.filteredArticles.length / this.pageSize);
    if(this.totalPages === 0){
      this.totalPages = 1;
    }
    this.pages = Array.from({length: this.totalPages} , (_ , i) => i + 1 );
  }
  updateDisplayedArticles() : void{
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedArticles = this.filteredArticles.slice(start, end);
  }
  goToPage(page : number): void{
    this.currentPage = page;
    this.updateDisplayedArticles();
    const section =document.getElementById("articles-section");
    section?.scrollIntoView({behavior: 'smooth'});
  }

  prev() : void {
    if(this.currentPage > 1){
      this.currentPage--
      this.updateDisplayedArticles();
    }
  }

  next() : void {
    if(this.currentPage < this.totalPages){
      this.currentPage++
      this.updateDisplayedArticles();
    }
  }


  //Filteration Logic
  
  
  //!  properties
  filters=[
    {label : "جميع المقالات" , slug: "all"},
    {label : "تقنيات" , slug: "تقنيات"},
    {label : "إضاءة" , slug: "إضاءة"},
    {label : "معدات" , slug: "معدات"},
    {label : "بورتريه" , slug: "بورتريه"},
    {label : "مناظر طبيعية" , slug: "مناظر طبيعية"},
  ];
  activeSlug : string = "all";
  filteredArticles : Article[] = [];

  // ? functions 
  setSlug(slug : string) : void {
    this.activeSlug = slug;
    this.currentPage = 1;
    this.applyFilters();
  }






  //? real time search
  //! properities
  searchTerm : string = "";


  //!fucntions
  onSearchInput(value : string):void{
    this.searchTerm = value;
    this.currentPage = 1;
    this.applyFilters();
  }
  applyFilters():void {
    const searchValue = this.searchTerm.toLowerCase().trim();
    this.filteredArticles = this.allArticles.filter(article => {
      const matchCategory = this.activeSlug === "all" || article.category === this.activeSlug;
      const fullText = (article.title + " " + article.excerpt + ' ' + article.author.name + " " + article.category).toLowerCase()
      const matchSearch = searchValue === '' || fullText.includes(searchValue);

      return matchCategory && matchSearch
    });
    this.updatePaginationMeta();
    this.updateDisplayedArticles();
  }

  //reset function
  resetFilters():void {
    this.searchTerm = "";
    this.activeSlug = "all";
    this.currentPage = 1 ;
    this.applyFilters();
  }

}
