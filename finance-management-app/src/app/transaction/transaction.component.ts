import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Category, Transaction } from "../models";
import { TransactionService } from "../transaction.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})

export class TransactionComponent implements OnInit {
  @Input() categoryId: number = 0;

  transactions: Transaction[] = [];
  newTransaction: Transaction = {} as Transaction;
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  incomeTransactions: Transaction[] = [];
  expenseTransactions: Transaction[] = [];
  selectedType: 'income' | 'expense' = 'expense';
  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getTransactions();
    this.getCategories();
  }

  getTransactions(): void {
    this.transactionService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
      this.filterTransactionsByType();
    });
  }

  getCategories(): void {
    this.transactionService.getCategories().subscribe(categories => {
      this.categories = categories;
      this.filterCategories();
    });
  }

  createTransaction(): void {
    this.transactionService.createTransaction(this.newTransaction)
      .subscribe(transaction => {
        this.transactions.push(transaction);
        this.newTransaction = {} as Transaction;
        this.getCategories();
      });
  }

  deleteTransaction(id: number): void {
    this.transactionService.deleteTransaction(id).subscribe(() => {
      this.transactions = this.transactions.filter(transaction => transaction.id !== id);
      this.filterTransactionsByType();
    });
  }

  filterCategories(): void {
    this.filteredCategories = this.categories.filter(category => category.type === this.newTransaction.type);
  }

  filterTransactionsByType(): void {
    this.incomeTransactions = this.transactions.filter(transaction => transaction.type === 'income');
    this.expenseTransactions = this.transactions.filter(transaction => transaction.type === 'expense');
  }

  filterTransactionsBySelectedType(): void {
    if (this.selectedType === 'income') {
      this.filterTransactionsByType();
    }
    else {
      this.filterTransactionsByType();
    }
  }
}
