import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Blog } from './page/blog/blog';
import { ArticleDetails } from './page/blog/components/article-details/article-details';
import { About } from './page/about/about';
import { NotFound } from './page/not-found/not-found';
import { Privacy } from './page/privacy/privacy';
import { Terms } from './page/terms/terms';

export const routes: Routes = [
    {path:"" , redirectTo:'home',pathMatch:"full"},
    {path:"home", component: Home , title:'الرئيسية'},
    {path:"blog", component: Blog , title:"المدونة"},
    {path:"blog/:slug" , component: ArticleDetails , title:"تفاصيل المقال"},
    {path:'about', component: About , title:"من نحن"},
    {path:'privacy', component: Privacy , title:"سياسة الخصوصية"},
    {path:'terms', component: Terms , title:"شروط الخدمة"},
    {path:"not-found", component: NotFound , title:"Not Found"},
    {path:"**", redirectTo:"not-found", pathMatch:'full'}
];
