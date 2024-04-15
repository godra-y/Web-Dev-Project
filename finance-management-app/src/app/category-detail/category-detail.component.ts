import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { Category, Transaction } from "../models";
import { CategoryService } from "../category.service";
import { FormsModule } from "@angular/forms";
import { TransactionService } from "../transaction.service";
import {TopBarComponent} from "../top-bar/top-bar.component";

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    TopBarComponent
  ],
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.css'
})
export class CategoryDetailComponent implements OnInit{
  category: Category = {} as Category;
  transactions: Transaction[] = [];
  updatedCategory: string = '';

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private transactionService: TransactionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const categoryId = Number(params.get('id'));
        this.categoryService.getCategory(categoryId).subscribe((category) => {
          this.category = category;
          this.getTransactionsForCategory();
        });
      }
    });
  }

  getTransactionsForCategory(): void {
    this.transactionService.getTransactions().subscribe(transactions => {
      this.transactions = transactions.filter(transaction => transaction.category === this.category.name);
    });
  }

  updateCategoryName(): void {
    if (this.updatedCategory.trim() !== '') {
      this.categoryService.updateCategory(this.category.id, this.updatedCategory.trim()).subscribe(updatedCategory => {
        this.category.name = updatedCategory.name;
        this.updatedCategory = '';
      });
    }
  }

  deleteCategory(): void {
    if (confirm("Are you sure you want to delete this category?")) {
      this.categoryService.deleteCategory(this.category.id).subscribe(() => {
        this.router.navigate(['/categories']);
      });
    }
  }

  deleteTransaction(transactionId: number): void {
    this.transactionService.deleteTransaction(transactionId).subscribe(() => {
      this.transactions = this.transactions.filter(transaction => transaction.id !== transactionId);
    });
  }
}
