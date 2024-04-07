import { Routes } from '@angular/router';
import { TransactionComponent } from "./transaction/transaction.component";
import { CategoryComponent } from "./category/category.component";
import { BudgetComponent } from "./budget/budget.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CategoryDetailComponent } from "./category-detail/category-detail.component";

export const routes: Routes = [
  {path: '', redirectTo: 'transactions', pathMatch: 'full'},
  {path: 'transactions', component: TransactionComponent, title: 'Transactions'},
  {path: 'categories', component: CategoryComponent, title: 'Categories'},
  {path: 'budget', component: BudgetComponent, title: 'Budget'},
  {path: 'category/:id', component: CategoryDetailComponent, title: 'Category detail'},
  {path: '**', component: NotFoundComponent, title: '404 Not Found'}
];

