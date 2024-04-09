import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Transaction } from "./models";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URL: string = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.URL}/categories`)
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.URL}/categories/${id}`)
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.URL}/categories`, category);
  }

  updateCategory(id: number, updatedCategory: string): Observable<Category> {
    return this.http.put<Category>(`${this.URL}/categories/${id}`, {name: updatedCategory});
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`${this.URL}/categories/${id}`);
  }

  getTransactionsForCategory(categoryId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.URL}/categories/${categoryId}/transactions`);
  }
}
