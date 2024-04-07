import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from "./models";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URL: string = 'http://localhost:3000/categories'
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.URL}`)
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.URL}/${id}`)
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.URL, category);
  }

  updateCategory(id: number, newName: string): Observable<Category> {
    return this.http.put<Category>(`${this.URL}/${id}`, {title: newName});
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`${this.URL}/${id}`);
  }
}
