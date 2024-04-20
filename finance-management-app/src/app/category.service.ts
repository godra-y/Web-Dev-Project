import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from "./models";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URL: string = 'http://127.0.0.1:8000/api'
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.URL}/categories/`)
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.URL}/categories/${id}/`)
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.URL}/categories/`, category);
  }

  updateCategory(id: number, updatedCategory: Category): Observable<Category> {
    return this.http.put<Category>(`${this.URL}/categories/${id}/`, updatedCategory);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`${this.URL}/categories/${id}/`);
  }
}
