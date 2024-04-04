import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TransactionComponent } from "./transaction/transaction.component";
import { CategoryComponent } from "./category/category.component";
import { BudgetComponent } from "./budget/budget.component";
import { CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, TransactionComponent, CategoryComponent, BudgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finance-management-app';
}
