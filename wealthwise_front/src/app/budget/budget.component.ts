import { Component, OnInit } from '@angular/core';
import { RouterLink} from "@angular/router";
import { TopBarComponent } from "../top-bar/top-bar.component";
import { Budget, Transaction } from "../models";
import { TransactionService } from "../transaction.service";
import { FormsModule } from "@angular/forms";
import { BudgetService } from "../budget.service";

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [
    RouterLink,
    TopBarComponent,
    FormsModule
  ],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent implements OnInit{
  transactions: Transaction[] = [];
  budget: Budget = { amount: 0, period: 'monthly' };
  totalIncome = 0;
  totalExpense = 0;
  remainingAmount = 0;

  constructor(
    private transactionService: TransactionService, private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getTransactions()
      .subscribe(transactions => {
        this.transactions = transactions;
        this.calculateBudgetSummary();
      });
  }

  calculateBudgetSummary(): void {
    this.totalIncome = this.transactions
      .filter(transaction => transaction.type === 'income')
      .reduce((acc, curr) => acc + curr.amount, 0);

    this.totalExpense = this.transactions
      .filter(transaction => transaction.type === 'expense')
      .reduce((acc, curr) => acc + curr.amount, 0);

    this.remainingAmount = this.totalIncome - this.totalExpense;
  }

  setBudget(): void {
    this.budgetService.setBudget(this.budget).subscribe((budget: Budget) =>
    {
      this.budget = budget;
      this.calculateBudgetSummary();
    });
  }
}
