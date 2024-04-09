import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { Category, Transaction } from "../models";
import { CategoryService } from "../category.service";
import { FormsModule } from "@angular/forms";
import {TransactionComponent} from "../transaction/transaction.component";
import {TransactionService} from "../transaction.service";

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    TransactionComponent,
  ],
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.css'
})
export class CategoryDetailComponent implements OnInit{
  category: Category = {} as Category;
  updatedCategory: string = '';
  transactions: Transaction[] = [];

  //constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }
  constructor(
    private categoryService: CategoryService,
    private transactionService: TransactionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const categoryId = Number(params.get('id'));
        this.categoryService.getCategory(categoryId).subscribe((category) => {
          this.category = category;
          this.getTransactionsForCategory(categoryId);
        });
      }
    });
  }

  updateTitle() {
    this.categoryService.updateCategory(this.category.id, this.updatedCategory).subscribe((response) => {
      this.category.name = response.name;
      this.updatedCategory = "";
    })
  }

  getTransactionsForCategory(categoryId: number): void {
    this.transactionService.getTransactions().subscribe(transactions => {
      this.transactions = transactions.filter(transaction => transaction.category === this.category.name);
    });
  }

  // getTransactionsForCategory(categoryId: number): void {
  //   this.categoryService.getTransactionsForCategory(categoryId).subscribe(transactions => {
  //     this.transactions = transactions;
  //   });
  // }
}
