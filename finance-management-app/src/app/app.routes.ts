import { Routes } from '@angular/router';
import { TransactionComponent } from "./transaction/transaction.component";
import { CategoryComponent } from "./category/category.component";
import { BudgetComponent } from "./budget/budget.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CategoryDetailComponent } from "./category-detail/category-detail.component";
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, title: 'home'},
  {path: '', component: TopBarComponent, outlet: 'top bar'},
  {path: 'about-us', component: AboutUsComponent, title: 'about us'},
  {path: 'transactions', component: TransactionComponent, title: 'transactions'},
  {path: 'categories', component: CategoryComponent, title: 'categories'},
  {path: 'budget', component: BudgetComponent, title: 'budget'},
  {path: 'categories/:id/transactions', component: CategoryDetailComponent, title: 'category detail'},
  {path: '**', component: NotFoundComponent, title: '404 Not Found'}
];

