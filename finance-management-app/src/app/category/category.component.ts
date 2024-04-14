import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Category } from "../models";
import { CategoryService } from "../category.service";
import { FormsModule } from "@angular/forms";
import {TopBarComponent} from "../top-bar/top-bar.component";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    TopBarComponent,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  categories: Category[] = [];
  newCategory: Category = {} as Category
  incomeCategories: Category [] = []
  expenseCategories: Category [] = []
  selectedType: 'income' | 'expense' | 'all' = 'expense';

  defaultImage = 'https://cdn-icons-png.freepik.com/512/9748/9748127.png'

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories
    });
  }

  createCategory(): void {
    this.categoryService.createCategory(this.newCategory).subscribe(category => {
      this.categories.push(category);
      this.newCategory = {} as Category;
      this.filterCategoriesByType();
    });
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.categories = this.categories.filter(category => category.id != id);
      this.filterCategoriesByType();
    })
  }

  filterCategoriesByType(): void {
    this.incomeCategories = this.categories.filter(categories => categories.type === 'income');
    this.expenseCategories = this.categories.filter(categories => categories.type === 'expense');
  }

  filterCategoryBySelectedType(): void {
    if (this.selectedType === 'income') {
      this.filterCategoriesByType();
    }
    else {
      this.filterCategoriesByType();
    }
  }

  showAllCategories(): void {
    this.selectedType = 'all';
    this.getCategories();
  }
}
