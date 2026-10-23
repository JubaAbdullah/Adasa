import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Article } from '../../../../models/articles.models';
import { articles } from '../../../../data/articles';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NotFound } from '../../../not-found/not-found';
import { MasteryPhotograpghyWidth } from '../../../../shared/components/mastery-photograpghy-width/mastery-photograpghy-width';
import { MasteryPhotograpghyLength } from '../../../../shared/components/mastery-photograpghy-length/mastery-photograpghy-length';

@Component({
  selector: 'app-article-details',
  imports: [NotFound, RouterLink, MasteryPhotograpghyWidth, MasteryPhotograpghyLength],
  templateUrl: './article-details.html',
  styleUrl: './article-details.css',
})
export class ArticleDetails {

  constructor(private route : ActivatedRoute){}

  // ! Properities
  post  : Article | null = null;
  intro = "";
  sections : {title: string ; paragraph: string}[] = [];
  // table of content
  toc : {title : string}[] = [];
  shortDate = "";
  shortReadTime = "";
  relatedArticles : Article[] =[];
  allArticles: Article[] = articles;




  ngOnInit(): void{
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.resetView();
      if(!slug) return;
      const found = this.allArticles.find((a) => a.slug === slug) || null;
      if(!found) return;
      this.post = found; 
      const content = (this.post.content || "").trim();
      this.buildFormContent(content);
      this.buildRelated();
      window.scrollTo({top: 0 , behavior : "smooth"});
    })
  }

  private resetView(){
    this.post = null;
    this.intro = "";
    this.sections = [];
    this.toc = [];
    this.shortDate = "";
    this.shortReadTime = "";
    this.relatedArticles = [];
  }

  private buildFormContent(content : string){
    const parts = content.split("##");
    this.intro = (parts.shift() || "").trim();
    this.sections = parts.map(block => {
      const lines = block.split("\n");
      const title = (lines.shift() || "").trim();
      const paragraph = lines.join("\n").trim();
      return {title , paragraph};
    });
    this.toc = this.sections.map(s => ({title : s.title}));
  }

  private buildRelated(){
    if(!this.post) return;

    const currentPost  = this.post;

    this.relatedArticles = this.allArticles.filter(a => a.category === currentPost.category && a.slug !== currentPost.slug).slice(0,3);

  }










}
