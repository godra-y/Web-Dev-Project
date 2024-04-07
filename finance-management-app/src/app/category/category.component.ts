import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Category } from "../models";
import { CategoryService } from "../category.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CommonModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  categories: Category[] = [];
  typeItems: Category[] = [];
  newCategoryName: string = '';
  newCategoryType: 'income' | 'expense' = 'expense';
  selectedType: 'income' | 'expense' = 'expense';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories =>
      this.categories = categories
    );
  }

  createCategory(): void {
    const newCategory: Category = {
      id: 0,
      name: this.newCategoryName,
      type: this.newCategoryType
    };
    this.categoryService.createCategory(newCategory).subscribe(category => {
      this.categories.push(category);
      this.newCategoryName = '';
      this.filterCategories(this.selectedType);
    });
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe((response : Category) => {
      this.categories = this.categories.filter(a => a.id != id);
      this.filterCategories(this.selectedType);
    })
  }

  filterCategories(type: 'income' | 'expense') {
    this.selectedType = type;
    this.typeItems = this.categories.filter(category => category.type === type);
  }
}

